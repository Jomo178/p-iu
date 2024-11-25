"use client";

import { useEffect, useState } from "react";
import { IssuesFormPropsValue } from "@/model/issues-schema";
import { FramesViewPort, IssuesViewPort } from "@/types";

import { cn, generateIssueCode, urlToFile } from "@/lib/utils";
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

import IssuesForm from "../add/issues/issues-form";
import { useHandleApprovePendingIssues } from "./issues";

interface EditIssuesDialogProps {
  issue: {
    id: string;
    name: string;
    group: string;
    act: string;
    rarity: number;
    code: string;
    image: string;
  };
  openDialog: boolean;
  setOpenDialogAction: React.Dispatch<React.SetStateAction<boolean>>;
  viewPortType: IssuesViewPort;
  setViewTypeDataAction?: React.Dispatch<
    React.SetStateAction<IssuesViewPort | FramesViewPort>
  >;
}

export default function EditIssuesDialog({
  issue,
  openDialog,
  setOpenDialogAction,
  viewPortType,
  setViewTypeDataAction,
}: EditIssuesDialogProps) {
  const isDesktop = useMediaQuery();
  const [imageLoaded, setImageLoaded] = useState(false);
  const defaultValues = {
    ...issue,
    codeDuplicate: false,
    releaseDate: new Date(),
    image: new File([], "filename"),
    imageLink: issue.image,
    changedImage: false,
    errors: [],
  };
  const [issueData, setIssueData] = useState<
    IssuesFormPropsValue & { imageLink: string; changedImage: boolean }
  >(defaultValues);
  const { handleEditPendingIssues } = useHandleApprovePendingIssues(
    false,
    setViewTypeDataAction
  );

  useEffect(() => {
    const fetchImage = async () => {
      if (issue.image && openDialog && issueData.image.size === 0) {
        const file = await urlToFile(
          issue.image,
          "card-image.png",
          "image/png"
        );

        setIssueData((prev) => ({ ...prev, image: file }));
        setImageLoaded(true);
      }
    };

    fetchImage();
  }, [issue.image, openDialog]);

  const handleEdit = async () => {
    await handleEditPendingIssues({
      viewPortId: viewPortType.id,
      issue: issueData,
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
          setIssueData(defaultValues);
        }}
      >
        <CredenzaContent className="sm:max-w-[600px]">
          <CredenzaHeader>
            <CredenzaTitle>Edit Pending Issue</CredenzaTitle>
            <CredenzaDescription>
              Edit the pending issue details.
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
                  <EditFrom issueData={issueData} setIssueData={setIssueData} />
                ) : (
                  <p>Loading image...</p>
                )}
              </ScrollArea>
            ) : (
              <>
                {imageLoaded ? (
                  <EditFrom issueData={issueData} setIssueData={setIssueData} />
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
  issueData: IssuesFormPropsValue;
  setIssueData: React.Dispatch<
    React.SetStateAction<
      IssuesFormPropsValue & { imageLink: string; changedImage: boolean }
    >
  >;
}

function EditFrom({ issueData, setIssueData }: EditFromProps) {
  return (
    <IssuesForm
      index={1}
      hiddenFields={["releaseDate"]}
      defaultValues={issueData}
      onFormChangeAction={(_, value) => {
        value.code = generateIssueCode(
          value.name,
          value.act,
          value.group,
          value.rarity
        );

        setIssueData((prev) => {
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
