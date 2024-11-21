import { on } from "events";
import { NavigationItem } from "@/types";
import { signOut } from "next-auth/react";

import { Icons } from "@/components/ui/icons";

export const mainNavigation: NavigationItem[] = [
  { href: "/docs", title: "Docs", disabled: true },
  { href: "/dashboard", title: "Dashboard", disabled: true },
  { href: "/pricing", title: "Pricing", disabled: true },
];

export const userNavigation: NavigationItem[] = [
  { href: "/profile", title: "Profile", disabled: true, icon: Icons.user },
  {
    href: "/logout",
    title: "Logout",
    disabled: false,
    icon: Icons.signOut,
    action: () => signOut(),
  },
];
