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
const MenuMO = ({ isShow, handleCloseMenu }: Props) => {
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
      paddingleft: 50,
      paddingright: 0,
    },
    {
      label: "services",
      value: "/services",
      paddingleft: 0,
      paddingright: 70,
    },
    {
      label: "our team",
      value: "/team",
      paddingleft: 60,
      paddingright: 0,
    },
    {
      label: "our works",
      value: "/works",
      paddingleft: 0,
      paddingright: 10,
    },
    {
      label: "contact",
      value: "/contact",
      paddingleft: 20,
      paddingright: 0,
    },
  ];
  return (
    <motion.div
      className="h-screen w-full absolute top-0 left-0 z-10 bg-main pt-[40px] md:hidden"
      initial={{ opacity: isShow ? 1 : 0, y: isShow ? "100%" : 0 }} // Start above the viewport
      animate={{ opacity: isShow ? 1 : 0, y: isShow ? 0 : "100%" }} // Move into view
      exit={{ opacity: 0, y: "-100%" }} // Move back up when exiting
      transition={{
        duration: 0.5, // Increased duration for a slower animation
        ease: "easeInOut", // Predefined easing for smoother effect
      }}
    >
      <div className="flex justify-center items-center h-full w-full">
        <div
          className={`${bodoni_Moda.className} flex space-y-[5px] flex-col justify-center items-center h-full`}
        >
          {menuList?.map((x, index) => (
            <div
              className="text-[50px] uppercase border-[2px]  border-main hover:border-main_text rounded-[50px] px-[20px]"
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
      </div>
    </motion.div>
  );
};

export default MenuMO;
