"use client";

import { useAppSelector } from "@/libs/store/hooks";
import AgentProfile from "./agetnProfile/AgentProfile";
import PlayerProfile from "./playerProfile/PlayerProfile";

const ProfileType = () => {
  const { userData } = useAppSelector((state) => state.user);
  return (
    <div className="container mx-auto">
      {userData?.agent ? <AgentProfile /> : <PlayerProfile />}
    </div>
  );
};

export default ProfileType;
