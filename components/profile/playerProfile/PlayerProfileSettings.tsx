"use client";

import { useState } from "react";
import PlayerMainInfo from "./settingPages/PlayerMainInfo";
import PlayerPhysical from "./settingPages/PlayerPhysical";
import PlayerInjury from "./settingPages/PlayerInjury";
import PlayerSkills from "./settingPages/PlayerSkills";
import PlayerTacticalPerformance from "./settingPages/PlayerTacticalPerformance";
import PlayerAchievement from "./settingPages/PlayerAchievement";
import PlayerPenalties from "./settingPages/PlayerPenalties";
import PlayerLegalAspects from "./settingPages/PlayerLegalAspects";
import Settings from "./settingPages/Settings";

const PlayerProfileSettings = () => {
  const [currentOppendSetting, seTCurrentOppendSetting] =
    useState("Settings");
  return (
    <div className="flex flex-col md:flex-row w-full items-start justify-start gap-[30px] pt-[48px]">
      {/* left side */}
      <div className="w-full md:w-[300px] flex items-center justify-start flex-col gap-[30px]">
        <div className="w-full h-auto md:h-[588px] pb-[22px] bg-white rounded-[20px] shadow-md border border-[#f1f1f2] flex-col justify-start items-center gap-[22px] inline-flex">
          <div className="self-stretch p-2.5 bg-[#239d60] rounded-tl-[20px] rounded-tr-[20px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-base md:text-lg font-bold font-['Montserrat']">
              Edit Player Information
            </div>
          </div>
          <div className="self-stretch h-auto md:h-[504px] flex-col justify-start items-start gap-4 inline-flex overflow-y-auto">
            {[
              "Settings",
              "Main Information",
              "Player's Injury Level",
              "Player's Skill Level",
              "Player Achievement Rate",
              "Player Penalties",
              "Legal Aspects",
            ].map((item, index) => (
              <div
                key={index}
                className="self-stretch min-h-[49px] px-3 md:px-[15px] py-2.5 rounded-[15px] justify-start items-center gap-2.5 inline-flex"
                onClick={() => seTCurrentOppendSetting(item)}
              >
                <div
                  className={`text-[#484848] text-xs md:text-sm font-semibold font-['Montserrat'] w-full p-2 md:p-[15px] rounded-[15px] cursor-pointer break-words ${
                    currentOppendSetting === item ? "bg-[#239D604D]" : ""
                  } `}
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="w-full md:flex-1 flex items-center justify-start flex-col gap-[30px]">
        {currentOppendSetting === "Settings" && <Settings />}
        {currentOppendSetting === "Main Information" && <PlayerMainInfo />}
        {currentOppendSetting === "Player's Physical Level" && (
          <PlayerPhysical />
        )}
        {currentOppendSetting === "Player's Injury Level" && <PlayerInjury />}
        {currentOppendSetting === "Player's Skill Level" && <PlayerSkills />}
        {currentOppendSetting ===
          "Player's Technical and Tactical Performance" && (
          <PlayerTacticalPerformance />
        )}
        {currentOppendSetting === "Player Achievement Rate" && (
          <PlayerAchievement />
        )}
        {currentOppendSetting === "Player Penalties" && <PlayerPenalties />}
        {currentOppendSetting === "Legal Aspects" && <PlayerLegalAspects />}
      </div>
    </div>
  );
};

export default PlayerProfileSettings;
