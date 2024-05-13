'use client'
import BarraPesquisa from "@/components/BarraPesquisa/BarraPesquisa";
import BotaoCategoriaPergunta from "@/components/BotaoCategoriaPergunta/botaoCategoriaPergunta";
import ItemAcordiao from "@/components/ItemAcordeao/itemAcordeao";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { buscarCategoria } from "@/server/duvidas/action";
import { useEffect, useState } from "react";

export default function duvidasFrequentes() {

    const categorias = [{ categoria: "Compras e pedidos", ativo: false },
    { categoria: "Pagamento", ativo: false },
    { categoria: "Serviços", ativo: false },
    { categoria: "Lojas físicas", ativo: false },
    { categoria: "Entrega", ativo: false },
    { categoria: "Reembolso", ativo: false }]

    const [categoriaEscolhida, setCategoriaEscolhida] = useState("")

    return (
        <main className="flex flex-col justify-center bg-branco w-full gap-6 mt-10 mb-24">
            <TituloLinha titulo="Dúvidas frequentes" />

            <div className="px-16 min-[1025]:px-20 justify-between flex flex-row w-full">

                <section className="flex flex-col gap-4 w-[45%]">
                    <div className="rounded-lg border-[2px] border-cinza">
                        <BarraPesquisa placeholder={"Pesquisar dúvida"} />
                    </div>

                    <p className="text-preto text-base font-poppins">Ou navegue por categorias...</p>

                    <div className="grid grid-cols-2 gap-4">
                        {categorias.map((categoria, index) => (
                            <BotaoCategoriaPergunta click={() => setCategoriaEscolhida(categoria.categoria)} key={index} title={categoria.categoria} active={categoria.ativo} />
                        ))}
                    </div>
                </section>

                <section className="flex justify-center w-[50%] lg:w-[45%]">
                    {
                        <div className="w-full flex flex-col gap-4">
                            {buscarCategoria(categoriaEscolhida).map((item, index) => (
                                <ItemAcordiao key={index} titulo={item.pergunta} texto={item.resposta} />
                            ))}
                        </div>
                    }
                </section>
            </div>
        </main>
    )
}

