"use client";

import { useEffect, useState } from "react";
import { useDefaultFrameFormValues } from "@/model/client";
import { FramesFormPropsValue } from "@/model/frames-schema";
import { Staff } from "@prisma/client";

import { generateFrameCode, generateIssueCode } from "@/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import FramesButtonControl from "./frames-button-control";
import FramesForm from "./frames-form";

interface FramesCarouselProps {
  eventReleaseDate: Date;
  staff: Staff;
}

export default function FramesCarousel({
  eventReleaseDate,
  staff,
}: FramesCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [defaultFormValues, setDefaultFormValues] = useDefaultFrameFormValues();

  const [framesFormPropsValue, setFramesFormPropsValue] = useState<
    FramesFormPropsValue[]
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
      <FramesButtonControl
        eventReleaseDate={eventReleaseDate}
        framesFormPropsValue={framesFormPropsValue}
        setFramesFormPropsValueAction={setFramesFormPropsValue}
        carouselApi={api}
        carouselCount={count}
        setCarouselCountAction={setCount}
        setCarouselCurrentIndexAction={setCurrent}
        staff={staff}
      />
      <Carousel setApi={setApi} className="w-full !max-w-xs sm:!max-w-sm">
        <CarouselContent>
          {framesFormPropsValue?.map((framesForm, index) => (
            <CarouselItem key={framesForm.id}>
              <FramesForm
                index={index}
                defaultValues={framesForm}
                onFormChangeAction={(index, value: FramesFormPropsValue) =>
                  setFramesFormPropsValue((prev) => {
                    const newData = [...prev];
                    if (!value.codeDuplicate) {
                      value.code = generateFrameCode(value.name, value.rarity);
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
        Frame {current} of {count}
      </div>
    </>
  );
}
