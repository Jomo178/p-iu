import Link from "next/link";
import FramesCarousel from "@/container/dashboard/add/frames/frames-carousel";
import IssuesCarousel from "@/container/dashboard/add/issues/issues-carousel";
import {
  getCurrentEventFrames,
  getCurrentEventIssues,
} from "@/server/event-issues";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function Page() {
  const issueEvent = await getCurrentEventIssues();
  const frameEvent = await getCurrentEventFrames();

  //TODO: handle error
  if (!frameEvent || !issueEvent) return;

  return (
    <>
      <Tabs
        defaultValue="frames"
        className="ml-auto mr-auto max-h-fit min-w-[400px] max-w-fit p-11"
      >
        <TabsList className="grid w-full grid-cols-2">
          <Link href="/dashboard/add/issues" prefetch className="text-center">
            <TabsTrigger value="issues" className="w-full">
              Issues
            </TabsTrigger>
          </Link>
          <Link href="/dashboard/add/frames" prefetch className="text-center">
            <TabsTrigger value="frames" className="w-full">
              Frames
            </TabsTrigger>
          </Link>
        </TabsList>
        <TabsContent value="issues">
          <Card className="ml-auto mr-auto max-h-fit max-w-fit p-11">
            <CardContent>
              <IssuesCarousel eventReleaseDate={issueEvent.start} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="frames">
          <Card className="ml-auto mr-auto max-h-fit max-w-fit p-11">
            <CardContent>
              <FramesCarousel eventReleaseDate={frameEvent.start} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
