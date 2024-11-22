"use client";

import { Permission, Role, Staff } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

import { UserProfile } from "@/types/next-auth";
import { cn, formatTimestamp, toUpperCase } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DataTableColumnHeader } from "@/components/ui/table/data-table-column-header";

import { StaffDataTableRowActions } from "./staff-row-actions";

export type StaffMemberDetails = Staff & UserProfile & { email: string };

export const columns: ColumnDef<StaffMemberDetails>[] = [
  {
    accessorKey: "username",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Username"
        className="ml-3"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-4">
          <Avatar className="h-9 w-9 sm:flex">
            <AvatarImage src={row.original.avatar ?? "/iu.png"} alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">
              {row.getValue("username")}
            </p>
            <p className="text-sm text-muted-foreground">
              {row.original.email}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
    cell: ({ row }) => toUpperCase(row.getValue("role")),
    sortingFn: (a, b) => {
      const roleOrder = Object.values(Role);
      return (
        roleOrder.indexOf(a.original.role) - roleOrder.indexOf(b.original.role)
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Joined" />
    ),
    cell: ({ row }) => formatTimestamp(row.getValue("createdAt")),
  },
  {
    accessorKey: "permissions",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Permissions"
        className="hidden md:block"
      />
    ),
    cell: ({ row }) => {
      const staff = row.original;
      const hasCreatePermissions = staff.create.length > 0;
      const hasEditPermissions = staff.edit.length > 0;
      const hasDeletePermissions = staff.delete.length > 0;
      const hadHandlePermissions = staff.handle.length > 0;
      const PermissionBadges = ({
        permissions,
      }: {
        permissions: Permission[];
      }) => {
        const permissionMap =
          permissions.length == Object.keys(Permission).length
            ? ["All Actions"]
            : permissions;

        return (
          <div className="flex flex-wrap gap-2">
            {permissionMap.map((permission) => (
              <Badge
                key={permission}
                variant="default"
                className="flex items-center space-x-1"
              >
                <span className="text-xs">{toUpperCase(permission)}</span>
              </Badge>
            ))}
          </div>
        );
      };

      return (
        <div
          className={cn(
            "hidden gap-2 md:grid",
            hasCreatePermissions &&
              hasEditPermissions &&
              hasDeletePermissions &&
              "grid-cols-2",
            ((hasEditPermissions && hasCreatePermissions) ||
              (hasDeletePermissions && hasCreatePermissions) ||
              (hasDeletePermissions && hasEditPermissions)) &&
              "grid-cols-3"
          )}
        >
          {hasCreatePermissions && (
            <div>
              <h4 className="mb-1 text-xs font-semibold">Create</h4>
              <PermissionBadges permissions={staff.create} />
            </div>
          )}
          {hasEditPermissions && (
            <div>
              <h4 className="mb-1 text-xs font-semibold">Edit</h4>
              <PermissionBadges permissions={staff.edit} />
            </div>
          )}
          {hasDeletePermissions && (
            <div>
              <h4 className="mb-1 text-xs font-semibold">Delete</h4>
              <PermissionBadges permissions={staff.delete} />
            </div>
          )}
          {hadHandlePermissions && (
            <div>
              <h4 className="mb-1 text-xs font-semibold">Handle</h4>
              <PermissionBadges permissions={staff.handle} />
            </div>
          )}
        </div>
      );
    },
    enableSorting: false,
  },
  {
    id: "actions",
    cell: ({ row, table }) => {
      return (
        <StaffDataTableRowActions
          setDataStateAction={
            table.options.meta?.setDataStateAction ?? (() => {})
          }
          row={row}
          staff={table.options.meta?.staff}
        />
      );
    },
  },
];
