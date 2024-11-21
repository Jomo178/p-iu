import Image from "next/image";

import { UserProfile } from "@/types/next-auth";
import { EventsWithRelation } from "@/types/prisma";
import { cn, formatTimestamp } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

interface EventCardProps {
  event: EventsWithRelation;
  staffDetails: UserProfile[];
  isCurrentEvent: boolean;
}

export default function EventCard({
  event,
  staffDetails,
  isCurrentEvent,
}: EventCardProps) {
  const staff = staffDetails.find(
    (staff) => staff.id === event.createdBy.discordId
  );

  return (
    <Card className="w-full max-w-sm">
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
                isCurrentEvent && "text-primary"
              )}
            >
              {event.name}
            </p>
            <div className="mt-1 flex items-center text-xs text-muted-foreground">
              <Icons.soon size={16} className="mr-1 h-3 w-3" />
              <time dateTime={event.start.toISOString()}>
                {formatTimestamp(event.start)} - ${formatTimestamp(event.end)}
              </time>
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
    </Card>
  );
}
