
import PlayerProfile from "@/components/profile/playerProfile/PlayerProfile";
import ReDirectTOLogin from "@/hooks/ReDirectTOLogin";

const page = () => {
  return (
    <div className="w-full">
      <ReDirectTOLogin />
      <div className="container mx-auto">
        <PlayerProfile />
      </div>
    </div>
  );
};

export default page;
