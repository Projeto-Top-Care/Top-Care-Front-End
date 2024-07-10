import React from 'react'
import { useConfirmacao } from '@/context/confirmacaoContext'

export default function Confirmacao() {
    const { confirmacoes } = useConfirmacao()!

    return (
        <div className={`fixed top-3 left-1/2 -translate-x-1/2 lg:w-[40%] w-[60%] z-[100]`}>
            {confirmacoes.map((confirmacao) => (
                <div key={confirmacao.id} className="flex relative top-3 left-1/2 -translate-x-1/2 items-center justify-center lg:h-10 h-8 bg-terciaria rounded font-poppins animate-slide-down mb-2 z-50">
                <p className="text-preto lg:text-base text-xs text-center">{confirmacao.message}</p>
            </div>
            ))}
        </div>
    )
}