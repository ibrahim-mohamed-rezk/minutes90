"use client";

import { useEffect, useState } from "react";
import PlayersSwiper from "./PlayersSwiper";
import { getApi } from "@/libs/axios/backendServer";
import { useAppSelector } from "@/libs/store/hooks";

interface PlayersCategory {
  under_18_players: {
    items: Array<{
      id: string;
      name: string;
      image?: string;
      position?: string;
      age?: number;
    }>;
  };
  players_in_user_country: {
    items: Array<{
      id: string;
      name: string;
      image?: string;
      position?: string;
      age?: number;
    }>;
  };
  amateur_players: {
    items: Array<{
      id: string;
      name: string;
      image?: string;
      position?: string;
      age?: number;
    }>;
  };
  professional_players: {
    items: Array<{
      id: string;
      name: string;
      image?: string;
      position?: string;
      age?: number;
    }>;
  };
}

const HomeBody = () => {
  const token = useAppSelector((state) => state.user.token);
  const [PlayersCatigory, setPlayersCatigory] =
    useState<PlayersCategory | null>(null);

  useEffect(() => {
    const homeData = async () => {
      try {
        const res = await getApi(
          "/home",
          {},
          {
            Authorization: `Bearer ${token}`,
          }
        );
        setPlayersCatigory(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    homeData();
  }, [token]);

  console.log(PlayersCatigory);

  if (!PlayersCatigory) {
    return <div className="text-white w-full text-center mt-5">Loading...</div>;
  }

  return (
    <main>
      <div className="w-full border-b border-[#717174] my-[30px]"></div>

      <PlayersSwiper
        players={PlayersCatigory?.under_18_players?.items || []}
        title="Discover players in your geographic area"
        subtitle="Under 18 years"
        swiperIndex={0}
        seeAllLink="/players"
      />

      <div className="w-full border-b border-[#717174] my-[30px]"></div>

      {PlayersCatigory?.players_in_user_country && (
        <PlayersSwiper
          players={PlayersCatigory?.players_in_user_country?.items || []}
          title="Most popular"
          subtitle="Most followed players"
          swiperIndex={1}
          seeAllLink="/players"
        />
      )}

      <div className="w-full border-b border-[#717174] my-[30px]"></div>

      <PlayersSwiper
        players={PlayersCatigory?.amateur_players?.items || []}
        title="Most popular"
        subtitle="Most followed players"
        swiperIndex={1}
        seeAllLink="/players"
      />

      <div className="w-full border-b border-[#717174] my-[30px]"></div>

      <PlayersSwiper
        players={PlayersCatigory?.professional_players?.items || []}
        title="Most popular"
        subtitle="Most followed players"
        swiperIndex={1}
        seeAllLink="/players"
      />
    </main>
  );
};

export default HomeBody;
