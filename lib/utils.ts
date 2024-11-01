import { ChangeEvent } from "react";
import { IssuesFormPropsValue } from "@/model/issues-schema";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
    if (fileType === "png" || fileType === "jpg") return true;
  }
  return false;
}

export function toUpperCase(text: string) {
  return text
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
    .replace(/^./, text[0].toUpperCase());
}
