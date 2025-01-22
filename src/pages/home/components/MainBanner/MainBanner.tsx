import React from "react";
import FirstLine from "./FirstLine";
import SecondLine from "./SecondLine";
import ThirtLine from "./ThirtLine";
import BannerForMO from "./BannerForMO";

const MainBanner = () => {
  return (
    <>
      <div className="xl:block hidden w-full">
        <FirstLine />
        <SecondLine />
        <ThirtLine />
      </div>

      <div className="xl:hidden w-full">
        <BannerForMO />
      </div>
    </>
  );
};

export default MainBanner;
