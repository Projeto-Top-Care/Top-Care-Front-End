'use client'
import { aplicarFiltros, definirProdutosFiltrados, tirarFiltros } from '@/server/filtros/action';
import React, {Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa6";

interface IChecked {
    label: string
    titulo: string
    setCheck: Dispatch<SetStateAction<boolean>>
}

export default function Checkbox({ label, titulo, setCheck }: IChecked) {
    const [checked, setChecked] = useState<boolean>(false)

    useEffect(() => {
        if (checked) {
            definirProdutosFiltrados(aplicarFiltros(label, titulo));
        } else {
            definirProdutosFiltrados(tirarFiltros(label, titulo));
        }
        setCheck(checked)
    }, [checked])

    return (
        <div className='flex items-center justify-center mr-2'>
            <input type="checkbox" name="" id="checkbox" className='peer appearance-none w-4 h-4 border bg-cinza-claro rounded checked:border-0 checked:bg-secundaria' checked={checked} onChange={() => setChecked(!checked)} />
            <label htmlFor='checkbox' className={`hidden ${checked ? '!flex animate-checked ' : ''} absolute text-xs pointer-events-none`}><FaCheck /></label>
        </div>
    )
}

