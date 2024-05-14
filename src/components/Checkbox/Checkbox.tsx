'use client'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa6";

interface IChecked {
    check: Dispatch<SetStateAction<boolean>>
    label: string
    setLabel: Dispatch<SetStateAction<string>>
}

export default function Checkbox({ check, label, setLabel }: IChecked) {
    const [checked, setChecked] = useState<boolean>(false)

    useEffect(()=>{
        check(checked)
        setLabel(label)
    },[checked])

return (
    <div className='flex items-center justify-center mr-2'>
        <input type="checkbox" name="" id="checkbox" className='peer appearance-none w-4 h-4 border bg-cinza-claro rounded checked:border-0 checked:bg-secundaria' onClick={() => setChecked(!checked)} />
        <label htmlFor='checkbox' className={`hidden ${checked ? '!flex animate-checked ' : ''} absolute text-xs pointer-events-none`}><FaCheck /></label>
    </div>
)
}
