'use client'
import { useRouter } from "next/navigation"
import { useUserID } from "@/context/UserIDContext";
import { useEffect, useState } from "react"
import { buscarUsuario } from "@/server/usuario/action";
import { Usuario } from "@/types/usuarios";
import Confirmacao from "@/components/Pop-up/Confirmacao/Confirmacao";
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande"
import TabelaProdutos from "@/components/TabelaProdutos/TabelaProduto";
import EspecificacoesProduto from "@/components/EspecificaçoesProduto/Especificacoes";
import TituloLinha from "@/components/TituloLinha/TituloLinha";

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

    return (
        <main className="w-[90%] mx-auto text-preto">
            <Confirmacao />
            <section className="">
                <TituloLinha voltar={true} titulo='Cadastrar novo serviço' />
            </section>
            <section>
                <TabelaProdutos />
            </section>
            <section>
                <EspecificacoesProduto />
            </section>
            <section className='flex flex-row justify-between items-center my-10'>
                <div className='w-24 md:w-48'>
                    <BotaoGrande background='bg-error' textColor="text-branco" title='Cancelar' type='button' onClick={() => router.back()} />
                </div>
                <div className='md:w-60'>
                    <BotaoGrande background='bg-secundaria' title='Cadastrar Produto' type='button' />
                </div>
            </section>
        </main>
    )
}