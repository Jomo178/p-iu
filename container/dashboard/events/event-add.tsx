"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { createEvent } from "@/server/events/_action";
import { zodResolver } from "@hookform/resolvers/zod";
import { Staff } from "@prisma/client";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { EventsWithRelation } from "@/types/prisma";
import { hasPermission } from "@/lib/utils";
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

interface EventAddProps {
  setEventStateAction: Dispatch<SetStateAction<EventsWithRelation[]>>;
  currentStaff: Staff;
}

export default function EventAdd({
  setEventStateAction,
  currentStaff,
}: EventAddProps) {
  const [openDialog, setOpenDialog] = useState(false);

  const [loading, setLoading] = useState(false);

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
      <Button
        onClick={() => setOpenDialog(true)}
        variant="outline"
        disabled={hasPermission(currentStaff, "create:event")}
      >
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
    </>
  );
}
