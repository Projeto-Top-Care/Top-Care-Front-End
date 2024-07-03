'use client'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import InputPreenchido from './InputPreenchido'

export default function VisualizarPedido() {
  const idPedido = 100;

  return (
    <main className=''>
      <section className=''>
        <TituloLinha voltar={true} titulo={`Pedido #${idPedido}`} />
      </section>
      <section className='lg:p-16 md:p-10 p-4 w-full'>
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
              <InputPreenchido titulo='Data' conteudo='27/05/2024' />
              <InputPreenchido titulo='Destino' conteudo='Rua Venâncio da Silva Porto | SC' />
              <InputPreenchido titulo='Valor' conteudo='R$ 200,00' />
            </div>
            <div className='w-full flex flex-col md:gap-8 gap-4'>
              <InputPreenchido titulo='Cliente' conteudo='Kristian Erdmann' />
              <InputPreenchido titulo='Status' conteudo='Processando Pagamento' />
              <InputPreenchido titulo='Parcelas' conteudo='2X de R$ 100,00' />
            </div>
          </section>
        </section>
      </section>
    </main>
  )
}
