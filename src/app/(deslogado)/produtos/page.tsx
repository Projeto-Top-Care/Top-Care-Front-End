'use client'
import CardProduto from '@/components/CardProduto/CardProduto'
import produtos from '@/banco/produtos.json'
import React, { useEffect, useState } from 'react'
import { FaFilter } from "react-icons/fa";
import FiltroGrande from '@/components/Filtro/FiltroGrande'
import { ProdutoCompleto } from '@/types/produto'
import Select from '@/components/Select/Select';

export default function Produtos() {
  const [produtosMostrados, setProdutosMostrados] = useState<ProdutoCompleto[]>(produtos)
  const [filtroOpen, setFiltroOpen] = useState<boolean>(false)
  const [animation, setAnimation] = useState<boolean>(false)
  const [escolha, setEscolha] = useState<string>('');

  useEffect(() => {
    if (escolha == 'A a Z') {
      console.log("passou 1");
      const teste = produtosMostrados.sort(function odenar(a, b){
        return (a.nomeProduto > b.nomeProduto ? 1 : -1)
      })
      setProdutosMostrados(teste);
    } else if (escolha == "Mais Populares") {
      console.log("passou 2");
      const teste = produtosMostrados.sort(function ordenarPopulares(a: ProdutoCompleto, b: ProdutoCompleto) {
        return b.quantidadeVendas - a.quantidadeVendas
      })
      setProdutosMostrados(teste);      
    } else if (escolha == 'Menor Preço') {
      console.log("passou 3");
      setProdutosMostrados(produtosMostrados.sort(function ordenar(a, b) {
        return a.precoNovo - b.precoNovo
      }))
    } else if (escolha == "Maior Preço") {
      console.log("passou 4");
      setProdutosMostrados(produtosMostrados.sort(function ordenar(a, b) {
        return b.precoNovo - a.precoNovo
      }))
    } else if(escolha == "Mais bem Avaliados") {
      console.log("passou 5");
      setProdutosMostrados(produtosMostrados.sort(function ordenar(a, b) {
        return b.notaDeAvaliacao - a.notaDeAvaliacao
      }))
    }
  }, [escolha])

  useEffect(() => {
    if (!animation) {
      setTimeout(() => {
        setFiltroOpen(false)
        setAnimation(true)
      }, 290)
    }
  }, [animation])

  const mostrarProdutos = () => {
    return (
       produtosMostrados.map((produto) => (
        <div key={produto.id}>
          <CardProduto id={produto.id} nomeProduto={produto.nomeProduto} precoAntigoDoProduto={produto.precoAntigoDoProduto}
          precoNovo={produto.precoNovo} notaDeAvaliacao={produto.notaDeAvaliacao} imagemProduto={produto.imagemProduto} desconto={produto.desconto} />
        </div>
      ))
    )
  }

  return (
    <main>
      <section className='flex items-start'>
        {
          filtroOpen && (
            <div className={`absolute ${animation ? 'animate-slide-left' : 'animate-slide-right'} z-50`}>
              <FiltroGrande produtos={produtosMostrados} close={setAnimation} />
            </div>
          )
        }
      </section>
      <section className='mt-5'>
        <div className='w-full flex justify-between'>
          <div className='flex flex-row gap-2 items-center justify-center border w-[25%] p-1 rounded-lg border-cinza ml-2 font-poppins text-sm' onClick={() => setFiltroOpen(true)}>
            <p>Filtrar</p>
            <FaFilter style={{ color: "#BDBDBD", }} />
          </div>
          <div className='w-[45%] mr-2'>
            <Select options={['A a Z', 'Mais Populares', 'Menor Preço', 'Maior Preço', 'Mais bem Avaliados']} opcaoSelecionada={setEscolha} label={'Ordenar Por'} />
          </div>
        </div>
        <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
          {mostrarProdutos()}
        </div>
      </section>
    </main>
  )
}

