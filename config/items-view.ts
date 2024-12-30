import {
  getPendingItems,
  getRejectedItems,
  getReleasedItems,
  getUpcomingItems,
} from "@/server/view/get-action";
import { FontsViewPort, FramesViewPort, IssuesViewPort } from "@/types";

import {
  FontsWithRelation,
  FramesWithRelation,
  IssuesWithRelation,
  PendingFontsWithRelation,
  PendingFramesWithRelation,
  PendingIssuesWithRelation,
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
      getRejectedItems("issues", skip, amount, filter, orderBy),
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
      getPendingItems("issues", skip, amount, filter, orderBy),
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
      getUpcomingItems("issues", skip, amount, filter, orderBy),
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
      getReleasedItems("issues", skip, amount, filter, orderBy),
    data: [] as IssuesWithRelation[],
    selectedItems: [] as IssuesWithRelation[],
    disabled: false,
    href: "/dashboard/view/released-issues",
    Icon: Icons.addIssue,
  },
];

export const framesViewPortType: FramesViewPort[] = [
  {
    title: "Rejected Frames",
    id: "rejected-frames",
    description: "Frames that have been rejected.",
    noteDescription: "Please edit the rejected frames and resubmit it.",
    fetchCount: 0,
    fetchFunction: (skip, amount, filter, orderBy) =>
      getRejectedItems("frames", skip, amount, filter, orderBy),
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
      getPendingItems("frames", skip, amount, filter, orderBy),
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
      getUpcomingItems("frames", skip, amount, filter, orderBy),
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
      getReleasedItems("frames", skip, amount, filter, orderBy),
    data: [] as FramesWithRelation[],
    selectedItems: [] as FramesWithRelation[],
    disabled: false,
    href: "/dashboard/view/released-frames",
    Icon: Icons.addIssue,
  },
];

export const fontsViewPortType: FontsViewPort[] = [
  {
    title: "Rejected Fonts",
    id: "rejected-fonts",
    description: "Fonts that have been rejected.",
    noteDescription: "Please edit the rejected fonts and resubmit it.",
    fetchCount: 0,
    fetchFunction: (skip, amount, filter, orderBy) =>
      getRejectedItems("fonts", skip, amount, filter, orderBy),
    data: [] as PendingFontsWithRelation[],
    selectedItems: [] as PendingFontsWithRelation[],
    disabled: false,
    href: "/dashboard/view/rejected-fonts",
    Icon: Icons.rejected,
  },
  {
    title: "Pending Fonts",
    id: "pending-fonts",
    description: "Fonts that wait to be approved and be published.",
    fetchCount: 0,
    fetchFunction: (skip, amount, filter, orderBy) =>
      getPendingItems("fonts", skip, amount, filter, orderBy),
    data: [] as PendingFontsWithRelation[],
    selectedItems: [] as PendingFontsWithRelation[],
    disabled: false,
    href: "/dashboard/view/pending-fonts",
    Icon: Icons.pending,
  },
  {
    title: "Upcoming Fonts",
    description: "Fonts that will be released soon.",
    id: "upcoming-fonts",
    fetchCount: 0,
    fetchFunction: (skip, amount, filter, orderBy) =>
      getUpcomingItems("fonts", skip, amount, filter, orderBy),
    data: [] as PendingFontsWithRelation[],
    selectedItems: [] as PendingFontsWithRelation[],
    disabled: false,
    href: "/dashboard/view/upcoming-fonts",
    Icon: Icons.soon,
  },
  {
    title: "Released Fonts",
    description: "Fonts that are published and available to collect.",
    id: "released-fonts",
    fetchCount: 0,
    fetchFunction: (skip, amount, filter, orderBy) =>
      getReleasedItems("fonts", skip, amount, filter, orderBy),
    data: [] as FontsWithRelation[],
    selectedItems: [] as FontsWithRelation[],
    disabled: false,
    href: "/dashboard/view/released-fonts",
    Icon: Icons.addIssue,
  },
];

export const itemsViewPortType = {
  issues: issuesViewPortType,
  frames: framesViewPortType,
  fonts: fontsViewPortType,
};
