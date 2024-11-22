import { notFound } from "next/navigation";
import DashboardSidebar from "@/container/dashboard/sidebar-dashboard";

import { getCurrentStaff, getCurrentUser } from "@/lib/session";
import SidebarProviderPage from "@/components/sidebar-provider";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const staff = await getCurrentStaff();

  return (
    <>
      <SidebarProviderPage
        user={staff}
        sidebarMenu={<DashboardSidebar />}
        name="add"
      >
        {children}
      </SidebarProviderPage>
    </>
  );
}
