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
        <main className="flex flex-col justify-center bg-branco w-full gap-6 lg:gap-12 mt-10 mb-24">
            <TituloLinha titulo="Dúvidas frequentes" />

            <section className="px-8 md:px-24 min-[1025]:px-20 justify-between gap-4 sm:gap-8 lg:gap-0 flex flex-col lg:flex-row w-full">

                <section className="flex flex-col gap-8 w-full lg:w-[45%]">
                    <p className="text-preto text-base font-poppins sm:m-auto lg:m-0">Navegue pelas categorias a seguir</p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 sm:m-auto lg:m-0 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 sm:w-fit">
                        {categorias.map((categoria, index) => (
                            <BotaoCategoriaPergunta click={() => setCategoriaEscolhida(categoria.categoria)} key={index} title={categoria.categoria}/>
                        ))}
                    </div>
                </section>

                <section className="flex justify-center w-full lg:w-[45%]">
                    {
                        <div className="w-full flex flex-col gap-4">
                            {buscarCategoria(categoriaEscolhida).map((item, index) => (
                                <ItemAcordiao key={index} titulo={item.pergunta} texto={item.resposta} />
                            ))}
                        </div>
                    }
                </section>
            </section>

            <section className="px-8 flex flex-col w-full pt-4 sm:pt-12 gap-4 items-center text-preto">
                    <h2 className="text-2xl font-averia font-bold">Ainda não resolveu?</h2>
                    <p className="text-center font-poppins text-base">Fale conosco! Mande um <span></span>
                        <a className="underline" href="#">email</a>, <span></span>
                        <a className="underline" href="#">mensagem SMS</a>, ou entre em contato pelo <span></span>
                        <a className="underline" href="/contato"> formulário</a>.
                    </p>
            </section>
        </main>
    )
}

