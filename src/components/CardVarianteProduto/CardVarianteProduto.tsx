import React from 'react'
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

interface VarianteProdutoProps {
    tipo: string
    preco: number
    estoque: number
}

export default function CardVarianteProduto({ tipo, preco, estoque }: VarianteProdutoProps) {

    return (
        <div className='font-poppins mt-4 flex flex-row-reverse justify-between gap-4 border border-preto rounded-md p-4 w-56'>
            <div>
                <FaRegTrashCan/>
            </div>
            <div className='flex flex-col text-sm gap-2 justify-start'>
                <div className='flex gap-1'>
                    <p><span className='font-bold'>Variação: </span>{tipo}</p>
                </div>
                <div className='flex gap-1'>
                    <p><span className='font-bold'>Preço: </span>{preco.toFixed(2).replace(".",",")}</p>
                </div>
                <div className='flex gap-1'>
                    <p><span className='font-bold'>Estoque: </span>{estoque}</p>
                </div>
            </div>
        </div>
    )
}