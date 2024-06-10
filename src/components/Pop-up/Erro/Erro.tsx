import React from 'react'
import { useError } from '@/context/ErrorContext'

export default function Erro() {
    const { errors } = useError()!

    return (
        <div className={`fixed top-3 left-1/2 -translate-x-1/2 lg:w-[40%] w-[60%] z-[100]`}>
            {errors.map((erro) => (
                <div key={erro.id} className="flex relative top-3 left-1/2 -translate-x-1/2 items-center justify-center lg:h-10 h-8 bg-error rounded font-poppins animate-slide-down mb-2 z-50">
                    <p className="text-branco lg:text-base text-xs text-center">{erro.message}</p>
                </div>
            ))}
        </div>
    )
}
