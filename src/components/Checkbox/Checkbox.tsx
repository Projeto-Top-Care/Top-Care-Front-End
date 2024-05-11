'use client'
import { ProdutoCompleto } from '@/types/produto';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FaCheck } from "react-icons/fa6";

interface IChecked{
    checkProdutos: Dispatch<SetStateAction<ProdutoCompleto[]>>
    label: string
    produtos: ProdutoCompleto[]
}

export default function Checkbox({checkProdutos, label, produtos}: IChecked) {
    const [checked, setChecked] = useState<boolean>(false)
    const [produtosAntigos, setProdutosAntigos] = useState<ProdutoCompleto[]>(produtos)

    const labelCerta = () =>{
        return label.split('(')[0]
    }

    const filtrarProdutos = () =>{
        checkProdutos([...produtos].filter((filtrados)=>{
            return filtrados.especificacoes[2].resposta.includes(labelCerta())
        }))
    }

    useEffect(()=>{
        if(checked){
            filtrarProdutos()
        }else{
            checkProdutos([...produtosAntigos])
        }
    }, [checked])

    return (
        <div className='flex items-center justify-center mr-2'> 
            <input type="checkbox" name="" id="checkbox" className='peer appearance-none w-4 h-4 border bg-cinza-claro rounded checked:border-0 checked:bg-secundaria' onClick={()=>setChecked(!checked)}/>
            <label htmlFor='checkbox' className={`hidden ${checked ? '!flex animate-checked ': ''} absolute text-xs pointer-events-none`}><FaCheck /></label>
        </div>
    )
}
