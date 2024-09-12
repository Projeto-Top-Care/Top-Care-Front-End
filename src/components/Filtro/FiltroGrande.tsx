'use client'
import { ProdutoCard, ProdutoCompleto } from '@/types/produto'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Checkbox from '../Checkbox/Checkbox'
import TituloFiltro from './TituloFiltro'
import { buscarFiltros, buscarTodosCompleto } from '@/server/produtos/action'
import { add } from 'date-fns'
import { useError } from '@/context/ErrorContext'

interface FiltroGrande {
    close?: Dispatch<SetStateAction<boolean>>
}

export default function FiltroGrande({ close }: FiltroGrande) {

    const { addError } = useError()

    const [label, setLabel] = useState<string>('');
    const [titulo, setTitulo] = useState<string>('');
    const [produtosFiltrados, setProdutosFiltrados] = useState<ProdutoCompleto[]>()

    const [especies, setEspecies] = useState<string[]>([])
    const [marcas, setMarcas] = useState<string[]>([])
    const [categorias, setCategorias] = useState<string[]>([])

    useEffect(() => {
        const func = () => {
            try {
                buscarFiltros("especies").then(resp => resp).then(data => setEspecies(data))
                buscarFiltros("marcas").then(resp => resp).then(data => setMarcas(data))
                buscarFiltros("categorias").then(resp => resp).then(data => setCategorias(data))
            } catch (e) {
                addError('Erro ao buscar filtros')
                console.log(e)
            }
        }
        func()
    }, [])

    useEffect(() => {
        const func = async () => {
            const produtos: ProdutoCompleto[] = await buscarTodosCompleto()
            if (produtos) {
                setProdutosFiltrados(produtos)
            }
        }
        func()
    }, [])

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
                        especies.map((especie, index) => (
                            <div key={index} className='flex items-center'>
                                <Checkbox  label={especie}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <div className='mt-5'>
                    <TituloFiltro titulo='Preço' />
                </div>
            </div>
            <div>
                <div className='mt-5'>
                    <TituloFiltro titulo='Marcas' />
                </div>
                <div className='flex flex-col gap-1 ml-2 mt-5'>
                    {
                        marcas.map((marca, index) => (
                            <div key={index} className='flex items-center'>
                                <Checkbox label={marca}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <div className='mt-5'>
                    <TituloFiltro titulo='Categoria' />
                </div>
                <div className='flex flex-col gap-1 ml-2 mt-5'>
                    {
                        categorias.map((categoria, index) => (
                            <div key={index} className='flex items-center'>
                                <Checkbox label={categoria}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
