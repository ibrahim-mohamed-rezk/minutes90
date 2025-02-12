import ProfileType from "@/components/profile/ProfileType";
import ReDirectTOLogin from "@/hooks/ReDirectTOLogin";

const page = () => {
  return (
    <div className="w-full">
      <ReDirectTOLogin />
      <ProfileType />
    </div>
  );
};

export default page;
