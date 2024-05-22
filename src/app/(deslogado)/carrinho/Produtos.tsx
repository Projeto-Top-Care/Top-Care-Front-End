'use client'
import Checkbox from '@/components/Checkbox/Checkbox'
import DoisBotoes from '@/components/Pop-up/DoisBotoes/DoisBotoes'
import { getLocalStorageArray } from '@/server/localStorage/actions'
import { QntProduto } from '@/types/usuarios'
import React, { useEffect, useState } from 'react'
import InputQuantidade from './InputQuantidade'

interface Produtos {
    id: number
    imagemProduto: string
    nomeProduto: string
    preco: number
}

export default function Produtos({ id, imagemProduto, nomeProduto, preco }: Produtos) {
    const [quantidade, setQuantidade] = useState<number>(1)
    const [checked, setChecked] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)
    const [sim, setSim] = useState<boolean | number>(0)

    const abrirPopUp = () => {
        setOpen(true)
    }

    const removeItem = () => {
        if(sim == 0) return

        if (sim) {
            const carrinho = getLocalStorageArray('carrinho')
            const carrinhoAtualizado = carrinho.filter((item) => {
                return !((item as unknown as QntProduto).id == id)
            })
            localStorage.setItem('carrinho', JSON.stringify(carrinhoAtualizado))
            location.reload()
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 4000)
        }
    }

    const atualizarCarrinho = () =>{
        const carrinho = getLocalStorageArray('carrinho')
        const newCarrinho = carrinho.map((item)=>{
            if((item as unknown as QntProduto).id == id){
                return {id: id, quantidade: quantidade}
            }else{
                return item
            }
        })
        localStorage.setItem('carrinho', JSON.stringify(newCarrinho))
    }

    useEffect(()=>{
        atualizarCarrinho()
    },[quantidade])

    useEffect(() => {
      removeItem()
    }, [sim])
    

    return (
        <div>
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
                    <InputQuantidade valorQuantidade={setQuantidade} abrirPopUp={abrirPopUp} value={quantidade} />
                </div>
                <div className='flex flex-col items-center'>
                    <p className='font-poppins'>Preço</p>
                    <p className='font-poppins mt-2'>{preco}</p>
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
