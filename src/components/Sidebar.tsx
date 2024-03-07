"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Content from "./Content"; // Import Content component
import { AiOutlineClose } from "react-icons/ai";
import Style from "./Style";


export default function RightSideBar({
  formData,
  updateFormData,
}: {
  formData: any;
  updateFormData: any;
}) {
  return (
    <aside
      id="RightSideBar"
      className="absolute bg-background z-10 h-full top-0 right-0 flex lg:flex flex-shrink-0 flex-col w-96 "
    >
      <div className="relative flex-1 flex flex-col dark:border-neutral-700  pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex flex-col px-4 ">
            <div className="flex justify-between pb-4">
              <p className="dark:text-gray-300 text-gray-500">
                Edit Properties
              </p>
              <button>
                <AiOutlineClose className="w-4 h-4" />
              </button>
            </div>
            <div className="flex w-full justify-between items-center">
              <Tabs className="w-full" defaultValue="content">
                <TabsList className="grid grid-cols-2">
                  <TabsTrigger value="content">Content</TabsTrigger>
                  <TabsTrigger value="style">Style</TabsTrigger>
                </TabsList>

                <TabsContent value="content">
                  <Content
                    formData={formData}
                    updateFormData={updateFormData}
                  />
                </TabsContent>
                <TabsContent value="style">
                  <Style />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
