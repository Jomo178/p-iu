"use server";

import { unstable_cache } from "next/cache";
import { Staff } from "@prisma/client";

import { prisma } from "@/lib/database";

import { fetchDiscordUserProfile } from "../_action";

export async function getAllStaffDiscordProfiles() {
  const staff = await prisma.staff.findMany({
    select: {
      discordId: true,
    },
  });

  const data = staff.map(async (member) => {
    const data = await fetchDiscordUserProfile(member.discordId);
    return data;
  });

  return Promise.all(data);
}

export const getCachedStaffDiscordProfiles = unstable_cache(
  getAllStaffDiscordProfiles,
  [],
  {
    revalidate: 60 * 60,
  }
);

export async function editStaffDetails(
  id: string,
  data: Omit<Staff, "createdAt" | "updatedAt" | "id">
) {
  const staff = await prisma.staff.update({
    where: {
      discordId: id,
    },
    data,
  });

  return {
    message: "Staff details updated successfully",
  };
}
