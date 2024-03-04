import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { Rubik } from "next/font/google";
import { twMerge } from "tailwind-merge";

const rubik = Rubik({
  fallback: ["Helvetica", "Arial", "sans-serif"],
  display: "swap",
  subsets: ["latin"],
});

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

type propertiesSchemaType = z.infer<typeof propertiesSchema>;

// type propertiesSchemaType = {
//   heading: string;
//   description: string;
//   image: string;
//   headingspan: string;
//   afterheadingspan: string;
//   id: string;
//   alt: string;
//   buttons: ButtonType[];
// };

// type ButtonType = {
//   name: string;
//   url: string;
// };

interface ContentProps {
  formData: propertiesSchemaType; // Receive formData from props
  updateFormData: (newFormData: propertiesSchemaType) => void; // Receive updateFormData function from props
}

export function Content({ formData, updateFormData }: ContentProps) {
  const form = useForm<propertiesSchemaType>({
    resolver: zodResolver(propertiesSchema),
    mode: "onBlur",
    defaultValues: formData, // Set default values from props
  });

  function applyChanges(values: propertiesSchemaType) {
    updateFormData(values); // Call updateFormData function from props with updated values
  }

  return (
    <Form {...form}>
      <form
        className={twMerge("space-y-3 mt-5", rubik.className)}
        onBlur={form.handleSubmit(applyChanges)}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormField
          control={form.control}
          name="heading"
          render={({ field }) => (
            <FormItem>
              <div className="space-y-0.5"></div>
              <FormLabel className="text-base">Heading</FormLabel>
              <FormControl>
                {/* <Tiptap onBlur={field.onChange} value={field.value}  /> */}
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.currentTarget.blur();
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <div className="space-y-0.5"></div>
              <FormLabel>Description</FormLabel>
              <FormControl>
                {/*      
               <Tiptap onBlur={field.onChange} value={field.value}  /> */}
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.currentTarget.blur();
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Separator />

        <FormField
          control={form.control}
          name="buttons"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel>Buttons</FormLabel>
                <Button
                  variant={"light"}
                  className="gap-2 text-base transition duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    form.setValue("buttons", [
                      ...field.value,
                      { name: "New button", url: "" }, // Set up a new button with name and empty URL
                    ]);
                  }}
                >
                  <AiOutlinePlus />
                  Add
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                {form.watch("buttons").map((button, index) => {
                  return (
                    <div
                      className="flex gap-1 items-center justify-between"
                      key={index}
                    >
                      <Input
                        placeholder="Button name"
                        value={button.name}
                        onChange={(e) => {
                          const newButtons = [...field.value];
                          newButtons[index].name = e.target.value;
                          field.onChange(newButtons);
                        }}
                      />

                      <Input
                        placeholder="Button URL"
                        value={button.url}
                        onChange={(e) => {
                          const newButtons = [...field.value];
                          newButtons[index].url = e.target.value;
                          field.onChange(newButtons);
                        }}
                      />

                      <Button
                        variant={"ghost"}
                        size={"icon"}
                        onClick={(e) => {
                          e.preventDefault();
                          const newButtons = [...field.value];
                          newButtons.splice(index, 1);
                          field.onChange(newButtons);
                        }}
                      >
                        <AiOutlineClose />
                      </Button>
                    </div>
                  );
                })}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default Content;
