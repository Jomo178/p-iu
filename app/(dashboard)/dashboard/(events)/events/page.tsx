import EventsContainer from "@/container/dashboard/events/events";
import { getEvents } from "@/server/events/_action";
import { getAllStaffDiscordProfiles } from "@/server/staff/_action";

interface EventsProps {}

export default async function Events({}: EventsProps) {
  const events = await getEvents();
  const staffDiscordDetails = await getAllStaffDiscordProfiles();

  return <EventsContainer events={events} staffDetails={staffDiscordDetails} />;
}
