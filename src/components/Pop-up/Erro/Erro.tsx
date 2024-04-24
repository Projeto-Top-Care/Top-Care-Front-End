import React from 'react'

export default function Erro() {
    return (
        <div className={`fixed top-3 left-1/2 -translate-x-1/2 lg:w-[40%] w-[60%] animate-slide-down`}>
            <div className="flex items-center justify-center lg:h-10 h-8 bg-error rounded font-poppins">
                <p className="text-branco lg:text-base text-xs text-center">Erro, insira os dados corretamente!</p>
            </div>
        </div>
    )
}
