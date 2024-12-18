"use client";

import { useEffect, useState } from "react";
import { EventType, Staff } from "@prisma/client";

import {
  generateFrameCode,
  generateIssueCode,
  ItemsFormPropsValue,
  useDefaultItemsFormValues,
} from "@/config/items-add";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ItemsButtonControl from "./items-button-control";
import ItemsForm from "./items-form";

interface ItemsCarouselProps {
  eventReleaseDate: Date;
  staff: Staff;
  itemType: `${EventType}`;
}

export default function ItemsCarousel({
  eventReleaseDate,
  staff,
  itemType,
}: ItemsCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [defaultFormValues, setDefaultFormValues] =
    useDefaultItemsFormValues(itemType);

  const [issuesFormPropsValue, setIssuesFormPropsValue] = useState<
    ItemsFormPropsValue[]
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
      <ItemsButtonControl
        itemType={itemType}
        eventReleaseDate={eventReleaseDate}
        itmesFormPropsValue={issuesFormPropsValue as any}
        setItemsFormPropsValueAction={setIssuesFormPropsValue as any}
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
              <ItemsForm
                index={index}
                defaultValues={issuesForm}
                itemType={itemType}
                onFormChangeAction={(index, value: any) =>
                  setIssuesFormPropsValue((prev) => {
                    const newData = [...prev];
                    if (!value.codeDuplicate) {
                      if (itemType === "issues") {
                        value.code = generateIssueCode(
                          value.name,
                          value.act,
                          value.group,
                          value.rarity
                        );
                      } else {
                        value.code = generateFrameCode(
                          value.name,
                          value.rarity
                        );
                      }
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
