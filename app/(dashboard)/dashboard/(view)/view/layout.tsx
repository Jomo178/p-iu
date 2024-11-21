import { notFound } from "next/navigation";
import ViewSidebar from "@/container/dashboard/view/sidebar-view";
import ReactQueryProvider from "@/providers/react-query-client-provider";

import { getCurrentUser } from "@/lib/session";
import SidebarProviderPage from "@/components/sidebar-provider";

interface ViewLayoutProps {
  children?: React.ReactNode;
}

export default async function ViewLayout({ children }: ViewLayoutProps) {
  const user = await getCurrentUser();
  if (!user) return notFound();

  return (
    <>
      <SidebarProviderPage
        user={user}
        sidebarMenu={<ViewSidebar />}
        name="view"
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </SidebarProviderPage>
    </>
  );
}
