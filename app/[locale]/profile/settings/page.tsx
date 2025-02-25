import PlayerProfileSettings from "@/components/profile/playerProfile/PlayerProfileSettings";

const page = () => {
  return (
    <div className="flex w-full items-start justify-start gap-[30px] pt-[48px]">
      <div className="container mx-auto">
        <PlayerProfileSettings />
      </div>
    </div>
  );
};

export default page;
