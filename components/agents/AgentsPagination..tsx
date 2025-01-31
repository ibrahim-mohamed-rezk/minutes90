"use client";

import { useAppSelector } from "@/libs/store/hooks";
import AgentCard from "./AgentCard";

const AgentsPagination = () => {
  const { players } = useAppSelector((state) => state.players.playersData);

  console.log(players);
  return (
    <div className="w-full bg-[var(--color-background)] p-4 rounded-lg flex items-center justify-center flex-wrap gap-[20px] mt-[44px]">
      {players?.items.map((player: any) => (
        <AgentCard key={player.id} agent={player} />
      ))}
    </div>
  );
};

export default AgentsPagination;
