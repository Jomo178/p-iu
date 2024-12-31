"use client";

import { useState } from "react";
import { PrismaEventTypes } from "@prisma/client";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { toUpperCase } from "@/lib/utils";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MultiSelect } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export const formSchema = z.object({
  name: z.string().min(1, "Event name is required."),
  start: z.date(),
  end: z.date(),
  type: z
    .array(z.nativeEnum(PrismaEventTypes))
    .min(1, "Event type is required."),
  customRarity: z.string(),
});

interface EventFormProps {
  form: UseFormReturn<
    {
      name: string;
      start: Date;
      end: Date;
      type: PrismaEventTypes[];
      customRarity: string;
    },
    any,
    undefined
  >;
}

export function EventForm({ form }: EventFormProps) {
  const [wantCustomRarity, setWantCustomRarity] = useState(
    form.getValues("customRarity") !== ""
  );

  return (
    <Form {...form}>
      <form className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Name</FormLabel>
              <FormControl>
                <Input placeholder="Event Name" type="text" {...field} />
              </FormControl>
              <FormDescription>
                The name of the event. This should be unique.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="start"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Time</FormLabel>
              <FormControl>
                <DateRangePicker
                  align="end"
                  className="w-full"
                  showCompare={false}
                  onUpdate={(values) => {
                    const range = values.range;
                    form.setValue("start", range.from);
                    form.setValue("end", range.to || range.from);
                  }}
                  initialDateFrom={form.getValues("start")}
                  initialDateTo={form.getValues("end")}
                  disabledRange={{ before: new Date() }}
                />
              </FormControl>
              <FormDescription>
                The date and time the event starts and ends.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Type</FormLabel>
              <FormControl>
                <MultiSelect
                  options={Object.values(PrismaEventTypes).map((value) => ({
                    label: toUpperCase(value),
                    value,
                    icon: null,
                  }))}
                  description="Select the type of the event."
                  defaultValue={field.value.map((value) => ({
                    label: toUpperCase(value),
                    value,
                    icon: null,
                  }))}
                  onValueChange={(value) => {
                    const selectedValue = value.value as PrismaEventTypes;
                    const doesValueExist = form
                      .getValues("type")
                      .includes(selectedValue);
                    form.setValue(
                      "type",
                      doesValueExist
                        ? form
                            .getValues("type")
                            .filter((v) => v !== selectedValue)
                        : [...form.getValues("type"), selectedValue]
                    );
                  }}
                />
              </FormControl>
              <FormDescription>The type of the event.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="customRarity"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-4">
                <p> Custom Rarity</p>
                <Switch
                  id="custom-icon-switch"
                  checked={wantCustomRarity}
                  onCheckedChange={setWantCustomRarity}
                />
              </FormLabel>
              <FormControl>
                {wantCustomRarity && (
                  <div className="space-y-2">
                    <Input
                      id="icon-id"
                      type="text"
                      placeholder="Enter Rarity Discord ID"
                      {...field}
                    />
                  </div>
                )}
              </FormControl>
              <FormDescription>
                {wantCustomRarity
                  ? "You've chosen to use a custom icon."
                  : "You're using the default icon."}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
