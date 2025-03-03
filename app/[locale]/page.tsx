import Header from "@/components/home/Header";
import HomeBody from "@/components/home/HomeBody";
import "@/public/css/home.css";

export default function Page() {
  return (
    <div className="w-full bg-[var(--color-text-black)] min-h-screen rounded-tl-[20px] md:rounded-tl-[30px] lg:rounded-tl-[40px] rounded-tr-[20px] md:rounded-tr-[30px] lg:rounded-tr-[40px]">
      <div className="container mx-auto">
        <header className="w-full pt-[20px] md:pt-[40px]">
          <Header />
          <HomeBody /> 
        </header>
      </div>
    </div>
  );
}
