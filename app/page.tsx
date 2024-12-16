import { Suspense } from "react";
import SectionOne from "@/container/home/section-one";
import SectionTwo from "@/container/home/section-two";

import { mainNavigation } from "@/config/navigation";
import { prisma } from "@/lib/database";
import { getCurrentUser } from "@/lib/session";
import Confettis from "@/components/ui/confettis";
import Navbar from "@/components/navbar";

export default async function Home() {
  const user = await getCurrentUser();
  const issues = await prisma.issues.findMany({
    take: 10,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <Confettis />
      <Suspense>
        <Navbar
          user={{ global_name: user?.global_name, image: user?.image }}
          navigationItems={mainNavigation}
        />
      </Suspense>
      <div className="space-y-52 md:space-y-0">
        <SectionOne issues={issues} />
        <SectionTwo issue={issues[0]} />
      </div>
    </div>
  );
}
