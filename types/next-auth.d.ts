import { Staff } from "@prisma/client";
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      locale?: string;
      global_name?: string;
      staff?: Staff;
    } & DefaultSession["user"];
  }

  interface Profile {
    id: string;
    image_url?: string;
    global_name?: string;
    locale?: string;
  }
}

export type UserProfile = {
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
};
