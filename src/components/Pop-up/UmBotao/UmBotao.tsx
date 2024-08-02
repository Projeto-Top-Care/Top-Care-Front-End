import { useRouter } from 'next/navigation'
import React, { SetStateAction, useEffect, useState } from 'react'

interface IPopUp {
    texto: string,
    openParms: React.Dispatch<SetStateAction<boolean>>,
    rota?: string
}

export default function UmBotao({ texto, openParms, rota}: IPopUp) {
    const [open, setOpen] = useState<boolean>(true)
    const router = useRouter()

    useEffect(()=>{
        openParms(open)
        if(!open && rota){
            router.push(rota)
        };
    }, [open])

    return (
        <div className='h-32 bg-terciaria rounded-lg font-poppins flex items-center justify-center flex-col gap-4'>
            <h2 className='text-xs lg:text-base text-center'>{texto}</h2>
            <button className='lg:w-[25%] w-[40%] h-8 bg-primaria lg:text-sm text-xs rounded-lg' onClick={()=>setOpen(false)}>OK</button>
        </div>
    )
}
