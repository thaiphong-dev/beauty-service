import React from "react";
import ServiceItem from "./ServiceItem";
import { Bodoni_Moda } from "next/font/google";

const bodoni_Moda = Bodoni_Moda({ subsets: ["latin"], weight: "500" });
const Services = () => {
  const mockmenu = [
    {
      id: 1,
      serviceName: "nails",
      contentType: "header",
      contentTypeCode: 0,
      supServices: [
        {
          id: "n1",
          serviceName: "làm sạch da tay/chân (lấy khóe)",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 30000,
          maxPrice: 40000,
          unit: undefined,
          duration: "30 phút",
        },
        {
          id: "n2",
          serviceName: "Sơn gel",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 90000,
          maxPrice: undefined,
          unit: undefined,
          duration: "1 tiếng",
        },
        {
          id: "n3",
          serviceName: "Cứng móng",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 20000,
          maxPrice: undefined,
          unit: undefined,
          duration: "15 phút",
        },
        {
          id: "n4",
          serviceName: "Mắt mèo/Tráng gương/Ombre",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 15000,
          maxPrice: undefined,
          unit: "1 finger",
          duration: "30 phút - 1 tiếng",
        },
        {
          id: "n5",
          serviceName: "Vẽ",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 10000,
          maxPrice: 500000,
          unit: undefined,
          duration: "1 tiếng - 2 tiếng",
        },
        {
          id: "n6",
          serviceName: "Dán sticker",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 5000,
          maxPrice: 20000,
          unit: undefined,
          duration: "15 phút",
        },
        {
          id: "n7",
          serviceName: "Ẩn",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 10000,
          maxPrice: 30000,
          unit: undefined,
          duration: "30 phút",
        },
        {
          id: "n8",
          serviceName: "Úp móng(Keo)",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 100000,
          maxPrice: undefined,
          unit: undefined,
          duration: "1 tiếng - 1.5 tiếng",
        },
        {
          id: "n9",
          serviceName: "Úp móng(glue gel)",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 120000,
          maxPrice: undefined,
          unit: undefined,
          duration: "1 tiếng - 1.5 tiếng",
        },
        {
          id: "n10",
          serviceName: "Nối móng(Bột/Gel)",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 250000,
          maxPrice: undefined,
          unit: undefined,
          duration: "1.5 tiếng - 2 tiếng",
        },
        {
          id: "n11",
          serviceName: "Charm/Đính đá",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 10000,
          maxPrice: 100000,
          unit: undefined,
          duration: "30 phút - 1 tiếng",
        },
        {
          id: "n12",
          serviceName: "Phá Gel(sơn gel - móng nối)",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 30000,
          maxPrice: 500000,
          unit: undefined,
          duration: "30 phút - 1 tiếng",
        },
      ],
    },
    {
      id: 2,
      serviceName: "eyelash",
      contentType: "header",
      contentTypeCode: 0,
      supServices: [
        {
          id: "e1",
          serviceName: "Nối mi Classic",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 150000,
          maxPrice: 250000,
          unit: undefined,
          duration: "1 tiếng - 1.5 tiếng",
        },
        {
          id: "e2",
          serviceName: "Nối mi Volume",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 200000,
          maxPrice: 350000,
          unit: undefined,
          duration: "1.5 tiếng - 2 tiếng",
        },
        {
          id: "e3",
          serviceName: "Nối mi Mega Volume",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 250000,
          maxPrice: 400000,
          unit: undefined,
          duration: "2 tiếng - 2.5 tiếng",
        },
        {
          id: "e4",
          serviceName: "Nối mi thiên thần",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 220000,
          maxPrice: 380000,
          unit: undefined,
          duration: "1.5 tiếng - 2 tiếng",
        },
        {
          id: "e5",
          serviceName: "Nối mi Katun",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 180000,
          maxPrice: 300000,
          unit: undefined,
          duration: "1 tiếng - 1.5 tiếng",
        },
        {
          id: "e6",
          serviceName: "Nối mi đen tuyền",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 160000,
          maxPrice: 280000,
          unit: undefined,
          duration: "1 tiếng - 1.5 tiếng",
        },
        {
          id: "e7",
          serviceName: "Nối mi màu",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 180000,
          maxPrice: 320000,
          unit: undefined,
          duration: "1.5 tiếng - 2 tiếng",
        },
        {
          id: "e8",
          serviceName: "Tháo mi",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 30000,
          maxPrice: 50000,
          unit: undefined,
          duration: "15 phút",
        },
        {
          id: "e9",
          serviceName: "Uốn mi collagen",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 200000,
          maxPrice: 350000,
          unit: undefined,
          duration: "1 tiếng",
        },
        {
          id: "e10",
          serviceName: "Dưỡng mi keratin",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 100000,
          maxPrice: 200000,
          unit: undefined,
          duration: "30 phút",
        },
      ],
    },
    {
      id: 3,
      serviceName: "eyebrow",
      contentType: "header",
      contentTypeCode: 0,
      supServices: [
        {
          id: "b1",
          serviceName: "Phun chân mày tán bột",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 1500000,
          maxPrice: 2500000,
          unit: undefined,
          duration: "2 tiếng - 3 tiếng",
        },
        {
          id: "b2",
          serviceName: "Điêu khắc chân mày",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 2000000,
          maxPrice: 3500000,
          unit: undefined,
          duration: "2 tiếng - 3 tiếng",
        },
        {
          id: "b3",
          serviceName: "Phun ombre shading",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 1800000,
          maxPrice: 3000000,
          unit: undefined,
          duration: "2 tiếng - 3 tiếng",
        },
        {
          id: "b4",
          serviceName: "Tạo dáng chân mày",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 50000,
          maxPrice: 150000,
          unit: undefined,
          duration: "30 phút",
        },
        {
          id: "b5",
          serviceName: "Nhuộm chân mày",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 200000,
          maxPrice: 400000,
          unit: undefined,
          duration: "30 phút",
        },
      ],
    },
    {
      id: 4,
      serviceName: "treatment",
      contentType: "header",
      contentTypeCode: 0,
      supServices: [
        {
          id: "t1",
          serviceName: "Tẩy tế bào chết",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 30000,
          maxPrice: undefined,
          unit: undefined,
          duration: "30 phút",
        },
        {
          id: "t2",
          serviceName: "Chà gót chân",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 100000,
          maxPrice: 3500000,
          unit: undefined,
          duration: "1 tiếng",
        },
        {
          id: "t3",
          serviceName:
            "Dịch vụ cho nam (bao gồm cắt da tay/chân, tẩy tbc chân, thoa kem dưỡng",
          contentType: "content",
          contentTypeCode: 1,
          minPrice: 200000,
          maxPrice: undefined,
          unit: undefined,
          duration: "1 tiếng - 1.5 tiếng",
        },
      ],
    },
  ];

  return (
    <div>
      {/* header  */}
      <div className="flex justify-between flex-col xl:flex-row items-center ">
        <div className="w-[20%] min-w-[100px] pt-[20px] text-gray-400">
          <p className="w-full text-center xl:text-left">Services</p>
        </div>
        <div
          className={`xl:text-[100px] md:text-[80px] text-[30px] uppercase  w-full ${bodoni_Moda.className}`}
        >
          <p className="whitespace-nowrap xl:h-[110px]"> Total bliss from </p>

          <p className="pl-[20%] whitespace-nowrap xl:h-[110px]">fingertips </p>
          <p className="pl-[35%] whitespace-nowrap xl:h-[110px]">to eyebrows</p>
        </div>
      </div>

      {/* content  */}
      <div className=" pt-[20px] xl:pt-[30px]">
        {mockmenu?.map((x, index) => (
          <div key={index}>
            <ServiceItem {...x} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
