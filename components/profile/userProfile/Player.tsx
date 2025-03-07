"use client";

import { getApi } from "@/libs/axios/backendServer";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface PlayerData {
  id: number;
  email: string;
  phone: string;
  role: string;
  image: string;
  name: string;
  first_name: string;
  last_name: string;

  country: {
    name: string;
    id: number;
  };

  governorate: {
    name: string;
    id: number;
  };

  player: {
    id: number;
    name: string;
    birth_date: string | undefined;
    height_cm: number;
    weight_kg: number;
    agent: boolean;
    is_agent_contracted: boolean;
    is_club_contracted: boolean;
    team: string;
    main_position: string;
    second_position: string;
    primary_foot: string;

    injuries: [
      {
        injury_type: string;
        injury_severity: string;
        recovery_time: string;
        returned_to_play: boolean;
        number_of_injuries: number;
      }
    ];

    skills: [
      {
        endurance_90_min: number;
        heading_accuracy: number;
        passing_accuracy: number;
        physical_fitness: number;
        shooting_power: number;
        sprint_speed: number;
        tactical_awareness: number;
      }
    ];

    achievement: {
      age: number;
      height: number;
      weight: number;
      team: string;
    };

    penalties: {
      number_of_penalties: number;
      total_minutes: number;
    };

    legal_aspects: {
      suspended: boolean;
      date: string;
    };
  };
}

