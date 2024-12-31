"use client";

import { useEffect, useState } from "react";
import { getStaffIds } from "@/server/staff/_action";
import { Staff } from "@prisma/client";
import { useQueryState } from "nuqs";
import { useInView } from "react-intersection-observer";
import Balancer from "react-wrap-balancer";
import { toast } from "sonner";

import {
  ItemListingView,
  ItemsNameType,
  ItemStatusViewType,
} from "@/types/items";
import { generateItemsViewPort } from "@/config/items-view";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";
import { EmptyState } from "@/components/empty-state";

import DynamicButtonIsland from "./dynamic-button-island";
import {
  constructOrderByConditions,
  constructWhereConditions,
  searchParams,
} from "./handlers";
import ItemsFilterMenu from "./items-filter-menu";
import ItemsInformationSidebar from "./items-information-sidebar";
import ViewItemCard from "./view-item-card";
import { ViewItemSkeleton } from "./view-item-skeleton";

interface ViewAllItemsProps<T extends ItemsNameType> {
  itemNameType: T;
  itemsViewPortId: ItemStatusViewType<T>;
  currentStaff: Staff;
}

export default function ViewAllItems<T extends ItemsNameType>({
  itemNameType,
  itemsViewPortId,
  currentStaff,
}: ViewAllItemsProps<T>) {
  const { open } = useSidebar();
  const [scrollTrigger, inView] = useInView({ initialInView: true });
  const [viewPort, setViewPort] = useState<ItemListingView<T>>(
    generateItemsViewPort(itemNameType).find(
      (value) => value.id === itemsViewPortId
    )!
  );
  const [selectActive, setSelectActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const [filters, setFilters] = useQueryState("filters", searchParams.filters);
  const [sortBy, setSortBy] = useQueryState("sortBy", searchParams.sortBy);
  const [sortOrder, setSortOrder] = useQueryState(
    "sortOrder",
    searchParams.sortOrder
  );

  const [openSidebarInformation, setOpenSidebarInformation] = useState(false);
  const [staffInfo, setStaffInfo] = useState<
    { id: string; discordId: string }[]
  >([]);
  const changeGrid = viewPort.selectedItems.length > 0;
  const isAllSelected = viewPort.selectedItems.length == viewPort.data.length;

  const fetchData = async () => {
    if (loading) return;
    setLoading(true);
    let staffs = null;
    if (staffInfo.length === 0) {
      staffs = await getStaffIds();
      setStaffInfo(staffs);
    }

    const data = await viewPort.fetchFunction(
      viewPort.fetchCount,
      10,
      constructWhereConditions(filters, staffs == null ? staffInfo : staffs),
      constructOrderByConditions(sortBy, sortOrder)
    );

    if (data.length === 0) {
      setLoading(false);
      setNoData(true);
      toast.info(`No more ${viewPort.title} found`);
      return;
    }

    setViewPort({
      ...viewPort,
      data: viewPort.data.concat(data),
      fetchCount: viewPort.fetchCount + data.length,
    });
    setLoading(false);
  };

  useEffect(() => {
    if (inView && !noData) {
      fetchData();
    }
  }, [inView, filters, sortBy, sortOrder]);

  return (
    <div className="container !px-0 lg:!px-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            {viewPort.title}
          </h2>
          <Balancer className="text-sm text-muted-foreground">
            {viewPort.description}
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
      <Separator className="my-4" />
      <ItemsFilterMenu
        appliedFilterAction={() => {
          setViewPort({ ...viewPort, data: [], fetchCount: 0 });
        }}
      />
      {noData && viewPort.data.length === 0 ? (
        <EmptyState
          title={`No ${viewPort.title} found`}
          description={`There are no ${viewPort.title} found.`}
          className="col-span-full mt-4 !h-full !w-full"
        />
      ) : (
        <>
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
              viewPort.data.length === 0 &&
              Array.from({ length: 8 }).map((_, index) => (
                <ViewItemSkeleton className="my-3" key={index} />
              ))}

            {viewPort.data.map((item) => {
              const selectItem = () => {
                setViewPort((prev) => {
                  const isSelected = prev.selectedItems.some(
                    (selectedIssue) => selectedIssue.id === item.id
                  );
                  if (!isSelected) {
                    return {
                      ...prev,
                      selectedItems: [...prev.selectedItems, item],
                    };
                  } else {
                    return {
                      ...prev,
                      selectedItems: prev.selectedItems.filter(
                        (selectedIssue) => selectedIssue.id !== item.id
                      ),
                    };
                  }
                });
              };

              const isItemSelected = viewPort.selectedItems.some(
                (selectedIssue) => selectedIssue.id === item.id
              );

              return (
                <div key={item.id}>
                  <ViewItemCard
                    className={cn(
                      selectActive && !isItemSelected
                        ? "animate-shake"
                        : "transition-all duration-200 ease-in-out"
                    )}
                    currentStaff={currentStaff}
                    item={item}
                    itemNameType={itemNameType}
                    isItemSelected={isItemSelected}
                    onClick={() => {
                      if (!selectActive) {
                        return;
                      }
                      selectItem();
                    }}
                    onDoubleClick={() => selectItem()}
                    setViewTypeDataAction={setViewPort}
                    viewPortType={viewPort}
                    setInformationSidebarAction={() => {
                      if (
                        viewPort.selectedItems.some(
                          (selectedIssue) => selectedIssue.id === item.id
                        )
                      ) {
                        setViewPort({
                          ...viewPort,
                          selectedItems: [],
                        });
                        return setOpenSidebarInformation(true);
                      }

                      setViewPort({
                        ...viewPort,
                        selectedItems: [item],
                      });

                      setOpenSidebarInformation(true);
                    }}
                  />
                </div>
              );
            })}

            <ItemsInformationSidebar
              itemNameType={itemNameType}
              items={viewPort.selectedItems}
              itemsViewPortId={viewPort.id}
              openSidebar={openSidebarInformation}
              setOpenSidebarAction={setOpenSidebarInformation}
            />
          </div>
          <div
            ref={scrollTrigger}
            className={cn(
              "flex h-40 !w-full items-center text-center",
              viewPort.fetchCount === 0 && "hidden"
            )}
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
            itemNameType={itemNameType}
            viewPort={viewPort}
            setViewPortAction={setViewPort}
            setOpenSidebarAction={setOpenSidebarInformation}
            currentStaff={currentStaff}
          />
        </>
      )}
    </div>
  );
}
