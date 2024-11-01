import DashboardSidebar from "@/container/dashboard/sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import Navbar from "./navbar";
import { Button } from "./ui/button";
import { Icons } from "./ui/Icons";
import { Typography } from "./ui/typography";

interface SidebarProps {
  user?: { global_name?: string; image?: string | null };
  children?: React.ReactNode;
}

export default function SidebarPage({ children, user }: SidebarProps) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <Navbar user={user} />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
