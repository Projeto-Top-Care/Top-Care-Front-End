'use client'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import InputPreenchido from '../visualizarPedido/InputPreenchido';

export default function VisualizarPedido() {
    const idPedido = 100;

    return (
        <main className=''>
            <section className='mt-4'>
                <TituloLinha voltar={true} titulo="Agendamento" />
            </section>
            <section className='flex flex-col w-full md:gap-8 gap-4 lg:p-16 md:p-10 p-4'>
                <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 md:gap-8 gap-4'>
                    <InputPreenchido titulo='Serviço' conteudo='Consulta' />
                    <InputPreenchido titulo='Pet' conteudo='Nina' />
                    <InputPreenchido titulo='Local' conteudo='Jaraguá do Sul - SC' />
                    <InputPreenchido titulo='Status' conteudo='Esperando Cliente' />
                </div>
                <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 md:gap-8 gap-4'>
                    <InputPreenchido titulo='Data' conteudo='19/06/2024' />
                    <InputPreenchido titulo='Horário' conteudo='09:30' />
                    <InputPreenchido titulo='Profissional' conteudo='Victor Micheluzzi' />
                    <div className='flex w-full gap-4'>
                        <InputPreenchido titulo='Valor' conteudo='R$ 200,00' />
                        <InputPreenchido titulo='Parcelas' conteudo='2X de R$ 100,00' />
                    </div>
                </div>
            </section>
        </main >
    )
}
