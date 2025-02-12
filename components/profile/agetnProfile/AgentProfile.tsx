"use client";

import PlayersCard from "@/components/players/PlayersCard";
import { getApi } from "@/libs/axios/backendServer";
import { useAppSelector } from "@/libs/store/hooks";
import Link from "next/link";
import { useEffect, useState } from "react";

interface AgentProfileData {
  id: number;
  email: string;
  phone: string;
  role: string;
  image: string;
  name: string;
  first_name: string;
  last_name: string;

  country: {
    name: string;
    id: number;
  };

  governorate: {
    name: string;
    id: number;
  };
}

const AgentProfile = () => {
  const [data, setData] = useState<AgentProfileData | null>(null);
  const token = useAppSelector((state) => state.user.token);

  // get player profile data from backend
  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await getApi(
          "agent-profile",
          {},
          { Authorization: `Bearer ${token}` }
        );
        setData(res.data?.user);
      } catch (error) {
        console.log(error);
      }
    };

    getProfile();
  }, [token]);

  console.log(data);

  return (
    <div className="flex flex-col items-start justify-start gap-[30px] mb-[100px]">
      <div className="flex flex-col pt-[48px] md:flex-row w-full items-start justify-start gap-[30px] p-[10px]">
        {/* left side */}
        <div className="w-full md:w-[20%] flex items-center justify-start flex-col gap-[30px]">
          {/* user image */}
          <div className="w-full h-[306px] bg-white rounded-[30px] shadow-lg p-[10px]">
            <img
              className="w-full h-full rounded-[30px] object-cover"
              src={data?.image}
              alt="user image"
            />
          </div>

          {/* Legal Aspects */}
          <div className="w-full md:w-[306px] bg-[#1e1f1f] rounded-[30px] border border-[#f1f1f2] p-4">
            <div className="flex flex-col gap-[20px] px-[5px] mt-[20px]">
              <div className="flex flex-col">
                <span className="text-white text-sm font-normal font-['Montserrat'] uppercase">
                  FIFA Accredited or Not:
                </span>
                <div className="text-white mt-[10px] text-base font-bold font-['Montserrat'] uppercase">
                  {/* {data?.player?.is_club_contracted */}Yes, FIFA Accredited
                  {/* : "Not Contracted with a club" */}
                  {/* } */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="w-full md:w-[80%] flex items-center justify-start flex-col gap-[30px]">
          {/* name */}
          <div className="w-full flex items-center justify-between pt-[20px] flex-wrap">
            <div className="flex items-center justify-center gap-[20px] mb-4 md:mb-0">
              <h3 className="text-white text-2xl md:text-3xl font-black font-['Montserrat']">
                {data?.name}
              </h3>
            </div>
          </div>

          {/* main info */}
          <div className="w-full p-4 md:p-6 bg-[#1e1f1f] flex flex-col items-stretch justify-center gap-[30px] rounded-[30px] border border-[#f1f1f2]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-8 gap-8">
              {[
                { label: "Date of Birth", value: "15 / 7 /1985" },
                { label: "Nationality", value: "Egyptian" },
                { label: "Agent Code", value: "254887" },
                { label: "License ID", value: "202405-6395" },
                { label: "License Expiry", value: "2027" },
                { label: "Language", value: "English" },
                { label: "Geographical Location", value: "Kanada" },
                { label: "Address", value: "United Kindem" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start gap-2.5"
                >
                  <div className="text-white text-sm font-normal font-['Montserrat']">
                    {item.label} :
                  </div>
                  <div className="text-white text-base font-bold font-['Montserrat']">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex items-center justify-center">
              {/* edit button */}
              <Link
                href="/profile/settingsAgent"
                className="bg-green-500 w-full md:w-[80%] mx-auto text-center text-[18px] font-bold text-white px-4 py-2 rounded-lg"
              >
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* agent players */}
      <div className="w-full max-w-[1518px] p-5 min-h-[785px] bg-[#1e1f1f] rounded-[30px] border border-[#f1f1f2] p-4">
        <div className="text-white text-xl sm:text-2xl md:text-[26px] font-bold font-['Montserrat']">
          Players Added to the FIFA Website
        </div>
        <div className="flex flex-wrap justify-around gap-5 mt-5">
          {Array(15)
            .fill(null)
            .map((_, index) => (
              <PlayersCard
                key={index}
                player={{
                  id: `${index + 1}`,
                  name: `Player ${index + 1}`,
                  image: `https://via.placeholder.com/150?text=Player+${
                    index + 1
                  }`,
                  position: "CF",
                  age: 25,
                  main_position: "CF",
                  user: { id: `${index + 1}`, name: `User ${index + 1}` },
                }}
              />
            ))}
        </div>
      </div>

      {/* agent card */}
      <div className="w-full max-w-[1518px] h-auto bg-[#1e1f1f] rounded-[30px] border border-[#f1f1f2] p-4 md:p-6">
        <div className="text-white text-xl sm:text-2xl md:text-[26px] font-bold font-['Montserrat'] mb-4">
          Players Added to the FIFA Website
        </div>
        <div className="flex flex-col md:flex-row justify-start items-center gap-4 md:gap-10">
          <img
            className="w-full md:w-1/2 h-auto max-h-[430px] rounded-[30px] shadow-[0px_1px_4px_0px_rgba(255,255,255,0.05)] border border-[#d9d9d9] object-cover"
            src="https://placehold.co/691x430"
            alt="Player 1"
          />
          <img
            className="w-full md:w-1/2 h-auto max-h-[430px] rounded-[30px] shadow-[0px_1px_4px_0px_rgba(255,255,255,0.05)] border border-[#d9d9d9] object-cover"
            src="https://placehold.co/691x430"
            alt="Player 2"
          />
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;
