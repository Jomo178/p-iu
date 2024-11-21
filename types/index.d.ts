import { issuesViewPortType } from "@/container/dashboard/view/issues/issues";
import { FramesFormPropsValue } from "@/model/frames-schema";
import { IssuesFormPropsValue } from "@/model/issues-schema";
import { Issues, PendingIssues } from "@prisma/client";

import { Icons } from "@/components/ui/Icons";

import {
  FramesWithRelation,
  IssuesWithRelation,
  PendingFramesWithRelation,
  PendingIssuesWithRelation,
  RejectedIssuesWithRelation,
} from "./prisma";

type NonEmptyArray<T> = [T, ...T[]];

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

export type IssuesViewType =
  | "released-issues"
  | "pending-issues"
  | "rejected-issues"
  | "upcoming-issues";

export interface IssuesViewPort {
  title: string;
  id: IssuesViewType;
  description: string;
  noteDescription?: string;
  fetchCount: number;
  fetchFunction: (
    skip: number,
    amount: number,
    filter: any,
    orderBy: any
  ) => Promise<IssuesWithRelation[] | PendingIssuesWithRelation[]>;
  data: IssuesWithRelation[] | PendingIssuesWithRelation[];
  selectedItems: IssuesWithRelation[] | PendingIssuesWithRelation[];
  disabled: boolean;
  href: `/dashboard/view/${IssuesViewType}`;
  Icon: FC<{ className: string }>;
}
export interface EditIssueProps {
  viewPortId: IssuesViewType | FramesViewType;
  issue: (IssuesFormPropsValue | FramesFormPropsValue) & {
    imageLink: string;
    changedImage: boolean;
  };
}

export type FramesViewType =
  | "released-frames"
  | "pending-frames"
  | "rejected-frames"
  | "upcoming-frames";

export interface FramesViewPort {
  title: string;
  id: FramesViewType;
  description: string;
  noteDescription?: string;
  fetchCount: number;
  fetchFunction: (
    skip: number,
    amount: number,
    filter: any,
    orderBy: any
  ) => Promise<FramesWithRelation[] | PendingFramesWithRelation[]>;
  data: FramesWithRelation[] | PendingFramesWithRelation[];
  selectedItems: FramesWithRelation[] | PendingFramesWithRelation[];
  disabled: boolean;
  href: `/dashboard/view/${FramesViewType}`;
  Icon: FC<{ className: string }>;
}
