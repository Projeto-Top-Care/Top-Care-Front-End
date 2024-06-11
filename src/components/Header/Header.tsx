'use client'
import { useUserID } from "@/context/UserIDContext";
import { buscarUsuario } from "@/server/usuario/action";
import { Usuario } from "@/types/usuarios";
import { useEffect, useState } from "react";
import HeaderDeslogado from "../HeaderDeslogado/HeaderDeslogado";
import HeaderLogado from "../HeaderLogado/HeaderLogado";

export default function Home() {
    const { userID } = useUserID();

    const [user, setUser] = useState<Usuario | undefined>(undefined);

    useEffect(() => {
        if (userID) {
            const usuario = buscarUsuario(parseInt(userID));
            setUser(usuario);
        } else {
            setUser(undefined);
        }
    }, [userID]);

    const renderizarHeader = () => {
        return user ? <HeaderLogado /> : <HeaderDeslogado />;
    };

    return (
        <main className="">
            {renderizarHeader()}
        </main>
    );
}