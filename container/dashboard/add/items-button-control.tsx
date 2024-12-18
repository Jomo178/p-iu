"use client";

import { useState } from "react";
import { EventType, Staff } from "@prisma/client";

import {
  ItemsFormPropsValue,
  useDefaultItemsFormValues,
} from "@/config/items-add";
import { hasPermission, scrollToCarousel, toUpperCase } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CarouselApi } from "@/components/ui/carousel";
import { Icons } from "@/components/ui/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ItemsCustomPropertiesDialog } from "./items-custom-props";
import ItemsPreviewToUpload from "./items-preview-to-upload";

interface ItemsButtonControlProps {
  itemType: `${EventType}`;
  eventReleaseDate: Date;
  itmesFormPropsValue: ItemsFormPropsValue[];
  setItemsFormPropsValueAction: React.Dispatch<
    React.SetStateAction<ItemsFormPropsValue[]>
  >;
  carouselApi: CarouselApi;
  carouselCount: number;
  setCarouselCountAction: React.Dispatch<React.SetStateAction<number>>;
  setCarouselCurrentIndexAction: React.Dispatch<React.SetStateAction<number>>;
  staff: Staff;
}

export default function ItemsButtonControl({
  itemType,
  eventReleaseDate,
  itmesFormPropsValue,
  setItemsFormPropsValueAction,
  carouselApi,
  carouselCount,
  setCarouselCountAction,
  setCarouselCurrentIndexAction,
  staff,
}: ItemsButtonControlProps) {
  const [openDialog, setOpenDialog] = useState(false);
  const [getNewCustomProps, setNewCustomProps] =
    useDefaultItemsFormValues(itemType);

  return (
    <>
      <div className="mb-4 flex flex-col items-center justify-center gap-4">
        <div className="flex justify-center gap-4">
          <TooltipProvider>
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
                      setCarouselCurrentIndexAction(
                        newIndex == 0 ? 1 : newIndex
                      );
                      return updatedData;
                    });
                  }}
                >
                  <Icons.deleteButton size={24} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete {toUpperCase(itemType)}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  disabled={carouselCount == 15}
                  onClick={() => {
                    setItemsFormPropsValueAction((prev: any) => [
                      ...prev,
                      {
                        ...getNewCustomProps,
                        id: Math.random().toString(),
                        releaseDate: eventReleaseDate,
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
                <p>Add {toUpperCase(itemType)}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
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
          </TooltipProvider>
          <ItemsPreviewToUpload
            itemType={itemType}
            carouselApi={carouselApi}
            itemsFormPropsValue={itmesFormPropsValue as any}
            setItemsFormPropsValueAction={setItemsFormPropsValueAction as any}
            defaultValues={{
              ...(getNewCustomProps as any),
              releaseDate: eventReleaseDate,
            }}
            disabled={hasPermission(staff, "create:issue")}
          />
        </div>
      </div>

      <ItemsCustomPropertiesDialog
        openDialog={openDialog}
        setOpenDialogAction={setOpenDialog}
        itemType={itemType}
        setItemFormPropsValueAction={setItemsFormPropsValueAction as any}
        getNewCustomProps={{
          ...getNewCustomProps,
          releaseDate: eventReleaseDate,
        }}
        setNewCustomPropsAction={setNewCustomProps as any}
      />
    </>
  );
}
