  'use client'
  import CardProduto from '@/components/CardProduto/CardProduto'
  import produtos from '@/banco/produtos.json'
  import React, { useEffect, useState } from 'react'
  import { FaFilter } from "react-icons/fa";
  import FiltroGrande from '@/components/Filtro/FiltroGrande'
  import { ProdutoCompleto } from '@/types/produto'
  import Select from '@/components/Select/Select';

  interface InterfaceProdutos {
    searchParams?: { q: string }
  }

  export default function Produtos({ searchParams }: InterfaceProdutos) {
    const query = searchParams?.q;
    const [produtosMostrados, setProdutosMostrados] = useState<ProdutoCompleto[]>(produtos)
    const [produtosFiltrados, setProdutosFiltrados] = useState<ProdutoCompleto[]>(produtos)
    const [filtroOpen, setFiltroOpen] = useState<boolean>(false)
    const [animation, setAnimation] = useState<boolean>(false)
    const [escolha, setEscolha] = useState<string>('');

    const filtrarPorQuery = () =>{
      if(query){
        const produtosFiltrados1 = [...produtos].filter((produto)=>{
          return produto.nomeProduto
          .toLowerCase()
            .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, "")
                .includes(
                        query
                          .toLowerCase()
                            .normalize('NFD')
                              .replace(/[\u0300-\u036f]/g, "")
                                )
        })
        setProdutosMostrados(produtosFiltrados1)
        setProdutosFiltrados(produtosFiltrados1)
      }
    }
    useEffect(()=>{
      filtrarPorQuery()
    },[query])

    useEffect(() => {
      if (escolha == 'A a Z') {
        const teste = [...produtosMostrados].sort(function odenar(a, b) {
          return (a.nomeProduto > b.nomeProduto ? 1 : -1)
        })
        setProdutosMostrados(teste);
      } else if (escolha == "Mais Populares") {
        const teste = [...produtosMostrados].sort(function ordenarPopulares(a, b) {
          return b.quantidadeVendas - a.quantidadeVendas
        })
        setProdutosMostrados(teste);
      } else if (escolha == 'Menor Preço') {
        setProdutosMostrados([...produtosMostrados].sort(function ordenar(a, b) {
          return a.precoNovo - b.precoNovo
        }))
      } else if (escolha == "Maior Preço") {
        setProdutosMostrados([...produtosMostrados].sort(function ordenar(a, b) {
          return b.precoNovo - a.precoNovo
        }))
      } else if (escolha == "Mais bem Avaliados") {
        setProdutosMostrados([...produtosMostrados].sort(function ordenar(a, b) {
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
      <main className='w-full'>
        <section className='flex items-start'>
          {
            filtroOpen && (
              <div className={`absolute ${animation ? 'animate-slide-left' : 'animate-slide-right'} z-50`}>
                <FiltroGrande produtos={query ? produtosFiltrados : produtos} close={setAnimation} setNovosProdutos={setProdutosMostrados}/>
              </div>
            )
          }
        </section>
        <div className='md:flex md:flex-row mt-5 md:mt-10 md:w-[90%] md:m-auto'>
          <div className='hidden md:!flex w-[25%]'>
            <FiltroGrande produtos={query ? produtosFiltrados : produtos} setNovosProdutos={setProdutosMostrados}/>
          </div>
          <section className='w-full md:w-[75%]'>
            <div className='w-full flex items-center flex-col-reverse md:flex-row justify-between'>
              <p className='font-poppins text-lg font-bold mt-5 md:mt-0 md:text-2xl'>{query ? `Resultados para "${query}"` : "Produtos"}</p>
              <div className='w-full md:w-[25%] flex justify-between'>
                <div className='flex flex-row gap-2 items-center justify-center border w-[25%] p-1 rounded-lg border-cinza ml-2 font-poppins text-sm md:hidden' onClick={() => setFiltroOpen(true)}>
                  <p>Filtrar</p>
                  <FaFilter style={{ color: "#BDBDBD", }} />
                </div>
                <div className='w-[50%] md:w-full mr-2 md:mr-0'>
                  <Select options={['A a Z', 'Mais Populares', 'Menor Preço', 'Maior Preço', 'Mais bem Avaliados']} opcaoSelecionada={setEscolha} label={'Ordenar Por'} />
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center mt-5 md:mt-10'>
              {mostrarProdutos()}
            </div>
          </section>
        </div>
      </main>
    )
  }

