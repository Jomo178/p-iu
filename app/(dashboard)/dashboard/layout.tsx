import { notFound } from "next/navigation";

import { getCurrentUser } from "@/lib/session";
import Navbar from "@/components/navbar";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser();
  if (!user) return notFound();

  return (
    <>
      <Navbar user={user} />
      {children}
    </>
  );
}
