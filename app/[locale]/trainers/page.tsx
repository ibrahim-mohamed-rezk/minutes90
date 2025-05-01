import TrainerFilters from "@/components/trainers/TrainerFilters";
import TrainersPagination from "@/components/trainers/TrainersPagination.";

const Page = () => {
  return (
    <main className="w-full bg-[var(--color-text-black)] min-h-screen rounded-tl-[20px] md:rounded-tl-[30px] lg:rounded-tl-[40px] rounded-tr-[20px] md:rounded-tr-[30px] lg:rounded-tr-[40px]">
      <div className="container mx-auto">
        <TrainerFilters />
        <TrainersPagination />
      </div>
    </main>
  );
};

export default Page;
