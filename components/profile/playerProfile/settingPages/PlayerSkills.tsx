"use client";

import { postApi } from "@/libs/axios/backendServer";
import { useAppSelector } from "@/libs/store/hooks";
import { useRouter } from "@/i18n/routing";
import { useState } from "react";
import { toast } from "react-toastify";

const PlayerSkills = () => {
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
  const router = useRouter();

  const updateSkills = async () => {
    try {
      const res = await postApi(
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
      toast.success("Skills updated successfully");
      console.log(res)
      router.push("/profile");
    } catch (error) {
      toast.error("Error updating skills");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="text-white text-[24px] md:text-[32px] font-extrabold font-['Montserrat']">
        Profile Settings
      </div>

      <div className="relative w-full bg-[#222222] rounded-[25px] border border-[#f1f1f2] overflow-hidden p-6">
        <div className="text-white text-lg font-bold font-['Montserrat'] mb-8">
          Player&apos;s Skill Level
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] w-full">
          <div className="flex flex-col gap-5 w-full">
            <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
              Headshot accuracy:
            </div>
            <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2 w-full">
              {[
                { title: "Weak", value: 60 },
                { title: "Average", value: 70 },
                { title: "High", value: 80 },
                { title: "Very High", value: 90 },
                { title: "Excellent", value: 100 },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${
                    headshotAccuracy === item.value
                      ? " bg-[#34a853] rounded-xl"
                      : ""
                  } px-[13px] py-2.5 rounded-xl`}
                  onClick={() => setHeadshotAccuracy(item.value)}
                >
                  <div className="text-white text-sm font-medium font-['Montserrat']">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <div className="text-[#adadad] text-sm font-medium font-['Montserrat'] leading-snug">
              Passing Accuracy:
            </div>
            <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2 w-full">
              {[
                { title: "Weak", value: 60 },
                { title: "Average", value: 70 },
                { title: "High", value: 80 },
                { title: "Very High", value: 90 },
                { title: "Excellent", value: 100 },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${
                    passing === item.value ? " bg-[#34a853] rounded-xl" : ""
                  } px-[13px] py-2.5 rounded-xl`}
                  onClick={() => setPassing(item.value)}
                >
                  <div className="text-white text-sm font-medium font-['Montserrat']">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <div className="text-[#adadad] text-sm font-medium font-['Montserrat'] leading-snug">
              Shooting Power:
            </div>
            <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2 w-full">
              {[
                { title: "Weak", value: 60 },
                { title: "Average", value: 70 },
                { title: "High", value: 80 },
                { title: "Very High", value: 90 },
                { title: "Excellent", value: 100 },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${
                    shootAccuracy === item.value
                      ? " bg-[#34a853] rounded-xl"
                      : ""
                  } px-[13px] py-2.5 rounded-xl`}
                  onClick={() => setShootAccuracy(item.value)}
                >
                  <div className="text-white text-sm font-medium font-['Montserrat']">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <div className="text-[#adadad] text-sm font-medium font-['Montserrat'] leading-snug">
              Tactical Awareness:
            </div>
            <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
              {[
                { title: "Weak", value: 60 },
                { title: "Average", value: 70 },
                { title: "High", value: 80 },
                { title: "Very High", value: 90 },
                { title: "Excellent", value: 100 },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${
                    tacticalAwareness === item.value
                      ? " bg-[#34a853] rounded-xl"
                      : ""
                  } px-[13px] py-2.5 rounded-xl`}
                  onClick={() => setTacticalAwareness(item.value)}
                >
                  <div className="text-white text-sm font-medium font-['Montserrat']">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <div className="text-[#adadad] text-sm font-medium font-['Montserrat'] leading-snug">
              Physical Fitness:
            </div>
            <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
              {[
                { title: "Weak", value: 60 },
                { title: "Average", value: 70 },
                { title: "High", value: 80 },
                { title: "Very High", value: 90 },
                { title: "Excellent", value: 100 },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${
                    physicalFitness === item.value
                      ? " bg-[#34a853] rounded-xl"
                      : ""
                  } px-[13px] py-2.5 rounded-xl`}
                  onClick={() => setPhysicalFitness(item.value)}
                >
                  <div className="text-white text-sm font-medium font-['Montserrat']">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <div className="text-[#adadad] text-sm font-medium font-['Montserrat'] leading-snug">
              Sprint Speed:
            </div>
            <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
              {[
                { title: "Weak", value: 60 },
                { title: "Average", value: 70 },
                { title: "High", value: 80 },
                { title: "Very High", value: 90 },
                { title: "Excellent", value: 100 },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${
                    sprintSpeed === item.value ? " bg-[#34a853] rounded-xl" : ""
                  } px-[13px] py-2.5 rounded-xl`}
                  onClick={() => setSprintSpeed(item.value)}
                >
                  <div className="text-white text-sm font-medium font-['Montserrat']">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <div className="text-[#adadad] text-sm font-medium font-['Montserrat'] leading-snug">
              Endurance 90 Minutes:
            </div>
            <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
              {[
                { title: "Weak", value: 60 },
                { title: "Average", value: 70 },
                { title: "High", value: 80 },
                { title: "Very High", value: 90 },
                { title: "Excellent", value: 100 },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${
                    endurance === item.value ? " bg-[#34a853] rounded-xl" : ""
                  } px-[13px] py-2.5 rounded-xl`}
                  onClick={() => setEndurance(item.value)}
                >
                  <div className="text-white text-sm font-medium font-['Montserrat']">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <div className="text-[#adadad] text-sm font-medium font-['Montserrat'] leading-snug">
              Dribbling:
            </div>
            <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
              {[
                { title: "Weak", value: 60 },
                { title: "Average", value: 70 },
                { title: "High", value: 80 },
                { title: "Very High", value: 90 },
                { title: "Excellent", value: 100 },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${
                    dribbling === item.value ? " bg-[#34a853] rounded-xl" : ""
                  } px-[13px] py-2.5 rounded-xl`}
                  onClick={() => setDribbling(item.value)}
                >
                  <div className="text-white text-sm font-medium font-['Montserrat']">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <div className="text-[#adadad] text-sm font-medium font-['Montserrat'] leading-snug">
              Defending:
            </div>
            <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
              {[
                { title: "Weak", value: 60 },
                { title: "Average", value: 70 },
                { title: "High", value: 80 },
                { title: "Very High", value: 90 },
                { title: "Excellent", value: 100 },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${
                    defending === item.value ? " bg-[#34a853] rounded-xl" : ""
                  } px-[13px] py-2.5 rounded-xl`}
                  onClick={() => setDefending(item.value)}
                >
                  <div className="text-white text-sm font-medium font-['Montserrat']">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 flex-wrap">
        <button
          onClick={updateSkills}
          className="w-[117px] h-[43px] px-[13px] py-2.5 bg-[#34a853] rounded-xl text-white text-sm font-bold font-['Montserrat']"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PlayerSkills;
