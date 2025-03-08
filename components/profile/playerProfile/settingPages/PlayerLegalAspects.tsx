import { getApi, postApi } from "@/libs/axios/backendServer";
import { useAppSelector } from "@/libs/store/hooks";
import { useRouter } from "@/i18n/routing";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";

const PlayerLegalAspects = () => {
  const router = useRouter();
  const [club, setClub] = useState(0);
  const [agent, setAgent] = useState(0);
  const { token } = useAppSelector((state) => state.user);
  const t = useTranslations("settings");
  const [countries, setCountries] = useState<
    [{ id: string; name: string }] | null
  >(null);
  const [clubData, setClubData] = useState({
    country_id: 1,
    club_name: "",
    start_date: "",
    end_date: "",
    contract_value: "",
  });

  // get countries form api
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await getApi("countries");
        setCountries(response.data?.countries);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setClubData({
      ...clubData,
      [e.target.name]: e.target.value,
    });
  };

  const updateLegalAspects = async () => {
    try {
      const res = await postApi(
        "player-profile/legal-aspects",
        {
          club: club,
          agent: agent,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      if (club === 1) {
        await postApi(
          "player-profile/club",
          {
            ...clubData,
          },
          {
            Authorization: `Bearer ${token}`,
          }
        );
      }

      toast.success(t("Legal_Aspects_updated_successfully"));
      console.log(res);
      router.push("/profile");
    } catch (error) {
      toast.error(t("Error_updating_Legal_Aspects"));
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="text-white text-[24px] md:text-[32px] font-extrabold font-['Montserrat']">
        {t("Profile_Settings")}
      </div>

      <div className="min-h-[351px] bg-[#222222] rounded-[25px] border border-[#f1f1f2] overflow-hidden p-8">
        <div className="flex flex-col gap-8">
          <div className="text-white text-lg font-bold font-['Montserrat']">
            {t("Legal_Aspects")}
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                {t("club")}
              </div>
              <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
                <div
                  onClick={() => setClub(1)}
                  className={
                    "px-[13px] py-2.5 rounded-xl cursor-pointer " +
                    (club === 1 ? "bg-[#34a853] rounded-xl" : "")
                  }
                >
                  <div
                    className={`text-white text-sm font-medium font-['Montserrat'] `}
                  >
                    {t("contracted")}
                  </div>
                </div>
                <div
                  onClick={() => setClub(0)}
                  className={
                    "px-[13px] py-2.5 rounded-xl cursor-pointer " +
                    (club === 0 ? "bg-[#34a853] rounded-xl" : "")
                  }
                >
                  <div className="text-white text-sm font-bold font-['Montserrat']">
                    {t("not_contracted")}
                  </div>
                </div>
              </div>
            </div>

            {club === 1 && (
              <div className="flex flex-col gap-5 rounded-[14px] border border-white p-4">
                <div className="flex flex-col gap-2">
                  <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                    {t("clubName")}
                  </div>
                  <div className="p-4 text-white rounded-[14px] border border-white flex flex-wrap gap-2">
                    <input
                      type="text"
                      name="club_name"
                      className="w-full bg-transparent"
                      placeholder={t("clubName")}
                      value={clubData.club_name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                    {t("country")}
                  </div>
                  <div className="p-4 text-white rounded-[14px] border border-white flex flex-wrap gap-2">
                    <select
                      className="w-full bg-transparent"
                      value={clubData.country_id}
                      name="country_id"
                      onChange={handleInputChange}
                    >
                      {countries?.map((country) => (
                        <option
                          className="text-white bg-black"
                          key={country.id}
                          value={country.id}
                        >
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                    {t("start_date")}
                  </div>
                  <div className="p-4 text-white rounded-[14px] border border-white flex flex-wrap gap-2">
                    <input
                      type="date"
                      className="w-full bg-transparent"
                      value={clubData.start_date}
                      name="start_date"
                      onChange={handleInputChange}
                      placeholder={t("start_date")}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                    {t("end_date")}
                  </div>
                  <div className="p-4 text-white rounded-[14px] border border-white flex flex-wrap gap-2">
                    <input
                      type="date"
                      className="w-full bg-transparent"
                      value={clubData.end_date}
                      name="end_date"
                      onChange={handleInputChange}
                      placeholder={t("end_date")}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                    {t("contract_value")}
                  </div>
                  <div className="p-4 text-white rounded-[14px] border border-white flex flex-wrap gap-2">
                    <input
                      type="number"
                      className="w-full bg-transparent"
                      value={clubData.contract_value}
                      name="contract_value"
                      onChange={handleInputChange}
                      placeholder={t("contract_value")}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-5">
              <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                {t("agent")}
              </div>
              <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
                <div
                  onClick={() => setAgent(1)}
                  className={
                    "px-[13px] py-2.5 rounded-xl cursor-pointer " +
                    (agent === 1 ? "bg-[#34a853] rounded-xl" : "")
                  }
                >
                  <div
                    className={`text-white text-sm font-medium font-['Montserrat'] `}
                  >
                    {t("contracted")}
                  </div>
                </div>
                <div
                  onClick={() => setAgent(0)}
                  className={
                    "px-[13px] py-2.5 rounded-xl cursor-pointer " +
                    (agent === 0 ? "bg-[#34a853] rounded-xl" : "")
                  }
                >
                  <div className="text-white text-sm font-bold font-['Montserrat']">
                    {t("not_contracted")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 flex-wrap">
        <button
          onClick={updateLegalAspects}
          className="w-[117px] h-[43px] px-[13px] py-2.5 bg-[#34a853] rounded-xl text-white text-sm font-bold font-['Montserrat']"
        >
          {t("save")}
        </button>
      </div>
    </div>
  );
};

export default PlayerLegalAspects;
