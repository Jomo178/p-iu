import EventsContainer from "@/container/dashboard/events/events";
import { getAllEvents } from "@/server/events/_action";
import { getAllStaffDiscordProfiles } from "@/server/staff/_action";

import { getCurrentStaff } from "@/lib/session";

interface EventsProps {}

export default async function Events({}: EventsProps) {
  const events = await getAllEvents();
  const staffDiscordDetails = await getAllStaffDiscordProfiles();
  const currentStaff = await getCurrentStaff();

  return (
    <EventsContainer
      events={events}
      staffDetails={staffDiscordDetails}
      currentStaff={currentStaff.staff}
    />
  );
}
