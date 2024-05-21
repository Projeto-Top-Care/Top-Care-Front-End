'use client'
import Checkbox from '@/components/Checkbox/Checkbox'
import React, { useState } from 'react'
import InputQuantidade from './InputQuantidade'

interface Produtos{
    imagemProduto: string
    nomeProduto: string
    preco: number
}

export default function Produtos({imagemProduto, nomeProduto, preco}: Produtos) {
    const [checked, setChecked] = useState<boolean>(false)
    const [quantidade, setQuantidade] = useState<number>(0)
    return (
        <div className='flex flex-row items-start justify-between'>
            <div className='flex flex-row items-center justify-between'>
                <div>
                    <Checkbox check={setChecked} />
                </div>
                <div className='flex flex-row items-center w-96 h-24'>
                    <img src={imagemProduto} alt="" className='w-[23%] mx-4' />
                    <p className='font-poppins text-sm w-96'>{nomeProduto}</p>
                </div>
            </div>
            <div className='flex flex-col'>
                <InputQuantidade valorQuantidade={setQuantidade} value={quantidade} />
            </div>
            <div className='flex flex-col items-center'>
                <p className='font-poppins'>Preço</p>
                <p className='font-poppins mt-2'>{preco}</p>
            </div>

        </div>
    )
}
