import { postApi } from "@/libs/axios/backendServer";
import { useAppSelector } from "@/libs/store/hooks";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";

const PlayerPenalties = () => {
  const { token } = useAppSelector((state) => state.user);
  const router = useRouter();
  const [yellowCards, setYellowCards] = useState(0);
  const [redCards, setRedCards] = useState(0);
  const [leagueSuspension, setLeagueSuspension] = useState(false);
  const [clubSuspension, setClubSuspension] = useState(false);
  const [dateSuspension, setDateSuspension] = useState("");

  const updatePenalties = async () => {
    try {
      const res = await postApi(
        "player-profile/disciplines",
        {
          yellow_cards: yellowCards,
          red_cards: redCards,
          league_suspension: leagueSuspension,
          club_suspension: clubSuspension,
          date_suspension: dateSuspension,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      toast.success("Penalties updated successfully");
      console.log(res)
      router.push("/profile");
    } catch (error) {
      toast.error("Error updating Penalties");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="text-white text-[24px] md:text-[32px] font-extrabold font-['Montserrat']">
        Profile Settings
      </div>

      <div className="min-h-[353px] relative bg-[#222222] rounded-[25px] border border-[#f1f1f2] overflow-hidden p-8">
        <div className="flex flex-col gap-8">
          <div className="text-white text-lg font-bold font-['Montserrat']">
            Player Penalties
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="text-[#ffd016] text-sm font-medium font-['Montserrat']">
                  Yellow Cards
                </div>
                <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
                  {Array.from({ length: 6 }, (_, i) => i).map((item) => (
                    <div
                      key={item}
                      className={`px-[13px] py-2.5 ${
                        item === yellowCards ? "bg-[#34a853]" : ""
                      } rounded-xl`}
                      onClick={() => setYellowCards(item)}
                    >
                      <div className="text-white text-sm font-bold font-['Montserrat']">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="text-[#eb4335] text-sm font-medium font-['Montserrat']">
                  Red Cards
                </div>
                <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
                  {Array.from({ length: 6 }, (_, i) => i).map((item) => (
                    <div
                      key={item}
                      className={`px-[13px] py-2.5 ${
                        item === redCards ? "bg-[#34a853]" : ""
                      } rounded-xl`}
                      onClick={() => setRedCards(item)}
                    >
                      <div className="text-white text-sm font-bold font-['Montserrat']">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                  Suspension Date
                </div>
                <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
                  <input
                    type="date"
                    value={dateSuspension}
                    onChange={(e) => setDateSuspension(e.target.value)}
                    className={
                      "px-[13px] py-2.5 bg-transparent w-full rounded-xl text-white text-sm font-bold font-['Montserrat']"
                    }
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                  League Suspension
                </div>
                <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
                  <div
                    onClick={() => setLeagueSuspension(true)}
                    className={
                      "px-[13px] py-2.5 " +
                      (leagueSuspension ? "bg-[#34a853]" : "") +
                      " rounded-xl"
                    }
                  >
                    <div className="text-white text-sm font-bold font-['Montserrat']">
                      Yes
                    </div>
                  </div>
                  <div
                    onClick={() => setLeagueSuspension(false)}
                    className={
                      "px-[13px] py-2.5 " +
                      (!leagueSuspension ? "bg-[#34a853]" : "") +
                      " rounded-xl"
                    }
                  >
                    <div className="text-white text-sm font-medium font-['Montserrat']">
                      No
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                  Club Suspension
                </div>
                <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
                  <div
                    onClick={() => setClubSuspension(true)}
                    className={
                      "px-[13px] py-2.5 " +
                      (clubSuspension ? "bg-[#34a853]" : "") +
                      " rounded-xl"
                    }
                  >
                    <div className="text-white text-sm font-bold font-['Montserrat']">
                      Yes
                    </div>
                  </div>
                  <div
                    onClick={() => setClubSuspension(false)}
                    className={
                      "px-[13px] py-2.5 " +
                      (!clubSuspension ? "bg-[#34a853]" : "") +
                      " rounded-xl"
                    }
                  >
                    <div className="text-white text-sm font-medium font-['Montserrat']">
                      No
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 flex-wrap">
        <button
          onClick={updatePenalties}
          className="w-[117px] h-[43px] px-[13px] py-2.5 bg-[#34a853] rounded-xl text-white text-sm font-bold font-['Montserrat']"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PlayerPenalties;
