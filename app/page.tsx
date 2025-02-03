import Header from "@/components/home/Header";
import PlayersSwiper from "@/components/home/PlayersSwiper";
import "@/public/css/home.css";

interface Player {
  id: string;
  name: string;
  image?: string;
  position?: string;
  age?: number;
}

export default function Home() {
  const players: Player[] = [
    {
      id: "1",
      name: "Player 1",
      image: "https://via.placeholder.com/150",
      position: "Position 1",
      age: 18,
    },
  ];

  return (
    <div className="w-full bg-[var(--color-text-black)] min-h-screen rounded-tl-[20px] md:rounded-tl-[30px] lg:rounded-tl-[40px] rounded-tr-[20px] md:rounded-tr-[30px] lg:rounded-tr-[40px]">
      <div className="container mx-auto">
        <header className="w-full pt-[40px]">
          <Header />
        </header>

        <main>
          <div className="w-full border-b border-[#717174] my-[30px]"></div>

          <PlayersSwiper
            players={players}
            title="Discover players in your geographic area"
            subtitle="Under 18 years"
            swiperIndex={0}
            seeAllLink="/players"
          />

          <div className="w-full border-b border-[#717174] my-[30px]"></div>

          <PlayersSwiper
            players={players}
            title="Most popular"
            subtitle="Most followed players"
            swiperIndex={1}
            seeAllLink="/players"
          />
        </main>
      </div>
    </div>
  );
}
