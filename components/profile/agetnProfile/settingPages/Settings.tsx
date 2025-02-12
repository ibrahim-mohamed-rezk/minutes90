"use client";

const Settings = () => {
  return (
    <div className="container mx-auto pt-[50px]">
      <div className="flex w-full flex-col space-y-6 p-4">
        {/* account information */}
        <div className="bg-[#222222] rounded-[25px] border border-[#f1f1f2] overflow-hidden p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6">
            <div className="flex flex-col items-center space-y-3">
              <img
                className="w-44 h-44 rounded-[30px] border-2 border-[#239d60]"
                src="https://placehold.co/176x176"
                alt="Profile"
              />
              <div className="flex items-center space-x-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25 15.7501V12.5626L13.2188 1.63135L16.35 4.8376L5.4375 15.7501H2.25ZM13.2 5.8501L14.25 4.8001L13.2 3.7501L12.15 4.8001L13.2 5.8501Z"
                    fill="#239D60"
                  />
                </svg>
                <span className="text-[#239d60] text-sm font-medium font-['Montserrat'] capitalize">
                  edit profile image
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-grow">
              {[
                "First Name",
                "License ID",
                "Last Name",
                "License Expiry",
                "Agent Code",
                "WhatsApp Number",
                "Nationality",
                "Language",
              ].map((label, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  <label className="text-white text-xs font-normal font-['Poppins']">
                    {label}
                  </label>
                  <input
                    type="text"
                    className="bg-[#0d0d0d] text-white rounded-[9px] border border-[#adadad] p-2 text-sm"
                    placeholder="Enter value"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <label className="text-white text-sm font-normal font-['Montserrat']">
                Geographical Location
              </label>
              <input
                type="text"
                className="bg-[#0d0d0d] text-white rounded-[9px] border border-[#adadad] p-2 text-sm"
                placeholder="Enter location"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-white text-sm font-normal font-['Montserrat']">
                Address
              </label>
              <input
                type="text"
                className="bg-[#0d0d0d] text-white rounded-[9px] border border-[#adadad] p-2 text-sm"
                placeholder="Enter address"
              />
            </div>
          </div>
        </div>

        {/* players added */}
        <div className="bg-[#222222] rounded-[25px] border border-[#f1f1f2] overflow-hidden p-6">
          <h2 className="text-white text-lg font-bold font-['Montserrat'] mb-4">
            Players Added to the FIFA Website
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Phone", "Facebook Link", "Instagram Link", "Email Address"].map(
              (label, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  <label className="text-white text-sm font-normal font-['Montserrat']">
                    {label}
                  </label>
                  <input
                    type="text"
                    className="bg-[#0d0d0d] text-white rounded-[9px] border border-[#adadad] p-2 text-sm"
                    placeholder="Enter value"
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex justify-center items-center gap-5 flex-wrap">
          <button className="w-[117px] h-[43px] px-[13px] py-2.5 bg-[#34a853] rounded-xl text-white text-sm font-bold font-['Montserrat']">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
