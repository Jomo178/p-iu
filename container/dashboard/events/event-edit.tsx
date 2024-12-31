"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { editEvent } from "@/server/events/_action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { EventsWithRelation } from "@/types/items-relation";
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

import { EventForm, formSchema } from "./event-form";

interface EventEditProps {
  event: EventsWithRelation;
  setEventStateAction: Dispatch<SetStateAction<EventsWithRelation[]>>;
  openDialog: boolean;
  setOpenDialogAction: Dispatch<SetStateAction<boolean>>;
}

export default function EventEdit({
  event,
  setEventStateAction,
  openDialog,
  setOpenDialogAction,
}: EventEditProps) {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: event.name,
      start: event.start,
      end: event.end,
      customRarity: event.customRarity ?? "",
      type: event.type,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (loading) return;
    setLoading(true);
    toast.promise(editEvent(event.id, data), {
      loading: "Loading...",
      success: (response) => {
        setLoading(false);
        setEventStateAction((prev) =>
          prev.map((item) => (item.id === event.id ? response.data : item))
        );
        setOpenDialogAction(false);
        return response.message;
      },
      error: "Something went wrong. Please try again.",
    });
  };

  return (
    <Credenza open={openDialog} onOpenChange={setOpenDialogAction}>
      <CredenzaContent className="md:max-w-md">
        <CredenzaHeader>
          <CredenzaTitle>Edit an Event</CredenzaTitle>
          <CredenzaDescription>
            Edit the details of an event.
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody>
          <EventForm form={form} />
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
  );
}
