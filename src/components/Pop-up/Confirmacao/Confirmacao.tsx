import React from 'react'
import { useConfirmacao } from '@/context/confirmacaoContext'
import { GiConfirmed } from "react-icons/gi";

export default function Confirmacao() {
    const { confirmacoes } = useConfirmacao()

    return (
        <div className={`fixed top-3 right-3 lg:w-[25%] w-[60%] z-[100]`}>
            {confirmacoes.map((confirmacao) => (
                <div key={confirmacao.id} className="flex flex-row relative top-3 left-1/2 -translate-x-1/2 items-center rounded-lg lg:h-16 h-8 bg-branco font-poppins animate-slide-down mb-2 -z-10">
                    <div className='w-[5%] h-full bg-verde z-50 rounded-s-lg'></div>
                    <GiConfirmed size={30} color='#37BC2C' className='m-3'/>
                    <div className='flex flex-col'>
                        <p className='text-base text-preto font-semibold font-poppins'>Sucesso</p>
                        <p className="text-preto lg:text-sm text-xs text-center">{confirmacao.message}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}