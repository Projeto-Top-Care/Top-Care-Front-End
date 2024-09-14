'use client'
import { buscarFiltrados } from '@/server/produtos/action';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa6";

interface IChecked {
    defautCheck?: boolean
    label: string
    color?: string
    limparFiltro?: boolean
    especies?: string[]
    marcas?: string[]
    categorias?: string[]
    setEspeciesFiltradas?: Dispatch<SetStateAction<string[]>>
    setMarcasFiltradas?: Dispatch<SetStateAction<string[]>>
    setCategoriasFiltradas?: Dispatch<SetStateAction<string[]>>
    titulo?: string
}

export default function Checkbox({ 
    limparFiltro, defautCheck, label, color, especies, categorias, marcas, 
    setCategoriasFiltradas, setEspeciesFiltradas, setMarcasFiltradas, titulo }: IChecked) {

    const [checked, setChecked] = useState<boolean>(false)

    useEffect(() => {
        if (limparFiltro) {
            setChecked(false)
        }
    }, [limparFiltro])

    useEffect(() => {
        const func = async () => { 
            if(checked){
                if (titulo == 'Pets') {
                    setEspeciesFiltradas && especies && setEspeciesFiltradas([...especies, label])
                }
                if (titulo == 'Marcas') {
                    setMarcasFiltradas && marcas && setMarcasFiltradas([...marcas, label])
                }
                if (titulo == 'Categorias') {
                    setCategoriasFiltradas && categorias && setCategoriasFiltradas([...categorias, label])
                }
            }else{
                if (titulo == 'Pets') {
                    setEspeciesFiltradas && especies && setEspeciesFiltradas(especies.filter((especie) => especie != label))
                }
                if (titulo == 'Marcas') {
                    setMarcasFiltradas && marcas && setMarcasFiltradas(marcas.filter((marca) => marca != label))
                }
                if (titulo == 'Categorias') {
                    setCategoriasFiltradas && categorias && setCategoriasFiltradas(categorias.filter((categoria) => categoria != label))
                }
            } 
        }
        func()
    }, [checked])

    return (
        <>
            <div className='flex items-center justify-center mr-2'>
                <input 
                    type="checkbox" 
                    name="" 
                    id="checkbox" 
                    className={`peer cursor-pointer appearance-none w-4 h-4 border bg-cinza-claro rounded checked:border-0 ${color ? color : `checked:bg-secundaria`}`} 
                    defaultChecked={defautCheck} 
                    checked={checked} 
                    onChange={() => setChecked(!checked)}
                />
                <label htmlFor='checkbox' className={`hidden ${checked ? '!flex animate-checked ' : ''} absolute text-xs pointer-events-none`}><FaCheck /></label>
            </div>
            <label className='font-poppins'>{label}</label>
        </>
    )
}

