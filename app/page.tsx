"use client";

import { Suspense } from "react";
import { updateJsonFile } from "@/fix";

import { mainNavigation } from "@/config/navigation";
import { prisma } from "@/lib/database";
import { getCurrentUser } from "@/lib/session";
import { Button } from "@/components/ui/button";
import Confettis from "@/components/ui/confettis";
import Navbar from "@/components/navbar";

export default function Home() {
  // const user = await getCurrentUser();

  return (
    <div>
      <Confettis />
      {/* <Suspense>
        <Navbar
          user={{ global_name: user?.global_name, image: user?.image }}
          navigationItems={mainNavigation}
        />
      </Suspense> */}
      <Button onClick={() => updateJsonFile()}>Click me</Button>
    </div>
  );
}
