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
}

export default function FiltroGrande({ produtos, close }: FiltroGrande) {

    return (
        <div className='w-64 bg-branco border-r border-y md:border-l md:rounded-md border-cinza rounded-e-md pb-5'>
            <div className='flex justify-end py-1 pr-1 md:invisible'><img src="../assets/Sair.svg" alt="" className='w-[10%]' onClick={() => close!(false)} /></div>
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
                                <Checkbox label={animal.split("(")[0]} />
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
                            <div key={preco} className='flex items-center'>
                                <Checkbox label={preco.split("(")[0]} />
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
                            <div key={marca} className='flex items-center'>
                                <Checkbox label={marca.split("(")[0]}/>
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
                            <div key={porte} className='flex items-center'>
                                <Checkbox label={porte.split("(")[0]}/>
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
                            <div key={tamanho} className='flex items-center'>
                                <Checkbox label={tamanho.split("(")[0]}/>
                                <PalavraFiltro palavra={tamanho} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
