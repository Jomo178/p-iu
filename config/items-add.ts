import { EventType } from "@prisma/client";
import { z } from "zod";

import { checkFileType } from "@/lib/utils";
import useLocalStorage from "@/hooks/use-local-storage";

export const framesSchema = z
  .object({
    id: z.string(),
    name: z.string().min(1, "Issue Name is required!"),
    code: z.string(),
    codeDuplicate: z.boolean().optional().default(false),
    rarity: z.enum(["Common", "Rare", "Special"]),
    releaseDate: z
      .string()
      .or(z.date())
      .transform((arg) => new Date(arg)),
    image: z
      .any()
      .refine(
        (file) => file instanceof File,
        "Image is required and must be a file."
      )
      .refine((file: File) => file?.name !== "", "File is required")
      .refine((file) => file.size < 1_000_000, "Max size is 1MB.")
      .refine(
        (file) => checkFileType(file),
        "Only .png, .jpg formats are supported."
      ),
    errors: z
      .array(
        z
          .object({
            path: z.string().optional(),
            message: z.string().optional(),
          })
          .optional()
      )
      .optional()
      .default([]),
  })
  .partial({
    errors: true,
  });

export const issuesSchema = z
  .object({
    id: z.string(),
    name: z.string().min(1, "Issue Name is required!"),
    group: z.string().min(1, "Issue Group is required!"),
    act: z.string().min(1, "Issue Act is required!"),
    code: z.string(),
    codeDuplicate: z.boolean().optional().default(false),
    rarity: z.number().min(1, "Rarity is required").max(5, "Max is 5"),
    releaseDate: z
      .string()
      .or(z.date())
      .transform((arg) => new Date(arg)),
    image: z
      .any()
      .refine(
        (file) => file instanceof File,
        "Image is required and must be a file."
      )
      .refine((file: File) => file?.name !== "", "File is required")
      .refine((file) => file.size < 1_000_000, "Max size is 1MB.")
      .refine(
        (file) => checkFileType(file),
        "Only .png, .jpg formats are supported."
      ),
    errors: z
      .array(
        z
          .object({
            path: z.string().optional(),
            message: z.string().optional(),
          })
          .optional()
      )
      .optional()
      .default([]),
  })
  .partial({
    errors: true,
  });

export const fontSchema = z
  .object({
    id: z.string(),
    name: z.string().min(1, "Font Name is required!"),
    shortName: z.string().min(1, "Short Name is required!").default(""),
    price: z.number().min(1, "Price is required").default(1),
    onMarket: z.boolean().optional().default(false),
    isBig: z.boolean().optional().default(false),
    image: z
      .any()
      .refine(
        (file) => file instanceof File,
        "Font is required and must be a file."
      )
      .refine((file: File) => file?.name !== "", "File is required")
      .refine(
        (file) => checkFileType(file, ["ttf", "otf"]),
        "Only .ttf, .otf formats are supported."
      ),
    errors: z
      .array(
        z
          .object({
            path: z.string().optional(),
            message: z.string().optional(),
          })
          .optional()
      )
      .optional()
      .default([]),
  })
  .partial({
    errors: true,
  });

export const itemsSchema = {
  issues: issuesSchema,
  frames: framesSchema,
  fonts: fontSchema,
};

export type FramesFormPropsValue = z.infer<typeof framesSchema>;
export type FramesFormPropsValueKeys = keyof FramesFormPropsValue;
export type IssuesFormPropsValue = z.infer<typeof issuesSchema>;
export type IssuesFormPropsValueKeys = keyof IssuesFormPropsValue;
export type FontsFormPropsValue = z.infer<typeof fontSchema>;
export type FontsFormPropsValueKeys = keyof FontsFormPropsValue;

export type ItemsSchema = {
  issues: IssuesFormPropsValue;
  frames: FramesFormPropsValue;
  fonts: FontsFormPropsValue;
};

export type ItemsFormPropsValue =
  | IssuesFormPropsValue
  | FramesFormPropsValue
  | FontsFormPropsValue;

export type ItemsFormPropsValueKeys = keyof ItemsFormPropsValue;

export const useDefaultItemsFormValues = (itemType: `${EventType}`) => {
  const items = {
    issues: useLocalStorage("defaultIssueFormValues", {
      id: "1",
      name: "",
      group: "",
      act: "",
      code: "",
      codeDuplicate: false,
      rarity: 1,
      image: new File([""], "filename"),
    }),
    frames: useLocalStorage("defaultFrameFormValues", {
      id: "1",
      name: "",
      code: "",
      codeDuplicate: false,
      rarity: "Common",
      image: new File([""], "filename"),
    }),
    fonts: useLocalStorage("defaultFontFormValues", {
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
};

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
