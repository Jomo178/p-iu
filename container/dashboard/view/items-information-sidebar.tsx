"use client";

import { useEffect, useState } from "react";
import { getCachedStaffDiscordProfiles } from "@/server/staff/_action";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useQuery } from "@tanstack/react-query";

import { ItemsNameType, ItemStatusViewType, ItemType } from "@/types/items";
import { UserProfile } from "@/types/next-auth";
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

interface ItemsInformationSidebarProps<T extends ItemsNameType> {
  itemNameType: T;
  items: ItemType<T>[1][];
  itemsViewPortId: ItemStatusViewType<T>;
  openSidebar: boolean;
  setOpenSidebarAction: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ItemsInformationSidebar<T extends ItemsNameType>({
  itemNameType,
  items,
  itemsViewPortId,
  openSidebar,
  setOpenSidebarAction,
}: ItemsInformationSidebarProps<T>) {
  const isSelected = items.length > 0 && openSidebar;
  const { isMobile } = useSidebar();

  return (
    <>
      <SidebarProvider
        name="item-info"
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
              itemNameType={itemNameType}
              items={items}
              itemsViewPortId={itemsViewPortId}
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
              itemNameType={itemNameType}
              items={items}
              itemsViewPortId={itemsViewPortId}
            />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </>
  );
}

interface SelectedIssuesCarouselProps<T extends ItemsNameType> {
  itemNameType: T;
  items: ItemType<T>[1][];
  itemsViewPortId: ItemStatusViewType<T>;
  className?: string;
}

function SelectedIssuesCarousel<T extends ItemsNameType>({
  itemNameType,
  items,
  itemsViewPortId,
  className,
}: SelectedIssuesCarouselProps<T>) {
  const { data: AllStaffInformation } = useQuery({
    queryKey: ["staff-info"],
    queryFn: getCachedStaffDiscordProfiles,
    staleTime: Infinity,
    refetchOnMount: false,
  });

  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    scrollToCarousel(api, items.length);
  }, [items]);

  return (
    <Carousel setApi={setApi} className="h-full w-full">
      <CarouselContent className={cn(className)}>
        {items.map((item, index) => (
          <CarouselItem key={index} className="items-center">
            {itemNameType.includes("frames") && (
              <FramesCardDetails
                frame={item as ItemType<"frames">[1]}
                itemsViewPortId={
                  itemsViewPortId as ItemStatusViewType<"frames">
                }
              />
            )}
            {itemNameType.includes("issues") && (
              <IssueCardDetails
                issue={item as ItemType<"issues">[1]}
                itemsViewPortId={
                  itemsViewPortId as ItemStatusViewType<"issues">
                }
              />
            )}
            {itemNameType.includes("fonts") && (
              <FontsCardDetails
                font={item as ItemType<"fonts">[1]}
                itemsViewPortId={itemsViewPortId as ItemStatusViewType<"fonts">}
              />
            )}
            <ItemRejections
              item={item}
              AllStaffInformation={AllStaffInformation}
            />
            <ItemsHistory
              itemNameType={itemNameType}
              item={item}
              AllStaffInformation={AllStaffInformation}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

function IssueCardDetails({
  issue,
  itemsViewPortId,
}: {
  issue: ItemType<"issues">[1];
  itemsViewPortId: ItemStatusViewType<"issues">;
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
          <Badge className="text-white">{itemsViewPortId}</Badge>
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
  itemsViewPortId,
}: {
  frame: ItemType<"frames">[1];
  itemsViewPortId: ItemStatusViewType<"frames">;
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
          <Badge className="text-white">{itemsViewPortId}</Badge>
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

function FontsCardDetails({
  font,
  itemsViewPortId,
}: {
  font: ItemType<"fonts">[1];
  itemsViewPortId: ItemStatusViewType<"fonts">;
}) {
  return (
    <Card className="!w-full border-0">
      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between pt-5">
          <h2 className="text-lg font-semibold">
            Current Font
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {font.name}
            </code>
          </h2>
          <Badge className="text-white">{itemsViewPortId}</Badge>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-2 pb-10">
          <div className="space-x-3">
            <small className="text-sm font-medium leading-none">
              Short Name:
            </small>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {font.short}
            </code>
          </div>
          <div className="space-x-3">
            <small className="text-sm font-medium leading-none">Price:</small>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {font.price}
            </code>
          </div>
          <div className="space-x-3">
            <small className="text-sm font-medium leading-none">
              On Market:
            </small>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {font.onMarket ? "Yes" : "No"}
            </code>
          </div>
          <div className="space-x-3">
            <small className="text-sm font-medium leading-none">Is Big:</small>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {font.isBig ? "Yes" : "No"}
            </code>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface ItemRejectionsProps<T extends ItemsNameType> {
  item: ItemType<T>[1];
  AllStaffInformation: UserProfile[] | undefined;
}

function ItemRejections<T extends ItemsNameType>({
  item,
  AllStaffInformation,
}: ItemRejectionsProps<T>) {
  if (!item.rejections.length) return null;

  return (
    <Card className="!w-full rounded-t-none border-0 border-t-2">
      <CardTitle className="p-4 text-lg font-semibold">Rejections</CardTitle>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 pb-10">
          {item.rejections.map((rejection, index) => {
            const staff = AllStaffInformation?.find(
              (staff) => staff.id === rejection.rejectedBy.discordId
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
