import { formatPrice } from "@/utils/format";
import React, { Fragment, useState } from "react";
import * as motion from "framer-motion/client";

interface Service {
  id: string;
  serviceName: string;
  contentType: string;
  contentTypeCode: number;
  minPrice?: number;
  maxPrice?: number;
  unit?: string;
  duration?: string;
}

interface Props {
  id: number;
  serviceName: string;
  contentType: string;
  contentTypeCode: number;
  supServices: Service[];
}

const ServiceItem = (service: Props) => {
  const [isOpen, setIsOpen] = useState(service?.id === 1 ? true : false);

  return (
    <div className="w-full h-full">
      {/* header  */}
      <div
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="flex justify-between items-center shadow-sm cursor-pointer"
      >
        <div className="w-[20%] text-[20px] md:text-[40px] text-gray-400">
          0{service.id}
        </div>
        <div className="w-full text-[20px] md:text-[40px] font-semibold capitalize">
          {service.serviceName}
        </div>

        <motion.img
          src="/assets/image/icons/arrow-up.svg"
          alt="Arrow Icon"
          className="xl:w-10 w-7 aspect-square mr-8"
          animate={{ rotate: isOpen ? 180 : 360 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div
        className="transition-all duration-300"
        style={{
          height: isOpen ? "100%" : 0,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        {service.supServices?.map((x, index) => (
          <Fragment key={index}>
            {/* pc mode  */}
            <div
              key={index}
              className="md:flex hidden justify-between items-start shadow-sm py-2 group cursor-pointer h-[100px]"
            >
              <div className="w-[20%]"></div>
              <div className="w-full font-semibold">
                <div className="flex justify-start space-x-[20px] text-[16px]">
                  <div className="w-[50%] capitalize ">{x.serviceName}</div>

                  <div className="w-[15%]">
                    <div>Thời gian</div>
                    <div className="opacity-50">{x?.duration}</div>
                  </div>
                  <div>
                    <div>Giá tiền</div>
                    <div className="opacity-50">
                      {x.maxPrice
                        ? `${formatPrice(x?.minPrice ?? 0)} - ${formatPrice(
                            x?.maxPrice
                          )}`
                        : formatPrice(x?.minPrice ?? 0)}{" "}
                      VNĐ
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[20%] flex justify-end items-end">
                <div className=" group  hidden group-hover:flex border-[2px] border-main_text w-[90px] aspect-square rounded-full justify-center items-center hover:bg-main_text hover:text-white transition-all duration-200 cursor-pointer relative ">
                  <div className="w-full aspect-square flex justify-center items-center text-center uppercase font-[500] group-hover:border-[2px] group-hover:border-white rounded-full transition-all duration-0 text-[10px] leading-normal">
                    <p>make an appointment</p>
                  </div>
                </div>
              </div>
            </div>
            {/* MO mode  */}
            <div
              key={index}
              className="flex md:hidden justify-between items-start shadow-sm py-4 group cursor-pointer h-full w-full"
            >
              <div className="w-full font-semibold space-y-[5px]">
                <div className="flex justify-between items-center w-full">
                  <div className="capitalize text-[16px]">{x.serviceName}</div>
                  <div className="opacity-70 text-[12px]">{x?.duration}</div>
                </div>
                <div className="flex justify-between ">
                  <div className="w-[50%]">
                    <div className="opacity-70 text-[12px]">
                      {x.maxPrice
                        ? `${formatPrice(x?.minPrice ?? 0)} - ${formatPrice(
                            x?.maxPrice
                          )}`
                        : formatPrice(x?.minPrice ?? 0)}{" "}
                      VNĐ
                    </div>
                  </div>
                  <div className=" uppercase w-fit px-3 py-1 text-center border border-main_text text-[12px] rounded-[20px] ">
                    <p className="h-[12px]">make an </p>
                    <p className=""> appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ServiceItem;
