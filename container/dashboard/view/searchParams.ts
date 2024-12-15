import {
  IssueFilterPropsValue,
  IssueFilterSchema,
} from "@/model/issues-schema";
import { parseAsJson, parseAsStringLiteral } from "nuqs/server";

export const containsFields = [
  "name",
  "act",
  "group",
  "code",
  "rarity",
  "eventId",
] as const;
export type ContainsFields = (typeof containsFields)[number];
export const dateFields = ["createdAt", "updatedAt", "approvedAt"] as const;
export const userFields = [
  "createdBy",
  "approvedBy",
  "rejectedBy",
  "resubmittedBy",
] as const;
export type UserFields = (typeof userFields)[number];
export const sortByFields = [...containsFields, ...dateFields] as const;
export const sortOrderFields = ["asc", "desc"] as const;

export const searchParams = {
  filters: parseAsJson(IssueFilterSchema.parse).withOptions({
    history: "push",
  }),
  sortBy: parseAsStringLiteral(sortByFields)
    .withDefault("createdAt")
    .withOptions({
      history: "push",
    }),
  sortOrder: parseAsStringLiteral(sortOrderFields)
    .withDefault("asc")
    .withOptions({
      history: "push",
    }),
};

export function constructWhereConditions(
  filters: IssueFilterPropsValue | null = {},
  staff: { id: string; discordId: string }[] = []
) {
  if (!filters) return {};

  const getIdsByDiscordIds = (discordIds: string[]) =>
    staff
      .filter((staff) => discordIds.includes(staff.discordId))
      .map((staff) => staff.id);
  console.log(filters.approvedBy, staff);
  const where = {
    ...(filters.createdBy
      ? { createdById: { in: getIdsByDiscordIds(filters.createdBy) } }
      : {}),
    ...(filters.rarity
      ? { rarity: { in: filters.rarity.map((value) => Number(value)) } }
      : {}),
    ...(filters.eventId
      ? { eventId: { in: getIdsByDiscordIds(filters.eventId) } }
      : {}),
    ...(filters.approvedBy
      ? { approvedById: { in: getIdsByDiscordIds(filters.approvedBy) } }
      : {}),
    ...(filters.rejectedBy || filters.resubmittedBy
      ? {
          rejections: {
            some: {
              ...(filters.rejectedBy
                ? {
                    rejectedById: {
                      in: getIdsByDiscordIds(filters.rejectedBy),
                    },
                  }
                : {}),
              ...(filters.resubmittedBy
                ? {
                    resubmittedById: {
                      in: getIdsByDiscordIds(filters.resubmittedBy),
                    },
                  }
                : {}),
            },
          },
        }
      : {}),
  };

  const {
    approvedBy,
    rejectedBy,
    resubmittedBy,
    createdBy,
    rarity,
    eventId,
    ...remainingProps
  } = filters;

  return { ...remainingProps, ...where };
}

export function constructOrderByConditions(
  sortBy: string,
  sortOrder: string
): any {
  return {
    [sortBy]: sortOrder,
  };
}
