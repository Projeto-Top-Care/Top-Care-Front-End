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
        <div className='font-poppins mt-4 flex flex-row-reverse justify-between gap-5 border border-preto rounded-md p-5 w-56'>
        <div>
            <FaRegTrashCan/>
        </div>
        <div className='flex flex-col text-sm gap-2 justify-start '>
            <div className='flex gap-1'>
                <p><span className='font-bold'>Nome: </span> {variante}</p>
            </div>
            <div className='flex gap-1'>
                <p><span className='font-bold'>Preço: </span>{preco.toFixed(2).replace(".",",")}</p>
            </div>
        </div>
    </div>
    )
}
