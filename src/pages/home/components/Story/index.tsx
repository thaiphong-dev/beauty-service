import React from "react";
import * as motion from "framer-motion/client";
import { Bodoni_Moda } from "next/font/google";
import SingleStory from "./SingleStory";
const bodoni_Moda = Bodoni_Moda({ subsets: ["latin"], weight: "400" });

const MainStory = () => {
  const mockStories = [
    {
      title: "It all began as a nail studio",
      content:
        'Where we dedicated ourselves to perfecting the art of nail care. Specializing in "manicure & pedicure", technique, our missing was to provide top-notch nail services that left our clients feeling pampered and confident. We were committed to quality, precision, and ensuring that every visit to our studio was a delightful experience',
    },
    {
      title: "But we listened, and we heard your dream",
      content:
        "You craved a place where beauty and welliness unite, where you cound find everything you need under one roof",
    },
    {
      title: "And, we expanded",
      content:
        "Today, we proudly introduce our branch located in Quy Nhon city",
    },
    {
      title: "It's not just about nails anymore",
      content:
        'We call it our "beauty cave" - it \'s about complete beauty, from head to toe. We offer a full range of services, all designed to enhance your natural beauty and elevate your spirit ',
    },
  ];

  return (
    <div className="mt-[200px] pb-[100px]">
      {/* story header  */}
      <div>
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Start above the viewport
          whileInView={{ opacity: 1, x: 0 }} // Move into view
          exit={{ opacity: 0, x: -100 }} // Move back up when exiting
          transition={{
            duration: 1, // Increased duration for a slower animation
            ease: "easeInOut", // Predefined easing for smoother effect
          }}
          viewport={{ once: true }}
          className="flex justify-start items-end relative space-x-[100px]"
        >
          <div className="inline-block relative text-end text-gray-500">
            Our Story
          </div>
          <div
            className={`uppercase text-[80px] h-[90px] ${bodoni_Moda.className}`}
          >
            from nail studio
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }} // Start above the viewport
          whileInView={{ opacity: 1, x: 0 }} // Move into view
          exit={{ opacity: 0, x: 100 }} // Move back up when exiting
          transition={{
            duration: 1, // Increased duration for a slower animation
            ease: "easeInOut", // Predefined easing for smoother effect
          }}
          viewport={{ once: true }}
          className="relative left-[40%] w-fit"
        >
          <div>
            <p className={`uppercase text-[80px] ${bodoni_Moda.className}`}>
              to beauty cave
            </p>
          </div>
        </motion.div>
      </div>

      {/* story list  */}
      <div className="flex justify-center items-center w-full ">
        <div className="block w-[1100px]">
          {mockStories?.map((story, index) => {
            return (
              <SingleStory
                key={index}
                content={story.content}
                count={index + 1}
                title={story.title}
              />
            );
          })}
        </div>
      </div>

      <div className=" w-full flex justify-center items-center text-center">
        <div className={`${bodoni_Moda.className} min-h-[200px]`}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            className="text-gray-400 text-[70px] "
          >
            05
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
              duration: 0.5,
              ease: "easeIn",
            }}
            viewport={{ once: true }}
            className="text-[70px] font-[500] "
          >
            <p> Every visit to PRO Nails & </p>
            <p>Beauty Studio is a celebration</p>
            <p>of you.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
              duration: 0.5,
              ease: "easeIn",
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="text-[16px]  flex flex-col justify-center items-center w-full"
          >
            <p>Your support, your loyalty, and your smiles </p>{" "}
            <p> brought us here. Join us in this new chapter of </p>
            <p>your beauty journey.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MainStory;
