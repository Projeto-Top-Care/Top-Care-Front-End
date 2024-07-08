import React from 'react'
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

interface VarianteServicoProps {
    variante?: string
    tipo: string
    preco: number
}

export default function VarianteServico({ variante, tipo, preco }: VarianteServicoProps) {
    return (
        <div className='font-poppins mt-4'>
            <div className='flex flex-row justify-between'>
                <div>
                    <p className='font-semibold'>Variante: {variante}</p>
                </div>
                <div className='flex flex-row gap-5'>
                    <p className='cursor-pointer'><FaPencil /></p>
                    <p className='cursor-pointer'><FaRegTrashCan/></p>
                </div>
            </div>
            <div className='sm:text-base text-sm w-full h-28 bg-terciaria flex flex-row items-center px-2 sm:px-5 justify-between rounded-lg'>
                <div className='flex flex-row'>
                    <p className='font-semibold'>{variante}:&nbsp;</p> <p>{tipo}</p>
                </div>
                <div className='flex flex-row'>
                    <p className='font-semibold'>Preço:&nbsp;</p> <p>R$ {preco}</p>
                </div>
            </div>
        </div>
    )
}
