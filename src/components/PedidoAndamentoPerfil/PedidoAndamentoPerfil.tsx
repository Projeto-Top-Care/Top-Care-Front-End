'use client'
import React from 'react';
import BotaoGrande from "../BotaoGrande/BotaoGrande";
import { FaBoxOpen } from "react-icons/fa6";
import { buscarProduto } from '@/server/produtos/action';
import { Usuario, QntProduo } from '@/types/usuarios';
import { Produto } from '@/types/produto';
import { buscarUsuario } from '@/server/usuario/action';
import usuarios from '@/banco/usuarios.json'


interface IPedidoAndamentoPerfil {
    data: string;
    numPedido: number;
    status: string;
    valor: number[];
    src: string[]; 
}

const PedidoAndamentoPerfil = ({ data, numPedido, status, valor, src = [] }:IPedidoAndamentoPerfil) => {
    
    const usuarioLogado: Usuario = buscarUsuario(1)!
    const produtos: QntProduo = buscarProduto(usuarioLogado.id)!
    const produto: Produto = buscarProduto(produtos.id)!

    return (
        <div className="w-full font-poppins border-2 border-cinza-claro rounded-xl md:text-base text-sm">
            <div className="flex justify-between border-b-2 border-cinza-claro">
                <span className="m-4">{data}</span>
                <span className="m-4 text-cinza-escuro">Pedido n° {numPedido}</span>
            </div>
            <div className="m-4">
                <div>
                    <span className="flex items-center"><FaBoxOpen className='mt-1 mr-2' />Pedido {status}</span>
                    <div className="flex flex-wrap">
                            <img src={src[0]} className="w-16 h-16 object-cover m-2" />
                    </div>
                    <span className="font-medium">Valor total R${valor}</span>
                </div>
                <div className="mt-2">
                    <BotaoGrande title={"Ver detalhes"} background={"bg-terciaria"} type={"submit"} />
                </div>
            </div>
        </div>
    );
};

export default PedidoAndamentoPerfil;
