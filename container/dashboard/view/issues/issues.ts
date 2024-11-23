import { checkDuplicateFramesCode } from "@/server/upload-frames";
import { checkDuplicateIssuesCode } from "@/server/upload-issues";
import {
  approvePendingIssues,
  deleteIssues,
  editIssue,
  getIssues,
  getPendingIssues,
  getRejectedIssues,
  getUpcomingIssues,
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
  NonEmptyArray,
} from "@/types";
import { toast } from "sonner";

import {
  IssuesWithRelation,
  PendingIssuesWithRelation,
  RejectedIssuesWithRelation,
} from "@/types/prisma";
import { Icons } from "@/components/ui/icons";

export const issuesViewPortType: IssuesViewPort[] = [
  {
    title: "Rejected Issues",
    id: "rejected-issues",
    description: "Issues that have been rejected.",
    noteDescription: "Please edit the rejected issues and resubmit it.",
    fetchCount: 0,
    fetchFunction: (skip, amount, filter, orderBy) =>
      getRejectedIssues(skip, amount, filter, orderBy),
    data: [] as PendingIssuesWithRelation[],
    selectedItems: [] as PendingIssuesWithRelation[],
    disabled: false,
    href: "/dashboard/view/rejected-issues",
    Icon: Icons.rejected,
  },
  {
    title: "Pending Issues",
    id: "pending-issues",
    description: "Issues that wait to be approved and be published.",
    fetchCount: 0,
    fetchFunction: (skip, amount, filter, orderBy) =>
      getPendingIssues(skip, amount, filter, orderBy),
    data: [] as PendingIssuesWithRelation[],
    selectedItems: [] as PendingIssuesWithRelation[],
    disabled: false,
    href: "/dashboard/view/pending-issues",
    Icon: Icons.pending,
  },
  {
    title: "Upcoming Issues",
    description: "Issues that will be released soon.",
    id: "upcoming-issues",
    fetchCount: 0,
    fetchFunction: (skip, amount, filter, orderBy) =>
      getUpcomingIssues(skip, amount, filter, orderBy),
    data: [] as PendingIssuesWithRelation[],
    selectedItems: [] as PendingIssuesWithRelation[],
    disabled: false,
    href: "/dashboard/view/upcoming-issues",
    Icon: Icons.soon,
  },
  {
    title: "Released Issues",
    description: "Issues that are published and available to collect.",
    id: "released-issues",
    fetchCount: 0,
    fetchFunction: (skip, amount, filter, orderBy) =>
      getIssues(skip, amount, filter, orderBy),
    data: [] as IssuesWithRelation[],
    selectedItems: [] as IssuesWithRelation[],
    disabled: false,
    href: "/dashboard/view/released-issues",
    Icon: Icons.addIssue,
  },
];

export function useHandleApprovePendingIssues(
  isFrame: boolean,
  setViewTypeDataAction?: React.Dispatch<
    React.SetStateAction<IssuesViewPort | FramesViewPort>
  >
) {
  const handleApprovePendingIssues = async (
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
            ) as PendingIssuesWithRelation[],
            selectedItems: [],
          }));
        }
        return data.message;
      },
      error: error,
    });
  };

  const handleRejectPendingIssues = async (
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
            ) as PendingIssuesWithRelation[],
            selectedItems: [],
          }));
        }
        return data.message;
      },
      error: error,
    });
  };

  const handleResubmitRejectedIssues = async (
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
            ) as PendingIssuesWithRelation[],
            selectedItems: [],
          }));
        }
        return data.message;
      },
      error: error,
    });
  };

  const handleEditPendingIssues = async ({
    viewPortId,
    issue,
  }: EditIssueProps) => {
    if (isFrame) {
      const checkCodeDuplicate = await checkDuplicateFramesCode([issue.code]);
      if (checkCodeDuplicate.length > 0) {
        toast.error("Code already exists.");
        return;
      }
    } else {
      const checkCodeDuplicate = await checkDuplicateIssuesCode([issue.code]);
      if (checkCodeDuplicate.length > 0) {
        toast.error("Code already exists.");
        return;
      }
    }

    const { promise, title, error } = isFrame
      ? {
          promise: editFrame,
          title: "Editing Frame...",
          error: "Frame was not edited. You are not logged in.",
        }
      : {
          promise: editIssue,
          title: "Editing Issue...",
          error: "Issue was not edited. You are not logged in.",
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
              ) as PendingIssuesWithRelation[],
              selectedItems: [],
            }));
          }
          return message;
        },
        error(data) {
          return data.message;
        },
      }
    );
  };

  const handleDeletePendingIssues = async (
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
            ) as PendingIssuesWithRelation[],
            selectedItems: [],
          }));
        }
        return data.message;
      },
      error(data) {
        return data.message;
      },
    });
  };

  return {
    handleApprovePendingIssues,
    handleRejectPendingIssues,
    handleResubmitRejectedIssues,
    handleEditPendingIssues,
    handleDeletePendingIssues,
  };
}
