"use client";

import { Dispatch, SetStateAction, useRef, useState } from "react";
import Image from "next/image";
import { FramesViewPort, IssuesViewPort } from "@/types";
import { FrameRarity, Staff } from "@prisma/client";

import {
  IssuesWithRelation,
  PendingFramesWithRelation,
  PendingIssuesWithRelation,
  RejectedIssuesWithRelation,
} from "@/types/prisma";
import { cn, hasPermission } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
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
import {
  AutosizeTextarea,
  AutosizeTextAreaRef,
} from "@/components/ui/textarea";

import DeleteIssuesDialog from "./delete-issues";
import EditFramesDialog from "./edit-frames";
import EditIssuesDialog from "./edit-issues";
import { useHandleApprovePendingIssues } from "./issues";

interface DivProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    ViewIssueCardProps {}

interface ViewIssueCardProps {
  issue:
    | PendingIssuesWithRelation
    | IssuesWithRelation
    | PendingFramesWithRelation;
  isFrame: boolean | undefined;
  isSelected?: boolean;
  setViewTypeDataAction?: React.Dispatch<
    React.SetStateAction<IssuesViewPort | FramesViewPort>
  >;
  viewPortType: IssuesViewPort | FramesViewPort;
  setInformationSidebarAction?: (open: boolean) => void;
  staff: Staff;
}

