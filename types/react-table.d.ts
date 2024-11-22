import { StaffMemberDetails } from "@/container/dashboard/staff/staff-columns";
import { Staff } from "@prisma/client";

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    setDataStateAction: (data: StaffMemberDetails) => void;
    staff: Staff;
  }
}
