"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ItemsViewPortType } from "@/types";
import { EventType, FrameRarity, Staff } from "@prisma/client";

import {
  FontsWithRelation,
  IssuesWithRelation,
  PendingFontsWithRelation,
  PendingFramesWithRelation,
  PendingIssuesWithRelation,
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

import DeleteItemsDialog from "./delete-items";
import EditItemsDialog from "./edit-items";
import { usehandleApprovePendingItems } from "./handlers";

interface DivProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    ViewItemCardProps {}

interface ViewItemCardProps {
  issue:
    | PendingIssuesWithRelation
    | IssuesWithRelation
    | PendingFramesWithRelation
    | PendingFontsWithRelation;
  itemsType: `${EventType}`;
  isSelected?: boolean;
  setViewTypeDataAction?: React.Dispatch<
    React.SetStateAction<ItemsViewPortType>
  >;
  viewPortType: ItemsViewPortType;
  setInformationSidebarAction?: (open: boolean) => void;
  staff: Staff;
}

export default function ViewItemCard({
  issue,
  itemsType,
  isSelected = false,
  className,
  setViewTypeDataAction,
  setInformationSidebarAction,
  viewPortType,
  staff,
  ...props
}: DivProps) {
  const {
    handleApprovePendingItems,
    handleRejectPendingItems,
    handleResubmitRejectedItems,
  } = usehandleApprovePendingItems(itemsType, setViewTypeDataAction);
  const [openRejectDialog, setOpenRejectDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const pendingRejections = issue.rejections.some(
    (rejection) => !rejection.resubmitted
  );

  const disableButton =
    (issue.createdBy && staff.id == issue.createdBy.id) ||
    issue.approvedBy !== null ||
    pendingRejections ||
    hasPermission(staff, `handle:${itemsType}`);

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
          {"image" in issue ? (
            <ViewItemImage {...issue} />
          ) : (
            <ViewItemFontImage name={issue.name} filePath={issue.filePath!} />
          )}
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40 cursor-pointer">
          {pendingRejections && (
            <ContextMenuItem
              disabled={hasPermission(staff, `handle:${itemsType}`)}
              onClick={() => handleResubmitRejectedItems([issue.id])}
            >
              Resubmit
              <ContextMenuShortcut>
                <Icons.filter size={16} />
              </ContextMenuShortcut>
            </ContextMenuItem>
          )}
          <ContextMenuItem
            disabled={disableButton}
            onClick={() => handleApprovePendingItems([issue.id])}
          >
            Approve
            <ContextMenuShortcut>
              <Icons.approve size={16} />
            </ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem
            disabled={disableButton}
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
            disabled={hasPermission(staff, `edit:${itemsType}`)}
          >
            Edit
            <ContextMenuShortcut>
              <Icons.edit size={16} />
            </ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem
            onClick={() => setOpenDeleteDialog(true)}
            disabled={hasPermission(staff, `delete:${itemsType}`)}
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
      {itemsType === "frames" && (
        <ViewFrameFooter {...(issue as PendingFramesWithRelation)} />
      )}
      {itemsType === "issues" && (
        <ViewIssueFooter {...(issue as PendingIssuesWithRelation)} />
      )}
      {itemsType === "fonts" && (
        <ViewFontFooter {...(issue as PendingFontsWithRelation)} />
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
        handleRejectPendingItemsAction={handleRejectPendingItems}
      />

      <EditItemsDialog
        itemType={itemsType}
        openDialog={openEditDialog}
        setOpenDialogAction={setOpenEditDialog}
        item={issue as any}
        viewPortType={viewPortType as any}
        setViewTypeDataAction={setViewTypeDataAction}
      />

      <DeleteItemsDialog
        issues={[
          "filePath" in issue
            ? ({
                id: issue.id,
                name: issue.name,
                image: issue.filePath,
              } as any)
            : issue,
        ]}
        itemType={itemsType}
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

export function ViewFontFooter(font: {
  short: string;
  price: number;
  onMarket: boolean;
  isBig: boolean;
}) {
  return (
    <div className="space-y-1 text-sm">
      <h3 className="font-medium leading-none">Short Name: {font.short}</h3>
      <p className="text-xs text-muted-foreground">Price: {font.price}</p>
      <p className="text-xs text-muted-foreground">
        On Market: {font.onMarket ? "Yes" : "No"}
      </p>
      <p className="text-xs text-muted-foreground">
        Is Big: {font.isBig ? "Yes" : "No"}
      </p>
    </div>
  );
}

export function ViewItemImage(item: { name: string; image: string }) {
  return <Image src={item.image} alt={item.name} width={250} height={250} />;
}

export function ViewItemFontImage({
  name,
  filePath,
}: {
  name: string;
  filePath: string;
}) {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  const loadFont = () => {
    const fontFace = new FontFace(name, `url(${filePath})`);
    fontFace
      .load()
      .then((loadedFont) => {
        document.fonts.add(loadedFont);
        setIsFontLoaded(true);
      })
      .catch((error) => {
        console.error("Failed to load the font:", error);
      });
  };

  useEffect(() => {
    loadFont();
  }, [name, filePath]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {isFontLoaded ? (
        <div
          style={{
            fontFamily: name,
            fontSize: "24px",
            marginTop: "10px",
            height: "150px",
            width: "120px",
          }}
        >
          {name}
        </div>
      ) : (
        <p>Loading font...</p>
      )}
    </div>
  );
}

interface RejectionsDialogProps {
  openDialog: boolean;
  setOpenDialogAction: (open: boolean) => void;
  pendingIssues: { id: string; name: string }[];

  handleRejectPendingItemsAction: (
    issuesIds: [string, ...string[]],
    reason: string
  ) => Promise<void>;
}

export function RejectionsDialog({
  openDialog,
  setOpenDialogAction,
  pendingIssues,
  handleRejectPendingItemsAction,
}: RejectionsDialogProps) {
  const textareaRef = useRef<AutosizeTextAreaRef>(null);
  const [error, setError] = useState<boolean>(true);

  const handleReject = () => {
    if (textareaRef.current?.textArea.value.trim() === "") {
      setError(true);
    } else {
      setError(false);
      handleRejectPendingItemsAction(
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
