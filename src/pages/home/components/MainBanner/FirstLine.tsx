import React from "react";
import * as motion from "framer-motion/client";
import { Bodoni_Moda } from "next/font/google";
const bodoni_Moda = Bodoni_Moda({ subsets: ["latin"], weight: "400" });

const FirstLine = () => {
  return (
    <motion.div className="flex justify-between items-center">
      <motion.div
        className={`${bodoni_Moda.className} text-[220px] relative left-[-50px] h-[230px]`}
        initial={{ opacity: 0, y: -100 }} // Start above the viewport
        animate={{ opacity: 1, y: 0 }} // Move into view
        exit={{ opacity: 0, y: -100 }} // Move back up when exiting
        transition={{
          duration: 1, // Increased duration for a slower animation
          ease: "easeInOut", // Predefined easing for smoother effect
        }}
      >
        Pro Nails
        <span className="text-gray-500 text-[13px]"> QuyNhon</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }} // Start with no opacity
        animate={{ opacity: 1 }} // Fade in to full opacity
        exit={{ opacity: 0 }} // Fade out to no opacity when exiting
        transition={{
          duration: 1.5, // Duration for the fade effect
          ease: "easeIn", // Smooth fade effect
        }}
        className="group border-[1px] border-black w-[150px] aspect-square rounded-full flex justify-center items-center hover:bg-black hover:text-white transition-all duration-200 cursor-pointer relative top-[70px]"
      >
        <div className="w-[140px] aspect-square flex justify-center items-center text-center uppercase font-[500] group-hover:border-[2px] group-hover:border-white rounded-full transition-all duration-0">
          <p>make an appointment</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FirstLine;
