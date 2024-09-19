'use client'
import CardServico from "@/components/cardServicos/cardServicos";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { useEffect, useState } from "react";
import BarraPesquisaComum from "@/components/BarraPesquisaComum/BarraPesquisaComum";
import { Servico } from "@/types/servicos";
import ButtonFiltro from "@/app/(misto)/informacoesServicos/buttonFiltro";
import BotaoGrande from "@/components/Botoes/BotaoGrande/BotaoGrande";
import { useRouter } from "next/navigation";
import { getServicos } from "@/server/servicos/action";

interface InterfaceServicos {
    isAdmin: boolean
}

export default function PaginaServicos({ isAdmin }: InterfaceServicos) {

    const [servicosArray, setServicosArray] = useState<Servico[]>([])
    const [listagem, setListagem] = useState<Servico[]>([])

    useEffect(()=>{
        const func = async () =>{
            const servicos = await getServicos()
            console.log(servicos)
            setServicosArray(servicos)
            setListagem(servicos)
        }   
        func()
    },[])

    const { push } = useRouter();

    const [filtro, setFiltro] = useState("Todos")
    const [search, setSearch] = useState<string>('')

    const filtrarServicos = () => {
        if (filtro != "Todos") {
            const servicosFiltrados = servicosArray.filter((filter) => {
                return filter.categoria == filtro
            })

            setListagem(servicosFiltrados)
            return
        }
        setListagem(servicosArray)
    }

    useEffect(() => {
        filtrarServicos()
    }, [filtro])

    const searchService = () => {
        const arraySearched = servicosArray.filter((filtred) => {
            return filtred.nome.toLowerCase().includes(search.toLowerCase())
        })

        setListagem(arraySearched)
    }

    useEffect(() => {
        if (search != "") {
            searchService()
        } else {
            setListagem(servicosArray)
        }
    }, [search])

    return (
        <main className="flex flex-col justify-center bg-branco w-full pb-24">
            <TituloLinha voltar={false} titulo="Serviços" />
            <div className="flex flex-col lg:flex-row w-[90%] self-center gap-4">
                <div className="border border-cinza-escuro rounded-lg w-full lg:w-1/2 mb-10">
                    <BarraPesquisaComum placeholder={"Exemplo: 'banho e tosa'"} value={setSearch} />
                </div>

                <div className="flex flex-row gap-4 font-poppins">
                    <ButtonFiltro filtro={filtro} title="Saúde" onClick={() => setFiltro("Saúde")} />
                    <ButtonFiltro filtro={filtro} title="Bem estar" onClick={() => setFiltro("Bem estar")} />
                    <ButtonFiltro filtro={filtro} title="Todos" onClick={() => setFiltro("Todos")} />
                </div>
            </div>
            <section className="w-[90%] mx-auto">
                <div className={`${isAdmin ? `block` : `hidden`} w-[20%]`}>
                    <BotaoGrande size="h-9" title="Cadastrar serviço" background={"secundaria"} type={"button"} onClick={() => push('/cadastrarServico')} />
                </div>
            </section>
            <div className="w-[90%] self-center flex flex-col gap-6 mt-8">
                { listagem &&
                    listagem.map((item, i) => (
                        <CardServico isAdmin={isAdmin} key={i} servico={item} />
                    ))
                }
            </div>
        </main>
    )
}
