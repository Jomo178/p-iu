import { framesViewPortType } from "@/container/dashboard/view/issues/frames";
import { issuesViewPortType } from "@/container/dashboard/view/issues/issues";
import ViewAllIssuesType from "@/container/dashboard/view/issues/view-all-issue-type";
import ViewIssuesPreview from "@/container/dashboard/view/issues/view-issues-preview";
import { getAllStaffDiscordProfiles } from "@/server/staff/_action";
import { IssuesViewType } from "@/types";
import { EventType } from "@prisma/client";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { getCurrentStaff } from "@/lib/session";

export async function generateStaticParams() {
  const itemsTypeArray = Object.values(EventType).map((type) => ({ id: type }));

  return [...itemsTypeArray, ...issuesViewPortType, ...framesViewPortType].map(
    (type) => ({
      type: type.id,
    })
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const type = (await params).type as IssuesViewType | `${EventType}`;
  const staff = await getCurrentStaff();
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["staff-info"],
    queryFn: getAllStaffDiscordProfiles,
    staleTime: Infinity,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {Object.values(EventType).includes(type as EventType) ? (
        <ViewIssuesPreview type={type as EventType} staff={staff.staff} />
      ) : (
        <ViewAllIssuesType
          viewType={type as IssuesViewType}
          staff={staff.staff}
        />
      )}
    </HydrationBoundary>
  );
}
