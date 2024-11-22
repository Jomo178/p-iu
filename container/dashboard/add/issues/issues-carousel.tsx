"use client";

import { use, useEffect, useId, useState } from "react";
import { useDefaultIssueFormValues } from "@/model/client";
import { IssuesFormPropsValue } from "@/model/issues-schema";
import { Staff } from "@prisma/client";

import { generateIssueCode } from "@/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import IssuesButtonControl from "./issues-button-control";
import IssuesForm from "./issues-form";

interface IssuesCarouselProps {
  eventReleaseDate: Date;
  staff: Staff;
}

export default function IssuesCarousel({
  eventReleaseDate,
  staff,
}: IssuesCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [defaultFormValues, setDefaultFormValues] = useDefaultIssueFormValues();

  const [issuesFormPropsValue, setIssuesFormPropsValue] = useState<
    IssuesFormPropsValue[]
  >([{ ...defaultFormValues, errors: [], releaseDate: eventReleaseDate }]);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <IssuesButtonControl
        eventReleaseDate={eventReleaseDate}
        issuesFormPropsValue={issuesFormPropsValue}
        setIssuesFormPropsValueAction={setIssuesFormPropsValue}
        carouselApi={api}
        carouselCount={count}
        setCarouselCountAction={setCount}
        setCarouselCurrentIndexAction={setCurrent}
        staff={staff}
      />
      <Carousel setApi={setApi} className="w-full !max-w-xs sm:!max-w-sm">
        <CarouselContent>
          {issuesFormPropsValue?.map((issuesForm, index) => (
            <CarouselItem key={issuesForm.id}>
              <IssuesForm
                index={index}
                defaultValues={issuesForm}
                onFormChangeAction={(index, value: IssuesFormPropsValue) =>
                  setIssuesFormPropsValue((prev) => {
                    const newData = [...prev];
                    if (!value.codeDuplicate) {
                      value.code = generateIssueCode(
                        value.name,
                        value.act,
                        value.group,
                        value.rarity
                      );
                    }
                    newData[index] = value;
                    return newData;
                  })
                }
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Issue {current} of {count}
      </div>
    </>
  );
}
