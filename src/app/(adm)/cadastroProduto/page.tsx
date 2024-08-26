'use client'
import { useRouter } from "next/navigation"
import { useUserID } from "@/context/UserIDContext";
import { useEffect, useState } from "react"
import { buscarUsuario } from "@/server/usuario/action";
import { Usuario } from "@/types/usuarios";
import Confirmacao from "@/components/Pop-up/Confirmacao/Confirmacao";
import BotaoGrande from "@/components/Botoes/BotaoGrande/BotaoGrande"
import TabelaProdutos from "@/components/TabelaProdutos/TabelaProduto";
import EspecificacoesProduto from "@/components/VariacaoProdutos/VariacaoProdutos";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { createProduto } from "@/server/produto/action";
import { Especificacao } from "@/types/produto";

export default function CadastroProduto() {
    const { getUserID } = useUserID()
    const [user, setUser] = useState<Usuario>()
    const router = useRouter()
    const [especificacoes, setEspecificacoes] = useState<Especificacao[]>([])

    useEffect(() => {
        const useEffectFunction = async () => {
            const fetchedID = getUserID();
            if (fetchedID) {
                const usuario: Usuario = await buscarUsuario(parseInt(fetchedID))!;
                if (usuario) {
                    setUser(usuario)
                }
            }
        }
        useEffectFunction()
    }, []);

    const enviarDados = async (e: FormData) => {
        const produto: any = Object.fromEntries(e)
        produto.especificacoes = especificacoes
        console.log(produto)
        await createProduto(produto)
    }

    return (
        <main className="mx-auto text-preto">
            <Confirmacao />
            <section className="">
                <TituloLinha voltar={true} titulo='Cadastrar novo produto' />
            </section>
            <form action={enviarDados}>
                <section className="w-[90%] mx-auto">
                    <TabelaProdutos
                        especificacoes={especificacoes}
                        setEspecificacoes={setEspecificacoes}
                    />
                </section>
                {/* <section className="w-[90%] mx-auto">
                <EspecificacoesProduto />
            </section> */}
                <section className='w-[90%] mx-auto flex flex-row justify-between items-center my-10'>
                    <div className='w-24 md:w-48'>
                        <BotaoGrande background='cancelar' title='Cancelar' type='button' onClick={() => router.back()} />
                    </div>
                </section>
                <section className='w-[90%] mx-auto flex flex-row justify-between items-center my-10'>
                    <div className='w-24 md:w-48'>
                        <BotaoGrande background='secundaria' title='Cadastrar Produto' type='submit' />
                    </div>
                </section>


            </form>
        </main>
    )
}
