import Header from "@/components/home/Header";
import HomeBody from "@/components/home/HomeBody";
import "@/public/css/home.css";

// get home data from backend

export default async function Home() {
  return (
    <div className="w-full bg-[var(--color-text-black)] min-h-screen rounded-tl-[20px] md:rounded-tl-[30px] lg:rounded-tl-[40px] rounded-tr-[20px] md:rounded-tr-[30px] lg:rounded-tr-[40px]">
      <div className="container mx-auto">
        <header className="w-full pt-[40px]">
          <Header />
          <HomeBody />
        </header>
      </div>
    </div>
  );
}
