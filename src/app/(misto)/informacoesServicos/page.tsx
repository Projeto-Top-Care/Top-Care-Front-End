'use client'
import BarraPesquisa from "@/components/BarraPesquisa/BarraPesquisa";
import CardServico from "@/components/cardServicos/cardServicos";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import servicos from '@/banco/servicos.json'
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function informacoesServicos() {

    const [filtro, setFiltro] = useState("Todos")

    const opcaoFiltro = (opcao: string) => {
        if (opcao == "Saúde") {
            (filtro == "Saúde" ? setFiltro("Todos") : setFiltro("Saúde"))
        } else if (opcao == "Bem estar") {
            (filtro == "Bem estar" ? setFiltro("Todos") : setFiltro("Bem estar"))
        } else if (opcao == "Todos") {
            (filtro == "Todos" ? setFiltro("Todos") : setFiltro("Todos"))
        }
    }

    const filtrar = () => {
        if (filtro == "Saúde") {
            return (
                <div className="w-[90%] self-center flex flex-col gap-6">
                    {
                        servicos.map((item, i) => (
                            (item.nome == "Consultas" || item.nome == "Vacinação" ? 
                            <CardServico key={i} id={item.id} nome={item.nome} imagem={item.imagem} descricao={item.descricao} /> :
                            <></>)
                    ))
                    }
                </div>
            )
        } else if (filtro == "Bem estar") {
            return (
                <div className="w-[90%] self-center flex flex-col gap-6">
                    {
                        servicos.map((item, i) => (
                            (item.nome == "Banho" || item.nome == "Banho e tosa" ? 
                            <CardServico key={i} id={item.id} nome={item.nome} imagem={item.imagem} descricao={item.descricao} /> :
                            <p></p>)
                        ))
                    }
                </div>
            )
        } 
        else if (filtro == "Todos") {
            return (
                <div className="w-[90%] self-center flex flex-col gap-6">
                    {
                        servicos.map((item, i) => (
                            <CardServico key={i} id={item.id} nome={item.nome} imagem={item.imagem} descricao={item.descricao} />
                        ))
                    }
                </div>
            )
        }
    }

    return (
        <main className="flex flex-col justify-center bg-branco w-full gap-4 sm:gap-12 pb-24">
            <TituloLinha voltar={false} titulo="Serviços" />

            <div className="flex flex-col lg:flex-row w-[90%] self-center gap-4">
                <div className="border-[1px] border-cinza-escuro rounded-lg w-full lg:w-1/2">
                    <BarraPesquisa placeholder={"Exemplo: 'banho e tosa'"} />
                </div>

                <div className="flex flex-row gap-4 font-poppins">
                    <button onClick={() => opcaoFiltro("Saúde")} className={`text-sm sm:text-base text-cinza-escuro duration-200 hover:bg-terciaria flex flex-row items-center gap-1 sm:gap-2 ${filtro == "Saúde" ? `text-[#405989] border-[#405989] bg-terciaria` : `text-cinza-escuro border-cinza bg-branco`} py-1 sm:px-6 px-3 border-[1px] border-cinza rounded-lg`}>{filtro == "Saúde" ? <IoClose /> : ""}Saúde</button>
                    <button onClick={() => opcaoFiltro("Bem estar")} className={`text-sm sm:text-base text-cinza-escuro duration-200 hover:bg-terciaria flex flex-row items-center gap-1 sm:gap-2 ${filtro == "Bem estar" ? `text-[#405989] border-[#405989] bg-terciaria` : `text-cinza-escuro border-cinza bg-branco`} py-1 sm:px-6 px-3 border-[1px] border-cinza rounded-lg`}>{filtro == "Bem estar" ? <IoClose /> : ""}Bem estar</button>
                    <button onClick={() => opcaoFiltro("Todos")} className={`text-sm sm:text-base text-cinza-escuro duration-200 hover:bg-terciaria flex flex-row items-center gap-1 sm:gap-2 ${filtro == "Todos" ? `text-[#405989] border-[#405989] bg-terciaria` : `text-cinza-escuro border-cinza bg-branco`} py-1 sm:px-6 px-3 border-[1px] border-cinza rounded-lg`}>{filtro == "Todos" ? <IoClose /> : ""}Todos</button>
                </div>
            </div>

            {filtrar()}
        </main>
    )
}