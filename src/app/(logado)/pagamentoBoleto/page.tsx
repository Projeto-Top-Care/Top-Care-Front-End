'use client'
import InputText from "@/components/InputText/InputText"
import BotaoGrande from "@/components/Botoes/BotaoGrande/BotaoGrande"
import ResumoPedido from "@/components/ResumoPedido/resumoPedido"
import TituloLinha from "@/components/TituloLinha/TituloLinha"
import { useState, useEffect } from "react"
import { QuantidadeProduto, Usuario } from "@/types/usuarios"
import { buscarUsuario } from "@/server/usuario/action"
import { useRouter } from "next/navigation"
import { useUserID } from "@/context/UserIDContext"
import { useCarrinho } from "@/context/CarrinhoContext"
import Carregando from "@/components/Carregando/Carregando"
import { Agendamentos } from "@/types/agendamentos"
import { buscarAgendamento } from "@/server/agendamentos/action"
import { CarrinhoProps } from "@/app/(misto)/carrinho/page"
import { buscarCarrinho } from "@/server/carrinho/action"

interface BoletoProps {
    searchParams: {
        p: string,
        agendamento: number
    }
}

export default function PagamentoBoleto({ searchParams }: BoletoProps) {

    const plano = searchParams.p
    const agendamentoId = searchParams.agendamento

    const [agendamento, setAgendamento] = useState<Agendamentos>()

    useEffect(() => {
        const func = async () => {
            if (agendamentoId) {
                const agend = await buscarAgendamento(agendamentoId)
                if (agend) {
                    setAgendamento(agend)
                }
            }
        }
        func()
    }, []);

    const { push } = useRouter();
    const { getUserID } = useUserID()

    const getUser = async () => {
        const id = getUserID()
        if (id) {
            setUsuarioLogado(await buscarUsuario(parseInt(id)))
        }
    }
    useEffect(() => {
        getUser()
    }, [])

    const [usuarioLogado, setUsuarioLogado] = useState<Usuario>()
    const [carrinho, setCarrinho] = useState<CarrinhoProps>()

    useEffect(() => {
        const func = async () => {

            if (usuarioLogado) {
                const carrinho = await buscarCarrinho(usuarioLogado.id)
                setCarrinho(carrinho)
            }
        }
        func()
    }, [usuarioLogado])

    if (!usuarioLogado) return <Carregando />


    return (
        <main>
            <div className="pb-6 sm:pb-12 flex flex-col gap-4">
                <TituloLinha voltar={false} titulo="Pagamento" />

                <section className="justify-between items-start flex flex-col-reverse gap-6 lg:flex-row px-4 md:px-8 lg:px-20 h-auto">
                    <section className="w-full h-auto">
                        {
                            carrinho &&
                            <ResumoPedido produtos={carrinho.produtos} desconto={0} frete={0} plano={plano} agendamento={agendamento} />
                        }
                    </section>

                    <section className="font-poppins px-2 sm:px-0 text-preto flex flex-col justify-between items-center w-full md:w-[90%] sm:w-2/5 h-auto">
                        <div className="w-full flex flex-col justify-center lg:items-end items-center">
                            <div className="w-full">
                                <h2 className="font-bold text-base sm:text-lg pb-2">Informações Pessoais</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 min-[1025px]:gap-x-12 gap-y-4 sm:gap-y-8 w-full">
                                <InputText placeholder="Nome*" />
                                <InputText placeholder="Sobrenome*" />
                                <InputText placeholder="CPF*" />
                                <InputText placeholder="Data de nascimento*" />
                                <InputText placeholder="Email*" />
                                <InputText placeholder="Número de telefone*" />
                            </div>
                        </div>
                        <div className="lg:!flex hidden sm:justify-center mt-4 lg:justify-end w-full">
                            <div className="w-full sm:w-[30%]">
                                <BotaoGrande onClick={() => push('/Perfil')} title={"Concluir"} background="secundaria" type={"button"} />
                            </div>
                        </div>
                    </section>
                </section>
                <div className="flex lg:hidden justify-center w-full">
                    <div className="w-[80%] sm:w-[30%]">
                        <BotaoGrande onClick={() => push('/Perfil')} title={"Concluir"} background="secundaria" type={"button"} />
                    </div>
                </div>
            </div>
        </main>
    )
}