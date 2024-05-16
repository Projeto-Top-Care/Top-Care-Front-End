'use client'
import BarraProcesso from "@/components/BarraProcesso/BarraProcesso";
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
            <section className="w-full m-auto mt-10">
                <BarraProcesso primeiroPasso="Pedido criado" segundoPasso="Pagamento aprovado" terceiroPasso="Separando o pedido" quartoPasso="Pedido com a transportadora" quintoPasso="Entregue"/>
            </section>
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
                                <p className="font-poppins text-cinza-escuro md:text-base text-xs">Número do pedido: {usuarioProcurado?.pedidos[0].codigoPedido}</p>
                                <p className="font-poppins text-cinza-escuro md:text-base text-xs">Data da compra: {usuarioProcurado?.pedidos[0].dataCompra}</p>
                            </div>
                        </div>
                    </section>
                    <section className="md:mt-20 mt-10">
                        <div className="grid">
                            <div className="flex flex-col justify-between mt-5">
                                <button className="hidden flex-row justify-center items-center md:mb-3 mb-1 md:text-base text-sm gap-2 lg:w-[24%] md:w-[30%] w-[100%] md:h-10 h-8 text-preto font-poppins bg-primaria rounded-lg">
                                    <TfiReload size={'1rem'} />
                                    Comprar novamente
                                </button>
                                <p className="font-poppins mb-2 mt-4 text-preto font-medium md:text-xl text-base">Detalhes do pedido</p>
                            </div>
                        </div>
                        <div className="border-2 rounded-lg border-cinza-claro lg:flex grid">
                            <div className="md:p-4">
                                <div className="lg:p-8 p-4 w-full">
                                    <p className="font-poppins text-preto font-medium lg:text-lg md:text-base text-sm">Produtos</p>
                                    <div className="flex flex-col">
                                        <div className="flex mt-12">
                                            <div className="flex justify-between items-center mb-4">
                                                <p className="font-poppins text-preto font-medium md:text-base text-sm">{usuarioProcurado?.pedidos[0].produtos[0].quantidadeComprada}x </p>
                                                {
                                                    usuarioProcurado?.pedidos[0].produtos[0].imagemProduto.map((imagem) => (
                                                        <div key={imagem} className="md:w-16 w-12">
                                                            <img src={imagem} alt="" className="" />
                                                        </div>
                                                    ))
                                                }
                                                <p className="font-poppins text-preto md:text-sm text-xs lg:w-[54%] md:w-[70%] w-[38%]">{usuarioProcurado?.pedidos[0].produtos[0].nomeProduto}</p>
                                                <p className="font-poppins text-preto md:text-base text-sm ">R$ {usuarioProcurado?.pedidos[0].produtos[0].precoNovo}</p>
                                            </div>
                                        </div>
                                        <div className="flex mt-12">
                                            <div className="flex justify-between items-center mb-4">
                                                <p className="font-poppins text-preto font-medium md:text-base text-sm">{usuarioProcurado?.pedidos[0].produtos[0].quantidadeComprada}x </p>
                                                {
                                                    usuarioProcurado?.pedidos[0].produtos[0].imagemProduto.map((imagem) => (
                                                        <div key={imagem} className="md:w-16 w-12">
                                                            <img src={imagem} alt="" className="" />
                                                        </div>
                                                    ))
                                                }
                                                <p className="font-poppins text-preto md:text-sm text-xs lg:w-[54%] md:w-[70%] w-[38%]">{usuarioProcurado?.pedidos[0].produtos[0].nomeProduto}</p>
                                                <p className="font-poppins text-preto md:text-base text-sm ">R$ {usuarioProcurado?.pedidos[0].produtos[0].precoNovo}</p>
                                            </div>
                                        </div>
                                        <div className="flex mt-12">
                                            <div className="flex justify-between items-center mb-4">
                                                <p className="font-poppins text-preto font-medium md:text-base text-sm">{usuarioProcurado?.pedidos[0].produtos[0].quantidadeComprada}x </p>
                                                {
                                                    usuarioProcurado?.pedidos[0].produtos[0].imagemProduto.map((imagem) => (
                                                        <div key={imagem} className="md:w-16 w-12">
                                                            <img src={imagem} alt="" className="" />
                                                        </div>
                                                    ))
                                                }
                                                <p className="font-poppins text-preto md:text-sm text-xs lg:w-[54%] md:w-[70%] w-[38%]">{usuarioProcurado?.pedidos[0].produtos[0].nomeProduto}</p>
                                                <p className="font-poppins text-preto md:text-base text-sm ">R$ {usuarioProcurado?.pedidos[0].produtos[0].precoNovo}</p>
                                            </div>
                                        </div>
                                        <div className="flex mt-12">
                                            <div className="flex justify-between items-center mb-4">
                                                <p className="font-poppins text-preto font-medium md:text-base text-sm">{usuarioProcurado?.pedidos[0].produtos[0].quantidadeComprada}x </p>
                                                {
                                                    usuarioProcurado?.pedidos[0].produtos[0].imagemProduto.map((imagem) => (
                                                        <div key={imagem} className="md:w-16 w-12">
                                                            <img src={imagem} alt="" className="" />
                                                        </div>
                                                    ))
                                                }
                                                <p className="font-poppins text-preto md:text-sm text-xs lg:w-[54%] md:w-[70%] w-[38%]">{usuarioProcurado?.pedidos[0].produtos[0].nomeProduto}</p>
                                                <p className="font-poppins text-preto md:text-base text-sm ">R$ {usuarioProcurado?.pedidos[0].produtos[0].precoNovo}</p>
                                            </div>
                                        </div>
                                        <div className="flex mt-12">
                                            <div className="flex justify-between items-center mb-4">
                                                <p className="font-poppins text-preto font-medium md:text-base text-sm">{usuarioProcurado?.pedidos[0].produtos[0].quantidadeComprada}x </p>
                                                {
                                                    usuarioProcurado?.pedidos[0].produtos[0].imagemProduto.map((imagem) => (
                                                        <div key={imagem} className="md:w-16 w-12">
                                                            <img src={imagem} alt="" className="" />
                                                        </div>
                                                    ))
                                                }
                                                <p className="font-poppins text-preto md:text-sm text-xs lg:w-[54%] md:w-[70%] w-[38%]">{usuarioProcurado?.pedidos[0].produtos[0].nomeProduto}</p>
                                                <p className="font-poppins text-preto md:text-base text-sm ">R$ {usuarioProcurado?.pedidos[0].produtos[0].precoNovo}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-cinza-claro lg:grid flex lg:items-center lg:justify-center"></div>
                            <div className="lg:p-8 p-4 mt-4">
                                <div className="md:p-4 grid lg:flex-col grid-cols-1 divide-y divide-cinza-claro font-poppins text-preto md:text-base text-sm items-start">
                                    <div className="">
                                        <p className="font-poppins text-preto font-medium lg:text-lg md:text-base text-sm md:mb-8 mb-4">Pagamento</p>
                                        <div className="flex flex-row justify-between items-center mt-4">
                                            <p >Subtotal</p>
                                            <p>R$ {usuarioProcurado?.pedidos[0].pagamento[0].subtotal}</p>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-2">
                                            <p>Descontos</p>
                                            <p>R$ {usuarioProcurado?.pedidos[0].pagamento[0].descontos}</p>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-2">
                                            <p>Frete</p>
                                            <p>R$ {usuarioProcurado?.pedidos[0].pagamento[0].frete}</p>
                                        </div>
                                        <div className="flex flex-row justify-between items-center  font-semibold mt-2 md:mb-8 mb-4">
                                            <p>Valor total</p>
                                            <p>R$ {usuarioProcurado?.pedidos[0].pagamento[0].valorTotal}</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="font-poppins text-preto font-medium lg:text-lg md:text-base text-sm md:mt-8 mt-4">Endereço para entrega</p>
                                        <p className="font-poppins text-preto md:text-sm text-xs mt-2">{usuarioProcurado?.pedidos[0].enderecoEntrega[0].nome}</p>
                                        <p className="font-poppins text-cinza-escuro md:text-sm text-xs md:mb-8 mb-4">{usuarioProcurado?.pedidos[0].enderecoEntrega[0].rua}, {usuarioProcurado?.pedidos[0].enderecoEntrega[0].numero}, {usuarioProcurado?.pedidos[0].enderecoEntrega[0].bairro}, {usuarioProcurado?.pedidos[0].enderecoEntrega[0].complemento} | {usuarioProcurado?.pedidos[0].enderecoEntrega[0].cidade} - {usuarioProcurado?.pedidos[0].enderecoEntrega[0].estado}</p>
                                    </div>
                                    <div className="">
                                        <p className="font-poppins text-preto font-medium lg:text-lg md:text-base text-sm  md:mt-8 mt-4">Destinatário</p>
                                        <p className="font-poppins text-preto md:text-sm text-xs mt-2 md:mb-8 mb-4">{usuarioProcurado?.nomeCompleto}</p>
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