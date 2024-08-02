'use client'
import React, {Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa6";

interface IChecked {
    check: Dispatch<SetStateAction<boolean>>
    onClick?: React.MouseEventHandler<HTMLDivElement>
    defautCheck?: boolean
    color?:string
    border?:string
}

export default function Checkbox({ check, onClick, defautCheck, color, border}: IChecked) {
    const [checked, setChecked] = useState<boolean>(defautCheck ? defautCheck : false)

    useEffect(() => {
        check(checked)
    }, [checked])

    return (
        <div className='flex items-center justify-center mr-2'>
            <input type="checkbox" name="" id="checkbox" className={`peer cursor-pointer appearance-none w-4 h-4 border bg-cinza-claro rounded checked:border-0 ${border ? border : ``} ${color ? color : `checked:bg-secundaria`}`} checked={checked} onChange={() => setChecked(!checked)} onClick={onClick}/>
            <label htmlFor='checkbox' className={`hidden ${checked ? '!flex animate-checked ' : ''} absolute text-xs pointer-events-none`}><FaCheck /></label>
        </div>
    )
}

