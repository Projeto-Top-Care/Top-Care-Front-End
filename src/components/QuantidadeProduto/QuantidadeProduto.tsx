    'use client'
    import React, { SetStateAction, useState } from 'react'

    interface QuantidadeProduto {
        propsQuantidade: SetStateAction<number>
    }

    export default function QuantidadeProduto({}) {
        const [quantidade, setQuantidade] = useState<number>(0);
        return (
            <div className='flex items-center w-full h-8 border border-cinza-escuro rounded-lg'>
                <div className='flex flex-row justify-between items-center w-[60%] m-auto'>
                    <p className='select-none cursor-pointer font-poppins text-cinza-escuro text-2xl' onClick={()=>setQuantidade(quantidade > 0 ? quantidade - 1: quantidade)}>-</p>
                    <p className='font-poppins text-lg'>{quantidade < 10 ? "0" + quantidade: quantidade}</p>
                    <p className='select-none cursor-pointer font-poppins text-cinza-escuro text-2xl' onClick={()=>setQuantidade(quantidade + 1)}>+</p>
                </div>
            </div>
        )
    }
