'use client'

import TituloLinha from "@/components/TituloLinha/TituloLinha"
import InputPreenchido from "../visualizarPedido/InputPreenchido"
import { FaSearch } from "react-icons/fa"
import { useState } from "react"
import Select from "@/components/Select/Select"
import CardFuncionario from "./CardFuncionario"
import { buscarFuncionarios, cadastroFuncionario } from "@/server/usuario/funcionario"
import BotaoGrande from "@/components/Botoes/BotaoGrande/BotaoGrande"
import { useRouter } from "next/navigation"

interface VisualizarAgendamentoProps {
    searchParams: {
        id: number
    }
}

export default function VisualizarAgendamento({ searchParams }: VisualizarAgendamentoProps) {

    const [pesquisa, setPesquisa] = useState<string>('')
    const [escolha, setEscolha] = useState<string>('');

    const router = useRouter();

    const funcionarios = [
        { id: 1, nome: "Victor Gabriel Micheluzzi", email: "victor@email.com", cadastro: "1", cpf: "111.222.333-44" },
        { id: 2, nome: "João Victor Santana", email: "joao@email.com", cadastro: "2", cpf: "111.222.333-44" },
        { id: 3, nome: "Carlos Eduardo Bolzanell dos Santos", email: "carlos@email.com", cadastro: "3", cpf: "111.222.333-44" },
        { id: 4, nome: "Luana Becker", email: "luana@email.com", cadastro: "4", cpf: "111.222.333-44" },
        { id: 5, nome: "Karoliny Daiana Cieply", email: "karoliny@email.com", cadastro: "5", cpf: "111.222.333-44" },
        { id: 6, nome: "Romário Hornburg", email: "romario@email.com", cadastro: "6", cpf: "111.222.333-44" },
        { id: 7, nome: "Kristian Erdmann", email: "krsitian@email.com", cadastro: "7", cpf: "111.222.333-44" },
    ]

    const ordenarFuncionarios = (funcionarios: Object[]): Object[] => {
        if (escolha === "Cadastro decrescente") {
            return [...funcionarios].sort((a, b) => b.cadastro - a.cadastro);
        } else if (escolha === "Cadastro crescente") {
            return [...funcionarios].sort((a, b) => a.cadastro - b.cadastro);
        } else if (escolha === "Ordem alfabética") {
            return [...funcionarios].sort((a, b) => a.nome.localeCompare(b.nome));
        } else {
            return funcionarios
        }
    }

    const funcionariosPesquisa = funcionarios.filter((funcionario) =>
        funcionario.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
        funcionario.cadastro.toLowerCase().includes(pesquisa.toLowerCase())
    );
    const funcionariosOrdenados: Object[] = ordenarFuncionarios(funcionariosPesquisa);

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
                <div className='md:w-[18%] w-[38%]'>
                    <Select options={['Ordem alfabética', 'Cadastro crescente', 'Cadastro decrescente']} opcaoSelecionada={(opcao) => setEscolha(opcao)} label={'Ordenar por'} opcao={escolha} />
                </div>
            </section>
            <section className="w-[90%] lg:w-[80%] m-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 sm:pt-12 pb-16 sm:pb-20">
                {
                    funcionariosOrdenados.map((item, index) => (
                        <CardFuncionario key={index} id={item.id} foto="./assets/dognagrama.png" nome={item.nome} cadastro={item.cadastro} cpf={item.cpf} email={item.email} />
                    ))
                }
            </section>

        </main >
    )
}
