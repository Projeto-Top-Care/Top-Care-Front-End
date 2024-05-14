'use client'
import ResumoPedido from "@/components/ResumoPedido/resumoPedido";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { Usuario, Endereco } from "@/types/usuarios";
import { buscarUsuario } from "@/server/usuario/action";
import { useState } from "react";
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande";

export default function PaginaCompra() {

    const idUser = 1
    // const usuarioLogado: Usuario = buscarUsuario(idUser)!
    const [usuarioLogado, setUsuarioLogado] = useState<Usuario>(buscarUsuario(idUser)!)
    const [enderecoEscolhido, setEnderecoEscolhido] = useState<Endereco>()
    const [enderecoUsuario, setEnderecoUsuario] = useState("-")
    const [complemento, setComplemento] = useState("-")
    const produtos = ["Kit para banho Sanol Cachorros e Gatos", "Pote para ração em formato de pata de cachorro", "Coleira com pingente tamanho M unissex para cães e gatos"]
    const quantidades = [1, 1, 1]
    const precos = [11.1, 11.1, 11.1]

    //const setarEnderecoEscolhido = (rua: string, numero: number, bairro: string, cidade: string, estado: string, complemento: string) => {
    const setarEnderecoEscolhido = (endereco: Endereco) => {
        setEnderecoUsuario(`${endereco.rua}, ${endereco.numero}, ${endereco.bairro}. ${endereco.cidade} - ${endereco.estado}, Brasil`)
        setComplemento(endereco.complemento)
        setEnderecoEscolhido(endereco)
    }

    return (
        <main className="text-preto font-poppins py-12">
            <div className="items-center flex flex-col gap-4 w-full">

                <TituloLinha titulo="Confirmação do pedido" />

                <section className="flex flex-col justify-center gap-8 lg:flex-row w-[90%]">
                    <section className="py-4 lg:w-[68%]">
                        <ResumoPedido produtos={produtos} quantidades={quantidades} precos={precos} desconto={9.2} frete={12} />
                    </section>

                    <section className="py-4 lg:w-[28%]">
                        <h2 className="font-bold text-base sm:text-lg pb-2">Endereço de entrega</h2>
                        <div className="border-[1px] border-cinza rounded-lg ">
                            <div className="p-4">
                                {
                                    usuarioLogado.enderecos?.map((endereco, i) => (
                                        <div onClick={() => setarEnderecoEscolhido(endereco)} className="py-1 cursor-pointer flex flex-row justify-between" key={i}>
                                            <p className="text-xs sm:text-sm">{endereco.nome}</p>
                                            <p className="bg-primaria">o</p>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="mx-4 py-4 border-t-2">
                                <h4 className="font-medium text-sm sm:text-base">Endereço</h4>
                                <p className="text-xs sm:text-sm">{enderecoUsuario}</p>
                            </div>
                            <div className="p-4">
                                <h4 className="font-medium text-sm sm:text-base">Complemento</h4>
                                <p className="text-xs sm:text-sm">{complemento}</p>
                            </div>
                            <div className="p-4">
                                <BotaoGrande title={"Adicionar novo endereço"} background={"bg-terciaria"} type={"button"} />
                            </div>
                        </div>
                        <p className="w-full text-center md:text-sm text-xs text-cinza-escuro">Escolha uma das opções ou adicione um novo endereço!</p>
                    </section>
                </section>

                <TituloLinha titulo="Quase lá..." />

                <section className="flex flex-col gap-1 sm:gap-8 lg:flex-col w-[90%] px-2">
                    <h2 className="font-bold text-base sm:text-lg pb-2">Escolha o método de pagamento</h2>
                    
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                        <form className="flex flex-col justify-center">
                            <div className="flex flex-row gap-4">
                                <input className="" type="radio" value="cartao" name="endereco" id="cartao" />
                                <label className="text-sm sm:text-base" htmlFor="cartao">Cartão de crédito</label>
                            </div>
                            <div className="flex flex-row gap-4">
                                <input className="" type="radio" value="boleto" name="endereco" id="boleto" />
                                <label className="text-sm sm:text-base" htmlFor="boleto">Boleto bancário</label>
                            </div>
                            <div className="flex flex-row gap-4">
                                <input className="" type="radio" value="pix" name="endereco" id="pix" />
                                <label className="text-sm sm:text-base" htmlFor="pix">PIX</label>
                            </div>
                        </form>

                        <div>
                            <p>Aqui vai os cartões</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end py-8 gap-2">
                        <div className="w-[60%] md:w-[22%] lg:w-[20%]">
                           <BotaoGrande title={"Finalizar compra"} background={"bg-secundaria"} type={"button"} />
                        </div>
                        <p className="text-end text-xs sm:text-sm text-cinza-escuro">Após conferir seu pedido, clique no botão acima para confirmar a compra e realizar o pagamento.</p>
                    </div>
                </section>
            </div>
        </main>
    )
}