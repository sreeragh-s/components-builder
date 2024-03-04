"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Slider } from "@components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useForm } from "react-hook-form";

const propertiesSchema = z.object({
  heading: z.string(),
  description: z.string(),
  image: z.string(),
  headingspan: z.string().optional(),
  afterheadingspan: z.string().optional(),
  alt: z.string().optional(),
  id: z.string().optional(),
  buttons: z
    .array(
      z.object({
        name: z.string(),
        url: z.string(),
      })
    )
    .default([])
    .optional(),
});

export function HeadingInput() {
  const [heading, setHeading] = useState("H3");

  console.log(heading);

  return (
    <ToggleGroup
      className="mt-2 flex justify-around"
      variant={"outline"}
      value={heading}
      onValueChange={(value) => {
        setHeading(value);
      }}
      type="single"
    >
      <ToggleGroupItem value="H1" aria-label="Toggle first">
        H1
      </ToggleGroupItem>
      <ToggleGroupItem value="H2" aria-label="Toggle second">
        H2
      </ToggleGroupItem>
      <ToggleGroupItem value="H3" aria-label="Toggle third">
        H3
      </ToggleGroupItem>
      <ToggleGroupItem value="H4" aria-label="Toggle fourth">
        H4
      </ToggleGroupItem>
      <ToggleGroupItem value="H5" aria-label="Toggle fifth">
        H5
      </ToggleGroupItem>
      <ToggleGroupItem value="H6" aria-label="Toggle six">
        H6
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export default function Style() {
  const form = useForm();

  return (
    <Form {...form}>
      <form action="">
        <FormField
          control={form.control}
          name="heading-size"
          render={() => (
            <FormItem className="my-5">
              <FormLabel className="text-lg">Heading</FormLabel>
              <FormControl>
                <HeadingInput />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="paragraph-font-size"
          render={() => (
            <FormItem className="my-5">
              <FormLabel className="text-lg">Subtitle</FormLabel>
              <FormControl>
                <HeadingInput />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="font-family"
          render={() => (
            <FormItem className="my-5">
              <FormLabel className="text-lg">Font</FormLabel>
              <FormControl>
                <HeadingInput />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
