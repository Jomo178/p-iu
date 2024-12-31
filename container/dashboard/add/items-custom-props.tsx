"use client";

import { useState } from "react";
import { toast } from "sonner";

import {
  ItemFormPropsValue,
  ItemSchemaValue,
  ItemsFormPropsValueKeys,
  ItemsNameType,
} from "@/types/items";
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

interface ItemsCustomPropertiesDialogProps<T extends ItemsNameType> {
  itemNameType: T;
  setItemFormPropsValueAction: React.Dispatch<
    React.SetStateAction<ItemSchemaValue<T>[]>
  >;
  getNewCustomProps: ItemFormPropsValue[T];
  setNewCustomPropsAction: React.Dispatch<
    React.SetStateAction<ItemSchemaValue<T>>
  >;
  openDialog: boolean;
  setOpenDialogAction: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ItemsCustomPropertiesDialog<T extends ItemsNameType>({
  itemNameType,
  setItemFormPropsValueAction,
  getNewCustomProps,
  setNewCustomPropsAction,
  openDialog,
  setOpenDialogAction,
}: ItemsCustomPropertiesDialogProps<T>) {
  const [itemsFormPropsValue, setItemsFormPropsValue] =
    useState<ItemSchemaValue<T>>(getNewCustomProps);

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
            Customize {toUpperCase(itemNameType)} Details
          </CredenzaTitle>
          <CredenzaDescription>
            Update the details of your {itemNameType} here. Click Save when
            you're done.
          </CredenzaDescription>
        </CredenzaHeader>
        <ItemsForm
          index={1}
          itemNameType={itemNameType}
          defaultValues={getNewCustomProps}
          onFormChangeAction={(index, value) => {
            setItemsFormPropsValue((prev) => {
              const newData: ItemSchemaValue<T> = { ...prev };
              if (
                itemNameType === "issues" &&
                "act" in value &&
                "group" in newData
              ) {
                newData.group = value.group;
                newData.act = value.act;
                newData.rarity = value.rarity;
              } else if (
                itemNameType === "frames" &&
                "rarity" in value &&
                "rarity" in newData
              ) {
                newData.rarity = value.rarity;
              } else if ("price" in value && "price" in newData) {
                newData.price = value.price;
                newData.onMarket = value.onMarket;
                newData.shortName = value.shortName;
                newData.isBig = value.isBig;
              }
              return newData;
            });
          }}
          hiddenFields={
            [
              "name",
              "code",
              "image",
              "releaseDate",
            ] as ItemsFormPropsValueKeys<T>[]
          }
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
                ...itemsObj[itemNameType],
              });

              setItemFormPropsValueAction((prev) =>
                prev.map((item) => ({
                  ...item,
                  ...itemsObj[itemNameType],
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
