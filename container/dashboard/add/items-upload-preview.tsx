"use client";

import { useMemo } from "react";
import Image from "next/image";
import { EventType } from "@prisma/client";

import { ItemsFormPropsValue } from "@/config/items-add";
import { toUpperCase } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Typography } from "@/components/ui/typography";

interface ItemsUploadPreviewProps {
  itemType: `${EventType}`;
  itemsFormPropsValue: ItemsFormPropsValue[];
  openSheet: boolean;
  setOpenSheetAction: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitAction: () => void;
}

export function ItemsUploadPreview({
  itemType,
  itemsFormPropsValue,
  openSheet,
  setOpenSheetAction,
  onSubmitAction,
}: ItemsUploadPreviewProps) {
  return (
    <Sheet open={openSheet} onOpenChange={setOpenSheetAction}>
      <SheetContent className="!w-full p-4 sm:max-w-none">
        <SheetHeader className="border-b-2 pb-4">
          <SheetTitle>All {toUpperCase(itemType)} Preview</SheetTitle>
          <SheetDescription>
            Scroll through all the {itemType} to review their details.
          </SheetDescription>
        </SheetHeader>

        <div className="grid h-[80vh] grid-cols-1 gap-4 overflow-y-auto sm:grid-cols-2 lg:grid-cols-4">
          {itemsFormPropsValue.map((item, index) => (
            <CardPreview item={item} itemType={itemType} key={item.id} />
          ))}
          <div className="flex flex-row sm:col-span-2 md:col-span-4 md:justify-end">
            <Button
              variant="expandIcon"
              className="mb-4 w-full md:mr-8 md:w-auto"
              onClick={() => onSubmitAction()}
              Icon={Icons.upload}
              iconPlacement="right"
            >
              Upload {toUpperCase(itemType)}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface CardPreviewProps {
  itemType: `${EventType}`;
  item: ItemsFormPropsValue;
}

function CardPreview({ itemType, item }: CardPreviewProps) {
  const imageUrl = useMemo(() => {
    if (item.image && Object.keys(item.image).length > 0) {
      return URL.createObjectURL(item.image);
    }
    return "";
  }, [item.image]);

  return (
    <Card
      className="mx-auto mb-10 flex w-full max-w-xs items-center border-0 sm:flex-col"
      key={item.id}
    >
      <CardContent className="flex aspect-auto items-center justify-center p-0">
        {Object.keys(item.image).length > 0 && (
          <Image
            src={imageUrl}
            alt={item.name}
            className="max-w-48 rounded-md"
            width={192}
            height={162}
          />
        )}
      </CardContent>
      <Separator className="mx-auto my-4 hidden max-w-[50%] sm:block" />
      <CardHeader className="w-full p-0 text-center">
        <div className="mx-[25%] flex min-h-full max-w-[50%] flex-row">
          <Separator
            orientation="vertical"
            className="hidden w-[2px] sm:block"
          />
          <div className="sm:flex-1">
            <TextInformation title="Name" description={item.name} />
            {"group" in item && (
              <TextInformation title="Group" description={item.group} />
            )}
            {"act" in item && (
              <TextInformation title="Act" description={item.act} />
            )}
            <TextInformation title="Code" description={item.code} />
            {"rarity" in item && itemType === "issues" && (
              <div className="flex items-center justify-between">
                <Separator className="hidden h-[2px] w-4 sm:block" />
                <Typography variant="small" className="text-left">
                  Rarity:
                </Typography>
                <Typography
                  variant="small"
                  className="!mt-0 w-1/2 text-left text-white"
                >
                  {typeof item.rarity === "number" &&
                    Array.from({ length: item.rarity }).map((_, starIndex) => (
                      <Icons.star key={starIndex} size={16} />
                    ))}
                </Typography>
              </div>
            )}
            {"rarity" in item && itemType === "frames" && (
              <TextInformation
                title="Rarity"
                description={item.rarity as string}
              />
            )}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

function TextInformation({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <Separator className="hidden h-[2px] w-4 sm:block" />
      <Typography variant="small" className="text-left text-muted-foreground">
        {title}:
      </Typography>
      <Typography
        variant="small"
        className="!mt-0 w-1/2 text-left text-base text-white"
      >
        {description}
      </Typography>
    </div>
  );
}
