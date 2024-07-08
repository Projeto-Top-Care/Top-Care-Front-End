'use client'
import React from 'react';
import BotaoGrande from "../BotaoGrande/BotaoGrande";
import { buscarProduto } from '@/server/produtos/action';
import { Usuario, QntProduto, Pedido } from '@/types/usuarios';
import { Produto } from '@/types/produto';
import { buscarUsuario } from '@/server/usuario/action';
import { useRouter } from 'next/navigation';
import { LuBox } from "react-icons/lu";

const PedidoAndamentoPerfil = (props: Pedido) => {
    const produtos: QntProduto[] = props.produtos
    const produtosCompletos: Produto[] = produtos.map((produto) => {
        return buscarProduto(produto.id!)!
    })
    const router = useRouter()

    return (
        <div className="w-full font-poppins border-2 border-cinza-claro rounded-xl text-preto">
            <div className="flex justify-between border-b-2 border-cinza-claro mt-1 p-3">
                <span className="md:text-base text-sm">{props.dataCompra}</span>
                <span className=" text-cinza-escuro md:text-sm text-xs">Pedido n° {props.codigo}</span>
            </div>
            <div className="m-4 flex flex-col md:text-base text-sm">
                <div className='flex flex-col gap-4'>
                    <span className="flex items-center"><LuBox size="1.3rem" className=' mr-2' />Pedido {props.status}</span>
                    <div className='flex flex-row mt-2'>
                        {
                            produtosCompletos.map((produto) => (
                                <div className="" key={produto.id}>
                                    <img src={produto.imagemProduto[0]} className="w-[50%] h-14 object-cover ml-5" />
                                </div>
                            ))
                        }
                    </div>
                    <span className="font-medium mt-4">Valor total R${props.pagamento.valorTotal.toFixed(2).replace(".", ",")}</span>
                </div>
                <div className="mt-2">
                    <BotaoGrande title={"Ver detalhes"} background={"bg-terciaria"} type={"button"} onClick={()=> router.push(`Pedido?id=${props.id}`)}/>
                </div>
            </div>
        </div>
    );
};

export default PedidoAndamentoPerfil;
