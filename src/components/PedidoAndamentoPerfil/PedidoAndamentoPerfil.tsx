'use client'
import React from 'react';
import BotaoGrande from "../BotaoGrande/BotaoGrande";
import { FaBoxOpen } from "react-icons/fa6";
import { buscarProduto } from '@/server/produtos/action';
import { Usuario, QntProduto, Pedido } from '@/types/usuarios';
import { Produto } from '@/types/produto';
import { buscarUsuario } from '@/server/usuario/action';
import { useRouter } from 'next/navigation';

const PedidoAndamentoPerfil = (props: Pedido) => {
    const produtos: QntProduto[] = props.produtos
    const produtosCompletos: Produto[] = produtos.map((produto) => {
        return buscarProduto(produto.id)!
    })
    const router = useRouter()

    return (
        <div className="w-full font-poppins border-2 border-cinza-claro rounded-xl md:text-base text-sm">
            <div className="flex justify-between border-b-2 border-cinza-claro">
                <span className="m-4">{props.dataCompra}</span>
                <span className="m-4 text-cinza-escuro">Pedido n° {props.codigo}</span>
            </div>
            <div className="m-4">
                <div>
                    <span className="flex items-center"><FaBoxOpen className='mt-1 mr-2' />Pedido: {props.status}</span>
                    <div className='flex flex-row'>
                        {
                            produtosCompletos.map((produto) => (
                                <div className="" key={produto.id}>
                                    <img src={produto.imagemProduto[0]} className="w-16 h-16 object-cover m-2" />
                                </div>
                            ))
                        }
                    </div>
                    <span className="font-medium">Valor total R${props.pagamento.valorTotal}</span>
                </div>
                <div className="mt-2">
                    <BotaoGrande title={"Ver detalhes"} background={"bg-terciaria"} type={"button"} onClick={()=> router.push(`Pedido?id=${props.id}`)}/>
                </div>
            </div>
        </div>
    );
};

export default PedidoAndamentoPerfil;
