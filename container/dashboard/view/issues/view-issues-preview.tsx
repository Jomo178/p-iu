"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FramesViewPort, IssuesViewPort } from "@/types";
import Balancer from "react-wrap-balancer";

import { PendingIssuesWithRelation } from "@/types/prisma";
import { cn, toUpperCase } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { DatetimePicker } from "@/components/ui/date-time-picker";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";

import { framesViewPortType } from "./frames";
import IssueInformationSidebar from "./issue-information-sidebar";
import { issuesViewPortType, ItemsType } from "./issues";
import ViewIssueCard from "./view-issue-card";
import { SkeletonViewPreview, ViewIssueSkeleton } from "./view-issue-skeleton";

interface ViewIssuesPreviewProps {
  type: `${ItemsType}`;
}

export default function ViewIssuesPreview({ type }: ViewIssuesPreviewProps) {
  const { open } = useSidebar();
  const [loading, setLoading] = useState(false);
  const [openSidebarInformation, setOpenSidebarInformation] = useState(false);
  const [issuesViewPort, setIssuesViewPort] = useState<
    IssuesViewPort | FramesViewPort
  >(type === "frames" ? framesViewPortType[0] : issuesViewPortType[0]);
  const [issuesViewPortData, setIssuesViewPortData] = useState<
    (IssuesViewPort | FramesViewPort)[]
  >(type === "frames" ? framesViewPortType : issuesViewPortType);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const updatedViewPortData = await Promise.all(
        issuesViewPortData.map(async (viewPort) => {
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
              approvedBy: item.approvedBy || undefined,
            })),
            fetchCount: viewPort.fetchCount + data.length,
          };
        })
      );
      setIssuesViewPortData(updatedViewPortData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className={cn(open ? "container" : "container md:pr-0")}>
      <Tabs defaultValue={type} className="mt-5 space-y-6">
        <div className="space-between flex items-center">
          <div className="space-between flex flex-col items-center gap-4 sm:flex-row">
            <TabsList className="w-full">
              {Object.values(ItemsType).map((item) => (
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
              <TabsTrigger value="fonts" className="w-full" disabled>
                Fonts
              </TabsTrigger>
            </TabsList>
            <DatetimePicker value={new Date()} disabled action={() => {}} />
          </div>
        </div>
        <Separator className="my-4" />
        <TabsContent value={type} className="border-none p-0 outline-none">
          {loading &&
            issuesViewPortData.map((viewPort) => (
              <SkeletonViewPreview key={viewPort.title} />
            ))}
          {issuesViewPortData.map((viewPort) => {
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
                          <ViewIssueSkeleton key={index} />
                        ))}
                      {viewPort.data.map((issue) => {
                        return (
                          <ViewIssueCard
                            key={issue.id}
                            isFrame={type === "frames"}
                            issue={issue}
                            isSelected={issuesViewPort.selectedItems
                              .map((item) => item.id)
                              .includes(issue.id)}
                            viewPortType={viewPort}
                            setInformationSidebarAction={(open) => {
                              if (
                                issuesViewPort.selectedItems
                                  .map((item) => item.id)
                                  .includes(issue.id)
                              ) {
                                setIssuesViewPort({
                                  ...viewPort,
                                  selectedItems: [],
                                });
                                return setOpenSidebarInformation(!open);
                              }

                              setIssuesViewPort({
                                ...viewPort,
                                selectedItems: [issue],
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
          })}
        </TabsContent>
      </Tabs>
      <IssueInformationSidebar
        issues={issuesViewPort.selectedItems as PendingIssuesWithRelation[]}
        isFrames={type === "frames"}
        issueType={issuesViewPort.title}
        openSidebar={openSidebarInformation}
        setOpenSidebarAction={setOpenSidebarInformation}
      />
    </div>
  );
}
