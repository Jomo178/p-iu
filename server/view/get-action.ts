"use server";

import { ViewPortType } from "@/types";
import { EventType } from "@prisma/client";
import { del } from "@vercel/blob";

import {
  FontsWithRelation,
  FramesWithRelation,
  IssuesWithRelation,
  PendingFontsWithRelation,
  PendingFramesWithRelation,
  PendingIssuesWithRelation,
} from "@/types/prisma";
import { prisma } from "@/lib/database";
import { getCurrentStaff } from "@/lib/session";

import { utapi } from "../uploadthing";

type ReleasedItemReturnType<T extends EventType> = T extends "issues"
  ? IssuesWithRelation[]
  : T extends "frames"
    ? FramesWithRelation[]
    : T extends "fonts"
      ? FontsWithRelation[]
      : never;

type PendingItemReturnType<T extends EventType> = T extends "issues"
  ? PendingIssuesWithRelation[]
  : T extends "frames"
    ? PendingFramesWithRelation[]
    : T extends "fonts"
      ? PendingFontsWithRelation[]
      : never;

export async function getPendingItems<T extends `${EventType}`>(
  itemType: T,
  skip: number,
  amount: number,
  filter: any,
  orderBy: any
): Promise<PendingItemReturnType<T>> {
  const whereObj = {
    skip,
    take: amount,
    where: {
      ...filter,
      rejections: {
        every: {
          resubmitted: true,
        },
      },
      approvedBy: null,
    },
    orderBy,
    include: {
      createdBy: true,
      approvedBy: true,
      event: true,
      rejections: {
        include: {
          rejectedBy: true,
          resubmittedBy: true,
        },
      },
    },
  };
  return (await PendingItemsSwitch(
    whereObj,
    itemType
  )) as PendingItemReturnType<T>;
}

export async function getRejectedItems<T extends `${EventType}`>(
  itemType: T,
  skip: number,
  amount: number,
  filter: any,
  orderBy: any
): Promise<PendingItemReturnType<T>> {
  const whereObj = {
    skip,
    take: amount,
    where: {
      ...filter,
      rejections: {
        some: {
          resubmitted: false,
        },
      },
    },
    orderBy,
    include: {
      createdBy: true,
      approvedBy: true,
      event: true,
      rejections: {
        include: {
          rejectedBy: true,
          resubmittedBy: true,
        },
      },
    },
  };

  return (await PendingItemsSwitch(
    whereObj,
    itemType
  )) as PendingItemReturnType<T>;
}

export async function getUpcomingItems<T extends `${EventType}`>(
  itemType: T,
  skip: number,
  amount: number,
  filter: any,
  orderBy: any
): Promise<ReleasedItemReturnType<T>> {
  const whereObj = {
    skip,
    take: amount,
    where: {
      ...filter,
      approvedBy: {
        id: {
          not: undefined,
        },
      },
    },
    orderBy,
    include: {
      createdBy: true,
      approvedBy: true,
      event: true,
      rejections: {
        include: {
          rejectedBy: true,
          resubmittedBy: true,
        },
      },
    },
  };

  return (await PendingItemsSwitch(
    whereObj,
    itemType
  )) as ReleasedItemReturnType<T>;
}

export async function getReleasedItems<T extends `${EventType}`>(
  itemType: T,
  skip: number,
  amount: number,
  filter: any,
  orderBy: any
): Promise<ReleasedItemReturnType<T>> {
  const whereObj = {
    skip,
    take: amount,
    where: {
      ...filter,
    },
    orderBy,
    include: {
      createdBy: true,
      approvedBy: true,
      event: true,
      rejections: {
        include: {
          rejectedBy: true,
          resubmittedBy: true,
        },
      },
    },
  };

  return (await ReleasedItemsSwitch(
    whereObj,
    itemType
  )) as ReleasedItemReturnType<T>;
}

async function ReleasedItemsSwitch(whereObj: any, itemType: EventType) {
  switch (itemType) {
    case "issues":
      return await prisma.issues.findMany(whereObj);
    case "frames":
      return await prisma.frames.findMany(whereObj);
    case "fonts":
      return await prisma.fonts.findMany(whereObj);
  }
}

async function PendingItemsSwitch(whereObj: any, itemType: EventType) {
  switch (itemType) {
    case "issues":
      return await prisma.pendingIssues.findMany(whereObj);
    case "frames":
      return await prisma.pendingFrames.findMany(whereObj);
    case "fonts":
      return await prisma.pendingFonts.findMany(whereObj);
  }
}
