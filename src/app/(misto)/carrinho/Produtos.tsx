'use client'
import Checkbox from '@/components/Checkbox/Checkbox'
import DoisBotoes from '@/components/Pop-up/DoisBotoes/DoisBotoes'
import { useCarrinho } from '@/context/CarrinhoContext'
import { QntProduto } from '@/types/usuarios'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import InputQuantidade from './InputQuantidade'

interface Produtos {
    id: number
    imagemProduto: string
    nomeProduto: string
    variacao: string
    preco: number
    estoque: number
}

export default function Produtos({ id, imagemProduto, variacao, nomeProduto, preco, estoque }: Produtos) {
    const {items} = useCarrinho()
    const [quantidade, setQuantidade] = useState<number>(1)
    const [checked, setChecked] = useState<boolean>(true)
    const [precoTotal, setPrecoTotal] = useState<number>(preco)
    const [open, setOpen] = useState<boolean>(false)
    const [sim, setSim] = useState<boolean>(false)

    const abrirPopUp = () => {
        setOpen(true)
    }

    const removeItem = () => {
        if (sim) {
            const carrinho = items
            const carrinhoAtualizado = carrinho.filter((item) => {
                return !((item as unknown as QntProduto).id == id)
            })
            localStorage.setItem('carrinho', JSON.stringify(carrinhoAtualizado))
            location.reload()
        }
    }

    const atualizarCarrinho = () => {
        const carrinho = items
        const newCarrinho = carrinho.map((item) => {
            if ((item as unknown as QntProduto).id == id) {
                return { id: id, quantidade: quantidade }
            } else {
                return item
            }
        })
        localStorage.setItem('carrinho', JSON.stringify(newCarrinho))
    }
    useEffect(() => {
        atualizarCarrinho()
        setPrecoTotal(preco * quantidade)
    }, [quantidade])

    useEffect(() => {
        removeItem()
    }, [sim])


    return (
        <div>
            <div className='flex flex-row items-start justify-between md:h-24 h-16'>
                <div className='flex flex-row items-center h-full w-full'>
                    <div className='flex flex-row justify-center items-center md:w-28 w-20 h-full'>
                        <div className='flex flex-row items-center justify-center w-[100%]'>
                            <img src={imagemProduto} alt="" className='w-[80%]' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-start h-full md:w-[80%] w-[70%] md:justify-between justify-center'>
                        <div className='flex items-center justify-center md:h-full h-auto'>
                            <p className='font-poppins md:text-sm text-xs overflow-hidden line-clamp-1 md:line-clamp-2 w-full md:w-full'>{nomeProduto}- {variacao}</p>
                        </div>
                        <div className='flex flex-col'>
                            <InputQuantidade limite={estoque} valorQuantidade={setQuantidade} abrirPopUp={abrirPopUp} value={quantidade} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center w-24'>
                    <p className='font-poppins md:!flex hidden'>Preço</p>
                    <p className='font-poppins mt-2 md:text-base text-sm'>R${precoTotal.toFixed(2).replace(".", ",")}</p>
                </div>
            </div>

            {open && (
                <div className="w-full">
                    <div className='fixed top-0 left-0 w-full h-full z-50  bg-fundo-modal' onClick={() => setOpen(false)}></div>
                    <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 lg:w-[25%] w-[60%]`}>
                        <DoisBotoes texto="Você deseja remover esse item da sacola?" openParms={setOpen} sim={setSim} />
                    </div>
                </div>
            )}
        </div>
    )
}
