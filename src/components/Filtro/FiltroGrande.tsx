import { ProdutoCompleto } from '@/types/produto'
import React from 'react'
import TituloFiltro from './TituloFiltro'

interface FiltroGrande {
    produtos: ProdutoCompleto[]
}

export default function FiltroGrande({ produtos }: FiltroGrande) {

    const filtrarAnimais = () =>{
        const animais = produtos.map((produto)=>{
            return produto.especificacoes[2].resposta
        })
        return animais.filter((valor, i, self)=>{
            return self.indexOf(valor) == i && !valor.includes(' e ')
        })
    }

    return (
        <div className='absolute left-0 top-0 w-72 bg-white'>
            <div className='font-poppins mt-6 ml-5'>
                <h1 className='font-bold'>Filtrar Produtos</h1>
                <p className='underline text-sm'>Limpar Filtros</p>
            </div>
            <div className='mt-5'>
                <TituloFiltro titulo='Pet' />
            </div>
            <div>
                {
                    filtrarAnimais().map((animal, i) => (
                        <div key={i}>
                            <input type="checkbox" name="" id="" className='checked:bg-primaria' />
                            <p>{animal}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
