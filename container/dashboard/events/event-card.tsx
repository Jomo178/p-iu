"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { releaseEvent } from "@/server/events/_action";
import { EventType, Staff } from "@prisma/client";
import { toast } from "sonner";

import { UserProfile } from "@/types/next-auth";
import { EventsWithRelation } from "@/types/prisma";
import { cn, formatTimestamp, hasPermission, toUpperCase } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/ui/credenza";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";

import EventEdit from "./event-edit";

interface EventCardProps {
  event: EventsWithRelation;
  staffDetails: UserProfile[];
  isCurrentEvent?: boolean;
  isPastEvent?: boolean;
  setEventStateAction: Dispatch<SetStateAction<EventsWithRelation[]>>;
  currentStaff: Staff;
}

export default function EventCard({
  event,
  staffDetails,
  isCurrentEvent = false,
  isPastEvent = false,
  setEventStateAction,
  currentStaff,
}: EventCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openReleaseDialog, setOpenReleaseDialog] = useState(false);

  const staff = staffDetails.find(
    (staff) => staff.id === event.createdBy.discordId
  );

  return (
    <Card
      className="relative w-full max-w-sm cursor-pointer overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-4">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            {event.customRarity != "" && event.customRarity ? (
              <Image
                src={`https://cdn.discordapp.com/emojis/${event.customRarity}.webp`}
                width={48}
                height={48}
                alt="Custom Rarity"
              />
            ) : (
              <Icons.star size={48} />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p
              className={cn(
                "truncate text-sm font-medium",
                isCurrentEvent && "text-blue-950 text-primary"
              )}
            >
              {event.name}
            </p>
            <div className="mt-1 flex items-center text-xs text-muted-foreground">
              <Icons.soon size={16} className="mr-1 h-3 w-3" />
              <time dateTime={event.start.toISOString()}>
                {formatTimestamp(event.start)} - {formatTimestamp(event.end)}
              </time>
            </div>
            <div className="mt-1 flex items-center text-xs text-muted-foreground">
              <Icons.menu size={16} className="mr-1 h-3 w-3" />
              <div>
                {event.type.map((type, index) => {
                  const pendingName = ("pending" +
                    toUpperCase(type)) as EventType;
                  return (
                    <span key={index} className="text-xs text-muted-foreground">
                      {`${toUpperCase(type)}: ${event[type].length + event[pendingName].length}`}
                      {index < event.type.length - 1 && ", "}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="mt-1 flex items-center text-xs text-muted-foreground">
              <Icons.addButton className="mr-1 h-3 w-3" />
              <time dateTime={event.createdAt.toISOString()}>
                Created: {formatTimestamp(event.createdAt)}
              </time>
            </div>
            <div className="mt-1 flex items-center text-xs text-muted-foreground">
              <Icons.user className="mr-1 h-3 w-3" />
              <span>{staff?.username}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <div
        className={`absolute right-2 top-2 transition-all duration-300 ${
          isHovered ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        }`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 border-none"
            >
              <Icons.menu className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => setOpenEditDialog(true)}
              disabled={hasPermission(currentStaff, "edit:event")}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setOpenReleaseDialog(true)}
              disabled={
                (event.pendingFrames.length === 0 &&
                  event.pendingIssues.length === 0) ||
                isPastEvent ||
                hasPermission(currentStaff, "handle:event")
              }
            >
              Release Items
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <EventEdit
        event={event}
        setEventStateAction={setEventStateAction}
        openDialog={openEditDialog}
        setOpenDialogAction={setOpenEditDialog}
      />
      <ReleaseEvent
        event={event}
        openDialog={openReleaseDialog}
        setOpenDialogAction={setOpenReleaseDialog}
      />
    </Card>
  );
}

interface ReleaseEventProps {
  event: EventsWithRelation;
  openDialog: boolean;
  setOpenDialogAction: Dispatch<SetStateAction<boolean>>;
}

function ReleaseEvent({
  event,
  openDialog,
  setOpenDialogAction,
}: ReleaseEventProps) {
  const [loading, setLoading] = useState(false);

  return (
    <Credenza open={openDialog} onOpenChange={setOpenDialogAction}>
      <CredenzaContent className="md:max-w-md">
        <CredenzaHeader>
          <CredenzaTitle>Release Event</CredenzaTitle>
          <CredenzaDescription>
            Release the items of an event.
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody>
          <div>
            <p>Are you sure to release the Approved Items?</p>
            {event.type.map((type, index) => {
              const pendingName = ("pending" + toUpperCase(type)) as EventType;
              return (
                <span key={index} className="text-xs text-muted-foreground">
                  {`${toUpperCase(type)}: ${event[type].length + event[pendingName].length}`}
                  {index < event.type.length - 1 && ", "}
                </span>
              );
            })}
          </div>
        </CredenzaBody>
        <CredenzaFooter className="flex flex-row justify-center">
          <Button
            type="submit"
            loading={loading}
            onClick={() => {
              if (loading) return;
              setLoading(true);
              toast.promise(releaseEvent(event.id), {
                loading: "Loading...",
                success: (response) => {
                  setLoading(false);
                  setOpenDialogAction(false);
                  return response.message;
                },
                error: "Something went wrong. Please try again.",
              });
            }}
          >
            Save changes
          </Button>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
}
