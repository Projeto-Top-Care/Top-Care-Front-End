'use client'
import React from 'react';
import BotaoGrande from "../Botoes/BotaoGrande/BotaoGrande";
import { buscarProduto } from '@/server/produtos/action';
import { Pedido } from '@/types/usuarios';
import { buscarUsuario } from '@/server/usuario/action';
import { useRouter } from 'next/navigation';
import { LuBox } from "react-icons/lu";

const PedidoAndamentoPerfil = (pedido: Pedido) => {
    const router = useRouter()
    console.log(pedido)

    return (
        <div className="w-full font-poppins border-2 border-cinza-claro rounded-xl text-preto">
            <div className="flex justify-between border-b-2 border-cinza-claro mt-1 p-3">
                <span className="md:text-base text-sm">{pedido.dataCompra}</span>
                <span className=" text-cinza-escuro md:text-sm text-xs">Pedido n° {pedido.codigo}</span>
            </div>
            <div className="m-4 flex flex-col md:text-base text-sm">
                <div className='flex flex-col gap-4'>
                    <span className="flex items-center"><LuBox size="1.3rem" className=' mr-2' />{pedido.status}</span>
                    <div className='flex flex-row mt-2'>
                        {
                            pedido.produtos.map((produto) => (
                                <div className="" key={produto.id}>
                                    <img src={produto.produto.imagens[0].caminho} className="w-[60%] h-14 object-cover ml-8" />
                                </div>
                            ))
                        }
                    </div>
                    <span className="font-medium mt-4">Valor total R${pedido.total.toFixed(2).replace(".", ",")}</span>
                </div>
                <div className="mt-2">
                    <BotaoGrande title={"Ver detalhes"} background="terciaria" type={"button"} onClick={()=> router.push(`Pedido?id=${pedido.id}`)}/>
                </div>
            </div>
        </div>
    );
};

export default PedidoAndamentoPerfil;
