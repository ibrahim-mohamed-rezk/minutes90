const PlayerInjury = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="text-white text-[24px] md:text-[32px] font-extrabold font-['Montserrat']">
        Profile Settings
      </div>

      <div className="h-auto md:h-[615px] relative bg-[#222222] rounded-[25px] border border-[#f1f1f2] overflow-hidden p-[30px] md:p-0">
        <div className="w-full md:w-[442.07px] md:left-[30px] md:top-[30px] md:absolute text-white text-lg font-bold font-['Montserrat']">
          Player&apos;s Injury level
        </div>
        <div className="flex flex-col gap-10 mt-8 md:mt-0 md:h-[484px] md:left-[46px] md:top-[101px] md:absolute md:flex-col md:justify-start md:items-start">
          <div className="flex flex-col gap-5">
            <div className="h-5 text-[#adadad] text-sm font-medium font-['Montserrat']">
              Number of injuries during the season :
            </div>
            <div className="p-1 rounded-[14px] border border-white flex flex-wrap justify-start items-center gap-[26px]">
              <div className="px-[13px] py-2.5 rounded-xl flex justify-center items-center gap-2.5">
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  1
                </div>
              </div>
              <div className="px-[13px] py-2.5 rounded-xl flex justify-center items-center gap-2.5">
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  2
                </div>
              </div>
              <div className="px-[13px] py-2.5 bg-[#34a853] rounded-xl flex justify-center items-center gap-2.5">
                <div className="text-white text-sm font-bold font-['Montserrat']">
                  3
                </div>
              </div>
              <div className="px-[13px] py-2.5 rounded-xl flex justify-center items-center gap-2.5">
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  4
                </div>
              </div>
              <div className="px-[13px] py-2.5 rounded-xl flex justify-center items-center gap-2.5">
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  5
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="h-5 text-[#adadad] text-sm font-medium font-['Montserrat']">
              The type of injury the player is exposed to :
            </div>
            <div className="p-1 rounded-[14px] border border-white flex flex-wrap justify-start items-center gap-[26px]">
              <div className="px-[13px] py-2.5 rounded-xl flex justify-center items-center gap-2.5">
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  Minor Injury
                </div>
              </div>
              <div className="px-[13px] py-2.5 rounded-xl flex justify-center items-center gap-2.5">
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  Moderate Injury
                </div>
              </div>
              <div className="px-[13px] py-2.5 bg-[#34a853] rounded-xl flex justify-center items-center gap-2.5">
                <div className="text-white text-sm font-bold font-['Montserrat']">
                  Surgical Intervention
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="h-5 text-[#adadad] text-sm font-medium font-['Montserrat']">
              The recovery period that the player needs :
            </div>
            <div className="p-1 rounded-[14px] border border-white flex flex-wrap justify-start items-center gap-[26px]">
              <div className="px-[13px] py-2.5 rounded-xl flex justify-center items-center gap-2.5">
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  Less Than a Month
                </div>
              </div>
              <div className="px-[13px] py-2.5 rounded-xl flex justify-center items-center gap-2.5">
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  Less Than 3 Months
                </div>
              </div>
              <div className="px-[13px] py-2.5 bg-[#34a853] rounded-xl flex justify-center items-center gap-2.5">
                <div className="text-white text-sm font-bold font-['Montserrat']">
                  From 3 to 6 Months
                </div>
              </div>
              <div className="px-[13px] py-2.5 rounded-xl flex justify-center items-center gap-2.5">
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  More Than 6 Months
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="h-5 text-[#adadad] text-sm font-medium font-['Montserrat']">
              Participation rate after injury :
            </div>
            <div className="p-1 rounded-[14px] border border-white flex flex-wrap justify-start items-center gap-[26px]">
              <div className="px-[13px] py-2.5 rounded-xl flex justify-center items-center gap-2.5">
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  Participated
                </div>
              </div>
              <div className="px-[13px] py-2.5 bg-[#34a853] rounded-xl flex justify-center items-center gap-2.5">
                <div className="text-white text-sm font-bold font-['Montserrat']">
                  Did Not Participate
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

export default PlayerInjury;
