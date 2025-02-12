const Settings = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="text-white text-[25px] font-extrabold font-['Montserrat']">
        Main Information
      </div>

      {/* account information */}
      <div className="min-h-[343px] relative bg-[#222222] rounded-[25px] border border-[#f1f1f2] overflow-hidden p-8">
        <div className="text-white text-[20px] font-extrabold font-['Montserrat']">
          Account Settings
        </div>

        <div className="min-h-[343px] relative mt-[10px] rounded-[25px] border border-[#f1f1f2] overflow-hidden p-8">
          <div className="flex flex-col gap-2">
            <label className="text-white text-xs font-normal font-['Poppins']">
              Language
            </label>
            <div className="h-[41px] px-4 py-2 bg-[#0d0d0d] rounded-[9px] border border-[#adadad] flex items-center">
              <select className="w-full bg-transparent text-[#808080] text-xs font-light font-['Poppins'] outline-none">
                <option value="EN">English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
