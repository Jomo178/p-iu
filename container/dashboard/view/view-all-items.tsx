"use client";

import { use, useEffect, useState } from "react";
import {
  FramesViewPort,
  FramesViewType,
  IssuesViewPort,
  IssuesViewType,
} from "@/types";
import { Staff } from "@prisma/client";
import { isEmpty } from "lodash";
import { useInView } from "react-intersection-observer";
import Balancer from "react-wrap-balancer";
import { toast } from "sonner";

import { PendingIssuesWithRelation } from "@/types/prisma";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";
import { EmptyState } from "@/components/empty-state";

import DynamicButtonIsland from "./dynamic-button-island";
import { framesViewPortType } from "./frames";
import { issuesViewPortType } from "./issues";
import ItemsFilterMenu from "./items-filter-menu";
import ItemsInformationSidebar from "./items-information-sidebar";
import ViewItemCard from "./view-item-card";
import { ViewItemSkeleton } from "./view-item-skeleton";

interface ViewAllItemsProps {
  viewType: IssuesViewType | FramesViewType;
  staff: Staff;
}

export default function ViewAllItems({ viewType, staff }: ViewAllItemsProps) {
  const { open } = useSidebar();
  let findType = viewType.includes("frames")
    ? framesViewPortType.find((viewPort) => viewPort.id === viewType)
    : issuesViewPortType.find((viewPort) => viewPort.id === viewType);

  if (!findType) return null;

  const [scrollTrigger, inView] = useInView({ initialInView: true });
  const [viewTypeData, setViewTypeData] = useState<
    IssuesViewPort | FramesViewPort
  >(findType);
  const [selectActive, setSelectActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const [orderBy, setOrderBy] = useState({});
  const [filter, setFilter] = useState({});
  const [openSidebarInformation, setOpenSidebarInformation] = useState(false);
  const changeGrid = viewTypeData.selectedItems.length > 0;
  const isAllSelected =
    viewTypeData.selectedItems.length == viewTypeData.data.length;

  const fetchData = async (customFetchCount: number = 10) => {
    if (loading) return;
    setLoading(true);
    const data = await viewTypeData.fetchFunction(
      viewTypeData.fetchCount,
      customFetchCount,
      filter,
      orderBy
    );

    if (data.length === 0) {
      setLoading(false);
      setNoData(true);
      toast.info(`No more ${findType.title} found`);
      return;
    }

    setViewTypeData({
      ...viewTypeData,
      data: viewTypeData.data.concat(data) as any[],
      fetchCount: viewTypeData.fetchCount + customFetchCount,
    });
    setLoading(false);
  };

  useEffect(() => {
    if (viewTypeData.fetchCount == 0 && inView && !noData) {
      fetchData(20);
    } else {
      fetchData();
    }
  }, [inView]);

  useEffect(() => {
    if (!isEmpty(filter) || !isEmpty(orderBy)) {
      fetchData();
    }
  }, [filter, orderBy]);

  return (
    <div className="container !px-0 lg:!px-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            {viewTypeData.title}
          </h2>
          <Balancer className="text-sm text-muted-foreground">
            {viewTypeData.description}
          </Balancer>
        </div>
        <Button
          variant="outline"
          className={cn(selectActive && "animate-bounce")}
          onClick={() => setSelectActive((prev) => !prev)}
        >
          {selectActive ? <Icons.selected className="h-5 w-5" /> : null}
          {isAllSelected ? "Selected All" : "Select"}
        </Button>
      </div>
      {noData && viewTypeData.data.length === 0 ? (
        <EmptyState
          title={`No ${findType.title} found`}
          description={`There are no ${findType.title} found.`}
          className="col-span-full mt-4 !h-full !w-full"
        />
      ) : (
        <>
          <Separator className="my-4" />
          <ItemsFilterMenu
            type={viewType.includes("frames") ? "frames" : "issues"}
            setFilterConfigurationAction={async (filter, orderBy) => {
              setViewTypeData((prev) => {
                return {
                  ...prev,
                  data: [],
                  selectedItems: [],
                  fetchCount: 0,
                };
              });

              setFilter(filter);
              setOrderBy(orderBy);
            }}
          />
          <div
            className={cn(
              "grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 sm:justify-items-start md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8",
              open &&
                changeGrid &&
                "md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-5",
              open &&
                !changeGrid &&
                "md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7",
              !open && changeGrid && "md:grid-cols-3 lg:grid-cols-4"
            )}
          >
            {loading &&
              viewTypeData.data.length === 0 &&
              Array.from({ length: 8 }).map((_, index) => (
                <ViewItemSkeleton className="my-3" key={index} />
              ))}

            {viewTypeData.data.map((issue) => {
              const selectIssue = () => {
                setViewTypeData((prev) => {
                  const isSelected = prev.selectedItems.some(
                    (selectedIssue) => selectedIssue.id === issue.id
                  );
                  if (!isSelected) {
                    return {
                      ...prev,
                      selectedItems: [...prev.selectedItems, issue],
                    } as any;
                  } else {
                    return {
                      ...prev,
                      selectedItems: prev.selectedItems.filter(
                        (selectedIssue) => selectedIssue.id !== issue.id
                      ),
                    } as any;
                  }
                });
              };

              const isIssueSelected = viewTypeData.selectedItems.some(
                (selectedIssue) => selectedIssue.id === issue.id
              );

              return (
                <div key={issue.id}>
                  <ViewItemCard
                    className={cn(
                      selectActive && !isIssueSelected
                        ? "animate-shake"
                        : "transition-all duration-200 ease-in-out"
                    )}
                    staff={staff}
                    issue={issue}
                    isFrame={viewType.includes("frames")}
                    isSelected={isIssueSelected}
                    onClick={() => {
                      if (!selectActive) {
                        return;
                      }
                      selectIssue();
                    }}
                    onDoubleClick={() => selectIssue()}
                    setViewTypeDataAction={setViewTypeData}
                    viewPortType={viewTypeData}
                    setInformationSidebarAction={() => {
                      if (
                        viewTypeData.selectedItems.some(
                          (selectedIssue) => selectedIssue.id === issue.id
                        )
                      ) {
                        setViewTypeData({
                          ...viewTypeData,
                          selectedItems: [],
                        });
                        return setOpenSidebarInformation(true);
                      }

                      setViewTypeData({
                        ...viewTypeData,
                        selectedItems: [issue as any],
                      });

                      setOpenSidebarInformation(true);
                    }}
                  />
                </div>
              );
            })}

            <ItemsInformationSidebar
              issues={viewTypeData.selectedItems as PendingIssuesWithRelation[]}
              isFrames={viewType.includes("frames")}
              issueType={findType.title}
              openSidebar={openSidebarInformation}
              setOpenSidebarAction={setOpenSidebarInformation}
            />
          </div>
          <div
            ref={scrollTrigger}
            className="flex h-40 !w-full items-center text-center"
          >
            {loading ? (
              <p className="w-full">Loading...</p>
            ) : (
              <Button
                onClick={() => fetchData()}
                className="w-full"
                variant="outline"
              >
                Load More...
              </Button>
            )}
          </div>
          <DynamicButtonIsland
            viewTypeData={viewTypeData}
            setViewTypeDataAction={setViewTypeData}
            setOpenSidebarAction={setOpenSidebarInformation}
            staff={staff}
          />
        </>
      )}
    </div>
  );
}
