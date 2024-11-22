"use client";

import React from "react";
import { StaffMemberDetails } from "@/container/dashboard/staff/staff-columns";
import { Staff } from "@prisma/client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table/table";

interface DataTableProps<TData extends StaffMemberDetails, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  staff: Staff;
}

export function DataTable<TData extends StaffMemberDetails, TValue>({
  columns,
  data,
  staff,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [dataState, setDataState] = React.useState<TData[]>(data);

  const table = useReactTable({
    data: dataState,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    meta: {
      setDataStateAction(data) {
        setDataState((prev: TData[]) => {
          return prev.map((item, index) => {
            if (item.discordId == data.discordId) {
              return {
                ...item,
                ...data,
              };
            }
            return item;
          });
        });
      },
      staff: staff,
    },
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
