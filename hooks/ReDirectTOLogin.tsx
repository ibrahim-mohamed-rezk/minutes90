"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const ReDirectTOLogin = () => {
    const token: string | null = localStorage.getItem("token"); 
    const router = useRouter(); 

    useEffect(() => {
        if (!token) {
            toast.warning("You are not logged in");
            router.push("/");
        }
    }, [ token, router]);

    return null;
}

export default ReDirectTOLogin