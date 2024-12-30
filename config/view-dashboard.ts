import { ViewDashboardType } from "@/types";

import { Icons } from "@/components/ui/icons";

import { dashboardActions } from "./dashboard";
import {
  fontsViewPortType,
  framesViewPortType,
  issuesViewPortType,
} from "./items-view";

export const viewDashboard: ViewDashboardType[] = [
  {
    title: "Issues",
    Icon: Icons.previewButton,
    href: "/dashboard/view/issues",
    isActive: true,
    items: issuesViewPortType,
  },
  {
    title: "Frames",
    Icon: Icons.frames,
    href: "/dashboard/view/frames",
    isActive: true,
    items: framesViewPortType,
  },
  {
    title: "Fonts",
    Icon: Icons.editPen,
    href: "/dashboard/view/fonts",
    isActive: true,
    items: fontsViewPortType,
  },
  {
    title: "Manage",
    Icon: Icons.manage,
    href: "",
    isActive: true,
    items: [
      {
        title: "Issue Growth",
        Icon: Icons.growth,
        href: "",
        disabled: true,
        description: "",
      },
      {
        title: "Created by You",
        Icon: Icons.user,
        href: "",
        disabled: true,
        description: "",
      },
      {
        title: "Rejected Issues",
        Icon: Icons.rejected,
        href: "",
        disabled: true,
        description: "",
      },
      {
        title: "Issues Todo",
        Icon: Icons.todo,
        href: "",
        disabled: true,
        description: "",
      },
    ],
  },
  {
    title: "Menu",
    Icon: Icons.menu,
    href: "",
    isActive: false,
    items: dashboardActions,
  },
];
