import { z } from "zod";

import { checkFileType } from "@/lib/utils";

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

export type IssuesFormPropsValue = z.infer<typeof issuesSchema>;
export type IssuesFormPropsValueKeys = keyof IssuesFormPropsValue;

export const IssueFilterSchema = z.object({
  name: z.string().optional(),
  group: z.string().optional(),
  act: z.string().optional(),
  code: z.string().optional(),
  rarity: z.array(z.string()).optional(),
  createdBy: z.array(z.string()).optional(),
  updatedBy: z.array(z.string()).optional(),
  approvedBy: z.array(z.string()).optional(),
  eventId: z.array(z.string()).optional(),
});
