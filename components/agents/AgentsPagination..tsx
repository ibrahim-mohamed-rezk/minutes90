"use client";

import { useAppSelector } from "@/libs/store/hooks";
import AgentCard from "./AgentCard";
import PagiationSection from "../PagiationSection";
import { useState } from "react";

const AgentsPagination = () => {
  const { players } = useAppSelector((state) => state.players.playersData);
  const [currentPage, setCurrentPage] = useState(
    players?.pagination?.current_page || 1
  );

  console.log(players);
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[200px] ">
      <div className="w-full bg-[var(--color-background)] p-4 rounded-lg flex items-center justify-center flex-wrap gap-[20px] mt-[44px]">
        {players?.items.map((player: any) => (
          <AgentCard key={player.id} agent={player} />
        ))}
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

export default AgentsPagination;
