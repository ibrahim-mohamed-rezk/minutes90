"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const ReDirectTOLogin = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token: string | null = localStorage.getItem("token");

      if (!token) {
        toast.warning("You are not logged in");
        router.push("/");
      }
    }
  }, [router]);

  return null;
};

export default ReDirectTOLogin