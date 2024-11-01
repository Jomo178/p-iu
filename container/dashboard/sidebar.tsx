"use client";

import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

import { dashboardActions } from "@/config/dashboard";
import { cn, toUpperCase } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Icons } from "@/components/ui/Icons";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { SidebarToggle } from "@/components/ui/sidebar-toggle";
import { Typography } from "@/components/ui/typography";

interface DashboardSidebarProps {}

export default function DashboardSidebar({}: DashboardSidebarProps) {
  const { toggleSidebar, open } = useSidebar();
  const pathname = usePathname();

  const currentPath = dashboardActions.find((item) => item.href === pathname);

  if (!currentPath) return notFound();
  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader className="flex h-16 shrink-0 items-center gap-2">
        <SidebarToggle isOpen={open} setIsOpen={toggleSidebar} />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-10 space-x-4">
              <Icons.icon />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink>
                      {toUpperCase(pathname.split("/", 3).pop() ?? "")}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      {toUpperCase(pathname.split("/").pop() ?? "")}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-2 pl-0 text-lg underline">
            Actions
          </SidebarGroupLabel>
          <SidebarMenu>
            {dashboardActions.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  className="h-10"
                  asChild
                  tooltip={item.title}
                  isActive={currentPath?.title === item.title}
                  disabled={item.disabled}
                >
                  <Link href={item.href} prefetch>
                    <item.Icon />
                    <Typography variant="list">{item.title}</Typography>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => signOut()}
              variant="outline"
              className={cn("h-10", open ? "justify-center" : "justify-normal")}
            >
              <Icons.signOut size={20} className="mr-2" />
              Sign out
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
