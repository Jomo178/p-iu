import { framesViewPortType } from "@/container/dashboard/view/issues/frames";
import {
  issuesViewPortType,
  ItemsType,
} from "@/container/dashboard/view/issues/issues";
import ViewAllIssuesType from "@/container/dashboard/view/issues/view-all-issue-type";
import ViewIssuesPreview from "@/container/dashboard/view/issues/view-issues-preview";
import { getAllStaffDiscordProfiles } from "@/server/staff/_action";
import { IssuesViewType } from "@/types";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export async function generateStaticParams() {
  const itemsTypeArray = Object.values(ItemsType).map((type) => ({ id: type }));

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
  const type = (await params).type as IssuesViewType | `${ItemsType}`;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["staff-info"],
    queryFn: getAllStaffDiscordProfiles,
    staleTime: Infinity,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {Object.values(ItemsType).includes(type as ItemsType) ? (
        <ViewIssuesPreview type={type as ItemsType} />
      ) : (
        <ViewAllIssuesType viewType={type as IssuesViewType} />
      )}
    </HydrationBoundary>
  );
}
