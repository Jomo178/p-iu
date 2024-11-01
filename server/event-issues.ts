import { prisma } from "@/lib/database";

export async function getCurrentEventIssues() {
  const event = await prisma.events.findFirst({
    where: {
      type: "issues",
      start: {
        gte: new Date(),
      },
    },
  });

  return event;
}

export async function getCurrentEventFrames() {
  const event = await prisma.events.findFirst({
    where: {
      type: "frames",
      start: {
        gte: new Date(),
      },
    },
  });

  return event;
}
