"use client";

import { useState } from "react";
import {
  checkDuplicateItemsCode,
  UploadItems,
} from "@/server/add/upload-items";
import { toast } from "sonner";

import { ItemSchemaValue, ItemsNameType } from "@/types/items";
import { itemsSchema } from "@/config/items-add";
import { cn, scrollToCarousel, toUpperCase } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CarouselApi } from "@/components/ui/carousel";
import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/ui/credenza";
import { Icons } from "@/components/ui/icons";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Typography } from "@/components/ui/typography";

import { ItemsUploadPreview } from "./items-upload-preview";

interface ItemsPreviewToUploadProps<T extends ItemsNameType> {
  itemNameType: T;
  itemsFormPropsValue: ItemSchemaValue<T>[];
  setItemsFormPropsValueAction: React.Dispatch<
    React.SetStateAction<ItemSchemaValue<T>[]>
  >;
  defaultValues: ItemSchemaValue<T>;
  disabled: boolean;
  carouselApi: CarouselApi;
}

export default function ItemsPreviewToUpload<T extends ItemsNameType>({
  itemNameType,
  itemsFormPropsValue,
  setItemsFormPropsValueAction,
  defaultValues,
  disabled,
  carouselApi,
}: ItemsPreviewToUploadProps<T>) {
  const [openSheet, setOpenSheet] = useState(false);
  const [openUpload, setOpenUpload] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadingProgress, setUploadingProgress] = useState(0);
  const [uploadingResponse, setUploadingResponse] = useState<
    {
      variant: "success" | "error";
      message?: string;
    }[]
  >([]);

  const itemName = itemNameType.slice(0, -1);

  const openPreview = async () => {
    const formErrors = itemsFormPropsValue.map((item, index) => {
      const checkEmptyProps = itemsSchema[itemNameType].safeParse(item);

      return (
        checkEmptyProps.error?.issues.map((error) => ({
          index,
          path: error.path[0].toString(),
          message: error.message,
        })) || []
      );
    });

    if (formErrors.length > 0) {
      setItemsFormPropsValueAction((prev) => {
        return prev.map((item, index) => {
          const errors = formErrors[index];
          return {
            ...item,
            errors: errors.length > 0 ? errors : [],
          };
        });
      });

      for (let i = 0; i < formErrors.length; i++) {
        if (!formErrors[i].length) continue;
        toast.error(`${toUpperCase(itemName)} Form Error`, {
          description: `Please fill out the required fields in the ${itemName} form before uploading.`,
          action: {
            label: "Jump to Form",
            onClick: () =>
              scrollToCarousel(carouselApi, formErrors[i][0].index),
          },
        });
        break;
      }
    }

    if (formErrors.some((errors) => errors.length > 0)) return;

    if (itemNameType === "fonts") return setOpenSheet(true);

    const checkCodesPromise = checkDuplicateItemsCode(
      itemsFormPropsValue.map((item: any) => item.code),
      itemNameType
    );

    toast.promise(checkCodesPromise, {
      loading: `Checking for duplicate ${itemName} codes...`,
      success: `Duplicate ${itemName} codes have been checked successfully.`,
      error: `Error checking duplicate ${itemName} codes.`,
    });

    const checkCodes = await checkCodesPromise;

    setItemsFormPropsValueAction((prev) => {
      return prev.map((item: any, index) => {
        if (!checkCodes.includes(item.code)) return item;
        return {
          ...item,
          codeDuplicate: true,
          errors: checkCodes.includes(item.code)
            ? [
                ...(item.errors || []),
                {
                  message: `Duplicate ${toUpperCase(itemName)} Code`,
                  path: "code",
                },
              ]
            : item.errors,
        };
      });
    });

    if (checkCodes.length != 0) {
      for (let i = 0; i < checkCodes.length; i++) {
        toast.error("Duplicate Issue Code", {
          description:
            "Please change the issue code to a unique one before uploading.",
          action: {
            label: "Jump to Form",
            onClick: () =>
              scrollToCarousel(
                carouselApi,
                itemsFormPropsValue.findIndex(
                  (item: any) => item.code === checkCodes[i]
                )
              ),
          },
        });
        break;
      }
      return;
    }

    setOpenSheet(true);
  };

  const onSubmit = async () => {
    setOpenUpload(true);
    setIsUploading(true);

    const uploadPromises = itemsFormPropsValue.map((item, index) =>
      UploadItems(itemNameType, item)
        .then(({ message, variant }) => {
          setUploadingProgress(
            ((index + 1) / itemsFormPropsValue.length) * 100
          );
          return {
            variant,
            message,
          };
        })
        .catch((error) => {
          return {
            variant: "error" as const,
            message: error.message as string,
          };
        })
    );

    const responses = await Promise.all(uploadPromises);
    setUploadingResponse(responses);

    const failedItems = itemsFormPropsValue.filter(
      (_, index) => responses[index].variant === "error"
    );
    setItemsFormPropsValueAction(() =>
      failedItems.length > 0
        ? failedItems
        : [{ ...defaultValues, id: Math.random().toString() }]
    );

    setOpenSheet(false);
    setIsUploading(false);
  };

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" onClick={openPreview} disabled={disabled}>
            <Icons.previewButton size={24} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Upload Preview</p>
        </TooltipContent>
      </Tooltip>
      <ItemsUploadPreview
        itemNameType={itemNameType}
        itemsFormPropsValue={itemsFormPropsValue}
        openSheet={openSheet}
        setOpenSheetAction={setOpenSheet}
        onSubmitAction={onSubmit}
      />

      <Credenza open={openUpload} onOpenChange={setOpenUpload}>
        <CredenzaContent
          className="sm:max-w-[600px]"
          disableoutsideclick="true"
        >
          <CredenzaHeader>
            <CredenzaTitle>Uploading {toUpperCase(itemNameType)}</CredenzaTitle>
            <CredenzaDescription>
              {isUploading
                ? `Uploading the ${itemNameType}. Please wait until the process is complete.`
                : `All ${itemNameType} have been uploaded successfully.`}
            </CredenzaDescription>
          </CredenzaHeader>
          <CredenzaBody className="my-4 flex flex-col items-center space-y-4">
            {isUploading && (
              <div className="flex flex-row items-center gap-4">
                <Icons.spinner size={32} />
                <p>Uploading</p>
              </div>
            )}
            <div className="flex w-full items-center gap-4">
              <Progress value={uploadingProgress} className="h-4 w-full" />
              <p>{uploadingProgress.toPrecision(3)}%</p>
            </div>
            <ScrollArea className="h-48 w-full text-center">
              {uploadingResponse.map((item, index) => (
                <Typography
                  key={index}
                  variant="p"
                  className={cn(
                    "!mt-0 mb-1",
                    item.variant === "error" && "text-red-500",
                    item.variant === "success" && "text-green-500"
                  )}
                >
                  {item.variant === "success"
                    ? `${toUpperCase(itemName)} ${index + 1} ${item.message}`
                    : `${toUpperCase(itemName)} ${index + 1} ${item.message}`}
                </Typography>
              ))}
            </ScrollArea>
          </CredenzaBody>
          <CredenzaFooter className="flex flex-row justify-center">
            <Button
              loading={isUploading}
              onClick={() => {
                setOpenUpload(false);
                setOpenSheet(false);
                setUploadingProgress(0);
                setUploadingResponse([]);
              }}
            >
              Close
            </Button>
          </CredenzaFooter>
        </CredenzaContent>
      </Credenza>
    </>
  );
}
