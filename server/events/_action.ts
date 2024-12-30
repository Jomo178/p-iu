"use server";

import { Events, EventType, Prisma } from "@prisma/client";

import { prisma } from "@/lib/database";
import { getCurrentStaff, getCurrentUser } from "@/lib/session";

export async function getCurrentEvent(type: EventType[]) {
  const futureEvent = await prisma.events.findFirst({
    where: {
      type: {
        hasSome: type,
      },
      start: { gt: new Date() },
    },
    orderBy: {
      start: "asc",
    },
  });

  if (futureEvent) return futureEvent;

  const ongoingEvent = await prisma.events.findFirst({
    where: {
      type: {
        hasSome: type,
      },
      start: { lte: new Date() },
      end: { gt: new Date() },
    },
    orderBy: {
      start: "asc",
    },
  });

  return ongoingEvent;
}

export async function getAllEvents(type?: EventType[] | undefined) {
  const events = await prisma.events.findMany({
    where: {
      type: type ? { hasSome: type } : undefined,
    },
    orderBy: {
      start: "desc",
    },
    include: {
      createdBy: true,
      issues: true,
      frames: true,
      fonts: true,
      pendingFrames: {
        where: {
          rejections: {
            every: {
              resubmitted: true,
            },
          },
        },
      },
      pendingIssues: {
        where: {
          rejections: {
            every: {
              resubmitted: true,
            },
          },
        },
      },
      pendingFonts: {
        where: {
          rejections: {
            every: {
              resubmitted: true,
            },
          },
        },
      },
    },
  });

  return events;
}

export async function getEvents<T extends Prisma.EventsSelect>(
  type?: EventType[] | undefined,
  select?: T
): Promise<Prisma.EventsGetPayload<{ select: T }>[]> {
  const events = await prisma.events.findMany({
    where: {
      type: type ? { hasSome: type } : undefined,
    },
    orderBy: {
      name: "asc",
    },
    select,
  });

  return events as Prisma.EventsGetPayload<{ select: T }>[];
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
      issues: true,
      frames: true,
      fonts: true,
      pendingFrames: {
        where: {
          rejections: {
            every: {
              resubmitted: true,
            },
          },
        },
      },
      pendingIssues: {
        where: {
          rejections: {
            every: {
              resubmitted: true,
            },
          },
        },
      },
      pendingFonts: {
        where: {
          rejections: {
            every: {
              resubmitted: true,
            },
          },
        },
      },
    },
  });

  return {
    message: "Event created successfully",
    data: event,
  };
}

export async function editEvent(
  id: string,
  data: Omit<
    Events,
    "id" | "createdAt" | "createdBy" | "updatedAt" | "createdById"
  >
) {
  const event = await prisma.events.update({
    where: {
      id,
    },
    data: {
      ...data,
    },
    include: {
      createdBy: true,
      issues: true,
      frames: true,
      fonts: true,
      pendingFrames: {
        where: {
          rejections: {
            every: {
              resubmitted: true,
            },
          },
        },
      },
      pendingIssues: {
        where: {
          rejections: {
            every: {
              resubmitted: true,
            },
          },
        },
      },
      pendingFonts: {
        where: {
          rejections: {
            every: {
              resubmitted: true,
            },
          },
        },
      },
    },
  });

  return {
    message: "Event updated successfully",
    data: event,
  };
}

export async function releaseEvent(eventId: string) {
  return await prisma.$transaction(async (tx) => {
    const approvedPendingIssues = await tx.pendingIssues.findMany({
      where: {
        eventId,
        approvedById: {
          not: null,
        },
        approvedAt: {
          not: null,
        },
      },
      include: {
        event: true,
      },
    });

    if (approvedPendingIssues.length === 0) {
      new Error("No approved pending issues found.");
    }

    const issuesData = approvedPendingIssues.map((pendingIssue) => ({
      name: pendingIssue.name,
      group: pendingIssue.group,
      act: pendingIssue.act,
      rarity: pendingIssue.rarity,
      code: pendingIssue.code,
      image: pendingIssue.image,
      createdAt: pendingIssue.createdAt,
      updatedAt: pendingIssue.updatedAt,
      eventId: pendingIssue.eventId,
      createdById: pendingIssue.createdById,
      approvedById: pendingIssue.approvedById!,
      approvedAt: pendingIssue.approvedAt!,
      dropAble: pendingIssue.dropAble,
    }));

    await tx.issues.createMany({
      data: issuesData,
    });

    await tx.pendingIssues.deleteMany({
      where: {
        id: {
          in: approvedPendingIssues.map((pendingIssue) => pendingIssue.id),
        },
      },
    });

    return {
      message: "Approved pending issues successfully transferred to issues.",
    };
  });
}
