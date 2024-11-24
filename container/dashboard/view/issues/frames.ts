import {
  getPendingFrames,
  getRejectedFrames,
  getReleasedFrames,
  getUpcomingFrames,
} from "@/server/view/_actions.frames";
import { FramesViewPort } from "@/types";

import { FramesWithRelation, PendingFramesWithRelation } from "@/types/prisma";
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
  {
    title: "Upcoming Frames",
    description: "Frames that will be released soon.",
    id: "upcoming-frames",
    fetchCount: 0,
    fetchFunction: (skip, amount, filter, orderBy) =>
      getUpcomingFrames(skip, amount, filter, orderBy),
    data: [] as PendingFramesWithRelation[],
    selectedItems: [] as PendingFramesWithRelation[],
    disabled: false,
    href: "/dashboard/view/upcoming-frames",
    Icon: Icons.soon,
  },
  {
    title: "Released Frames",
    description: "Frames that are published and available to collect.",
    id: "released-frames",
    fetchCount: 0,
    fetchFunction: (skip, amount, filter, orderBy) =>
      getReleasedFrames(skip, amount, filter, orderBy),
    data: [] as FramesWithRelation[],
    selectedItems: [] as FramesWithRelation[],
    disabled: false,
    href: "/dashboard/view/released-frames",
    Icon: Icons.addIssue,
  },
];
