'use client'
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { buscarUsuario } from '@/server/usuario/action'
import { Usuario } from '@/types/usuarios'
import { useEffect, useState } from 'react'
import { MdBlock } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";

interface PropsUsuario {
  searchParams: { id: number }
}

export default function Pedido({ searchParams }: PropsUsuario) {
    const [usuarioProcurado, setUsuarioProcurado] = useState<Usuario>()

    useEffect(() => {
        setUsuarioProcurado(buscarUsuario(searchParams.id))
      }, [])    


    return (
        <main>
            <section className="">
                <div className="mt-10">
                    <TituloLinha titulo="Seu pedido"></TituloLinha>
                </div>
                <section className="lg:p-20 md:p-10 p-4 mb-10">
                    <section>
                        <div className="md:flex md:justify-between">
                            <div className="">
                                <p className="font-poppins text-preto font-medium md:text-xl text-base">Status da entrega</p>
                                <p className="font-poppins text-cinza-escuro md:text-base text-xs">Código de rastreio:</p>
                            </div>
                            <div>
                                <p className="font-poppins text-cinza-escuro md:text-base text-xs">Número do pedido: </p>
                                <p className="font-poppins text-cinza-escuro md:text-base text-xs">Data da compra: </p>
                            </div>
                        </div>
                    </section>
                    <section className="md:mt-20 mt-10">
                        <div>
                            <p className="font-poppins text-preto font-medium md:text-xl text-base">Detalhes do pedido</p>
                        </div>
                        <div className="border-2 rounded-lg border-cinza-claro">
                            <div className="lg:grid lg:grid-cols-2 lg:divide-x-2 divide-cinza-claro md:p-4">
                                <div className="md:p-8 p-4">
                                    <p className="font-poppins text-preto font-medium md:text-base text-sm">Produtos</p>
                                    <div>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="md:p-8 p-4 flex flex-col-reverse divide-y-2 divide-y-reverse divide-cinza-claro">
                                    <div className="">
                                        <p className="font-poppins text-preto font-medium md:text-base text-sm md:mt-8 mt-4">Destinatário</p>
                                        <p className="font-poppins text-preto md:text-sm text-xs mt-2">{(usuarioProcurado?.nomeCompleto)}</p>
                                    </div>
                                    <div>
                                        <p className="font-poppins text-preto font-medium md:text-base text-sm md:mt-8 mt-4 md:mb-8 mb-4">Endereço para entrega</p>
                                    </div>
                                    <div className="">
                                        <p className="font-poppins text-preto font-medium md:text-base text-sm">Pagamento</p>
                                        <div className="flex flex-row justify-between items-center mt-4">
                                            <p className="font-poppins text-preto md:text-base text-sm">Subtotal</p>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-2">
                                            <p className="font-poppins text-preto md:text-base text-sm">Descontos</p>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-2">
                                            <p className="font-poppins text-preto md:text-base text-sm">Frete</p>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-2 md:mb-8 mb-4">
                                            <p className="font-poppins text-preto font-semibold md:text-base text-sm">Valor total</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="flex justify-end mt-4">
                        <button className="w-[16%] h-8 text-branco font-poppins text-sm bg-error rounded-lg">
                            <div className="flex flex-row justify-center gap-3">
                                <MdBlock size={'1.3rem'}/>
                                Cancelar pedido
                            </div>
                        </button>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button className="w-[16%] h-8 text-preto font-poppins text-sm bg-primaria rounded-lg">
                            <div className="flex flex-row justify-center items-center gap-2">
                                <TfiReload size={'1rem'}/>
                                Comprar novamente
                            </div>
                        </button>
                    </div>
                </section>
            </section>
        </main>
    )

}