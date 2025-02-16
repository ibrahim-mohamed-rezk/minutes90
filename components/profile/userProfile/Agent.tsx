"use client";

import PlayersCard from "@/components/players/PlayersCard";
import { getApi } from "@/libs/axios/backendServer";
import { useAppSelector } from "@/libs/store/hooks";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface AgentData {
  user: {
    image: string;
    name: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    role: string;
  };

  fifa_certificate: number;
  birth_date: string;
  agent_code: string;
  working_region: string;
  license_expire: string;

  country: {
    name: string;
    id: number;
  };

  players: {
    id: string;
    name: string;
    image?: string;
    position?: string;
    age?: number;
  }[];

  governorate: {
    name: string;
    id: number;
  };
}

const Agent = () => {
  const [data, setData] = useState<AgentData | null>(null);
  const token = useAppSelector((state) => state.user.token);
  const { agentId } = useParams();

  // get player profile data from backend
  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await getApi(
          `agents/${agentId}`,
          {},
          { Authorization: `Bearer ${token}` }
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProfile();
  }, [token]);

  return (
    <div className="flex flex-col items-start justify-start gap-[30px] mb-[100px]">
      <div className="flex flex-col pt-[48px] md:flex-row w-full items-start justify-start gap-[30px] p-[10px]">
        {/* left side */}
        <div className="w-full md:w-[20%] flex items-center justify-start flex-col gap-[30px]">
          {/* user image */}
          <div className="w-full h-[306px] bg-white rounded-[30px] shadow-lg p-[10px]">
            <img
              className="w-full h-full rounded-[30px] object-cover"
              src={data?.user?.image || "/images/icons/userAvatar.png"}
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
                  {data?.fifa_certificate === 0 ? "No" : "Yes"} FIFA Accredited
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
                {data?.user?.name}
              </h3>
            </div>
          </div>

          {/* main info */}
          <div className="w-full p-4 md:p-6 bg-[#1e1f1f] flex flex-col items-stretch justify-center gap-[30px] rounded-[30px] border border-[#f1f1f2]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-8 gap-8">
              {[
                { label: "Agent Code", value: data?.agent_code },
                {
                  label: "License Expiry",
                  value: data?.license_expire || "none",
                },
                { label: "Address", value: data?.working_region || "none" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start gap-2.5"
                >
                  <div className="text-white text-sm font-normal font-['Montserrat']">
                    {item.label} :
                  </div>
                  <div className="text-white text-base font-bold font-['Montserrat'] ps-2">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* agent players */}
      <div className="w-full max-w-[1518px] p-5 bg-[#1e1f1f] rounded-[30px] border border-[#f1f1f2]">
        <div className="text-white text-xl sm:text-2xl md:text-[26px] font-bold font-['Montserrat']">
          Players Contracted with the Agent
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-5">
          {data?.players && data.players.length > 0 ? (
            data.players.map((player, index) => (
              <PlayersCard key={player.id || index} player={player} />
            ))
          ) : (
            <span className="text-white text-lg">
              No players contracted with the agent
            </span>
          )}
        </div>
      </div>

      {/* agent card */}
      <div className="w-full max-w-[1518px] h-auto bg-[#1e1f1f] rounded-[30px] border border-[#f1f1f2] p-4 md:p-6">
        <div className="text-white text-xl sm:text-2xl md:text-[26px] font-bold font-['Montserrat'] mb-4">
          Agent Cards
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10">
          {data?.fifa_certificate === 1 && (
            <img
              className="w-full md:w-1/2 h-auto max-h-[430px] rounded-[30px] shadow-[0px_1px_4px_0px_rgba(255,255,255,0.05)] object-cover"
              src="/images/agent/fifaCard.png"
              alt="Player 2"
            />
          )}
          <img
            className="w-full md:w-1/2 h-auto max-h-[430px] rounded-[30px] shadow-[0px_1px_4px_0px_rgba(255,255,255,0.05)] object-cover"
            src="/images/agent/minutesCard.png"
            alt="Player 1"
          />
        </div>
      </div>
    </div>
  );
};

export default Agent;
