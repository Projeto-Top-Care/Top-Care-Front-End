'use client'
import BarraPesquisa from "@/components/BarraPesquisa/BarraPesquisa";
import BotaoCategoriaPergunta from "@/components/BotaoCategoriaPergunta/botaoCategoriaPergunta";
import ItemAcordiao from "@/components/ItemAcordeao/itemAcordeao";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { buscarCategoria } from "@/server/duvidas/action";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function informacoesServicos() {

    const categorias = [{ categoria: "Compras e pedidos", ativo: false },
    { categoria: "Pagamento", ativo: false },
    { categoria: "Serviços", ativo: false },
    { categoria: "Lojas físicas", ativo: false },
    { categoria: "Entrega", ativo: false },
    { categoria: "Reembolso", ativo: false }]

    const [categoriaEscolhida, setCategoriaEscolhida] = useState("")

    return (
        <main className="flex flex-col justify-center bg-branco w-full gap-6 lg:gap-12 mt-10 mb-24">
            <TituloLinha titulo="Serviços" />

            <div>
                <div className="border-[1px] border-cinza-escuro rounded-lg">
                    <BarraPesquisa placeholder={"Exemplo: 'banho e tosa'"} />
                </div>

                <div className="flex flex-row gap-4 font-poppins">
                    <button className="text-cinza-escuro active:text-[#405989] active:bg-terciaria active:border-[#405989] py-2 px-6 border-[1px] border-cinza rounded-xl"><IoClose />Saúde</button>
                    <button className="text-cinza-escuro active:text-[#405989] active:bg-terciaria active:border-[#405989] py-2 px-6 border-[1px] border-cinza rounded-xl"><IoClose />Bem estar</button>
                    <button className="text-cinza-escuro active:text-[#405989] active:bg-terciaria active:border-[#405989] py-2 px-6 border-[1px] border-cinza rounded-xl"><IoClose />Todos</button>
                </div>
            </div>
        </main>
    )
}