import { issuesViewPortType } from "@/container/dashboard/view/issues/issues";
import { FramesFormPropsValue } from "@/model/frames-schema";
import { IssuesFormPropsValue } from "@/model/issues-schema";
import { Issues, PendingIssues } from "@prisma/client";

import { Icons } from "@/components/ui/icons";

import {
  FontsWithRelation,
  FramesWithRelation,
  IssuesWithRelation,
  PendingFontsWithRelation,
  PendingFramesWithRelation,
  PendingIssuesWithRelation,
  RejectedIssuesWithRelation,
} from "./prisma";

export type NavigationItem = {
  title: string;
  href: string;
  disabled?: boolean;
  icon?: FC<{ className: string }>;
  action?: () => void;
};

export interface DashboradActionsType {
  href: string;
  Icon: FC<{ className: string }>;
  title: string;
  description: string;
  disabled?: boolean;
}

export interface ViewDashboardType {
  title: string;
  Icon: FC<{ className: string }>;
  href: string;
  isActive: boolean;
  items: DashboradActionsType[];
}

export interface EditIssueProps {
  viewPortId: IssuesViewType | FramesViewType;
  issue: (IssuesFormPropsValue | FramesFormPropsValue) & {
    imageLink: string;
    changedImage: boolean;
  };
}

export interface itemsInterface {
  title: string;
  description: string;
  noteDescription?: string;
  fetchCount: number;
  Icon: FC<{ className: string }>;
  disabled: boolean;
}

export type IssuesViewType =
  | "released-issues"
  | "pending-issues"
  | "rejected-issues"
  | "upcoming-issues";

export interface IssuesViewPort extends itemsInterface {
  id: IssuesViewType;
  fetchFunction: (
    skip: number,
    amount: number,
    filter: any,
    orderBy: any
  ) => Promise<IssuesWithRelation[] | PendingIssuesWithRelation[]>;
  data: IssuesWithRelation[] | PendingIssuesWithRelation[];
  selectedItems: IssuesWithRelation[] | PendingIssuesWithRelation[];
  href: `/dashboard/view/${IssuesViewType}`;
}

export type FramesViewType =
  | "released-frames"
  | "pending-frames"
  | "rejected-frames"
  | "upcoming-frames";

export interface FramesViewPort extends itemsInterface {
  id: FramesViewType;
  fetchFunction: (
    skip: number,
    amount: number,
    filter: any,
    orderBy: any
  ) => Promise<FramesWithRelation[] | PendingFramesWithRelation[]>;
  data: FramesWithRelation[] | PendingFramesWithRelation[];
  selectedItems: FramesWithRelation[] | PendingFramesWithRelation[];
  href: `/dashboard/view/${FramesViewType}`;
}

export type FontsViewType =
  | "released-fonts"
  | "pending-fonts"
  | "rejected-fonts"
  | "upcoming-fonts";

export interface FontsViewPort extends itemsInterface {
  id: FontsViewType;
  fetchFunction: (
    skip: number,
    amount: number,
    filter: any,
    orderBy: any
  ) => Promise<FontsWithRelation[] | PendingFontsWithRelation[]>;
  data: FontsWithRelation[] | PendingFontsWithRelation[];
  selectedItems: FontsWithRelation[] | PendingFontsWithRelation[];
  href: `/dashboard/view/${FontsViewType}`;
}

export type ViewPortType = IssuesViewType | FramesViewType | FontsViewType;
export type ItemsViewPortType = IssuesViewPort | FramesViewPort | FontsViewPort;
