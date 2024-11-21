import { StaffMemberDetails } from "@/container/dashboard/staff/staff-columns";

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    setDataStateAction: (data: StaffMemberDetails) => void;
  }
}
