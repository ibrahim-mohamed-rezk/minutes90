const PlayerMainInfo = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
        <div className="text-white text-[25px] font-extrabold font-['Montserrat']">Main Information</div>

      <div className="min-h-[343px] relative bg-[#222222] rounded-[25px] border border-[#f1f1f2] overflow-hidden p-8">
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="flex flex-col items-center gap-3">
            <img
              className="w-44 h-44 rounded-[30px] border-2 border-[#239d60]"
              src="https://via.placeholder.com/176x176"
              alt="Profile"
            />
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-[18px] h-[18px] relative overflow-hidden"></div>
              <div className="text-[#239d60] text-sm font-medium font-['Montserrat'] capitalize">
                edit profile image
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
              <div className="flex flex-col gap-2">
                <label className="text-white text-xs font-normal font-['Poppins']">
                  First Name
                </label>
                <div className="h-[41px] px-4 py-2 bg-[#0d0d0d] rounded-[9px] border border-[#adadad] flex items-center">
                  <div className="text-white text-sm font-bold font-['Poppins']">
                    Mohamed salah
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white text-xs font-normal font-['Poppins']">
                  Age
                </label>
                <div className="h-[41px] px-4 py-2 bg-[#0d0d0d] rounded-[9px] border border-[#adadad] flex items-center">
                  <input
                    type="text"
                    placeholder="Enter age"
                    className="w-full bg-transparent text-[#808080] text-xs font-light font-['Poppins'] outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white text-xs font-normal font-['Poppins']">
                  Last Name
                </label>
                <div className="h-[41px] px-4 py-2 bg-[#0d0d0d] rounded-[9px] border border-[#adadad] flex items-center">
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full bg-transparent text-[#808080] text-xs font-light font-['Poppins'] outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white text-xs font-normal font-['Poppins']">
                  Weight
                </label>
                <div className="h-[41px] px-4 py-2 bg-[#0d0d0d] rounded-[9px] border border-[#adadad] flex items-center">
                  <input
                    type="text"
                    placeholder="Enter weight"
                    className="w-full bg-transparent text-[#808080] text-xs font-light font-['Poppins'] outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white text-xs font-normal font-['Poppins']">
                  Height
                </label>
                <div className="h-[41px] px-4 py-2 bg-[#0d0d0d] rounded-[9px] border border-[#adadad] flex items-center">
                  <div className="text-white text-sm font-bold font-['Poppins']">
                    180
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white text-xs font-normal font-['Poppins']">
                Country
              </label>
              <div className="h-[41px] px-4 py-2 bg-[#0d0d0d] rounded-[9px] border border-[#adadad] flex items-center">
                <input
                  type="text"
                  placeholder="Select country"
                  className="w-full bg-transparent text-[#808080] text-xs font-light font-['Poppins'] outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[225px] p-4 md:p-8 bg-[#222222] rounded-[25px] border border-[#f1f1f2] overflow-hidden">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-normal font-['Montserrat']">
                Primary Foot:
              </label>
              <div className="h-[41px] px-4 py-2 bg-[#0d0d0d] rounded-[9px] border border-[#adadad] flex items-center">
                <input
                  type="text"
                  placeholder="Select primary foot"
                  className="w-full bg-transparent text-[#808080] text-xs font-light font-['Poppins'] outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-normal font-['Montserrat']">
                Reserve Position:
              </label>
              <div className="h-[41px] px-4 py-2 bg-[#0d0d0d] rounded-[9px] border border-[#adadad] flex items-center">
                <input
                  type="text"
                  placeholder="Select reserve position"
                  className="w-full bg-transparent text-[#808080] text-xs font-light font-['Poppins'] outline-none"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-normal font-['Montserrat']">
                Primary Position:
              </label>
              <div className="h-[41px] px-4 py-2 bg-[#0d0d0d] rounded-[9px] border border-[#adadad] flex items-center">
                <input
                  type="text"
                  placeholder="Select primary position"
                  className="w-full bg-transparent text-[#808080] text-xs font-light font-['Poppins'] outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-normal font-['Montserrat']">
                WhatsApp Number:
              </label>
              <div className="h-[41px] px-4 py-2 bg-[#0d0d0d] rounded-[9px] border border-[#adadad] flex items-center">
                <input
                  type="tel"
                  placeholder="Enter WhatsApp number"
                  className="w-full bg-transparent text-[#808080] text-xs font-light font-['Poppins'] outline-none"
                />
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

export default PlayerMainInfo;
