import Link from "next/link";
import ItemsCarousel from "@/container/dashboard/add/items-carousel";
import { getCurrentEvent } from "@/server/events/_action";
import { Events, EventType } from "@prisma/client";

import { getCurrentStaff } from "@/lib/session";
import { toUpperCase } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmptyState } from "@/components/empty-state";

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
  const fontEvent = await getCurrentEvent(["fonts"]);
  const staff = await getCurrentStaff();

  return (
    <>
      <Tabs
        defaultValue={type}
        className="py-6 sm:ml-auto sm:mr-auto sm:max-h-fit sm:min-w-[400px] sm:max-w-fit sm:px-6 md:p-11"
      >
        <TabsList className="grid w-full grid-cols-3">
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

        {Object.values(EventType).map((item) => {
          const itemName = item.slice(0, -1);

          const events: { [key in EventType]?: Events | null } = {};
          events["issues"] = issueEvent;
          events["frames"] = frameEvent;
          events["fonts"] = fontEvent;

          return (
            <TabsContent value={item} key={item}>
              <Card className="ml-auto mr-auto max-h-fit max-w-fit p-6 md:p-11">
                <CardContent>
                  {(!frameEvent && item == "frames") ||
                  (!issueEvent && item == "issues") ||
                  (!fontEvent && item == "fonts") ? (
                    <EmptyState
                      key={item}
                      className="border-none"
                      title={`No ${itemName} event found`}
                      description={`Please create a ${itemName} event first`}
                      action={
                        <Link href="/dashboard/events">
                          <Button variant="outline">Create Event</Button>
                        </Link>
                      }
                    />
                  ) : (
                    <ItemsCarousel
                      itemType={item}
                      staff={staff.staff}
                      eventReleaseDate={events[item]?.start!}
                    />
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          );
        })}
      </Tabs>
    </>
  );
}
