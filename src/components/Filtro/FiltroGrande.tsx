'use client'
import { ProdutoCompleto } from '@/types/produto'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Checkbox from '../Checkbox/Checkbox'
import TituloFiltro from './TituloFiltro'
import PalavraFiltro from './PalavraFiltro'
import { aplicarFiltros, definirProdutosFiltrados, filtrarAnimais, filtrarMarcas, filtrarPorte, filtrarPrecos, filtrarTamanhos, returnProdutos, tirarFiltros } from '@/server/filtros/action'

interface FiltroGrande {
    produtos: ProdutoCompleto[]
    close?: Dispatch<SetStateAction<boolean>>
    titulo: string
    setLabel1: Dispatch<SetStateAction<string>>
    setCheck: Dispatch<SetStateAction<boolean>>
}

export default function FiltroGrande({ produtos, close, titulo, setLabel1, setCheck }: FiltroGrande) {

    const [checked, setChecked] = useState<boolean>(false);
    const [label, setLabel] = useState<string>('');

    useEffect(()=>{
        if (checked) {
            definirProdutosFiltrados(aplicarFiltros(label, titulo));
        } else if(!checked){
            definirProdutosFiltrados(tirarFiltros(label, titulo));
        }
        setLabel1(label)
        setCheck(checked)
    },[label, checked])

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
                        filtrarAnimais(titulo == 'pet' || titulo == '' ? produtos : returnProdutos()).map((animal, i) => (
                            <div key={animal} className='flex items-center'>
                                <Checkbox check={setChecked} onClick={()=>{setLabel(animal.split("(")[0])}}/>
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
                        filtrarPrecos(titulo == 'preco' || titulo == '' ? produtos : returnProdutos()).map((preco, i) => (
                            <div key={preco} className='flex items-center'>
                                <Checkbox check={setChecked}/>
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
                        filtrarMarcas(titulo == 'marca' || titulo == '' ? produtos : returnProdutos()).map((marca, i) => (
                            <div key={marca} className='flex items-center'>
                                <Checkbox check={setChecked}/>
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
                        filtrarPorte(titulo == 'porte' || titulo == '' ? produtos : returnProdutos()).map((porte, i) => (
                            <div key={porte} className='flex items-center'>
                                <Checkbox check={setChecked}/>
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
                        filtrarTamanhos(titulo == 'tamanhos' || titulo == '' ? produtos : returnProdutos()).map((tamanho, i) => (
                            <div key={tamanho} className='flex items-center'>
                                <Checkbox check={setChecked}/>
                                <PalavraFiltro palavra={tamanho} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
