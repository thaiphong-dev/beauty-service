import React from "react";
import * as motion from "framer-motion/client";
import { Bodoni_Moda } from "next/font/google";

const bodoni_Moda = Bodoni_Moda({ subsets: ["latin"], weight: "400" });

const ThirtLine = () => {
  return (
    <motion.div className="flex justify-between items-end">
      <motion.div
        initial={{ opacity: 0 }} // Start with no opacity
        animate={{ opacity: 1 }} // Fade in to full opacity
        exit={{ opacity: 0 }} // Fade out to no opacity when exiting
        transition={{
          duration: 1.5, // Duration for the fade effect
          ease: "easeIn", // Smooth fade effect
        }}
        className=" text-[15px] font-[500] w-[300px] text-gray-500"
      >
        We specialize in premium nail and eyelash treatments, leaving you with
        flawless nails and stunning lashes that shine with beauty.
      </motion.div>

      <motion.div
        className={`${bodoni_Moda.className} text-[200px] relative right-[-50px]  h-[200px] text-main_text`}
        initial={{ opacity: 0, x: 100 }} // Start above the viewport
        animate={{ opacity: 1, x: 0 }} // Move into view
        exit={{ opacity: 0, x: 100 }} // Move back up when exiting
        transition={{
          duration: 1, // Increased duration for a slower animation
          ease: "easeInOut", // Predefined easing for smoother effect
        }}
      >
        Studio
      </motion.div>
    </motion.div>
  );
};
export default ThirtLine;
