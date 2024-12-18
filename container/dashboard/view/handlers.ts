import {
  IssueFilterPropsValue,
  IssueFilterSchema,
} from "@/model/issues-schema";
import {
  approvePendingIssues,
  deleteIssues,
  editIssue,
  rejectPendingIssues,
  resubmitRejectedIssues,
} from "@/server/view/_actions-issues";
import {
  approvePendingFrames,
  deleteFrames,
  editFrame,
  rejectFramesIssues,
  resubmitRejectedFrames,
} from "@/server/view/_actions.frames";
import {
  EditIssueProps,
  FramesViewPort,
  FramesViewType,
  IssuesViewPort,
  IssuesViewType,
} from "@/types";
import { parseAsJson, parseAsStringLiteral } from "nuqs/server";
import { toast } from "sonner";

import { PendingIssuesWithRelation } from "@/types/prisma";

export function usehandleApprovePendingItems(
  isFrame: boolean,
  setViewTypeDataAction?: React.Dispatch<
    React.SetStateAction<IssuesViewPort | FramesViewPort>
  >
) {
  const handleApprovePendingItems = async (
    issuesIds: [string, ...string[]]
  ) => {
    const { promise, title, error } = isFrame
      ? {
          promise: approvePendingFrames,
          title: "Approving Frames...",
          error: "Frames were not approved. You are not logged in.",
        }
      : {
          promise: approvePendingIssues,
          title: "Approving Issues...",
          error: "Issues were not approved. You are not logged in.",
        };

    toast.promise(promise(issuesIds), {
      loading: title,
      success(data) {
        if (setViewTypeDataAction) {
          setViewTypeDataAction((prev) => ({
            ...prev,
            data: prev.data.filter(
              (issue) => !issuesIds.includes(issue.id)
            ) as any[],
            selectedItems: [],
          }));
        }
        return data.message;
      },
      error: error,
    });
  };

  const handleRejectPendingItems = async (
    issuesIds: [string, ...string[]],
    reason: string
  ) => {
    const { promise, title, error } = isFrame
      ? {
          promise: rejectFramesIssues,
          title: "Rejecting Frames...",
          error: "Frames were not rejected. You are not logged in.",
        }
      : {
          promise: rejectPendingIssues,
          title: "Rejecting Issues...",
          error: "Issues were not rejected. You are not logged in.",
        };

    toast.promise(promise(issuesIds, reason), {
      loading: title,
      success(data) {
        if (setViewTypeDataAction) {
          setViewTypeDataAction((prev) => ({
            ...prev,
            data: prev.data.filter(
              (issue) => !issuesIds.includes(issue.id)
            ) as any[],
            selectedItems: [],
          }));
        }
        return data.message;
      },
      error: error,
    });
  };

  const handleResubmitRejectedItems = async (
    issuesIds: [string, ...string[]]
  ) => {
    const { promise, title, error } = isFrame
      ? {
          promise: resubmitRejectedFrames,
          title: "Resubmitting Frames...",
          error: "Frames were not resubmitted. You are not logged in.",
        }
      : {
          promise: resubmitRejectedIssues,
          title: "Resubmitting Issues...",
          error: "Issues were not resubmitted. You are not logged in.",
        };

    toast.promise(promise(issuesIds), {
      loading: title,
      success(data) {
        if (setViewTypeDataAction) {
          setViewTypeDataAction((prev) => ({
            ...prev,
            data: prev.data.filter(
              (issue) => !issuesIds.includes(issue.id)
            ) as any[],
            selectedItems: [],
          }));
        }
        return data.message;
      },
      error: error,
    });
  };

  const handleEditItems = async ({ viewPortId, issue }: EditIssueProps) => {
    const { promise, title } = isFrame
      ? {
          promise: editFrame,
          title: "Editing Frame...",
        }
      : {
          promise: editIssue,
          title: "Editing Issue...",
        };

    toast.promise(
      promise({ viewPortId, issue }) as Promise<{
        message: string;
        issue: PendingIssuesWithRelation;
      }>,
      {
        loading: title,
        success({ issue, message }) {
          if (setViewTypeDataAction && issue) {
            setViewTypeDataAction((prev) => ({
              ...prev,
              data: prev.data.map((issueType) =>
                issueType.id === issue.id ? issue : issueType
              ) as any[],
              selectedItems: [],
            }));
          }
          return message;
        },
        error: `Failed to edit ${isFrame ? "frame" : "issue"}.`,
      }
    );
  };

  const handleDeleteItems = async (
    viewTypeId: IssuesViewType | FramesViewType,
    issues: { id: string; image: string }[],
    password: string
  ) => {
    const { promise, title } = isFrame
      ? { promise: deleteFrames, title: "Deleting Frames..." }
      : { promise: deleteIssues, title: "Deleting Issues..." };

    toast.promise(promise(viewTypeId, issues, password), {
      loading: title,
      success(data) {
        if (setViewTypeDataAction) {
          setViewTypeDataAction((prev) => ({
            ...prev,
            data: prev.data.filter(
              (issue) => !issues.map((issue) => issue.id).includes(issue.id)
            ) as any[],
            selectedItems: [],
          }));
        }
        return data.message;
      },
      error: `${isFrame ? "Frames" : "Issues"} were not deleted. Incorrect password.`,
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
