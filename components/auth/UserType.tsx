"use client";

import { postApi } from "@/libs/axios/backendServer";
import { FC, useState } from "react";
import { toast } from "react-toastify";

interface UserTypeProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserType: FC<UserTypeProps> = ({ isOpen, onClose }) => {
  const [userType, setUserType] = useState<"player" | "agent" | null>(null);
  const [agentCode, setAgentCode] = useState("");
  const token = localStorage.getItem("token");

  if (!isOpen) return null;

  const handleUserTypeSelect = (type: "player" | "agent") => {
    setUserType(type);
  };

  const handleSubmit = async () => {
    if (!userType) {
      toast.error("Please select a user type");
      return;
    }
    try {
      await postApi(
        "assign-role",
        {
          role: userType,
          agent_code:
            userType === "player"
              ? agentCode === ""
                ? null
                : agentCode
              : undefined,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      toast.success("Role assigned successfully");
      onClose();
    } catch (error) {
      toast.error("Error assigning role");
    }
  };

  const handleSingleSubmit = async () => {
    if (!userType) {
      toast.error("Please select a user type");
      return;
    }
    try {
      await postApi(
        "assign-role",
        {
          role: userType,
          agent_code: null,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      toast.success("Role assigned successfully");
      onClose();
    } catch (error) {
      toast.error("Error assigning role");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[999]">
      <div className="w-full max-w-[536px] h-fit px-4 sm:px-8 py-6 sm:py-8 bg-white rounded-[30px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border border-[#f1f1f2] flex-col justify-end items-center inline-flex overflow-hidden">
        <h2 className="text-3xl sm:text-[40px] font-medium font-['Poppins'] mb-4">
          Signup As
        </h2>
        <div className="flex gap-4 my-[20px] w-full">
          <button
            onClick={() => handleUserTypeSelect("player")}
            className={`${
              userType === "player"
                ? "bg-[var(--color-green)] text-white"
                : "bg-transparent text-[var(--color-green)]"
            } border w-1/2 border-[var(--color-green)] py-2 rounded-lg`}
          >
            Player
          </button>
          <button
            onClick={() => handleUserTypeSelect("agent")}
            className={`${
              userType === "agent"
                ? "bg-[var(--color-green)] text-white"
                : "bg-transparent text-[var(--color-green)]"
            } border w-1/2 border-[var(--color-green)] py-2 rounded-lg`}
          >
            Agent
          </button>
        </div>
        {userType === "player" && (
          <div className="mt-4 w-full flex flex-col gap-2">
            <p className="text-xl w-full text-center font-medium font-['Poppins']">
              Agent Code
            </p>
            <div className="mt-2">
              <input
                type="text"
                value={agentCode}
                onChange={(e) => setAgentCode(e.target.value)}
                placeholder="Enter Agent Code"
                className="border border-gray-300 rounded px-4 py-2 w-full"
                required
              />
              <div className="flex justify-center gap-4 w-full mt-2">
                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white w-1/2 px-4 py-2 rounded"
                >
                  Submit
                </button>
                <button
                  onClick={handleSingleSubmit}
                  className="bg-gray-500 text-white w-1/2 py-2 rounded"
                >
                  Continue as Single Player
                </button>
              </div>
            </div>
          </div>
        )}
        {userType === "agent" && (
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-blue-500 text-white w-1/2 px-4 py-2 rounded-lg mt-[50px]"
          >
            Signup as Agent
          </button>
        )}
      </div>
    </div>
  );
};

export default UserType;
