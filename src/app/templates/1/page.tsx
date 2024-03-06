"use client";
import React, { useRef, useState } from "react";
import RightSideBar from "@components/Sidebar";
import { useStore } from "@/store";

const Template1 = () => {
  const [formData, setFormData] = useState({
    heading: "Welcome to",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt.ua ad ad non deserunt sunt...",
    image:
      "https://liftlearning.com/wp-content/uploads/2020/09/default-image-300x169.png",
    headingspan: "Hero Title Span",
    afterheadingspan: "",
    id: "",
    alt: "Image Alt",
    buttons: [{ name: "Contact", url: "" }],
  });

  const paragRef = useRef<HTMLParagraphElement | null>(null);

  const {
    fontFamily,
    subtitle,
    heading,
    bgImage,
    headingColor,
    subtitleColor,
  } = useStore();

  const updateFormData = (newFormData: any) => {
    setFormData(newFormData);
  };

  return (
    <div
      className="h-[90vh] flex justify-center border border-black mr-80"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className={fontFamily}
        style={{ width: "1300px", transform: "scale(0.80)" }}
      >
        <div id={formData.id} className="p-4 max-w-8xl mx-auto">
          <div className="my-10 mx-auto max-w-7xl px-4 gap-3 justify-center {([lg:flex-justify])} lg:flex flex-col lg:flex-row">
            <div className="sm:text-center lg:text-left">
              <h1
                dangerouslySetInnerHTML={{ __html: formData.heading }}
                className={`${heading} text-center tracking-tight font-bold`}
                style={{ color: headingColor }}
              ></h1>
              <p
                ref={paragRef}
                dangerouslySetInnerHTML={{ __html: formData.description }}
                // className={`mt-3 text-center text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-lg`}
                className={`mt-3 text-center text-black sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0`}
                style={{ fontSize: subtitle, color: subtitleColor }}
              ></p>

              {/* <!-- Button Section --> */}
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                {formData.buttons.map((button, index) => (
                  <div key={index} className="rounded-md shadow mr-4">
                    {" "}
                    {/* Added margin */}
                    <a
                      href={button.url}
                      className="w-full flex items-center justify-center px-4 py-3 text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-2 md:text-lg md:px-3"
                    >
                      {button.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <RightSideBar formData={formData} updateFormData={updateFormData} />
    </div>
  );
};

export default Template1;
