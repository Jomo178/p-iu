"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { FramesFormPropsValue, framesSchema } from "@/model/frames-schema";
import { checkDuplicateFramesCode, UploadFrames } from "@/server/upload-frames";
import { toast } from "sonner";

import { cn, scrollToCarousel } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Typography } from "@/components/ui/typography";

interface FramesPreviewToUploadProps {
  carouselApi: CarouselApi;
  framesFormPropsValue: FramesFormPropsValue[];
  setFramesFormPropsValueAction: React.Dispatch<
    React.SetStateAction<FramesFormPropsValue[]>
  >;
  defaultValues: FramesFormPropsValue;
  disabled: boolean;
}

export default function FramesPreviewToUpload({
  carouselApi,
  framesFormPropsValue,
  setFramesFormPropsValueAction,
  defaultValues,
  disabled,
}: FramesPreviewToUploadProps) {
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

  const openPreview = async () => {
    const formErrors = framesFormPropsValue.map((frame, index) => {
      const checkEmptyProps = framesSchema.safeParse(frame);
      return (
        checkEmptyProps.error?.issues.map((error) => ({
          index,
          path: error.path[0].toString(),
          message: error.message,
        })) || []
      );
    });

    if (formErrors.length > 0) {
      setFramesFormPropsValueAction((prev) => {
        return prev.map((frame, index) => {
          const errors = formErrors[index];
          return {
            ...frame,
            errors: errors.length > 0 ? errors : [],
          };
        });
      });

      for (let i = 0; i < formErrors.length; i++) {
        if (!formErrors[i].length) continue;
        toast.error("Frame Form Error", {
          description:
            "Please fill out the required fields in the frame form before uploading.",
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

    const checkCodesPromise = checkDuplicateFramesCode(
      framesFormPropsValue.map((frame) => frame.code)
    );

    toast.promise(checkCodesPromise, {
      loading: "Checking for duplicate frame codes...",
      success: "Duplicate frame codes have been checked successfully.",
      error: "Error checking duplicate frame codes.",
    });

    const checkCodes = await checkCodesPromise;

    setFramesFormPropsValueAction((prev) => {
      return prev.map((frame, index) => {
        if (!checkCodes.includes(frame.code)) return frame;
        return {
          ...frame,
          codeDuplicate: true,
          errors: checkCodes.includes(frame.code)
            ? [
                ...(frame.errors || []),
                { message: "Duplicate Frame Code", path: "code" },
              ]
            : frame.errors,
        };
      });
    });

    if (checkCodes.length != 0) {
      for (let i = 0; i < checkCodes.length; i++) {
        toast.error("Duplicate Frame Code", {
          description:
            "Please change the frame code to a unique one before uploading.",
          action: {
            label: "Jump to Form",
            onClick: () =>
              scrollToCarousel(
                carouselApi,
                framesFormPropsValue.findIndex(
                  (frame) => frame.code === checkCodes[i]
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

    const uploadPromises = framesFormPropsValue.map((frame, index) =>
      UploadFrames(frame)
        .then(
          ({
            message,
            variant,
          }): { variant: "success" | "error"; message: string } => {
            setUploadingProgress(
              ((index + 1) / framesFormPropsValue.length) * 100
            );
            return {
              variant,
              message,
            };
          }
        )
        .catch((error): { variant: "error"; message: string } => {
          return {
            variant: "error",
            message: error.message,
          };
        })
    );

    const responses = await Promise.all(uploadPromises);
    setUploadingResponse(responses);

    const failedIssues = framesFormPropsValue.filter(
      (_, index) => responses[index].variant === "error"
    );
    setFramesFormPropsValueAction(() =>
      failedIssues.length > 0
        ? failedIssues
        : [{ ...defaultValues, id: Math.random().toString() }]
    );

    setIsUploading(false);
    setOpenSheet(false);
  };

  return (
    <>
      <TooltipProvider>
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
      </TooltipProvider>
      <UploadPreview
        framesFormPropsValue={framesFormPropsValue}
        openSheet={openSheet}
        setOpenSheet={setOpenSheet}
        onSubmit={onSubmit}
      />

      <Credenza open={openUpload} onOpenChange={setOpenUpload}>
        <CredenzaContent
          className="sm:max-w-[600px]"
          disableoutsideclick="true"
        >
          <CredenzaHeader>
            <CredenzaTitle>Uploading Frames</CredenzaTitle>
            <CredenzaDescription>
              {isUploading
                ? "Uploading the frames. Please wait until the process is complete."
                : "All frames have been uploaded successfully."}
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
                    ? `Frame ${index + 1} ${item.message}`
                    : `Frame ${index + 1} ${item.message}`}
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

interface UploadPreviewProps {
  framesFormPropsValue: FramesFormPropsValue[];
  openSheet: boolean;
  setOpenSheet: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: () => void;
}

function UploadPreview({
  framesFormPropsValue,
  openSheet,
  setOpenSheet,
  onSubmit,
}: UploadPreviewProps) {
  return (
    <Sheet open={openSheet} onOpenChange={setOpenSheet}>
      <SheetContent className="!w-full p-4 sm:max-w-none">
        <SheetHeader className="border-b-2 pb-4">
          <SheetTitle>All Frames Preview</SheetTitle>
          <SheetDescription>
            Scroll through all the frames to review their details.
          </SheetDescription>
        </SheetHeader>

        <div className="grid h-[80vh] grid-cols-1 gap-4 overflow-y-auto sm:grid-cols-2 lg:grid-cols-4">
          {framesFormPropsValue.map((frame, index) => (
            <CardPreview frame={frame} index={index} key={frame.id} />
          ))}
          <div className="flex flex-row sm:col-span-2 md:col-span-4 md:justify-end">
            <Button
              variant="expandIcon"
              className="mb-4 w-full md:mr-8 md:w-auto"
              onClick={() => onSubmit()}
              Icon={Icons.upload}
              iconPlacement="right"
            >
              Upload Frames
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface CardPreviewProps {
  frame: FramesFormPropsValue;
  index: number;
}

function CardPreview({ frame }: CardPreviewProps) {
  const imageUrl = useMemo(() => {
    if (frame.image && Object.keys(frame.image).length > 0) {
      return URL.createObjectURL(frame.image);
    }
    return "";
  }, [frame.image]);

  return (
    <Card
      className="mx-auto mb-10 flex w-full max-w-xs items-center border-0 sm:flex-col"
      key={frame.id}
    >
      <CardContent className="flex aspect-auto items-center justify-center p-0">
        {Object.keys(frame.image).length > 0 && (
          <Image
            src={imageUrl}
            alt={frame.name}
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
            <TextInformation title="Name" description={frame.name} />
            <TextInformation title="Code" description={frame.code} />
            <TextInformation title="Rarity" description={frame.rarity} />
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
