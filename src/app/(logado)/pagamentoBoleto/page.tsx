'use client'
import InputText from "@/components/InputText/InputText"
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande"
import ResumoPedido from "@/components/ResumoPedido/resumoPedido"
import TituloLinha from "@/components/TituloLinha/TituloLinha"
import { useEffect, useState } from "react"
import { IoCopyOutline } from "react-icons/io5"
import BotaoMedio from "@/components/BotaoMedio/BotaoMedio"
import { Pedido, Usuario } from "@/types/usuarios"
import { buscarUsuario } from "@/server/usuario/action"

export default function pagamentoBoleto() {

    const idUser = 1
    const [usuarioLogado, setUsuarioLogado] = useState<Usuario>(buscarUsuario(idUser)!)
    const [pedido, setPedido] = useState<Pedido>(usuarioLogado.pedidos[0])

    return (
        <main>
            <div className="py-6 sm:py-12 flex flex-col gap-4">
                <TituloLinha titulo="Pagamento" />

                <section className="flex flex-col-reverse gap-2 lg:flex-row px-4 md:px-8 lg:px-20">
                    <section className="p-4">
                        <ResumoPedido produtos={pedido.produtos} desconto={9} frete={0} />
                    </section> 

                    <section className="font-poppins px-2 sm:px-0 gap-4 text-preto flex flex-col justify-center items-center sm:w-[50%]">
                        <div className="w-full flex flex-col justify-center lg:items-end items-center">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 min-[1025px]:gap-x-12 gap-y-4 sm:gap-y-8 w-full">
                                <InputText placeholder="Nome*" />
                                <InputText placeholder="Sobrenome*" />
                                <InputText placeholder="CPF*" />
                                <InputText placeholder="Data de nascimento*" />
                                <InputText placeholder="Email*" />
                                <InputText placeholder="Número de telefone*" />
                            </div>
                        </div>
                        <div className="flex justify-end w-full">
                            <div className="w-[40%] sm:w-[30%]"> 
                                <BotaoGrande title={"Concluir"} background={"bg-secundaria"} type={"button"} />
                            </div>
                        </div>
                    </section>                    
                </section>   

            </div>
        </main>
    )
}