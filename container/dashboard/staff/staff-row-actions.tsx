"use client";

import { Fragment, useState } from "react";
import { notFound } from "next/navigation";
import { editStaffDetails } from "@/server/staff/_action";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthorizationType, Staff, StaffRole } from "@prisma/client";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { ColumnDef, Row } from "@tanstack/react-table";
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { cn, hasPermission, toUpperCase } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxTree, TreeNode } from "@/components/ui/checkbox-tree";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/ui/credenza";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { StaffMemberDetails } from "./staff-columns";

interface StaffDataTableRowActionsProps {
  row: Row<StaffMemberDetails>;
  setDataStateAction: (state: StaffMemberDetails) => void;
  staff: Staff | undefined;
}

export function StaffDataTableRowActions({
  row,
  setDataStateAction,
  staff,
}: StaffDataTableRowActionsProps) {
  const [openDialog, setOpenDialog] = useState(false);
  if (!staff) return notFound();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem
            onClick={() => setOpenDialog(true)}
            disabled={hasPermission(staff, "edit:staff")}
          >
            Edit
            <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled
            // disabled={hasPermission(staff, "delete:staff")}
          >
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <EditStaffMemberDialog
        staff={row.original as StaffMemberDetails}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        setDataStateAction={setDataStateAction}
      />
    </>
  );
}

interface EditStaffMemberProps {
  staff: StaffMemberDetails;
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setDataStateAction: (state: StaffMemberDetails) => void;
}

