import { VarianteProps } from '@/types/produto'
import React from 'react'

interface ButtonVarianteProps {
    varianteSelecionada: VarianteProps | undefined
    variante: VarianteProps
    setVariante: React.Dispatch<React.SetStateAction<VarianteProps | undefined>>
}

export default function ButtonVariante({ variante, setVariante, varianteSelecionada }: ButtonVarianteProps) {
    return (
        <button
            onClick={() => setVariante(variante)}
            className={`${variante == varianteSelecionada ? `border-roxo-select text-roxo-select bg-[#EAE4FF] scale-105` : `border-cinza-escuro`} duration-100 border rounded-md p-1  text-sm m-1`}
        >
            <div className='flex flex-row gap-5 px-5'>
                <div>
                    {variante.cor ? variante.cor : "-"}
                </div>
                <p>|</p>
                <div>
                    {variante.tamanho ? variante.tamanho : "-"}
                </div>
                <p>|</p>
                <div>
                    {variante.peso ? variante.peso : "-"}
                </div>
                <p>|</p>
                <div>
                    {variante.unidades ? variante.unidades : "-"}
                </div>
            </div>
        </button>
    )
}
