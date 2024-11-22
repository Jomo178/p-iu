"use client";

import { useState } from "react";
import { useDefaultIssueFormValues } from "@/model/client";
import { IssuesFormPropsValue } from "@/model/issues-schema";
import { Staff } from "@prisma/client";

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

import IssuesForm from "./issues-form";
import IssuesPreviewToUpload from "./issues-preview-to-upload";

interface IssuesButtonControlProps {
  eventReleaseDate: Date;
  issuesFormPropsValue: IssuesFormPropsValue[];
  setIssuesFormPropsValueAction: React.Dispatch<
    React.SetStateAction<IssuesFormPropsValue[]>
  >;
  carouselApi: CarouselApi;
  carouselCount: number;
  setCarouselCountAction: React.Dispatch<React.SetStateAction<number>>;
  setCarouselCurrentIndexAction: React.Dispatch<React.SetStateAction<number>>;
  staff: Staff;
}

export default function IssuesButtonControl({
  eventReleaseDate,
  issuesFormPropsValue,
  setIssuesFormPropsValueAction,
  carouselApi,
  carouselCount,
  setCarouselCountAction,
  setCarouselCurrentIndexAction,
  staff,
}: IssuesButtonControlProps) {
  const { toast } = useToast();
  const [openDialog, setOpenDialog] = useState(false);
  const [getNewCustomProps, setNewCustomProps] = useDefaultIssueFormValues();

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
                    setIssuesFormPropsValueAction((prev) => {
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
                <p>Delete Issue</p>
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
                    setIssuesFormPropsValueAction((prev) => [
                      ...prev,
                      {
                        ...getNewCustomProps,
                        id: Math.random().toString(),
                        releaseDate: eventReleaseDate,
                      },
                    ]);

                    setCarouselCountAction(issuesFormPropsValue.length + 1);
                    scrollToCarousel(carouselApi, issuesFormPropsValue.length);
                  }}
                >
                  <Icons.addButton size={24} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add Issue</p>
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
          <IssuesPreviewToUpload
            carouselApi={carouselApi}
            issuesFormPropsValue={issuesFormPropsValue}
            setIssuesFormPropsValueAction={setIssuesFormPropsValueAction}
            defaultValues={{
              ...getNewCustomProps,
              releaseDate: eventReleaseDate,
            }}
            disabled={hasPermission(staff, "create:issue")}
          />
        </div>
      </div>

      <CustomPropertiesDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        toast={toast}
        setIssuesFormPropsValueAction={setIssuesFormPropsValueAction}
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
  setIssuesFormPropsValueAction: React.Dispatch<
    React.SetStateAction<IssuesFormPropsValue[]>
  >;
  getNewCustomProps: IssuesFormPropsValue;
  setNewCustomProps: React.Dispatch<
    React.SetStateAction<Omit<IssuesFormPropsValue, "releaseDate">>
  >;
}

function CustomPropertiesDialog({
  openDialog,
  setOpenDialog,
  toast,
  setIssuesFormPropsValueAction,
  getNewCustomProps,
  setNewCustomProps,
}: CustomPropertiesDialogProps) {
  const [issuesFormPropsValue, setIssuesFormPropsValue] =
    useState<IssuesFormPropsValue>(getNewCustomProps);

  const saveCustomProperties = () => {
    setNewCustomProps((prev) => ({
      ...prev,
      ...issuesFormPropsValue,
    }));

    toast({
      variant: "success",
      title: "Custom Properties Updated",
      description:
        "The custom properties will be applied everytime you create a new form.",
      duration: 3000,
    });

    setIssuesFormPropsValueAction((prev) =>
      prev.map((item) => ({
        ...item,
        ...issuesFormPropsValue,
        id: Math.random().toString(),
      }))
    );

    setOpenDialog(false);
  };

  return (
    <Credenza open={openDialog} onOpenChange={setOpenDialog}>
      <CredenzaContent className="sm:max-w-[600px]">
        <CredenzaHeader>
          <CredenzaTitle>Customize Issue Details</CredenzaTitle>
          <CredenzaDescription>
            Update the details of your issue here. Click Save when you're done.
          </CredenzaDescription>
        </CredenzaHeader>
        <IssuesForm
          index={1}
          onFormChangeAction={(
            index,
            value: Omit<
              IssuesFormPropsValue,
              "name" | "code" | "image" | "releaseDate"
            >
          ) =>
            setIssuesFormPropsValue((prev) => {
              const newData = { ...prev };
              newData.group = value.group;
              newData.act = value.act;
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
                group: "",
                act: "",
                rarity: 1,
              });

              setIssuesFormPropsValueAction((prev) =>
                prev.map((item) => ({
                  ...item,
                  group: "",
                  act: "",
                  rarity: 1,
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
