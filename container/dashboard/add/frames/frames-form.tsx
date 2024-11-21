"use client";

import { useEffect } from "react";
import {
  FramesFormPropsValue,
  FramesFormPropsValueKeys,
  framesSchema,
} from "@/model/frames-schema";
import {
  IssuesFormPropsValue,
  IssuesFormPropsValueKeys,
  issuesSchema,
} from "@/model/issues-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { DatetimePicker } from "@/components/ui/date-time-picker";
import { FileUploader } from "@/components/ui/file-uploader-primitive";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Icons } from "@/components/ui/icons";
import { FloatingLabelInput, Input, InputField } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Typography } from "@/components/ui/typography";

interface FramesFormProps<T> {
  index: number;
  defaultValues: T;
  onFormChangeAction: (index: number, value: T) => void;
  hiddenFields?: FramesFormPropsValueKeys[];
}

export default function FramesForm({
  index,
  defaultValues,
  onFormChangeAction,
  hiddenFields = [],
}: FramesFormProps<FramesFormPropsValue>) {
  const form = useForm<FramesFormPropsValue>({
    resolver: zodResolver(framesSchema),
    defaultValues: { ...defaultValues },
  });

  useEffect(() => {
    if (defaultValues.code) {
      form.setValue(
        "code",
        defaultValues.code.length > 1
          ? defaultValues.code
          : isNaN(parseInt(defaultValues.code))
            ? defaultValues.code
            : ""
      );
    }

    if (defaultValues.codeDuplicate)
      form.setValue("codeDuplicate", defaultValues.codeDuplicate);
  }, [defaultValues]);

  const isFieldHidden = (fieldName: FramesFormPropsValueKeys) =>
    hiddenFields.includes(fieldName);

  const getFieldError = (fieldName: FramesFormPropsValueKeys) =>
    defaultValues.errors?.find((error) => error?.path === fieldName)?.message ??
    "";

  return (
    <Form {...form}>
      <form
        onChange={() => onFormChangeAction(index, form.getValues())}
        className="p-4"
      >
        <div className="ml-auto mr-auto h-full max-w-fit">
          <div className="flex h-full w-72 flex-col items-center gap-6">
            {!isFieldHidden("name") && (
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Frame General Information</FormLabel>
                    <FormControl>
                      <FloatingLabelInput
                        {...field}
                        id="name"
                        label="Frame Name"
                      />
                    </FormControl>
                    <FormMessage>{getFieldError("name")}</FormMessage>
                  </FormItem>
                )}
              />
            )}

            {!isFieldHidden("rarity") && (
              <FormField
                control={form.control}
                name="rarity"
                render={({ field, fieldState }) => (
                  <FormItem className="w-full">
                    <FormLabel>Frame Rarity</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(
                          value: "Common" | "Rare" | "Special"
                        ) => {
                          form.setValue("rarity", value);
                        }}
                        value={field.value.toString()}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select the Card Rarity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Frame Rarity</SelectLabel>
                            <SelectItem value="Common">Common</SelectItem>
                            <SelectItem value="Rare">Rare</SelectItem>
                            <SelectItem value="Special">Special</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage>{getFieldError("rarity")}</FormMessage>
                  </FormItem>
                )}
              />
            )}
            {!isFieldHidden("releaseDate") && (
              <>
                <Separator className="my-1" />
                <FormField
                  control={form.control}
                  name="releaseDate"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Release Date</FormLabel>
                      <FormControl>
                        <DatetimePicker
                          disabled
                          value={field.value}
                          action={() => {}}
                        />
                      </FormControl>
                      <FormMessage>{getFieldError("releaseDate")}</FormMessage>
                    </FormItem>
                  )}
                />
              </>
            )}
            {/* TODO: Change the code detail */}
            {!isFieldHidden("code") && (
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="flex justify-between">
                      <div>
                        Frame Code
                        <Typography variant="muted" className="text-xs">
                          Generated by default.
                        </Typography>
                      </div>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger disabled className="cursor-pointer">
                            <Icons.info size={16} />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Code is generated as follows:</p>
                            <ul className="ml-4 list-disc">
                              <li>First and Last letters of Name</li>
                              <li>First two letters of Act (no spaces)</li>
                              <li>First two letters of Group (no spaces)</li>
                              <li>Rarity number</li>
                            </ul>
                            <p>
                              <code>
                                Name: IU, Act: Last Fantasy, Group: Soloist,
                                Rarity: 1
                              </code>
                            </p>
                            <p>
                              <code>Code: IULASO1</code>
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </FormLabel>
                    <FormControl>
                      <FloatingLabelInput
                        {...field}
                        id="code"
                        label="Frame Code"
                        disabled={!defaultValues.codeDuplicate}
                      />
                    </FormControl>
                    <FormMessage>{getFieldError("code")}</FormMessage>
                  </FormItem>
                )}
              />
            )}
            {!isFieldHidden("image") && (
              <>
                <Separator className="my-1" />
                <FormField
                  control={form.control}
                  name="image"
                  render={() => (
                    <FormItem className="w-full">
                      <FormLabel>Frame Image</FormLabel>
                      <FormControl>
                        <FileUploader
                          value={
                            form.getValues().image?.name &&
                            form.getValues().image.name !== "filename"
                              ? [form.getValues().image]
                              : []
                          }
                          previewHeight={150}
                          previewWidth={150}
                          onValueChange={(value) => {
                            form.setValue("image", value[0]);
                            onFormChangeAction(index, form.getValues());
                          }}
                        />
                      </FormControl>
                      <FormMessage>{getFieldError("image")}</FormMessage>
                    </FormItem>
                  )}
                />
              </>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
}
