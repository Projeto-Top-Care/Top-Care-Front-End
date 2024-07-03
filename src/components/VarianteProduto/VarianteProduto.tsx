import React from 'react'
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

interface VarianteProdutoProps {
    tipo: string
    preco: number
    estoque: number
}

export default function VarianteProduto({tipo, preco, estoque }: VarianteProdutoProps) {
    return (
        <div className='font-poppins mt-4'>
            <div className='flex flex-row justify-between'>
                <div>
                    <p className='font-semibold'>Variante: {tipo}</p>
                </div>
                <div className='flex flex-row gap-5'>
                    <div>
                        <p className='cursor-pointer'><FaPencil /></p>
                    </div>
                    <div>
                        <p className='cursor-pointer'><FaRegTrashCan/></p>
                    </div>
                </div>
            </div>
            <div className='w-full h-28 bg-terciaria flex flex-row items-center pl-5 gap-6 rounded-lg'>
                <div className='flex flex-row'>
                    <p className='font-semibold'>Variação:&nbsp;</p> <p>{tipo}</p>
                </div>
                <div className='flex flex-row'>
                    <p className='font-semibold'>Preço:&nbsp;</p> <p>R$ {preco}</p>
                </div>
                <div className='flex flex-row'>
                    <p className='font-semibold'>Estoque:&nbsp;</p> <p>{estoque}</p>
                </div>
            </div>
        </div>
    )
}