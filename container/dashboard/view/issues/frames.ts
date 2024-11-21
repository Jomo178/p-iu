import {
  getPendingFrames,
  getRejectedFrames,
} from "@/server/view/_actions.frames";
import { FramesViewPort } from "@/types";

import { PendingFramesWithRelation } from "@/types/prisma";
import { Icons } from "@/components/ui/icons";

export const framesViewPortType: FramesViewPort[] = [
  {
    title: "Rejected Frames",
    id: "rejected-frames",
    description: "Frames that have been rejected.",
    noteDescription: "Please edit the rejected frames and resubmit it.",
    fetchCount: 0,
    fetchFunction: (skip, amount, filter, orderBy) =>
      getRejectedFrames(skip, amount, filter, orderBy),
    data: [] as PendingFramesWithRelation[],
    selectedItems: [] as PendingFramesWithRelation[],
    disabled: false,
    href: "/dashboard/view/rejected-frames",
    Icon: Icons.rejected,
  },
  {
    title: "Pending Frames",
    id: "pending-frames",
    description: "Frames that wait to be approved and be published.",
    fetchCount: 0,
    fetchFunction: (skip, amount, filter, orderBy) =>
      getPendingFrames(skip, amount, filter, orderBy),
    data: [] as PendingFramesWithRelation[],
    selectedItems: [] as PendingFramesWithRelation[],
    disabled: false,
    href: "/dashboard/view/pending-frames",
    Icon: Icons.pending,
  },
  // {
  //   title: "Upcoming Issues",
  //   description: "Issues that will be released soon.",
  //   id: "upcoming-issues",
  //   fetchCount: 0,
  //   fetchFunction: (skip, amount, filter, orderBy) =>
  //     getUpcomingIssues(skip, amount, filter, orderBy),
  //   data: [] as PendingIssuesWithRelation[],
  //   selectedItems: [] as PendingIssuesWithRelation[],
  //   disabled: false,
  //   href: "/dashboard/view/upcoming-issues",
  //   Icon: Icons.soon,
  // },
  // {
  //   title: "Issues",
  //   description: "Issues that are published and available to collect.",
  //   id: "issues",
  //   fetchCount: 0,
  //   fetchFunction: (skip, amount, filter, orderBy) =>
  //     getIssues(skip, amount, filter, orderBy),
  //   data: [] as IssuesWithRelation[],
  //   selectedItems: [] as IssuesWithRelation[],
  //   disabled: false,
  //   href: "/dashboard/view/issues",
  //   Icon: Icons.addIssue,
  // },
];
