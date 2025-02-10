import { postApi } from "@/libs/axios/backendServer";
import { useAppSelector } from "@/libs/store/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const PlayerLegalAspects = () => {
  const router = useRouter();
  const [club, setClub] = useState(0);
  const [agent, setAgent] = useState(0);
  const { token } = useAppSelector((state) => state.user);

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
      toast.success("Legal Aspects updated successfully");
      console.log(res)
      router.push("/profile");
    } catch (error) {
      toast.error("Error updating Legal Aspects");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="text-white text-[24px] md:text-[32px] font-extrabold font-['Montserrat']">
        Profile Settings
      </div>

      <div className="min-h-[351px] bg-[#222222] rounded-[25px] border border-[#f1f1f2] overflow-hidden p-8">
        <div className="flex flex-col gap-8">
          <div className="text-white text-lg font-bold font-['Montserrat']">
            Legal Aspects
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                Club
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
                    Contracted
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
                    Not Contracted
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                Player Agent
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
                    Contracted
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
                    Not Contracted
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
          Save
        </button>
      </div>
    </div>
  );
};

export default PlayerLegalAspects;
