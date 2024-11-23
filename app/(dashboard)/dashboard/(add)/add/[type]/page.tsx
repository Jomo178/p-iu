import Link from "next/link";
import FramesCarousel from "@/container/dashboard/add/frames/frames-carousel";
import IssuesCarousel from "@/container/dashboard/add/issues/issues-carousel";
import { getCurrentEvent } from "@/server/events/_action";
import { EventType } from "@prisma/client";

import { getCurrentStaff } from "@/lib/session";
import { toUpperCase } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export async function generateStaticParams() {
  const types = Object.values(EventType);
  return types.map((type) => ({
    type: type,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ type: EventType }>;
}) {
  const type = (await params).type;
  const issueEvent = await getCurrentEvent(["issues"]);
  const frameEvent = await getCurrentEvent(["frames"]);
  const staff = await getCurrentStaff();

  //TODO: handle error
  if (!frameEvent || !issueEvent) return;

  return (
    <>
      <Tabs
        defaultValue={type}
        className="py-6 sm:ml-auto sm:mr-auto sm:max-h-fit sm:min-w-[400px] sm:max-w-fit sm:px-6 md:p-11"
      >
        <TabsList className="grid w-full grid-cols-2">
          {Object.values(EventType).map((item) => (
            <Link
              href={`/dashboard/add/${item}`}
              key={item}
              prefetch={true}
              className="text-center"
            >
              <TabsTrigger value={item} className="h-full w-full">
                {toUpperCase(item)}
              </TabsTrigger>
            </Link>
          ))}
        </TabsList>

        {Object.values(EventType).map((item) => (
          <TabsContent value={item} key={item}>
            <Card className="ml-auto mr-auto max-h-fit max-w-fit p-6 md:p-11">
              <CardContent>
                {item === "frames" ? (
                  <FramesCarousel
                    staff={staff.staff}
                    eventReleaseDate={frameEvent.start}
                  />
                ) : (
                  <IssuesCarousel
                    staff={staff.staff}
                    eventReleaseDate={issueEvent.start}
                  />
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
