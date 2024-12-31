import ViewAllItems from "@/container/dashboard/view/view-all-items";
import ViewItemsGroupPreview from "@/container/dashboard/view/view-items-group-preview";
import { getCachedStaffDiscordProfiles } from "@/server/staff/_action";
import { PrismaEventTypes } from "@prisma/client";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { ItemsNameType, ItemStatusViewType } from "@/types/items";
import { generateItemsViewPort } from "@/config/items-view";
import { getCurrentStaff } from "@/lib/session";

export async function generateStaticParams() {
  const itemsTypeArray = Object.values(PrismaEventTypes).map((type) => {
    let arrayType: { id: string }[] = [{ id: type }];
    const createViewPortType = generateItemsViewPort(type);
    createViewPortType.forEach((viewPortType) => {
      arrayType.push({ id: viewPortType.id });
    });
    return arrayType;
  });

  return itemsTypeArray.flat().map((item) => ({
    type: item.id,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ type: string; test: string }>;
}) {
  const type = (await params).type;
  const staff = await getCurrentStaff();
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["staff-info"],
    queryFn: getCachedStaffDiscordProfiles,
    staleTime: Infinity,
  });

  const itemNameType = type?.split("-")[1] as ItemsNameType;

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {Object.values(PrismaEventTypes).includes(type as ItemsNameType) ? (
        <ViewItemsGroupPreview
          itemNameType={type as ItemsNameType}
          currentStaff={staff.staff}
        />
      ) : (
        <ViewAllItems
          itemNameType={itemNameType}
          itemsViewPortId={type as ItemStatusViewType<typeof itemNameType>}
          currentStaff={staff.staff}
        />
      )}
    </HydrationBoundary>
  );
}
