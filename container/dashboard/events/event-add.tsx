"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { createEvent } from "@/server/events/_action";
import { zodResolver } from "@hookform/resolvers/zod";
import { EventType } from "@prisma/client";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { EventsWithRelation } from "@/types/prisma";
import { toUpperCase } from "@/lib/utils";
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
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MultiSelect } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

interface EventAddProps {
  setEventStateAction: Dispatch<SetStateAction<EventsWithRelation[]>>;
}

export default function EventAdd({ setEventStateAction }: EventAddProps) {
  const [openDialog, setOpenDialog] = useState(false);
  const [wantCustomRarity, setWantCustomRarity] = useState(false);
  const [loading, setLoading] = useState(false);
  const formSchema = z.object({
    name: z.string().min(1, "Event name is required."),
    start: z.date(),
    end: z.date(),
    type: z.array(z.nativeEnum(EventType)).min(1, "Event type is required."),
    customRarity: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      start: new Date(),
      end: new Date(),
      customRarity: "",
      type: [],
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (loading) return;
    setLoading(true);
    toast.promise(createEvent(data), {
      loading: "Loading...",
      success: (response) => {
        setLoading(false);
        if (!response.data) return response.message;
        setEventStateAction((prev) => [
          ...prev,
          response.data as EventsWithRelation,
        ]);
        form.reset();
        setOpenDialog(false);
        return response.message;
      },
      error: "Something went wrong. Please try again.",
    });
  };

  return (
    <>
      <Button onClick={() => setOpenDialog(true)} variant="outline">
        Add New Event
      </Button>
      <Credenza open={openDialog} onOpenChange={setOpenDialog}>
        <CredenzaContent className="md:max-w-md">
          <CredenzaHeader>
            <CredenzaTitle>Create a new Event</CredenzaTitle>
            <CredenzaDescription>
              Fill in the form below to create a new event
            </CredenzaDescription>
          </CredenzaHeader>
          <CredenzaBody>
            <Form {...form}>
              <form className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Event Name"
                          type="text"
                          {...field}
                        />
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
                          // disabledRange={{ before: new Date() }}
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
                          options={Object.values(EventType).map((value) => ({
                            label: toUpperCase(value),
                            value,
                            icon: null,
                          }))}
                          description="Select the type of the event."
                          onValueChange={(value) => {
                            const selectedValue = value.value as EventType;
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
          </CredenzaBody>
          <CredenzaFooter className="flex flex-row justify-center">
            <Button
              type="submit"
              onClick={form.handleSubmit(onSubmit)}
              loading={loading}
            >
              Save changes
            </Button>
          </CredenzaFooter>
        </CredenzaContent>
      </Credenza>
    </>
  );
}
