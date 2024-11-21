"use server";

import { env } from "@/env";
import { UserProfile } from "@/types/next-auth";
import { prisma } from "@/lib/database";

export async function fetchDiscordUserProfile(
  id: string
): Promise<UserProfile> {
  const response = await fetch(`https://discord.com/api/users/${id}`, {
    headers: {
      Authorization: `Bot ${env.DISCORD_CLIENT_TOKEN}`,
    },
  });

  const data: UserProfile = await response.json();

  if (data.avatar === null) {
    data.avatar = `https://cdn.discordapp.com/embed/avatars/${
      parseInt(data.discriminator) % 5
    }.png`;
  } else {
    const format = data.avatar.startsWith("a_") ? "gif" : "png";
    data.avatar = `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.${format}`;
  }

  return data;
}
