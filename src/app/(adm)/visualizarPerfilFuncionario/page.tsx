'use client'
import BotaoGrande from "@/components/Botoes/BotaoGrande/BotaoGrande";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { SetStateAction, useEffect, useState } from "react";
import { buscarFuncionario, editarFuncionario, excluirFuncionario, verAgendamentosFuncionario, verHorariosDisponiveis } from "@/server/usuario/funcionario";
import Loading from "../loading";
import { useRouter } from "next/navigation";
import DoisBotoes from "@/components/Pop-up/DoisBotoes/DoisBotoes";
import InputEstatico from "@/components/InputEstatico/InputEstatico";
import InputMaskEstatico from "@/components/InputMaskEstatico/InputMaskEstatico";
import Select from "@/components/Select/Select";
import { buscarFiliais } from "@/server/filiais/action";
import { FuncionarioCompleto, HorarioFuncionarioSimples } from "@/types/funcionario";
import CardVisualizacao from "@/app/(funcionario)/visualizacaoAgendamentoFuncionario/CardVisualizacao/CardVisualizacao";
import { Agendamentos } from "@/types/agendamentos";

interface VisualizarFuncionarioProps {
    searchParams: {
        id: number
    }
}

export default function visualizarPerfilFuncionario({ searchParams }: VisualizarFuncionarioProps) {

    const router = useRouter()
    const idFuncionario = searchParams.id;
    const [funcionario, setFuncionario] = useState<FuncionarioCompleto>()
    const [horariosDisponiveis, setHorariosDisponiveis] = useState<HorarioFuncionarioSimples[]>()
    const [filiais, setFiliais] = useState<string[]>([])
    const [agendamentosFuncionario, setAgendamentosFuncionario] = useState<Agendamentos[]>()
    const [filial, setFilial] = useState<string>('')
    const [edicao, setEdicao] = useState<boolean>(false)
    const [opcaoSelecionada, setOpcaoSelecionada] = useState<string>("Todos")

    const verFuncionario = async () => {
        const response = await buscarFuncionario(idFuncionario)
        setFuncionario(response)
    }
    const verHorarios = async () => {
        const response = await verHorariosDisponiveis(idFuncionario)
        setHorariosDisponiveis(response)
    }
    const verFiliais = async () => {
        const response = await buscarFiliais()
        const listaDeNomes = response.map((filial: FuncionarioCompleto) => filial.nome);
        setFiliais(listaDeNomes)
    }
    const verAgendamentos = async () => {
        const response = await verAgendamentosFuncionario(idFuncionario)
        setAgendamentosFuncionario(response)
    }

    useEffect(() => {
        verFuncionario()
        verFiliais()
        verHorarios()
        verAgendamentos()
    }, [])

    const formatarData2 = (dateString: string) => {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }

    const [openModal, setOpenModal] = useState<boolean>(false)
    const [confirmarExclusao, setConfirmarExclusao] = useState<boolean>(false)

    const formatarData = (nascimento: string) => {
        if (!nascimento) return ""
        const data = nascimento.split("-")
        return data[2] + "/" + data[1] + "/" + data[0]
    }

    const [dataNascimento, setDataNascimento] = useState<string>('')
    const [sexo, setSexo] = useState<string>('')
    const [numero, setNumero] = useState<string>('')

    useEffect(() => {
        if (confirmarExclusao) {
            excluir()
        }
    }, [confirmarExclusao])

    const excluir = async () => {
        const response = await excluirFuncionario(idFuncionario)
        response ? router.push(`./funcionarios?at=${Math.random() * 3}`) :
            alert("Não foi possível excluir o funcionário!")
    }

    const editarFuncionarioo = async (e: FormData) => {
        if (edicao) {
            const date = dataNascimento ? dataNascimento.split("/") : null
            const dateFormat = date ? date[2] + "-" + date[1] + "-" + date[0] : ""

            e.append("sexo", sexo.replace(" ", "_").toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
            if (filial != '') {
                e.append("nomeFilial", filial)
            } else {
                e.append("nomeFilial", funcionario!.nomeFilial)
            }
            if (sexo != '') {
                e.append("celular", numero.replace(" ", ""))
            } else {
                e.append("celular", funcionario!.celular.replace(" ", ""))
            }
            if (dateFormat) {
                e.append("dataNascimento", dateFormat)
            } else {
                e.append("dataNascimento", funcionario!.dataNascimento)
            }

            const dados = Object.fromEntries(e)
            const response = editarFuncionario(idFuncionario, dados)
            setEdicao(false)
            verFuncionario()
        }
        setEdicao(!edicao)
    }

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
        <>
            {funcionario ? (
                <section className="font-poppins">
                    <div>
                        <TituloLinha titulo={funcionario.nome} voltar={true} />
                    </div>
                    <form action={editarFuncionarioo} className="font-poppins text-preto w-[90%] m-auto flex flex-col-reverse sm:flex-row justify-center">
                        <div className="mr-[5%] lg:items-start items-center">
                            <p className='text-preto font-poppins font-bold text-base'>Foto</p>
                            <div className='w-52 h-52 m-auto md:text-sm text-xs bg-branco p-3 rounded text-cinza-escuro border border-cinza mb-5' />
                            <div className="flex flex-col gap-4">
                                <BotaoGrande size="p-2" title={`${edicao ? 'Salvar Alteração' : 'Editar'}`} background={"secundaria"} type={"submit"} />
                                <BotaoGrande onClick={() => setOpenModal(true)} size="p-2" title={"Excluir"} background={"cancelar"} type={"button"} />
                            </div>
                        </div>
                        <section className='bg-terciaria px-8 py-6 rounded-lg flex md:flex-row flex-col lg:w-[60%] w-full md:gap-8 gap-4 mb-8'>
                            <div className='w-full flex flex-col md:gap-8 gap-4'>
                                <InputEstatico name="nome" titulo='Nome completo' info={funcionario.nome} edition={edicao} />
                                <InputEstatico name="cpf" titulo='CPF' edition={false} info={funcionario.cpf} />
                                <InputEstatico name="email" titulo='Email' edition={edicao} info={funcionario.email} />
                                <Select
                                    label="Sexo"
                                    opcao={sexo == '' ? funcionario.sexo.toLowerCase() : sexo}
                                    name="sexo"
                                    opcaoSelecionada={setSexo}
                                    options={["Feminino", "Masculino", "Não informar"]}
                                    disabled={!edicao}
                                    bg
                                />
                            </div>

                            <div className='w-full flex flex-col md:gap-8 gap-4'>
                                <InputMaskEstatico
                                    titulo="Data de Nascimento"
                                    info={formatarData(funcionario.dataNascimento)}
                                    name="dataNascimento"
                                    edition={edicao}
                                    mask={'dd/mm/yyyy'}
                                    replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                                    onMasks={(e) => setDataNascimento(e.target.value)} />

                                <InputEstatico name="codigo" titulo='Código' edition={false} info={funcionario.codigo} />

                                <InputMaskEstatico
                                    titulo="Celular"
                                    info={numero == '' ? funcionario.celular : numero}
                                    edition={edicao}
                                    mask={'(__) _____-____'}
                                    replacement={{ _: /\d/ }}
                                    onMasks={(e) => setNumero(e.target.value)} />

                                <Select
                                    label='Filial'
                                    options={filiais ? filiais! : ["Não há filiais cadastradas!"]}
                                    opcaoSelecionada={setFilial}
                                    disabled={!edicao}
                                    opcao={filial == '' ? funcionario.nomeFilial : filial}
                                    name='nomeFilial'
                                    bg
                                />
                            </div>
                        </section>
                    </form>

                    {openModal && (
                        <div className="w-full absolute">
                            <div className='fixed top-0 left-0 w-full h-full bg-fundo-modal' onClick={() => setOpenModal(false)}></div>
                            <div className="fixed lg:w-[25%] w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                                <DoisBotoes openParms={setOpenModal} texto={"Deseja mesmo excluir o funcionário " + funcionario.nome + "?"} sim={setConfirmarExclusao} />
                            </div>
                        </div>
                    )}

                    <TituloLinha titulo="Agendamentos" voltar={false} />
                    <section className="w-[90%] m-auto">
                        {/* <div className="w-full flex justify-end">
                            <div className={`w-1/6 ${agendamentosFuncionario ? `` : `hidden`}`}>
                                <Select options={['Todos', 'Aguardando cliente', 'Em andamento', 'Aguardando retirada do pet', 'Concluído']} label={'Filtrar agendamentos'} opcaoSelecionada={setOpcaoSelecionada} opcao={opcaoSelecionada} />

                            </div>
                        </div> */}
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
                    <TituloLinha titulo={"Horários disponíveis"} voltar={false} />
                    <section className="md:mb-24 mb-4 flex flex-col md:w-[95%] lg:pl-16 md:pl-10 md:p-0 p-4 lg:self-start self-center gap-8">
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                            {
                                horariosDisponiveis && horariosDisponiveis.length > 0 ? (
                                    horariosDisponiveis.map((item, index) => (
                                        <div key={index} className="w-full flex flex-col border-roxo-select border rounded-lg p-2 text-roxo-select">
                                            <p className="sm:text-base text-sm font-semibold">Dia {formatarData2(item.dia)}</p>
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
                </section>
            ) : (
                <Loading />
            )}

        </>
    )
}