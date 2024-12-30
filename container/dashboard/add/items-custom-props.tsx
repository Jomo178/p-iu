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
              if (itemType === "issues") {
                newData.group = value.group;
                newData.act = value.act;
                newData.rarity = value.rarity;
              } else if (itemType === "frames") {
                newData.rarity = value.rarity;
              } else {
                newData.price = value.price;
                newData.onMarket = value.onMarket;
                newData.shortName = value.shortName;
                newData.isBig = value.isBig;
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
              const itemsObj = {
                issues: { group: "", act: "", rarity: 1 },
                frames: { rarity: "Common" },
                fonts: {
                  price: 0,
                  onMarket: false,
                  shortName: "",
                  isBig: false,
                },
              };

              setNewCustomPropsAction({
                ...getNewCustomProps,
                ...(itemsObj[itemType] as any),
              });

              setItemFormPropsValueAction((prev) =>
                prev.map((item) => ({
                  ...item,
                  ...(itemsObj[itemType] as any),
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
