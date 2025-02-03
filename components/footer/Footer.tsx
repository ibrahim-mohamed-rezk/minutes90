import React from "react";

const Footer = () => {
  return (
    <div className="w-full mt-[-1px] pt-[100px] pb-[25px] bg-[var(--color-text-black)] relative">
      <div className="w-full max-w-[1873px] mx-auto px-4">
        {/* Main Container */}
        <div className="w-full h-auto md:h-[360px] bg-[#39393b] rounded-[15px] p-8 relative">
          {/* Logo Section */}
          <div className="flex items-center gap-2.5 mb-8">
            <img
              className="w-[60px] h-[55px]"
              src="https://via.placeholder.com/60x55"
              alt="Logo"
            />
            <img
              className="w-[102px] h-[21px]"
              src="https://via.placeholder.com/102x21"
              alt="Brand Name"
            />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Section */}
            <div className="text-[#b7b7b7] text-lg text-wrap font-extrabold font-['Almarai'] leading-normal overflow-hidden w-full max-w-[300px]">
              LogoL ogoLogo LogoLo goLog oLogoLogoLogo LogoLogoLo goLogoLogoLogo LogoLogoLog oLogoLogoL ogoLogoLog oLogo
            </div>

            {/* Middle Section */}
            <div className="space-y-4">
              <div className="text-white text-xl font-bold font-['Almarai'] leading-normal">
                About
              </div>
              <div className="text-[#b7b7b7] text-xl font-normal font-['Almarai'] leading-normal">
                Blogs
              </div>
              <div className="text-[#b7b7b7] text-xl font-normal font-['Almarai'] leading-normal">
                Career
              </div>
            </div>

            {/* Right Section */}
            <div className="space-y-4">
              <div className="text-white text-xl font-bold font-['Almarai'] leading-normal">
                Support
              </div>
              <div className="text-[#b7b7b7] text-xl font-normal font-['Almarai'] leading-normal">
                Contact Us
              </div>
              <div className="text-[#b7b7b7] text-xl font-normal font-['Almarai'] leading-normal">
                Complaints
              </div>
              <div className="text-[#b7b7b7] text-xl font-normal font-['Almarai'] leading-normal">
                FAQ
              </div>
            </div>
          </div>

          {/* Email Subscription */}
          <div className="mt-8 md:absolute md:bottom-8 md:right-8 w-full md:w-[449px] h-[75px] px-[9px] py-2.5 bg-[#333333] rounded-[10px] border border-[#868686] flex items-center justify-between">
            <div className="text-[#878787] text-xl font-normal font-['Almarai'] leading-normal">
              Enter your email
            </div>
            <button className="w-[138px] h-[55px] px-2.5 py-[15px] bg-white rounded-[10px] border border-[#868686] text-[#4e4f5d] text-xl font-bold font-['Almarai'] leading-normal">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="mt-8 md:absolute md:bottom-8 md:left-8 flex gap-4 justify-center md:justify-start">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="w-[66px] h-[66px] bg-[#333333] rounded-[33px] border border-[#868686] flex items-center justify-center"
              >
                {/* Add social icons here */}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 md:absolute md:bottom-8 md:left-1/2 md:transform md:-translate-x-1/2 flex flex-col md:flex-row items-center gap-2 text-center">
            <div className="text-white text-xl font-bold font-['Almarai'] leading-normal">
              © 2024
            </div>
            <div className="text-white text-xl font-bold font-['Almarai'] leading-normal">
              devunity, All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
