"use client";

import { useEffect, useState } from "react";
import { Staff } from "@prisma/client";

import { ItemSchemaValue, ItemsNameType } from "@/types/items";
import {
  generateFrameCode,
  generateIssueCode,
  itemsSchema,
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

interface ItemsCarouselProps<T extends ItemsNameType> {
  itemNameType: T;
  currentStaff: Staff;
  eventReleaseDate: Date;
}

export default function ItemsCarousel<T extends ItemsNameType>({
  itemNameType,
  currentStaff,
  eventReleaseDate,
}: ItemsCarouselProps<T>) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [defaultFormValues, setDefaultFormValues] =
    useDefaultItemsFormValues(itemNameType);
  const [itemsFormPropsValue, setItemsFormPropsValue] = useState<
    ItemSchemaValue<T>[]
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
        itemNameType={itemNameType}
        eventReleaseDate={eventReleaseDate}
        itmesFormPropsValue={itemsFormPropsValue}
        setItemsFormPropsValueAction={setItemsFormPropsValue}
        carouselApi={api}
        carouselCount={count}
        setCarouselCountAction={setCount}
        setCarouselCurrentIndexAction={setCurrent}
        currentStaff={currentStaff}
      />
      <Carousel setApi={setApi} className="w-full !max-w-xs sm:!max-w-sm">
        <CarouselContent>
          {itemsFormPropsValue?.map((itemsForm, index) => (
            <CarouselItem key={itemsForm.id}>
              <ItemsForm
                itemNameType={itemNameType}
                index={index}
                defaultValues={itemsForm}
                onFormChangeAction={(index, value) =>
                  setItemsFormPropsValue((prev) => {
                    const newData = [...prev];
                    if ("codeDuplicate" in value && !value.codeDuplicate) {
                      if (itemNameType === "issues" && "act" in value) {
                        value.code = generateIssueCode(
                          value.name,
                          value.act,
                          value.group,
                          value.rarity
                        );
                      } else if (
                        itemNameType === "frames" &&
                        typeof value.rarity === "string"
                      ) {
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
        {itemNameType} {current} of {count}
      </div>
    </>
  );
}
