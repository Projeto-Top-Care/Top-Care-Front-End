'use client'
import BotaoGrande from "@/components/Botoes/BotaoGrande/BotaoGrande";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { useEffect, useState } from "react";
import InputPreenchido from "../visualizarPedido/InputPreenchido";
import { buscarUsuario } from "@/server/usuario/action";
import { Usuario } from "@/types/usuarios";
import { buscarFuncionario, excluirFuncionario } from "@/server/usuario/funcionario";
import Loading from "../loading";
import { useRouter } from "next/navigation";
import DoisBotoes from "@/components/Pop-up/DoisBotoes/DoisBotoes";

interface VisualizarFuncionarioProps {
    searchParams: {
        id: number
    }
}
export default function visualizarPerfilFuncionario({ searchParams }: VisualizarFuncionarioProps) {

    const router = useRouter()
    const idFuncionario = searchParams.id;
    const [funcionario, setFuncionario] = useState()

    const [openModal, setOpenModal] = useState<boolean>(false)
    const [confirmarExclusao, setConfirmarExclusao] = useState<boolean>(false)

    const verFuncionario = async () => {
        const response = await buscarFuncionario(idFuncionario)
        setFuncionario(response)
        console.log(funcionario)
    }

    useEffect(() => {
        verFuncionario()
    }, [])

    useEffect(() => {
        if (confirmarExclusao) {
            excluir()
        }
    }, [confirmarExclusao])

    const excluir = async () => {
        const response = await excluirFuncionario(idFuncionario)
        response ? router.push('./funcionarios') :
            alert("Não foi possível excluir o funcionário!")
    }

    return (
        <>
            {funcionario ? (
                <section>
                    <div>
                        <TituloLinha titulo={funcionario.nome} voltar={true} />
                    </div>
                    <section className="font-poppins text-preto w-[90%] m-auto flex justify-center">
                        <div className="mr-[5%]">
                            <p className='text-preto font-poppins font-bold text-base'>Foto</p>
                            <div className='w-52 h-52 md:text-sm text-xs bg-branco p-3 rounded text-cinza-escuro border border-cinza mb-5' />
                            <div className="flex flex-col gap-4">
                                <BotaoGrande size="p-2" title={"Editar"} background={"secundaria"} type={"button"} />
                                <BotaoGrande onClick={() => setOpenModal(true)} size="p-2" title={"Excluir"} background={"cancelar"} type={"button"} />
                            </div>
                        </div>
                        <section className='flex md:flex-row flex-col lg:w-[50%] w-full md:gap-8 gap-4 mb-24'>
                            <div className='w-full flex flex-col md:gap-8 gap-4'>
                                <InputPreenchido titulo='Nome completo' conteudo={funcionario.nome} />
                                <InputPreenchido titulo='Email' conteudo={funcionario.email} />
                                <InputPreenchido titulo='CPF' conteudo={funcionario.cpf} />
                                <InputPreenchido titulo='Código' conteudo={funcionario.codigo} />
                            </div>
                            <div className='w-full flex flex-col md:gap-8 gap-4'>
                                <InputPreenchido titulo='Data de nascimento' conteudo={funcionario.dataNascimento} />
                                <InputPreenchido titulo='Código' conteudo={funcionario.codigo} />
                                <InputPreenchido titulo='Sexo' conteudo={funcionario.sexo} />
                                <InputPreenchido titulo='Filial' conteudo={funcionario.nomeFilial} />
                            </div>
                        </section>
                    </section>

                    {openModal && (
                        <div className="w-full absolute">
                            <div className='fixed top-0 left-0 w-full h-full bg-fundo-modal' onClick={() => setOpenModal(false)}></div>
                            <div className="fixed lg:w-[25%] w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                                <DoisBotoes openParms={setOpenModal} texto="Você deseja mesmo sair?" sim={setConfirmarExclusao} />
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