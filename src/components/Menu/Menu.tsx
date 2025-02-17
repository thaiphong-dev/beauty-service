import React from "react";
import * as motion from "framer-motion/client";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";
import useScrollLock from "@/hook/useScrollLock";
const bodoni_Moda = Bodoni_Moda({ subsets: ["latin"], weight: "500" });

interface Props {
  handleCloseMenu: () => void;
  isShow: boolean;
}
const Menu = ({ handleCloseMenu, isShow }: Props) => {
  useScrollLock(isShow);
  const menuList = [
    {
      label: "home",
      value: "/",
      paddingleft: 0,
      paddingright: 0,
    },
    {
      label: "about us",
      value: "/about",
      paddingleft: 0,
      paddingright: 0,
    },
    {
      label: "services",
      value: "/services",
      paddingleft: 0,
      paddingright: 250,
    },
    {
      label: "our team",
      value: "/team",
      paddingleft: 220,
      paddingright: 0,
    },
    {
      label: "our works",
      value: "/works",
      paddingleft: 0,
      paddingright: 200,
    },
    {
      label: "contact",
      value: "/contact",
      paddingleft: 100,
      paddingright: 0,
    },
  ];
  return (
    <motion.div
      className="h-screen w-full absolute top-0 left-0 z-10 bg-main p-[30px] md:block hidden"
      initial={{
        opacity: isShow ? 1 : 0,
        zIndex: isShow ? 1 : -1,
        y: isShow ? "100%" : 0,
      }} // Start above the viewport
      animate={{
        opacity: isShow ? 1 : 0,
        zIndex: isShow ? 1 : -1,
        y: isShow ? 0 : "100%",
      }} // Move into view
      exit={{ opacity: 0, zIndex: -1, y: "-100%" }} // Move back up when exiting
      transition={{
        duration: 0.5, // Increased duration for a slower animation
        ease: "easeInOut", // Predefined easing for smoother effect
      }}
    >
      <div className="flex justify-between items-center h-full w-full">
        <div className="flex justify-between flex-col items-start h-full font-[700]">
          <div className="text-[16px] w-[60px] leading-[16px] cursor-pointer text-center font-[700] tracking-[-1px]">
            <p>HANIE N&E</p>
          </div>
          <motion.div className="relative group">
            <motion.div className="  w-fit leading-5 cursor-pointer">
              Instagram
            </motion.div>
            <motion.div className="absolute left-0 h-[2px] bg-main_text/40 transition-all duration-300 w-full" />
          </motion.div>

          {/* Facebook link with line effect */}

          <motion.div className="h-[27px] text-[14px] uppercase  cursor-pointer  flex justify-center items-center">
            <span className="text-[25px] leading-3 inline-block !h-[17px] text-center">
              •
            </span>{" "}
            privacy policy
          </motion.div>
        </div>

        <div
          className={`${bodoni_Moda.className} flex space-y-[2px] flex-col justify-center items-center h-full`}
        >
          {menuList?.map((x, index) => (
            <div
              className="text-[70px] uppercase border-[2px]  border-main hover:border-main_text rounded-[50px] px-[20px]"
              key={index}
              style={{
                marginLeft: x?.paddingleft,
                marginRight: x?.paddingright,
              }}
            >
              <Link onClick={() => handleCloseMenu()} href={x?.value}>
                {x.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-between flex-col items-end h-full font-[700]">
          <div
            onClick={() => handleCloseMenu()}
            className="text-[16px] w-[60px] leading-[16px] uppercase cursor-pointer text-center font-[700] tracking-[-1px]"
          >
            <p>close</p>
          </div>

          {/* Facebook link with line effect */}
          <motion.div className="relative group">
            <motion.div className=" w-fit leading-5 cursor-pointer">
              Facebook
            </motion.div>
            <motion.div className="absolute left-0 h-[2px] bg-main_text/50 transition-all duration-300 w-full" />
          </motion.div>
          <motion.div className="h-[27px] text-[14px] uppercase  cursor-pointer  flex justify-center items-center">
            studio rule
            <span className="text-[25px] leading-3 inline-block !h-[17px] text-center">
              •
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
