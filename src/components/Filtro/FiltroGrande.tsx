'use client'
import { ProdutoCompleto } from '@/types/produto'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Checkbox from '../Checkbox/Checkbox'
import TituloFiltro from './TituloFiltro'
import PalavraFiltro from './PalavraFiltro'
import { filtrarAnimais, filtrarMarcas, filtrarPorte, filtrarPrecos, filtrarTamanhos } from '@/server/filtros/action'

interface FiltroGrande {
    produtos: ProdutoCompleto[]
    close?: Dispatch<SetStateAction<boolean>>
    setNovosProdutos: Dispatch<SetStateAction<ProdutoCompleto[]>>
}

export default function FiltroGrande({ produtos, close, setNovosProdutos }: FiltroGrande) {
    const [novosProdutos, setProdutos] = useState<ProdutoCompleto[]>(produtos)

    useEffect(()=>{
        setNovosProdutos(novosProdutos)
    }, [novosProdutos])

    return (
        <div className='w-64 bg-branco border-r border-y md:border-l md:rounded-md border-cinza rounded-e-md pb-5'>
            <div className='flex justify-end py-1 pr-1 md:invisible'><img src="../assets/Sair.svg" alt="" className='w-[10%]' onClick={()=>close!(false)}/></div>
            <div className='font-poppins ml-5'>
                <h1 className='font-bold'>Filtrar Produtos</h1>
                <p className='underline text-sm cursor-pointer select-none'>Limpar Filtros</p>
            </div>
            <div>
                <div className='mt-5'>
                    <TituloFiltro titulo='Pet' />
                </div>
                <div className='flex flex-col gap-1 ml-2 mt-5'>
                    {
                        filtrarAnimais(produtos).map((animal, i) => (
                            <div key={animal} className='flex items-center'>
                                <Checkbox checkProdutos={setProdutos} label={animal} produtos={produtos}/>
                                <PalavraFiltro palavra={animal} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <div className='mt-5'>
                    <TituloFiltro titulo='Preço' />
                </div>
                <div className='flex flex-col gap-1 ml-2 mt-5'>
                    {
                        filtrarPrecos(produtos).map((preco, i) => (
                            <div key={i} className='flex items-center'>
                                <Checkbox checkProdutos={setProdutos} label={preco} produtos={produtos}/>
                                <PalavraFiltro palavra={preco} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <div className='mt-5'>
                    <TituloFiltro titulo='Marcas' />
                </div>
                <div className='flex flex-col gap-1 ml-2 mt-5'>
                    {
                        filtrarMarcas(produtos).map((marca, i) => (
                            <div key={i} className='flex items-center'>
                                <Checkbox checkProdutos={setProdutos} label={marca} produtos={produtos}/>
                                <PalavraFiltro palavra={marca} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <div className='mt-5'>
                    <TituloFiltro titulo='Porte' />
                </div>
                <div className='flex flex-col gap-1 ml-2 mt-5'>
                    {
                        filtrarPorte(produtos).map((porte, i) => (
                            <div key={i} className='flex items-center'>
                                <Checkbox checkProdutos={setProdutos} label={porte} produtos={produtos}/>
                                <PalavraFiltro palavra={porte} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <div className='mt-5'>
                    <TituloFiltro titulo='Tamanhos' />
                </div>
                <div className='flex flex-col gap-1 ml-2 mt-5'>
                    {
                        filtrarTamanhos(produtos).map((tamanho, i) => (
                            <div key={i} className='flex items-center'>
                                <Checkbox checkProdutos={setProdutos} label={tamanho} produtos={produtos}/>
                                <PalavraFiltro palavra={tamanho} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
