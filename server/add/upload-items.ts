"use server";

import { EventType, FrameRarity } from "@prisma/client";

import {
  framesSchema,
  issuesSchema,
  ItemsFormPropsValue,
} from "@/config/items-add";
import { prisma } from "@/lib/database";
import { getCurrentStaff } from "@/lib/session";

import { getCurrentEvent } from "../events/_action";
import { utapi } from "../uploadthing";

export async function UploadItems(
  itemType: `${EventType}`,
  item: ItemsFormPropsValue
): Promise<{ variant: "success" | "error"; message: string }> {
  const currentUser = await getCurrentStaff();

  const parsedIssue =
    itemType === "issues"
      ? issuesSchema.safeParse(item)
      : framesSchema.safeParse(item);

  if (!parsedIssue.success) {
    return {
      message:
        "was not uploaded to the server. Please check the form for errors.",
      variant: "error",
    };
  }

  const currentEvent = await getCurrentEvent([itemType]);
  if (!currentEvent) {
    return {
      message: "was not uploaded to the server. No event is currently active.",
      variant: "error",
    };
  }

  const response = await utapi.uploadFiles(item.image);

  if (response.error?.code || !response.data) {
    return {
      message:
        "was not uploaded to the server. An error occurred while uploading the image.",
      variant: "error",
    };
  }

  let createdPendingItem;

  if (itemType === "issues" && "act" in item) {
    createdPendingItem = await prisma.pendingIssues.create({
      data: {
        name: item.name,
        act: item.act,
        group: item.group,
        code: item.code,
        rarity: item.rarity,
        image: response.data?.url,
        createdById: currentUser.staff.id,
        eventId: currentEvent.id,
      },
    });
  } else {
    createdPendingItem = await prisma.pendingFrames.create({
      data: {
        name: item.name,
        code: item.code,
        rarity: item.rarity as FrameRarity,
        image: response.data?.url,
        createdById: currentUser.staff.id,
        eventId: currentEvent.id,
      },
    });
  }

  return {
    message: "was successfully uploaded to the server!",
    variant: "success",
  };
}

export async function checkDuplicateItemsCode(
  codes: string[],
  itemType: `${EventType}`
) {
  let items = [];
  let pendingItems = [];

  if (itemType === "issues") {
    pendingItems = await prisma.pendingIssues.findMany({
      where: {
        code: {
          in: codes,
        },
      },
    });

    items = await prisma.issues.findMany({
      where: {
        code: {
          in: codes,
        },
      },
    });
  } else {
    pendingItems = await prisma.pendingFrames.findMany({
      where: {
        code: {
          in: codes,
        },
      },
    });

    items = await prisma.frames.findMany({
      where: {
        code: {
          in: codes,
        },
      },
    });
  }

  const duplicateCodes = codes
    .filter((code, index) => codes.indexOf(code) !== index)
    .map((code) => ({ code }));

  return [...items, ...pendingItems, ...duplicateCodes].map(
    (item) => item.code
  );
}
