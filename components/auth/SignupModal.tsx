"use client";

import { useState, FormEvent, useEffect } from "react";
import OAuthButtons from "../buttons/OuthButtons";
import useGoogleLogin from "../../hooks/useGoogleLogin";
import { getApi, postApi } from "@/libs/axios/backendServer";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/libs/store/hooks";
import {
  setuserData,
  setuserDataFromGoogle,
} from "@/libs/store/slices/userSlice";
import { useTranslations } from "next-intl";
import axios from "axios";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLoginModal: () => void;
  onOpenUserTypeModal: () => void;
}

const SignupModal = ({
  isOpen,
  onClose,
  onOpenLoginModal,
  onOpenUserTypeModal,
}: SignupModalProps) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [country_id, setCountry_id] = useState("1");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countries, setCountries] = useState<{ id: string; name: string }[]>(
    []
  );
  const { login: googleLogin, loading } = useGoogleLogin();
  const slides = [
    "/images/signup/signupBg1.png",
    "/images/signup/signupBg2.png",
    "/images/signup/signupBg3.png",
    "/images/signup/signupBg0.png",
  ];
  const dispatch = useAppDispatch();
  const t = useTranslations("auth");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // get countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await getApi("countries");
        setCountries(response.data?.countries);
        setCountry_id(response.data?.countries[0]?.id);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate passwords match
    if (password !== confirmPassword) {
      toast.error(t("Passwords do not match"));
      return;
    }

    try {
      // Implement signup logic
      const response = await postApi("register", {
        name: fullName,
        phone,
        email,
        governorate_id: governorate,
        password,
        password_confirmation: confirmPassword,
        country_id,
      });

      // Reset form fields
      setFullName("");
      setPhone("");
      setEmail("");
      setGovernorate("");
      setPassword("");
      setConfirmPassword("");

      dispatch(
        setuserData({
          user_data: response.data.user_data,
          token: response.data.token,
        })
      );
      localStorage.setItem("token", response.data.token);
      onOpenUserTypeModal();

      toast.success(t("Account created successfully!")); // Notify success
      onClose();
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const errors = err.response?.data?.errors as Record<string, string[]>;
        if (errors) {
          Object.keys(errors).forEach((key) => {
            if(key === "password") {
              toast.error(errors[key][0]);
              toast.error(t("password format"))
            } else {
              toast.error(errors[key][0]);
            }
          });
        } else {
          toast.error(t("Failed to create account"));
        }
      } else {
        toast.error(t("Something went wrong"));
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { user, token } = await googleLogin();
      console.log(user, token);

      const response = await postApi("login/google", {
        device_token: token,
        email: user.email,
        displayName: user.displayName,
        id: user.uid,
      });

      dispatch(
        setuserDataFromGoogle({
          user_data: response.data.user_data,
          token: response.data.token,
        })
      );
      localStorage.setItem("token", response.data.token);
      onOpenUserTypeModal();

      toast.success("Account created successfully!"); // Notify success
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center p-4 z-[9999] overflow-y-auto">
      <div className="w-full max-w-[100%] md:max-w-[80%] lg:max-w-[1186px] bg-white rounded-[30px] shadow-sm border border-[#f1f1f2] overflow-hidden relative my-[40px]">
        <button
          onClick={onClose}
          className="absolute top-[20px] right-[20px] sm:top-[30px] sm:right-[30px] md:top-[45px] md:right-[45px] text-gray-500 hover:text-gray-700"
        >
          <svg
            width="34"
            height="38"
            viewBox="0 0 34 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M23.65 0.678711H9.68333C4.33538 0.678711 0 5.43667 0 11.3059V26.6339C0 32.5032 4.33538 37.2611 9.68333 37.2611H23.65C28.998 37.2611 33.3333 32.5032 33.3333 26.6339V11.3059C33.3333 5.43667 28.998 0.678711 23.65 0.678711Z"
              fill="#6D6D6D"
            />
            <path
              d="M19.0185 18.97L23.7352 13.7936C23.9096 13.6296 24.0513 13.4279 24.1514 13.2009C24.2514 12.974 24.3076 12.7268 24.3165 12.4749C24.3254 12.223 24.2867 11.9718 24.2029 11.7371C24.1191 11.5024 23.992 11.2892 23.8296 11.1109C23.6672 10.9327 23.4729 10.7932 23.259 10.7012C23.0452 10.6093 22.8163 10.5668 22.5868 10.5766C22.3572 10.5863 22.132 10.648 21.9252 10.7578C21.7185 10.8676 21.5346 11.0231 21.3852 11.2146L16.6685 16.391L11.9518 11.2146C11.633 10.9149 11.2229 10.7583 10.8034 10.7761C10.384 10.7939 9.98606 10.9847 9.68924 11.3105C9.39241 11.6362 9.21852 12.0729 9.20232 12.5333C9.18612 12.9936 9.3288 13.4437 9.60184 13.7936L14.3185 18.97L9.60184 24.1464C9.29142 24.4892 9.11719 24.9527 9.11719 25.436C9.11719 25.9192 9.29142 26.3828 9.60184 26.7255C9.91411 27.0662 10.3365 27.2574 10.7768 27.2574C11.2172 27.2574 11.6396 27.0662 11.9518 26.7255L16.6685 21.5491L21.3852 26.7255C21.6974 27.0662 22.1199 27.2574 22.5602 27.2574C23.0005 27.2574 23.4229 27.0662 23.7352 26.7255C24.0456 26.3828 24.2198 25.9192 24.2198 25.436C24.2198 24.9527 24.0456 24.4892 23.7352 24.1464L19.0185 18.97Z"
              fill="#6D6D6D"
            />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-8 p-4 lg:p-6">
          {/* Left side with slider */}
          <div className="w-full lg:w-[650px] aspect-square relative rounded-[40px] overflow-hidden hidden lg:block">
            <div className="w-full h-full relative">
              <div
                className="absolute w-full h-full flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0">
                    <img
                      src={slide}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              {/* Navigation dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      currentSlide === index
                        ? "bg-[#239d60]"
                        : "bg-white bg-opacity-50"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute top-[30px] left-[30px]">
              <img
                className="w-[146px] h-[146px]"
                src="/images/col_logo.png"
                alt="Logo"
              />
            </div>
          </div>

          {/* Right side with form */}
          <div className="w-full lg:w-[471px] max-w-full rounded-[30px] sm:p-[30px] space-y-6 lg:space-y-8 sm:shadow-[0px_4px_35px_0px_rgba(0,0,0,0.08)]">
            <div>
              <div className="space-y-1">
                <p className="text-[21px] font-normal font-['Poppins']">
                  <span className="text-black">Welcome to </span>
                  <span className="text-[#239d60] uppercase">minutes</span>
                  <span className="text-[#239d60]">90</span>
                </p>
                <h1 className="text-black text-[55px] font-medium font-['Poppins']">
                  Sign up
                </h1>
              </div>
            </div>

            <OAuthButtons loading={loading} onGoogleLogin={handleGoogleLogin} />

            {/* Signup form */}
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full h-[45px] lg:h-[50px] px-4 rounded-lg border border-[#239d60] focus:ring-2 focus:ring-[#239d60]"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-[45px] lg:h-[50px] px-4 rounded-lg border border-[#adadad] focus:ring-2 focus:ring-[#239d60]"
                  placeholder="Phone"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[45px] lg:h-[50px] px-4 rounded-lg border border-[#adadad] focus:ring-2 focus:ring-[#239d60]"
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Governorate</label>
                <select
                  value={country_id}
                  onChange={(e) => setCountry_id(e.target.value)}
                  className="w-full h-[45px] lg:h-[50px] px-4 rounded-lg border border-[#adadad] focus:ring-2 focus:ring-[#239d60]"
                  required
                >
                  {countries?.map((country: { id: string; name: string }) => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* <div className="space-y-2">
                <label className="block text-sm font-medium">Governorate</label>
                <select
                  value={governorate}
                  onChange={(e) => setGovernorate(e.target.value)}
                  className="w-full h-[45px] lg:h-[50px] px-4 rounded-lg border border-[#adadad] focus:ring-2 focus:ring-[#239d60]"
                  required
                >
                  {governorates?.map(
                    (governorate: { id: string; name: string }) => (
                      <option key={governorate.id} value={governorate.id}>
                        {governorate.name}
                      </option>
                    )
                  )}
                </select>
              </div> */}

              <div className="space-y-2">
                <label className="block text-sm font-medium">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-[45px] lg:h-[50px] px-4 rounded-lg border border-[#adadad] focus:ring-2 focus:ring-[#239d60]"
                    placeholder="Password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 15.5999C11.288 15.5999 10.592 15.3888 9.99995 14.9932C9.40793 14.5977 8.94651 14.0354 8.67403 13.3776C8.40156 12.7198 8.33027 11.9959 8.46917 11.2976C8.60808 10.5993 8.95095 9.95783 9.45442 9.45436C9.95788 8.95089 10.5993 8.60802 11.2977 8.46911C11.996 8.33021 12.7198 8.4015 13.3777 8.67398C14.0355 8.94645 14.5977 9.40787 14.9933 9.99989C15.3889 10.5919 15.6 11.2879 15.6 11.9999C15.5974 12.9539 15.2172 13.8681 14.5427 14.5426C13.8681 15.2172 12.954 15.5973 12 15.5999ZM12 9.89994C11.5847 9.89994 11.1786 10.0231 10.8333 10.2539C10.488 10.4846 10.2188 10.8126 10.0599 11.1963C9.90091 11.58 9.85932 12.0023 9.94035 12.4096C10.0214 12.817 10.2214 13.1912 10.5151 13.4849C10.8088 13.7786 11.183 13.9786 11.5903 14.0596C11.9977 14.1406 12.4199 14.099 12.8036 13.9401C13.1874 13.7811 13.5153 13.512 13.7461 13.1666C13.9768 12.8213 14.1 12.4153 14.1 11.9999C14.1 11.443 13.8788 10.9088 13.4849 10.515C13.0911 10.1212 12.557 9.89994 12 9.89994ZM12 21.3099C9.29015 21.1858 6.71298 20.101 4.73 18.2499C2.55 16.3399 1.25 13.9999 1.25 11.9999C1.25 7.55994 6.88 2.68994 12 2.68994C17.12 2.68994 22.75 7.68994 22.75 11.9999C22.75 16.5199 17.22 21.3099 12 21.3099ZM12 4.18994C7.77 4.18994 2.75 8.41994 2.75 11.9999C2.75 13.5599 3.89 15.5199 5.75 17.1199C7.45719 18.716 9.66726 19.6673 12 19.8099C16.76 19.8099 21.25 15.4099 21.25 11.9999C21.25 8.76994 16.47 4.18994 12 4.18994Z"
                          fill="#ADADAD"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 6.5C15.79 6.5 19.17 8.63 20.82 12C19.17 15.37 15.8 17.5 12 17.5C8.2 17.5 4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5ZM12 4C7 4 2.73 7.11 1 12C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12C21.27 7.11 17 4 12 4ZM12 9C13.38 9 14.5 10.12 14.5 11.5C14.5 12.88 13.38 14 12 14C10.62 14 9.5 12.88 9.5 11.5C9.5 10.12 10.62 9 12 9ZM12 7C9.52 7 7.5 9.02 7.5 11.5C7.5 13.98 9.52 16 12 16C14.48 16 16.5 13.98 16.5 11.5C16.5 9.02 14.48 7 12 7Z"
                          fill="#ADADAD"
                        />
                        <path
                          d="M2 2L22 22"
                          stroke="#ADADAD"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full h-[45px] lg:h-[50px] px-4 rounded-lg border border-[#adadad] focus:ring-2 focus:ring-[#239d60]"
                    placeholder="Confirm Password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showConfirmPassword ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 15.5999C11.288 15.5999 10.592 15.3888 9.99995 14.9932C9.40793 14.5977 8.94651 14.0354 8.67403 13.3776C8.40156 12.7198 8.33027 11.9959 8.46917 11.2976C8.60808 10.5993 8.95095 9.95783 9.45442 9.45436C9.95788 8.95089 10.5993 8.60802 11.2977 8.46911C11.996 8.33021 12.7198 8.4015 13.3777 8.67398C14.0355 8.94645 14.5977 9.40787 14.9933 9.99989C15.3889 10.5919 15.6 11.2879 15.6 11.9999C15.5974 12.9539 15.2172 13.8681 14.5427 14.5426C13.8681 15.2172 12.954 15.5973 12 15.5999ZM12 9.89994C11.5847 9.89994 11.1786 10.0231 10.8333 10.2539C10.488 10.4846 10.2188 10.8126 10.0599 11.1963C9.90091 11.58 9.85932 12.0023 9.94035 12.4096C10.0214 12.817 10.2214 13.1912 10.5151 13.4849C10.8088 13.7786 11.183 13.9786 11.5903 14.0596C11.9977 14.1406 12.4199 14.099 12.8036 13.9401C13.1874 13.7811 13.5153 13.512 13.7461 13.1666C13.9768 12.8213 14.1 12.4153 14.1 11.9999C14.1 11.443 13.8788 10.9088 13.4849 10.515C13.0911 10.1212 12.557 9.89994 12 9.89994ZM12 21.3099C9.29015 21.1858 6.71298 20.101 4.73 18.2499C2.55 16.3399 1.25 13.9999 1.25 11.9999C1.25 7.55994 6.88 2.68994 12 2.68994C17.12 2.68994 22.75 7.68994 22.75 11.9999C22.75 16.5199 17.22 21.3099 12 21.3099ZM12 4.18994C7.77 4.18994 2.75 8.41994 2.75 11.9999C2.75 13.5599 3.89 15.5199 5.75 17.1199C7.45719 18.716 9.66726 19.6673 12 19.8099C16.76 19.8099 21.25 15.4099 21.25 11.9999C21.25 8.76994 16.47 4.18994 12 4.18994Z"
                          fill="#ADADAD"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 6.5C15.79 6.5 19.17 8.63 20.82 12C19.17 15.37 15.8 17.5 12 17.5C8.2 17.5 4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5ZM12 4C7 4 2.73 7.11 1 12C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12C21.27 7.11 17 4 12 4ZM12 9C13.38 9 14.5 10.12 14.5 11.5C14.5 12.88 13.38 14 12 14C10.62 14 9.5 12.88 9.5 11.5C9.5 10.12 10.62 9 12 9ZM12 7C9.52 7 7.5 9.02 7.5 11.5C7.5 13.98 9.52 16 12 16C14.48 16 16.5 13.98 16.5 11.5C16.5 9.02 14.48 7 12 7Z"
                          fill="#ADADAD"
                        />
                        <path
                          d="M2 2L22 22"
                          stroke="#ADADAD"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 lg:py-3 bg-[#239d60] text-white rounded-lg hover:bg-[#1b7a4a] transition shadow-[0px_4px_19px_0px_rgba(119,147,65,0.30)]"
              >
                Sign up
              </button>
            </form>

            <p className="text-center text-sm">
              <span className="text-[#8d8d8d]">I Have Account? </span>
              <button
                onClick={() => {
                  onClose();
                  onOpenLoginModal();
                }}
                className="text-[#239d60] hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
