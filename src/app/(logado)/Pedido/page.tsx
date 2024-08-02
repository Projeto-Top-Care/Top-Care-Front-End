'use client'
import BarraProcesso from "@/components/BarraProcesso/BarraProcessoPedido";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { useUserID } from "@/context/UserIDContext";
import { buscarProduto } from "@/server/produtos/action";
import { buscarEndereco, buscarPedido, buscarUsuario } from '@/server/usuario/action'
import type { Endereco, Pedido, QntProduto, Usuario } from '@/types/usuarios'
import { Produto } from '@/types/produto'
import { MdBlock } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { useEffect, useState } from "react";
import Carregando from "@/components/Carregando/Carregando";

interface PropsUsuario {
    searchParams: { id: number }
}

export default function Pedido({ searchParams }: PropsUsuario) {
    const [userId, setUserId] = useState<number>(0)
    const {getUserID} = useUserID()

    useEffect(()=>{
        const idResponse = getUserID()
        if(idResponse){
            setUserId(parseInt(idResponse))
        }
    },[])

    if(userId == 0) {
        return <Carregando />
    }

    const produtoId = searchParams.id

    const getUser = async () =>{
        return await buscarUsuario(userId)
    }
    const getProduct = async () =>{
        return await buscarPedido(produtoId, userId)!
    }
    const getEndereco = async () =>{
        return await buscarEndereco(pedidoBuscado.endereco, userId)
    }

    const usuarioProcurado: Usuario = getUser() as unknown as Usuario

    const pedidoBuscado: Pedido = getProduct as unknown as Pedido
    
    const produtos: QntProduto[] = pedidoBuscado.produtos.map((produto) => {
        return produto;
    })

    const produtosCompletos: Produto[] = produtos.map((produto) => {
        return buscarProduto(produto.id!)!
    })
    const endereco: Endereco = getEndereco() as unknown as Endereco

    return (
        <main>
            <section className="">
                <div className="">
                    <TituloLinha voltar={true} titulo="Seu pedido"></TituloLinha>
                </div>
                <section className="lg:px-16 lg:ml-2 md:px-10 px-5 py-4 mb-12">
                    <section>
                        <div className="md:flex md:justify-between">
                            <div className="">
                                <p className="font-poppins text-preto font-medium md:text-xl text-base">Status da entrega</p>
                                <p className="font-poppins text-cinza-escuro md:text-base text-xs">Código de rastreio:</p>
                            </div>
                            <div>
                                <p className="font-poppins text-cinza-escuro md:text-base text-xs">Número do pedido: {pedidoBuscado.codigo}</p>
                                <p className="font-poppins text-cinza-escuro md:text-base text-xs">Data da compra: {pedidoBuscado.dataCompra}</p>
                            </div>
                        </div>
                        <section className="w-full m-auto md:mt-24 mt-8">
                            <BarraProcesso primeiroPasso="Pedido criado" segundoPasso="Pagamento aprovado" terceiroPasso="Separando o pedido" quartoPasso="Pedido com a transportadora" quintoPasso="Entregue" />
                        </section>
                    </section>
                    <section className="md:mt-20 mt-4">
                        <div className="grid">
                            <div className="flex flex-col justify-between mt-5">
                                <button className="hidden flex-row justify-center items-center md:mb-3 mb-1 md:text-base text-sm gap-2 lg:w-[24%] md:w-[30%] w-[100%] md:h-10 h-8 text-preto font-poppins bg-primaria rounded-lg">
                                    <TfiReload size={'1rem'} />
                                    Comprar novamente
                                </button>
                                <p className="font-poppins mb-2 mt-4 text-preto font-medium md:text-xl text-base">Detalhes do pedido</p>
                            </div>
                        </div>
                        <div className="border-2 rounded-lg border-cinza-claro lg:flex lg:justify-around grid">
                            <div className="md:p-4 lg:w-[50%]">
                                <div className="lg:p-8 p-4 ">
                                    <p className="font-poppins text-preto font-medium lg:text-lg md:text-base text-sm">Produtos</p>
                                    {
                                        produtosCompletos.map((produto, i) => (
                                            <div className="flex flex-col gap-8" key={produto.id}>
                                                <div className="flex flex-row justify-between items-center mb-4 mt-12">
                                                    <p className="font-poppins text-preto font-medium md:text-base text-sm">{produtos[i].quantidade}x</p>
                                                    <div key={produto.imagemProduto[0]} className="md:w-16 w-12">
                                                        <img src={produto.imagemProduto[0]} alt="" className="" />
                                                    </div>
                                                    <p className="font-poppins text-preto md:text-sm text-xs lg:w-[55%] md:w-[75%] w-[40%]">{produto.nomeProduto}</p>
                                                    <p className="font-poppins text-preto md:text-base text-sm ">R${produto.precoNovo.toFixed(2).replace(".", ",")}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="border border-cinza-claro lg:grid flex lg:items-center lg:justify-center"></div>
                            <div className="lg:p-8 p-4 lg:w-[50%]">
                                <div className="md:p-4 grid lg:flex-col grid-cols-1 divide-y divide-cinza-claro font-poppins text-preto md:text-base text-sm items-start">
                                    <div className="">
                                        <p className="font-poppins text-preto font-medium lg:text-lg md:text-base text-sm md:mb-8 mb-4">Pagamento</p>
                                        <div className="flex flex-row justify-between items-center mt-4">
                                            <p>{pedidoBuscado.pagamento.metodo == "cartao" ? "Cartão de crédito" : pedidoBuscado.pagamento.metodo}</p>
                                            <p>************123</p>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-8">
                                            <p>Subtotal</p>
                                            <p>R${pedidoBuscado.pagamento.subtotal.toFixed(2).replace(".", ",")}</p>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-2">
                                            <p>Descontos</p>
                                            <p>R${pedidoBuscado.pagamento.descontos.toFixed(2).replace(".", ",")}</p>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-2">
                                            <p>Frete</p>
                                            <p>R${pedidoBuscado.pagamento.frete.toFixed(2).replace(".", ",")}</p>
                                        </div>
                                        <div className="flex flex-row justify-between items-center  font-semibold mt-2 md:mb-8 mb-4">
                                            <p>Valor total</p>
                                            <p>R${pedidoBuscado.pagamento.valorTotal.toFixed(2).replace(".", ",")}</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="font-poppins text-preto font-medium lg:text-lg md:text-base text-sm md:mt-8 mt-4">Endereço para entrega</p>
                                        <p className="font-poppins text-preto md:text-sm text-xs mt-2">{endereco.nome}</p>
                                        <p className="font-poppins text-cinza-escuro md:text-sm text-xs md:mb-8 mb-4">{endereco.rua}, {endereco.numero}, {endereco.bairro}, {endereco.complemento} | {endereco.cidade} - {endereco.estado}</p>
                                    </div>
                                    <div className="">
                                        <p className="font-poppins text-preto font-medium lg:text-lg md:text-base text-sm  md:mt-8 mt-4">Destinatário</p>
                                        <p className="font-poppins text-preto md:text-sm text-xs mt-2 md:mb-8 mb-4">{usuarioProcurado.nome}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="hidden justify-end mt-4">
                        <button className="lg:w-[21%] md:w-[30%] w-[100%] md:h-10 h-8 text-branco font-poppins bg-error rounded-lg flex flex-row justify-center items-center gap-2 md:text-base text-sm">
                            <MdBlock size={'1.3rem'} />
                            Cancelar pedido
                        </button>
                    </div>
                </section>
            </section>
        </main>
    )

}