"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useAppSelector } from "@/libs/store/hooks";
import { postApi } from "@/libs/axios/backendServer";
import { useRouter } from "@/i18n/routing";

const PlayerInjury = () => {
  const [injuryType, setInjuryType] = useState("muscle");
  const [injurySeverity, setInjurySeverity] = useState("minor");
  const [recoveryPeriod, setRecoveryPeriod] = useState("less than a month");
  const [participationRate, setParticipationRate] = useState(1);
  const { token } = useAppSelector((state) => state.user);
  const router = useRouter();

  const updateInjury = async () => {
    try {
      const res = await postApi(
        "player-profile/injury",
        {
          injury_type: injuryType,
          injury_severity: injurySeverity,
          recovery_time: recoveryPeriod,
          returned_to_play: participationRate,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      toast.success("Injury updated successfully");
      router.push("/profile");
      console.log(res)
    } catch (error) {
      toast.error("Error updating injury");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="text-white text-[24px] md:text-[32px] font-extrabold font-['Montserrat']">
        Profile Settings
      </div>

      <div className="h-auto md:h-[615px] relative bg-[#222222] rounded-[25px] border border-[#f1f1f2] overflow-hidden p-[30px] md:p-0">
        <div className="w-full md:w-[442.07px] md:left-[30px] md:top-[30px] md:absolute text-white text-lg font-bold font-['Montserrat']">
          Player&apos;s Injury level
        </div>
        <div className="flex flex-col gap-10 mt-8 md:mt-0 md:h-[484px] md:left-[46px] md:top-[101px] md:absolute md:flex-col md:justify-start md:items-start">
          <div className="flex flex-col gap-5">
            <div className="h-5 text-[#adadad] text-sm font-medium font-['Montserrat']">
              Injury Type :
            </div>
            <div className="p-1 rounded-[14px] border border-white flex flex-wrap justify-start items-center gap-[26px]">
              {["muscle", "ligament", "fracture", "concussion", "other"].map(
                (item, index) => (
                  <div
                    onClick={() => setInjuryType(item)}
                    key={index}
                    className={`px-[13px] py-2.5 ${
                      injuryType === item ? "bg-[#34a853]" : ""
                    } rounded-xl flex justify-center items-center gap-2.5 cursor-pointer`}
                  >
                    <div className="text-white text-sm font-bold font-['Montserrat']">
                      {item}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="h-5 text-[#adadad] text-sm font-medium font-['Montserrat']">
              Injury Severity:
            </div>
            <div className="p-1 rounded-[14px] border border-white flex flex-wrap justify-start items-center gap-[26px]">
              {["minor", "moderate", "severe"].map((item, index) => (
                <div
                  onClick={() => setInjurySeverity(item)}
                  key={index}
                  className={`px-[13px] py-2.5 ${
                    injurySeverity === item ? "bg-[#34a853]" : ""
                  } rounded-xl flex justify-center items-center gap-2.5 cursor-pointer`}
                >
                  <div className="text-white text-sm font-medium font-['Montserrat']">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="h-5 text-[#adadad] text-sm font-medium font-['Montserrat']">
              The recovery period that the player needs :
            </div>
            <div className="p-1 rounded-[14px] border border-white flex flex-wrap justify-start items-center gap-[26px]">
              {[
                "less than a month",
                "from 3 to 6 months",
                "more than 6 months",
              ].map((item, index) => (
                <div
                  onClick={() => setRecoveryPeriod(item)}
                  key={index}
                  className={`px-[13px] py-2.5 ${
                    recoveryPeriod === item ? "bg-[#34a853]" : ""
                  } rounded-xl flex justify-center items-center gap-2.5 cursor-pointer`}
                >
                  <div className="text-white text-sm font-medium font-['Montserrat']">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="h-5 text-[#adadad] text-sm font-medium font-['Montserrat']">
              Participation rate after injury :
            </div>
            <div className="p-1 rounded-[14px] border border-white flex flex-wrap justify-start items-center gap-[26px]">
              <div
                onClick={() => setParticipationRate(1)}
                className={`px-[13px] py-2.5 rounded-xl flex justify-center items-center gap-2.5 cursor-pointer ${
                  participationRate === 1 ? "bg-[#34a853]" : ""
                }`}
              >
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  Participated
                </div>
              </div>
              <div
                onClick={() => setParticipationRate(0)}
                className={`px-[13px] py-2.5 rounded-xl flex justify-center items-center gap-2.5 cursor-pointer ${
                  participationRate === 0 ? "bg-[#34a853]" : ""
                }`}
              >
                <div className="text-white text-sm font-bold font-['Montserrat']">
                  Did Not Participate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 flex-wrap">
        <button
          onClick={updateInjury}
          className="w-[117px] h-[43px] px-[13px] py-2.5 bg-[#34a853] rounded-xl text-white text-sm font-bold font-['Montserrat']"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PlayerInjury;
