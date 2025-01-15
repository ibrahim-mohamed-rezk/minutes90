"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Header = () => {
  const newsItems = [
    {
      image: "/images/home/newsSlide.png",
    },
    {
      image: "/images/home/newsSlide.png",
    },
    {
      image: "/images/home/newsSlide.png",
    },
    {
      image: "/images/home/newsSlide.png",
    },
    {
      image: "/images/home/newsSlide.png",
    },
  ];

  const AddsItems = [
    {
      image: "/images/home/addsSlide.png",
    },
    {
      image: "/images/home/addsSlide.png",
    },
    {
      image: "/images/home/addsSlide.png",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-start items-start gap-5 lg:gap-10 p-4">
      {/* Player of the Year Card */}
      <div className="w-full lg:w-[439px] h-[500px] lg:h-[575px] relative bg-white rounded-[25px] border-2 border-white overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          className="h-full horizontal-swiper"
          navigation={{
            nextEl: ".horizontal-swiper .swiper-button-next",
            prevEl: ".horizontal-swiper .swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".horizontal-swiper .swiper-pagination1",
            type: "bullets",
            bulletClass: "custom-bullet-horizontal",
            bulletActiveClass: "custom-bullet-horizontal-active",
            horizontalClass: "custom-bullet-horizontal",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {AddsItems.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt="News thumbnail"
              />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination1 !flex !justify-center absolute z-10 !bottom-[10px] !left-0 !right-0 !w-full !h-[10px] !gap-2" />
        </Swiper>
      </div>

      {/* News Section */}
      <div className="w-full lg:w-[1041px] h-[400px] lg:h-[575px] relative rounded-[25px] overflow-hidden">
        <Swiper
          direction={"vertical"}
          modules={[Navigation, Pagination, Autoplay]}
          className="h-full vertical-swiper"
          navigation={{
            nextEl: ".vertical-swiper .swiper-button-next",
            prevEl: ".vertical-swiper .swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".vertical-swiper .swiper-pagination",
            type: "bullets",
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {newsItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full relative">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt="News thumbnail"
                />
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Arrows */}
          <div className="hidden lg:flex absolute right-5 top-5 flex-row h-auto opacity-50 justify-center items-center gap-2 z-10">
            <div className="swiper-button-prev !w-[46px] !h-[46px] !static !m-0 flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity after:hidden">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="23"
                  cy="23"
                  r="22.5"
                  fill="#F5F5F5"
                  stroke="#F1F1F2"
                />
                <path
                  d="M22 16L15 23L22 30M15 23H31"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="swiper-button-next !w-[46px] !h-[46px] !static !m-0 flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity after:hidden">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="23"
                  cy="23"
                  r="22.5"
                  fill="#F5F5F5"
                  stroke="#F1F1F2"
                />
                <path
                  d="M24 16L31 23L24 30M31 23H15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="swiper-pagination !flex !flex-col !right-[20px] !left-auto !w-auto !top-1/2 !-translate-y-1/2 !gap-2 !h-auto" />
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
