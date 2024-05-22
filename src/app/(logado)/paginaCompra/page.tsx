'use client'
import ResumoPedido from "@/components/ResumoPedido/resumoPedido";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { FaPlus } from "react-icons/fa6";
import { Usuario, Endereco, Pedido, QntProduto, Cartao } from "@/types/usuarios";
import { buscarUsuario } from "@/server/usuario/action";
import { useState } from "react";
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande";
import CardCartaoSalvo from "@/components/CardCartaoSalvo/cardCartaoSalvo";
import { useRouter } from "next/navigation";
import { Produto } from "@/types/produto";

export default function PaginaCompra() {

    const { push } = useRouter();

    const idUser = 1
    const usuarioLogado: Usuario = (buscarUsuario(idUser)!)

    const [open, setOpen] = useState<string>("")
    const showError = () => {
        if (open != "") {
            return (
                <div className="z-50">
                    <div className={`fixed top-3 left-1/2 -translate-x-1/2 lg:w-[40%] w-[50%] animate-slide-down drop-shadow-lg`}>
                        <div className="flex items-center justify-center lg:h-10 h-8 bg-error rounded font-poppins">
                            <p className="text-xs lg:text-base text-branco">{open}</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    const [enderecoEscolhido, setEnderecoEscolhido] = useState<Endereco>()
    const [enderecoUsuario, setEnderecoUsuario] = useState("-")
    const [complemento, setComplemento] = useState("-")

    const [pedido, setPedido] = useState<Pedido>(usuarioLogado.pedidos[0])

    const [eCartao, setECartao] = useState(false)
    const [eBoleto, setEBoleto] = useState(false)
    const [ePix, setEPix] = useState(false)
    const [cartaoEscolhido, setCartaoEscolhido] = useState<Cartao>()

    const setarEnderecoEscolhido = (endereco: Endereco) => {
        setEnderecoUsuario(`${endereco.rua}, ${endereco.numero}, ${endereco.bairro}. ${endereco.cidade} - ${endereco.estado}, Brasil`)
        setComplemento(endereco.complemento)
        setEnderecoEscolhido(endereco)
    }
    const verificarEnderecoEscolhido = (nomeEndereco: string) => {
        if (enderecoEscolhido?.nome == nomeEndereco) {
            return true
        } else {
            return false
        }
    }
    const verificarFormaPagamentoEscolhida = (formaPagamento: string) => {
        if (formaPagamento == "cartao") {
            setECartao(true)
            setEBoleto(false)
            setEPix(false)
        } else if (formaPagamento == "boleto") {
            setECartao(false)
            setEBoleto(true)
            setEPix(false)
        } else {
            setECartao(false)
            setEBoleto(false)
            setEPix(true)
        }
    }
    const verificarCartao = (nomeCartao: string) => {
        if (cartaoEscolhido?.nome == nomeCartao) {
            return true
        } else {
            return false
        }
    }
    const pagar = () => {
        if (enderecoEscolhido == null) {
            setOpen("Selecione um endereco antes de avançar!")
            setTimeout(() => {
                setOpen("")
            }, 4000)
        } else if (!eCartao && !ePix && !eBoleto){
            setOpen("Selecione uma forma de pagamento antes de avançar!")
            setTimeout(() => {
                setOpen("")
            }, 4000)
        } else if (ePix) {
            push('./pagamentoPix')
        } else if (eBoleto) {
            push('./pagamentoBoleto')
        } else if (eCartao && cartaoEscolhido != null) {
            push('./Perfil')
        } else {
            setOpen("Selecione um cartão antes de avançar!")
            setTimeout(() => {
                setOpen("")
            }, 4000)
        }
    }

    return (
        <main className="text-preto font-poppins py-12">
            {showError()}
            <div className="items-center flex flex-col gap-4 w-full">
                <TituloLinha titulo="Confirmação do pedido" />

                <section className="flex flex-col justify-center gap-8 lg:flex-row w-[90%]">
                    <section className="py-4 lg:w-[68%]">
                        <ResumoPedido produtos={pedido.produtos} desconto={9.2} frete={12} />
                    </section>

                    <section className="py-4 lg:w-[28%]">
                        <h2 className="font-bold text-base sm:text-lg pb-2">Endereço de entrega</h2>
                        <div className="border-[1px] border-cinza rounded-lg ">
                            <div className="p-4">
                                {
                                    usuarioLogado.enderecos?.map((endereco, i) => (
                                        <div onClick={() => setarEnderecoEscolhido(endereco)} className="py-1 cursor-pointer flex flex-row justify-between" key={i}>
                                            <p className="text-xs sm:text-sm">{endereco.nome}</p>
                                            <input className="w-5 h-5 checked: accent-purple-500" type="radio" checked={verificarEnderecoEscolhido(endereco.nome)} />
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

                <section className="flex flex-col gap-1 sm:gap-4 lg:flex-col w-[90%] px-2">
                    <h2 className="font-bold text-base sm:text-lg pb-2">Escolha o método de pagamento</h2>

                    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 w-full">
                        <div className="flex flex-col sm:flex-row lg:flex-col justify-center gap-4">
                            <div className="flex flex-row gap-4">
                                <input className="w-5 h-5 checked: accent-purple-500"
                                    type="radio"
                                    value="cartao"
                                    name="pagamento"
                                    id="cartao"
                                    checked={eCartao}
                                    onClick={() => verificarFormaPagamentoEscolhida("cartao")}
                                />
                                <label className="text-sm sm:text-base" htmlFor="cartao">Cartão de crédito</label>
                            </div>
                            <div className="flex flex-row gap-4">
                                <input className="w-5 h-5 checked: accent-purple-500"
                                    type="radio"
                                    value="boleto"
                                    name="pagamento"
                                    id="boleto"
                                    checked={eBoleto}
                                    onClick={() => verificarFormaPagamentoEscolhida("boleto")}
                                />
                                <label className="text-sm sm:text-base" htmlFor="boleto">Boleto bancário</label>
                            </div>
                            <div className="flex flex-row gap-4">
                                <input className="w-5 h-5 checked: accent-purple-500"
                                    type="radio"
                                    value="pix"
                                    name="pagamento"
                                    id="pix"
                                    checked={ePix}
                                    onClick={() => verificarFormaPagamentoEscolhida("pix")}
                                />
                                <label className="text-sm sm:text-base" htmlFor="pix">PIX</label>
                            </div>
                        </div>

                        <div className="flex flex-col self-end justify-end gap-2 w-full sm:w- lg:w-[40%]">
                            {
                                eCartao ?
                                    <div className="flex flex-col justify-end gap-2">
                                        {
                                            usuarioLogado.cartoes?.map((cartao, i) => (
                                                <div onClick={() => setCartaoEscolhido(cartao)}>
                                                    <CardCartaoSalvo checked={verificarCartao(cartao.nome)} titulo={cartao.nome} numero={cartao.numero} validade={cartao.validade} tipo={cartao.agencia} />
                                                </div>
                                            ))
                                        }
                                        <button onClick={() => push('/adicionarCartao')} className="hover:bg-indigo-200 size-8 self-start lg:self-end bg-primaria rounded-lg p-2"><FaPlus /></button>
                                    </div>
                                    : <></>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col items-start lg:items-end py-8 gap-2">
                        <div className="w-[60%] md:w-[22%] lg:w-[20%]" onClick={() => pagar()}>
                            <BotaoGrande title={"Finalizar compra"} background={"bg-secundaria"} type={"button"} />
                        </div>
                        <p className="text-start lg:text-end text-xs sm:text-sm text-cinza-escuro">Após conferir seu pedido, clique no botão acima para confirmar a compra e realizar o pagamento.</p>
                    </div>
                </section>
            </div>
        </main>
    )
}