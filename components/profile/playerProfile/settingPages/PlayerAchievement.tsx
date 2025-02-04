const PlayerAchievement = () => {
  

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="text-white text-[24px] md:text-[32px] font-extrabold font-['Montserrat']">
        Profile Settings
      </div>

      <div className="min-h-[505px] bg-[#222222] rounded-[25px] border border-[#f1f1f2] overflow-hidden p-8">
        <div className="flex flex-col gap-8">
          <div className="text-white text-lg font-bold font-['Montserrat']">
            Player Achievement Rate
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1 flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                  Local Championships with the Club
                </div>
                <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
                  <div className="px-[13px] py-2.5 bg-[#34a853] rounded-xl">
                    <div className="text-white text-sm font-bold font-['Montserrat']">Yes</div>
                  </div>
                  <div className="px-[13px] py-2.5 rounded-xl">
                    <div className="text-white text-sm font-medium font-['Montserrat']">No</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                  Continental Championships with the National Team or Club
                </div>
                <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
                  <div className="px-[13px] py-2.5 bg-[#34a853] rounded-xl">
                    <div className="text-white text-sm font-bold font-['Montserrat']">Yes</div>
                  </div>
                  <div className="px-[13px] py-2.5 rounded-xl">
                    <div className="text-white text-sm font-medium font-['Montserrat']">No</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                  The Player Won International Championships with Their Club or National Team
                </div>
                <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
                  <div className="px-[13px] py-2.5 bg-[#34a853] rounded-xl">
                    <div className="text-white text-sm font-bold font-['Montserrat']">Yes</div>
                  </div>
                  <div className="px-[13px] py-2.5 rounded-xl">
                    <div className="text-white text-sm font-medium font-['Montserrat']">No</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                  International Championships with the Club or National Team
                </div>
                <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
                  <div className="px-[13px] py-2.5 bg-[#34a853] rounded-xl">
                    <div className="text-white text-sm font-bold font-['Montserrat']">Yes</div>
                  </div>
                  <div className="px-[13px] py-2.5 rounded-xl">
                    <div className="text-white text-sm font-medium font-['Montserrat']">No</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                  The Player Won International Championships with Their
                </div>
                <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
                  <div className="px-[13px] py-2.5 bg-[#34a853] rounded-xl">
                    <div className="text-white text-sm font-bold font-['Montserrat']">Yes</div>
                  </div>
                  <div className="px-[13px] py-2.5 rounded-xl">
                    <div className="text-white text-sm font-medium font-['Montserrat']">No</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                  International Championships with the Club or National Team
                </div>
                <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
                  <div className="px-[13px] py-2.5 bg-[#34a853] rounded-xl">
                    <div className="text-white text-sm font-bold font-['Montserrat']">Yes</div>
                  </div>
                  <div className="px-[13px] py-2.5 rounded-xl">
                    <div className="text-white text-sm font-medium font-['Montserrat']">No</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 flex-wrap">
        <button className="w-[117px] h-[43px] px-[13px] py-2.5 bg-[#34a853] rounded-xl text-white text-sm font-bold font-['Montserrat']">
          Save
        </button>
        <button className="w-[117px] h-[43px] px-[13px] py-2.5 bg-[#d93044] rounded-xl text-white text-sm font-bold font-['Montserrat']">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PlayerAchievement;