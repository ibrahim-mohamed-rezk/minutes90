import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#39393b] text-white rounded-[15px] border border-[#39393b] p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2.5 mb-4">
              <img className="w-[60px] h-[55px]" src="https://via.placeholder.com/60x55" alt="Logo" />
              <img className="w-[102px] h-[21px]" src="https://via.placeholder.com/102x21" alt="Logo text" />
            </div>
            <p className="text-[#b7b7b7] text-lg font-extrabold leading-normal">LogoLogoL ogoL ogoLogoLo goLogoLogo LogoLogo LogoLogoL ogoLogo LogoLogoL ogoLogoLog oLogoLogo LogoL ogo Logo</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#b7b7b7] hover:text-white transition">Blogs</a></li>
              <li><a href="#" className="text-[#b7b7b7] hover:text-white transition">Career</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#b7b7b7] hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="text-[#b7b7b7] hover:text-white transition">Complaints</a></li>
              <li><a href="#" className="text-[#b7b7b7] hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Get Updates</h3>
            <div className="bg-[#333333] rounded-[10px] border border-[#868686] p-2 flex flex-col sm:flex-row items-center gap-2">
              <input type="email" placeholder="Enter your email" className="bg-transparent text-[#878787] p-2 flex-grow" />
              <button className="bg-white text-[#4e4f5d] font-bold py-2 px-4 rounded-[10px]">Subscribe</button>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="bg-[#333333] rounded-full border border-[#868686] p-4 hover:bg-[#444444] transition"></a>
              <a href="#" className="bg-[#333333] rounded-full border border-[#868686] p-4 hover:bg-[#444444] transition"></a>
              <a href="#" className="bg-[#333333] rounded-full border border-[#868686] p-4 hover:bg-[#444444] transition"></a>
              <a href="#" className="bg-[#333333] rounded-full border border-[#868686] p-4 hover:bg-[#444444] transition"></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#4a4a4c] flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <span className="w-5 h-5 rounded-full border border-[#d9d9d9] inline-flex items-center justify-center">c</span>
            <span>2024</span>
          </div>
          <div>devunity, All rights reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
