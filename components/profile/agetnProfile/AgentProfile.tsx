"use client";

import PlayersCard from "@/components/players/PlayersCard";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { Link } from "@/i18n/routing";
import { getApi } from "@/libs/axios/backendServer";
import { useAppSelector } from "@/libs/store/hooks";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface AgentProfileData {
  id: number;
  email: string;
  phone: string;
  role: string;
  image: string;
  name: string;
  first_name: string;
  last_name: string;

  agent: {
    fifa_certificate: number;
    license_expire: string;
    working_region: string;
    agent_code: string;
    players: {
      id: string;
      name: string;
      image?: string;
      position?: string;
      age?: number;
    }[];
  };

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
  const { copyToClipboard } = useCopyToClipboard();

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

  const signOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

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
                  {data?.agent?.fifa_certificate === 0 ? "No" : "Yes"} FIFA
                  Accredited
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
              <div className="flex flex-col justify-start items-start gap-2.5">
                <div className="text-white text-sm font-normal font-['Montserrat']">
                  Agent Code :
                </div>
                <div className="text-white gap-2 cursor-pointer flex items-center justify-start text-base font-bold font-['Montserrat']">
                  <span>{data?.agent?.agent_code}</span>
                  <div
                    onClick={() => {
                      copyToClipboard(data?.agent?.agent_code);
                      toast.success("Link copied to clipboard");
                    }}
                    className="flex items-center justify-center gap-1 ml-2"
                  >
                    <svg
                      width={"16"}
                      height={"16"}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="white"
                        d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"
                      />
                    </svg>
                    <span className="font-[500] text-[14px]">copy</span>
                  </div>
                </div>
              </div>

              {[
                {
                  label: "License Expiry",
                  value: data?.agent?.license_expire || "none",
                },
                {
                  label: "Address",
                  value: data?.agent?.working_region || "none",
                },
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
            <div className="w-full flex items-center justify-center gap-5">
              {/* edit button */}
              <Link
                href="/profile/settingsAgent"
                className="bg-green-500 w-[150px] text-center text-[18px] font-bold text-white px-4 py-2 rounded-lg"
              >
                Edit Profile
              </Link>
              <button
                className="w-[117px] h-[43px] px-[13px] py-2.5 bg-[#d93044] rounded-xl text-white text-sm font-bold font-['Montserrat']"
                onClick={() => signOut()}
              >
                Log Out
              </button>
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
          {data?.agent?.players && data.agent.players.length > 0 ? (
            data.agent.players.map((player, index) => (
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
          {data?.agent?.fifa_certificate === 1 && (
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

export default AgentProfile;
