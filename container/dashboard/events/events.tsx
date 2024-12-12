"use client";

import { useState } from "react";
import { Staff } from "@prisma/client";

import { UserProfile } from "@/types/next-auth";
import { EventsWithRelation } from "@/types/prisma";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import EventAdd from "./event-add";
import EventCard from "./event-card";

interface EventsContainerProps {
  events: EventsWithRelation[];
  staffDetails: UserProfile[];
  currentStaff: Staff;
}

export default function EventsContainer({
  events,
  staffDetails,
  currentStaff,
}: EventsContainerProps) {
  const [eventState, setEventState] = useState<EventsWithRelation[]>(events);

  const currentDate = new Date();
  const currentEvents = eventState.filter(
    (event) =>
      new Date(event.start) <= currentDate && new Date(event.end) >= currentDate
  );
  const pastEvents = eventState.filter(
    (event) => new Date(event.end) < currentDate
  );
  const upcomingEvents = eventState.filter(
    (event) => new Date(event.start) > currentDate
  );

  let nextEvent: EventsWithRelation | null = null;
  if (upcomingEvents.length > 0) {
    nextEvent = upcomingEvents.sort(
      (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
    )[0];

    if (nextEvent.name.includes("IU Release")) {
      const alternativeEvent = upcomingEvents.find(
        (event) => !event.name.includes("IU Release")
      );

      if (alternativeEvent) {
        nextEvent = alternativeEvent;
        upcomingEvents.splice(upcomingEvents.indexOf(alternativeEvent), 1);
      }
    } else {
      upcomingEvents.splice(upcomingEvents.indexOf(nextEvent), 1);
    }
  }

  return (
    <div className="container mt-10 space-y-5">
      <div>
        <EventAdd
          setEventStateAction={setEventState}
          currentStaff={currentStaff}
        />
      </div>

      {currentEvents ? (
        <section>
          <h2 className="mb-4 text-xl font-bold">
            {currentEvents.length > 0 ? "Current Events" : "Current Event"}
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {currentEvents.map((event, index) => (
              <EventCard
                event={event}
                key={`current-${index}`}
                staffDetails={staffDetails}
                setEventStateAction={setEventState}
                currentStaff={currentStaff}
                isCurrentEvent={true}
              />
            ))}
          </div>
        </section>
      ) : (
        nextEvent && (
          <section>
            <h2 className="mb-4 text-xl font-bold">Next Event</h2>
            <div className="grid grid-cols-1 gap-5">
              <EventCard
                event={nextEvent}
                staffDetails={staffDetails}
                setEventStateAction={setEventState}
                currentStaff={currentStaff}
              />
            </div>
          </section>
        )
      )}

      {upcomingEvents.length > 0 && (
        <section>
          <Separator className="my-2" />
          <h2 className="mb-4 text-xl font-bold">Upcoming Events</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <EventCard
                event={event}
                key={`upcoming-${index}`}
                staffDetails={staffDetails}
                setEventStateAction={setEventState}
                currentStaff={currentStaff}
              />
            ))}
          </div>
        </section>
      )}

      {pastEvents.length > 0 && (
        <section>
          <Separator className="my-2" />
          <h2 className="mb-4 text-xl font-bold">Past Events</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event, index) => (
              <EventCard
                event={event}
                key={`past-${index}`}
                staffDetails={staffDetails}
                isPastEvent={true}
                setEventStateAction={setEventState}
                currentStaff={currentStaff}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
