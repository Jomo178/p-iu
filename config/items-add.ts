import { z } from "zod";

import { ItemFormPropsValue, ItemsNameType } from "@/types/items";
import { checkFileType } from "@/lib/utils";
import useLocalStorage from "@/hooks/use-local-storage";

const errorsSchema = z
  .array(
    z
      .object({
        path: z.string().optional(),
        message: z.string().optional(),
      })
      .optional()
  )
  .optional()
  .default([]);

const fileValidation = (allowedExtensions: string[] = ["png", "jpg"]) =>
  z
    .any()
    .refine(
      (file) => file instanceof File,
      "File is required and must be a file."
    )
    .refine((file: File) => file?.name !== "", "File name cannot be empty.")
    .refine((file) => file.size < 1_000_000, "Max size is 1MB.")
    .refine(
      (file) => checkFileType(file, allowedExtensions),
      `Only ${allowedExtensions.join(", ")} formats are supported.`
    );

const createItemSchema = <T extends z.ZodRawShape>(fields: T) =>
  z.object({
    id: z.string(),
    name: z.string().min(1, "Name is required!"),
    releaseDate: z
      .string()
      .or(z.date())
      .transform((arg) => new Date(arg)),
    ...fields,
    errors: errorsSchema,
  });

export const framesSchema = createItemSchema({
  code: z.string(),
  codeDuplicate: z.boolean().optional().default(false),
  rarity: z.enum(["Common", "Rare", "Special"]),
  image: fileValidation(),
});

export const issuesSchema = createItemSchema({
  group: z.string().min(1, "Issue Group is required!"),
  act: z.string().min(1, "Issue Act is required!"),
  code: z.string(),
  image: fileValidation(),
  codeDuplicate: z.boolean().optional().default(false),
  rarity: z.number().min(1, "Rarity is required").max(5, "Max is 5"),
});

export const fontSchema = createItemSchema({
  shortName: z.string().min(1, "Short Name is required!").default(""),
  price: z.number().min(1, "Price is required").default(1),
  onMarket: z.boolean().optional().default(false),
  isBig: z.boolean().optional().default(false),
  image: fileValidation(["ttf"]),
});

export const itemsSchema = {
  issues: issuesSchema,
  frames: framesSchema,
  fonts: fontSchema,
} as const;

export function useDefaultItemsFormValues(itemType: ItemsNameType) {
  const items = {
    issues: useLocalStorage<
      Omit<ItemFormPropsValue["issues"], "errors" | "releaseDate">
    >("defaultIssueFormValues", {
      id: "1",
      name: "",
      group: "",
      act: "",
      code: "",
      codeDuplicate: false,
      rarity: 1,
      image: new File([""], "filename"),
    }),
    frames: useLocalStorage<
      Omit<ItemFormPropsValue["frames"], "errors" | "releaseDate">
    >("defaultFrameFormValues", {
      id: "1",
      name: "",
      code: "",
      codeDuplicate: false,
      rarity: "Common",
      image: new File([""], "filename"),
    }),
    fonts: useLocalStorage<
      Omit<ItemFormPropsValue["fonts"], "errors" | "releaseDate">
    >("defaultFontFormValues", {
      id: "1",
      name: "",
      shortName: "",
      price: 0,
      onMarket: false,
      isBig: false,
      image: new File([""], "filename"),
    }),
  };

  return items[itemType];
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
