"use client";

import { useEffect, useState, useTransition } from "react";
import {
  IssueFilterPropsValue,
  IssueFilterSchema,
} from "@/model/issues-schema";
import { getAllEvents } from "@/server/events/_action";
import { getCachedStaffDiscordProfiles } from "@/server/staff/_action";
import { Staff } from "@prisma/client";
import { Filter, X } from "lucide-react";
import {
  createParser,
  parseAsJson,
  parseAsStringLiteral,
  useQueryState,
} from "nuqs";

import { UserProfile } from "@/types/next-auth";
import { EventsWithRelation } from "@/types/prisma";
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
import {
  MultiSelect,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

import { searchParams } from "./searchParams";

const containsFields = [
  "name",
  "act",
  "group",
  "code",
  "rarity",
  "eventId",
] as const;
type ContainsFields = (typeof containsFields)[number];
const dateFields = ["createdAt", "updatedAt", "approvedAt"] as const;
const userFields = [
  "createdBy",
  "approvedBy",
  "rejectedBy",
  "resubmittedBy",
] as const;
type UserFields = (typeof userFields)[number];
const sortByFields = [...containsFields, ...dateFields] as const;
const sortOrderFields = ["asc", "desc"] as const;

let rarityOptions = Array.from({ length: 5 }).map((_, index) => ({
  label: `Rarity ${index + 1}`,
  icon: Array.from({ length: index + 1 }).map((_, starIndex) => (
    <Icons.star key={starIndex} size={16} />
  )),
  value: (index + 1).toString(),
}));

interface ItemsFilterMenuProps {
  setFilterConfigurationAction: (filter: any, order: any) => void;
}

export default function ItemsFilterMenu({
  setFilterConfigurationAction,
}: ItemsFilterMenuProps) {
  const [staffProfiles, setStaffProfiles] = useState<UserProfile[]>([]);
  const [events, setEvents] = useState<EventsWithRelation[]>([]);
  const [filters, setFilters] = useQueryState("filters", searchParams.filters);
  const [filtersUi, setFiltersUi] = useState<Object | any>();
  const [isLoading, startTransition] = useTransition();
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    getCachedStaffDiscordProfiles().then(setStaffProfiles);
    getAllEvents().then(setEvents);
    setFiltersUi(filters);
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

  const [sortBy, setSortBy] = useQueryState(
    "sortBy",
    parseAsStringLiteral(sortByFields)
      .withDefault("createdAt")
      .withOptions({ startTransition, shallow: false })
  );
  const [sortOrder, setSortOrder] = useQueryState(
    "sortOrder",
    parseAsStringLiteral(sortOrderFields).withDefault("asc")
  );
  const handleFilterChange = (key: string, value: any) => {
    if (value.length === 0) {
      const { [key]: _, ...rest } = filtersUi;
      setFiltersUi(rest);
    } else {
      setFiltersUi((prev: any) => ({ ...prev, [key]: value }));
    }
  };

  useEffect(() => {
    setFilterConfigurationAction({}, { [sortBy]: sortOrder });
  }, [filters, sortBy, sortOrder]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="space-x-1 space-y-4 border-b-4 border-dashed py-2 md:p-4">
        {sortOrder && (
          <FilterButton
            name="Sorted By"
            filterVerb={sortBy}
            filterText={sortOrder === "asc" ? "Ascending" : "Descending"}
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
            />
          );
        })}
        <Button
          size="sm"
          variant="ghost"
          className="!mt-0"
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
          <CredenzaBody className="col-span-3 grid content-start space-y-4">
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
                            let rarity = [];
                            if (filtersUi?.rarity?.includes(option.value)) {
                              rarity = filtersUi.rarity.filter(
                                (value: any) => value !== option.value
                              );
                            } else {
                              rarity = [
                                ...(filtersUi?.rarity ?? []),
                                option.value,
                              ];
                            }
                            setFiltersUi((prev: any) => ({ ...prev, rarity }));
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
                      let items = [];
                      if (filtersUi?.[key]?.includes(option.value)) {
                        items = filtersUi[key].filter(
                          (value: any) => value !== option.value
                        );
                      } else {
                        items = [...(filtersUi?.[key] ?? []), option.value];
                      }
                      setFiltersUi((prev: any) => ({ ...prev, [key]: items }));
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
                  let events = [];
                  if (filters?.eventId?.includes(option.value)) {
                    events = filters.eventId.filter(
                      (value) => value !== option.value
                    );
                  } else {
                    events = [...(filters?.eventId ?? []), option.value];
                  }
                  setFilters((prev) => ({ ...prev, eventId: events }));
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sortBy">Sort by</Label>
              <div className="flex space-x-2">
                <Select
                  value={sortBy as any}
                  onValueChange={(value) => setSortBy(value as any)}
                >
                  <SelectTrigger id="sortBy">
                    <SelectValue placeholder="Select sort field" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortByFields.map((key) => (
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
                    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
                  }
                >
                  {sortOrder === "asc" ? "↑ Ascending" : "↓ Descending"}
                </Button>
              </div>
            </div>
          </CredenzaBody>
          <CredenzaFooter>
            <Button variant="outline" onClick={() => setFilterOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setFilters(filtersUi);
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
}

function FilterButton({ name, filterVerb, filterText }: FilterButtonProps) {
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
      <X size={20} className="pl-2" />
    </Button>
  );
}

export function constructWhereConditions(
  filters: IssueFilterPropsValue | null = {},
  staff: { id: string; discordId: string }[] = []
) {
  if (!filters) return {};

  const getIdsByDiscordIds = (discordIds: string[]) =>
    staff
      .filter((staff) => discordIds.includes(staff.discordId))
      .map((staff) => staff.id);

  const where = {
    ...(filters.createdBy
      ? { createdById: { in: getIdsByDiscordIds(filters.createdBy) } }
      : {}),
    ...(filters.rarity ? { rarity: { in: filters.rarity } } : {}),
    ...(filters.eventId
      ? { eventId: { in: getIdsByDiscordIds(filters.eventId) } }
      : {}),
    ...(filters.approvedBy
      ? { approvedById: { in: getIdsByDiscordIds(filters.approvedBy) } }
      : {}),
    ...(filters.rejectedBy || filters.resubmittedBy
      ? {
          rejections: {
            some: {
              ...(filters.rejectedBy
                ? {
                    rejectedById: {
                      in: getIdsByDiscordIds(filters.rejectedBy),
                    },
                  }
                : {}),
              ...(filters.resubmittedBy
                ? {
                    resubmittedById: {
                      in: getIdsByDiscordIds(filters.resubmittedBy),
                    },
                  }
                : {}),
            },
          },
        }
      : {}),
  };

  const {
    approvedBy,
    rejectedBy,
    resubmittedBy,
    createdBy,
    rarity,
    eventId,
    ...remainingProps
  } = filters;

  return { ...remainingProps, ...where };
}
