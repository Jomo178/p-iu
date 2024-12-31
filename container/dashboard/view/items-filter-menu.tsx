"use client";

import { useEffect, useState } from "react";
import { IssueFilterSchema } from "@/model/issues-schema";
import { getAllEvents } from "@/server/events/_action";
import { getCachedStaffDiscordProfiles } from "@/server/staff/_action";
import { X } from "lucide-react";
import { useQueryState } from "nuqs";

import { EventsWithRelation } from "@/types/items-relation";
import { UserProfile } from "@/types/next-auth";
import { cn, toUpperCase } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/ui/credenza";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MultiSelect,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

import {
  containsFields,
  ContainsFields,
  searchParams,
  sortByFields,
  userFields,
  UserFields,
} from "./handlers";

let rarityOptions = Array.from({ length: 5 }).map((_, index) => ({
  label: `Rarity ${index + 1}`,
  icon: Array.from({ length: index + 1 }).map((_, starIndex) => (
    <Icons.star key={starIndex} size={16} />
  )),
  value: (index + 1).toString(),
}));

interface ItemsFilterMenuProps {
  appliedFilterAction: () => void;
}

export default function ItemsFilterMenu({
  appliedFilterAction,
}: ItemsFilterMenuProps) {
  const [staffProfiles, setStaffProfiles] = useState<UserProfile[]>([]);
  const [events, setEvents] = useState<EventsWithRelation[]>([]);
  const [filters, setFilters] = useQueryState("filters", searchParams.filters);
  const [filtersUi, setFiltersUi] = useState<Object | any>();
  const [sortBy, setSortBy] = useQueryState("sortBy", searchParams.sortBy);
  const [sortByUI, setSortByUI] = useState<string | any>();
  const [sortOrder, setSortOrder] = useQueryState(
    "sortOrder",
    searchParams.sortOrder
  );
  const [sortOrderUI, setSortOrderUI] = useState<string | any>();
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const [events, staffProfiles] = await Promise.all([
        getAllEvents(),
        getCachedStaffDiscordProfiles(),
      ]);

      setEvents(events);
      setStaffProfiles(staffProfiles);
    };

    fetchData();
    setFiltersUi(filters);
    setSortByUI(sortBy);
    setSortOrderUI(sortOrder);
  }, []);

  const eventsOptions = events.map((event) => {
    const eventOption: SelectValue = {
      value: event.id,
      label: event.name,
    };
    event.customRarity == ""
      ? (eventOption["icon"] = <Icons.star size={16} />)
      : (eventOption["avatarUrl"] =
          `https://cdn.discordapp.com/emojis/${event.customRarity}.webp`);

    return eventOption;
  });

  const handleFilterChange = (key: string, value: any) => {
    if (value.length === 0) {
      const { [key]: _, ...rest } = filtersUi;
      setFiltersUi(rest);
    } else {
      setFiltersUi((prev: any) => ({ ...prev, [key]: value }));
    }
  };

  return (
    <div className="container">
      <div className="space-x-2 space-y-4 border-b-4 border-dashed py-2 md:p-4">
        {sortBy && (
          <FilterButton
            name="Sorted By"
            filterVerb={toUpperCase(sortBy)}
            filterText={sortOrder === "asc" ? "ascending" : "descending"}
            removeItem={() => {
              if (sortBy == "createdAt" && sortOrder == "asc") return;
              setSortBy("createdAt");
              setSortOrder("asc");
              setSortByUI("createdAt");
              setSortOrderUI("asc");
              appliedFilterAction();
            }}
          />
        )}
        {Object.keys(IssueFilterSchema.shape).map((key) => {
          const item = key as ContainsFields | UserFields;
          let filterVerb = "";
          let filterText = "";

          if (containsFields.includes(item as ContainsFields)) {
            if (!filters?.[item] || filters?.[item] === "") return null;
            if (item === "rarity") {
              filterVerb = "contains";
              filterText = filters?.[item].join(", ");
            } else if (item === "eventId") {
              filterVerb = "contains";
              filterText = filters?.[item]
                .map((id) => events.find((event) => event.id === id)?.name)
                .filter((name) => name !== undefined)
                .join(", ");
            } else if (typeof filters?.[item] === "string") {
              filterVerb = "contains";
              filterText = filters?.[item] ?? "";
            }
          } else if (
            userFields.includes(item as UserFields) &&
            Array.isArray(filters?.[item]) &&
            filters?.[item].length > 0
          ) {
            filterVerb = "contains";
            filterText = filters?.[item]
              .map(
                (id) =>
                  staffProfiles.find((profile) => profile.id === id)?.username
              )
              .filter((name) => name !== undefined)
              .join(", ");
          } else {
            return null;
          }

          return (
            <FilterButton
              key={item}
              name={item}
              filterVerb={filterVerb}
              filterText={filterText}
              removeItem={() => {
                const { [item]: _, ...rest } = filters;
                setFilters(rest);
                setFiltersUi(rest);
                appliedFilterAction();
              }}
            />
          );
        })}
        <Button
          size="sm"
          variant="ghost"
          className="!mt-0.5"
          onClick={() => setFilterOpen((prev) => !prev)}
        >
          <Icons.filter size={16} />
          Add Filter
        </Button>
      </div>
      <Credenza open={filterOpen} onOpenChange={setFilterOpen}>
        <CredenzaContent>
          <CredenzaHeader>
            <CredenzaTitle>Filter Issues</CredenzaTitle>
            <CredenzaDescription>
              Filter issues based on the following criteria
            </CredenzaDescription>
          </CredenzaHeader>
          <CredenzaBody className="col-span-3 grid h-full content-start space-y-4">
            <ScrollArea className="max-h-80 md:!max-h-full">
              <div className="space-y-2">
                <Label htmlFor="sortBy">Issue Contains</Label>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {containsFields.map((key) => {
                    if (key == "eventId") return null;
                    if (key == "rarity") {
                      return (
                        <div className="md:col-span-2" key={key}>
                          <Label htmlFor={key}>{toUpperCase(key)}</Label>
                          <MultiSelect
                            description="Select Rarities"
                            options={rarityOptions}
                            defaultValue={
                              filtersUi?.rarity
                                ?.map((value: string) =>
                                  rarityOptions.find(
                                    (option) => option.value === value
                                  )
                                )
                                .filter(
                                  (option: undefined) => option !== undefined
                                ) ?? []
                            }
                            onValueChange={(option) => {
                              setFiltersUi((prev: any) => {
                                const currentRarity = prev?.rarity ?? [];
                                let rarity;

                                if (currentRarity.includes(option.value)) {
                                  rarity = currentRarity.filter(
                                    (value: any) => value !== option.value
                                  );
                                } else {
                                  rarity = [...currentRarity, option.value];
                                }

                                return { ...prev, rarity };
                              });
                            }}
                          />
                        </div>
                      );
                    } else
                      return (
                        <div className="space-y-2" key={key}>
                          <Label htmlFor={key}>{toUpperCase(key)}</Label>
                          <Input
                            id={key}
                            value={filtersUi?.[key] ?? ""}
                            onChange={(e) =>
                              handleFilterChange(key, e.target.value)
                            }
                            placeholder={`Issue Contains ${toUpperCase(key)}`}
                          />
                        </div>
                      );
                  })}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sortBy">Issue Filter</Label>
                {userFields.map((key) => (
                  <div className="space-y-2" key={key}>
                    <Label htmlFor={key}>{toUpperCase(key)}</Label>
                    <MultiSelect
                      description={`Select ${toUpperCase(key)}`}
                      options={staffProfiles.map((profile) => ({
                        value: profile.id,
                        label: profile.username,
                        avatarUrl: profile.avatar ?? "/avatar.png",
                      }))}
                      defaultValue={
                        filtersUi?.[key]
                          ?.map((value: any) => {
                            const profile = staffProfiles.find(
                              (profile) => profile.id === value
                            );
                            return profile
                              ? {
                                  value: profile.id,
                                  label: profile.username,
                                  avatarUrl: profile.avatar ?? "/avatar.png",
                                }
                              : undefined;
                          })
                          .filter((option: any) => option !== undefined) ?? []
                      }
                      onValueChange={(option) => {
                        setFiltersUi((prev: any) => {
                          const current = prev?.[key] ?? [];
                          let users;

                          if (current.includes(option.value)) {
                            users = current.filter(
                              (value: any) => value !== option.value
                            );
                          } else {
                            users = [...current, option.value];
                          }
                          return { ...prev, [key]: users };
                        });
                      }}
                    />
                  </div>
                ))}
                <Label>Events</Label>
                <MultiSelect
                  description={`Select Events`}
                  options={eventsOptions}
                  defaultValue={filters?.eventId
                    ?.map((value) =>
                      eventsOptions.find((option) => option.value === value)
                    )
                    .filter((option) => option !== undefined)}
                  onValueChange={(option) => {
                    setFiltersUi((prev: any) => {
                      const currentEvents = prev?.eventId ?? [];
                      let events;

                      if (currentEvents.includes(option.value)) {
                        events = currentEvents.filter(
                          (value: any) => value !== option.value
                        );
                      } else {
                        events = [...currentEvents, option.value];
                      }

                      return { ...prev, eventId: events };
                    });
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sortBy">Sort by</Label>
                <div className="flex space-x-2">
                  <Select
                    value={sortByUI as any}
                    onValueChange={(value) => setSortByUI(value as any)}
                  >
                    <SelectTrigger id="sortBy">
                      <SelectValue placeholder="Select sort field" />
                    </SelectTrigger>
                    <SelectContent>
                      {sortByFields.map((key: string) => (
                        <SelectItem value={key} key={key}>
                          {toUpperCase(key)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setSortOrderUI((prev: string) =>
                        prev === "asc" ? "desc" : "asc"
                      )
                    }
                  >
                    {sortOrderUI === "asc" ? "↑ Ascending" : "↓ Descending"}
                  </Button>
                </div>
              </div>
            </ScrollArea>
          </CredenzaBody>
          <CredenzaFooter>
            <Button variant="outline" onClick={() => setFilterOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setFilters(filtersUi);
                setSortBy(sortByUI);
                setSortOrder(sortOrderUI);
                setFilterOpen(false);
                appliedFilterAction();
              }}
            >
              Apply
            </Button>
          </CredenzaFooter>
        </CredenzaContent>
      </Credenza>
    </div>
  );
}

interface FilterButtonProps {
  name: string;
  filterVerb: string;
  filterText: string;
  removeItem: () => void;
}

function FilterButton({
  name,
  filterVerb,
  filterText,
  removeItem,
}: FilterButtonProps) {
  return (
    <Button variant="outline" size="sm">
      {toUpperCase(name)}
      <Separator orientation="vertical" className="mx-2 h-4" />
      <Badge variant="secondary" className="rounded-sm px-1 font-normal">
        {filterVerb}
      </Badge>
      <Separator orientation="vertical" className="mx-2 h-4" />
      <Badge variant="secondary" className="rounded-sm px-1 font-normal">
        {filterText}
      </Badge>
      <X size={20} className="pl-2" onClick={() => removeItem()} />
    </Button>
  );
}
