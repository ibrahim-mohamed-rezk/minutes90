"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useAppSelector } from "@/libs/store/hooks";
import { postApi } from "@/libs/axios/backendServer";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const PlayerInjury = () => {
  const [injuryType, setInjuryType] = useState("muscle");
  const [injurySeverity, setInjurySeverity] = useState("minor");
  const [recoveryPeriod, setRecoveryPeriod] = useState("less than a month");
  const [participationRate, setParticipationRate] = useState(1);
  const { token } = useAppSelector((state) => state.user);
  const router = useRouter();
  const t = useTranslations("settings");

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
      console.log(res);
    } catch (error) {
      toast.error("Error updating injury");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full px-[5px] md:px-0">
      <div className="text-white text-[24px] md:text-[32px] font-extrabold font-['Montserrat']">
        {t("Profile_Settings")}
      </div>

      <div className="h-auto md:h-[615px] flex flex-col items-start justify-center relative bg-[#222222] rounded-[25px] border border-[#f1f1f2] overflow-hidden md:p-0">
        <div className="flex flex-col gap-6 w-full h-full p-8">
          <div className="text-white text-lg font-bold font-['Montserrat']">
            {t("Player_Injury_Level")}
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                {t("injury_type")}
              </div>
              <div className="flex flex-wrap gap-4 p-1 rounded-[14px] border border-white">
                {[
                  { label: t("muscle"), value: "muscle" },
                  { label: t("ligament"), value: "ligament" },
                  { label: t("fracture"), value: "fracture" },
                  { label: t("concussion"), value: "concussion" },
                  { label: t("other"), value: "other" },
                ].map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setInjuryType(item.value)}
                    className={`px-4 py-2.5 rounded-xl cursor-pointer ${
                      injuryType === item.value ? "bg-[#34a853]" : ""
                    }`}
                  >
                    <div className="text-white text-sm font-bold font-['Montserrat']">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                {t("injury_severity")}
              </div>
              <div className="flex flex-wrap gap-4 p-1 rounded-[14px] border border-white">
                {[
                  { label: t("minor"), value: "minor" },
                  { label: t("moderate"), value: "moderate" },
                  { label: t("severe"), value: "severe" },
                ].map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setInjurySeverity(item.value)}
                    className={`px-4 py-2.5 rounded-xl cursor-pointer ${
                      injurySeverity === item.value ? "bg-[#34a853]" : ""
                    }`}
                  >
                    <div className="text-white text-sm font-medium font-['Montserrat']">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                {t("recovery_period")}
              </div>
              <div className="flex flex-wrap gap-4 p-1 rounded-[14px] border border-white">
                {[
                  t("less_than_a_month"),
                  t("from_3_to_6_months"),
                  t("more_than_6_months"),
                ].map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setRecoveryPeriod(item)}
                    className={`px-4 py-2.5 rounded-xl cursor-pointer ${
                      recoveryPeriod === item ? "bg-[#34a853]" : ""
                    }`}
                  >
                    <div className="text-white text-sm font-medium font-['Montserrat']">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                {t("participation_rate")}
              </div>
              <div className="flex flex-wrap gap-4 p-1 rounded-[14px] border border-white">
                <div
                  onClick={() => setParticipationRate(1)}
                  className={`px-4 py-2.5 rounded-xl cursor-pointer ${
                    participationRate === 1 ? "bg-[#34a853]" : ""
                  }`}
                >
                  <div className="text-white text-sm font-medium font-['Montserrat']">
                    {t("participated")}
                  </div>
                </div>
                <div
                  onClick={() => setParticipationRate(0)}
                  className={`px-4 py-2.5 rounded-xl cursor-pointer ${
                    participationRate === 0 ? "bg-[#34a853]" : ""
                  }`}
                >
                  <div className="text-white text-sm font-bold font-['Montserrat']">
                    {t("did_not_participate")}
                  </div>
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
          {t("save")}
        </button>
      </div>
    </div>
  );
};

export default PlayerInjury;
