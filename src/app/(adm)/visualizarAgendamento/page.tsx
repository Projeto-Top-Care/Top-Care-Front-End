'use client'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import InputPreenchido from '../visualizarPedido/InputPreenchido';
import { buscarAgendamento } from '@/server/agendamentos/action';
import { useState } from 'react';
import BotaoGrande from '@/components/Botoes/BotaoGrande/BotaoGrande';
import HistoricoAtualizacaoStatus from '@/components/HistoricoAtualizacaoStatus/HistoricoAtualizacao';

interface VisualizarAgendamentoProps {
    searchParams: {
        id: number
    }
}

export default function VisualizarAgendamento({ searchParams }: VisualizarAgendamentoProps) {
    const idPedido = searchParams.id;

    const agendamento = buscarAgendamento(idPedido)

    const status = ["Agendamento criado", "Pendente", "Aprovado", "Finalizado"]

    const [historico, setHistorico] = useState<Object[]>([{ data: pegarDataAtual(), status: status[0], responsavel: agendamento.nomeCliente }])

    const [indexStatus, setIndexStatus] = useState<number>(0)

    function pegarDataAtual() {
        let data = new Date()
        let dia = String(data.getDate()).padStart(2, '0');
        let mes = String(data.getMonth() + 1).padStart(2, '0');
        let dataFormatada = `${dia}/${mes}/${data.getFullYear()}, ${data.getHours()}h:${data.getMinutes()}m`;
        return dataFormatada;
    }

    const atualizarStatus = () => {
        if (indexStatus > status.length - 1) {
            return
        }
        setIndexStatus(indexStatus + 1)
        let novaAtualizacao = { data: pegarDataAtual(), status: status[indexStatus], responsavel: "Adriana Lima" }
        setHistorico(prevHistorico => [...prevHistorico, novaAtualizacao]);
    }

    return (
        <main className='mb-14'>
            <section className=''>
                <TituloLinha voltar={true} titulo="Agendamento" />
            </section>
            <section className='flex flex-col w-full md:gap-8 gap-4 lg:px-16 md:px-10 lg:pb-16 md:pb-10 p-4'>
                <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 md:gap-8 gap-4'>
                    <InputPreenchido titulo='Serviço' conteudo={agendamento.servico} />
                    <InputPreenchido titulo='Pet' conteudo={agendamento.nomePet} />
                    <InputPreenchido titulo='Local' conteudo={agendamento.local} />
                    <InputPreenchido titulo='Valor' conteudo={"R$" + agendamento.valor.toFixed(2).replace(".", ",")} />
                    <InputPreenchido titulo='Data' conteudo={agendamento.data} />
                    <InputPreenchido titulo='Horário' conteudo={agendamento.horario} />
                    <InputPreenchido titulo='Profissional' conteudo={agendamento.profissional} />
                    <div className='flex w-full gap-4'>
                        <InputPreenchido titulo='Parcela' conteudo={"R$" + (agendamento.valor / agendamento.parcelas!).toFixed(2).replace(".", ",")} />
                        <InputPreenchido titulo='Qnt. Parcelas' conteudo={agendamento.parcelas!.toString()} />
                    </div>
                </div>
            </section>
            <section className='lg:px-16 md:px-10 px-4 mb-32'>
                <div className='flex flex-col sm:flex-row items-end gap-4 lg:w-[45%]'>
                    <InputPreenchido titulo='Status' conteudo={(indexStatus >= status.length - 1 ? status[3] : status[indexStatus])} />
                    <div className='w-full sm:w-2/5'>
                        <BotaoGrande onClick={() => atualizarStatus()} fontSize='text-sm' height='h-12' title='Próximo status' background={'bg-secundaria'} type={'button'} />
                    </div>
                </div>
                <p className='text-roxo-select text-sm font-semibold'>Próximo status: <span className='font-normal'>{(indexStatus >= status.length - 1 ? "Não há mais status." : status[indexStatus + 1])}</span></p>

                <div className='flex flex-col gap-3 pt-16'>
                    <p className='text-preto font-poppins font-bold text-base'>Histórico de atualizações do status do pedido</p>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
                        {
                            historico.map((item) => (
                                <HistoricoAtualizacaoStatus data={item.data} status={item.status} responsavel={item.responsavel} />
                            ))
                        }
                    </div>
                </div>

            </section>
        </main >
    )
}