export default function ViewIssueCard({
  issue,
  isFrame = false,
  isSelected = false,
  className,
  setViewTypeDataAction,
  setInformationSidebarAction,
  viewPortType,
  staff,
  ...props
}: DivProps) {
  const {
    handleApprovePendingIssues,
    handleRejectPendingIssues,
    handleResubmitRejectedIssues,
  } = useHandleApprovePendingIssues(isFrame, setViewTypeDataAction);
  const [openRejectDialog, setOpenRejectDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const pendingRejections = issue.rejections.some(
    (rejection) => !rejection.resubmitted
  );

  const disableButton = issue.approvedBy !== null || pendingRejections;

  return (
    <div
      className={cn(
        "w-[200px] cursor-pointer rounded-md",
        isSelected ? "scale-95" : "scale-100",
        className
      )}
      {...props}
    >
      <ContextMenu>
        <ContextMenuTrigger>
          <ViewIssueImage {...issue} />
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40 cursor-pointer">
          {pendingRejections && (
            <ContextMenuItem
              disabled={hasPermission(
                staff,
                `handle:${isFrame ? "frame" : "issue"}`
              )}
              onClick={() => handleResubmitRejectedIssues([issue.id])}
            >
              Resubmit
              <ContextMenuShortcut>
                <Icons.filter size={16} />
              </ContextMenuShortcut>
            </ContextMenuItem>
          )}
          <ContextMenuItem
            disabled={
              disableButton ||
              hasPermission(staff, `handle:${isFrame ? "frame" : "issue"}`)
            }
            onClick={() => handleApprovePendingIssues([issue.id])}
          >
            Approve
            <ContextMenuShortcut>
              <Icons.approve size={16} />
            </ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem
            disabled={
              disableButton ||
              hasPermission(staff, `handle:${isFrame ? "frame" : "issue"}`)
            }
            onClick={() => setOpenRejectDialog(true)}
          >
            Reject
            <ContextMenuShortcut>
              <Icons.reject size={16} />
            </ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem
            onClick={() => setOpenEditDialog(true)}
            disabled={hasPermission(
              staff,
              `edit:${isFrame ? "frame" : "issue"}`
            )}
          >
            Edit
            <ContextMenuShortcut>
              <Icons.edit size={16} />
            </ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem
            onClick={() => setOpenDeleteDialog(true)}
            disabled={hasPermission(
              staff,
              `delete:${isFrame ? "frame" : "issue"}`
            )}
          >
            Delete
            <ContextMenuShortcut>
              <Icons.deleteButton size={16} />
            </ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem
            onClick={() =>
              setInformationSidebarAction && setInformationSidebarAction(true)
            }
          >
            Info
            <ContextMenuShortcut>
              <Icons.info size={16} />
            </ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      {isFrame ? (
        <ViewFrameFooter {...(issue as PendingFramesWithRelation)} />
      ) : (
        <ViewIssueFooter {...(issue as PendingIssuesWithRelation)} />
      )}
      <div
        className={`absolute -left-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200 ease-in-out ${
          isSelected
            ? "scale-100 bg-primary text-primary-foreground"
            : "scale-0 bg-background text-foreground"
        }`}
      >
        <Icons.selected strokeWidth={7} className="h-4 w-4" />
      </div>
      <RejectionsDialog
        openDialog={openRejectDialog}
        setOpenDialogAction={setOpenRejectDialog}
        pendingIssues={[issue]}
        handleRejectPendingIssuesAction={handleRejectPendingIssues}
      />
      {isFrame ? (
        <EditFramesDialog
          openDialog={openEditDialog}
          setOpenDialogAction={setOpenEditDialog}
          frame={issue as PendingFramesWithRelation}
          viewPortType={viewPortType as FramesViewPort}
          setViewTypeDataAction={setViewTypeDataAction}
        />
      ) : (
        <EditIssuesDialog
          openDialog={openEditDialog}
          setOpenDialogAction={setOpenEditDialog}
          issue={issue as PendingIssuesWithRelation}
          viewPortType={viewPortType as IssuesViewPort}
          setViewTypeDataAction={setViewTypeDataAction}
        />
      )}

      <DeleteIssuesDialog
        issues={[issue]}
        isFrame={isFrame}
        openDialog={openDeleteDialog}
        setOpenDialogAction={setOpenDeleteDialog}
        viewPortType={viewPortType}
        setViewTypeDataAction={setViewTypeDataAction}
      />
    </div>
  );
}

export function ViewIssueFooter(issue: {
  name: string;
  group: string;
  act: string;
}) {
  return (
    <div className="space-y-1 pl-5 pt-3 text-sm">
      <h3 className="font-medium leading-none">Name: {issue.name}</h3>
      <p className="text-xs text-muted-foreground">Group: {issue.group}</p>
      <p className="text-xs text-muted-foreground">Act: {issue.act}</p>
    </div>
  );
}

export function ViewFrameFooter(frame: { name: string; rarity: FrameRarity }) {
  return (
    <div className="space-y-1 pl-5 pt-3 text-sm">
      <h3 className="font-medium leading-none">Name: {frame.name}</h3>
      <p className="text-xs text-muted-foreground">Rariry: {frame.rarity}</p>
    </div>
  );
}

export function ViewIssueImage(issue: { name: string; image: string }) {
  return <Image src={issue.image} alt={issue.name} width={250} height={250} />;
}

interface RejectionsDialogProps {
  openDialog: boolean;
  setOpenDialogAction: (open: boolean) => void;
  pendingIssues: { id: string; name: string }[];

  handleRejectPendingIssuesAction: (
    issuesIds: [string, ...string[]],
    reason: string
  ) => Promise<void>;
}

export function RejectionsDialog({
  openDialog,
  setOpenDialogAction,
  pendingIssues,
  handleRejectPendingIssuesAction,
}: RejectionsDialogProps) {
  const textareaRef = useRef<AutosizeTextAreaRef>(null);
  const [error, setError] = useState<boolean>(true);

  const handleReject = () => {
    if (textareaRef.current?.textArea.value.trim() === "") {
      setError(true);
    } else {
      setError(false);
      handleRejectPendingIssuesAction(
        [
          pendingIssues[0].id,
          ...pendingIssues.slice(1).map((issue) => issue.id),
        ],
        textareaRef.current?.textArea.value!
      );
      setOpenDialogAction(false);
    }
  };

  return (
    <Credenza open={openDialog} onOpenChange={setOpenDialogAction}>
      <CredenzaContent className="sm:max-w-[600px]">
        <CredenzaHeader>
          <CredenzaTitle>Reject Pending Issues</CredenzaTitle>
          <CredenzaDescription>
            Reject the pending issue and provide a reason for the rejection.
          </CredenzaDescription>
        </CredenzaHeader>

        <CredenzaBody>
          <AutosizeTextarea
            ref={textareaRef}
            maxHeight={150}
            onChange={() =>
              setError(textareaRef.current?.textArea.value.trim() === "")
            }
          />
          {error && (
            <p className="mt-2 text-xs text-red-500">
              Please provide a reason.
            </p>
          )}

          <ul className="mt-4">
            <li>Issues that will be rejected:</li>
            <div className="flex gap-4">
              {pendingIssues.map((issue) => (
                <li key={issue.id}>
                  <p>{issue.name}</p>
                </li>
              ))}
            </div>
          </ul>
        </CredenzaBody>

        <CredenzaFooter className="flex flex-row justify-center">
          <Button variant="outline" onClick={() => setOpenDialogAction(false)}>
            Cancel
          </Button>
          <Button onClick={handleReject} disabled={error}>
            Reject
          </Button>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
}
