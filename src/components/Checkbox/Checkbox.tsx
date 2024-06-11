'use client'
import React, {Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa6";

interface IChecked {
    check: Dispatch<SetStateAction<boolean>>
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

export default function Checkbox({ check, onClick}: IChecked) {
    const [checked, setChecked] = useState<boolean>(false)

    useEffect(() => {
        check(checked)
    }, [checked])

    return (
        <div className='flex items-center justify-center mr-2'>
            <input type="checkbox" name="" id="checkbox" className='peer cursor-pointer appearance-none w-4 h-4 border bg-cinza-claro rounded checked:border-0 checked:bg-secundaria' checked={checked} onChange={() => setChecked(!checked)} onClick={onClick}/>
            <label htmlFor='checkbox' className={`hidden ${checked ? '!flex animate-checked ' : ''} absolute text-xs pointer-events-none`}><FaCheck /></label>
        </div>
    )
}

