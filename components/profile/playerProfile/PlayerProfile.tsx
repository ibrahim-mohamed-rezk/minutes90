"use client";

import { getApi } from "@/libs/axios/backendServer";
import { useEffect, useState } from "react";

const PlayerProfile = () => {
  const [data, setData] = useState<{
    image?: string;
    age?: number;
    name?: string;
  } | null>(null);
  const token = localStorage.getItem("token");
  // get profile from packend
  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await getApi(
          "player-profile",
          {},
          { Authorization: `Bearer ${token}` }
        );
        setData(res.data?.user);
      } catch (error) {
        console.log(error);
      }
    };

    getProfile();
  }, []);

  console.log(data);

  return (
    <div className="flex w-full items-start justify-start gap-[30px] pt-[48px]">
      {/* left side */}
      <div className="w-full md:w-[20%] flex items-center justify-start flex-col gap-[30px]">
        {/* user image */}
        <div className="w-full h-[306px] bg-white rounded-[30px] shadow-lg p-[10px]">
          <img
            className="w-full h-full rounded-[30px]"
            src={data?.image}
            alt="user image"
          />
        </div>
        {/* main info */}
        <div className="w-[306px] h-[560px] bg-[#1e1f1f] rounded-[30px] border border-[#f1f1f2] p-4">
          <div>
            <div className="text-white text-sm font-normal font-['Montserrat']">
              Age:
            </div>
            <div className="text-white text-base font-bold font-['Montserrat']">
              16 years
            </div>
          </div>
        </div>
        {/* Legal Aspects */}
        <div className="w-[306px] h-[205px] bg-[#1e1f1f] rounded-[30px] border border-[#f1f1f2] p-4">
          <div>
            <div className="flex flex-col">
              <span className="text-white text-sm font-normal font-['Montserrat'] uppercase">
                With club
              </span>
              <div className="text-white text-base font-bold font-['Montserrat'] uppercase">
                Contracted with a club
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-white text-sm font-normal font-['Montserrat'] capitalize">
                With player&apos;s agent
              </span>
              <div className="text-white text-base font-bold font-['Montserrat'] uppercase">
                Contracted with a club
              </div>
            </div>
          </div>
        </div>
        {/* socials */}
        <div className="w-[306px] h-[260px] px-[21px] pt-[37px] pb-[38px] bg-[#1e1f1f] rounded-[30px] border border-[#f1f1f2] flex flex-col justify-center items-center">
          <div className="flex flex-col gap-[15px]">
            {["LinkedIn", "Facebook", "Twitter", "WhatsApp"].map(
              (platform, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center w-full"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-[35px] h-[35px] relative">
                      {platform === "LinkedIn" && (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.48355 2.9671C2.30289 2.9671 2.9671 2.30289 2.9671 1.48355C2.9671 0.664208 2.30289 0 1.48355 0C0.664208 0 0 0.664208 0 1.48355C0 2.30289 0.664208 2.9671 1.48355 2.9671Z"
                            fill="white"
                          />
                          <path
                            d="M2.71984 3.95801H0.247258C0.110772 3.95801 0 4.06878 0 4.20527V11.623C0 11.7595 0.110772 11.8703 0.247258 11.8703H2.71984C2.85633 11.8703 2.9671 11.7595 2.9671 11.623V4.20527C2.9671 4.06878 2.85633 3.95801 2.71984 3.95801Z"
                            fill="white"
                          />
                          <path
                            d="M10.0876 3.5464C9.03077 3.18442 7.70893 3.50239 6.91622 4.07257C6.88902 3.96625 6.7921 3.88712 6.67687 3.88712H4.20429C4.0678 3.88712 3.95703 3.9979 3.95703 4.13438V11.5521C3.95703 11.6886 4.0678 11.7994 4.20429 11.7994H6.67687C6.81336 11.7994 6.92413 11.6886 6.92413 11.5521V6.22124C7.3237 5.87706 7.83849 5.76728 8.25982 5.94629C8.66829 6.11888 8.9022 6.5402 8.9022 7.10148V11.5521C8.9022 11.6886 9.01297 11.7994 9.14946 11.7994H11.622C11.7585 11.7994 11.8693 11.6886 11.8693 11.5521V6.6035C11.8411 4.57153 10.8852 3.81937 10.0876 3.5464Z"
                            fill="white"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="text-white text-base font-bold font-['Montserrat'] capitalize">
                      {platform}
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-[#239d60] text-base font-bold font-['Montserrat'] capitalize">
                      250 k
                    </div>
                    <div className="text-[#dafac9] text-[9.89px] font-normal font-['Montserrat'] capitalize">
                      Followers
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="w-full md:w-[80%] flex items-center justify-start flex-col gap-[30px] ">
        {/* name and posietion */}
        <div className="w-full flex items-center justify-between pt-[20px]">
          <div className="flex items-center justify-center gap-[20px]">
            <h3 className="text-white text-3xl font-black font-['Montserrat']">
              {data?.name}
            </h3>
            <div className="h-[36.83px] px-[18px] py-[3.92px] bg-[#eb4335] rounded-xl flex items-center">
              <div className="text-white text-2xl font-black font-['Montserrat']">
                Rw
              </div>
            </div>
          </div>
        </div>
        {/* level and statistic */}
        <div className="w-full h-[356px] bg-[#1e1f1f] rounded-[30px] border border-[#f1f1f2]"></div>
        {/* skills and heatmap */}
        <div className="w-full flex gap-[30px]">
          <div className="w-[860px] h-[407px] bg-[#1e1f1f] rounded-[30px] border border-[#f1f1f2]"></div>
          <div className="w-[294px] h-[407px] px-2.5 py-3.5 bg-[#1e1f1f] rounded-[15px] border border-[#f1f1f2] justify-center items-center gap-2.5 inline-flex">
            <div className="w-[272px] h-[385px] relative">
              <img
                className="w-[272px] h-[385px] left-0 top-0 absolute rounded-[15px]"
                src="https://via.placeholder.com/272x385"
              />
              <div className="w-[36.45px] h-[36.45px] px-[9.11px] left-[76.11px] top-[296.65px] absolute opacity-50 bg-[#239d60] rounded-[49.47px] flex-col justify-center items-center gap-[13.02px] inline-flex">
                <div className="text-white text-xs font-extrabold font-['Inter'] uppercase">
                  CB
                </div>
              </div>
              <div className="w-[36.45px] h-[36.45px] px-[9.11px] left-[20.13px] top-[260.20px] absolute opacity-50 bg-[#239d60] rounded-[49.47px] flex-col justify-center items-center gap-[13.02px] inline-flex">
                <div className="text-white text-xs font-extrabold font-['Inter'] uppercase">
                  LB
                </div>
              </div>
              <div className="w-[36.45px] h-[36.45px] px-[9.11px] left-[215.42px] top-[260.20px] absolute opacity-50 bg-[#239d60] rounded-[49.47px] flex-col justify-center items-center gap-[13.02px] inline-flex">
                <div className="text-white text-xs font-extrabold font-['Inter'] uppercase">
                  Rb
                </div>
              </div>
              <div className="w-[36.45px] h-[36.45px] px-[9.11px] py-[11.72px] left-[117.77px] top-[347.42px] absolute opacity-50 bg-[#4285f4] rounded-[49.47px] flex-col justify-center items-center gap-[13.02px] inline-flex">
                <div className="text-white text-xs font-extrabold font-['Inter'] uppercase">
                  GK
                </div>
              </div>
              <div className="w-[36.45px] h-[36.45px] px-[9.11px] py-[13.02px] left-[163.34px] top-[296.65px] absolute opacity-50 bg-[#239d60] rounded-[49.47px] flex-col justify-center items-center gap-[13.02px] inline-flex">
                <div className="text-white text-xs font-extrabold font-['Inter'] uppercase">
                  CB
                </div>
              </div>
              <div className="w-[36.45px] h-[36.45px] px-[9.11px] py-[13.02px] left-[117.77px] top-[214.63px] absolute opacity-50 bg-[#fbbc05] rounded-[49.47px] flex-col justify-center items-center gap-[13.02px] inline-flex">
                <div className="text-white text-xs font-extrabold font-['Inter'] uppercase">
                  dm
                </div>
              </div>
              <div className="w-[36.45px] h-[36.45px] px-[9.11px] py-[13.02px] left-[172.45px] top-[136.52px] absolute opacity-50 bg-[#fbbc05] rounded-[49.47px] flex-col justify-center items-center gap-[13.02px] inline-flex">
                <div className="text-white text-xs font-extrabold font-['Inter'] uppercase">
                  cm
                </div>
              </div>
              <div className="w-[36.45px] h-[36.45px] px-[9.11px] py-[13.02px] left-[57.89px] top-[136.52px] absolute opacity-50 bg-[#fbbc05] rounded-[49.47px] flex-col justify-center items-center gap-[13.02px] inline-flex">
                <div className="text-white text-xs font-extrabold font-['Inter'] uppercase">
                  cm
                </div>
              </div>
              <div className="w-[36.45px] h-[36.45px] px-[9.11px] py-[13.02px] left-[37.06px] top-[47.99px] absolute opacity-50 bg-[#eb4335] rounded-[49.47px] flex-col justify-center items-center gap-[13.02px] inline-flex">
                <div className="text-white text-xs font-extrabold font-['Inter'] uppercase">
                  lW
                </div>
              </div>
              <div className="w-[36.45px] h-[36.45px] px-[9.11px] py-[13.02px] left-[117.77px] top-[21.95px] absolute bg-[#eb4335] rounded-[49.47px] flex-col justify-center items-center gap-[13.02px] inline-flex">
                <div className="text-white text-xs font-extrabold font-['Inter'] uppercase">
                  Cf
                </div>
              </div>
              <div className="w-[36.45px] h-[36.45px] px-[9.11px] py-[13.02px] left-[199.79px] top-[47.99px] absolute opacity-50 bg-[#eb4335] rounded-[49.47px] flex-col justify-center items-center gap-[13.02px] inline-flex">
                <div className="text-white text-xs font-extrabold font-['Inter'] uppercase">
                  RW
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
