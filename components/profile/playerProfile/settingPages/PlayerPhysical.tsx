const PlayerPhysical = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="text-white text-[25px] md:text-[32px] font-extrabold font-['Montserrat']">
        Profile Settings 
      </div>

      <div className="min-h-[536px] bg-[#222222] rounded-[25px] border border-[#f1f1f2] overflow-hidden p-6 md:p-8">
        <div className="text-white text-lg font-bold font-['Montserrat'] mb-8">
          Player&apos;s physical level
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <div className="text-[#adadad] text-base font-semibold font-['Montserrat'] leading-snug">
              Running level in 90 minutes :
            </div>
            <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-3">
              <div className="p-2.5 bg-[#34a853] rounded-xl flex items-center">
                <div className="text-white text-sm font-bold font-['Montserrat']">
                  Less Than 5 km
                </div>
              </div>
              <div className="p-2.5 rounded-xl flex items-center">
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  Less Than 6 km
                </div>
              </div>
              <div className="p-2.5 rounded-xl flex items-center">
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  Less Than 7 km
                </div>
              </div>
              <div className="p-2.5 rounded-xl flex items-center">
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  Less Than 8 km
                </div>
              </div>
              <div className="p-2.5 rounded-xl flex items-center">
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  More Than 8 km
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="text-[#adadad] text-base font-semibold font-['Montserrat'] leading-snug">
              Physical Duels Strength
            </div>
            <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-3">
              <div className="p-2.5 rounded-xl flex items-center">
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  Weak
                </div>
              </div>
              <div className="p-2.5 rounded-xl flex items-center">
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  Average
                </div>
              </div>
              <div className="p-2.5 bg-[#34a853] rounded-xl flex items-center">
                <div className="text-white text-sm font-bold font-['Montserrat']">
                  Strong
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="text-[#adadad] text-base font-semibold font-['Montserrat'] leading-snug">
              Player&apos;s Physical Condition
            </div>
            <div className="p-1 rounded-[14px] border border-white flex flex-wrap gap-3">
              <div className="p-2.5 rounded-xl flex items-center">
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  50%
                </div>
              </div>
              <div className="p-2.5 rounded-xl flex items-center">
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  60%
                </div>
              </div>
              <div className="p-2.5 bg-[#34a853] rounded-xl flex items-center">
                <div className="text-white text-sm font-bold font-['Montserrat']">
                  70%
                </div>
              </div>
              <div className="p-2.5 rounded-xl flex items-center">
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  80%
                </div>
              </div>
              <div className="p-2.5 rounded-xl flex items-center">
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  90%
                </div>
              </div>
              <div className="p-2.5 rounded-xl flex items-center">
                <div className="text-white text-sm font-medium font-['Montserrat']">
                  95%
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

export default PlayerPhysical;
