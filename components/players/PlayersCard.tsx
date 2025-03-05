"use client";

import { useRouter } from "@/i18n/routing";

const PlayersCard = ({
  player,
  className,
}: {
  player: {
    id: string;
    name: string;
    image?: string;
    position?: string;
    age?: number;
    main_position?: string;
    user?: {
      id: string;
      name: string;
      image?: string;
    };
    country?: {
      name: string;
      id: number;
    };
  };
  className?: string;
}) => {
  const router = useRouter();

  const playerNumber = () => {
    switch (player.main_position) {
      case "gk":
        return 1;
      case "lb":
        return 2;
      case "cb":
        return 3;
      case "rb":
        return 4;
      case "dm":
        return 5;
      case "cm":
        return 6;
      case "rw":
        return 7;
      case "lw":
        return 8;
      case "cf":
        return 9;
      default:
        return 0;
    }
  };

  return (
    <div
      onClick={() => router.push(`/profile/user/player/${player.id}`)}
      className={`w-[248.55px] bg-[#A80950]  relative h-[348.66px] rounded-[15px] shadow-[0px_3px_4px_0px_rgba(255,255,255,0.10)] border border-[#f1f1f2] ${className} overflow-hidden`}
    >
      {/* Top section */}
      <div className="p-[12px]">
        <div className="absolute z-40 top-0 start-0 py-2 px-[20px] bg-[#262626] w-fit rounded-ee-[5px]">
          <div className="text-white text-[8px] font-bold font-['Montserrat'] uppercase">
            minutes 90
          </div>
        </div>

        <div className="w-full h-full flex flex-col ">
          {/* Left side info */}
          <div className="absolute z-20 left-[30px] top-[42px] flex flex-col gap-[1px]">
            <div className="flex flex-col items-center justify-center">
              <div className="text-white bg-[#0055B0] px-[4px] rounded-full text-[6.67px] font-black font-['Montserrat']">
                PAC
              </div>
              <div className="text-[#252525] text-[12.86px] font-black font-['Montserrat']">
                99
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-white bg-[#0055B0] px-[4px] rounded-full text-[6.67px] font-black font-['Montserrat']">
                SHO
              </div>
              <div className="text-[#252525] text-[12.86px] font-black font-['Montserrat']">
                99
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-white bg-[#0055B0] px-[4px] rounded-full text-[6.67px] font-black font-['Montserrat']">
                PAS
              </div>
              <div className="text-[#252525] text-[12.86px] font-black font-['Montserrat']">
                99
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-white bg-[#0055B0] px-[4px] rounded-full text-[6.67px] font-black font-['Montserrat']">
                PHY
              </div>
              <div className="text-[#252525] text-[12.86px] font-black font-['Montserrat']">
                99
              </div>
            </div>
          </div>

          {/* Right side info */}
          <div className="absolute z-20 right-[25px] top-[47px] flex flex-col items-center gap-[12px]">
            <div className="flex items-center relative justify-center">
              <svg
                width="39"
                height="48"
                viewBox="0 0 39 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3715 47.9985C18.9398 47.9943 18.5179 47.8691 18.1537 47.6372L13.8304 44.8931C5.30566 39.4778 0 29.4145 0 18.6408V13.1484C1.4605e-05 12.8263 0.0676393 12.5078 0.198499 12.2135C0.329358 11.9191 0.52054 11.6556 0.759678 11.4398C0.998816 11.224 1.28059 11.0608 1.58677 10.9607C1.89295 10.8607 2.21671 10.826 2.53713 10.8589C2.97143 10.9031 3.40773 10.9248 3.84427 10.9239C6.47927 10.92 9.05722 10.156 11.2689 8.72368C13.9479 6.93648 16.0349 4.39306 17.2647 1.41673C17.4388 0.998738 17.7323 0.641376 18.1085 0.389375C18.4847 0.137374 18.9269 0.00193163 19.3797 0C19.8312 0.000312885 20.2727 0.133196 20.6494 0.382162C21.0261 0.631128 21.3214 0.98522 21.4987 1.4005C22.5699 3.96757 24.2736 6.22159 26.4512 7.95239C28.9246 9.88145 31.9731 10.9262 35.1099 10.9198C35.5158 10.9198 35.8771 10.9198 36.2628 10.8711H36.4576C37.068 10.8711 37.6535 11.1136 38.0852 11.5453C38.5168 11.9769 38.7593 12.5624 38.7593 13.1728V18.6327C38.7593 29.4064 33.4618 39.4697 24.9289 44.8849L20.6056 47.6291C20.2379 47.8674 19.8097 47.9956 19.3715 47.9985Z"
                  fill="#4AA7E0"
                />
                <path
                  d="M2.28564 13.1487V18.6329C2.28564 28.6597 7.15694 37.9273 15.0484 42.9407L19.3717 45.6889L23.695 42.9407C31.5946 37.9273 36.4578 28.6597 36.4578 18.6329V13.1487C32.3612 13.4896 28.2855 12.2831 25.0346 9.76717C22.546 7.7961 20.5976 5.22627 19.3717 2.29785C17.9637 5.70579 15.5707 8.61606 12.4991 10.6562C9.47507 12.6195 5.87415 13.4983 2.28564 13.1487Z"
                  fill="#262626"
                />
                <g style={{ mixBlendMode: "overlay" }} opacity="0.71">
                  <path
                    d="M25.0344 9.7674C22.5734 7.81887 20.6403 5.28426 19.4121 2.39551V45.6689L23.6948 42.949C31.5944 37.9357 36.4576 28.668 36.4576 18.6413V13.1489C32.361 13.4899 28.2853 12.2834 25.0344 9.7674Z"
                    fill="white"
                  />
                </g>
              </svg>
              <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[4px] font-black font-['Montserrat'] capitalize">
                Professional player
              </div>
            </div>
            <div className="text-center flex items-center justify-center flex-col gap-[4px] text-[#09296e] text-[6.34px] font-black font-['Montserrat']">
              <img
                src="/images/home/egyptCardFlag.png"
                alt="flag"
                className="w-[31px] h-[19px]"
              />
              {player?.country?.name}
            </div>
          </div>

          {/* Player Image */}
          <div className="flex-1 relative w-full flex z-10">
            <img
              className="w-[260px] h-[300px] rounded-[10px] absolute left-0 right-0 top-0"
              src={player?.user?.image}
              alt={player?.user?.name}
              loading="lazy"
            />
          </div>

          {/* Bottom section */}
          <div className="absolute bottom-0 z-20 w-full p-5 flex flex-col">
            {/* player number */}
            <div className=" w-full pb-[10px] pe-[5px] flex items-center justify-end text-center text-white text-3xl font-black font-['Montserrat']">
              {playerNumber()}
            </div>

            <div className="flex items-center justify-center w-full">
              {/* Player name */}
              <div className="flex flex-col max-w-[55px]">
                <div className="text-white text-[15px] text-nowrap font-bold font-['Montserrat']">
                  {player?.user?.name}
                </div>
                <div className="flex items-center flex-col text-white justify-start gap-[2px] mt-[10px]">
                  <span>{player.main_position}</span>
                </div>
              </div>

              {/* Player description */}
              {/* <div>
                <p className="text-white text-[4px] font-medium font-['Montserrat'] max-w-[63px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip
                </p>
              </div> */}

              {/* Titles */}
              {/* <div className="flex flex-col max-w-[64px] gap-[5px]">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className=" gap-[3px] flex flex-col w-full">
                    <span className="text-white text-[4px] font-black font-['Montserrat']">
                      YOURTITLE
                    </span>
                    <div className="flex items-center justify-start bg-white w-[57px] rounded-full h-[4.6px]">
                      <div></div>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* bottom section */}
      <div className="absolute -left-[2px] -right-[2px] bottom-0 w-full z-10">
        <svg
          width="251"
          height="209"
          viewBox="0 0 251 209"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.00049 184.464V92.2055C108.3 113.871 214.791 55.5368 250.55 0V157.347L2.00049 184.464Z"
            fill="#F50E76"
          />
          <path
            d="M1.81738 208.528V99.7881C127.072 122.816 205.51 79.0247 250.659 36.4092V208.528H1.81738Z"
            fill="#262626"
          />
          <path
            d="M0.717475 105.703L9.04333 107.327C10.4357 107.586 11.8159 107.887 13.2124 108.106L17.3976 108.784L21.5829 109.458L23.6775 109.799C24.3757 109.9 25.078 109.986 25.7762 110.079L34.1833 111.175C45.4116 112.446 56.6927 113.249 67.982 113.473C90.5564 113.83 113.175 111.792 135.19 106.937C157.209 102.099 178.49 94.3617 198.476 83.9282L200.347 82.9579L202.194 81.9391L205.884 79.9093C207.102 79.2274 208.32 78.4885 209.538 77.7822C210.756 77.0759 211.973 76.3695 213.159 75.6226L216.731 73.3818L218.513 72.2573L220.267 71.0882L223.774 68.746C224.931 67.9341 226.072 67.1222 227.221 66.3103C236.386 59.8054 242.622 55.1735 250.834 47.5V54C242.4 61.7054 238.861 63.0146 229.469 69.5172C228.292 70.3291 227.127 71.141 225.942 71.9529L222.357 74.2911L220.563 75.4562L218.74 76.5766L215.087 78.8133C213.869 79.5562 212.619 80.2422 211.385 80.9607C210.151 81.6792 208.925 82.4018 207.666 83.0757L203.899 85.1054L202.016 86.1162L200.1 87.0783C179.745 97.407 158.111 104.99 135.762 109.628C113.468 114.28 90.6376 116.071 67.9292 115.454C56.5628 115.1 45.2452 114.163 33.9803 112.758L25.5489 111.54C24.8507 111.439 24.1444 111.345 23.4461 111.236L21.3474 110.87L17.154 110.144L12.9607 109.425C11.5642 109.19 10.18 108.873 8.78759 108.613L0.453613 106.913L0.717475 105.703Z"
            fill="#F50E76"
          />
        </svg>
      </div>

      {/* card bg image */}
      <div className="absolute w-full h-full left-[12px] right-[12px] top-[12px] bottom-[12px] z-0">
        <svg
          width="224"
          height="324"
          viewBox="0 0 224 324"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M223.235 9.33665V323.34H7.62939e-05L7.62939e-05 9.33665C7.62939e-05 6.86042 0.983749 4.4856 2.73471 2.73464C4.48567 0.98368 6.8605 8.82559e-07 9.33673 8.82559e-07L213.895 8.82559e-07C215.121 -0.000532356 216.336 0.240575 217.469 0.709547C218.602 1.17852 219.632 1.86617 220.499 2.73321C221.367 3.60025 222.055 4.62969 222.524 5.76273C222.994 6.89577 223.235 8.1102 223.235 9.33665Z"
            fill="white"
          />
          <mask
            id="mask0_430_6686"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="224"
            height="324"
          >
            <path
              d="M223.235 9.33665V323.34H7.62939e-05L7.62939e-05 9.33665C7.62939e-05 6.86042 0.983749 4.4856 2.73471 2.73464C4.48567 0.98368 6.8605 8.82559e-07 9.33673 8.82559e-07L213.895 8.82559e-07C215.121 -0.000532356 216.336 0.240575 217.469 0.709547C218.602 1.17852 219.632 1.86617 220.499 2.73321C221.367 3.60025 222.055 4.62969 222.524 5.76273C222.994 6.89577 223.235 8.1102 223.235 9.33665Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_430_6686)">
            <path
              opacity="0.38"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M281.5 182.86C281.39 182.62 281.28 182.36 281.16 182.12L644.88 9.52022C636.794 -8.52507 627.458 -25.9841 616.94 -42.7298L280.14 180.27C279.96 180.06 279.81 179.82 279.64 179.6C279.488 179.376 279.321 179.162 279.14 178.96L590.64 -80.1098C578.342 -95.7224 564.976 -110.464 550.64 -124.23L277.67 177.43C277.46 177.25 277.27 177.09 277.06 176.89L276.42 176.4L515.65 -154.32C499.713 -166.621 482.928 -177.782 465.42 -187.72L274.62 175.28L273.88 174.93C273.638 174.804 273.387 174.694 273.13 174.6L423.53 -208.54C404.889 -216.549 385.696 -223.21 366.1 -228.47L271.1 173.98C270.85 173.92 270.59 173.85 270.3 173.8C270.01 173.75 269.77 173.73 269.51 173.68L320.33 -238.13C300.229 -241.199 279.934 -242.837 259.6 -243.03L267.37 173.57H266.55L265.75 173.66L212.21 -240.95C191.691 -238.903 171.347 -235.367 151.34 -230.37L263.68 174.11C263.419 174.178 263.162 174.262 262.91 174.36C262.64 174.43 262.38 174.54 262.13 174.63L105.82 -216.2C86.4716 -208.982 67.6751 -200.362 49.5804 -190.41L260.24 175.59C260.01 175.75 259.78 175.88 259.55 176.01L258.88 176.48L9.15036 -165.2C-7.75116 -153.271 -23.7664 -140.133 -38.7696 -125.89L257.25 177.8C257.07 177.98 256.87 178.17 256.67 178.38L256.12 178.99L-71.6296 -90.9998C-85.0596 -75.0566 -97.3088 -58.1551 -108.28 -40.4298L254.92 180.8C254.78 181.01 254.63 181.27 254.51 181.49C254.39 181.71 254.25 181.98 254.13 182.23L-131.28 1.93022C-140.209 20.8475 -147.723 40.4012 -153.76 60.4302L253.37 184.15C253.3 184.43 253.23 184.69 253.16 184.94C253.09 185.19 253.04 185.46 252.99 185.74L-165.01 107.06C-168.726 127.538 -170.942 148.26 -171.64 169.06L252.74 187.85C252.74 188.11 252.74 188.39 252.74 188.65C252.74 188.91 252.74 189.21 252.74 189.48L-170.67 216.91C-169.081 237.691 -165.966 258.327 -161.35 278.65L253.03 191.58L253.23 192.38C253.3 192.62 253.39 192.88 253.47 193.14L-148.08 324.8C-141.253 344.344 -133.004 363.361 -123.4 381.7L254.26 195.11C254.4 195.35 254.54 195.61 254.65 195.84L255.09 196.54L-99.0596 422.54C-87.5995 439.509 -74.9405 455.637 -61.1796 470.8L256.34 198.25L256.89 198.84L257.46 199.42L-27.5996 503.85C-12.3195 517.359 3.905 529.761 20.9504 540.96L259.11 200.74C259.33 200.89 259.57 201.03 259.8 201.2L260.51 201.6L61.6304 564.6C79.7693 573.831 98.5476 581.748 117.82 588.29L262.43 202.48C262.7 202.59 262.92 202.67 263.18 202.75L263.99 202.97L162.82 600.8C182.16 605.06 201.99 608.04 222.22 608.1L266.06 201.85C266.32 203.36 266.6 203.37 266.85 203.4C267.1 203.43 267.41 203.4 267.68 203.4L268.28 610.57C288.266 609.959 308.184 607.955 327.89 604.57L269.82 203.29L270.63 203.14L271.41 202.96L372.87 594.36C391.976 588.889 410.672 582.079 428.82 573.98L273.42 202.27L274.17 201.94L274.88 201.59L469.35 553.22C486.34 543.355 502.629 532.329 518.1 520.22L276.66 200.4C276.881 200.251 277.092 200.088 277.29 199.91C277.51 199.71 277.71 199.55 277.94 199.37L552.18 490.45C566.255 476.815 579.379 462.23 591.46 446.8L279.34 197.8C279.51 197.59 279.68 197.36 279.84 197.17C279.982 196.936 280.136 196.709 280.3 196.49L617.45 409.68C627.869 393.005 637.125 375.63 645.15 357.68L281.3 194.68C281.4 194.43 281.5 194.18 281.62 193.92C281.74 193.66 281.8 193.42 281.88 193.17L661.35 315.35C667.378 296.736 672.109 277.728 675.51 258.46L282.38 191.05L282.5 190.21C282.5 189.94 282.5 189.67 282.57 189.41L680.97 213.52C681.64 203.72 681.97 193.84 681.97 183.88C681.97 174.1 681.61 164.4 680.97 154.79L282.55 187.28C282.55 187.03 282.49 186.75 282.47 186.47C282.45 186.19 282.38 185.93 282.33 185.67L675.56 109.67C672.146 90.1859 667.367 70.9653 661.26 52.1502L281.82 183.63C281.68 183.36 281.58 183.11 281.5 182.86Z"
              fill="#EFEFEF"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default PlayersCard;
