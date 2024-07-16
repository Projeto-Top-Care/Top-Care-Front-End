'use client'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import InputPreenchido from '../visualizarPedido/InputPreenchido';
import { buscarAgendamento } from '@/server/agendamentos/action';

interface VisualizarAgendamentoProps{
    searchParams: {
        id: number
    }
}

export default function VisualizarAgendamento({searchParams}: VisualizarAgendamentoProps) {
    const idPedido = searchParams.id;

    const agendamento =  buscarAgendamento(idPedido)

    return (
        <main className='mb-14'>
            <section className=''>
                <TituloLinha voltar={true} titulo="Agendamento" />
            </section>
            <section className='flex flex-col w-full md:gap-8 gap-4 lg:p-16 md:p-10 p-4'>
                <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 md:gap-8 gap-4'>
                    <InputPreenchido titulo='Serviço' conteudo={agendamento.servico} />
                    <InputPreenchido titulo='Pet' conteudo={agendamento.nomePet} />
                    <InputPreenchido titulo='Local' conteudo={agendamento.local} />
                    <InputPreenchido titulo='Status' conteudo={agendamento.status} />
                </div>
                <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 md:gap-8 gap-4'>
                    <InputPreenchido titulo='Data' conteudo={agendamento.data} />
                    <InputPreenchido titulo='Horário' conteudo={agendamento.horario} />
                    <InputPreenchido titulo='Profissional' conteudo={agendamento.profissional} />
                    <div className='flex w-full gap-4'>
                        <InputPreenchido titulo='Valor' conteudo={agendamento.valor.toString()} />
                        <InputPreenchido titulo='Parcelas' conteudo={agendamento.parcelas!.toString()} />
                    </div>
                </div>
            </section>
        </main >
    )
}
