import React from 'react'
import { FaCheck } from "react-icons/fa6";

export default function Checkbox() {
    return (
        <div className='flex items-center justify-center mr-2'> 
            <input type="checkbox" name="" id="checkbox" className='peer appearance-none w-4 h-4 border bg-cinza-claro rounded checked:border-0 checked:bg-secundaria' />
            <label htmlFor='checkbox' className='invisible absolute peer-checked:visible peer-checked:animate-checked text-xs pointer-events-none'><FaCheck /></label>
        </div>
    )
}
