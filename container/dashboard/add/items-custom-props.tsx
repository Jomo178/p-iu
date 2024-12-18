"use client";

import { useState } from "react";
import { EventType } from "@prisma/client";
import { toast } from "sonner";

import { ItemsFormPropsValue } from "@/config/items-add";
import { toUpperCase } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Credenza,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/ui/credenza";

import ItemsForm from "./items-form";

interface ItemsCustomPropertiesDialogProps {
  openDialog: boolean;
  setOpenDialogAction: React.Dispatch<React.SetStateAction<boolean>>;
  itemType: `${EventType}`;
  setItemFormPropsValueAction: React.Dispatch<
    React.SetStateAction<ItemsFormPropsValue[]>
  >;
  getNewCustomProps: ItemsFormPropsValue;
  setNewCustomPropsAction: React.Dispatch<
    React.SetStateAction<ItemsFormPropsValue>
  >;
}

export function ItemsCustomPropertiesDialog({
  openDialog,
  itemType,
  setOpenDialogAction,
  setItemFormPropsValueAction,
  getNewCustomProps,
  setNewCustomPropsAction,
}: ItemsCustomPropertiesDialogProps) {
  const [itemsFormPropsValue, setItemsFormPropsValue] =
    useState<ItemsFormPropsValue>(getNewCustomProps);

  const saveCustomProperties = () => {
    setNewCustomPropsAction((prev) => ({
      ...prev,
      ...itemsFormPropsValue,
    }));

    toast.success("Custom Properties Updated");

    setItemFormPropsValueAction((prev) =>
      prev.map((item) => ({
        ...item,
        ...itemsFormPropsValue,
        id: Math.random().toString(),
      }))
    );

    setOpenDialogAction(false);
  };

  return (
    <Credenza open={openDialog} onOpenChange={setOpenDialogAction}>
      <CredenzaContent className="sm:max-w-[600px]">
        <CredenzaHeader>
          <CredenzaTitle>
            Customize {toUpperCase(itemType)} Details
          </CredenzaTitle>
          <CredenzaDescription>
            Update the details of your {itemType} here. Click Save when you're
            done.
          </CredenzaDescription>
        </CredenzaHeader>
        <ItemsForm
          index={1}
          itemType={itemType}
          defaultValues={getNewCustomProps}
          onFormChangeAction={(index, value: any) => {
            setItemsFormPropsValue((prev) => {
              const newData = { ...prev } as any;
              newData.rarity = value.rarity;
              if (itemType === "issues") {
                newData.group = value.group;
                newData.act = value.act;
              }
              return newData;
            });
          }}
          hiddenFields={["name", "code", "image", "releaseDate"]}
        />
        <CredenzaFooter className="flex flex-row justify-center">
          <Button
            variant="destructive"
            onClick={() => {
              const issuesObj = {
                group: "",
                act: "",
                rarity: 1,
              };

              setNewCustomPropsAction({
                ...getNewCustomProps,
                ...(itemType === "issues" ? issuesObj : { rarity: "Common" }),
              });

              setItemFormPropsValueAction((prev) =>
                prev.map((item) => ({
                  ...item,
                  ...(itemType === "issues" ? issuesObj : { rarity: "Common" }),
                  id: Math.random().toString(),
                }))
              );

              toast.success("Custom Properties Deleted");
              setOpenDialogAction(false);
            }}
          >
            Delete
          </Button>
          <Button onClick={() => saveCustomProperties()}>Save changes</Button>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
}
