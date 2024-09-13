'use client'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa6";

interface IChecked {
    defautCheck?: boolean
    label: string
    color?: string
    limparFiltro?: boolean
}

export default function Checkbox({ limparFiltro, defautCheck, label, color }: IChecked) {

    const [checked, setChecked] = useState<boolean>(false)

    useEffect(() => {
        if (limparFiltro) {
            setChecked(false)
        }
    }, [limparFiltro])

    useEffect(() => {
        if (checked) {
            console.log(label)
        }
    }, [checked])

    return (
        <>
            <div className='flex items-center justify-center mr-2'>
                <input type="checkbox" name="" id="checkbox" className={`peer cursor-pointer appearance-none w-4 h-4 border bg-cinza-claro rounded checked:border-0 ${color ? color : `checked:bg-secundaria`}`} defaultChecked={defautCheck} checked={checked} onChange={() => setChecked(!checked)} />
                <label htmlFor='checkbox' className={`hidden ${checked ? '!flex animate-checked ' : ''} absolute text-xs pointer-events-none`}><FaCheck /></label>
            </div>
            <label className='font-poppins'>{label}</label>
        </>
    )
}

