'use client'
import { useRouter } from "next/navigation"
import Confirmacao from "@/components/Pop-up/Confirmacao/Confirmacao";
import BotaoGrande from "@/components/Botoes/BotaoGrande/BotaoGrande"
import TabelaProdutos from "@/components/TabelaProdutos/TabelaProduto";
import VariacaoProdutos from "@/components/VariacaoProdutos/VariacaoProdutos";
import TituloLinha from "@/components/TituloLinha/TituloLinha";

export default function CadastroProduto() {
    const router = useRouter()

    const cadastrar = async (e: FormData) => {
        console.log("Vai dar problema")
        // Função de cadastro de produto
    }

    return (
        <form action={cadastrar} className="mx-auto text-preto">
            <Confirmacao />
            <section className="">
                <TituloLinha voltar={true} titulo='Cadastrar novo produto' />
            </section>
            <section className="w-[90%] mx-auto">
                <TabelaProdutos />
            </section>
            <section className="w-[90%] mx-auto">
                <VariacaoProdutos />
            </section>
            <section className='w-[90%] mx-auto flex flex-row justify-between items-center my-10'>
                <div className='w-24 md:w-48'>
                    <BotaoGrande background='cancelar' title='Cancelar' type='button' onClick={() => router.back()} />
                </div>
                <div className='md:w-60'>
                    <BotaoGrande background='secundaria' title='Cadastrar Produto' type='button' />
                </div>
            </section>
        </form>
    )
}