import { VarianteProps } from '@/types/produto';
import React from 'react'
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

interface VarianteProdutoProps {
    variante: VarianteProps
    variantes: VarianteProps[]
    setVariantes: React.Dispatch<React.SetStateAction<VarianteProps[]>>
}

export default function CardVarianteProduto({ variante, variantes, setVariantes }: VarianteProdutoProps) {

    const excluirVariante = () => {
        const newListVariantes = variantes.filter((varianteF) => varianteF !== variante)
        setVariantes(newListVariantes)
    }

    return (
        <div className='font-poppins mt-4 flex flex-row-reverse justify-between gap-4 border border-preto rounded-md p-4'>
            <div className='cursor-pointer' onClick={excluirVariante}>
                <FaRegTrashCan />
            </div>
            <div className='flex flex-col justify-start text-sm gap-2 '>
                <div className='flex flex-row gap-4'>
                    <div className='flex gap-1'>
                        <p><span className='font-bold'>Preço: </span>{variante.preco}</p>
                    </div>
                    <div className='flex gap-1'>
                        <p><span className='font-bold'>Estoque: </span>{variante.estoque}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className={`flex gap-1 ${variante.cor ? '!flex' : "hidden"}` }>
                        <p><span className='font-bold'>Cor: </span>{variante.cor}</p>
                    </div>
                    <div className={`flex gap-1 ${variante.tamanho ? '!flex' : "hidden"}` }>
                        <p><span className='font-bold'>Tamanho: </span>{variante.tamanho}</p>
                    </div>
                    <div className={`flex gap-1 ${variante.peso ? '!flex' : "hidden"}` }>
                        <p><span className='font-bold'>Peso: </span>{variante.peso}</p>
                    </div>
                    <div className={`flex gap-1 ${variante.unidades ? '!flex' : "hidden"}` }>
                        <p><span className='font-bold'>Unidade: </span>{variante.unidades}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}