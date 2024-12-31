"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Staff } from "@prisma/client";

import { ItemListingView, ItemsNameType, ItemType } from "@/types/items";
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

interface DivProps<T extends ItemsNameType>
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    ViewItemCardProps<T> {}

interface ViewItemCardProps<T extends ItemsNameType> {
  itemNameType: T;
  item: ItemType<T>[0] | ItemType<T>[1];
  isItemSelected?: boolean;
  setViewTypeDataAction?: React.Dispatch<
    React.SetStateAction<ItemListingView<T>>
  >;
  viewPortType: ItemListingView<T>;
  setInformationSidebarAction?: (open: boolean) => void;
  currentStaff: Staff;
}

export default function ViewItemCard<T extends ItemsNameType>({
  itemNameType,
  item,
  isItemSelected = false,
  className,
  setViewTypeDataAction,
  setInformationSidebarAction,
  viewPortType,
  currentStaff,
  ...props
}: DivProps<T>) {
  const {
    handleApprovePendingItems,
    handleRejectPendingItems,
    handleResubmitRejectedItems,
  } = usehandleApprovePendingItems(itemNameType, setViewTypeDataAction);
  const [openRejectDialog, setOpenRejectDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const pendingRejections = item.rejections.some(
    (rejection) => !rejection.resubmitted
  );

  const disableButton =
    (item.createdBy && currentStaff.id == item.createdBy.id) ||
    item.approvedBy !== null ||
    pendingRejections ||
    hasPermission(currentStaff, `handle:${itemNameType}`);

  return (
    <div
      className={cn(
        "w-[200px] cursor-pointer rounded-md",
        isItemSelected ? "scale-95" : "scale-100",
        className
      )}
      {...props}
    >
      <ContextMenu>
        <ContextMenuTrigger>
          {"image" in item ? (
            <ViewItemImage {...item} />
          ) : (
            <ViewItemFontImage {...item} />
          )}
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40 cursor-pointer">
          {pendingRejections && (
            <ContextMenuItem
              disabled={hasPermission(currentStaff, `handle:${itemNameType}`)}
              onClick={() => handleResubmitRejectedItems([item.id])}
            >
              Resubmit
              <ContextMenuShortcut>
                <Icons.filter size={16} />
              </ContextMenuShortcut>
            </ContextMenuItem>
          )}
          <ContextMenuItem
            disabled={disableButton}
            onClick={() => handleApprovePendingItems([item.id])}
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
            disabled={hasPermission(currentStaff, `edit:${itemNameType}`)}
          >
            Edit
            <ContextMenuShortcut>
              <Icons.edit size={16} />
            </ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem
            onClick={() => setOpenDeleteDialog(true)}
            disabled={hasPermission(currentStaff, `delete:${itemNameType}`)}
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
      {itemNameType === "frames" && (
        <ViewFrameFooter {...(item as ItemType<"frames">[1])} />
      )}
      {itemNameType === "issues" && (
        <ViewIssueFooter {...(item as ItemType<"issues">[1])} />
      )}
      {itemNameType === "fonts" && (
        <ViewFontFooter {...(item as ItemType<"fonts">[1])} />
      )}
      <div
        className={`absolute -left-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200 ease-in-out ${
          isItemSelected
            ? "scale-100 bg-primary text-primary-foreground"
            : "scale-0 bg-background text-foreground"
        }`}
      >
        <Icons.selected strokeWidth={7} className="h-4 w-4" />
      </div>
      <RejectionsDialog
        itemNameType={itemNameType}
        openDialog={openRejectDialog}
        setOpenDialogAction={setOpenRejectDialog}
        pendingItem={[item]}
        handleRejectPendingItemsAction={handleRejectPendingItems}
      />

      <EditItemsDialog
        itemNameType={itemNameType}
        item={item}
        viewPortType={viewPortType}
        setViewTypeDataAction={setViewTypeDataAction}
        openDialog={openEditDialog}
        setOpenDialogAction={setOpenEditDialog}
      />

      <DeleteItemsDialog
        itemNameType={itemNameType}
        items={[item]}
        viewPortType={viewPortType}
        setViewTypeDataAction={setViewTypeDataAction}
        openDialog={openDeleteDialog}
        setOpenDialogAction={setOpenDeleteDialog}
      />
    </div>
  );
}

export function ViewIssueFooter(issue: ItemType<"issues">[1]) {
  return (
    <div className="space-y-1 pl-5 pt-3 text-sm">
      <h3 className="font-medium leading-none">Name: {issue.name}</h3>
      <p className="text-xs text-muted-foreground">Group: {issue.group}</p>
      <p className="text-xs text-muted-foreground">Act: {issue.act}</p>
    </div>
  );
}

export function ViewFrameFooter(frame: ItemType<"frames">[1]) {
  return (
    <div className="space-y-1 pl-5 pt-3 text-sm">
      <h3 className="font-medium leading-none">Name: {frame.name}</h3>
      <p className="text-xs text-muted-foreground">Rariry: {frame.rarity}</p>
    </div>
  );
}

export function ViewFontFooter(font: ItemType<"fonts">[1]) {
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

export function ViewItemImage(
  item: ItemType<"issues">[1] | ItemType<"frames">[1]
) {
  return <Image src={item.image} alt={item.name} width={250} height={250} />;
}

export function ViewItemFontImage({ name, filePath }: ItemType<"fonts">[1]) {
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
  itemNameType: ItemsNameType;
  openDialog: boolean;
  setOpenDialogAction: (open: boolean) => void;
  pendingItem: { id: string; name: string }[];
  handleRejectPendingItemsAction: (
    itemsIds: string[],
    reason: string
  ) => Promise<void>;
}

export function RejectionsDialog({
  itemNameType,
  openDialog,
  setOpenDialogAction,
  pendingItem,
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
        pendingItem.map((item) => item.id),
        textareaRef.current?.textArea.value!
      );
      setOpenDialogAction(false);
    }
  };

  return (
    <Credenza open={openDialog} onOpenChange={setOpenDialogAction}>
      <CredenzaContent className="sm:max-w-[600px]">
        <CredenzaHeader>
          <CredenzaTitle>Reject Pending {itemNameType}</CredenzaTitle>
          <CredenzaDescription>
            Reject the pending {itemNameType.slice(0, -1)} and provide a reason
            for the rejection.
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
              {pendingItem.map((item) => (
                <li key={item.id}>
                  <p>{item.name}</p>
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
