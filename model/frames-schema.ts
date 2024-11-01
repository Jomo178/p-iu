import { z } from "zod";

import { checkFileType } from "@/lib/utils";

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

export type FramesFormPropsValue = z.infer<typeof framesSchema>;
export type FramesFormPropsValueKeys = keyof FramesFormPropsValue;
