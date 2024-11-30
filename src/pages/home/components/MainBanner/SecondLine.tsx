import React from "react";
import * as motion from "framer-motion/client";
import { Bodoni_Moda } from "next/font/google";

const bodoni_Moda = Bodoni_Moda({ subsets: ["latin"], weight: "400" });

const SecondLine = () => {
  return (
    <motion.div className="flex justify-between items-end">
      <div className="text-gray-500 text-[13px] relative top-[50px]">2024</div>

      <motion.div
        className={`${bodoni_Moda.className} text-[220px] relative h-[210px]`}
        initial={{ opacity: 0, y: 100 }} // Start above the viewport
        animate={{ opacity: 1, y: 0 }} // Move into view
        exit={{ opacity: 0, y: 100 }} // Move back up when exiting
        transition={{
          duration: 1, // Increased duration for a slower animation
          ease: "easeInOut", // Predefined easing for smoother effect
        }}
      >
        <span className="inline-block relative top-[-60px]">&</span>Beauty
      </motion.div>
      <div className="text-gray-500 text-[13px] relative top-[50px]">
        Beauty
      </div>
    </motion.div>
  );
};
export default SecondLine;