function EditStaffMemberDialog({
  staff,
  openDialog,
  setOpenDialog,
  setDataStateAction,
}: EditStaffMemberProps) {
  const [loading, setLoading] = useState(false);
  const roles = Object.values(StaffRole);
  const permissions = Object.values(AuthorizationType);

  const permissionsTree: TreeNode[] = [
    {
      id: "create",
      label: "Create",
      children: permissions.map((permission) => ({
        id: permission,
        label: toUpperCase(permission),
        defaultChecked: staff.create.includes(permission),
      })),
    },
    {
      id: "edit",
      label: "Edit",
      children: permissions.map((permission) => ({
        id: permission,
        label: toUpperCase(permission),
        defaultChecked: staff.edit.includes(permission),
      })),
    },
    {
      id: "delete",
      label: "Delete",
      children: permissions.map((permission) => ({
        id: permission,
        label: toUpperCase(permission),
        defaultChecked: staff.delete.includes(permission),
      })),
    },
    {
      id: "handle",
      label: "Handle",
      children: permissions.map((permission) => ({
        id: permission,
        label: toUpperCase(permission),
        defaultChecked: staff.handle.includes(permission),
      })),
    },
  ];

  const formSchema = z.object({
    discordId: z.string().min(1),
    role: z.nativeEnum(StaffRole),
    create: z.array(z.nativeEnum(AuthorizationType)).optional().default([]),
    edit: z.array(z.nativeEnum(AuthorizationType)).optional().default([]),
    delete: z.array(z.nativeEnum(AuthorizationType)).optional().default([]),
    handle: z.array(z.nativeEnum(AuthorizationType)).optional().default([]),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      discordId: staff.discordId,
      role: staff.role,
      create: staff.create,
      edit: staff.edit,
      delete: staff.delete,
      handle: staff.handle,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (loading) return;
    setLoading(true);
    toast.promise(editStaffDetails(staff.discordId, data), {
      id: staff.discordId,
      loading: "Loading...",
      success: (response) => {
        setDataStateAction(data as any);
        setLoading(false);
        setOpenDialog(false);
        return response.message;
      },
      error: "Something went wrong. Please try again.",
    });
  };

  return (
    <Credenza open={openDialog} onOpenChange={setOpenDialog}>
      <CredenzaContent className="md:max-w-sm">
        <CredenzaHeader>
          <CredenzaTitle>Edit Staff Member Information</CredenzaTitle>
          <CredenzaDescription>
            Update the details for this staff member.
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody>
          <Form {...form}>
            <form className="mx-auto max-w-3xl space-y-8">
              <FormField
                control={form.control}
                name="discordId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Discord ID</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={staff.discordId}
                        type="text"
                        {...field}
                        disabled
                      />
                    </FormControl>
                    <FormDescription>
                      This is the unique Discord ID of the staff member.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Role</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? toUpperCase(
                                  roles.find((role) => role === field.value) ??
                                    ""
                                )
                              : "Select Role"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput placeholder="Search role..." />
                          <CommandList>
                            <CommandEmpty>No Role found.</CommandEmpty>
                            <CommandGroup>
                              {roles.map((role) => (
                                <CommandItem
                                  value={role}
                                  key={role}
                                  onSelect={() => {
                                    form.setValue("role", role);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      role === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {toUpperCase(role)}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      Choose the role for the staff member.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-2">
                <p className="text-sm">Permissions</p>
                <div className="grid grid-cols-2">
                  {permissionsTree.map((node) => (
                    <FormField
                      control={form.control}
                      name={node.id as "create" | "edit" | "delete"}
                      key={node.id}
                      render={({ field }) => (
                        <FormItem>
                          <TreeCheckBox
                            initialTree={node}
                            onValueChanged={(nodeId, checked) => {
                              const permissions = field.value ?? [];
                              if (checked && nodeId === node.id) {
                                form.setValue(
                                  field.name,
                                  node?.children?.map(
                                    (child) => child.id as AuthorizationType
                                  ) ?? []
                                );
                              } else if (!checked && nodeId === node.id) {
                                form.setValue(field.name, []);
                              }

                              if (checked && nodeId !== node.id) {
                                form.setValue(field.name, [
                                  ...permissions,
                                  nodeId,
                                ]);
                                return;
                              } else if (!checked && nodeId !== node.id) {
                                form.setValue(
                                  field.name,
                                  form
                                    .getValues(field.name)
                                    .filter(
                                      (permission: AuthorizationType) =>
                                        permission !== nodeId
                                    )
                                );
                              }
                            }}
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
              </div>
            </form>
          </Form>
        </CredenzaBody>
        <CredenzaFooter className="flex flex-row justify-center">
          <Button
            type="submit"
            loading={loading}
            onClick={form.handleSubmit(onSubmit)}
          >
            Save changes
          </Button>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
}

export default function TreeCheckBox({
  initialTree,
  onValueChanged,
}: {
  initialTree: TreeNode;
  onValueChanged?: (nodeId: AuthorizationType, checked: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-4">
      <CheckboxTree
        tree={initialTree}
        renderNode={({ node, isChecked, onCheckedChange, children }) => (
          <Fragment key={node.id}>
            <div className="flex items-center">
              {node.children ? (
                <Button
                  type="button"
                  className="group ml-2 h-6 w-6 border-0 p-0"
                  variant="outline"
                  onClick={() => setOpen((prevState) => !prevState)}
                  aria-expanded={open}
                  aria-label={open ? "Close menu" : "Open menu"}
                >
                  <svg
                    className="pointer-events-none"
                    width={11}
                    height={11}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L20 12"
                      className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              ) : null}
              <Checkbox
                className="mr-2"
                id={node.id}
                checked={isChecked}
                onCheckedChange={(checked) => {
                  onCheckedChange();
                  if (onValueChanged) {
                    onValueChanged(
                      node.id as AuthorizationType,
                      checked === "indeterminate" ? true : checked
                    );
                  }
                }}
              />
              <Label htmlFor={node.id}>{node.label}</Label>
            </div>
            {children && (
              <div
                className={cn(
                  "ms-6 space-y-3 transition-all duration-300",
                  open ? "max-h-screen opacity-100" : "hidden max-h-0 opacity-0"
                )}
              >
                {children}
              </div>
            )}
          </Fragment>
        )}
      />
    </div>
  );
}
