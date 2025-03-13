"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

const AgentCard = ({
  agent,
}: {
  agent: {
    id: string;
    name: string;
    country: string;
    agent_code: string;
    playersAdded: number;
    playersWithClubs: number;
    fifa_certificate: number;
    user: {
      image: string;
      name: string;
      first_name: string;
      last_name: string;
      email: string;
      phone: string;
      role: string;
    };
  };
}) => {
  const t = useTranslations("agent");
  const locale = useLocale();

  return (
    <div className="w-[48%] md:w-[250px] h-[clamp(200px,56.0416668vw,330px)] sm:h-[330px] md:h-[350px] relative bg-[#edce38] rounded-2xl overflow-hidden shadow-lg">
      <Link
        href={`/profile/user/agent/${agent.id}`}
        className=" w-full h-full flex items-center justify-center"
      >
        {/* top section */}
        <div className="relative flex items-center justify-center w-[88%] h-[88%] bg-white mx-auto">
          <div>
            <Image
              fill
              src={agent?.user?.image}
              alt={agent.name}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        {/* abslute section */}
        <div className="absolute w-full bottom-0   flex items-center justify-center">
          <div className="w-full h-[clamp(60px,12.1666666vw,80px)] md:h-[80px] relative flex items-start justify-start flex-col ">
            <div className={`absolute bottom-0 left-0 right-0 z-10  `}>
              <svg
                className={`${locale === "ar" ? " rotate-y-180" : ""}`}
                width="100%"
                height="auto"
                viewBox="0 0 249 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M149.378 0.0683594H5.31915C-0.556322 0.0683594 -5.31934 4.83139 -5.31934 10.7069V130.922C-5.31934 136.797 -0.556318 141.56 5.31916 141.56H243.621C249.497 141.56 254.26 136.797 254.26 130.922V43.5731C254.26 37.6976 249.497 32.9346 243.621 32.9346H191.113C188.296 32.9346 185.593 31.8168 183.599 29.8266L156.892 3.17635C154.898 1.18611 152.195 0.0683594 149.378 0.0683594Z"
                  fill="#FFD016"
                />
              </svg>
            </div>

            <div className="absolute bottom-[-5px] left-0 right-0 z-20">
              <svg
                className={`${locale === "ar" ? " rotate-y-180" : ""}`}
                width="100%"
                height="auto"
                viewBox="0 0 249 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M149.378 0.45166H5.31915C-0.556322 0.45166 -5.31934 5.21469 -5.31934 11.0902V131.305C-5.31934 137.181 -0.556318 141.944 5.31916 141.944H243.621C249.497 141.944 254.26 137.181 254.26 131.305V43.9564C254.26 38.0809 249.497 33.3179 243.621 33.3179H191.113C188.296 33.3179 185.593 32.2001 183.599 30.2099L156.892 3.55965C154.898 1.56941 152.195 0.45166 149.378 0.45166Z"
                  fill="#575757"
                />
              </svg>
            </div>

            <div className="z-30 w-full flex flex-col relative gap-[clamp(3px,0.41666667vw,8px)] md:gap-2 px-[10px] ">
              <div className="h-8 flex-col justify-center items-start gap-[3px] md:gap-1.5 inline-flex">
                <div className=" text-nowrap text-white text-[8px] md:text-[10.25px] font-bold font-['Montserrat']">
                  {agent?.user?.name}
                </div>
                <div className="w-[52px] px-0.5 pt-[2.32px] pb-[2.14px] bg-white rounded-[2.90px] justify-center items-center inline-flex overflow-hidden">
                  <div className="grow shrink basis-0 self-stretch justify-between items-center inline-flex">
                    <Image
                      width={8}
                      height={8}
                      src="/images/logoIcon.svg"
                      alt="verified"
                    />

                    <div className="text-center text-black text-[3.86px] font-bold font-['Montserrat']">
                      {t("minutes_verified")}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-full items-center justify-between">
                <div className="w-[46.81px] h-[21.42px] flex-col justify-start items-start  md:gap-[4.42px] inline-flex">
                  <div className="w-[68.89px] text-white text-[6.18px] font-normal font-['Montserrat']">
                    {t("agent_code")}
                  </div>
                  <div className="w-[61.38px] text-white text-[7.07px] font-bold font-['Montserrat']">
                    {agent?.agent_code}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* abslute marks */}
        <div className="absolute flex items-center justify-center rounded-br-[5px] w-[82px] h-[25px] bg-[#239D60] left-[0px] top-[0px] text-white text-[8.30px] font-bold font-['Montserrat'] uppercase">
          minutes 90
        </div>
        {agent?.fifa_certificate === 1 && (
          <div className="absolute right-0 top-0 w-[77px] h-[25px] bg-gradient-to-l from-[#3579b6] to-[#071a59] rounded-tr-[10px] rounded-bl-[5px] flex items-center justify-center gap-1">
            <div className="flex flex-col items-center">
              <Image
                width={18}
                height={16}
                src="/images/agent/fifaLogo.svg"
                alt="FIFA"
              />
            </div>
            <div className="text-white text-[7.44px] font-bold font-['Montserrat'] uppercase">
              {t("verified")}
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

export default AgentCard;
