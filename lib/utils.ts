import { Permission, Staff } from "@prisma/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { StaffAction } from "@/types/prisma";
import { CarouselApi } from "@/components/ui/carousel";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBytes(
  bytes: number,
  opts: {
    decimals?: number;
    sizeType?: "accurate" | "normal";
  } = {}
) {
  const { decimals = 0, sizeType = "normal" } = opts;

  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const accurateSizes = ["Bytes", "KiB", "MiB", "GiB", "TiB"];
  if (bytes === 0) return "0 Byte";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${
    sizeType === "accurate"
      ? (accurateSizes[i] ?? "Bytest")
      : (sizes[i] ?? "Bytes")
  }`;
}

export function generateIssueCode(
  name: string,
  act: string,
  group: string,
  rarity: number
) {
  const firstLetter = name.charAt(0).toUpperCase();
  const lastLetter = name.charAt(name.length - 1).toUpperCase();
  const firstTwoActChars = act
    .replace(/\s+/g, "")
    .substring(0, 2)
    .toUpperCase();
  const firstTwoGroupChars = group
    .replace(/\s+/g, "")
    .substring(0, 2)
    .toUpperCase();
  const rarityCode = rarity.toString().toUpperCase();

  const code = `${firstLetter}${lastLetter}${firstTwoActChars}${firstTwoGroupChars}${rarityCode}`;
  return code;
}

export function generateFrameCode(
  name: string,
  rarity: "Common" | "Rare" | "Special"
) {
  return name + rarity;
}

export function scrollToCarousel(api: CarouselApi, index: number) {
  setTimeout(() => {
    if (api) {
      api?.scrollTo(index);
    }
  }, 0);
}

export const formatTimestamp = (date: Date) => {
  return date.toLocaleTimeString("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export function checkFileType(file: File) {
  if (file?.name) {
    const fileType = file.name.split(".").pop();
    if (fileType === "png" || fileType === "jpg" || fileType === "gif")
      return true;
  }
  return false;
}

export async function urlToFile(
  url: string,
  filename: string,
  mimeType: string
): Promise<File & { preview: string }> {
  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    const blob = await response.blob();
    const file = new File([blob], filename, {
      type: mimeType,
      lastModified: Date.now(),
    });
    (file as any).preview = url;
    return file as File & { preview: string };
  } catch (error) {
    console.error("Error converting URL to file:", error);
    throw error;
  }
}

export function toUpperCase(text: string) {
  return text
    .replace(/-/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
    .replace(/^./, text[0]?.toUpperCase());
}

export function hasPermission(
  staff: Staff,
  resourceAccessPermission: `${StaffAction}:${Permission}`
) {
  const action = resourceAccessPermission.split(":")[0] as StaffAction;

  const permissionType = resourceAccessPermission.split(":")[1] as Permission;

  return !staff[action].includes(permissionType);
}

export class ClientError extends Error {}

export function actionError<T extends any[], U>(
  fn: (...args: T) => Promise<U>
): (
  ...args: T
) => Promise<{ error: string; data?: never } | { error?: never; data: U }> {
  return async (...args: T) => {
    try {
      return { data: await fn(...args) };
    } catch (err: unknown) {
      if (err instanceof ClientError) return { error: err.message };
      throw err;
    }
  };
}
