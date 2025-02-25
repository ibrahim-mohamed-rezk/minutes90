"use client";

import { FC } from "react";

interface OAuthButtonsProps {
  onGoogleLogin: () => void;
  // onFacebookLogin: () => void;
  loading: boolean;
}

const OAuthButtons: FC<OAuthButtonsProps> = ({
  loading,
  onGoogleLogin,
  // onFacebookLogin,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-[5px] sm:gap-3 ">
      <button
        disabled={loading}
        onClick={onGoogleLogin}
        className="w-full sm:flex-1 py-3 px-4 border border-[#34a853] rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition"
      >
        <svg
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path
            d="M21.4487 12.2216C21.4487 11.4012 21.381 10.8025 21.2344 10.1816H11.7039V13.8846H17.2981C17.1854 14.8048 16.5763 16.1906 15.2228 17.1219L15.2038 17.2459L18.2172 19.5405L18.426 19.561C20.3434 17.8204 21.4487 15.2593 21.4487 12.2216Z"
            fill="#4285F4"
          />
          <path
            d="M11.7034 21.9781C14.4441 21.9781 16.7449 21.0911 18.4255 19.5612L15.2224 17.122C14.3652 17.7096 13.2147 18.1198 11.7034 18.1198C9.01908 18.1198 6.74078 16.3792 5.92864 13.9734L5.80959 13.9833L2.67623 16.367L2.63525 16.479C4.30449 19.7385 7.73325 21.9781 11.7034 21.9781Z"
            fill="#34A853"
          />
          <path
            d="M5.92911 13.9735C5.71481 13.3526 5.5908 12.6874 5.5908 12C5.5908 11.3126 5.71481 10.6474 5.91783 10.0266L5.91216 9.89436L2.73952 7.47241L2.63572 7.52095C1.94774 8.87355 1.55298 10.3925 1.55298 12C1.55298 13.6076 1.94774 15.1264 2.63572 16.479L5.92911 13.9735Z"
            fill="#FBBC05"
          />
          <path
            d="M11.7035 5.88013C13.6096 5.88013 14.8953 6.68946 15.6285 7.3658L18.4933 4.61627C16.7338 3.0087 14.4442 2.02197 11.7035 2.02197C7.73328 2.02197 4.3045 4.26148 2.63525 7.52095L5.91738 10.0266C6.74081 7.62077 9.01911 5.88013 11.7035 5.88013Z"
            fill="#EB4335"
          />
        </svg>

        <span className="text-[#34a853] text-xs sm:text-sm font-normal font-['Poppins']">
          Google
        </span>
      </button>
      {/* <span className="text-[#239d60] text-xs sm:text-sm my-2 sm:my-0">or</span>
      <button
        onClick={onFacebookLogin}
        className="w-full sm:flex-1 py-3 px-4 bg-[#e9f1ff] rounded-lg flex items-center justify-center gap-2 hover:bg-[#dce6fa] transition"
      >
        <svg
          width="27"
          height="26"
          viewBox="0 0 27 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <ellipse
            cx="13.5"
            cy="11.9824"
            rx="11.0957"
            ry="11.1294"
            fill="url(#paint0_linear_16_372)"
          />
          <path
            d="M17.6321 16.4037L18.125 13.2624H15.0416V11.2249C15.0416 10.3653 15.4716 9.52692 16.8526 9.52692H18.2553V6.85263C18.2553 6.85263 16.9828 6.64038 15.7669 6.64038C13.2264 6.64038 11.5674 8.14518 11.5674 10.8683V13.2624H8.74463V16.4037H11.5674V23.9978C12.1341 24.0849 12.7139 24.1294 13.3045 24.1294C13.8951 24.1294 14.4749 24.0849 15.0416 23.9978V16.4037H17.6321Z"
            fill="#F7F7F7"
          />
          <defs>
            <linearGradient
              id="paint0_linear_16_372"
              x1="13.5"
              y1="0.853027"
              x2="13.5"
              y2="23.0458"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#18ACFE" />
              <stop offset="1" stopColor="#0163E0" />
            </linearGradient>
          </defs>
        </svg>

        <span className="text-[#4285f4] text-xs sm:text-sm font-normal font-['Poppins']">
          Facebook
        </span>
      </button> */}
    </div>
  );
};

export default OAuthButtons;
