    'use client'
    import React, { SetStateAction, useEffect, useState } from 'react'

    interface QuantidadeProduto {
        propsQuantidade: SetStateAction<number>
        estoqueDisponivel: number
    }

    export default function QuantidadeProduto({estoqueDisponivel}: QuantidadeProduto) {
        const [quantidade, setQuantidade] = useState<number>(1);
        
        useEffect(() => {
            quantidade > estoqueDisponivel ? setQuantidade(estoqueDisponivel) : setQuantidade(quantidade)
          }, [quantidade])

        return (
            <div className='flex items-center w-full h-8 border border-cinza-escuro rounded-lg'>
                <div className='flex flex-row justify-between items-center md:w-[60%] w-[80%] m-auto'>
                    <p className={`select-none cursor-pointer font-poppins ${quantidade == 1 ? `text-cinza`: `text-cinza-escuro`} md:text-2xl text-xl`} onClick={()=>setQuantidade(quantidade > 1 ? quantidade - 1: quantidade)}>-</p>
                    <p className='font-poppins md:text-lg text-sm'>{quantidade < 10 ? "0" + quantidade: quantidade}</p>
                    <p className={`select-none cursor-pointer font-poppins ${quantidade == estoqueDisponivel ? `text-cinza`: `text-cinza-escuro`} md:text-2xl text-xl`} onClick={()=>setQuantidade(quantidade + 1)}>+</p>
                </div>
            </div>
        )
    }
