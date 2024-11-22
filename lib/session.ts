import { notFound } from "next/navigation";
import { Session } from "next-auth";
import { getServerSession } from "next-auth/next";

import { NonNullableFields } from "@/types/next-auth";

import { authOptions } from "./authOptions";
import { prisma } from "./database";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  return session?.user;
}

export async function getCurrentStaff() {
  const session = await getServerSession(authOptions);

  if (!session?.user) return notFound();

  const staff = await prisma.staff.findUnique({
    where: {
      discordId: session.user.id,
    },
  });

  if (!staff) return notFound();

  return { ...(session.user as NonNullableFields<Session["user"]>), staff };
}
