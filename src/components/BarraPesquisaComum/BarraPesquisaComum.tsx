'use client'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function BarraPesquisaComum({ placeholder, value }: { placeholder: string, value: Dispatch<SetStateAction<string>> }) {
    
    const [valueInput, setValueInput] = useState<string>('')

    useEffect(()=>{
        value(valueInput)
    }, [valueInput])
    
    return (
        <div className="relative bg-branco flex items-center w-full rounded-lg h-8">
            <div className="size-[2rem] flex items-center justify-center">
                <button><FaSearch style={{ color: "#322828" }} /></button>
            </div>
            <div className="w-full peer flex flex-col items-center justify-start">
                <input type="text" id="search" className="peer text-sm sm:text-base focus:outline-0 w-full rounded placeholder:text-cinza-escuro font-poppins bg-branco"
                    placeholder={placeholder}
                    onChange={(e)=>setValueInput(e.target.value)}
                />
            </div>
        </div>
    )
}
