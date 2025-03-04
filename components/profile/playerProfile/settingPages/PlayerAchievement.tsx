import { postApi } from "@/libs/axios/backendServer";
import { useAppSelector } from "@/libs/store/hooks";
import { useRouter } from "@/i18n/routing";
import { useState } from "react";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";

const PlayerAchievement = () => {
  const [achtype, setAchType] = useState("individual");
  const [achTitle, setActTitle] = useState("");
  const [achDate, setActDate] = useState("");
  const router = useRouter();
  const { token } = useAppSelector((state) => state.user);
  const t = useTranslations("settings");

  const updatePlayerAchievement = async () => {
    try {
      const res = await postApi("player-profile/achievement", {
        type: achtype,
        title: achTitle,
        date: achDate,
      },{
        Authorization: `Bearer ${token}`,
      });

      toast.success(t("achievements_updated_successfully"));
      console.log(res)
      router.push("/profile");
    } catch (error) {
      console.log(error);
      toast.error(t("error_updating_achievements"));
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="text-white text-[24px] md:text-[32px] font-extrabold font-['Montserrat']">
        {t("Profile_Settings")}
      </div>

      <div className="min-h-[505px] bg-[#222222] rounded-[25px] border border-[#f1f1f2] overflow-hidden p-8">
        <div className="flex flex-col gap-8">
          <div className="text-white text-lg font-bold font-['Montserrat']">
            {t("player_achievement_rate")}
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1 flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                  {t("achievement_type")}
                </div>
                <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
                  {["individual", "team", "career"].map((item, index) => (
                    <div
                      key={index}
                      className={`px-[13px] py-2.5 ${
                        item === achtype ? "bg-[#34a853]" : ""
                      } rounded-xl cursor-pointer`}
                      onClick={() => setAchType(item)}
                    >
                      <div className="text-white text-sm font-bold font-['Montserrat']">
                        {t(item)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                  {t("achievement_title")}:
                </div>
                <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
                  <input
                    type="text"
                    placeholder={t("title")}
                    value={achTitle}
                    onChange={(e) => setActTitle(e.target.value)}
                    className="w-full px-[13px] py-2.5 text-white text-sm font-bold font-['Montserrat'] bg-transparent outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                  {t("achievement_date")}:
                </div>
                <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
                  <input
                    type="date"
                    value={achDate}
                    onChange={(e) => setActDate(e.target.value)}
                    className="w-full px-[13px] py-2.5 text-white text-sm font-bold font-['Montserrat'] bg-transparent outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 flex-wrap">
        <button
          onClick={updatePlayerAchievement}
          className="w-[117px] h-[43px] px-[13px] py-2.5 bg-[#34a853] rounded-xl text-white text-sm font-bold font-['Montserrat']"
        >
          {t("save")}
        </button>
      </div>
    </div>
  );
};

export default PlayerAchievement;
