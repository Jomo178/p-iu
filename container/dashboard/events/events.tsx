"use client";

import { useState } from "react";

import { UserProfile } from "@/types/next-auth";
import { EventsWithRelation } from "@/types/prisma";

import EventAdd from "./event-add";
import EventCard from "./event-card";

interface EventsContainerProps {
  events: EventsWithRelation[];
  staffDetails: UserProfile[];
}

export default function EventsContainer({
  events,
  staffDetails,
}: EventsContainerProps) {
  const [eventState, setEventState] = useState<EventsWithRelation[]>(events);

  return (
    <div className="container mt-10 space-y-5">
      <div>
        <EventAdd setEventStateAction={setEventState} />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {eventState.map((event, index) => {
          const isCurrentEvent =
            new Date() >= event.start && new Date() <= event.end;
          return (
            <EventCard
              event={event}
              key={index}
              staffDetails={staffDetails}
              isCurrentEvent={isCurrentEvent}
            />
          );
        })}
      </div>
    </div>
  );
}
