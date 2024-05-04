    'use client'
    import React, { SetStateAction, useState } from 'react'

    interface QuantidadeProduto {
        propsQuantidade: SetStateAction<number>
    }

    export default function QuantidadeProduto({}) {
        const [quantidade, setQuantidade] = useState<number>(0);
        return (
            <div className='flex items-center w-full h-8 border border-cinza-escuro rounded-lg'>
                <div className='flex flex-row justify-between items-center md:w-[60%] w-[80%] m-auto'>
                    <p className='select-none cursor-pointer font-poppins text-cinza-escuro md:text-2xl text-xl' onClick={()=>setQuantidade(quantidade > 0 ? quantidade - 1: quantidade)}>-</p>
                    <p className='font-poppins md:text-lg text-sm'>{quantidade < 10 ? "0" + quantidade: quantidade}</p>
                    <p className='select-none cursor-pointer font-poppins text-cinza-escuro md:text-2xl text-xl' onClick={()=>setQuantidade(quantidade + 1)}>+</p>
                </div>
            </div>
        )
    }
