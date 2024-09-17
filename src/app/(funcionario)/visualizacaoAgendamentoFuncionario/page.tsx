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

    const verFotoPet = (especie: string) => {
        return especie === "Cachorro" ? "./assets/perfil/Cachorro_perfil.jpg" :
            especie === "Coelho" ? "./assets/perfil/Coelho_perfil.jpg" :
                especie === "Gato" ? "./assets/perfil/Gato_perfil.jpg" :
                    especie === "Hamster" ? "./assets/perfil/Hamster_perfil.jpg" :
                        especie === "Pássaro" ? "./assets/perfil/Pássaro_perfil.jpg" :
                            especie === "Peixe" ? "./assets/perfil/Peixe_perfil.jpg" :
                                especie === "Tartaruga" ? "./assets/perfil/Tartaruga_perfil.jpg" :
                                    "";
    }

    return (
        <main className='mb-14 font-poppins'>
            <section className="">
                <TituloLinha titulo={"Olá, funcionário " + funcionario?.nome} voltar={false} />
                <section className="flex flex-col md:mb-12 mb-4 md:w-[95%] lg:pl-16 md:pl-10 md:p-0 p-4 lg:self-start self-center gap-8">
                    <div className="w-full flex justify-between">
                        <p className="font-averia text-preto md:text-2xl text-xl lg:text-start text-center font-bold">Meus agendamentos</p>
                        <div className='w-1/6'>
                            <Select options={['Finalizados', 'Cancelados', 'Esperando', 'Todos']} label={'Ordenar por'} opcaoSelecionada={setOpcaoSelecionada} opcao={opcaoSelecionada} />
                        </div>
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
                                        fotoPet={verFotoPet(item.pet.especie)!}
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
            <section className="flex flex-col md:mb-24 mb-4 md:w-[95%] lg:pl-16 md:pl-10 md:p-0 p-4 lg:self-start self-center gap-8">
                <div className="flex flex-row gap-6">
                    {
                        horariosDisponiveis && horariosDisponiveis.length > 0 ? (
                            horariosDisponiveis.map((item, index) => (
                                <div key={index} className="w-fit px-2 max-w-[12rem] flex flex-col border-roxo-select border rounded-lg p-2 text-roxo-select">
                                    <p className="sm:text-base text-sm font-semibold">Dia {formatarData(item.dia)}</p>
                                    <p className="sm:text-base text-sm">{item.horaInicio.slice(0, 5)} às {item.horaFim.slice(0, 5)}</p>
                                </div>
                            ))
                        ) : (
                            <p className="w-full m-auto col-span-3">O usuário não tem horários disponíveis :(</p>
                        )
                    }
                </div>
            </section>
        </main >
    )
}
