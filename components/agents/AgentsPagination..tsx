"use client";

import { useAppSelector } from "@/libs/store/hooks";
import AgentCard from "./AgentCard";
import PagiationSection from "../PagiationSection";
import { useState } from "react";

interface agentItem {
  id: string;
  name: string;
  country: string;
  agent_code: string;
  playersAdded: number;
  playersWithClubs: number;
  fifa_certificate: number;
  user: {
    image: string;
    name: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    role: string;
  };
}

const AgentsPagination = () => {
  const { agents } = useAppSelector((state) => state.agent.agentData);
  const [currentPage, setCurrentPage] = useState(
    agents?.pagination?.current_page || 1
  );

  console.log(agents);
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[200px] ">
      <div className="w-full bg-[var(--color-background)] p-[clamp(8px,0.833334vw,16px)] rounded-lg flex items-center justify-center flex-wrap gap-[clamp(8px,1.04166665vw,20px)] mt-[44px]">
        {agents?.items?.map((agent: agentItem) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
      <PagiationSection
        startPage={1}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        endPage={agents?.pagination?.last_page}
      />
    </div>
  );
};

export default AgentsPagination;
