'use client'
import Checkbox from '@/components/Checkbox/Checkbox'
import DoisBotoes from '@/components/Pop-up/DoisBotoes/DoisBotoes'
import { useCarrinho } from '@/context/CarrinhoContext'
import { QuantidadeProduto } from '@/types/usuarios'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import InputQuantidade from './InputQuantidade'
import { ProdutoCompleto, VarianteProps } from '@/types/produto'
import { QuantidadeProdutoCarrinho } from './page'
import { removerProduto } from '@/server/carrinho/action'

interface Produtos {
    produto: ProdutoCompleto,
    variante: VarianteProps,
    produtoQuantidade: QuantidadeProdutoCarrinho,
    setAtt: Dispatch<SetStateAction<number>>
}

export default function Produtos({ produto, variante, produtoQuantidade, setAtt}: Produtos) {

    const [precoTotal, setPrecoTotal] = useState<number>(variante.preco)
    const [open, setOpen] = useState<boolean>(false)
    const [sim, setSim] = useState<boolean>(false)

    const abrirPopUp = () => {
        setOpen(true)
    }

    const removeItem = async () => {
        if (sim) {
            await removerProduto(produtoQuantidade.id).then(() => setAtt((prev) => prev + 1))
        }
    }

    const atualizarCarrinho = () => {
        ""
    }
    useEffect(() => {
        atualizarCarrinho()
        produtoQuantidade && setPrecoTotal(variante.preco * produtoQuantidade.quantidade)
    }, [produtoQuantidade?.quantidade ? produtoQuantidade.quantidade : 0])

    useEffect(() => {
        removeItem()
    }, [sim])


    return (
        <div>
            <div className='flex flex-row items-start justify-between md:h-24 h-16'>
                <div className='flex flex-row items-center h-full w-full'>
                    <div className='flex flex-row justify-center items-center md:w-28 w-20 h-full'>
                        <div className='flex flex-row items-center justify-center w-[100%]'>
                            <img src={produto.imagens[0].caminho} alt="" className='w-[80%]' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-start h-full md:w-[80%] w-[70%] md:justify-between justify-center'>
                        <div className='flex items-center justify-center md:h-full h-auto'>
                            <p className='font-poppins md:text-sm text-xs overflow-hidden line-clamp-1 md:line-clamp-2 w-full md:w-full'>
                                {produto.nome} - {" "} 
                                 {variante.cor ? variante.cor : ""+ " "+ variante.tamanho ? variante.tamanho : "" + " "+ variante.peso ? variante.peso : ""+" "+ variante.unidades ? variante.unidades : "" }</p>
                        </div>
                        <div className='flex flex-col'>{
                            produtoQuantidade && produtoQuantidade.quantidade != 0 &&
                            <InputQuantidade limite={variante.estoque} abrirPopUp={abrirPopUp} value={produtoQuantidade.quantidade} id={produtoQuantidade.id} setAtt={setAtt}/>
                        }</div>
                    </div>
                </div>
                <div className='flex flex-col items-center w-24'>
                    <p className='font-poppins md:!flex hidden'>Preço</p>
                    <p className='font-poppins mt-2 md:text-base text-sm'>R${precoTotal}</p>
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
