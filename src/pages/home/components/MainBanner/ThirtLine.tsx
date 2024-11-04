import React from "react";
import * as notion from "framer-motion/client";
import { Bodoni_Moda } from "next/font/google";

const bodoni_Moda = Bodoni_Moda({ subsets: ["latin"], weight: "400" });

const ThirtLine = () => {
  return (
    <notion.div className="flex justify-between items-end">
      <notion.div
        initial={{ opacity: 0 }} // Start with no opacity
        animate={{ opacity: 1 }} // Fade in to full opacity
        exit={{ opacity: 0 }} // Fade out to no opacity when exiting
        transition={{
          duration: 1.5, // Duration for the fade effect
          ease: "easeIn", // Smooth fade effect
        }}
        className=" text-[15px] font-[500] w-[300px]"
      >
        We offer a complete range of beauty treatments for nails, hair, face and
        body - allowing you shine even brighter
      </notion.div>

      <notion.div
        className={`${bodoni_Moda.className} text-[220px] relative right-[-50px]  h-[200px]`}
        initial={{ opacity: 0, x: 100 }} // Start above the viewport
        animate={{ opacity: 1, x: 0 }} // Move into view
        exit={{ opacity: 0, x: 100 }} // Move back up when exiting
        transition={{
          duration: 1, // Increased duration for a slower animation
          ease: "easeInOut", // Predefined easing for smoother effect
        }}
      >
        Studio
      </notion.div>
    </notion.div>
  );
};
export default ThirtLine;
