import IssuesCarousel from "@/container/add/issues-carousel";
import { getCurrentEventIssues } from "@/server/event-issues";

import { Card, CardContent } from "@/components/ui/card";

export default async function Page() {
  const event = await getCurrentEventIssues();

  //TODO: handle error
  if (!event) return;

  return (
    <>
      <Card className="ml-auto mr-auto max-h-fit max-w-fit p-11">
        <CardContent>
          <IssuesCarousel
            eventReleaseDate={event.start}
            eventName={event.name}
          />
        </CardContent>
      </Card>
    </>
  );
}
