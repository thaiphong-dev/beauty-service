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
    <>
      {/* ui for PC  */}
      <div
        className={`${bodoni_Moda.className} w-[510px] min-h-[200px] xl:block hidden`}
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

      {/* ui for MO  */}
      <div
        className={`${bodoni_Moda.className} border-b-[2px] border-b-gray-400 w-full py-[20px] flex justify-start items-start space-x-[30px] xl:hidden`}
        style={{
          position: "relative",
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
          className="text-gray-300 text-[35px] font-semibold "
        >
          0{count}
        </motion.div>
        <div className="space-y-[10px] pt-[10px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
              duration: 0.5,
              ease: "easeIn",
            }}
            viewport={{ once: true }}
            className="text-[18px] font-[600] "
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
            }}
            viewport={{ once: true }}
            className="text-[14px]"
          >
            {content}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SingleStory;
