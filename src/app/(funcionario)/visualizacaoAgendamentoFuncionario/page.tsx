'use client'
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import CardVisualizacao from "./CardVisualizacao/CardVisualizacao";
import { useEffect, useState } from "react";
import { FuncionarioCompleto, HorarioFuncionarioSimples } from "@/types/funcionario";
import { buscarFuncionario, verAgendamentosFuncionario, verHorariosDisponiveis } from "@/server/usuario/funcionario";
import Select from "@/components/Select/Select";
import { Agendamentos } from "@/types/agendamentos";

interface VisualizarFuncionarioProps {
    searchParams: {
        id: number
    }
}

export default function VisualizarAgendamentoFuncionario({ searchParams }: VisualizarFuncionarioProps) {

    const idFuncionario = searchParams.id;
    const [funcionario, setFuncionario] = useState<FuncionarioCompleto>()
    const [horariosDisponiveis, setHorariosDisponiveis] = useState<HorarioFuncionarioSimples[]>()
    const [agendamentosFuncionario, setAgendamentosFuncionario] = useState<Agendamentos[]>()
    const [opcaoSelecionada, setOpcaoSelecionada] = useState<string>("Todos")

    const verFuncionario = async () => {
        const response = await buscarFuncionario(idFuncionario)
        setFuncionario(response)
    }
    const verHorarios = async () => {
        const response = await verHorariosDisponiveis(idFuncionario)
        setHorariosDisponiveis(response)
    }
    const verAgendamentos = async () => {
        const response = await verAgendamentosFuncionario(idFuncionario)
        setAgendamentosFuncionario(response)
    }

    useEffect(() => {
        verFuncionario()
        verHorarios()
        verAgendamentos()
    }, [])

    const formatarData = (dateString: string) => {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    };

    return (
        <main className='mb-14 font-poppins'>
            <section className="">
                <TituloLinha titulo={"Olá, funcionário " + funcionario?.nome} voltar={false} />
                <section className="flex flex-col md:mb-12 mb-4 md:w-[95%] lg:pl-16 md:pl-10 md:p-0 p-4 lg:self-start self-center gap-8">
                    <div className="w-full flex justify-between">
                        <p className="font-averia text-preto md:text-2xl text-xl lg:text-start text-center font-bold">Meus agendamentos</p>
                    </div>
                    <div className="gap-8 grid lg:grid-cols-3 md:grid-cols-2 md:mt-2">
                        {
                            agendamentosFuncionario && agendamentosFuncionario.length > 0 ? (
                                agendamentosFuncionario.map((item, index) => (
                                    <CardVisualizacao
                                        key={index}
                                        servico={item.varianteServico.nome}
                                        data={item.horario.dia}
                                        horario={item.horario.horaInicio}
                                        fotoPet={`./assets/perfil/${item.pet.especie}_perfil.jpg`}
                                        nomePet={item.pet.nome}
                                        animal={item.pet.especie}
                                        raca={item.pet.raca}
                                        porte={item.pet.porte}
                                    />
                                ))
                            ) : (
                                <p className="w-full m-auto col-span-3">O usuário não tem nenhum agendamento :)</p>
                            )
                        }
                    </div>
                </section>
            </section>
            <TituloLinha titulo={"Horários disponíveis"} voltar={false} />
            <section className="md:mb-24 mb-4 flex flex-col md:w-[95%] lg:pl-16 md:pl-10 md:p-0 p-4 lg:self-start self-center gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        horariosDisponiveis && horariosDisponiveis.length > 0 ? (
                            horariosDisponiveis.map((item, index) => (
                                <div key={index} className="w-full flex flex-col border-roxo-select border rounded-lg p-2 text-roxo-select">
                                    <p className="sm:text-base text-sm font-semibold">Dia {formatarData(item.dia)}</p>
                                    <p className="sm:text-base text-sm">{item.horaInicio.slice(0, 5)} às {item.horaFim.slice(0, 5)}</p>
                                </div>
                            ))
                        ) : (
                            <div className="w-full m-auto flex flex-col col-span-4">
                                <p className="w-full m-auto">O usuário não tem horários disponíveis :(</p>
                                <img className="w-64 self-center" src="./assets/dog-sad.png" />
                            </div>
                        )
                    }
                </div>
            </section>
        </main >
    )
}
