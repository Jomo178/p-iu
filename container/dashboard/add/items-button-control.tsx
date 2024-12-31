"use client";

import { useState } from "react";
import { Staff } from "@prisma/client";

import {
  ItemFormPropsValue,
  ItemSchemaValue,
  ItemsNameType,
} from "@/types/items";
import { useDefaultItemsFormValues } from "@/config/items-add";
import { hasPermission, scrollToCarousel, toUpperCase } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CarouselApi } from "@/components/ui/carousel";
import { Icons } from "@/components/ui/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ItemsCustomPropertiesDialog } from "./items-custom-props";
import ItemsPreviewToUpload from "./items-preview-to-upload";

interface ItemsButtonControlProps<T extends ItemsNameType> {
  itemNameType: T;
  eventReleaseDate: Date;
  itmesFormPropsValue: ItemSchemaValue<T>[];
  setItemsFormPropsValueAction: React.Dispatch<
    React.SetStateAction<ItemSchemaValue<T>[]>
  >;
  carouselApi: CarouselApi;
  carouselCount: number;
  setCarouselCountAction: React.Dispatch<React.SetStateAction<number>>;
  setCarouselCurrentIndexAction: React.Dispatch<React.SetStateAction<number>>;
  currentStaff: Staff;
}

export default function ItemsButtonControl<T extends ItemsNameType>({
  itemNameType,
  eventReleaseDate,
  itmesFormPropsValue,
  setItemsFormPropsValueAction,
  carouselApi,
  carouselCount,
  setCarouselCountAction,
  setCarouselCurrentIndexAction,
  currentStaff,
}: ItemsButtonControlProps<T>) {
  const [openDialog, setOpenDialog] = useState(false);
  const [getNewCustomProps, setNewCustomProps] =
    useDefaultItemsFormValues(itemNameType);

  return (
    <>
      <div className="mb-4 flex flex-col items-center justify-center gap-4">
        <div className="flex justify-center gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                disabled={carouselCount - 1 == 0}
                onClick={() => {
                  setItemsFormPropsValueAction((prev) => {
                    const indexToDelete =
                      carouselApi?.selectedScrollSnap() ?? 0;
                    const updatedData = prev.filter(
                      (_, index) => index !== indexToDelete
                    );

                    const newIndex = Math.min(
                      indexToDelete,
                      updatedData.length - 1
                    );
                    setCarouselCountAction(updatedData.length);
                    setCarouselCurrentIndexAction(newIndex == 0 ? 1 : newIndex);
                    return updatedData;
                  });
                }}
              >
                <Icons.deleteButton size={24} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete {toUpperCase(itemNameType)}</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                disabled={carouselCount == 15}
                onClick={() => {
                  setItemsFormPropsValueAction((prev) => [
                    ...prev,
                    {
                      ...getNewCustomProps,
                      id: Math.random().toString(),
                      releaseDate: eventReleaseDate,
                      errors: [],
                    },
                  ]);

                  setCarouselCountAction(itmesFormPropsValue.length + 1);
                  scrollToCarousel(carouselApi, itmesFormPropsValue.length);
                }}
              >
                <Icons.addButton size={24} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add {toUpperCase(itemNameType)}</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                onClick={() => setOpenDialog((prev) => !prev)}
              >
                <Icons.customPropsButton className="h-6 w-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Custom Properties</p>
            </TooltipContent>
          </Tooltip>
          <ItemsPreviewToUpload
            itemNameType={itemNameType}
            itemsFormPropsValue={itmesFormPropsValue}
            setItemsFormPropsValueAction={setItemsFormPropsValueAction}
            defaultValues={{
              ...getNewCustomProps,
              releaseDate: eventReleaseDate,
              errors: [],
            }}
            disabled={hasPermission(currentStaff, `create:${itemNameType}`)}
            carouselApi={carouselApi}
          />
        </div>
      </div>

      <ItemsCustomPropertiesDialog
        itemNameType={itemNameType}
        setItemFormPropsValueAction={setItemsFormPropsValueAction}
        getNewCustomProps={
          {
            ...getNewCustomProps,
            releaseDate: eventReleaseDate,
          } as ItemFormPropsValue[T]
        }
        setNewCustomPropsAction={setNewCustomProps as ItemFormPropsValue[T]}
        openDialog={openDialog}
        setOpenDialogAction={setOpenDialog}
      />
    </>
  );
}
