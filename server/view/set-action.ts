"use server";

import { EditIssueProps, ViewPortType } from "@/types";
import { del } from "@vercel/blob";

import { FramesFormPropsValue, IssuesFormPropsValue } from "@/config/items-add";
import { prisma } from "@/lib/database";
import { getCurrentStaff } from "@/lib/session";

import { utapi } from "../uploadthing";

export async function approveItems(
  itemIds: string[],
  tableName: "pendingFrames" | "pendingIssues" | "pendingFonts"
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
  tableName: "pendingFrames" | "pendingIssues" | "pendingFonts",
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

export async function deleteItems(
  viewPortId: ViewPortType,
  items: { id: string; image: string }[],
  password: string
) {
  if (items.length == 0) return { message: "No item selected." };
  const currentUser = await getCurrentStaff();

  if (password !== "iu-delete-items") {
    throw new Error("Items were not deleted. Incorrect password.");
  }

  if (["issues", "frames"].includes(viewPortId)) {
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

  if (viewPortId.includes("released")) {
    if (viewPortId === "released-issues") {
      await prisma.issues.deleteMany({
        where: itemsIds,
      });
    } else if (viewPortId === "released-frames") {
      await prisma.frames.deleteMany({
        where: itemsIds,
      });
    } else {
      await prisma.fonts.deleteMany({
        where: itemsIds,
      });
    }
  } else {
    if (viewPortId === "pending-issues") {
      await prisma.pendingIssues.deleteMany({
        where: itemsIds,
      });
    } else if (viewPortId === "pending-frames") {
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

export async function editItems({ viewPortId, issue }: EditIssueProps) {
  if (viewPortId.includes("issues")) {
    return editIssue({ viewPortId, issue });
  } else {
    return editFrame({ viewPortId, issue });
  }
}

export async function editIssue({ viewPortId, issue }: EditIssueProps) {
  const currentUser = await getCurrentStaff();

  issue = issue as IssuesFormPropsValue & {
    imageLink: string;
    changedImage: boolean;
  };

  if (issue.changedImage) {
    const deleteImage = await utapi.deleteFiles([
      issue.imageLink.split("/").pop()!,
    ]);

    if (!deleteImage.success) {
      throw new Error(
        "Issue was not Edited. An error occurred while deleting the image."
      );
    }

    const response = await utapi.uploadFiles(issue.image);

    if (response.error?.code || !response.data) {
      throw new Error(
        "Issue was not Edited. An error occurred while uploading the image."
      );
    }

    issue.imageLink = response.data.url;
  }

  let edited;
  const data = {
    name: issue.name,
    group: issue.group,
    act: issue.act,
    rarity: issue.rarity,
    code: issue.code,
    image: issue.imageLink,
  };
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

  if (viewPortId === "released-issues") {
    edited = await prisma.issues.update({
      where: {
        id: issue.id,
      },
      data,
      include,
    });

    return {
      message: "Issue was successfully Edited.",
      issue: edited,
    };
  } else {
    edited = await prisma.pendingIssues.update({
      where: {
        id: issue.id,
      },
      data,
      include,
    });
  }

  return {
    message: "Issue was successfully Edited.",
    item: edited,
  };
}

export async function editFrame({ viewPortId, issue }: EditIssueProps) {
  const currentUser = await getCurrentStaff();

  const frame = issue as FramesFormPropsValue & {
    imageLink: string;
    changedImage: boolean;
  };

  if (frame.changedImage) {
    const deleteImage = await utapi.deleteFiles([
      frame.imageLink.split("/").pop()!,
    ]);

    if (!deleteImage.success) {
      throw new Error(
        "Frame was not Edited. An error occurred while deleting the image."
      );
    }

    const response = await utapi.uploadFiles(frame.image);

    if (response.error?.code || !response.data) {
      throw new Error(
        "Frame was not Edited. An error occurred while uploading the image."
      );
    }

    frame.imageLink = response.data.url;
  }

  let edited;
  let data = {
    name: frame.name,
    rarity: frame.rarity,
    code: frame.code,
    image: frame.imageLink,
  };
  let include = {
    createdBy: true,
    approvedBy: true,
    rejections: {
      include: {
        rejectedBy: true,
        resubmittedBy: true,
      },
    },
  };

  if (viewPortId === "released-frames") {
    edited = await prisma.frames.update({
      where: {
        id: frame.id,
      },
      data,
      include,
    });
  } else {
    edited = await prisma.pendingFrames.update({
      where: {
        id: frame.id,
      },
      data,
      include,
    });
  }

  return {
    message: "Frame was successfully Edited.",
    item: edited,
  };
}
