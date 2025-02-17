import { formatPrice } from "@/utils/format";
import React, { useState } from "react";

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
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-between items-center shadow-sm cursor-pointer"
      >
        <div className="w-[20%] text-[40px] text-gray-400">0{service.id}</div>
        <div className="w-full text-[40px] font-semibold capitalize">
          {service.serviceName}
        </div>
        <div className="w-[20%]">{/* để icon ở đây  */}</div>
      </div>

      <div
        className="transition-all duration-300"
        style={{
          height: isOpen ? "100%" : 0,
          opacity: isOpen ? 1 : 0,
          zIndex: isOpen ? 1 : -1,
        }}
      >
        {service.supServices?.map((x) => (
          <div
            key={service.id}
            className="flex justify-between items-center shadow-sm py-2 group cursor-pointer"
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
            <div className="w-[20%]">
              <div className=" group group-hover:flex hidden border-[2px] border-main_text w-[100px] aspect-square rounded-full justify-center items-center hover:bg-main_text hover:text-white transition-all duration-200 cursor-pointer relative ">
                <div className="w-full aspect-square flex justify-center items-center text-center uppercase font-[500] group-hover:border-[2px] group-hover:border-white rounded-full transition-all duration-0 text-[10px] leading-normal">
                  <p>make an appointment</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceItem;
