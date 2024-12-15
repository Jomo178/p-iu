import { Suspense } from "react";

import { mainNavigation } from "@/config/navigation";
import { getCurrentUser } from "@/lib/session";
import Confettis from "@/components/ui/confettis";
import Navbar from "@/components/navbar";

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <div>
      <Confettis />
      <Suspense>
        <Navbar
          user={{ global_name: user?.global_name, image: user?.image }}
          navigationItems={mainNavigation}
        />
      </Suspense>
    </div>
  );
}
