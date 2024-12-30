"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FontsViewPort,
  FramesViewPort,
  IssuesViewPort,
  ItemsViewPortType,
} from "@/types";
import { EventType, Staff } from "@prisma/client";
import Balancer from "react-wrap-balancer";

import { PendingIssuesWithRelation } from "@/types/prisma";
import { itemsViewPortType } from "@/config/items-view";
import { cn, toUpperCase } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";
import { EmptyState } from "@/components/empty-state";

import ItemsInformationSidebar from "./items-information-sidebar";
import ViewItemCard from "./view-item-card";
import { SkeletonViewGroup, ViewItemSkeleton } from "./view-item-skeleton";

interface ViewItemsGroupPreviewProps {
  type: `${EventType}`;
  staff: Staff;
}

export default function ViewItemsGroupPreview({
  type,
  staff,
}: ViewItemsGroupPreviewProps) {
  const { open } = useSidebar();
  const [loading, setLoading] = useState(false);
  const [openSidebarInformation, setOpenSidebarInformation] = useState(false);
  const [itemsGroup, setItemsGroup] = useState<ItemsViewPortType>(
    itemsViewPortType[type][0]
  );
  const [itemsGroupData, setItemsGroupData] = useState<ItemsViewPortType[]>(
    itemsViewPortType[type]
  );

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const updatedVGroupData = await Promise.all(
        itemsGroupData.map(async (viewPort) => {
          const data = await viewPort.fetchFunction(
            viewPort.fetchCount,
            10,
            {},
            {}
          );

          return {
            ...viewPort,
            data: data.map((item) => ({
              ...item,
              approvedBy: item.approvedBy,
            })),
            fetchCount: viewPort.fetchCount + data.length,
          };
        })
      );
      setItemsGroupData(updatedVGroupData as any);
      setLoading(false);
    };

    fetchItems();
  }, []);

  return (
    <div className={cn(open ? "container" : "container md:pr-0")}>
      <Tabs defaultValue={type} className="mt-5 space-y-6">
        <div className="space-between flex items-center">
          <div className="space-between flex flex-col items-center gap-4 sm:flex-row">
            <TabsList className="w-full">
              {Object.values(EventType).map((item) => (
                <Link
                  href={`/dashboard/view/${item}`}
                  prefetch={true}
                  key={item}
                >
                  <TabsTrigger value={item} className="w-full">
                    {toUpperCase(item)}
                  </TabsTrigger>
                </Link>
              ))}
            </TabsList>
          </div>
        </div>
        <Separator className="my-4" />
        <TabsContent value={type} className="border-none p-0 outline-none">
          {loading &&
            itemsGroupData.map((viewPort) => (
              <SkeletonViewGroup key={viewPort.title} />
            ))}
          {itemsGroupData.every((viewPort) => viewPort.data.length === 0) ? (
            <EmptyState
              title={`No ${toUpperCase(type)} found`}
              description={"Get started by creating a new " + type}
              action={
                <Link
                  href={`/dashboard/add/${type}`}
                  className={buttonVariants({ variant: "outline" })}
                  prefetch={true}
                >
                  Create {toUpperCase(type)}
                </Link>
              }
            />
          ) : (
            itemsGroupData.map((viewPort) => {
              if (viewPort.data.length === 0) return null;
              return (
                <div key={viewPort.title}>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col space-y-1">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        {viewPort.title}
                      </h2>
                      <Balancer className="text-sm text-muted-foreground">
                        {viewPort.description}
                      </Balancer>
                      {viewPort.noteDescription && (
                        <Typography variant="code">
                          {viewPort.noteDescription}
                        </Typography>
                      )}
                    </div>
                    <div className="flex space-x-1">
                      <Link
                        className={buttonVariants({ variant: "outline" })}
                        href={viewPort.href}
                        prefetch={true}
                      >
                        View all
                      </Link>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div>
                    <ScrollArea
                      className={cn(
                        "w-[calc(100vw-135px)]",
                        open ? "md:w-[calc(100vw-391px)]" : ""
                      )}
                    >
                      <div className="flex space-x-4 pb-4">
                        {viewPort.data.length === 0 &&
                          Array.from({ length: 8 }).map((_, index) => (
                            <ViewItemSkeleton key={index} />
                          ))}
                        {viewPort.data.map((issue) => {
                          return (
                            <ViewItemCard
                              key={issue.id}
                              staff={staff}
                              issue={issue}
                              itemsType={type}
                              isSelected={itemsGroup.selectedItems
                                .map((item) => item.id)
                                .includes(issue.id)}
                              viewPortType={
                                viewPort as IssuesViewPort | FramesViewPort
                              }
                              setInformationSidebarAction={(open) => {
                                if (
                                  itemsGroup.selectedItems
                                    .map((item) => item.id)
                                    .includes(issue.id)
                                ) {
                                  setItemsGroup({
                                    ...viewPort,
                                    selectedItems: [],
                                  });
                                  return setOpenSidebarInformation(!open);
                                }

                                setItemsGroup({
                                  ...viewPort,
                                  selectedItems: [issue as any],
                                });

                                setOpenSidebarInformation(open);
                              }}
                            />
                          );
                        })}
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                </div>
              );
            })
          )}
        </TabsContent>
      </Tabs>
      <ItemsInformationSidebar
        issues={itemsGroup.selectedItems as PendingIssuesWithRelation[]}
        issueType={itemsGroup.title}
        itemType={type}
        openSidebar={openSidebarInformation}
        setOpenSidebarAction={setOpenSidebarInformation}
      />
    </div>
  );
}
