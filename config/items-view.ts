import {
  getPendingItems,
  getRejectedItems,
  getReleasedItems,
  getUpcomingItems,
} from "@/server/view/get-action";

import { ItemListingView, ItemsNameType, ItemType } from "@/types/items";
import { Icons } from "@/components/ui/icons";

export function generateItemsViewPort<T extends ItemsNameType>(
  type: T
): ItemListingView<T>[] {
  const template: ItemListingView<T>[] = [
    {
      title: `Rejected ${type.charAt(0).toUpperCase() + type.slice(1)}`,
      id: `rejected-${type}`,
      description: `${type.charAt(0).toUpperCase() + type.slice(1)} that have been rejected.`,
      noteDescription: `Please edit the rejected ${type} and resubmit it.`,
      fetchCount: 0,
      fetchFunction: (skip, amount, filter, orderBy) =>
        getRejectedItems(type, skip, amount, filter, orderBy),
      data: [],
      selectedItems: [],
      disabled: false,
      href: `/dashboard/view/rejected-${type}`,
      Icon: Icons.rejected,
    },
    {
      title: `Pending ${type.charAt(0).toUpperCase() + type.slice(1)}`,
      id: `pending-${type}`,
      description: `${type.charAt(0).toUpperCase() + type.slice(1)} that wait to be approved and be published.`,
      fetchCount: 0,
      fetchFunction: (skip, amount, filter, orderBy) =>
        getPendingItems(type, skip, amount, filter, orderBy),
      data: [],
      selectedItems: [],
      disabled: false,
      href: `/dashboard/view/pending-${type}`,
      Icon: Icons.pending,
    },
    {
      title: `Upcoming ${type.charAt(0).toUpperCase() + type.slice(1)}`,
      id: `upcoming-${type}`,
      description: `${type.charAt(0).toUpperCase() + type.slice(1)} that will be released soon.`,
      fetchCount: 0,
      fetchFunction: (skip, amount, filter, orderBy) =>
        getUpcomingItems(type, skip, amount, filter, orderBy),
      data: [],
      selectedItems: [],
      disabled: false,
      href: `/dashboard/view/upcoming-${type}`,
      Icon: Icons.soon,
    },
    {
      title: `Released ${type.charAt(0).toUpperCase() + type.slice(1)}`,
      description: `${type.charAt(0).toUpperCase() + type.slice(1)} that are published and available to collect.`,
      id: `released-${type}`,
      fetchCount: 0,
      fetchFunction: (skip, amount, filter, orderBy) =>
        getReleasedItems(type, skip, amount, filter, orderBy),
      data: [],
      selectedItems: [],
      disabled: false,
      href: `/dashboard/view/released-${type}`,
      Icon: Icons.addIssue,
    },
  ];

  return template;
}
