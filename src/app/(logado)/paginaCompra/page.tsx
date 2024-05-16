'use client'
import ResumoPedido from "@/components/ResumoPedido/resumoPedido";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { FaPlus } from "react-icons/fa6";
import { Usuario, Endereco, Pedido, QntProduto } from "@/types/usuarios";
import { buscarUsuario } from "@/server/usuario/action";
import { useState } from "react";
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande";
import CardCartaoSalvo from "@/components/CardCartaoSalvo/cardCartaoSalvo";
import { useRouter } from "next/navigation";
import { Produto } from "@/types/produto";

export default function PaginaCompra() {
    
    
    const { push } = useRouter();
    
    const idUser = 1
    const [usuarioLogado, setUsuarioLogado] = useState<Usuario>(buscarUsuario(idUser)!)
    
    const [enderecoEscolhido, setEnderecoEscolhido] = useState<Endereco>()
    const [enderecoUsuario, setEnderecoUsuario] = useState("-")
    const [complemento, setComplemento] = useState("-")
    
    const [pedido, setPedido] = useState<Pedido>(usuarioLogado.pedidos[0])
    console.log(usuarioLogado);
    // const produtos = ["Kit para banho Sanol Cachorros e Gatos", "Pote para ração em formato de pata de cachorro", "Coleira com pingente tamanho M unissex para cães e gatos"]
    const [produtosCompra, setProdutosCompra] = useState<Produto>()
    const [qntProdutos, setQntProdutos] = useState<QntProduto[]>()
    // const quantidades = [1, 1, 1]
    // const precos = [11.1, 11.1, 11.1]
    const [eCartao, setECartao] = useState(false)

    const setarEnderecoEscolhido = (endereco: Endereco) => {
        setEnderecoUsuario(`${endereco.rua}, ${endereco.numero}, ${endereco.bairro}. ${endereco.cidade} - ${endereco.estado}, Brasil`)
        setComplemento(endereco.complemento)
        setEnderecoEscolhido(endereco)
    }
    const setarResumoPedido = () => {
        

        // codigo: number,
        // pagamento: string,
        // endereço: number,
        // produtos: QntProduo[]
    }

    return (
        <main className="text-preto font-poppins py-12">
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

                <section className="flex flex-col gap-1 sm:gap-4 lg:flex-col w-[90%] px-2">
                    <h2 className="font-bold text-base sm:text-lg pb-2">Escolha o método de pagamento</h2>

                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 w-full">
                        <form className="flex flex-col justify-center gap-4">
                            <div className="flex flex-row gap-4">
                                <input className="" type="radio" value="cartao" name="endereco" id="cartao" onClick={() => setECartao(true)} />
                                <label className="text-sm sm:text-base" htmlFor="cartao">Cartão de crédito</label>
                            </div>
                            <div className="flex flex-row gap-4">
                                <input className="" type="radio" value="boleto" name="endereco" id="boleto" onClick={() => setECartao(false)} />
                                <label className="text-sm sm:text-base" htmlFor="boleto">Boleto bancário</label>
                            </div>
                            <div className="flex flex-row gap-4">
                                <input className="" type="radio" value="pix" name="endereco" id="pix" onClick={() => setECartao(false)} />
                                <label className="text-sm sm:text-base" htmlFor="pix">PIX</label>
                            </div>
                        </form>

                        {
                            eCartao ?
                                <div className="flex flex-col justify-end gap-2 ">
                                    {
                                        usuarioLogado.cartoes?.map((cartao, i) => (
                                            <div>
                                                <CardCartaoSalvo titulo={cartao.nome} numero={cartao.numero} validade={cartao.validade} tipo={cartao.agencia}  />
                                            </div>
                                        ))
                                    }
                                    <button onClick={() => push('/recuperacaoSenhaDeslogado')} className="hover:bg-indigo-200 size-8 self-end bg-primaria rounded-lg p-2"><FaPlus /></button>
                                </div>
                                : <></>
                        }

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