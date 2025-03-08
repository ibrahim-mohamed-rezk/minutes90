"use client";

import { useState } from "react";
import PlayerMainInfo from "./settingPages/PlayerMainInfo";
// import PlayerPhysical from "./settingPages/PlayerPhysical";
import PlayerInjury from "./settingPages/PlayerInjury";
import PlayerSkills from "./settingPages/PlayerSkills";
// import PlayerTacticalPerformance from "./settingPages/PlayerTacticalPerformance";
import PlayerAchievement from "./settingPages/PlayerAchievement";
// import PlayerPenalties from "./settingPages/PlayerPenalties";
import PlayerLegalAspects from "./settingPages/PlayerLegalAspects";
import Settings from "./settingPages/Settings";
import { useTranslations } from "next-intl";

const PlayerProfileSettings = () => {
  const t = useTranslations("settings");
  const [currentOppendSetting, seTCurrentOppendSetting] = useState(
    t("Settings")
  );

  return (
    <div className="flex flex-col md:flex-row w-full items-start justify-start gap-[30px] pt-[48px]">
      {/* left side */}
      <div className="w-full md:w-[300px] flex items-center justify-start flex-col px-[5px] gap-[30px]">
        <div className="w-full h-auto pb-[22px] bg-white rounded-[20px] shadow-md border border-[#f1f1f2] flex-col justify-start items-center gap-[22px] inline-flex">
          <div className="self-stretch p-2.5 bg-[#239d60] rounded-tl-[20px] rounded-tr-[20px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-base md:text-lg font-bold font-['Montserrat']">
              {t("EditprofileSettings")}
            </div>
          </div>
          <div className="self-stretch h-auto flex-col justify-start items-start gap-2 inline-flex overflow-y-auto">
            {[
              t("Settings"),
              t("Main_Information"),
              // t("Player_Injury_Level"),
              // t("Player_Skill_Level"),
              // t("Player_Achievement_Rate"),
              // t("Player_Penalties"),
              t("Legal_Aspects"),
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
        {currentOppendSetting === t("Settings") && <Settings />}
        {currentOppendSetting === t("Main_Information") && (
          <PlayerMainInfo seTCurrentOppendSetting={seTCurrentOppendSetting} />
        )}
        {/* {currentOppendSetting === t("Player's Physical Level") && (
          <PlayerPhysical seTCurrentOppendSetting={seTCurrentOppendSetting}  />
        )} */}
        {currentOppendSetting === t("Player_Injury_Level") && (
          <PlayerInjury seTCurrentOppendSetting={seTCurrentOppendSetting} />
        )}
        {currentOppendSetting === t("Player_Skill_Level") && (
          <PlayerSkills seTCurrentOppendSetting={seTCurrentOppendSetting} />
        )}
        {/* {currentOppendSetting ===
          t("Player's Technical and Tactical Performance") && (
          <PlayerTacticalPerformance seTCurrentOppendSetting={seTCurrentOppendSetting}  />
        )} */}
        {currentOppendSetting === t("Player_Achievement_Rate") && (
          <PlayerAchievement
            seTCurrentOppendSetting={seTCurrentOppendSetting}
          />
        )}
        {/* {currentOppendSetting === t("Player_Penalties") && <PlayerPenalties seTCurrentOppendSetting={seTCurrentOppendSetting}  />} */}
        {currentOppendSetting === t("Legal_Aspects") && <PlayerLegalAspects />}
      </div>
    </div>
  );
};

export default PlayerProfileSettings;
