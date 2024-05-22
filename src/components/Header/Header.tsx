'use client'

import { getLocalStorageItem } from "@/server/localStorage/actions"
import { buscarUsuario } from "@/server/usuario/action"
import { Usuario } from "@/types/usuarios"
import { useEffect, useState } from "react"
import HeaderDeslogado from "../HeaderDeslogado/HeaderDeslogado"
import HeaderLogado from "../HeaderLogado/HeaderLogado"

export default function Home() {
    const idUser = getLocalStorageItem('idUser');
    const usuario: Usuario | undefined = buscarUsuario(parseInt(idUser!));
    const [user, setUser] = useState<Usuario | undefined>(usuario)

    useEffect(()=>{
        setUser(buscarUsuario(parseInt(idUser!)))
        console.log(idUser)
    },[user])

    const renderizarHeader = () =>{
        return (
            <>
                {user ? <HeaderLogado/> : <HeaderDeslogado/>}
            </>
        )
    }
    return (
        <main className="">
            {renderizarHeader()}
        </main>
    )
}