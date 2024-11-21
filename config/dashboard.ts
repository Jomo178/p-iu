import { DashboradActionsType } from "@/types";

import { Icons } from "@/components/ui/icons";

export const dashboardActions: DashboradActionsType[] = [
  {
    href: "/dashboard/add/issues",
    Icon: Icons.addIssue,
    title: "New Issues",
    description:
      "Create and add new issues to your team's database effortlessly.",
    disabled: false,
  },
  {
    href: "/dashboard/add/frames",
    Icon: Icons.frames,
    title: "New Frames",
    description:
      "Create and add new frames to your team's database effortlessly.",
    disabled: false,
  },
  {
    href: "/dashboard/view/issues",
    Icon: Icons.editPen,
    title: "Manage Issues",
    description:
      "Modify issues details, update information, or remove issues from the database.",
    disabled: false,
  },
  {
    href: "/dashboard/view/frames",
    Icon: Icons.frames,
    title: "Manage Frames",
    description:
      "Modify frames details, update information, or remove frames from the database.",
    disabled: false,
  },
  {
    href: "/dashboard/events",
    Icon: Icons.soon,
    title: "Manage Events",
    description:
      "Create, edit, and manage events to keep your team members informed.",
    disabled: false,
  },
  {
    href: "/dashboard/tasks",
    Icon: Icons.todo,
    title: "Manage Tasks",
    description:
      "Organize tasks, assign them to team members, and track progress.",
    disabled: false,
  },
  {
    href: "/dashboard/staff",
    Icon: Icons.staff,
    title: "Manage Staff",
    description:
      "View and manage staff members, roles, and permissions effectively.",
    disabled: false,
  },
  // {
  //   href: "/blog",
  //   Icon: Icons.blog,
  //   title: "Write a Blog",
  //   description:
  //     "Draft, edit, and publish blog posts to share your ideas and updates.",
  //   disabled: true,
  // },
  // {
  //   href: "/stats",
  //   Icon: Icons.stats,
  //   title: "View Statistics",
  //   description:
  //     "Analyze performance metrics and user engagement with detailed statistics.",
  //   disabled: true,
  // },
];
