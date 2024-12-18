"use client";

import { useEffect, useState } from "react";
import { FramesViewPort, IssuesViewPort } from "@/types";
import { EventType, FrameRarity, Frames, Issues } from "@prisma/client";

import {
  generateFrameCode,
  generateIssueCode,
  ItemsFormPropsValue,
} from "@/config/items-add";
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

interface EditItemsDialogProps {
  itemType: `${EventType}`;
  item: Issues | Frames;
  openDialog: boolean;
  setOpenDialogAction: React.Dispatch<React.SetStateAction<boolean>>;
  viewPortType: IssuesViewPort;
  setViewTypeDataAction?: React.Dispatch<
    React.SetStateAction<IssuesViewPort | FramesViewPort>
  >;
}

export default function EditItemsDialog({
  itemType,
  item,
  openDialog,
  setOpenDialogAction,
  viewPortType,
  setViewTypeDataAction,
}: EditItemsDialogProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const defaultValues = {
    ...item,
    codeDuplicate: false,
    releaseDate: new Date(),
    image: new File([], "filename"),
    imageLink: item.image,
    changedImage: false,
    errors: [],
  };
  const itemName = itemType === "issues" ? "issue" : "frame";
  const [itemData, setItemData] = useState<
    ItemsFormPropsValue & { imageLink: string; changedImage: boolean }
  >(defaultValues);
  const { handleEditItems } = usehandleApprovePendingItems(
    false,
    setViewTypeDataAction
  );

  useEffect(() => {
    const fetchImage = async () => {
      if (item.image && openDialog && itemData.image.size === 0) {
        const file = await urlToFile(item.image, "item-image.png", "image/png");

        setItemData((prev) => ({ ...prev, image: file }));
        setImageLoaded(true);
      }
    };

    fetchImage();
  }, [item.image, openDialog]);

  const handleEdit = async () => {
    await handleEditItems({
      viewPortId: viewPortType.id,
      issue: itemData,
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
          setItemData(defaultValues);
        }}
      >
        <CredenzaContent className="sm:max-w-[600px]">
          <CredenzaHeader>
            <CredenzaTitle>Edit Pending {toUpperCase(itemName)}</CredenzaTitle>
            <CredenzaDescription>
              Edit the pending {itemName} details.
            </CredenzaDescription>
          </CredenzaHeader>

          <CredenzaBody className="col-span-3 grid h-full content-start space-y-4">
            <ScrollArea className="max-h-80 w-full md:!max-h-full">
              {imageLoaded ? (
                <EditFrom
                  itemType={itemType}
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

interface EditFromProps {
  itemType: `${EventType}`;
  itemData: ItemsFormPropsValue;
  setItemDataAction: React.Dispatch<
    React.SetStateAction<
      ItemsFormPropsValue & { imageLink: string; changedImage: boolean }
    >
  >;
}

function EditFrom({ itemType, itemData, setItemDataAction }: EditFromProps) {
  return (
    <ItemsForm
      index={1}
      itemType={itemType}
      hiddenFields={["releaseDate"]}
      defaultValues={itemData}
      onFormChangeAction={(_, value) => {
        if (itemType === "issues" && "act" in value) {
          value.code = generateIssueCode(
            value.name,
            value.act,
            value.group,
            value.rarity
          );
        } else {
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
