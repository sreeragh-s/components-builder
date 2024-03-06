"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useForm } from "react-hook-form";
import { Button } from "@components/ui/button";
import {
  Source_Code_Pro,
  Poppins,
  Roboto,
  Courier_Prime,
  Rubik,
  Montserrat,
  Playfair_Display,
  Anek_Latin,
  Inter,
  Roboto_Slab,
  Quicksand,
} from "next/font/google";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useStore } from "../store";
import clsx from "clsx";

const rubik = Rubik({
  fallback: ["Helvetica", "Arial", "sans-serif"],
  weight: "400",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  fallback: ["Helvetica", "Arial", "sans-serif"],
  weight: "400",
  subsets: ["latin"],
});

const robotoSlab = Roboto_Slab({
  fallback: ["Helvetica", "Arial", "sans-serif"],
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  fallback: ["Helvetica", "Arial", "sans-serif"],
  weight: "400",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  fallback: ["Helvetica", "Arial", "sans-serif"],
  weight: "400",
  subsets: ["latin"],
});

const latin = Anek_Latin({
  fallback: ["Helvetica", "Arial", "sans-serif"],
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  fallback: ["Helvetica", "Arial", "sans-serif"],
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  fallback: ["Helvetica", "Arial", "sans-serif"],
  weight: "400",
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  fallback: ["Helvetica", "Arial", "sans-serif"],
  weight: "400",
  subsets: ["latin"],
});

const courier = Courier_Prime({
  fallback: ["Helvetica", "Arial", "sans-serif"],
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  fallback: ["Helvetica", "Arial", "sans-serif"],
  weight: "400",
  subsets: ["latin"],
});

// const propertiesSchema = z.object({
//   heading: z.string(),
//   description: z.string(),
//   image: z.string(),
//   headingspan: z.string().optional(),
//   afterheadingspan: z.string().optional(),
//   alt: z.string().optional(),
//   id: z.string().optional(),
//   buttons: z
//     .array(
//       z.object({
//         name: z.string(),
//         url: z.string(),
//       })
//     )
//     .default([])
//     .optional(),
// });

