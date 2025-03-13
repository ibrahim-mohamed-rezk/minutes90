"use client";

import { useAppSelector } from "@/libs/store/hooks";
import PlayersCard from "./PlayersCard";
import PagiationSection from "../PagiationSection";
import { useState } from "react";

const PlayersPagination = () => {
  const { players } = useAppSelector((state) => state.players.playersData);
  const [currentPage, setCurrentPage] = useState(
    players?.pagination?.current_page || 1
  );

  console.log(players);
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[200px] ">
      <div className="w-full bg-[var(--color-background)] p-4 rounded-lg flex items-center justify-center flex-wrap gap-[clamp(10px,1.04166665vw,20px)] mt-[44px]">
        {players?.items.map(
          (player: {
            id: string;
            name: string;
            image?: string;
            position?: string;
            age?: number;
          }) => (
            <PlayersCard key={player.id} player={player} />
          )
        )}
      </div>
      <PagiationSection
        startPage={1}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        endPage={players?.pagination?.last_page}
      />
    </div>
  );
};

export default PlayersPagination;
