import { ProdutoCompleto } from '@/types/produto'
import React, { Dispatch, SetStateAction } from 'react'
import Checkbox from '../Checkbox/Checkbox'
import TituloFiltro from './TituloFiltro'
import PalavraFiltro from './PalavraFiltro'

interface FiltroGrande {
    produtos: ProdutoCompleto[]
    close: Dispatch<SetStateAction<boolean>>
}

export default function FiltroGrande({ produtos, close }: FiltroGrande) {

    const filtrarAnimais = () => {
        const animais = produtos.map((produto) => {
            return produto.especificacoes[2].resposta
        })

        const animaisFiltrados = animais.filter((valor, i, self) => {
            return self.indexOf(valor) == i && !valor.includes(' e ')
        })

        const quantidades: number[] = animaisFiltrados.map((animal) => {
            let quantidade: number = 0;
            animais.forEach((animal1) => {
                if (animal1.includes(animal)) {
                    quantidade++
                }
            })
            return quantidade!;
        })
        return animaisFiltrados.map((animal, i) => {
            return animal + `(${quantidades[i]})`
        });
    }

    const precos = () => {
        const arrayPrecos = [50, 100, 200, 300, 300]
        const arrayPrecosString = ['R$0,00 - R$50,00', 'R$50,00 - R$100,00', 'R$100,00 - R$200,00', 'R$200,00 - R$300,00', '+ R$300,00'];
        
        const quantidades = arrayPrecos.map((preco, i)=>{
            let quantidade = 0
            produtos.forEach((produto,index)=>{
                const precoProduto = produto.precoNovo;
                if(i == 0){
                    (precoProduto <= preco && precoProduto > 0 ? quantidade++ : '')
                }else if(i == 4){
                    (precoProduto > preco ? quantidade++ : '')
                }else{
                    (precoProduto <= preco && precoProduto > arrayPrecos[i-1] ? quantidade++ : '')
                }
            })
            return quantidade;
        })
        return arrayPrecosString.map((preco, i)=>{
            return preco + `(${quantidades[i]})`
        })
    }

    const filtrarMarcas = () =>{
        const marcas = produtos.map((produto) => {
            return produto.marca
        })

        const marcasFiltrados = marcas.filter((valor, i, self) => {
            return self.indexOf(valor) == i
        })

        const quantidades: number[] = marcasFiltrados.map((marca) => {
            let quantidade: number = 0;
            marcas.forEach((marca1) => {
                if (marca1.includes(marca)) {
                    quantidade++
                }
            })
            return quantidade!;
        })
        return marcasFiltrados.map((animal, i) => {
            return animal + `(${quantidades[i]})`
        });
    }

    const filtrarPorte = () =>{
        const portes = produtos.map((produto) => {
            return produto.especificacoes[1].resposta
        })
        const portesPadrao = ['Pequeno', 'Médio', "Grande"];

        const quantidades: number[] = portesPadrao.map((porte) => {
            let quantidade: number = 0;
            portes.forEach((porte1) => {
                if (porte1.includes(porte) || porte1.includes('Todos')) {
                    quantidade++
                }
            })
            return quantidade!;
        })

        return portesPadrao.map((porte, i)=>{
            return porte + `(${quantidades[i]})`
        })
    }
    const filtrarTamanhos = () =>{
        const tamanhos = produtos.map((produto) => {
            return produto.tamanho
        })
        const tamanhoPadrao = ["PP", "P", "M", "G", "Único"]

        const quantidades: number[] = tamanhoPadrao.map((tamanho) => {
            let quantidade: number = 0;
            tamanhos.forEach((tamanho1) => {
                if (tamanho1.includes(tamanho)) {
                    quantidade++
                }
            })
            return quantidade!;
        })
        return tamanhoPadrao.map((tamanho, i)=>{
            return tamanho + `(${quantidades[i]})`
        })

    }

    return (
        <div className='w-72 bg-branco border-r border-y border-cinza rounded-e-md pb-5'>
            <div className='flex justify-end py-1 pr-1'><img src="../assets/Sair.svg" alt="" className='w-[10%]' onClick={()=>close(false)}/></div>
            <div className='font-poppins ml-5'>
                <h1 className='font-bold'>Filtrar Produtos</h1>
                <p className='underline text-sm'>Limpar Filtros</p>
            </div>
            <div>
                <div className='mt-5'>
                    <TituloFiltro titulo='Pet' />
                </div>
                <div className='flex flex-col gap-1 ml-2 mt-5'>
                    {
                        filtrarAnimais().map((animal, i) => (
                            <div key={i} className='flex items-center'>
                                <Checkbox />
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
                        precos().map((preco, i) => (
                            <div key={i} className='flex items-center'>
                                <Checkbox />
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
                        filtrarMarcas().map((marca, i) => (
                            <div key={i} className='flex items-center'>
                                <Checkbox />
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
                        filtrarPorte().map((marca, i) => (
                            <div key={i} className='flex items-center'>
                                <Checkbox />
                                <PalavraFiltro palavra={marca} />
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
                        filtrarTamanhos().map((marca, i) => (
                            <div key={i} className='flex items-center'>
                                <Checkbox />
                                <PalavraFiltro palavra={marca} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
