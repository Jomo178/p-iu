import { PrismaEventTypes } from "@prisma/client";
import { z } from "zod";

import { itemsSchema } from "@/config/items-add";
import useLocalStorage from "@/hooks/use-local-storage";

import {
  FontsWithRelation,
  FramesWithRelation,
  IssuesWithRelation,
  PendingFontsWithRelation,
  PendingFramesWithRelation,
  PendingIssuesWithRelation,
} from "./items-relation";

export type ItemsNameType = `${PrismaEventTypes}`;

export type AuthorizationAction = "create" | "edit" | "delete" | "handle";

export interface ItemDetails {
  title: string;
  description: string;
  noteDescription?: string;
  fetchCount: number;
  Icon: FC<{ className: string }>;
  disabled: boolean;
}

export type ItemsPendingType = `pending${Capitalize<ItemsNameType>}`;

export type ItemStatusViewType<T extends ItemsNameType> =
  | `released-${T}`
  | `pending-${T}`
  | `rejected-${T}`
  | `upcoming-${T}`;

type RelationMapping = {
  frames: [FramesWithRelation, PendingFramesWithRelation];
  issues: [IssuesWithRelation, PendingIssuesWithRelation];
  fonts: [FontsWithRelation, PendingFontsWithRelation];
};

export type ItemType<T extends keyof RelationMapping> = RelationMapping[T];

export interface ItemListingView<T extends keyof RelationMapping>
  extends ItemDetails {
  id: ItemStatusViewType<T>;
  fetchFunction: (
    skip: number,
    amount: number,
    filter: any,
    orderBy: any
  ) => Promise<ItemType<T>[0][] | ItemType<T>[1][]>;
  data: ItemType<T>[0][] | ItemType<T>[1][];
  selectedItems: ItemType<T>[0][] | ItemType<T>[1][];
  href: `/dashboard/view/${ItemStatusViewType<T>}`;
}

export type EditItemsProps<T extends ItemsNameType> = {
  itemsViewPortId: ItemStatusViewType<T>;
  item: ItemSchemaValue<T> & {
    imageLink: string;
    changedImage: boolean;
  };
};

//Add Items
type ItemsSchemaTypes = typeof itemsSchema;
type FormPropsValue<T> = T extends z.ZodTypeAny ? z.infer<T> : never;

export type ItemFormPropsValue = {
  [K in keyof ItemsSchemaTypes]: FormPropsValue<ItemsSchemaTypes[K]>;
};

export type ItemSchemaValue<T extends keyof typeof itemsSchema> = z.infer<
  (typeof itemsSchema)[T]
>;

export type ItemsFormPropsValueKeys<T extends ItemsNameType> =
  keyof ItemFormPropsValue[T];
