"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PlayersCard from "../players/PlayersCard";
import { Link } from "@/i18n/routing";

interface Player {
  id: string;
  name: string;
  image?: string;
  position?: string;
  age?: number;
}

interface PlayersSwiperProps {
  players: Player[];
  title: string;
  subtitle: string;
  swiperIndex: number;
  seeAllLink: string;
}

const PlayersSwiper = ({
  players,
  title,
  subtitle,
  swiperIndex,
  seeAllLink,
}: PlayersSwiperProps) => {
  const swiperBreakpoints = {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3.2,
      spaceBetween: 25,
    },
    1280: {
      slidesPerView: 4.2,
      spaceBetween: 25,
    },
  };



  const NavigationButton = ({ direction }: { direction: "prev" | "next" }) => {
    const isNext = direction === "next";
    return (
      <div
        className={`swiper-button-${direction}${swiperIndex} !w-[46px] !h-[46px] bg-[#f5f5f5] rounded-full border border-[#f1f1f2] flex justify-center items-center cursor-pointer hover:bg-[#e5e5e5] transition-colors`}
      >
        <svg
          width="46"
          height="47"
          viewBox="0 0 46 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <circle
              cx="23"
              cy="23.5"
              r="22.5"
              transform={isNext ? "matrix(-1 0 0 1 46 0)" : ""}
              fill="#F5F5F5"
              stroke="#F1F1F2"
            />
            <path
              d={
                isNext
                  ? "M24 16.5L31 23.5L24 30.5M31 23.5H15"
                  : "M22 16.5L15 23.5L22 30.5M15 23.5H31"
              }
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    );
  };

  return (
    <div className="min-h-[438.66px] w-full flex flex-col justify-start items-start gap-[25px] p-4">
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col justify-center items-start gap-2.5">
          <h2 className="text-white text-[20px] md:text-[25.61px] font-black font-['Montserrat'] capitalize">
            {title}
          </h2>
          <p className="text-white text-lg md:text-xl font-normal font-['Montserrat'] capitalize">
            {subtitle}
          </p>
        </div>
        <div className="flex justify-start items-start gap-[15px]">
          <Link
            href={seeAllLink}
            className="px-4 md:px-6 py-2 md:py-3 bg-[#239d60] rounded-[50px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border border-[#f1f1f2] flex justify-center items-center gap-2.5 hover:bg-[#1b7a4a] transition-colors"
          >
            <span className="text-white text-sm md:text-base font-semibold font-['Alexandria'] leading-tight">
              See All
            </span>
          </Link>

          <div className="players-swiper hidden md:flex justify-start items-center gap-2">
            <NavigationButton direction="prev" />
            <NavigationButton direction="next" />
          </div>
        </div>
      </div>

      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          className="players-swiper"
          navigation={{
            nextEl: `.players-swiper .swiper-button-next${swiperIndex}`,
            prevEl: `.players-swiper .swiper-button-prev${swiperIndex}`,
          }}
          spaceBetween={25}
          slidesPerView="auto"
          breakpoints={swiperBreakpoints}
          loopAdditionalSlides={4}
          effect="slide"
          speed={800}
          grabCursor={true}
          touchRatio={1.5}
          watchSlidesProgress={true}
          preventClicks={true}
          preventClicksPropagation={true}
        >
          {players.map((player) => (
            <SwiperSlide key={player.id} className="!w-[248.55px]">
              <PlayersCard player={player} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PlayersSwiper;
