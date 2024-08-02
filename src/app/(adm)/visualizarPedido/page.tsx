'use client'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import InputPreenchido from './InputPreenchido'
import { buscarPedidoAdm } from '@/server/pedidos/action'
import { useState } from 'react'
import BotaoGrande from '@/components/Botoes/BotaoGrande/BotaoGrande'
import HistoricoAtualizacaoStatus from '@/components/HistoricoAtualizacaoStatus/HistoricoAtualizacao'

interface VisualizarPedidoProps {
  searchParams: {
    id: number
  }
}

export type Historico = {
  data: string,
  status: string,
  responsavel: string
}

export default function VisualizarPedido({ searchParams }: VisualizarPedidoProps) {
  const idPedido = searchParams.id;

  const pedido = buscarPedidoAdm(idPedido)

  const status = ["Pedido criado", "Pagamento pendente", "Pagamento aprovado", "Separando o pedido", "Pedido com a transportadora", "Pedido entregue"]

  const [indexStatus, setIndexStatus] = useState<number>(0)

  // const historico = [
  //   {data: pedido.Dt_pedido, status: "Pedido criado", responsavel: pedido.Cliente}
  // ]
  const [historico, setHistorico] = useState<Historico[]>([{data: pegarDataAtual(), status: status[0], responsavel: pedido.Cliente}])

  function pegarDataAtual() {
    let data = new Date()
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let dataFormatada = `${dia}/${mes}/${data.getFullYear()}, ${data.getHours()}h:${data.getMinutes()}m`;
    return dataFormatada;
  }

  const atualizarStatus = () => {
    if(indexStatus > status.length - 1) {
      return
    } 
    if (indexStatus == 0) {
      setIndexStatus(indexStatus + 1)
      return
    }
    setIndexStatus(indexStatus + 1)
    let novaAtualizacao = {data:pegarDataAtual(), status: status[indexStatus], responsavel: "Adriana Lima"}
    setHistorico(prevHistorico => [...prevHistorico, novaAtualizacao]);
  }

  return (
    <main className='font-poppins'>
      <section className=''>
        <TituloLinha voltar={true} titulo={`Pedido #${idPedido}`} />
      </section>
      <section className='lg:px-16 md:px-10 px-4 w-full text-preto'>
        <section className='flex lg:flex-row flex-col-reverse md:gap-12 gap-8'>
          <div className='lg:w-[45%] w-full'>
            <p className=' text-preto font-bold text-base'>Produtos</p>
            <div className='border border-cinza rounded-lg w-full h-64 md:px-6 px-3 py-4 overflow-auto scroll mt-1'>
              <div className="flex flex-col gap-8">
                <div className="flex flex-row justify-between items-center mb-4 mt-4">
                  <p className="text-preto font-medium md:text-base text-sm">1x </p>
                  <div className="md:w-16 w-12">
                    <img src='assets/produtos/racao.png' />
                  </div>
                  <p className="text-preto md:text-sm text-xs lg:w-[55%] md:w-[75%] w-[30%]">Kit para banho Sanol Cachorros e Gatos</p>
                  <p className="text-preto md:text-base text-sm ">R$ 11,10</p>
                </div>
                <div className="flex flex-row justify-between items-center mb-4 mt-4">
                  <p className="text-preto font-medium md:text-base text-sm">1x </p>
                  <div className="md:w-16 w-12">
                    <img src='assets/produtos/racao.png' />
                  </div>
                  <p className="text-preto md:text-sm text-xs lg:w-[55%] md:w-[75%] w-[30%]">Kit para banho Sanol Cachorros e Gatos</p>
                  <p className="text-preto md:text-base text-sm ">R$ 11,10</p>
                </div>
                <div className="flex flex-row justify-between items-center mb-4 mt-4">
                  <p className="text-preto font-medium md:text-base text-sm">1x </p>
                  <div className="md:w-16 w-12">
                    <img src='assets/produtos/racao.png' />
                  </div>
                  <p className="text-preto md:text-sm text-xs lg:w-[55%] md:w-[75%] w-[30%]">Kit para banho Sanol Cachorros e Gatos</p>
                  <p className="text-preto md:text-base text-sm ">R$ 11,10</p>
                </div>
              </div>
            </div>
          </div>
          <section className='flex md:flex-col flex-col lg:w-[50%] w-full md:gap-8 gap-4 mb-10'>
            <div className='w-full flex flex-row md:gap-8 gap-4'>
              <InputPreenchido titulo='Data' conteudo={pedido.Dt_pedido} />
              <InputPreenchido titulo='Cliente' conteudo={pedido.Cliente} />
            </div>

            <InputPreenchido titulo='Destino' conteudo={pedido.Destino} />

            <div className='w-full flex flex-row md:gap-8 gap-4'>
              <InputPreenchido titulo='Valor' conteudo={"R$" + pedido.Valor.toFixed(2).replace(".", ",")} />
              <InputPreenchido titulo='Parcelas' conteudo={pedido.Pagamento} />
            </div>
          </section>
        </section>
      </section>
      <section className='lg:px-16 md:px-10 px-4 mb-32'>
        <div className=''>
          <div className='flex flex-col sm:flex-row items-end gap-2 sm:gap-4 lg:w-[45%]'>
            <InputPreenchido titulo='Status' conteudo={(indexStatus >= status.length - 1 ? status[4] : status[indexStatus])} />
            <div className='w-full sm:w-2/5'>
              <BotaoGrande onClick={() => atualizarStatus()} size='h-12' title='Próximo status' background={'secundaria'} type={'button'} />
            </div>
          </div>
            <p className='text-roxo-select text-sm font-semibold'>Próximo status: <span className='font-normal'>{(indexStatus >= status.length - 1 ? "Não há mais status." : status[indexStatus + 1])}</span></p>
        </div>

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
    </main>
  )
}