export const SelectDemo: React.FC<{
  setFontFamily: (fontFamily: string) => void;
}> = ({ setFontFamily }) => {
  return (
    <Select
      defaultValue={rubik.className}
      onValueChange={(value) => setFontFamily(value)}
    >
      <SelectTrigger className="w-full focus:ring-indigo-600 focus:ring-2 focus:ring-inset border-none outline-none transition duration-200 p-4 ring-1 ring-inset ring-gray-300 text-lg">
        <SelectValue placeholder="Select font" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="overflow-scroll scrollbar-hide">
          <SelectLabel>Font family</SelectLabel>
          <SelectItem className={rubik.className} value={rubik.className}>
            Rubik
          </SelectItem>
          <SelectItem
            className={sourceCodePro.className}
            value={sourceCodePro.className}
          >
            Source Code Pro
          </SelectItem>
          <SelectItem className={poppins.className} value={poppins.className}>
            Poppins
          </SelectItem>
          <SelectItem className={roboto.className} value={roboto.className}>
            Roboto
          </SelectItem>
          <SelectItem className={courier.className} value={courier.className}>
            Courier
          </SelectItem>
          <SelectItem
            className={montserrat.className}
            value={montserrat.className}
          >
            Montserrat
          </SelectItem>
          <SelectItem
            className={playfairDisplay.className}
            value={playfairDisplay.className}
          >
            Playfair Display
          </SelectItem>
          <SelectItem value={latin.className}>Latin</SelectItem>
          <SelectItem value={inter.className}>Inter</SelectItem>
          <SelectItem value={robotoSlab.className}>Roboto Slab</SelectItem>
          <SelectItem value={quicksand.className}>Quicksand</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const HeadingInput: React.FC<{ setHeadingSize: (hSize: string) => void }> = ({
  setHeadingSize,
}) => {
  const [heading, setHeading] = useState("text-6xl");

  return (
    <ToggleGroup
      className="mt-2 flex justify-around"
      variant={"outline"}
      value={heading}
      onValueChange={(value) => {
        setHeading(value);
        setHeadingSize(value);
      }}
      type="single"
    >
      <ToggleGroupItem value="text-8xl" aria-label="Toggle first">
        H1
      </ToggleGroupItem>
      <ToggleGroupItem value="text-7xl" aria-label="Toggle second">
        H2
      </ToggleGroupItem>
      <ToggleGroupItem value="text-6xl" aria-label="Toggle third">
        H3
      </ToggleGroupItem>
      <ToggleGroupItem value="text-5xl" aria-label="Toggle fourth">
        H4
      </ToggleGroupItem>
      <ToggleGroupItem value="text-4xl" aria-label="Toggle fifth">
        H5
      </ToggleGroupItem>
      <ToggleGroupItem value="text-3xl" aria-label="Toggle six">
        H6
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default function Style() {
  const form = useForm();
  const {
    setHeadingSize,
    setSubtitleSize,
    setFontFamily,
    setBgImage,
    setHeadingColor,
    setSubtitleColor,
  } = useStore();

  const [subtitle, setSubtitle] = useState<number>(20);

  const bgInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setSubtitleSize(`${subtitle}px`);
  }, [subtitle, setSubtitleSize]);

  const onBgImageChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        const files = e.target.files;

        if (!files) {
          return;
        }

        setBgImage(URL.createObjectURL(files[0]));
      },
      [setBgImage]
    );

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
                <HeadingInput setHeadingSize={setHeadingSize} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="paragraph-font-size"
          render={({ field }) => (
            <FormItem className="my-5">
              <FormLabel className="text-lg">Subtitle</FormLabel>
              <FormControl>
                <div className="flex justify-start">
                  <Button
                    disabled={subtitle >= 96}
                    onClick={(e) => {
                      e.preventDefault();

                      if (subtitle >= 40) {
                        return;
                      }

                      setSubtitle((state) => state + 1);
                    }}
                    className={clsx("text-2xl", {
                      "cursor-not-allowed": subtitle >= 40,
                    })}
                    variant={"light"}
                  >
                    +
                  </Button>{" "}
                  <Input
                    {...field}
                    value={subtitle}
                    type="number"
                    readOnly
                    className="mx-4 w-12 ring-indigo-600 ring-2 ring-inset border-none outline-none text-xl"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.currentTarget.blur();
                      }
                    }}
                  />
                  <Button
                    // disable={subtitle <= 12}
                    onClick={(e) => {
                      e.preventDefault();

                      if (subtitle <= 12) {
                        return;
                      }

                      setSubtitle((state) => state - 1);
                    }}
                    className={clsx("text-2xl", {
                      "cursor-not-allowed": subtitle <= 12,
                    })}
                    variant={"light"}
                  >
                    -
                  </Button>{" "}
                </div>
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
                <SelectDemo setFontFamily={setFontFamily} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bg-image"
          render={({ field }) => (
            <FormItem className="my-5">
              <FormLabel className="text-lg">
                <h2 className="mb-3">Background Image</h2>
                <Button
                  type="button"
                  onClick={() => {
                    if (bgInputRef.current) {
                      bgInputRef.current.click();
                    }
                  }}
                  variant="light"
                  className="w-full"
                >
                  Choose background image
                </Button>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  ref={bgInputRef}
                  type="file"
                  onChange={onBgImageChange}
                  className="mx-4 hidden w-full ring-indigo-600 ring-2 ring-inset border-none outline-none text-xl"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.currentTarget.blur();
                    }
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="font-color"
          render={({ field }) => (
            <FormItem className="flex justify-around items-center my-5">
              {/* I'm giving margin 8px because second element get margins from unknown source. Verify by removing mt-[8px] below and see the second in browser dev tool by inspecting */}
              <div className="flex flex-col mt-[8px]">
                <FormLabel className="text-lg">
                  <h2 className="mb-3">Heading color</h2>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="color"
                    onChange={(e) => setHeadingColor(e.target.value)}
                    className="w-full ring-indigo-600 ring-2 ring-inset border-none outline-none text-xl"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.currentTarget.blur();
                      }
                    }}
                  />
                </FormControl>
              </div>
              <div className="flex flex-col">
                <FormLabel className="text-lg">
                  <h2 className="mb-3">Subtitle color</h2>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="color"
                    onChange={(e) => setSubtitleColor(e.target.value)}
                    className="w-full ring-indigo-600 ring-2 ring-inset border-none outline-none text-xl"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.currentTarget.blur();
                      }
                    }}
                  />
                </FormControl>
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
