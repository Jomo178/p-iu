"use client";

import { useState } from "react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretSortIcon,
} from "@radix-ui/react-icons";
import { X } from "lucide-react";

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
import { DateRangePicker } from "@/components/ui/date-range-picker";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/Icons";
import { MultiSelect } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";

type FilterKeys = "name" | "act" | "group" | "rarity" | "createdAt";
const stringInputs = ["name", "act", "group"] as FilterKeys[];
type FilterConfiguration = Partial<Record<FilterKeys, any>>;
type FilterOrder = Partial<Record<FilterKeys, "asc" | "desc">>;

interface FilterIssuesProps {
  setFilterConfigurationAction: (
    filter: FilterConfiguration,
    order: FilterOrder
  ) => void;
}

export default function FilterIssues({
  setFilterConfigurationAction,
}: FilterIssuesProps) {
  const [filterOpen, setFilterOpen] = useState(false);
  const defaultFilter = {
    name: "",
    rarity: [] as number[],
    act: "",
    group: "",
    createdAt: { start: null, end: null } as {
      start: Date | null;
      end: Date | null;
    },
  };

  const [filter, setFilter] = useState<Record<FilterKeys, any>>(defaultFilter);
  const [uiFilter, setUiFilter] =
    useState<Record<FilterKeys, any>>(defaultFilter);

  let rarityOptions = Array.from({ length: 5 }).map((_, index) => ({
    label: `Rarity ${index + 1}`,
    icon: Array.from({ length: index + 1 }).map((_, starIndex) => (
      <Icons.star key={starIndex} size={16} />
    )),
    value: (index + 1).toString(),
  }));

  async function configureIssueFilters() {
    setFilter(uiFilter);
    const prismaFilter: Partial<Record<FilterKeys, any>> = {
      rarity: uiFilter.rarity.length > 0 ? { in: uiFilter.rarity } : undefined,
      createdAt:
        uiFilter.createdAt.start && uiFilter.createdAt.end
          ? {
              gte: uiFilter.createdAt.start,
              lte: uiFilter.createdAt.end,
            }
          : undefined,
    };

    const prismaOrderBy: FilterOrder = stringInputs.reduce((acc, field) => {
      if (uiFilter[field]) {
        acc[field] = uiFilter[field];
      }
      return acc;
    }, {} as FilterOrder);

    setFilterConfigurationAction(prismaFilter, prismaOrderBy);
    setFilterOpen(false);
  }

  return (
    <div className="container">
      <div className="space-x-1 space-y-4 border-b-4 border-dashed py-2 md:p-4">
        {Object.keys(filter).map((key) => {
          let filterVerb = "";
          let filterText = "";

          switch (key) {
            case "rarity":
              if (filter[key as FilterKeys].length === 0) return null;
              filterVerb = "is";
              filterText = filter[key as FilterKeys].join(", ");
              break;
            case "createdAt":
              if (
                !filter[key as FilterKeys].start &&
                !filter[key as FilterKeys].end
              )
                return null;
              filterVerb = "is between";
              filterText = `${
                filter[key as FilterKeys].start?.toLocaleDateString() ?? ""
              } - ${filter[key as FilterKeys].end?.toLocaleDateString() ?? ""}`;
              break;

            case "name":
            case "act":
            case "group":
              if (filter[key as FilterKeys] === "") return null;
              filterVerb = "sorted in";
              filterText =
                filter[key as FilterKeys]?.toString() == "asc"
                  ? "ascending"
                  : "descending";
              filterText += " order";
          }

          return (
            <Button variant="outline" size="sm" key={key}>
              {toUpperCase(key)}
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal"
              >
                {filterVerb}
              </Badge>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal"
              >
                {filterText}
              </Badge>
              <X
                size={20}
                className="pl-2"
                onClick={() => {
                  setUiFilter((prev) => {
                    return {
                      ...prev,
                      [key as FilterKeys]: defaultFilter[key as FilterKeys],
                    };
                  });
                  configureIssueFilters();
                }}
              />
            </Button>
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
            <div className="flex flex-col justify-center gap-2">
              <Typography variant="large">Sort by</Typography>
              <div className="flex justify-center gap-8 lg:ml-3 lg:justify-normal">
                {stringInputs.map((input) => (
                  <StringOrder
                    key={input}
                    title={input}
                    defaultOrder={uiFilter[input]}
                    onValueChange={(value) =>
                      setUiFilter((prev) => {
                        stringInputs.forEach((input) => {
                          if (input !== value) {
                            prev[input] = "";
                          }
                        });
                        return {
                          ...prev,
                          [input as FilterKeys]: value,
                        };
                      })
                    }
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="large">Rarity</Typography>
              <MultiSelect
                description="Select Rarities"
                options={rarityOptions}
                defaultValue={rarityOptions.filter((option) =>
                  uiFilter["rarity"].includes(Number(option.value))
                )}
                onValueChange={(option) => {
                  if (uiFilter["rarity"].includes(Number(option.value))) {
                    setUiFilter({
                      ...uiFilter,
                      rarity: uiFilter["rarity"].filter(
                        (value: number) => value !== Number(option.value)
                      ),
                    });
                  } else {
                    setUiFilter({
                      ...uiFilter,
                      rarity: [...uiFilter["rarity"], Number(option.value)],
                    });
                  }
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="large">Created At</Typography>
              <DateRangePicker
                className="border-dashed"
                align="end"
                showCompare={false}
                onUpdate={(values) => {
                  setUiFilter({
                    ...uiFilter,
                    createdAt: {
                      start: values.range.from,
                      end: values.range.to,
                    },
                  });
                }}
              />
            </div>
          </CredenzaBody>
          <CredenzaFooter>
            <Button variant="outline" onClick={() => setFilterOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => configureIssueFilters()}>Apply</Button>
          </CredenzaFooter>
        </CredenzaContent>
      </Credenza>
    </div>
  );
}

interface StringOrderProps extends React.HTMLAttributes<HTMLDivElement> {
  onValueChange: (value: string) => void;
  defaultOrder?: string;
  title: string;
}

function StringOrder({
  title,
  onValueChange,
  defaultOrder,
  className,
}: StringOrderProps) {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 border border-dashed data-[state=open]:bg-accent"
          >
            <span>{toUpperCase(title)}</span>
            {defaultOrder === "asc" ? (
              <ArrowUpIcon className="ml-2 h-4 w-4" />
            ) : defaultOrder === "desc" ? (
              <ArrowDownIcon className="ml-2 h-4 w-4" />
            ) : (
              <CaretSortIcon className="ml-2 h-4 w-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onSelect={() => onValueChange("asc")}>
            <ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Ascending
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => onValueChange("desc")}>
            <ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Descending
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => onValueChange("")}>
            <CaretSortIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            None
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
