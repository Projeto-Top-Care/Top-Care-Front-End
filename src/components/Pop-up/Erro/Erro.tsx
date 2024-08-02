import React from 'react'
import { useError } from '@/context/ErrorContext'
import { VscError } from "react-icons/vsc";

export default function Erro() {
    const { errors } = useError()

    return (
        <div className={`fixed top-3 right-3 lg:w-[25%] w-[60%] z-[100]`}>
            {errors.map((erro) => (
                <div key={erro.id} className="flex flex-row relative top-3 left-1/2 -translate-x-1/2 items-center rounded-lg lg:h-16 h-8 bg-branco font-poppins animate-slide-down mb-2 -z-10">
                    <div className='w-[5%] h-full bg-error z-50 rounded-s-lg'></div>
                    <VscError size={30} color='#E94444' className='m-3'/>
                    <div className='flex flex-col'>
                        <p className='text-base text-preto font-semibold font-poppins'>Erro</p>
                        <p className="text-preto lg:text-sm text-xs -mt-1">{erro.message}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
