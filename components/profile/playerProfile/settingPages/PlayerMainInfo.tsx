"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/libs/store/hooks";
import { getApi, postApi } from "@/libs/axios/backendServer";
import { AxiosError } from "axios";
import { positions } from "@/libs/helpers/positions";
import { updateUserData } from "@/libs/store/slices/userSlice";
import { useTranslations } from "next-intl";

interface MainInfo {
  first_name: string;
  last_name: string;
  name: string;
  phone: string;
  height_cm: string;
  weight_kg: string;
  birth_date: string;
  main_position: string;
  second_position: string;
  primary_foot: string;
  country_id: string;
  governorate_id: string;
  image: File | null;
}

const PlayerMainInfo = () => {
  const { userData, token } = useAppSelector((state) => state.user);
  const [countries, setCountries] = useState<
    [{ id: string; name: string }] | null
  >(null);
  // const [governorates, setGovernorates] = useState<
  //   [{ id: string; name: string }] | null
  // >(null);
  const [profileImage, setProfileImage] = useState<string | null>(
    userData?.image
  );
  const dispatch = useAppDispatch();
  const [mainInfo, setMainInfo] = useState<MainInfo>({
    first_name: userData?.first_name,
    last_name: userData?.last_name,
    name: userData?.name,
    phone: userData?.phone,
    height_cm: userData?.player?.height_cm,
    weight_kg: userData?.player?.weight_kg,
    birth_date: userData?.player?.birth_date,
    main_position: userData?.player?.main_position || "CF",
    second_position: userData?.player?.second_position || "CF",
    primary_foot: userData?.player?.primary_foot || "left",
    country_id: userData?.country_id || "1",
    governorate_id: userData?.governorate?.id || "1",
    image: null,
  });
  const t = useTranslations("settings");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setMainInfo({
      ...mainInfo,
      [e.target.name]: e.target.value,
    });
  };

  // get countries from backend
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await getApi("countries");
        setCountries(response.data?.countries);
        setMainInfo({
          ...mainInfo,
          country_id: response.data?.countries[0]?.id,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);

  // get governorates from backend based on country id
  // useEffect(() => {
  //   const fetchGovernorates = async () => {
  //     try {
  //       const response = await getApi(`countries/${mainInfo.country_id}`);
  //       setGovernorates(response.data?.country?.governorates);
  //       setMainInfo({
  //         ...mainInfo,
  //         governorate_id: response.data?.country?.governorates[0]?.id,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchGovernorates();
  // }, [mainInfo.country_id]);

  // update player profile
  const handleUpdate = async () => {
    try {
      const res = await postApi("player-profile/main", mainInfo, {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      });
      toast.success("Profile updated successfully");
      dispatch(updateUserData({ user_data: res.data.user }));
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || "An error occurred");
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  useEffect(() => {
    setMainInfo({
      first_name: userData?.first_name,
      last_name: userData?.last_name,
      name: userData?.name,
      phone: userData?.phone,
      height_cm: userData?.player?.height_cm,
      weight_kg: userData?.player?.weight_kg,
      birth_date: userData?.player?.birth_date,
      main_position: userData?.player?.main_position || "CF",
      second_position: userData?.second_position || "CF",
      primary_foot: userData?.primary_foot || "left",
      country_id: userData?.country_id || "1",
      governorate_id: userData?.governorate?.id || "1",
      image: null,
    });
  }, [userData]);

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="text-white text-[25px] font-extrabold font-['Montserrat']">
        {t("mainInfo")}
      </div>

      {/* account information */}
      <div className="min-h-[343px] relative bg-[#222222] rounded-[25px] border border-[#f1f1f2] overflow-hidden p-8">
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* profile image */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-44 h-44 rounded-[30px] border-2 border-[#239d60]">
              <img
                src={(profileImage as string) || userData?.image}
                alt="Profile"
                className="rounded-[30px] w-full h-full object-cover"
              />
            </div>
            <div
              onClick={() =>
                (
                  document.querySelector("#profileImage") as HTMLElement
                )?.click()
              }
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-[18px] h-[18px] relative overflow-hidden">
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
              </div>
              <div className="text-[#239d60] text-sm font-medium font-['Montserrat'] capitalize">
                {t("editImage")}
              </div>
              <input
                accept="image/*"
                id="profileImage"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setMainInfo({
                      ...mainInfo,
                      image: file,
                    });
                    const reader = new FileReader();
                    reader.onload = () => {
                      setProfileImage(reader.result as string);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                type="file"
                className="hidden"
              />
            </div>
          </div>

          {/* main info inputs */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
              {/* first name */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-xs font-normal font-['Poppins']">
                  {t("firstName")}
                </label>
                <div className="h-[41px] px-4 py-2 bg-[#0d0d0d] rounded-[9px] border border-[#adadad] flex items-center">
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full bg-transparent text-[#808080] text-xs font-light font-['Poppins'] outline-none"
                    name="first_name"
                    value={mainInfo.first_name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* last name */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-xs font-normal font-['Poppins']">
                  {t("lastName")}
                </label>
                <div className="h-[41px] px-4 py-2 bg-[#0d0d0d] rounded-[9px] border border-[#adadad] flex items-center">
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full bg-transparent text-[#808080] text-xs font-light font-['Poppins'] outline-none"
                    name="last_name"
                    value={mainInfo.last_name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* name */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-xs font-normal font-['Poppins']">
                  {t("name")}
                </label>
                <div className="h-[41px] px-4 py-2 bg-[#0d0d0d] rounded-[9px] border border-[#adadad] flex items-center">
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-full bg-transparent text-[#808080] text-xs font-light font-['Poppins'] outline-none"
                    name="name"
                    value={mainInfo.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* phone */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-xs font-normal font-['Poppins']">
                  {t("phone")}
                </label>
                <div className="h-[41px] px-4 py-2 bg-[#0d0d0d] rounded-[9px] border border-[#adadad] flex items-center">
                  <input
                    type="text"
                    placeholder="Enter phone"
                    className="w-full bg-transparent text-[#808080] text-xs font-light font-['Poppins'] outline-none"
                    name="phone"
                    value={mainInfo.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* birthday */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-xs font-normal font-['Poppins']">
                  {t("birthday")}
                </label>
                <div className="h-[41px] px-4 py-2 bg-transparent rounded-[9px] border border-[#adadad] flex items-center">
                  <input
                    type="date"
                    placeholder="Enter birthday"
                    className="w-full bg-transparent text-[#fff] text-xs font-light font-['Poppins'] outline-none"
                    name="birth_date"
                    value={mainInfo.birth_date ? mainInfo.birth_date : ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* country */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-xs font-normal font-['Poppins']">
                  {t("country")}
                </label>
                <select
                  className="w-full bg-transparent text-[#fff] text-xs font-light font-['Poppins'] outline-none h-[41px] px-4 py-2 rounded-[9px] border border-[#adadad]"
                  name="country_id"
                  value={mainInfo.country_id}
                  onChange={handleInputChange}
                >
                  {countries?.map((country) => (
                    <option
                      className="text-[#808080] bg-[#0d0d0d] text-xs font-light font-['Poppins']"
                      key={country.id}
                      value={country.id}
                    >
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* governorate */}
              {/* <div className="flex flex-col gap-2">
                <label className="text-white text-xs font-normal font-['Poppins']">
                  Governorate
                </label>
                <select
                  className="w-full bg-transparent text-[#fff] text-xs font-light font-['Poppins'] outline-none h-[41px] px-4 py-2 rounded-[9px] border border-[#adadad]"
                  name="governorate_id"
                  value={mainInfo.governorate_id}
                  onChange={handleInputChange}
                >
                  {governorates?.map((governorate) => (
                    <option
                      className="text-[#808080] bg-[#0d0d0d] text-xs font-light font-['Poppins']"
                      key={governorate.id}
                      value={governorate.id}
                    >
                      {governorate.name}
                    </option>
                  ))}
                </select>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* body information */}
      <div className="min-h-[225px] p-4 md:p-8 bg-[#222222] rounded-[25px] border border-[#f1f1f2] overflow-hidden">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* main position */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-normal font-['Montserrat']">
                {t("mainPosition")}
              </label>
              <select
                className="w-full bg-transparent text-[#fff] text-xs font-light font-['Poppins'] outline-none h-[41px] px-4 py-2 rounded-[9px] border border-[#adadad]"
                name="main_position"
                value={mainInfo.main_position}
                onChange={handleInputChange}
              >
                {positions.map((position) => (
                  <option
                    key={position}
                    className="text-[#808080] bg-[#0d0d0d] text-xs font-light font-['Poppins']"
                    value={position}
                  >
                    {position}
                  </option>
                ))}
              </select>
            </div>

            {/* second position */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-normal font-['Montserrat']">
                {t("secondPosition")}
              </label>
              <select
                name="second_position"
                value={mainInfo.second_position}
                onChange={handleInputChange}
                className="w-full bg-transparent text-[#fff] text-xs font-light font-['Poppins'] outline-none h-[41px] px-4 py-2 rounded-[9px] border border-[#adadad]"
              >
                {positions.map((position) => (
                  <option
                    key={position}
                    className="text-[#808080] bg-[#0d0d0d] text-xs font-light font-['Poppins']"
                    value={position}
                  >
                    {position}
                  </option>
                ))}
              </select>
            </div>

            {/* primary foot */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-normal font-['Montserrat']">
                {t("primaryFoot")}
              </label>
              <select
                className="w-full bg-transparent text-[#fff] text-xs font-light font-['Poppins'] outline-none h-[41px] px-4 py-2 rounded-[9px] border border-[#adadad]"
                name="primary_foot"
                value={mainInfo.primary_foot}
                onChange={handleInputChange}
              >
                <option
                  className="text-[#808080] bg-[#0d0d0d] text-xs font-light font-['Poppins']"
                  value={"left"}
                >
                  {t("left")}
                </option>
                <option
                  className="text-[#808080] bg-[#0d0d0d] text-xs font-light font-['Poppins']"
                  value={"right"}
                >
                  {t("right")}
                </option>
              </select>
            </div>

            {/* weight */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-xs font-normal font-['Poppins']">
                {t("weight")}
              </label>
              <div className="h-[41px] px-4 py-2 bg-[#0d0d0d] rounded-[9px] border border-[#adadad] flex items-center">
                <input
                  type="number"
                  min={30}
                  placeholder="Enter weight"
                  className="w-full bg-transparent text-[#808080] text-xs font-light font-['Poppins'] outline-none"
                  name="weight_kg"
                  value={mainInfo.weight_kg}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* height */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-xs font-normal font-['Poppins']">
                {t("height")}
              </label>
              <div className="h-[41px] px-4 py-2 bg-[#0d0d0d] rounded-[9px] border border-[#adadad] flex items-center">
                <input
                  type="number"
                  min={100}
                  placeholder="Enter height"
                  className="w-full bg-transparent text-[#808080] text-xs font-light font-['Poppins'] outline-none"
                  name="height_cm"
                  value={mainInfo.height_cm}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* update button */}
      <div className="flex items-center justify-center">
        <button
          className="bg-[#239d60] text-white text-sm font-bold font-['Poppins'] rounded-[9px] px-4 py-2"
          onClick={handleUpdate}
        >
          {t("update")}
        </button>
      </div>
    </div>
  );
};

export default PlayerMainInfo;
