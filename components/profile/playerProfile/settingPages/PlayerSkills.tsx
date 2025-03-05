"use client";

import { postApi } from "@/libs/axios/backendServer";
import { useAppSelector } from "@/libs/store/hooks";
import { useState } from "react";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";

const PlayerSkills = ({
  seTCurrentOppendSetting,
}: {
  seTCurrentOppendSetting: (value: string) => void;
}) => {
  const t = useTranslations("settings");
  const [headshotAccuracy, setHeadshotAccuracy] = useState(60);
  const [shootAccuracy, setShootAccuracy] = useState(60);
  const [passing, setPassing] = useState(60);
  const [dribbling, setDribbling] = useState(60);
  const [defending, setDefending] = useState(60);
  const { token } = useAppSelector((state) => state.user);
  const [tacticalAwareness, setTacticalAwareness] = useState(60);
  const [physicalFitness, setPhysicalFitness] = useState(60);
  const [sprintSpeed, setSprintSpeed] = useState(60);
  const [endurance, setEndurance] = useState(60);

  const updateSkills = async () => {
    try {
      await postApi(
        "player-profile/skill",
        {
          heading_accuracy: headshotAccuracy,
          passing_accuracy: passing,
          shooting_power: shootAccuracy,
          tactical_awareness: tacticalAwareness,
          physical_fitness: physicalFitness,
          sprint_speed: sprintSpeed,
          endurance_90_min: endurance,
          dribbling: dribbling,
          defending: defending,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      toast.success(t("successMessage"));
      seTCurrentOppendSetting(t("Player_Achievement_Rate"));
    } catch (error) {
      toast.error(t("errorMessage"));
      console.log(error);
    }
  };

  const skillLevels = [
    { title: t("weak"), value: 60 },
    { title: t("average"), value: 70 },
    { title: t("high"), value: 80 },
    { title: t("veryHigh"), value: 90 },
    { title: t("excellent"), value: 100 },
  ];

  const skillFields = [
    {
      name: t("headshotAccuracy"),
      state: headshotAccuracy,
      setState: setHeadshotAccuracy,
    },
    { name: t("passingAccuracy"), state: passing, setState: setPassing },
    {
      name: t("shootingPower"),
      state: shootAccuracy,
      setState: setShootAccuracy,
    },
    {
      name: t("tacticalAwareness"),
      state: tacticalAwareness,
      setState: setTacticalAwareness,
    },
    {
      name: t("physicalFitness"),
      state: physicalFitness,
      setState: setPhysicalFitness,
    },
    { name: t("sprintSpeed"), state: sprintSpeed, setState: setSprintSpeed },
    { name: t("endurance90Minutes"), state: endurance, setState: setEndurance },
    { name: t("dribbling"), state: dribbling, setState: setDribbling },
    { name: t("defending"), state: defending, setState: setDefending },
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="text-white text-[24px] md:text-[32px] font-extrabold font-['Montserrat']">
        {t("profileSettings")}
      </div>

      <div className="relative w-full bg-[#222222] rounded-[25px] border border-[#f1f1f2] overflow-hidden p-6">
        <div className="text-white text-lg font-bold font-['Montserrat'] mb-8">
          {t("playerSkillLevel")}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] w-full">
          {skillFields.map((field, fieldIndex) => (
            <div key={fieldIndex} className="flex flex-col gap-5 w-full">
              <div className="text-[#adadad] text-sm font-medium font-['Montserrat'] leading-snug">
                {field.name}:
              </div>
              <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2 w-full">
                {skillLevels.map((item, index) => (
                  <div
                    key={index}
                    className={`${
                      field.state === item.value
                        ? "bg-[#34a853] rounded-xl"
                        : ""
                    } px-[13px] py-2.5 rounded-xl`}
                    onClick={() => field.setState(item.value)}
                  >
                    <div className="text-white text-sm font-medium font-['Montserrat']">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 flex-wrap">
        <button
          onClick={updateSkills}
          className="w-[117px] h-[43px] px-[13px] py-2.5 bg-[#34a853] rounded-xl text-white text-sm font-bold font-['Montserrat']"
        >
          {t("save")}
        </button>
      </div>
    </div>
  );
};

export default PlayerSkills;
