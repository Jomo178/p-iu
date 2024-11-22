"use client";

import { useState } from "react";
import { FramesViewPort, IssuesViewPort, IssuesViewType } from "@/types";
import { Staff } from "@prisma/client";

import { cn, hasPermission } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import DeleteIssuesDialog from "./issues/delete-issues";
import { useHandleApprovePendingIssues } from "./issues/issues";
import { RejectionsDialog } from "./issues/view-issue-card";

interface DynamicButtonIslandProps {
  viewTypeData: IssuesViewPort | FramesViewPort;
  setViewTypeDataAction: React.Dispatch<
    React.SetStateAction<IssuesViewPort | FramesViewPort>
  >;
  setOpenSidebarAction: React.Dispatch<React.SetStateAction<boolean>>;
  staff: Staff;
}

export default function DynamicButtonIsland({
  viewTypeData,
  setViewTypeDataAction,
  setOpenSidebarAction,
  staff,
}: DynamicButtonIslandProps) {
  const [openIsland, setOpenIsland] = useState(false);
  const [openRejectDialog, setOpenRejectDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const {
    handleApprovePendingIssues,
    handleRejectPendingIssues,
    handleResubmitRejectedIssues,
  } = useHandleApprovePendingIssues(
    viewTypeData.id.includes("frames"),
    setViewTypeDataAction
  );

  const isType = (type: IssuesViewType) => {
    return viewTypeData.id == type;
  };

  const disableButton = viewTypeData.selectedItems.length == 0;

  const checkForAllowness = isType("rejected-issues") || disableButton;

  const issueCreatedByUser = viewTypeData.selectedItems.some(
    (item) => item.createdBy.id === staff.id
  );

  const AllOrSelected =
    viewTypeData.selectedItems.length == viewTypeData.data.length
      ? "All"
      : "Selected";
  return (
    <div
      className={cn(
        "fixed bottom-7 left-[50%] z-50 flex h-10 w-10 items-center justify-center rounded-2xl bg-black p-3 font-mono text-xs text-white transition-all duration-300",
        openIsland ? "h-14 w-fit -translate-x-1/2" : "w-10"
      )}
    >
      <Icons.info
        className={cn(openIsland ? "hidden" : "block cursor-pointer")}
        onClick={() => setOpenIsland(true)}
      />
      <div
        className={cn(
          "hidden flex-row items-center opacity-0 transition-opacity duration-1000",
          openIsland ? "flex opacity-100" : ""
        )}
      >
        <TooltipProvider delayDuration={200} disableHoverableContent>
          <Tooltip>
            <TooltipTrigger
              className={buttonVariants({ variant: "ghost" })}
              onClick={() => setOpenIsland(false)}
            >
              <Icons.cancel strokeWidth={2} size={24} />
            </TooltipTrigger>
            <TooltipContent className="bg-foreground">
              <p>Close Island</p>
            </TooltipContent>
          </Tooltip>
          <Separator orientation="vertical" className="h-6" />

          <Tooltip>
            <TooltipTrigger
              className={buttonVariants({ variant: "ghost" })}
              disabled={disableButton}
              onClick={() =>
                setViewTypeDataAction((prev) => ({
                  ...prev,
                  selectedItems: [],
                }))
              }
            >
              <Icons.deselect strokeWidth={2} size={24} />
            </TooltipTrigger>
            <TooltipContent className="bg-foreground">
              <p>Deselect {AllOrSelected}</p>
            </TooltipContent>
          </Tooltip>
          <Separator orientation="vertical" className="h-6" />
          <Tooltip>
            <TooltipTrigger
              className={buttonVariants({ variant: "ghost" })}
              disabled={
                viewTypeData.selectedItems.length == viewTypeData.data.length
              }
              onClick={() =>
                setViewTypeDataAction(
                  (prev) =>
                    ({
                      ...prev,
                      selectedItems: prev.data as typeof prev.selectedItems,
                    }) as IssuesViewPort | FramesViewPort
                )
              }
            >
              <Icons.select size={20} />
            </TooltipTrigger>
            <TooltipContent className="bg-foreground">
              <p>Select All</p>
            </TooltipContent>
          </Tooltip>
          <Separator orientation="vertical" className="h-6" />
          <Tooltip>
            <TooltipTrigger
              className={buttonVariants({ variant: "ghost" })}
              disabled={disableButton}
              onClick={() => setOpenSidebarAction((prev) => !prev)}
            >
              <Icons.info size={20} />
            </TooltipTrigger>
            <TooltipContent className="bg-foreground">
              <p>Show Information</p>
            </TooltipContent>
          </Tooltip>
          {isType("pending-issues") && (
            <>
              <Separator orientation="vertical" className="h-6" />
              <Tooltip>
                <TooltipTrigger
                  className={buttonVariants({ variant: "ghost" })}
                  disabled={
                    checkForAllowness ||
                    issueCreatedByUser ||
                    hasPermission(
                      staff,
                      `handle:${viewTypeData.id.includes("frames") ? "frame" : "issue"}`
                    )
                  }
                  onClick={() =>
                    handleApprovePendingIssues([
                      viewTypeData.selectedItems[0]?.id,
                      ...viewTypeData.selectedItems
                        .slice(1)
                        .map((item) => item.id),
                    ])
                  }
                >
                  <Icons.approve size={20} />
                </TooltipTrigger>
                <TooltipContent className="bg-foreground">
                  <p>Approve {AllOrSelected}</p>
                </TooltipContent>
              </Tooltip>
              <Separator orientation="vertical" className="h-6" />
              <Tooltip>
                <TooltipTrigger
                  className={buttonVariants({ variant: "ghost" })}
                  disabled={
                    checkForAllowness ||
                    issueCreatedByUser ||
                    hasPermission(
                      staff,
                      `handle:${viewTypeData.id.includes("frames") ? "frame" : "issue"}`
                    )
                  }
                  onClick={() => setOpenRejectDialog(true)}
                >
                  <Icons.rejected size={20} />
                </TooltipTrigger>
                <TooltipContent className="bg-foreground">
                  <p>Reject {AllOrSelected}</p>
                </TooltipContent>
              </Tooltip>
            </>
          )}
          {isType("rejected-issues") && (
            <>
              <Separator orientation="vertical" className="h-6" />
              <Tooltip>
                <TooltipTrigger
                  className={buttonVariants({ variant: "ghost" })}
                  disabled={
                    disableButton ||
                    hasPermission(
                      staff,
                      `handle:${viewTypeData.id.includes("frames") ? "frame" : "issue"}`
                    )
                  }
                  onClick={() =>
                    handleResubmitRejectedIssues([
                      viewTypeData.selectedItems[0]?.id,
                      ...viewTypeData.selectedItems
                        .slice(1)
                        .map((item) => item.id),
                    ])
                  }
                >
                  <Icons.filter size={20} />
                </TooltipTrigger>
                <TooltipContent className="bg-foreground">
                  <p>Resubmit {AllOrSelected}</p>
                </TooltipContent>
              </Tooltip>
            </>
          )}
          <Separator orientation="vertical" className="h-6" />
          <Tooltip>
            <TooltipTrigger
              className={buttonVariants({ variant: "ghost" })}
              disabled={
                disableButton ||
                hasPermission(
                  staff,
                  `delete:${viewTypeData.id.includes("frames") ? "frame" : "issue"}`
                )
              }
              onClick={() => setOpenDeleteDialog(true)}
            >
              <Icons.deleteButton size={20} />
            </TooltipTrigger>
            <TooltipContent className="bg-foreground">
              <p>Delete {AllOrSelected}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <RejectionsDialog
        openDialog={openRejectDialog}
        setOpenDialogAction={setOpenRejectDialog}
        handleRejectPendingIssuesAction={handleRejectPendingIssues}
        pendingIssues={viewTypeData.selectedItems.map((item) => ({
          id: item.id,
          name: item.name,
        }))}
      />

      <DeleteIssuesDialog
        issues={viewTypeData.selectedItems}
        isFrame={viewTypeData.id.includes("frames")}
        openDialog={openDeleteDialog}
        setOpenDialogAction={setOpenDeleteDialog}
        setViewTypeDataAction={setViewTypeDataAction}
        viewPortType={viewTypeData}
      />
    </div>
  );
}
