'use client'
import React, { useState } from "react";
import RightSideBar from "./components/Sidebar";
export default function Home() {
  const [formData, setFormData] = useState({
    heading: 'Welcome to',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt.ua ad ad non deserunt sunt...',
    image: 'https://liftlearning.com/wp-content/uploads/2020/09/default-image-300x169.png',
    headingspan: 'Hero Title Span',
    afterheadingspan: '',
    id: '',
    alt: 'Image Alt',
    buttons: [{ name: 'Contact', url: '' }]
  });

  const updateFormData = (newFormData: any) => {
    setFormData(newFormData);
  };


  return (
    <div className=" border border-black mr-80">
      <div className=""  style={{ width: '1300px', transform: 'scale(0.80)' }} >
        <div id={formData.id} className="p-4 max-w-8xl mx-auto bg-white">
          <div className="my-10 mx-auto max-w-7xl px-4   flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
            <div className="sm:text-center lg:text-left">
              <h1
                dangerouslySetInnerHTML={{ __html: formData.heading }}
                className="text-4xl tracking-tight font-bold text-black sm:text-5xl md:text-6xl"
              ></h1>
              <p
                dangerouslySetInnerHTML={{ __html: formData.description }}
                className="mt-3 text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
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

            <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4 ">
              <img
                className="h-56 w-full rounded-lg object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src={formData.image}
                alt={formData.alt}
              />
            </div>
          </div>
        </div>
      </div>
      <RightSideBar formData={formData} updateFormData={updateFormData} />
    </div>
  );
}
