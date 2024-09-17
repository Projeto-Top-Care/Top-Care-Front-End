'use client'
import { ProdutoCard, ProdutoCompleto } from '@/types/produto'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Checkbox from '../Checkbox/Checkbox'
import TituloFiltro from './TituloFiltro'
import { buscarFiltrados, buscarFiltros, buscarTodos, buscarTodosCompleto } from '@/server/produtos/action'
import { add, set } from 'date-fns'
import { useError } from '@/context/ErrorContext'
import BotaoGrande from '../Botoes/BotaoGrande/BotaoGrande'

interface FiltroGrande {
    close?: Dispatch<SetStateAction<boolean>>
    query?: string
    setUrl: Dispatch<SetStateAction<string>>
    setAtt: Dispatch<SetStateAction<number>>
}

export default function FiltroGrande({ close, query, setUrl, setAtt }: FiltroGrande) {

    const { addError } = useError()

    const [especies, setEspecies] = useState<string[]>([])
    const [marcas, setMarcas] = useState<string[]>([])
    const [categorias, setCategorias] = useState<string[]>([])

    const [especiesFiltradas, setEspeciesFiltradas] = useState<string[]>([])
    const [marcasFiltradas, setMarcasFiltradas] = useState<string[]>([])
    const [categoriasFiltradas, setCategoriasFiltradas] = useState<string[]>([])

    const [limparFiltro, setLimparFiltro] = useState<boolean>(false)

    const limparFiltroFunc = () => {
        setLimparFiltro(true)
        setTimeout(() => {
            setLimparFiltro(false)
        }, 1)
    }

    useEffect(() => {
        const func = async () => {
            await buscarTodos(query ? query : 'empty')

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
    }, [query])

    async function filtrar() {
        await buscarTodos(query ? query : 'empty')
        let url = 'especies='+especiesFiltradas.join(',')+'&marcas='+marcasFiltradas.join(',')+'&categorias='+categoriasFiltradas.join(',')
        
        if(url == 'especies=&marcas=&categorias='){
            url = ''
        }
        setUrl(url)
        setAtt(att => att + 1)
    }

    return (
        <div className='w-64 bg-branco border-r border-y md:border-l md:rounded-md border-cinza rounded-e-md pb-5 relative'>
            <div className='flex justify-end py-1 pr-1 md:invisible'><img src="../assets/Sair.svg" alt="" className='w-[10%]' onClick={() => close!(false)} /></div>
            <div className='font-poppins ml-5'>
                <h1 className='font-bold'>Filtrar Produtos</h1>
                <p className='underline text-sm cursor-pointer select-none' onClick={limparFiltroFunc}>Limpar Filtros</p>
            </div>
            <div>
                <div className='mt-5'>
                    <TituloFiltro titulo='Pet' />
                </div>
                <div className='flex flex-col gap-1 ml-2 mt-5'>
                    {
                        especies.map((especie, index) => (
                            <div key={index} className='flex items-center'>
                                <Checkbox 
                                    label={especie} 
                                    limparFiltro={limparFiltro}
                                    titulo='Pets'
                                    especies={especiesFiltradas}
                                    setEspeciesFiltradas={setEspeciesFiltradas}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* <div>
                <div className='mt-5'>
                    <TituloFiltro titulo='Preço' />
                </div>
            </div> */}
            <div>
                <div className='mt-5'>
                    <TituloFiltro titulo='Marcas' />
                </div>
                <div className='flex flex-col gap-1 ml-2 mt-5'>
                    {
                        marcas.map((marca, index) => (
                            <div key={index} className='flex items-center'>
                                <Checkbox 
                                    label={marca} 
                                    limparFiltro={limparFiltro} 
                                    titulo='Marcas'
                                    marcas={marcasFiltradas}
                                    setMarcasFiltradas={setMarcasFiltradas}
                                />
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
                                <Checkbox 
                                    label={categoria} 
                                    limparFiltro={limparFiltro} 
                                    titulo='Categorias'
                                    categorias={categoriasFiltradas}
                                    setCategoriasFiltradas={setCategoriasFiltradas}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='sticky bottom-5 mx-auto w-56 mt-5'>
                <div className=''>
                    <BotaoGrande title='Aplicar Filtros' background='primaria' type='button' onClick={filtrar}/>
                </div>
            </div>
        </div>
    )
}
