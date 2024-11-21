"use client";

import { useEffect, useState } from "react";
import { FramesFormPropsValue } from "@/model/frames-schema";
import { IssuesFormPropsValue } from "@/model/issues-schema";
import { editIssue } from "@/server/view/_actions-issues";
import { FramesViewPort, IssuesViewPort } from "@/types";
import { FrameRarity } from "@prisma/client";

import { PendingIssuesWithRelation } from "@/types/prisma";
import {
  cn,
  generateFrameCode,
  generateIssueCode,
  urlToFile,
} from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
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

import FramesForm from "../../add/frames/frames-form";
import IssuesForm from "../../add/issues/issues-form";
import { useHandleApprovePendingIssues } from "./issues";

interface EditFramesDialogProps {
  frame: {
    id: string;
    name: string;
    rarity: FrameRarity;
    code: string;
    image: string;
  };
  openDialog: boolean;
  setOpenDialogAction: React.Dispatch<React.SetStateAction<boolean>>;
  viewPortType: FramesViewPort;
  setViewTypeDataAction?: React.Dispatch<
    React.SetStateAction<FramesViewPort | IssuesViewPort>
  >;
}

export default function EditFramesDialog({
  frame,
  openDialog,
  setOpenDialogAction,
  viewPortType,
  setViewTypeDataAction,
}: EditFramesDialogProps) {
  const isDesktop = useMediaQuery();
  const [imageLoaded, setImageLoaded] = useState(false);
  const defaultValues = {
    ...frame,
    codeDuplicate: false,
    releaseDate: new Date(),
    image: new File([], "filename"),
    imageLink: frame.image,
    changedImage: false,
    errors: [],
  };
  const [frameData, setFrameData] = useState<
    FramesFormPropsValue & { imageLink: string; changedImage: boolean }
  >(defaultValues);

  const { handleEditPendingIssues } = useHandleApprovePendingIssues(
    true,
    setViewTypeDataAction
  );

  useEffect(() => {
    const fetchImage = async () => {
      if (frame.image && openDialog && frameData.image.size === 0) {
        const file = await urlToFile(
          frame.image,
          "card-image.png",
          "image/png"
        );

        setFrameData((prev) => ({ ...prev, image: file }));
        setImageLoaded(true);
      }
    };

    fetchImage();
  }, [frame.image, openDialog]);

  const handleEdit = async () => {
    await handleEditPendingIssues({
      viewPortId: viewPortType.id,
      issue: frameData,
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
          setFrameData(defaultValues);
        }}
      >
        <CredenzaContent className="sm:max-w-[600px]">
          <CredenzaHeader>
            <CredenzaTitle>Edit Pending Frame</CredenzaTitle>
            <CredenzaDescription>
              Edit the pending frame details.
            </CredenzaDescription>
          </CredenzaHeader>

          <CredenzaBody className={cn(!isDesktop && "h-72")}>
            {!isDesktop ? (
              <ScrollArea
                className={cn(
                  !isDesktop ? "h-60 w-full text-center" : "invisible"
                )}
              >
                {imageLoaded ? (
                  <EditFrom frameData={frameData} setFrameData={setFrameData} />
                ) : (
                  <p>Loading image...</p>
                )}
              </ScrollArea>
            ) : (
              <>
                {imageLoaded ? (
                  <EditFrom frameData={frameData} setFrameData={setFrameData} />
                ) : (
                  <p>Loading image...</p>
                )}
              </>
            )}
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
  frameData: FramesFormPropsValue;
  setFrameData: React.Dispatch<
    React.SetStateAction<
      FramesFormPropsValue & { imageLink: string; changedImage: boolean }
    >
  >;
}

function EditFrom({ frameData, setFrameData }: EditFromProps) {
  return (
    <FramesForm
      index={1}
      hiddenFields={["releaseDate"]}
      defaultValues={frameData}
      onFormChangeAction={(_, value) => {
        value.code = generateFrameCode(value.name, value.rarity);

        setFrameData((prev) => {
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
