import { prisma } from "@/lib/database";

export async function getCurrentEventIssues() {
  const event = await prisma.events.findFirst({
    where: {
      start: {
        gte: new Date(),
      },
    },
  });

  return event;
}
