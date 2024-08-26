import React from 'react'
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

interface EspecificacaoProdutoProps {
    nome: string,
    descricao: string
}

export default function CardEspecificacaoProduto({ nome, descricao }: EspecificacaoProdutoProps) {

    return (
        <div className='font-poppins mt-1 flex flex-col justify-between gap-4 border border-cinza rounded-md p-2.5 w-full'>
            <div className='flex justify-between items-center font-poppins'>
                <div className='flex ml-2'>
                    <p className='text-preto text-sm'>{nome}</p>
                </div>
                <div className='flex gap-4'>
                    <p className='text-preto text-sm'>{descricao}</p>
                    <FaRegTrashCan color="red" size={18} />
                </div>
            </div>
        </div>
    )
}