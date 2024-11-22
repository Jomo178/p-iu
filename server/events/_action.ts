"use server";

import { Events, EventType } from "@prisma/client";

import { prisma } from "@/lib/database";
import { getCurrentStaff, getCurrentUser } from "@/lib/session";

export async function getCurrentEvent(type: EventType[]) {
  const event = await prisma.events.findFirst({
    where: {
      type: {
        hasSome: type,
      },
      start: {
        lte: new Date(),
      },
      end: {
        gt: new Date(),
      },
    },
    orderBy: {
      start: "desc",
    },
  });

  return event;
}

export async function getEvents(type?: EventType[] | undefined) {
  const events = await prisma.events.findMany({
    where: {
      type: type ? { hasSome: type } : undefined,
    },
    orderBy: {
      start: "asc",
    },
    include: {
      createdBy: true,
    },
  });

  return events;
}

export async function createEvent(
  data: Omit<
    Events,
    "id" | "createdAt" | "createdBy" | "updatedAt" | "createdById"
  >
) {
  const currentUser = await getCurrentStaff();

  const event = await prisma.events.create({
    data: {
      ...data,
      createdById: currentUser.staff.id,
    },
    include: {
      createdBy: true,
    },
  });

  return {
    message: "Event created successfully",
    data: event,
  };
}
