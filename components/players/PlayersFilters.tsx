"use client";

import { postApi } from "@/libs/axios/backendServer";
import { useAppDispatch } from "@/libs/store/hooks";
import { setPlayersData } from "@/libs/store/slices/PlayersSlice";
import { useEffect, useState, useRef } from "react";
import FilterDropDown from "../filterComponents/FilterDropDown";
import { PlayerFilters } from "@/libs/helpers/PlayerFilters";
import FilterCollapse from "../filterComponents/FilterCollapse";

const PlayersFilters = () => {
  const dispatch = useAppDispatch();
  const [filters, setFilters] = useState({
    position: "",
    country_id: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    age_min: "",
    age_max: "",
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleFilterChange = (target: any) => {
    setFilters({
      ...filters,
      [target.name]: target.value,
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  //  API CALL based on filters
  useEffect(() => {
    postApi(
      "filter",
      {
        ...filters,
      },
    )
      .then((res) => {
        dispatch(setPlayersData(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filters]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //   console.log(filters);

  return (
    <div className="w-full max-w-[1720px] h-[74px] flex flex-col justify-start items-center gap-7 pt-[40px] px-[10px] ">
      <div className="self-stretch flex justify-between items-center gap-[10px]">
        <div className="flex justify-center items-center gap-[8px]">
          <div className="w-6 h-6 overflow-hidden" onClick={toggleMenu}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.25 7C18.25 9.07107 16.5711 10.75 14.5 10.75C12.4289 10.75 10.75 9.07107 10.75 7C10.75 4.92893 12.4289 3.25 14.5 3.25C16.5711 3.25 18.25 4.92893 18.25 7ZM14.5 9.25C15.7426 9.25 16.75 8.24264 16.75 7C16.75 5.75736 15.7426 4.75 14.5 4.75C13.2574 4.75 12.25 5.75736 12.25 7C12.25 8.24264 13.2574 9.25 14.5 9.25Z"
                fill="#239D60"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.75 17C5.75 19.0711 7.42893 20.75 9.5 20.75C11.5711 20.75 13.25 19.0711 13.25 17C13.25 14.9289 11.5711 13.25 9.5 13.25C7.42893 13.25 5.75 14.9289 5.75 17ZM9.5 19.25C8.25736 19.25 7.25 18.2426 7.25 17C7.25 15.7574 8.25736 14.75 9.5 14.75C10.7426 14.75 11.75 15.7574 11.75 17C11.75 18.2426 10.7426 19.25 9.5 19.25Z"
                fill="#239D60"
              />
              <path
                d="M14.25 16.9585C14.25 16.5443 14.5858 16.2085 15 16.2085H22C22.4142 16.2085 22.75 16.5443 22.75 16.9585C22.75 17.3727 22.4142 17.7085 22 17.7085H15C14.5858 17.7085 14.25 17.3727 14.25 16.9585Z"
                fill="#239D60"
              />
              <path
                d="M9 6.20852C9.41421 6.20852 9.75 6.54431 9.75 6.95852C9.75 7.37273 9.41421 7.70852 9 7.70852L2 7.70852C1.58579 7.70852 1.25 7.37273 1.25 6.95852C1.25 6.54431 1.58579 6.20852 2 6.20852L9 6.20852Z"
                fill="#239D60"
              />
              <path
                d="M1.25 16.9585C1.25 16.5443 1.58579 16.2085 2 16.2085H4C4.41421 16.2085 4.75 16.5443 4.75 16.9585C4.75 17.3727 4.41421 17.7085 4 17.7085H2C1.58579 17.7085 1.25 17.3727 1.25 16.9585Z"
                fill="#239D60"
              />
              <path
                d="M22 6.20852C22.4142 6.20852 22.75 6.54431 22.75 6.95852C22.75 7.37273 22.4142 7.70852 22 7.70852H20C19.5858 7.70852 19.25 7.37273 19.25 6.95852C19.25 6.54431 19.5858 6.20852 20 6.20852H22Z"
                fill="#239D60"
              />
            </svg>
          </div>
          <div className="text-center text-nowrap text-white text-lg font-semibold font-['Montserrat']">
            Categories by
          </div>
        </div>

        {/* Desktop Filters Menu */}
        <div className={` justify-end items-center gap-[8px] hidden xl:flex `}>
          {PlayerFilters.map((item, index) => (
            <FilterDropDown
              key={index}
              item={item}
              handleFilterChange={handleFilterChange}
              filters={filters}
            />
          ))}
        </div>

        {/* Mobile Filters Menu */}
        <div
          ref={menuRef}
          className={`fixed max-h-screen overflow-auto hide-scroll left-0 top-0 w-64 bg-[#2f2f2f] h-full p-4 transition-transform z-[1000] transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } xl:hidden`}
        >
          <div
            className="flex justify-between items-center mb-[20px] cursor-pointer "
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#a5a5a5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
          {PlayerFilters.map((item, index) => (
            <FilterCollapse
              key={index}
              item={item}
              handleFilterChange={handleFilterChange}
              filters={filters}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayersFilters;
