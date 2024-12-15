"use client";

import { useEffect, useState } from "react";
import { getCachedStaffDiscordProfiles } from "@/server/staff/_action";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useQuery } from "@tanstack/react-query";

import { UserProfile } from "@/types/next-auth";
import {
  PendingFramesWithRelation,
  PendingIssuesWithRelation,
} from "@/types/prisma";
import { cn, formatTimestamp, scrollToCarousel } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Icons } from "@/components/ui/icons";
import { ScrollBar } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  useSidebar,
} from "@/components/ui/sidebar";
import { Typography } from "@/components/ui/typography";

import ItemsHistory from "./items-history";

interface ItemsInformationSidebarProps {
  issueType: string;
  issues: PendingIssuesWithRelation[] | PendingFramesWithRelation[];
  isFrames: boolean | undefined;
  openSidebar: boolean;
  setOpenSidebarAction: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ItemsInformationSidebar({
  issueType,
  issues,
  isFrames = false,
  openSidebar,
  setOpenSidebarAction,
}: ItemsInformationSidebarProps) {
  const isSelected = issues.length > 0 && openSidebar;
  const { isMobile } = useSidebar();

  return (
    <>
      <SidebarProvider
        name="issue-info"
        className={cn("block", !isSelected && "hidden")}
      >
        <Sidebar
          variant="floating"
          collapsible="icon"
          side="right"
          className="w-[400px]"
        >
          <SidebarContent className="bg-background">
            <SelectedIssuesCarousel
              issues={issues}
              issueType={issueType}
              isMobile={isMobile}
              isFrames={isFrames}
            />
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>

      <Drawer
        open={openSidebar && isMobile}
        onOpenChange={(open) => {
          if (isMobile) setOpenSidebarAction(open);
        }}
      >
        <DrawerContent className="h-[30rem]">
          <DrawerHeader>
            <DrawerTitle>Issue Information</DrawerTitle>
            <DrawerClose />
          </DrawerHeader>
          <ScrollArea className="overflow-auto break-all p-4">
            <SelectedIssuesCarousel
              issues={issues}
              issueType={issueType}
              isMobile={isMobile}
              isFrames={isFrames}
            />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function SelectedIssuesCarousel({
  issues,
  issueType,
  isFrames,
  isMobile,
  className,
}: {
  issues: PendingIssuesWithRelation[] | PendingFramesWithRelation[];
  issueType: string;
  isFrames: boolean;
  isMobile: boolean;
  className?: string;
}) {
  const { data } = useQuery({
    queryKey: ["staff-info"],
    queryFn: getCachedStaffDiscordProfiles,
    staleTime: Infinity,
    refetchOnMount: false,
  });

  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    scrollToCarousel(api, issues.length);
  }, [issues]);

  return (
    <Carousel setApi={setApi} className="h-full w-full">
      <CarouselContent className={cn(className)}>
        {issues.map((issue, index) => (
          <CarouselItem key={index} className="items-center">
            {isFrames ? (
              <FramesCardDetails
                frame={issue as PendingFramesWithRelation}
                issueType={issueType}
              />
            ) : (
              <IssueCardDetails
                issue={issue as PendingIssuesWithRelation}
                issueType={issueType}
              />
            )}

            <IssueRejections issue={issue} data={data} />

            <ItemsHistory data={data} issue={issue} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

function IssueCardDetails({
  issue,
  issueType,
}: {
  issue: PendingIssuesWithRelation;
  issueType: string;
}) {
  return (
    <Card className="!w-full border-0">
      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between pt-5">
          <h2 className="text-lg font-semibold">
            Current Issue
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {issue.name}
            </code>
          </h2>
          <Badge className="text-white">{issueType}</Badge>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-2 pb-10">
          <div className="space-x-3">
            <small className="text-sm font-medium leading-none">Group:</small>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {issue.group}
            </code>
          </div>
          <div className="flex items-center space-x-3">
            <small className="text-sm font-medium leading-none">Rarity:</small>
            <code className="relative flex w-fit rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {Array.from({ length: issue.rarity }).map((_, starIndex) => (
                <Icons.star key={starIndex} size={16} />
              ))}
            </code>
          </div>
          <div className="space-x-3">
            <small className="text-sm font-medium leading-none">Act:</small>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {issue.act}
            </code>
          </div>
          <div className="space-x-3">
            <small className="text-sm font-medium leading-none">Code:</small>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {issue.code}
            </code>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function FramesCardDetails({
  frame,
  issueType,
}: {
  frame: PendingFramesWithRelation;
  issueType: string;
}) {
  return (
    <Card className="!w-full border-0">
      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between pt-5">
          <h2 className="text-lg font-semibold">
            Current Frame
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {frame.name}
            </code>
          </h2>
          <Badge className="text-white">{issueType}</Badge>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-2 pb-10">
          <div className="space-x-3">
            <small className="text-sm font-medium leading-none">Rarity:</small>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {frame.rarity}
            </code>
          </div>
          <div className="space-x-3">
            <small className="text-sm font-medium leading-none">Code:</small>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {frame.code}
            </code>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function IssueRejections({
  issue,
  data,
}: {
  issue: PendingIssuesWithRelation | PendingFramesWithRelation;
  data: UserProfile[] | undefined;
}) {
  if (!issue.rejections.length) return null;

  return (
    <Card className="!w-full rounded-t-none border-0 border-t-2">
      <CardTitle className="p-4 text-lg font-semibold">Rejections</CardTitle>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 pb-10">
          {issue.rejections.map((rejection, index) => {
            const staff = data?.find(
              (user) => user.id === rejection.rejectedBy.discordId
            );
            return (
              <div key={index} className="col-span-2 flex flex-col">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={staff?.avatar ?? "/images/iu.png"}
                      alt={staff?.username}
                    />
                    <AvatarFallback>{staff?.username.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <Typography variant="code">{rejection.reason}</Typography>
                </div>
                <span className="pt-2 text-xs text-white">
                  {formatTimestamp(rejection.createdAt)}
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
