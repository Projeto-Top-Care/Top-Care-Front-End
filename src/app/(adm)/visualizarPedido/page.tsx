'use client'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import InputPreenchido from './InputPreenchido'
import { buscarPedidoAdm } from '@/server/pedidos/action'

interface VisualizarPedidoProps{
  searchParams: {
      id: number
  }
}

export default function VisualizarPedido({searchParams}: VisualizarPedidoProps) {
  const idPedido = searchParams.id;

  const pedido = buscarPedidoAdm(idPedido)

  return (
    <main className=''>
      <section className=''>
        <TituloLinha voltar={true} titulo={`Pedido #${idPedido}`} />
      </section>
      <section className='lg:px-16 md:px-10 px-4 w-full text-preto'>
        <section className='flex lg:flex-row flex-col-reverse md:gap-12 gap-8'>
          <div className='lg:w-[45%] w-full'>
            <p className=' text-preto font-poppins font-bold text-base'>Produtos</p>
            <div className='border border-cinza rounded-lg w-full h-64 md:px-6 px-3 py-4 overflow-auto scroll mt-1'>
              <div className="flex flex-col gap-8">
                <div className="flex flex-row justify-between items-center mb-4 mt-4">
                  <p className="font-poppins text-preto font-medium md:text-base text-sm">1x </p>
                  <div className="md:w-16 w-12">
                    <img src='assets/produtos/racao.png' />
                  </div>
                  <p className="font-poppins text-preto md:text-sm text-xs lg:w-[55%] md:w-[75%] w-[30%]">Kit para banho Sanol Cachorros e Gatos</p>
                  <p className="font-poppins text-preto md:text-base text-sm ">R$ 11,10</p>
                </div>
                <div className="flex flex-row justify-between items-center mb-4 mt-4">
                  <p className="font-poppins text-preto font-medium md:text-base text-sm">1x </p>
                  <div className="md:w-16 w-12">
                    <img src='assets/produtos/racao.png' />
                  </div>
                  <p className="font-poppins text-preto md:text-sm text-xs lg:w-[55%] md:w-[75%] w-[30%]">Kit para banho Sanol Cachorros e Gatos</p>
                  <p className="font-poppins text-preto md:text-base text-sm ">R$ 11,10</p>
                </div>
                <div className="flex flex-row justify-between items-center mb-4 mt-4">
                  <p className="font-poppins text-preto font-medium md:text-base text-sm">1x </p>
                  <div className="md:w-16 w-12">
                    <img src='assets/produtos/racao.png' />
                  </div>
                  <p className="font-poppins text-preto md:text-sm text-xs lg:w-[55%] md:w-[75%] w-[30%]">Kit para banho Sanol Cachorros e Gatos</p>
                  <p className="font-poppins text-preto md:text-base text-sm ">R$ 11,10</p>
                </div>
              </div>
            </div>
          </div>
          <section className='flex md:flex-row flex-col lg:w-[50%] w-full md:gap-8 gap-4'>
            <div className='w-full flex flex-col md:gap-8 gap-4'>
              <InputPreenchido titulo='Data' conteudo={pedido.Dt_pedido} />
              <InputPreenchido titulo='Destino' conteudo={pedido.Destino} />
              <InputPreenchido titulo='Valor' conteudo={pedido.Valor} />
            </div>
            <div className='w-full flex flex-col md:gap-8 gap-4'>
              <InputPreenchido titulo='Cliente' conteudo={pedido.Cliente} />
              <InputPreenchido titulo='Status' conteudo={pedido.Status} />
              <InputPreenchido titulo='Parcelas' conteudo={pedido.Pagamento} />
            </div>
          </section>
        </section>
      </section>
    </main>
  )
}
