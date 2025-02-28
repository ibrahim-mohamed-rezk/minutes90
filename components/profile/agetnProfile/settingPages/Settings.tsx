"use client";

import { useRouter } from "@/i18n/routing";
import { getApi, postApi } from "@/libs/axios/backendServer";
import { useAppSelector } from "@/libs/store/hooks";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface AgentData {
  first_name: string | undefined;
  last_name: string | undefined;
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  country_id: string | undefined;
  fifa_certificate: string | undefined;
  license_expire: string | undefined;
  image?: File | undefined;
  [key: string]: string | File | undefined;
}

const Settings = () => {
  const [image, setImage] = useState<string | null>(null);
  const [countries, setCountries] = useState<
    [{ id: string; name: string }] | null
  >(null);

  const token = useAppSelector((state) => state.user.token);
  const router = useRouter();

  const [userData, setUserData] = useState<AgentData>({
    first_name: undefined,
    last_name: undefined,
    name: undefined,
    email: undefined,
    phone: undefined,
    country_id: undefined,
    fifa_certificate: undefined,
    license_expire: undefined,
    image: undefined,
  });

  // get countries from backend
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await getApi("countries");
        setCountries(response.data?.countries);
        setUserData({
          ...userData,
          country_id: response.data?.countries[0]?.id,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);

  // get profile from backend
  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await getApi(
          "agent-profile",
          {},
          {
            Authorization: `Bearer ${token}`,
          }
        );

        setUserData({
          ...userData,
          name: res.data?.user?.name,
          first_name: res.data?.user?.first_name,
          last_name: res.data?.user?.last_name,
          email: res.data?.user?.email,
          phone: res.data?.user?.phone,

          country_id: res.data?.user?.governorate?.country?.id,
          governorate_id: res.data?.user?.governorate?.id,

          working_region: res.data?.user?.agent?.working_region,
          fifa_certificate: res.data?.user?.agent?.fifa_certificate,
          license_expire: res.data?.user?.agent?.license_expire,
        });

        console.log(res.data?.user?.name);

        setImage(res.data?.user?.image);
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, [token]);

  const handelUpdate = async () => {
    try {
      await postApi("agent-profile/main", userData, {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      });
      toast.success("Profile updated successfully");

      router.push("/profile");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  console.log(userData);

  return (
    <div className="container mx-auto pt-[50px]">
      <div className="flex w-full flex-col space-y-6 p-4">
        {/* account information */}
        <div className="bg-[#222222] rounded-[25px] border border-[#f1f1f2] overflow-hidden p-6">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
            <div className="flex flex-col items-center space-y-3">
              <img
                className="w-44 h-44 rounded-[30px] border-2 border-[#239d60]"
                src={(image as string) || "/images/icons/userAvatar.png"}
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
                <span
                  onClick={() => {
                    document.getElementById("agentProfileImage")?.click();
                  }}
                  className="text-[#239d60] text-sm font-medium font-['Montserrat'] capitalize"
                >
                  edit profile image
                </span>
                <input
                  type="file"
                  id="agentProfileImage"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setUserData((prevUserData) => ({
                        ...prevUserData,
                        image: file,
                      }));
                      const reader = new FileReader();
                      reader.onload = () => {
                        setImage(reader.result as string);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </div>
            </div>
            <div className=" w-full md:w-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-grow">
              {[
                { label: "First Name", name: "first_name" },
                { label: "Last Name", name: "last_name" },
                { label: "Name", name: "name" },
                { label: "Email", name: "email" },
                { label: "Phone", name: "phone" },
              ].map((label, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  <label className="text-white text-xs font-normal font-['Poppins']">
                    {label.label}
                  </label>
                  <input
                    onChange={(e) => {
                      setUserData({
                        ...userData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    type="text"
                    name={label.name}
                    value={userData[label.name] as string}
                    className="bg-[#0d0d0d] text-white rounded-[9px] border border-[#adadad] p-2 text-sm"
                    placeholder="Enter value"
                  />
                </div>
              ))}

              {/* license expiry */}
              <div className="flex flex-col space-y-2">
                <label className="text-white text-xs font-normal font-['Poppins']">
                  License Expiry
                </label>
                <input
                  type="date"
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      license_expire: e.target.value,
                    });
                  }}
                  className="bg-transparent text-white rounded-[9px] border border-[#adadad] p-2 text-sm"
                />
              </div>

              {/* fifa certificate */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-xs font-normal font-['Poppins']">
                  FIFA Certificate
                </label>
                <select
                  className="w-full bg-transparent text-[#fff] text-xs font-light font-['Poppins'] outline-none h-[41px] px-4 py-2 rounded-[9px] border border-[#adadad]"
                  name="fifa_certificate"
                  value={userData.fifa_certificate}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      fifa_certificate: e.target.value,
                    });
                  }}
                >
                  <option
                    className="text-[#808080] bg-[#0d0d0d] text-xs font-light font-['Poppins']"
                    value={1}
                  >
                    Yes
                  </option>
                  <option
                    className="text-[#808080] bg-[#0d0d0d] text-xs font-light font-['Poppins']"
                    value={0}
                  >
                    No
                  </option>
                </select>
              </div>

              {/* country */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-xs font-normal font-['Poppins']">
                  Country
                </label>
                <select
                  className="w-full bg-transparent text-[#fff] text-xs font-light font-['Poppins'] outline-none h-[41px] px-4 py-2 rounded-[9px] border border-[#adadad]"
                  name="country_id"
                  value={userData.country_id}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      country_id: e.target.value,
                    });
                  }}
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
            </div>
          </div>
        </div>

        {/* players added */}
        {/* <div className="bg-[#222222] rounded-[25px] border border-[#f1f1f2] overflow-hidden p-6">
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
        </div> */}

        <div className="flex justify-center items-center gap-5 flex-wrap">
          <button
            onClick={handelUpdate}
            className="w-[117px] h-[43px] px-[13px] py-2.5 bg-[#34a853] rounded-xl text-white text-sm font-bold font-['Montserrat']"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
