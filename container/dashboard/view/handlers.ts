import {
  IssueFilterPropsValue,
  IssueFilterSchema,
} from "@/model/issues-schema";
import {
  approveItems,
  deleteItems,
  editItems,
  rejectItems,
  resubmitRejectedItems,
} from "@/server/view/set-action";
import { EditIssueProps, ItemsViewPortType, ViewPortType } from "@/types";
import { EventType } from "@prisma/client";
import { parseAsJson, parseAsStringLiteral } from "nuqs/server";
import { toast } from "sonner";

import { toUpperCase } from "@/lib/utils";

export function usehandleApprovePendingItems(
  itemType: `${EventType}`,
  setViewTypeDataAction?: React.Dispatch<
    React.SetStateAction<ItemsViewPortType>
  >
) {
  const tableName = {
    issues: "pendingIssues",
    frames: "pendingFrames",
    fonts: "pendingFonts",
  } as const;

  const handleApprovePendingItems = async (itemsIds: string[]) => {
    toast.promise(approveItems(itemsIds, tableName[itemType]), {
      loading: `Approving ${toUpperCase(itemType)}...`,
      success(data) {
        if (setViewTypeDataAction) {
          setViewTypeDataAction((prev) => ({
            ...prev,
            data: prev.data.filter(
              (item) => !itemsIds.includes(item.id)
            ) as any[],
            selectedItems: [],
          }));
        }
        return data.message;
      },
      error: `Failed to approve ${toUpperCase(itemType)}.`,
    });
  };

  const handleRejectPendingItems = async (
    itemsIds: string[],
    reason: string
  ) => {
    toast.promise(rejectItems(itemsIds, tableName[itemType], reason), {
      loading: `Rejecting ${toUpperCase(itemType)}...`,
      success(data) {
        if (setViewTypeDataAction) {
          setViewTypeDataAction((prev) => ({
            ...prev,
            data: prev.data.filter(
              (item) => !itemsIds.includes(item.id)
            ) as any[],
            selectedItems: [],
          }));
        }
        return data.message;
      },
      error: `Failed to reject ${toUpperCase(itemType)}.`,
    });
  };

  const handleResubmitRejectedItems = async (itemsIds: string[]) => {
    toast.promise(resubmitRejectedItems(itemsIds, tableName[itemType]), {
      loading: `Resubmitting ${toUpperCase(itemType)}...`,
      success(data) {
        if (setViewTypeDataAction) {
          setViewTypeDataAction((prev) => ({
            ...prev,
            data: prev.data.filter(
              (item) => !itemsIds.includes(item.id)
            ) as any[],
            selectedItems: [],
          }));
        }
        return data.message;
      },
      error: `Failed to resubmit ${toUpperCase(itemType)}.`,
    });
  };

  const handleEditItems = async ({ viewPortId, issue }: EditIssueProps) => {
    toast.promise(editItems({ viewPortId, issue }), {
      loading: `Editing ${itemType}...`,
      success({ item, message }) {
        if (setViewTypeDataAction && issue) {
          setViewTypeDataAction((prev) => ({
            ...prev,
            data: prev.data.map((items) =>
              items.id === item?.id ? item : items
            ) as any[],
            selectedItems: [],
          }));
        }
        return message;
      },
      error: `Failed to edit ${itemType}.`,
    });
  };

  const handleDeleteItems = async (
    viewTypeId: ViewPortType,
    items: { id: string; image: string }[],
    password: string
  ) => {
    toast.promise(deleteItems(viewTypeId, items, password), {
      loading: "Deleting...",
      success(data) {
        if (setViewTypeDataAction) {
          setViewTypeDataAction((prev) => ({
            ...prev,
            data: prev.data.filter(
              (prevData) => !items.map((item) => item.id).includes(prevData.id)
            ) as any[],
            selectedItems: [],
          }));
        }
        return data.message;
      },
      error: `Items were not deleted. Incorrect password.`,
    });
  };

  return {
    handleApprovePendingItems,
    handleRejectPendingItems,
    handleResubmitRejectedItems,
    handleEditItems,
    handleDeleteItems,
  };
}

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

  const where = {
    ...(filters.createdBy
      ? { createdById: { in: getIdsByDiscordIds(filters.createdBy) } }
      : {}),
    ...(filters.rarity
      ? { rarity: { in: filters.rarity.map((value) => Number(value)) } }
      : {}),
    ...(filters.eventId ? { eventId: { in: filters.eventId } } : {}),
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
