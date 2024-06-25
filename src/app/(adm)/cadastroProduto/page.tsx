'use client'
import { useRouter } from "next/navigation"
import { useUserID } from "@/context/UserIDContext";
import {useEffect, useState} from "react"
import { buscarUsuario } from "@/server/usuario/action";
import { Usuario } from "@/types/usuarios";
import Confirmacao from "@/components/Pop-up/Confirmacao/Confirmacao";
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande"

export default function CadastroProduto() {
    const { getUserID } = useUserID()
    const [user, setUser] = useState<Usuario>()
    const router = useRouter()

    useEffect(() => {
        const fetchedID = getUserID();
        if (fetchedID) {
            const usuario: Usuario = buscarUsuario(parseInt(fetchedID))!;
            if (usuario) {
                setUser(usuario)
            }
        }
    }, []);

    return(
        <main>
            <Confirmacao/>
            <section className="mt-16">
                <div className='w-[10%]'>
                    <BotaoGrande title='Voltar' background='bg-secundaria' type='button' onClick={() => router.back()} />
                </div>
            </section>
            <section className="flex items-center justify-center">  
                <p className="font-averia font-semibold text-2xl">Cadastre um produto novo</p>
            </section>
            <section>
                
            </section>
            <section className='flex flex-row justify-between items-center my-10'>
                <div className='w-48'>
                    <BotaoGrande background='bg-error' title='Cancelar' type='button' onClick={()=>router.back()} />
                </div>
                <div className='w-60'>
                    <BotaoGrande background='bg-secundaria' title='Cadastrar Produto' type='button' />
                </div>
            </section>
        </main>
    )
}