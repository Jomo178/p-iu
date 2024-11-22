import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import Navbar from "./navbar";
import { SidebarToggle } from "./ui/sidebar-toggle";

interface SidebarProps {
  user: { global_name: string; image: string };
  children?: React.ReactNode;
  sidebarMenu: React.ReactNode;
  name: string;
}

export default function SidebarProviderPage({
  children,
  sidebarMenu,
  user,
  name,
}: SidebarProps) {
  return (
    <SidebarProvider name={name}>
      {sidebarMenu}
      <SidebarInset>
        <Navbar
          sidebarToggle={<SidebarToggle hiddenOnMobile={false} />}
          user={user}
        />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
