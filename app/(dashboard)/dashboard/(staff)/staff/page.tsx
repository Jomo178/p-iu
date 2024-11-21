import {
  columns,
  StaffMemberDetails,
} from "@/container/dashboard/staff/staff-columns";
import { getAllStaffDiscordProfiles } from "@/server/staff/_action";
import { Role } from "@prisma/client";

import { prisma } from "@/lib/database";
import { DataTable } from "@/components/ui/table/data-table";

interface StaffProps {}

export default async function Staff({}: StaffProps) {
  const staffDetails = await prisma.staff.findMany();
  const staffDiscordDetails = await getAllStaffDiscordProfiles();

  const data: StaffMemberDetails[] = await Promise.all(
    staffDetails.map(async (staff, index) => {
      const findEmailForStaff = await prisma.user.findFirst({
        where: {
          discordId: staff.discordId,
        },
        select: {
          email: true,
        },
      });

      return {
        ...staff,
        email: findEmailForStaff?.email ?? "No Email provided",
        ...staffDiscordDetails[index],
        avatar: staffDiscordDetails[index].avatar ?? "/images/iu.png",
      };
    })
  );

  const roleOrder = Object.values(Role);
  data.sort((a, b) => roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role));

  return (
    <div className="mx-auto py-10 md:container">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
