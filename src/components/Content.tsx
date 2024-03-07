import React, { useMemo } from "react";
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
  const inputClass = useMemo(() => {
    return "block p-2 w-full rounded-md border-none outline-none transition duration-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 focus:ring-2 focus:ring-inset sm:text-lg sm:leading-6";
  }, []);

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
              <FormLabel className="text-lg">Heading</FormLabel>
              <FormControl>
                {/* <Tiptap onBlur={field.onChange} value={field.value}  /> */}
                <Input
                  {...field}
                  className={inputClass}
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
              <FormLabel className="text-lg">Description</FormLabel>
              <FormControl>
                {/*      
               <Tiptap onBlur={field.onChange} value={field.value}  /> */}
                <Input
                  {...field}
                  className={inputClass}
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
                <FormLabel className="text-lg">Buttons</FormLabel>

               <Button
  variant={"light"}
  className="gap-2 text-base transition duration-200"
  onClick={(e) => {
    e.preventDefault();
    form.setValue("buttons", [
      ...(field.value || []), // Ensure field.value is an array or use an empty array as default
      { name: "New button", url: "" }, // Set up a new button with name and empty URL
    ]);
  }}
>
  <AiOutlinePlus />
  Add
</Button>

              </div>
              <div className="flex flex-col gap-2">
                {form?.watch("buttons")?.map((button, index) => {
                  return (
                    <div
                      className="flex gap-1 items-center justify-between"
                      key={index}
                    >
                      <Input
                        placeholder="Button name"
                        className={inputClass}
                        value={button.name}
                        onChange={(e) => {
                          const newButtons = [...(field.value || [])];
                          newButtons[index].name = e.target.value;
                          field.onChange(newButtons);
                        }}
                      />

                      <Input
                        placeholder="Button URL"
                        className={inputClass}
                        value={button.url}
                        onChange={(e) => {
                          const newButtons = [...(field.value || [])];
                          newButtons[index].url = e.target.value;
                          field.onChange(newButtons);
                        }}
                      />

                      <Button
                        variant={"ghost"}
                        size={"icon"}
                        onClick={(e) => {
                          e.preventDefault();
                          const newButtons = [...(field.value || [])];
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