const Player = () => {
  const [data, setData] = useState<PlayerData | null>(null);
  const t = useTranslations("player_profile");
  const { playerId } = useParams();

  // get player profile data from backend
  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await getApi(`players/${playerId}`);
        setData(res.data?.user);
      } catch (error) {
        console.log(error);
      }
    };

    getProfile();
  }, []);

  // calculate age from birth_date
  const calculateAge = (birthDate: string | undefined) => {
    if (!birthDate) return "unknown";

    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }
    return age;
  };

  // function to get skill level
  const getSkillLevel = (value: string): number => {
    switch (value) {
      case "Weak":
        return 1;
      case "Average":
        return 2;
      case "High":
        return 3;
      case "Very high":
        return 4;
      case "Excellent":
        return 5;
      default:
        return 0;
    }
  };

  // function to get skill level name
  const getSkillLevelName = (value: number | undefined): string => {
    if (!value) return "";
    if (value >= 50 && value < 60) {
      return "Weak";
    } else if (value >= 60 && value < 70) {
      return "Average";
    } else if (value >= 70 && value < 80) {
      return "High";
    } else if (value >= 80 && value < 90) {
      return "Very high";
    } else if (value >= 90) {
      return "Excellent";
    } else {
      return "";
    }
  };

  return (
    <div className="flex flex-col pt-[48px] md:flex-row w-full items-start justify-start gap-[30px] p-[10px]">
      {/* left side */}
      <div className="w-full md:w-[20%] flex items-center justify-start flex-col gap-[30px]">
        {/* user image */}
        <div className="relative w-44 md:w-full  h-44 md:h-[306px] rounded-[30px] border-2 border-[#239d60]">
          <img
            src={data?.image}
            alt="Profile"
            className="rounded-[30px] w-full h-full"
          />
        </div>

        {/* main info */}
        <div className="w-full md:w-[306px] flex flex-col gap-4 bg-[#1e1f1f] rounded-[30px] border border-[#f1f1f2] p-4">
          <div className="flex items-start justify-start gap-[10px]">
            <div className="text-white text-sm font-normal font-['Montserrat']">
              {t("age")}:
            </div>
            <div className="text-white text-base font-bold font-['Montserrat']">
              {calculateAge(data?.player?.birth_date)} years
            </div>
          </div>

          <div className="flex items-start justify-start gap-[10px]">
            <div className="text-white text-sm font-normal font-['Montserrat']">
              {t("height")}
            </div>
            <div className="text-white text-base font-bold font-['Montserrat']">
              {data?.player?.height_cm} cm
            </div>
          </div>

          <div className="flex items-start justify-start gap-[10px]">
            <div className="text-white text-sm font-normal font-['Montserrat']">
              {t("weight")}
            </div>
            <div className="text-white text-base font-bold font-['Montserrat']">
              {data?.player?.weight_kg} kg
            </div>
          </div>

          <div className="flex items-start justify-start gap-[10px]">
            <div className="text-white text-sm font-normal font-['Montserrat']">
              {t("country")}
            </div>
            <div className="text-white text-base font-bold font-['Montserrat']">
              {data?.country?.name}
            </div>
          </div>

          <div className="flex items-start justify-start gap-[10px]">
            <div className="text-white text-sm font-normal font-['Montserrat']">
              {t("primary_foot")}
            </div>
            <div className="text-white w-[50px] h-[24px] border border-[#f1f1f2] rounded-[17px] text-center bg-[#515151] text-base font-bold font-['Montserrat']">
              {data?.player?.primary_foot === "left" ? "L" : "R"}
            </div>
          </div>

          <div className="flex items-start justify-start gap-[10px]">
            <div className="text-white text-sm font-normal font-['Montserrat']">
              {t("position")}
            </div>
            <div className="text-white text-base bg-[#EB4335] w-[41px] h-[24px] rounded-[6px] text-center font-bold font-['Montserrat']">
              {data?.player?.main_position}
            </div>
          </div>

          <div className="flex items-start justify-start gap-[10px]">
            <div className="text-white text-sm font-normal font-['Montserrat']">
              Position:
            </div>
            <div className="text-white text-base bg-[#EB4335] w-[41px] h-[24px] rounded-[6px] text-center font-bold font-['Montserrat']">
              {data?.player?.second_position}
            </div>
          </div>
        </div>

        {/* Legal Aspects */}
        <div className="w-full md:w-[306px] bg-[#1e1f1f] rounded-[30px] border border-[#f1f1f2] p-4">
          <div className=" text-white text-lg font-bold font-['Montserrat']">
            {t("legal_aspects")}
          </div>
          <div className="flex flex-col gap-[20px] px-[5px] mt-[20px]">
            <div className="flex flex-col">
              <span className="text-white text-sm font-normal font-['Montserrat'] uppercase">
                {t("with_club")}
              </span>
              <div className="text-white mt-[10px] text-base font-bold font-['Montserrat'] uppercase">
                {data?.player?.is_club_contracted
                  ? t("contracted_with_the_agent")
                  : t("not_contracted_with_the_agent")}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm font-normal font-['Montserrat'] capitalize">
                {t("with_player_agent")}
              </span>
              <div className="text-white mt-[10px] text-base font-bold font-['Montserrat'] uppercase">
                {data?.player?.is_agent_contracted
                  ? t("contracted_with_a_player_agent")
                  : t("not_contracted_with_a_player_agent")}
              </div>
            </div>
          </div>
        </div>

        {/* socials */}
        {/* <div className="w-full md:w-[306px] h-auto md:h-[260px] px-[21px] py-[30px] bg-[#1e1f1f] rounded-[30px] border border-[#f1f1f2] flex flex-col justify-center items-center">
          <div className="flex flex-col gap-[15px] w-full">
            {["LinkedIn", "Facebook", "Twitter", "WhatsApp"].map(
              (platform, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center w-full"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-[35px] h-[35px] relative">
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
        </div> */}
      </div>

      {/* right side */}
      <div className="w-full md:w-[80%] flex items-center justify-start flex-col gap-[30px]">
        {/* name and position */}
        <div className="w-full flex items-center justify-between pt-[20px] flex-wrap">
          <div className="flex items-center justify-center gap-[20px] mb-4 md:mb-0">
            <h3 className="text-white text-2xl md:text-3xl font-black font-['Montserrat']">
              {data?.name}
            </h3>
            <div className="h-[36.83px] px-[18px] py-[3.92px] bg-[#eb4335] rounded-xl flex items-center">
              <div className="text-white text-xl md:text-2xl font-black font-['Montserrat']">
                {data?.player?.main_position}
              </div>
            </div>
          </div>
        </div>

        {/* level and statistic */}
        <div className="w-full p-4 md:p-6 bg-[#1e1f1f] flex flex-col md:flex-row items-stretch justify-center gap-[30px] rounded-[30px] border border-[#f1f1f2]">
          {/* physical level */}
          <div className="w-full md:w-1/2">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h3 className="text-white text-base md:text-lg font-bold font-['Montserrat']">
                {t("players_physical_level")}
              </h3>
              <span className="text-white text-base md:text-lg font-bold font-['Montserrat']">
                99
              </span>
            </div>

            <div className="space-y-6 md:space-y-8">
              {[
                {
                  label: t("running_level_in_90_minutes"),
                  value: "5.2 km",
                  width: "38%",
                  scale: ["5 km", "6 km", "7 km", "8 km", "9 km"],
                },
                {
                  label: t("stamina_level"),
                  value: "average",
                  width: "50%",
                  scale: ["weak", "strong"],
                },
                {
                  label: t("player_physical_condition"),
                  value: "70%",
                  width: "70%",
                  scale: ["0%", "100%"],
                },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[#adadad] text-xs md:text-sm font-medium font-['Montserrat']">
                      {item.label}
                    </span>
                    <span className="text-white text-sm md:text-base font-bold font-['Montserrat']">
                      {item.value}
                    </span>
                  </div>
                  <div className="relative h-1 bg-white/20 rounded-full">
                    <div
                      className="absolute h-full bg-[#00ff7f] rounded-full"
                      style={{ width: item.width }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-white text-xs md:text-sm font-normal font-['Montserrat']">
                    {item.scale.map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block border border-[#4B4C4C]"></div>

          {/* injury */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h3 className="text-white text-base md:text-lg font-bold font-['Montserrat']">
                {t("player_injury_history")}
              </h3>
              <span className="text-white text-base md:text-lg font-bold font-['Montserrat']">
                99
              </span>
            </div>

            <div className="flex-col w-full justify-start items-start gap-6 md:gap-10 inline-flex">
              <div className="flex flex-col gap-4 md:gap-6 w-full">
                {[
                  {
                    label: t("number_of_injuries_during_the_season"),
                    value: data?.player?.injuries[0]?.number_of_injuries || 0,
                  },
                  {
                    label: t("type_of_injury"),
                    value: data?.player?.injuries[0]?.injury_type || "N/A",
                  },
                  {
                    label: t("recovery_period"),
                    value: data?.player?.injuries[0]?.recovery_time || "N/A",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-start gap-[15px] items-center"
                  >
                    <div className="text-[#adadad] text-xs md:text-sm font-medium font-['Montserrat']">
                      {item.label}
                    </div>
                    <div className="text-white text-sm md:text-base font-bold font-['Montserrat']">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 w-full">
                <div className="flex justify-start w-full gap-[15px] items-center">
                  <span className="text-[#adadad] text-xs md:text-sm font-medium font-['Montserrat']">
                    {t("player_condition")}
                  </span>
                  <span className="text-white text-sm md:text-base font-bold font-['Montserrat']">
                    70%
                  </span>
                </div>
                <div className="relative h-1 bg-white/20 rounded-full">
                  <div className="absolute h-full w-[70%] bg-[#00ff7f] rounded-full"></div>
                </div>
                <div className="flex justify-between text-white text-xs md:text-sm font-normal font-['Montserrat']">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* skills and heatmap */}
        <div className="w-full flex flex-col md:flex-row gap-[30px]">
          {/* skills */}
          <div className="w-full md:w-[860px] bg-[#1e1f1f] rounded-[30px] border border-[#f1f1f2] p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white text-lg font-bold font-['Montserrat']">
                {t("player_skill_level")}
              </h3>
              <span className="text-white text-lg font-bold font-['Montserrat']">
                99
              </span>
            </div>
            <div className="space-y-6">
              {[
                {
                  label: t("heading_accuracy"),
                  value: getSkillLevelName(
                    data?.player?.skills[0]?.heading_accuracy
                  ),
                },
                {
                  label: t("passing_accuracy"),
                  value: getSkillLevelName(
                    data?.player?.skills[0]?.passing_accuracy
                  ),
                },
                {
                  label: t("shooting_power"),
                  value: getSkillLevelName(
                    data?.player?.skills[0]?.shooting_power
                  ),
                },
                {
                  label: t("tactical_awareness"),
                  value: getSkillLevelName(
                    data?.player?.skills[0]?.tactical_awareness
                  ),
                },
                {
                  label: t("basic_physical_skills"),
                  value: getSkillLevelName(
                    data?.player?.skills[0]?.physical_fitness
                  ),
                },
                {
                  label: t("endurance"),
                  value: getSkillLevelName(
                    data?.player?.skills[0]?.endurance_90_min
                  ),
                },
                {
                  label: t("sprint_speed"),
                  value: getSkillLevelName(
                    data?.player?.skills[0]?.sprint_speed
                  ),
                },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-[#adadad] text-sm font-medium font-['Montserrat'] w-2/3">
                    {item.label}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-white text-base font-bold font-['Montserrat']">
                      {item.value}
                    </span>
                    {Array.from({ length: getSkillLevel(item.value) }).map(
                      (_, index) => {
                        if (index === 4)
                          return (
                            <svg
                              key={index}
                              width="19"
                              height="20"
                              viewBox="0 0 19 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M11.8243 7.55977L15.6041 7.88777C16.2914 7.94244 16.5647 8.80149 16.0415 9.25444L13.1754 11.7379L14.0344 15.4318C14.1906 16.1034 13.4643 16.6344 12.8708 16.2752L9.62984 14.315L6.38889 16.2674C5.79537 16.6266 5.06908 16.0956 5.22527 15.424L6.08432 11.7379L3.21822 9.25444C2.69498 8.80149 2.97613 7.94244 3.66337 7.88777L7.43537 7.56758L8.91137 4.08454C9.17689 3.45196 10.0828 3.45196 10.3483 4.08454L11.8243 7.55977ZM9.63036 5.59204V12.8549L12.5745 14.6355L11.7936 11.293L14.3864 9.04385L10.9658 8.74709L9.63036 5.59204Z"
                                fill="#FFD130"
                              />
                            </svg>
                          );

                        return (
                          <div key={index}>
                            <svg
                              width="19"
                              height="20"
                              viewBox="0 0 19 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.45601 14.3104L12.697 16.2706C13.2905 16.6298 14.0168 16.0988 13.8606 15.4271L13.0015 11.741L15.8676 9.25761C16.3909 8.80466 16.1097 7.94561 15.4225 7.89095L11.6505 7.57076L10.1745 4.08771C9.90897 3.45514 9.00306 3.45514 8.73754 4.08771L7.26154 7.56295L3.48954 7.88314C2.8023 7.93781 2.52116 8.79685 3.04439 9.24981L5.91049 11.7332L5.05144 15.4193C4.89525 16.0909 5.62154 16.622 6.21506 16.2628L9.45601 14.3104Z"
                                fill="#FFD130"
                              />
                            </svg>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Heatmap */}
          <div className="w-full md:w-[294px] h-[407px] px-2.5 py-3.5 bg-[#1e1f1f] rounded-[15px] border border-[#f1f1f2] justify-center items-center gap-2.5 inline-flex">
            <div className="w-full h-full relative">
              <img
                className="w-full h-full absolute rounded-[15px] object-cover"
                src="/images/profile/playground.png"
                alt="Heatmap"
              />
              {/* Position indicators */}
              {[
                { pos: "CB", left: "28%", top: "77%" },
                { pos: "LB", left: "7%", top: "67%" },
                { pos: "RB", left: "79%", top: "67%" },
                { pos: "GK", left: "43%", top: "90%" },
                { pos: "CB", left: "60%", top: "77%" },
                { pos: "DM", left: "43%", top: "56%" },
                { pos: "CM", left: "63%", top: "35%" },
                { pos: "CM", left: "21%", top: "35%" },
                { pos: "LW", left: "14%", top: "12%" },
                { pos: "CF", left: "43%", top: "6%" },
                { pos: "RW", left: "73%", top: "12%" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`w-[36.45px] h-[36.45px] absolute  ${
                    data?.player?.main_position?.toUpperCase() === item.pos
                      ? "bg-[#eb4335]"
                      : data?.player?.second_position?.toUpperCase() ===
                        item.pos
                      ? "bg-[#FBBC05]"
                      : "bg-[#239d60] opacity-20"
                  } rounded-full flex items-center justify-center`}
                  style={{ left: item.left, top: item.top }}
                >
                  <div className="text-white text-xs font-extrabold font-['Inter'] uppercase">
                    {item.pos}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
