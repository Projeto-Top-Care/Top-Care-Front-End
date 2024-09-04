'use client'
import BotaoGrande from "@/components/Botoes/BotaoGrande/BotaoGrande";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { useEffect, useState } from "react";
import { buscarFuncionario, editarFuncionario, excluirFuncionario } from "@/server/usuario/funcionario";
import Loading from "../loading";
import { useRouter } from "next/navigation";
import DoisBotoes from "@/components/Pop-up/DoisBotoes/DoisBotoes";
import InputEstatico from "@/components/InputEstatico/InputEstatico";
import InputMaskEstatico from "@/components/InputMaskEstatico/InputMaskEstatico";
import Select from "@/components/Select/Select";
import { buscarFiliais } from "@/server/filiais/filial";
import { FuncionarioCompleto } from "@/types/funcionario";

interface VisualizarFuncionarioProps {
    searchParams: {
        id: number
    }
}

export default function visualizarPerfilFuncionario({ searchParams }: VisualizarFuncionarioProps) {

    const router = useRouter()
    const idFuncionario = searchParams.id;
    const [funcionario, setFuncionario] = useState<FuncionarioCompleto>()
    const [filiais, setFiliais] = useState<string[]>([])
    const [filial, setFilial] = useState<string>('')
    const [edicao, setEdicao] = useState<boolean>(false)

    const verFuncionario = async () => {
        const response = await buscarFuncionario(idFuncionario)
        setFuncionario(response)
    }

    const verFiliais = async () => {
        const response = await buscarFiliais()
        const listaDeNomes = response.map(filial => filial.nome);
        setFiliais(listaDeNomes)
    }

    useEffect(() => {
        verFuncionario()
        verFiliais()
    }, [])

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
            if(filial != '') {
                e.append("nomeFilial", filial)
            } else {
                e.append("nomeFilial", funcionario!.nomeFilial)
            }
            if(sexo != '') {
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
            console.log(dados)
            const response = editarFuncionario(idFuncionario, dados)
            setEdicao(false)
            verFuncionario()
            // if(response != null) {
            //     router.push('./funcionarios')
            // }
        }
        setEdicao(!edicao)
    }

    return (
        <>
            {funcionario ? (
                <section>
                    <div>
                        <TituloLinha titulo={funcionario.nome} voltar={true} />
                    </div>
                    <form action={editarFuncionarioo} className="font-poppins text-preto w-[90%] m-auto flex justify-center">
                        <div className="mr-[5%]">
                            <p className='text-preto font-poppins font-bold text-base'>Foto</p>
                            <div className='w-52 h-52 md:text-sm text-xs bg-branco p-3 rounded text-cinza-escuro border border-cinza mb-5' />
                            <div className="flex flex-col gap-4">
                                {/* <BotaoGrande onClick={() => setEdicao(edicao)} size="p-2" title={`${edicao ? 'Salvar Alteração' : 'Editar'}`} background={"secundaria"} type={"button"} /> */}
                                <BotaoGrande size="p-2" title={`${edicao ? 'Salvar Alteração' : 'Editar'}`} background={"secundaria"} type={"submit"} />
                                <BotaoGrande onClick={() => setOpenModal(true)} size="p-2" title={"Excluir"} background={"cancelar"} type={"button"} />
                            </div>
                        </div>
                        <section className='bg-terciaria px-8 py-6 rounded-lg flex md:flex-row flex-col lg:w-[60%] w-full md:gap-8 gap-4 mb-24'>
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

                                {/* <InputEstatico name="dataNascimento" titulo='Data de nascimento' edition={edicao} info={funcionario.dataNascimento} /> */}

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
                                {/* <InputEstatico name="filial" titulo='Filial' edition={edicao} info={funcionario.nomeFilial} /> */}
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
                </section>
            ) : (
                <Loading />
            )}

        </>
    )
}