"use client";

import { useAppDispatch } from "@/libs/store/hooks";
import { autoLogin, setToken } from "@/libs/store/slices/userSlice";
import { useEffect } from "react";

const AutoLogin = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token: string | null = localStorage.getItem("token");
      if (token) {
        dispatch(autoLogin(token));
        dispatch(setToken(token));
      }
    }
  }, []);

  return null; 
};

export default AutoLogin;
