'use client'

import TituloLinha from "@/components/TituloLinha/TituloLinha"
import { FaSearch } from "react-icons/fa"
import { useEffect, useState } from "react"
import Select from "@/components/Select/Select"
import CardFuncionario from "./CardFuncionario"
import { buscarFuncionarios } from "@/server/usuario/funcionario"
import BotaoGrande from "@/components/Botoes/BotaoGrande/BotaoGrande"
import { useRouter } from "next/navigation"
import { FuncionarioSimples } from "@/types/funcionario"

interface AtualizarFuncionarios {
    searchParams: {
        at: number
    }
}

export default function VisualizarAgendamento({ searchParams }: AtualizarFuncionarios) {

    const [att, setAtt] = useState<number>(searchParams.at)

    const [pesquisa, setPesquisa] = useState<string>('')
    const [escolha, setEscolha] = useState<string>('');

    const router = useRouter();

    const [funcionarios, setFuncionarios] = useState<FuncionarioSimples[]>([])

    const verfuncioarios = async () => {
        const response = await buscarFuncionarios()
        setFuncionarios(response)
        console.log(funcionarios)
    }

    useEffect(() => {
        verfuncioarios()
    }, [])
    useEffect(() => {
        verfuncioarios()
    }, [att])

    const ordenarFuncionarios = (funcionarios: FuncionarioSimples[]): FuncionarioSimples[] => {
        if (escolha === "Cadastro decrescente") {
            return [...funcionarios].sort((a, b) => b.codigo - a.codigo);
        } else if (escolha === "Cadastro crescente") {
            return [...funcionarios].sort((a, b) => a.codigo - b.codigo);
        } else if (escolha === "Ordem alfabética") {
            return [...funcionarios].sort((a, b) => a.nome.localeCompare(b.nome));
        } else {
            return funcionarios
        }
    }

    const funcionariosPesquisa = funcionarios.filter((funcionario) =>
        funcionario.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
        funcionario.codigo.toString().includes((pesquisa))
    );
    const funcionariosOrdenados: FuncionarioSimples[] = ordenarFuncionarios(funcionariosPesquisa);

    return (
            <main className='font-poppins text-preto'>
                <section className=''>
                    <TituloLinha voltar={false} titulo={`Funcionarios`} />
                </section>
                <section className="flex justify-between w-[90%] m-auto">
                    <div className="flex w-[60%] px-1 border border-preto rounded-lg h-10">
                        <div className="size-[2rem] h-full flex">
                            <button><FaSearch style={{ color: "#322828" }} /></button>
                        </div>
                        <input
                            type="search"
                            value={pesquisa}
                            onChange={(e) => setPesquisa(e.target.value)}
                            className="focus:outline-0 w-full text-xs sm:text-base placeholder:text-cinza-escuro font-poppins bg-branco"
                            placeholder="Pesquise pelo nome do funcionário" />
                    </div>
                    <div className="">
                        <BotaoGrande onClick={() => router.push('/cadastroFuncionario')} size="text-sm h-full w-full px-4" title={"Adicionar funcionário"} background={"secundaria"} />
                    </div>
                    <div className='md:w-[20%] w-[38%]'>
                        <Select options={['Ordem alfabética', 'Cadastro crescente', 'Cadastro decrescente']} opcaoSelecionada={(opcao) => setEscolha(opcao)} label={'Ordenar por'} opcao={escolha} />
                    </div>
                </section>
                <section className="w-[90%] lg:w-[80%] m-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 sm:pt-12 pb-16 sm:pb-20">
                    {
                        funcionariosOrdenados.map((item, index) => (
                            <CardFuncionario key={index} id={item.id} foto="./assets/dognagrama.png" nome={item.nome} cadastro={item.codigo.toString()} email={item.email} />
                        ))
                    }
                </section>
            </main >
    )
}
