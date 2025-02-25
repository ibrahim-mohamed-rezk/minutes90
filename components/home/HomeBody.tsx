"use client";

import { useEffect, useState } from "react";
import PlayersSwiper from "./PlayersSwiper";
import { getApi } from "@/libs/axios/backendServer";
import { useTranslations } from "next-intl";

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
  const [PlayersCatigory, setPlayersCatigory] =
    useState<PlayersCategory | null>(null);

  const t = useTranslations("HomePage");

  useEffect(() => {
    const homeData = async () => {
      try {
        const res = await getApi("/home", {});
        setPlayersCatigory(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    homeData();
  }, []);

  console.log(PlayersCatigory);

  if (!PlayersCatigory) {
    return <div className="text-white w-full text-center mt-5">Loading...</div>;
  }

  return (
    <main>
      <div className="w-full border-b border-[#717174] my-[30px]"></div>

      <PlayersSwiper
        players={PlayersCatigory?.under_18_players?.items || []}
        title={t("Discover_players")}
        subtitle={t("under_18")}
        swiperIndex={0}
        seeAllLink="/players"
      />

      <div className="w-full border-b border-[#717174] my-[30px]"></div>

      {PlayersCatigory?.players_in_user_country && (
        <PlayersSwiper
          players={PlayersCatigory?.players_in_user_country?.items || []}
          title={t("popular")}
          subtitle={t("most_followed")}
          swiperIndex={1}
          seeAllLink="/players"
        />
      )}

      <div className="w-full border-b border-[#717174] my-[30px]"></div>

      <PlayersSwiper
        players={PlayersCatigory?.amateur_players?.items || []}
        title={t("popular")}
        subtitle={t("most_followed")}
        swiperIndex={1}
        seeAllLink="/players"
      />

      <div className="w-full border-b border-[#717174] my-[30px]"></div>

      <PlayersSwiper
        players={PlayersCatigory?.professional_players?.items || []}
        title={t("popular")}
        subtitle={t("most_followed")}
        swiperIndex={1}
        seeAllLink="/players"
      />
    </main>
  );
};

export default HomeBody;
