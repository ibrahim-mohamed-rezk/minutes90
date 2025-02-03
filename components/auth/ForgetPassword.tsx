"use client";

import { FC, useState, useEffect } from "react";

interface ForgetPasswordProps {
  isOpen: boolean;
  onClose: () => void;
}

const ForgetPassword: FC<ForgetPasswordProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (timer > 0 && isResendDisabled && step === 2) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (step === 2) {
      setIsResendDisabled(false);
      setTimer(0);
    }

    return () => clearInterval(interval);
  }, [timer, isResendDisabled, step]);

  const handleResendOTP = () => {
    // Your OTP resend API call here
    setIsResendDisabled(true);
    setTimer(60); // Reset timer to 60 seconds
  };

  if (!isOpen) return null;

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // TODO: Call API to send OTP to email
      console.log("Sending OTP to:", email);
      setStep(2);
      setTimer(60);
      setIsResendDisabled(true);
    } catch (err) {
      setError("Failed to send OTP");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // TODO: Call API to verify OTP
      console.log("Verifying OTP:", otp);
      setStep(3);
    } catch (err) {
      setError("Invalid OTP");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      // TODO: Call API to reset password
      console.log("Resetting password");
      onClose();
      setStep(1);
      setEmail("");
      setOtp("");
      setNewPassword("");
      setConfirmPassword("");
      setError("");
    } catch (err) {
      setError("Failed to reset password");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
          setStep(1);
          setEmail("");
          setOtp("");
          setNewPassword("");
          setConfirmPassword("");
          setError("");
          setLoading(false);
        }
      }}
    >
      <div className="w-full max-w-[536px] h-fit px-4 sm:px-8 py-6 sm:py-8 bg-white rounded-[30px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border border-[#f1f1f2] flex-col justify-end items-center inline-flex overflow-hidden">
        {/* Step 1 - Enter Email */}
        {step === 1 && (
          <div className="flex flex-col items-center gap-6 sm:gap-10 w-full">
            <div className="w-[90px] sm:w-[122.88px] h-[90px] sm:h-[119.36px] relative">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 124 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <g clipPath="url(#clip0_16_810)">
                  <path
                    d="M102.829 84.9094C103.524 83.7907 104.628 82.9867 105.906 82.6675C107.184 82.3483 108.536 82.539 109.676 83.1992C110.816 83.8595 111.654 84.9374 112.013 86.2048C112.372 87.4722 112.223 88.8295 111.599 89.9894C103.718 103.628 90.7623 113.596 75.5591 117.718C60.3558 121.839 44.1395 119.78 30.449 111.989C30.2104 111.875 29.9798 111.745 29.759 111.599C16.2135 103.668 6.33965 90.7171 2.27768 75.5549C-1.7843 60.3927 0.292872 44.2405 8.05896 30.5994C8.18905 30.3263 8.34298 30.0653 8.51896 29.8194C16.5045 16.2652 29.5226 6.41588 44.7374 2.41691C59.9522 -1.58206 76.1309 0.593393 89.749 8.46936C98.7443 13.6288 106.227 21.06 111.449 30.0194L112.449 26.1294C112.608 25.4205 112.908 24.7509 113.331 24.1603C113.754 23.5697 114.291 23.0701 114.911 22.6912C115.531 22.3123 116.22 22.0619 116.939 21.9549C117.657 21.8478 118.39 21.8863 119.093 22.068C119.797 22.2497 120.456 22.5709 121.033 23.0126C121.61 23.4543 122.092 24.0074 122.45 24.639C122.809 25.2707 123.037 25.968 123.121 26.6896C123.205 27.4112 123.143 28.1422 122.939 28.8394L119.249 43.1594C119.139 43.5871 118.978 44 118.769 44.3894C118.296 45.541 117.442 46.4953 116.35 47.0924C115.258 47.6896 113.994 47.8932 112.769 47.6694L98.249 44.9894C97.549 44.858 96.8818 44.5901 96.2854 44.201C95.689 43.8118 95.1751 43.3089 94.773 42.7211C94.3709 42.1333 94.0885 41.4721 93.942 40.7752C93.7955 40.0783 93.7876 39.3593 93.919 38.6594C94.0503 37.9594 94.3182 37.2922 94.7074 36.6958C95.0965 36.0994 95.5994 35.5855 96.1872 35.1834C96.775 34.7813 97.4362 34.4989 98.1331 34.3524C98.8301 34.2059 99.549 34.198 100.249 34.3294L102.579 34.7594C98.1628 27.3674 91.897 21.2536 84.3988 17.0203C76.9007 12.787 68.429 10.5804 59.8185 10.6177C51.2079 10.6551 42.7557 12.9351 35.2945 17.2333C27.8334 21.5315 21.6208 27.6994 17.269 35.1294L17.129 35.3894C10.5601 46.7528 8.76823 60.2583 12.1467 72.9415C15.5251 85.6247 23.7978 96.4493 35.149 103.039C46.5272 109.604 60.047 111.381 72.7351 107.979C85.4232 104.577 96.2408 96.2756 102.809 84.8994L102.829 84.9094ZM80.829 70.8494L86.579 76.5994L90.099 80.1194L84.399 85.8694L80.879 82.3494L75.309 87.9194L69.559 82.1694L75.129 76.5994L72.129 73.5994L65.719 80.0194L59.969 74.2694L66.389 67.8494L64.389 65.8494L62.389 63.8494C59.2123 67.0126 54.9119 68.7885 50.429 68.7885C45.946 68.7885 41.6456 67.0126 38.469 63.8494L38.189 63.5494C35.1433 60.3528 33.4678 56.0923 33.5201 51.6774C33.5725 47.2625 35.3484 43.0429 38.469 39.9194L44.249 34.1094C47.4223 30.9268 51.7299 29.1351 56.2242 29.1285C60.7185 29.122 65.0314 30.901 68.214 34.0744C71.3966 37.2477 73.1882 41.5553 73.1948 46.0496C73.2013 50.5439 71.4223 54.8568 68.249 58.0394L80.879 70.8494H80.829ZM61.559 40.6994C60.1238 39.2844 58.1894 38.4911 56.174 38.4911C54.1586 38.4911 52.2241 39.2844 50.789 40.6994L44.979 46.4694C43.5969 47.8722 42.8065 49.7524 42.7711 51.7214C42.7357 53.6904 43.4581 55.5978 44.789 57.0494L44.989 57.2394C46.4254 58.652 48.3593 59.4436 50.374 59.4436C52.3886 59.4436 54.3225 58.652 55.759 57.2394L61.559 51.4694C62.9716 50.0329 63.7632 48.099 63.7632 46.0844C63.7632 44.0697 62.9716 42.1358 61.559 40.6994Z"
                    fill="#239D60"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_16_810">
                    <rect
                      width="122.88"
                      height="119.36"
                      fill="white"
                      transform="translate(0.249023 0.469238)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="w-full max-w-[471.38px] px-4 sm:px-5 py-6 sm:py-[30px] bg-white rounded-[40px] shadow-[0px_4px_35px_0px_rgba(0,0,0,0.08)] justify-center items-center gap-2.5 inline-flex">
              <form
                onSubmit={handleEmailSubmit}
                className="flex flex-col gap-8 sm:gap-11 w-full max-w-[406px] mx-auto"
              >
                <div className="flex flex-col gap-6 sm:gap-[46px]">
                  <h2 className="text-3xl sm:text-[40px] font-medium font-['Poppins']">
                    Forget Password
                  </h2>
                  <div className="flex flex-col gap-4 sm:gap-[25px]">
                    <div className="relative">
                      <label className="text-black text-sm sm:text-base font-normal font-['Poppins']">
                        Enter your Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-[45px] sm:h-[50px] mt-4 sm:mt-[30.70px] px-4 rounded-[9px] border border-[#239d60] focus:ring-2 focus:ring-[#239d60]"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                </div>
                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#239d60] hover:bg-[#1c7d4c] text-white rounded-[10px] shadow-[0px_4px_19px_0px_rgba(119,147,65,0.30)] font-medium font-['Poppins'] transition text-sm sm:text-base"
                >
                  {loading ? "Sending..." : "Send Code"}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Step 2 - Enter OTP */}
        {step === 2 && (
          <div className="self-stretch flex-col justify-center items-center gap-6 sm:gap-10 inline-flex">
            <div className="w-[90px] sm:w-[122.88px] h-[90px] sm:h-[119.36px] relative overflow-hidden">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 124 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <g clipPath="url(#clip0_16_830)">
                  <path
                    d="M102.829 84.7599C103.524 83.6413 104.628 82.8373 105.906 82.5181C107.184 82.1989 108.536 82.3896 109.676 83.0498C110.815 83.7101 111.654 84.788 112.012 86.0554C112.371 87.3227 112.223 88.6801 111.599 89.8399C103.718 103.479 90.7621 113.447 75.5588 117.568C60.3556 121.69 44.1392 119.631 30.4487 111.84C30.2101 111.726 29.9796 111.595 29.7587 111.45C16.2132 103.518 6.33941 90.5677 2.27743 75.4055C-1.78454 60.2433 0.292628 44.0911 8.05872 30.4499C8.18881 30.1769 8.34274 29.9159 8.51872 29.6699C16.5042 16.1158 29.5224 6.26647 44.7372 2.2675C59.952 -1.73147 76.1307 0.443979 89.7487 8.31994C98.7441 13.4794 106.227 20.9106 111.449 29.8699L112.449 25.9799C112.608 25.2711 112.908 24.6015 113.33 24.0109C113.753 23.4202 114.291 22.9207 114.911 22.5418C115.53 22.1629 116.22 21.9125 116.938 21.8055C117.657 21.6984 118.39 21.7369 119.093 21.9186C119.796 22.1003 120.456 22.4215 121.033 22.8632C121.609 23.3048 122.091 23.8579 122.45 24.4896C122.809 25.1213 123.037 25.8186 123.121 26.5402C123.205 27.2617 123.143 27.9928 122.939 28.6899L119.249 43.0099C119.139 43.4377 118.977 43.8506 118.769 44.2399C118.296 45.3916 117.442 46.3459 116.35 46.943C115.258 47.5401 113.993 47.7438 112.769 47.5199L98.2487 44.8399C97.5488 44.7086 96.8815 44.4407 96.2851 44.0515C95.6887 43.6624 95.1748 43.1595 94.7727 42.5717C94.3707 41.9839 94.0883 41.3227 93.9418 40.6258C93.7952 39.9289 93.7874 39.2099 93.9187 38.5099C94.05 37.81 94.3179 37.1428 94.7071 36.5464C95.0963 35.95 95.5992 35.436 96.1869 35.034C96.7747 34.6319 97.436 34.3495 98.1329 34.203C98.8298 34.0565 99.5488 34.0486 100.249 34.1799L102.579 34.6099C98.1626 27.218 91.8967 21.1042 84.3986 16.8709C76.9005 12.6376 68.4288 10.4309 59.8182 10.4683C51.2077 10.5056 42.7554 12.7857 35.2943 17.0839C27.8331 21.3821 21.6206 27.55 17.2687 34.9799L17.1287 35.2399C10.5598 46.6034 8.76799 60.1089 12.1464 72.7921C15.5249 85.4753 23.7976 96.2999 35.1487 102.89C46.527 109.455 60.0467 111.232 72.7348 107.83C85.423 104.428 96.2405 96.1262 102.809 84.7499L102.829 84.7599ZM80.8287 70.6999L86.5787 76.4499L90.0987 79.9699L84.3987 85.7199L80.8787 82.1999L75.3087 87.7699L69.5587 82.0199L75.1287 76.4499L72.1287 73.4499L65.7187 79.8699L59.9687 74.1199L66.3887 67.6999L64.3887 65.6999L62.3887 63.6999C59.2121 66.8631 54.9117 68.6391 50.4287 68.6391C45.9458 68.6391 41.6454 66.8631 38.4687 63.6999L38.1887 63.3999C35.1431 60.2034 33.4676 55.9429 33.5199 51.528C33.5722 47.1131 35.3482 42.8935 38.4687 39.7699L44.2487 33.9599C47.422 30.7773 51.7297 28.9857 56.224 28.9791C60.7183 28.9726 65.0311 30.7516 68.2137 33.9249C71.3963 37.0983 73.188 41.4059 73.1945 45.9002C73.2011 50.3945 71.422 54.7073 68.2487 57.8899L80.8787 70.6999H80.8287ZM61.5587 40.5499C60.1236 39.135 58.1891 38.3417 56.1737 38.3417C54.1583 38.3417 52.2239 39.135 50.7887 40.5499L44.9787 46.3199C43.5966 47.7228 42.8062 49.603 42.7709 51.572C42.7355 53.541 43.4579 55.4484 44.7887 56.8999L44.9887 57.0899C46.4251 58.5025 48.3591 59.2942 50.3737 59.2942C52.3883 59.2942 54.3223 58.5025 55.7587 57.0899L61.5587 51.3199C62.9713 49.8835 63.7629 47.9496 63.7629 45.9349C63.7629 43.9203 62.9713 41.9864 61.5587 40.5499Z"
                    fill="#239D60"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_16_830">
                    <rect
                      width="122.88"
                      height="119.36"
                      fill="white"
                      transform="translate(0.249023 0.320312)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="w-full max-w-[471.38px] px-4 sm:px-5 py-6 sm:py-[30px] bg-white rounded-[40px] shadow-[0px_4px_35px_0px_rgba(0,0,0,0.08)] justify-center items-center gap-2.5 inline-flex">
              <div className="flex-col justify-center items-center gap-8 sm:gap-11 inline-flex w-full">
                <div className="text-black text-2xl sm:text-[40px] font-medium font-['Poppins']">
                  Forget Password
                </div>
                <div className="flex-col justify-start items-center gap-4 sm:gap-[17px] flex">
                  <div className="text-center text-black text-lg sm:text-xl font-medium font-['Alexandria']">
                    A 6-digit code has been sent to
                  </div>
                  <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                    <div className="text-center text-black text-sm sm:text-base font-normal font-['Alexandria']">
                      {email}
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-center gap-5 flex w-full">
                  <div className="grid grid-cols-6 gap-2 sm:gap-3.5 w-full max-w-[360px]">
                    {[...Array(6)].map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        className="w-full h-[40px] sm:h-[60px] bg-[#d9d9d9] rounded-xl text-center text-lg sm:text-2xl"
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value && index < 5) {
                            (
                              e.target.nextElementSibling as HTMLInputElement
                            )?.focus();
                          }
                        }}
                      />
                    ))}
                  </div>
                  <div className="justify-start items-end gap-4 sm:gap-[30px] inline-flex">
                    <button
                      disabled={isResendDisabled}
                      onClick={handleResendOTP}
                      className="text-center text-[#239d60] text-sm sm:text-base font-medium font-['Alexandria']"
                    >
                      {isResendDisabled ? `Resend OTP in ` : "Resend OTP"}
                    </button>
                    <div className="text-center text-black text-lg sm:text-xl font-medium font-['Alexandria']">
                      {`${Math.floor(timer / 60)}:${(timer % 60)
                        .toString()
                        .padStart(2, "0")}`}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleOtpSubmit}
                  disabled={loading}
                  className="w-full h-[50px] sm:h-[65px] px-4 sm:px-[100px] py-[11px] bg-[#239d60] rounded-xl justify-center items-center gap-2.5 inline-flex disabled:opacity-20"
                >
                  <div className="text-white text-lg sm:text-xl font-medium font-['Alexandria']">
                    {loading ? "Verifying..." : "Confirm"}
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3 - Enter New Password */}
        {step === 3 && (
          <div className="self-stretch flex-col justify-center items-center gap-6 sm:gap-10 inline-flex">
            <div className="w-[90px] sm:w-[126px] h-[72px] sm:h-24 relative overflow-hidden">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 127 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <g clipPath="url(#clip0_16_855)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M54.7238 58.6656H81.1469C82.7612 54.4839 83.6472 49.9242 83.6472 45.145C83.6472 40.0611 82.6431 35.2234 80.8269 30.8197L80.7605 30.6686C78.8262 26.0455 75.9814 21.871 72.4524 18.372V18.3598C68.9006 14.8387 64.6846 12.0441 60.0443 10.1353C55.563 8.29676 50.6239 7.27997 45.4288 7.27997C40.2928 7.27997 35.4103 8.27238 30.9659 10.0719L30.8133 10.1377C26.1731 12.0442 21.9576 14.8382 18.4077 18.3598L18.3954 18.372C14.8411 21.8892 12.0213 26.0661 10.0971 30.6637C8.23913 35.1063 7.21291 39.9977 7.21291 45.145C7.21291 50.2338 8.21452 55.0739 10.0307 59.4776L10.0971 59.6263C11.3113 62.528 12.8853 65.2686 14.7828 67.785C20.0123 65.0297 28.8175 65.2808 33.8575 61.7989C34.1823 61.3137 34.5342 60.6065 34.8739 59.8409C35.3857 58.6827 35.8484 57.4221 36.1462 56.5564C34.9009 55.1032 33.8353 53.4671 32.8116 51.848C31.1972 49.3024 27.6067 44.5183 27.5206 41.6704C27.5009 41.0266 27.6116 40.4439 27.8528 39.9294C28.1014 39.3881 28.4902 38.9419 29.0144 38.5932C29.258 38.4298 29.5336 38.2933 29.8314 38.1835C29.6099 35.2965 29.5336 31.6658 29.6714 28.6203C29.7428 27.901 29.888 27.1768 30.0873 26.4551C30.9536 23.4047 33.1094 20.9444 35.7869 19.2596C37.261 18.3281 38.8778 17.6283 40.566 17.1553C41.639 16.8553 39.653 13.4612 40.7604 13.3441C46.1203 12.7955 54.7878 17.6502 58.5308 21.6589C60.4036 23.6656 61.5824 26.3332 61.8383 29.8541L61.6292 38.5322C62.5643 38.8126 63.1648 39.4027 63.406 40.3561C64.2156 43.5162 59.9508 49.0659 58.5801 51.3067C57.1675 53.6085 55.7278 55.9274 53.8624 57.7488C54.0273 57.9902 54.2021 58.2291 54.3669 58.4754L54.4974 58.668L54.7238 58.6656ZM66.1401 72.2521C66.1401 71.2914 66.9251 70.516 67.8923 70.516C68.8594 70.516 69.6469 71.2914 69.6469 72.2521V74.4978L71.5246 73.2518C71.7153 73.1253 71.9292 73.0373 72.1542 72.9927C72.3792 72.9481 72.6109 72.9479 72.836 72.9921C73.0611 73.0362 73.2752 73.1239 73.4661 73.25C73.657 73.3762 73.821 73.5383 73.9486 73.7273C74.4876 74.5197 74.271 75.595 73.4687 76.129L71.0447 77.7359L73.4712 79.333C74.2759 79.8621 74.4974 80.9374 73.9659 81.7348C73.4318 82.5321 72.3441 82.7516 71.5394 82.2249L69.6469 80.974V83.227C69.6469 84.1878 68.8594 84.9656 67.8923 84.9656C66.9251 84.9656 66.1401 84.1878 66.1401 83.227V80.9838L64.2599 82.2298C63.8744 82.4839 63.4031 82.5766 62.9489 82.4875C62.4947 82.3984 62.0945 82.1348 61.8359 81.7543C61.7082 81.5654 61.6194 81.3534 61.5744 81.1304C61.5294 80.9075 61.5292 80.6779 61.5738 80.4549C61.6183 80.2319 61.7068 80.0198 61.8341 79.8306C61.9614 79.6414 62.1251 79.479 62.3158 79.3525L64.7423 77.7457L62.3133 76.1461C61.5086 75.6194 61.2896 74.5441 61.8211 73.7443C62.0777 73.3617 62.477 73.0955 62.9314 73.004C63.3858 72.9126 63.8582 73.0035 64.2451 73.2567L66.1401 74.5051V72.2521ZM103.564 72.2521C103.563 72.024 103.608 71.7981 103.696 71.5873C103.784 71.3765 103.913 71.185 104.076 71.0237C104.239 70.8625 104.432 70.7346 104.645 70.6475C104.858 70.5603 105.086 70.5156 105.316 70.516C106.283 70.516 107.068 71.2914 107.068 72.2521V74.4978L108.948 73.2518C109.333 73.0046 109.801 72.9175 110.25 73.0092C110.7 73.1009 111.095 73.364 111.35 73.7418C111.605 74.1196 111.7 74.5817 111.615 75.0284C111.529 75.475 111.27 75.8704 110.892 76.129L108.466 77.7359L110.895 79.333C111.281 79.5873 111.55 79.9829 111.642 80.4331C111.734 80.8833 111.642 81.3514 111.387 81.7348C110.855 82.5321 109.768 82.7516 108.963 82.2249L107.068 80.974V83.227C107.068 84.1878 106.283 84.9656 105.316 84.9656C104.346 84.9656 103.564 84.1878 103.564 83.227V80.9838L101.683 82.2298C100.881 82.7589 99.7959 82.5467 99.2594 81.7543C98.7229 80.9594 98.937 79.8841 99.7368 79.3525L102.163 77.7457L99.7368 76.1461C98.9321 75.6194 98.7106 74.5441 99.2446 73.7443C99.7762 72.947 100.861 72.73 101.669 73.2567L103.564 74.5051V72.2521ZM84.853 72.2521C84.853 71.2914 85.6381 70.516 86.6052 70.516C87.5724 70.516 88.3599 71.2914 88.3599 72.2521V74.4978L90.2376 73.2518C90.4282 73.1253 90.6422 73.0373 90.8672 72.9927C91.0922 72.9481 91.3239 72.9479 91.549 72.9921C91.7741 73.0362 91.9882 73.1239 92.1791 73.25C92.37 73.3762 92.5339 73.5383 92.6616 73.7273C93.1981 74.5197 92.984 75.595 92.1842 76.129L89.7577 77.7359L92.1842 79.333C92.9889 79.8621 93.2104 80.9374 92.6764 81.7348C92.1448 82.5321 91.0571 82.7516 90.2523 82.2249L88.3599 80.974V83.227C88.3599 84.1878 87.5724 84.9656 86.6052 84.9656C85.6381 84.9656 84.853 84.1878 84.853 83.227V80.9838L82.9729 82.2298C82.1706 82.7589 81.0853 82.5467 80.5489 81.7543C80.4212 81.5654 80.3323 81.3534 80.2874 81.1304C80.2424 80.9075 80.2422 80.6779 80.2867 80.4549C80.3313 80.2319 80.4198 80.0198 80.5471 79.8306C80.6744 79.6414 80.8381 79.479 81.0287 79.3525L83.4528 77.7457L81.0263 76.1461C80.2215 75.6194 80.0001 74.5441 80.5341 73.7443C80.7907 73.3617 81.19 73.0955 81.6444 73.004C82.0988 72.9126 82.5712 73.0035 82.9581 73.2567L84.853 74.5051V72.2521ZM88.04 58.6656H118.484C122.995 58.6656 126.689 62.3256 126.689 66.7926V88.6865C126.689 93.117 122.956 96.8159 118.484 96.8159H54.7238C52.4745 96.8159 50.4171 95.8991 48.9307 94.4239C47.5871 93.0898 46.7491 91.3371 46.5584 89.4619C40.3124 89.6215 34.1023 88.4792 28.3302 86.1092L28.3204 86.1043C22.8571 83.8659 17.9352 80.5741 13.8107 76.4875L13.7984 76.4753C9.67139 72.3862 6.34913 67.5095 4.08506 62.0988L4.01862 61.9281C1.81737 56.6016 0.686354 50.9007 0.688969 45.145C0.688969 39.1613 1.89729 33.4385 4.08506 28.2034L4.08998 28.1936C6.34913 22.7805 9.67139 17.9038 13.7984 13.8172L13.8107 13.805C17.9377 9.71588 22.8571 6.42411 28.3179 4.18084L28.4926 4.115C33.8676 1.93374 39.6205 0.813093 45.4288 0.815923C51.468 0.815923 57.2462 2.01315 62.5274 4.18084L62.5373 4.18571C68.0055 6.42655 72.9298 9.72075 77.0543 13.8099C81.2177 17.9248 84.5203 22.8137 86.7726 28.1961L86.839 28.3692C89.042 33.6927 90.1739 39.3914 90.1711 45.145C90.1711 49.8486 89.423 54.3936 88.04 58.6656ZM54.7238 63.5106H118.484C120.308 63.5106 121.797 65.0126 121.797 66.7926V88.6865C121.797 90.4665 120.283 91.9685 118.484 91.9685H54.7238C52.9273 91.9685 51.4114 90.4909 51.4114 88.6865V66.7926C51.4114 64.9882 52.9027 63.5106 54.7238 63.5106Z"
                    fill="#239D60"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_16_855">
                    <rect
                      width="126"
                      height="96"
                      fill="white"
                      transform="translate(0.688965 0.815918)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="self-stretch grow shrink basis-0 px-4 sm:px-[27px] py-6 sm:py-[39px] bg-white rounded-[20px] sm:rounded-[40px] shadow-[0px_4px_35px_0px_rgba(0,0,0,0.08)] justify-center items-center gap-2.5 inline-flex">
              <div className="w-full max-w-[406.56px] flex-col justify-center items-center gap-8 sm:gap-11 inline-flex">
                <div className="self-stretch flex-col justify-start items-start gap-6 sm:gap-10 flex">
                  <div className="self-stretch flex-col justify-start items-start gap-[38px] flex">
                    <div className="self-stretch flex-col justify-start items-start flex">
                      <div className="self-stretch text-black text-xl sm:text-3xl font-medium font-['Poppins']">
                        Create New Password
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-col justify-start items-start gap-4 sm:gap-5 flex">
                    <div className="h-[45px] sm:h-[50px] relative w-full">
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full h-full px-3 sm:px-4 rounded-[9px] border border-[#239d60] text-sm sm:text-base"
                        placeholder="Enter New password"
                        required
                      />
                    </div>
                    <div className="h-[45px] sm:h-[50px] relative w-full">
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full h-full px-3 sm:px-4 rounded-[9px] border border-[#8b8b8b] text-sm sm:text-base"
                        placeholder="Confirm password"
                        required
                      />
                    </div>
                  </div>
                </div>
                {error && (
                  <p className="text-red-500 text-xs sm:text-sm text-center">
                    {error}
                  </p>
                )}
                <button
                  onClick={handlePasswordReset}
                  disabled={loading}
                  className="self-stretch h-[45px] sm:h-[50px] px-4 sm:px-[152px] py-2 sm:py-[11px] bg-[#239d60] rounded-[10px] shadow-[0px_4px_19px_0px_rgba(119,147,65,0.30)] justify-center items-center gap-2.5 inline-flex disabled:opacity-50"
                >
                  <div className="text-white text-base sm:text-xl font-semibold font-['Poppins']">
                    {loading ? "Submitting..." : "Submit"}
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
