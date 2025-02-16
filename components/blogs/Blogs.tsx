"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Blogs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-start items-start gap-5 lg:gap-10 p-4">
      {/* banner*/}
      <div className="w-full h-[480px] relative rounded-[25px] overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          className="h-full vertical-swiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full relative">
                  <img
                    src={""}
                    className="w-full h-full object-cover"
                    alt="News thumbnail"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 w-full flex flex-col md:flex-row justify-start items-start md:items-center pb-0 p-4 md:p-[50px] gap-4 md:gap-[30px]"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff34 100%)",
                    }}
                  >
                    <div>
                      <p className="text-white text-lg md:text-[26px] font-black font-['Montserrat'] max-w-full md:max-w-[707px]">
                        How Summer Transfers Impact Players Futures
                      </p>
                      <div className="h-[42px] justify-start items-center gap-3.5 mt-[10px] inline-flex">
                        <img
                          className="w-[42px] h-[42px] rounded-[32.67px]"
                          src="https://placehold.co/42x42"
                        />
                        <div className="text-white text-lg font-medium font-['Work Sans'] leading-7">
                          Tracey Wilson
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
