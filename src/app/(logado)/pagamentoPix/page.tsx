'use client'
import ResumoPedido from "@/components/ResumoPedido/resumoPedido"
import TituloLinha from "@/components/TituloLinha/TituloLinha"
import { useEffect, useState } from "react"
import { IoCopyOutline } from "react-icons/io5"
import { Usuario, QuantidadeProduto } from "@/types/usuarios"
import { buscarUsuario } from "@/server/usuario/action"
import { useRouter } from "next/navigation"
import { useUserID } from "@/context/UserIDContext"
import { useCarrinho } from "@/context/CarrinhoContext"
import Confirmacao from "@/components/Pop-up/Confirmacao/Confirmacao"
import { useConfirmacao } from "@/context/confirmacaoContext"
import { Agendamentos } from "@/types/agendamentos"
import { buscarAgendamento, cancelarAgendamento, verificarPagamento } from "@/server/agendamentos/action"
import { useError } from "@/context/ErrorContext"
import Erro from "@/components/Pop-up/Erro/Erro"
import { CarrinhoProps } from "@/app/(misto)/carrinho/page"
import { buscarCarrinho } from "@/server/carrinho/action"

interface BoletoProps {
    searchParams: {
        p: string,
        agendamento: number
    }
}

export default function PagamentoPix({ searchParams }: BoletoProps) {

    const agendamentoId = searchParams.agendamento

    const [agendamento, setAgendamento] = useState<Agendamentos>()

    const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

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

    const { addConfirmacao } = useConfirmacao();
    const { addError } = useError();

    useEffect(() => {
        // Recupera o tempo de início do Local Storage ou define o tempo atual
        const startTime = localStorage.getItem('startTime') || new Date().getTime();

        // Se não houver um tempo de início salvo, salva o tempo atual
        if (!localStorage.getItem('startTime')) {
            localStorage.setItem('startTime', startTime.toString());
        }

        // Calcula o tempo restante para completar 1 hora
        const elapsedTime = new Date().getTime() - parseInt(startTime.toString());
        const remainingTime = 3600000 - elapsedTime; // 1 hora = 3600000 ms

        if (remainingTime > 0 && agendamentoId) {
            // Configura o intervalo para imprimir o número 1 a cada minuto
            const interval = setInterval(async () => {
                const resp = await verificarPagamento(agendamentoId)
                if (resp) {
                    addConfirmacao("Pagamento confirmado")
                    push("/Perfil")
                } // Ação a ser executada a cada 5 segundos
            }, 5000); // 5000 ms = 5 segundos
            setIntervalId(interval);

            // Configura o timeout para parar o intervalo após o tempo restante
            const timeout = setTimeout(async () => {
                clearInterval(interval);
                localStorage.removeItem('startTime');
                addError("Tempo esgotado")
                push("/Perfil")
                await cancelarAgendamento(agendamentoId)
            }, remainingTime);
            setTimeoutId(timeout);
        } else {
            // Se o tempo já passou, remove o tempo de início do Local Storage
            localStorage.removeItem('startTime');
        }

        // Cleanup function para limpar o intervalo e o timeout se o componente for desmontado
        return () => {
            if (intervalId) clearInterval(intervalId);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [intervalId, timeoutId]);



    const { push } = useRouter();
    const { getUserID } = useUserID()
    const conf = useConfirmacao()
    const { items } = useCarrinho()

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

    const copyContent = (content: string) => {
        navigator.clipboard.writeText(content);
        conf.addConfirmacao("Copiado")
    }

    useEffect(() => {
        const func = async () => {
            if (usuarioLogado) {
                const carrinho = await buscarCarrinho(usuarioLogado.id)
                setCarrinho(carrinho)
            }
        }
        func()
    }, [usuarioLogado])

    return (
        <main>
            <Confirmacao />
            <Erro />
            <div className="py-6 sm:py-12 flex flex-col gap-4">
                <TituloLinha voltar={false} titulo="Pagamento" />

                <section className="flex flex-col-reverse gap-2 sm:flex-row sm:px-2 md:px-8 lg:px-20">
                    <section className="p-4 w-full sm:w-1/2">
                        {
                            carrinho && <ResumoPedido produtos={carrinho.produtos} desconto={0} frete={0} agendamento={agendamento} />
                        }
                    </section>

                    <section className="font-poppins gap-8 text-preto flex flex-col justify-center items-center sm:w-[50%]">
                        <div className="flex flex-col items-center gap-2">
                            <p className="text-xs sm:text-sm">Você tem até 1 hora para pagar!</p>

                            <img className="size-36" src="./assets/qrcode.png" />
                        </div>

                        <div className="sm:w-[70%] w-[80%] flex flex-col gap-2">
                            <p className="text-sm">Pix copia e cola</p>
                            <div className="flex flex-row justify-between items-center gap-4 border-[1px] border-cinza rounded-md px-4 py-3">
                                <p className="line-clamp-1 font-poppins md:text-xs text-sm text-cinza-escuro break-all">01010101sfsdasdafdasfsdf01010101010101010101010101010101</p>
                                <IoCopyOutline size={25} color="#4F4F4F" onClick={() => copyContent("01010101sfsdasdafdasfsdf01010101010101010101010101010101")} className='cursor-pointer' />
                            </div>
                        </div>
                    </section>
                </section>

            </div>
        </main>
    )
}