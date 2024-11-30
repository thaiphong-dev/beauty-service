import React from "react";
import * as motion from "framer-motion/client";
import { Bodoni_Moda } from "next/font/google";

const bodoni_Moda = Bodoni_Moda({ subsets: ["latin"] });
interface Props {
  count: number;
  title: string;
  content: string;
}
const SingleStory = ({ content, count, title }: Props) => {
  return (
    <div
      className={`${bodoni_Moda.className} w-[510px] min-h-[200px]`}
      style={{
        position: "relative",
        left: count % 2 === 0 ? "60%" : "0",
        top: count > 1 ? (count === 2 ? -100 : -150) : 0,
        width: count > 1 ? "400px" : "510px",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        className="text-gray-400 text-[70px] "
      >
        0{count}
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
        className="text-[30px] font-[500] "
      >
        {title}
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
        className="text-[16px]"
      >
        {content}
      </motion.div>
    </div>
  );
};

export default SingleStory;
