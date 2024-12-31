"use client";

import { useEffect, useState } from "react";
import { FrameRarity } from "@prisma/client";

import {
  ItemListingView,
  ItemSchemaValue,
  ItemsNameType,
  ItemType,
} from "@/types/items";
import { generateFrameCode, generateIssueCode } from "@/config/items-add";
import { toUpperCase, urlToFile } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/ui/credenza";
import { ScrollArea } from "@/components/ui/scroll-area";

import ItemsForm from "../add/items-form";
import { usehandleApprovePendingItems } from "./handlers";

interface EditItemsDialogProps<T extends ItemsNameType> {
  itemNameType: T;
  item: ItemType<T>[0] | ItemType<T>[1];
  viewPortType: ItemListingView<T>;
  setViewTypeDataAction?: React.Dispatch<
    React.SetStateAction<ItemListingView<T>>
  >;
  openDialog: boolean;
  setOpenDialogAction: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditItemsDialog<T extends ItemsNameType>({
  itemNameType,
  item,
  openDialog,
  viewPortType,
  setViewTypeDataAction,
  setOpenDialogAction,
}: EditItemsDialogProps<T>) {
  const [imageLoaded, setImageLoaded] = useState(false);
  let defaultValues;

  if (itemNameType === "fonts") {
    defaultValues = {
      ...item,
      codeDuplicate: false,
      errors: [],
    };
  } else {
    defaultValues = {
      ...item,
      codeDuplicate: false,
      releaseDate: new Date(),
      image: new File([], "filename"),
      imageLink: "image" in item ? item.image : "",
      changedImage: false,
      errors: [],
    };
  }

  const [itemData, setItemData] = useState<
    ItemSchemaValue<T> & { imageLink: string; changedImage: boolean }
  >(defaultValues as any);
  const { handleEditItems } = usehandleApprovePendingItems(
    itemNameType,
    setViewTypeDataAction
  );

  useEffect(() => {
    const fetchImage = async () => {
      if (
        "image" in item &&
        item.image &&
        openDialog &&
        itemData.image.size === 0
      ) {
        const file = await urlToFile(
          item.image,
          item.name + ".png",
          "image/png"
        );

        setItemData((prev) => ({ ...prev, image: file }));
        setImageLoaded(true);
      } else if ("filePath" in item && item.filePath && openDialog) {
        const file = await urlToFile(
          item.filePath,
          item.name + ".ttf",
          "font/ttf"
        );

        setItemData((prev) => ({ ...prev, image: file }));
        setImageLoaded(true);
      }
    };

    fetchImage();
  }, [item, openDialog]);

  const handleEdit = async () => {
    await handleEditItems({
      itemsViewPortId: viewPortType.id,
      item: itemData,
    });

    setOpenDialogAction(false);
  };

  return (
    <>
      <Credenza
        open={openDialog}
        onOpenChange={() => {
          setOpenDialogAction(false);
          setImageLoaded(false);
          setItemData(defaultValues as any);
        }}
      >
        <CredenzaContent className="sm:max-w-[600px]">
          <CredenzaHeader>
            <CredenzaTitle>
              Edit Pending {toUpperCase(itemNameType.slice(0, -1))}
            </CredenzaTitle>
            <CredenzaDescription>
              Edit the pending {itemNameType.slice(0, -1)} details.
            </CredenzaDescription>
          </CredenzaHeader>

          <CredenzaBody className="col-span-3 grid h-full content-start space-y-4">
            <ScrollArea className="max-h-80 w-full md:!max-h-full">
              {imageLoaded ? (
                <EditFrom
                  itemNameType={itemNameType}
                  itemData={itemData}
                  setItemDataAction={setItemData}
                />
              ) : (
                <p>Loading image...</p>
              )}
            </ScrollArea>
          </CredenzaBody>
          <CredenzaFooter className="flex flex-row justify-center">
            <Button
              onClick={() => setOpenDialogAction(false)}
              variant="secondary"
            >
              Cancel
            </Button>
            <Button onClick={handleEdit}>Save</Button>
          </CredenzaFooter>
        </CredenzaContent>
      </Credenza>
    </>
  );
}

interface EditFromProps<T extends ItemsNameType> {
  itemNameType: T;
  itemData: ItemSchemaValue<T>;
  setItemDataAction: React.Dispatch<
    React.SetStateAction<
      ItemSchemaValue<T> & { imageLink: string; changedImage: boolean }
    >
  >;
}

function EditFrom<T extends ItemsNameType>({
  itemNameType,
  itemData,
  setItemDataAction,
}: EditFromProps<T>) {
  return (
    <ItemsForm
      index={1}
      itemNameType={itemNameType}
      hiddenFields={["releaseDate"]}
      defaultValues={itemData}
      onFormChangeAction={(_, value) => {
        if (itemNameType === "issues" && "act" in value) {
          value.code = generateIssueCode(
            value.name,
            value.act,
            value.group,
            value.rarity
          );
        } else if (itemNameType === "frames" && "rarity" in value) {
          value.code = generateFrameCode(
            value.name,
            value.rarity as FrameRarity
          );
        }

        setItemDataAction((prev) => {
          if (
            prev.image?.size !== value.image?.size &&
            prev.image?.name !== value.image?.name
          ) {
            return { ...value, imageLink: prev.imageLink, changedImage: true };
          }
          return { ...prev, ...value };
        });
      }}
    />
  );
}
