import { getServerSession } from "next-auth/next";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { prisma } from "./database";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    const staff = await prisma.staff.findUnique({
      where: {
        discordId: session.user.id,
      },
    });

    if (staff) {
      return {
        ...session.user,
        staff: staff,
      };
    }
  }

  return session?.user;
}
