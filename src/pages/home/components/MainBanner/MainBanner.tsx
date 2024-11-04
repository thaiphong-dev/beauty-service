import React from "react";
import FirstLine from "./FirstLine";
import SecondLine from "./SecondLine";
import ThirtLine from "./ThirtLine";
import BannerForMO from "./BannerForMO";

const MainBanner = () => {
  return (
    <>
      <div className="xl:block hidden">
        <FirstLine />
        <SecondLine />
        <ThirtLine />
      </div>

      <div className="xl:hidden">
        <BannerForMO />
      </div>
    </>
  );
};

export default MainBanner;
