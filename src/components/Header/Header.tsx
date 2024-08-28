'use client'
import { useUserID } from "@/context/UserIDContext";
import { useEffect, useState } from "react";
import HeaderDeslogado from "../HeaderDeslogado/HeaderDeslogado";
import HeaderLogado from "../HeaderLogado/HeaderLogado";
import { useSearchParams } from "next/navigation";

export default function Home() {
    const { getUserID } = useUserID();

    const [userID, setUserID] = useState<string | null>(null);
    const searchParams = useSearchParams()

    useEffect(()=>{
        setUserID(getUserID())
    },[searchParams])

    return (
        <main className="">
            {
                userID != null ? <HeaderLogado /> : <HeaderDeslogado />
            }
        </main>
    );
}