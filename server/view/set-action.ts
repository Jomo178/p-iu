"use server";

import { FrameRarity, Prisma } from "@prisma/client";
import { del, put } from "@vercel/blob";

import {
  EditItemsProps,
  ItemsNameType,
  ItemsPendingType,
  ItemStatusViewType,
  ItemType,
} from "@/types/items";
import { prisma } from "@/lib/database";
import { getCurrentStaff } from "@/lib/session";
import { toUpperCase } from "@/lib/utils";

import { utapi } from "../uploadthing";

export async function approveItems(
  itemIds: string[],
  tableName: ItemsPendingType
) {
  const currentUser = await getCurrentStaff();

  try {
    await prisma.$transaction([
      (prisma[tableName] as any).updateMany({
        where: {
          id: {
            in: itemIds,
          },
        },
        data: {
          approvedAt: new Date(),
          approvedById: currentUser.staff.id,
        },
      }),
    ]);

    return {
      message: `Items approved successfully.`,
    };
  } catch (error) {
    console.error(`Error approving items in table ${tableName}:`, error);
    return {
      message: `Failed to approve some or all Items.`,
    };
  }
}

export async function rejectItems(
  itemIds: string[],
  tableName: ItemsPendingType,
  reason: string
) {
  const currentUser = await getCurrentStaff();

  await prisma.rejections.createMany({
    data: itemIds.map((id) => ({
      reason,
      [`${tableName}Id`]: id,
      rejectedById: currentUser.staff!.id,
    })),
  });

  return {
    message: `Items rejected successfully.`,
  };
}

export async function resubmitRejectedItems(
  itemIds: string[],
  tableName: "pendingFrames" | "pendingIssues" | "pendingFonts"
) {
  const currentUser = await getCurrentStaff();

  try {
    await prisma.$transaction([
      prisma.rejections.updateMany({
        where: {
          [`${tableName}Id`]: {
            in: itemIds,
          },
        },
        data: {
          resubmitted: true,
          resubmittedById: currentUser.staff.id,
        },
      }),
    ]);

    return {
      message: `Items resubmitted successfully.`,
    };
  } catch (error) {
    console.error(`Error resubmitting items in table ${tableName}:`, error);
    return {
      message: `Failed to resubmit some or all Items.`,
    };
  }
}

export async function deleteItems<T extends ItemsNameType>(
  itemsViewPortId: ItemStatusViewType<T>,
  items: { id: string; image: string }[],
  password: string
) {
  if (items.length == 0) return { message: "No item selected." };
  const currentUser = await getCurrentStaff();

  if (password !== "iu-delete-items") {
    throw new Error("Items were not deleted. Incorrect password.");
  }

  if (["issues", "frames"].includes(itemsViewPortId)) {
    await utapi.deleteFiles(
      items
        .map((item) => item.image.split("/").pop())
        .filter((image): image is string => !!image)
    );
  } else {
    await del(items.map((item) => item.image));
  }

  const itemsIds = {
    id: {
      in: items.map((item) => item.id),
    },
  };

  if (itemsViewPortId.includes("released")) {
    if (itemsViewPortId === "released-issues") {
      await prisma.issues.deleteMany({
        where: itemsIds,
      });
    } else if (itemsViewPortId === "released-frames") {
      await prisma.frames.deleteMany({
        where: itemsIds,
      });
    } else {
      await prisma.fonts.deleteMany({
        where: itemsIds,
      });
    }
  } else {
    if (itemsViewPortId === "pending-issues") {
      await prisma.pendingIssues.deleteMany({
        where: itemsIds,
      });
    } else if (itemsViewPortId === "pending-frames") {
      await prisma.pendingFrames.deleteMany({
        where: itemsIds,
      });
    } else {
      await prisma.pendingFonts.deleteMany({
        where: itemsIds,
      });
    }
  }

  return {
    message: "Items deleted successfully.",
  };
}

export async function editItems<T extends ItemsNameType>({
  itemsViewPortId,
  item,
}: EditItemsProps<T>) {
  const currentUser = await getCurrentStaff();
  const items = itemsViewPortId.split("-")[1] as T;

  if (item.changedImage) {
    const deleteImage = await deleteItems(
      itemsViewPortId,
      [{ id: item.id, image: item.imageLink }],
      "iu-delete-items"
    );

    if (!deleteImage.message) return { message: "Item was not Edited" };
    if (itemsViewPortId.includes("fonts")) {
      const blob = await put("fonts/" + item.name, item.image, {
        access: "public",
        contentType: "application/oft",
      });

      item.imageLink = blob.url;
    } else {
      const response = await utapi.uploadFiles(item.image);

      if (response.error?.code || !response.data) {
        throw new Error(
          "Issue was not Edited. An error occurred while uploading the image."
        );
      }

      item.imageLink = response.data.url;
    }
  }

  let edited;
  let data = {};
  const include = {
    createdBy: true,
    approvedBy: true,
    rejections: {
      include: {
        rejectedBy: true,
        resubmittedBy: true,
      },
    },
  };

  if (items == "issues" && "act" in item) {
    const issueData: Prisma.IssuesUpdateInput = {
      name: item.name,
      group: item.group,
      act: item.act,
      rarity: item.rarity,
      code: item.code,
      image: item.imageLink,
    };
    data = issueData;
  } else if (items == "frames" && "code" in item) {
    const frameData: Prisma.FramesUpdateInput = {
      name: item.name,
      rarity: item.rarity as FrameRarity,
      code: item.code,
      image: item.imageLink,
    };
    data = frameData;
  } else if (items == "fonts" && "price" in item) {
    const fontData: Prisma.FontsUpdateInput = {
      name: item.name,
      price: item.price,
      short: item.shortName,
      onMarket: item.onMarket,
      isBig: item.isBig,
      filePath: item.imageLink,
    };
    data = fontData;
  }

  if (itemsViewPortId.includes("released")) {
    edited = await (prisma[items] as any).update({
      where: {
        id: item.id,
      },
      data,
      include,
    });
  } else {
    const pendingItems = `pending${toUpperCase(items)}` as ItemsPendingType;
    edited = await (prisma[pendingItems] as any).update({
      where: {
        id: item.id,
      },
      data,
      include,
    });
  }

  return {
    message: `${items} edited successfully.`,
    editedItem: edited as ItemType<T>[0] | ItemType<T>[1],
  };
}
