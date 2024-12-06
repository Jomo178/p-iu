import { notFound } from "next/navigation";
import ViewSidebar from "@/container/dashboard/view/sidebar-view";
import ReactQueryProvider from "@/providers/react-query-client-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { getCurrentStaff, getCurrentUser } from "@/lib/session";
import SidebarProviderPage from "@/components/sidebar-provider";

interface ViewLayoutProps {
  children?: React.ReactNode;
}

export default async function ViewLayout({ children }: ViewLayoutProps) {
  const staff = await getCurrentStaff();

  return (
    <>
      <SidebarProviderPage
        user={staff}
        sidebarMenu={<ViewSidebar />}
        name="view"
      >
        <ReactQueryProvider>
          <NuqsAdapter>{children}</NuqsAdapter>
        </ReactQueryProvider>
      </SidebarProviderPage>
    </>
  );
}
