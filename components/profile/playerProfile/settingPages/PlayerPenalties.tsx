const PlayerPenalties = () => {
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
                  <div className="px-[13px] py-2.5 rounded-xl">
                    <div className="text-white text-sm font-medium font-['Montserrat']">0</div>
                  </div>
                  <div className="px-[13px] py-2.5 bg-[#34a853] rounded-xl">
                    <div className="text-white text-sm font-bold font-['Montserrat']">1</div>
                  </div>
                  <div className="px-[13px] py-2.5 rounded-xl">
                    <div className="text-white text-sm font-medium font-['Montserrat']">2</div>
                  </div>
                  <div className="px-[13px] py-2.5 rounded-xl">
                    <div className="text-white text-sm font-medium font-['Montserrat']">3</div>
                  </div>
                  <div className="px-[13px] py-2.5 rounded-xl">
                    <div className="text-white text-sm font-medium font-['Montserrat']">4</div>
                  </div>
                  <div className="px-[13px] py-2.5 rounded-xl">
                    <div className="text-white text-sm font-medium font-['Montserrat']">More Than 4</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="text-[#eb4335] text-sm font-medium font-['Montserrat']">
                  Red Cards
                </div>
                <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-2">
                  <div className="px-[13px] py-2.5 rounded-xl">
                    <div className="text-white text-sm font-medium font-['Montserrat']">0</div>
                  </div>
                  <div className="px-[13px] py-2.5 bg-[#34a853] rounded-xl">
                    <div className="text-white text-sm font-bold font-['Montserrat']">1</div>
                  </div>
                  <div className="px-[13px] py-2.5 rounded-xl">
                    <div className="text-white text-sm font-medium font-['Montserrat']">2</div>
                  </div>
                  <div className="px-[13px] py-2.5 rounded-xl">
                    <div className="text-white text-sm font-medium font-['Montserrat']">More Than 2</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="text-[#adadad] text-sm font-medium font-['Montserrat']">
                  Club Suspension
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
                  Federation Suspension
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

export default PlayerPenalties;