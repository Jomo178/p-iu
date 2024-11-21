import { notFound } from "next/navigation";
import DashboardSidebar from "@/container/dashboard/sidebar-dashboard";

import { getCurrentUser } from "@/lib/session";
import SidebarProviderPage from "@/components/sidebar-provider";

interface StaffLayoutProps {
  children?: React.ReactNode;
}

export default async function StaffLayout({ children }: StaffLayoutProps) {
  const user = await getCurrentUser();
  if (!user) return notFound();

  return (
    <>
      <SidebarProviderPage
        user={user}
        sidebarMenu={<DashboardSidebar />}
        name="add"
      >
        {children}
      </SidebarProviderPage>
    </>
  );
}
