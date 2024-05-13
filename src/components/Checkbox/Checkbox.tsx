'use client'
import { ProdutoCompleto } from '@/types/produto';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FaCheck } from "react-icons/fa6";

interface IChecked {
    checkProdutos: Dispatch<SetStateAction<ProdutoCompleto[]>>
    labels: string[]
    label: string
    produtos: ProdutoCompleto[]
    produtosFiltrados: ProdutoCompleto[]
}

export default function Checkbox({ checkProdutos, labels, label, produtos, produtosFiltrados }: IChecked) {
    const [checked, setChecked] = useState<boolean>(false)

    const filtrarProdutos = () => {
        let produtosMostrados1: ProdutoCompleto[] = [...produtosFiltrados]

        labels.forEach((label1) => {
            if(label1 == label){
                [...produtos].forEach((filtrados) => {
                    if (filtrados.especificacoes[2].resposta.includes(label1.split("(")[0])) {
                        produtosMostrados1.push(filtrados)
                    }
                })
            }
        })
        return produtosMostrados1.filter((valor, index, self)=>{
            return self.indexOf(valor) == index
        })
    }

    const tirarProdutos = () =>{
        let produtosMostrados1: ProdutoCompleto[] = [...produtosFiltrados]

        labels.forEach((label1) => {
            if(label1 == label){
                [...produtosFiltrados].forEach((filtrados) => {
                    if (filtrados.especificacoes[2].resposta.includes(label1.split("(")[0]) && !filtrados.especificacoes[2].resposta.includes(" e ")) {
                        const index = produtosFiltrados.indexOf(filtrados)
                        produtosMostrados1.splice(index, 1)
                        console.log(filtrados.nomeProduto +" "+ filtrados.especificacoes[2].resposta)
                    }
                })
            }
        })
        return produtosMostrados1
    }

    useEffect(() => {
        if (checked) {
            checkProdutos(filtrarProdutos())
        }else if(!checked){
            checkProdutos(tirarProdutos())
        }
    }, [checked])

    return (
        <div className='flex items-center justify-center mr-2'>
            <input type="checkbox" name="" id="checkbox" className='peer appearance-none w-4 h-4 border bg-cinza-claro rounded checked:border-0 checked:bg-secundaria' onClick={() => setChecked(!checked)} />
            <label htmlFor='checkbox' className={`hidden ${checked ? '!flex animate-checked ' : ''} absolute text-xs pointer-events-none`}><FaCheck /></label>
        </div>
    )
}
