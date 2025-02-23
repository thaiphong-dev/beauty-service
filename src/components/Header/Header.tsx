// use client
import React, { useState } from "react";
import * as motion from "framer-motion/client";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import MenuMO from "../Menu/MenuMO";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <div className="text-main_text">
      {/* UI for PC  */}
      <motion.div
        initial={{ opacity: 0, y: -100 }} // Start above the viewport
        animate={{ opacity: 1, y: 0 }} // Move into view
        exit={{ opacity: 0, y: -100 }} // Move back up when exiting
        transition={{
          duration: 1, // Increased duration for a slower animation
          ease: "easeInOut", // Predefined easing for smoother effect
        }}
        className="xl:flex justify-between items-start font-[500] hidden"
      >
        <motion.div className="uppercase w-[30%] h-[27px]  flex justify-start items-center cursor-pointer">
          <span className="text-[30px] leading-3 inline-block !h-[17px] text-center">
            •
          </span>
          studio in quy nhon city
        </motion.div>

        <motion.div className="cursor-pointer">
          <Logo />
        </motion.div>
        <motion.div className="flex justify-between items-start w-[30%]">
          <motion.div className="flex justify-between items-start space-x-[50px]">
            {/* Instagram link with line effect */}
            <motion.div className="relative group">
              <motion.div className="  w-fit leading-5 cursor-pointer">
                Instagram
              </motion.div>
              <motion.div className="absolute left-0 h-[2px] bg-main_text w-0 transition-all duration-300 group-hover:w-full" />
            </motion.div>

            {/* Facebook link with line effect */}
            <motion.div className="relative group">
              <motion.div className=" w-fit leading-5 cursor-pointer">
                Facebook
              </motion.div>
              <motion.div className="absolute left-0 h-[2px] bg-main_text w-0 transition-all duration-300 group-hover:w-full" />
            </motion.div>
          </motion.div>

          <motion.div
            onClick={() => setIsShowMenu((prev) => !prev)}
            className="h-[27px] uppercase  cursor-pointer  flex justify-center items-center"
          >
            menu
            <span className="text-[30px] leading-3 inline-block !h-[17px] text-center">
              •
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* UI for MO  */}
      <motion.div
        initial={{ opacity: 0, y: -100 }} // Start above the viewport
        animate={{ opacity: 1, y: 0 }} // Move into view
        exit={{ opacity: 0, y: -100 }} // Move back up when exiting
        transition={{
          duration: 1, // Increased duration for a slower animation
          ease: "easeInOut", // Predefined easing for smoother effect
        }}
        className="xl:hidden relative z-20 flex justify-between items-center font-[700]  border-b-[1px] border-gray-500 pb-[20px]"
      >
        <motion.div className="cursor-pointer">
          <Logo />
        </motion.div>

        <motion.div
          onClick={() => setIsShowMenu((prev) => !prev)}
          className="h-[27px] uppercase  cursor-pointer text-[16px] flex justify-center items-center"
        >
          {isShowMenu ? "close" : "menu"}
          <span className="text-[30px] leading-3 inline-block !h-[17px] text-center">
            •
          </span>
        </motion.div>
      </motion.div>

      <MenuMO
        isShow={isShowMenu}
        handleCloseMenu={() => setIsShowMenu(false)}
      />
      <Menu isShow={isShowMenu} handleCloseMenu={() => setIsShowMenu(false)} />
    </div>
  );
};

export default Header;
