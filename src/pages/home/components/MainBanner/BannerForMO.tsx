import React from "react";
import * as notion from "framer-motion/client";
import { Bodoni_Moda } from "next/font/google";
const bodoni_Moda = Bodoni_Moda({ subsets: ["latin"], weight: "400" });

const BannerForMO = () => {
  return (
    <>
      <notion.div
        initial={{ opacity: 0, y: -100 }} // Start above the viewport
        animate={{ opacity: 1, y: 0 }} // Move into view
        exit={{ opacity: 0, y: -100 }} // Move back up when exiting
        transition={{
          duration: 1, // Increased duration for a slower animation
          ease: "easeInOut", // Predefined easing for smoother effect
        }}
        className={`${bodoni_Moda.className} text-[80px] relative text-center leading-[70px] pt-[20px]`}
      >
        <p>Pro Nails</p>
        <p>&Beauty</p>
        <p>Studio</p>
      </notion.div>
      <div className="flex justify-center items-center flex-col space-y-[20px] mt-[10px] text-center">
        <notion.div
          initial={{ opacity: 0 }} // Start with no opacity
          animate={{ opacity: 1 }} // Fade in to full opacity
          exit={{ opacity: 0 }} // Fade out to no opacity when exiting
          transition={{
            duration: 1.5, // Duration for the fade effect
            ease: "easeIn", // Smooth fade effect
          }}
          className=" text-[15px] font-[500] w-[300px] "
        >
          We offer a complete range of beauty treatments for nails, hair, face
          and body - allowing you shine even brighter
        </notion.div>
        <notion.div
          initial={{ opacity: 0 }} // Start with no opacity
          animate={{ opacity: 1 }} // Fade in to full opacity
          exit={{ opacity: 0 }} // Fade out to no opacity when exiting
          transition={{
            duration: 1.5, // Duration for the fade effect
            ease: "easeIn", // Smooth fade effect
          }}
          className="group border-[2px] border-black w-[150px] aspect-square rounded-full flex justify-center items-center hover:bg-black hover:text-white transition-all duration-200 cursor-pointer relative "
        >
          <div className="w-[140px] aspect-square flex justify-center items-center text-center uppercase font-[500] group-hover:border-[2px] group-hover:border-white rounded-full transition-all duration-0 text-[15px] leading-normal font-[500]">
            <p>make an appointment</p>
          </div>
        </notion.div>
      </div>
    </>
  );
};

export default BannerForMO;
