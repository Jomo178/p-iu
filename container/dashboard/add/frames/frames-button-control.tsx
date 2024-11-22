"use client";

import { useState } from "react";
import { useDefaultFrameFormValues } from "@/model/client";
import { FramesFormPropsValue } from "@/model/frames-schema";
import { Staff } from "@prisma/client";

import { getCurrentStaff } from "@/lib/session";
import { hasPermission, scrollToCarousel } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { CarouselApi } from "@/components/ui/carousel";
import {
  Credenza,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/ui/credenza";
import { Icons } from "@/components/ui/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import FramesForm from "./frames-form";
import FramesPreviewToUpload from "./frames-preview-to-upload";

interface FramesButtonControlProps {
  eventReleaseDate: Date;
  framesFormPropsValue: FramesFormPropsValue[];
  setFramesFormPropsValueAction: React.Dispatch<
    React.SetStateAction<FramesFormPropsValue[]>
  >;
  carouselApi: CarouselApi;
  carouselCount: number;
  setCarouselCountAction: React.Dispatch<React.SetStateAction<number>>;
  setCarouselCurrentIndexAction: React.Dispatch<React.SetStateAction<number>>;
  staff: Staff;
}

export default function FramesButtonControl({
  eventReleaseDate,
  framesFormPropsValue,
  setFramesFormPropsValueAction,
  carouselApi,
  carouselCount,
  setCarouselCountAction,
  setCarouselCurrentIndexAction,
  staff,
}: FramesButtonControlProps) {
  const { toast } = useToast();
  const [openDialog, setOpenDialog] = useState(false);
  const [getNewCustomProps, setNewCustomProps] = useDefaultFrameFormValues();

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
                    setFramesFormPropsValueAction((prev) => {
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
                <p>Delete Frame</p>
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
                    setFramesFormPropsValueAction((prev) => [
                      ...prev,
                      {
                        ...getNewCustomProps,
                        id: Math.random().toString(),
                        releaseDate: eventReleaseDate,
                      },
                    ]);

                    setCarouselCountAction(framesFormPropsValue.length + 1);
                    scrollToCarousel(carouselApi, framesFormPropsValue.length);
                  }}
                >
                  <Icons.addButton size={24} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add Frame</p>
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
          <FramesPreviewToUpload
            carouselApi={carouselApi}
            framesFormPropsValue={framesFormPropsValue}
            setFramesFormPropsValueAction={setFramesFormPropsValueAction}
            defaultValues={{
              ...getNewCustomProps,
              releaseDate: eventReleaseDate,
            }}
            disabled={hasPermission(staff, "create:frame")}
          />
        </div>
      </div>

      <CustomPropertiesDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        toast={toast}
        setFramesFormPropsValueAction={setFramesFormPropsValueAction}
        getNewCustomProps={{
          ...getNewCustomProps,
          releaseDate: eventReleaseDate,
        }}
        setNewCustomProps={setNewCustomProps}
      />
    </>
  );
}

interface CustomPropertiesDialogProps {
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  toast: ReturnType<typeof useToast>["toast"];
  setFramesFormPropsValueAction: React.Dispatch<
    React.SetStateAction<FramesFormPropsValue[]>
  >;
  getNewCustomProps: FramesFormPropsValue;
  setNewCustomProps: React.Dispatch<React.SetStateAction<FramesFormPropsValue>>;
}

function CustomPropertiesDialog({
  openDialog,
  setOpenDialog,
  toast,
  setFramesFormPropsValueAction,
  getNewCustomProps,
  setNewCustomProps,
}: CustomPropertiesDialogProps) {
  const [framesFormPropsValue, setFramesFormPropsValue] =
    useState<FramesFormPropsValue>(getNewCustomProps);

  const saveCustomProperties = () => {
    setNewCustomProps((prev) => ({
      ...prev,
      ...framesFormPropsValue,
    }));

    toast({
      variant: "success",
      title: "Custom Properties Updated",
      description:
        "The custom properties will be applied everytime you create a new form.",
      duration: 3000,
    });

    setFramesFormPropsValueAction((prev) =>
      prev.map((item) => ({
        ...item,
        ...framesFormPropsValue,
        id: Math.random().toString(),
      }))
    );

    setOpenDialog(false);
  };

  return (
    <Credenza open={openDialog} onOpenChange={setOpenDialog}>
      <CredenzaContent className="sm:max-w-[600px]">
        <CredenzaHeader>
          <CredenzaTitle>Customize Frame Details</CredenzaTitle>
          <CredenzaDescription>
            Update the details of your frame here. Click Save when you're done.
          </CredenzaDescription>
        </CredenzaHeader>
        <FramesForm
          index={1}
          onFormChangeAction={(
            index,
            value: Omit<
              FramesFormPropsValue,
              "name" | "code" | "image" | "releaseDate"
            >
          ) =>
            setFramesFormPropsValue((prev) => {
              const newData = { ...prev };
              newData.rarity = value.rarity;
              return newData;
            })
          }
          defaultValues={getNewCustomProps}
          hiddenFields={["name", "code", "image", "releaseDate"]}
        />
        <CredenzaFooter className="flex flex-row justify-center">
          <Button
            variant="destructive"
            onClick={() => {
              setNewCustomProps({
                ...getNewCustomProps,
                rarity: "Common",
              });

              setFramesFormPropsValueAction((prev) =>
                prev.map((item) => ({
                  ...item,
                  rarity: "Common",
                  id: Math.random().toString(),
                }))
              );

              toast({
                variant: "success",
                title: "Custom Properties Deleted",
                description:
                  "The custom properties will not be applied to new forms.",
                duration: 3000,
              });
              setOpenDialog(false);
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
