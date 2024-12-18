import { z } from "zod";

export const IssueFilterSchema = z.object({
  name: z.string().optional(),
  group: z.string().optional(),
  act: z.string().optional(),
  code: z.string().optional(),
  rarity: z.array(z.string()).optional(),
  createdBy: z.array(z.string()).optional(),
  approvedBy: z.array(z.string()).optional(),
  rejectedBy: z.array(z.string()).optional(),
  resubmittedBy: z.array(z.string()).optional(),
  eventId: z.array(z.string()).optional(),
});

export type IssueFilterPropsValue = z.infer<typeof IssueFilterSchema>;
