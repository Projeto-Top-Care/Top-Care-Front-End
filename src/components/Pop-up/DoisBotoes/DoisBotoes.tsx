import React, { SetStateAction, useEffect, useState } from 'react'

interface IPopUp {
    texto: string,
    openParms: React.Dispatch<SetStateAction<boolean>>
    sim: React.Dispatch<SetStateAction<boolean>>
}

export default function DoisBotoes({ texto, openParms, sim }: IPopUp) {
    const [open, setOpen] = useState<boolean>(true)
    useEffect(() => {
        openParms(open)
    }, [open])
    return (
        <div className='h-32 bg-terciaria rounded-lg font-poppins flex items-center justify-center flex-col gap-4'>
            <h2 className='text-xs lg:text-base text-center'>{texto}</h2>
            <div className='w-[60%] flex flex-row justify-between'>
                <button className='lg:w-[40%] w-[40%] h-8 bg-primaria lg:text-sm text-xs rounded-lg' onClick={() => {
                    setOpen(false)
                    sim(false)
                }}>Não</button>
                <button className='lg:w-[40%] w-[40%] h-8 bg-primaria lg:text-sm text-xs rounded-lg' onClick={() => {
                    setOpen(false)
                    sim(true)
                }}>Sim</button>
            </div>
        </div>
    )
}
