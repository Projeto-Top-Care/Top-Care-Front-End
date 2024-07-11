'use client'
import CardServico from "@/components/cardServicos/cardServicos";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import servicos from '@/banco/servicos.json'
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import BarraPesquisaComum from "@/components/BarraPesquisaComum/BarraPesquisaComum";
import { Servico } from "@/types/servicos";
import ButtonFiltro from "./buttonFiltro";

export default function informacoesServicos() {

    const [servicosArray, setServicosArray] = useState<Servico[]>(servicos)

    const [filtro, setFiltro] = useState("Todos")
    const [search, setSearch] = useState<string>('')

    const filtrarServicos = () =>{
        if(filtro != "Todos"){
            const servicosFiltrados = servicos.filter((filter)=>{
                return filter.categoria == filtro
            })
    
            setServicosArray(servicosFiltrados)
            return
        }
        setServicosArray(servicos)
    }

    useEffect(()=>{
        filtrarServicos()
    }, [filtro])

    const searchService = () =>{
        const arraySearched = servicos.filter((filtred)=>{
            return filtred.nome.toLowerCase().includes(search.toLowerCase())
        })

        setServicosArray(arraySearched)
    }

    useEffect(()=>{
        if(search != ""){
            searchService()
        }else{
            setServicosArray(servicos)
        }
    }, [search])

    return (
        <main className="flex flex-col justify-center bg-branco w-full pb-24">
            <TituloLinha voltar={false} titulo="Serviços" />
            <div className="flex flex-col lg:flex-row w-[90%] self-center gap-4">
                <div className="border border-cinza-escuro rounded-lg w-full lg:w-1/2 mb-10">
                    <BarraPesquisaComum placeholder={"Exemplo: 'banho e tosa'"} value={setSearch}/>
                </div>

                <div className="flex flex-row gap-4 font-poppins">
                    <ButtonFiltro filtro={filtro} title="Saúde" onClick={()=>setFiltro("Saúde")}/>
                    <ButtonFiltro filtro={filtro} title="Bem estar" onClick={()=>setFiltro("Bem estar")}/>
                    <ButtonFiltro filtro={filtro} title="Todos" onClick={()=>setFiltro("Todos")}/>
                </div>
            </div>
            <div className="w-[90%] self-center flex flex-col gap-6 mt-8">
                {
                    servicosArray.map((item, i)=>(
                        <CardServico key={i} id={item.id} nome={item.nome} imagem={item.imagem} descricao={item.descricao} />
                    ))
                }
            </div>
        </main>
    )
}