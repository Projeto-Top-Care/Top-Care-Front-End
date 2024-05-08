'use client'
import CardProduto from '@/components/CardProduto/CardProduto'
import produtos from '@/banco/produtos.json'
import React, { useEffect, useState } from 'react'
import { ProdutoCompleto } from '@/types/produto'
import { FaFilter } from "react-icons/fa";
import FiltroGrande from '@/components/Filtro/FiltroGrande'
import OrdenarPor from '@/components/Filtro/OrdenarPor'

export default function Produtos() {
  const [produtosMostrados, setProdutosMostrados] = useState<ProdutoCompleto[]>(produtos)
  const [filtroOpen, setFiltroOpen] = useState<boolean>(false)
  const [ordenarOpen, setOrdenarOpen] = useState<boolean>(false)
  const [animation, setAnimation] = useState<boolean>(false)
  const [ordem, setOrdem] = useState<number>(0);

  useEffect(() => {
    if (ordem == 0){
      setProdutosMostrados(produtosMostrados.sort())
    }else if(ordem == 1){
      setProdutosMostrados(produtosMostrados.sort())
    }
  }, [ordem])

  useEffect(() => {
    if (!animation) {
      setTimeout(() => {
        setFiltroOpen(false)
        setAnimation(true)
      }, 290)
    }
  }, [animation])

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
            <div className='flex flex-row gap-2 items-center justify-center border w-full p-1 rounded-lg border-cinza font-poppins text-sm' onClick={() => setOrdenarOpen(!ordenarOpen)}>
              <p>Ordernar por</p>
              <FaFilter style={{ color: "#BDBDBD", }} />
            </div>
            {
              ordenarOpen && (
                <div className='w-[45%] absolute self-end mr-2 mt-1'>
                  <OrdenarPor ordem={setOrdem} />
                </div>
              )
            }
          </div>
        </div>
        <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
          {produtosMostrados.map((produto, index) => (
            <CardProduto key={index} id={produto.id} nomeProduto={produto.nomeProduto} precoAntigoDoProduto={produto.precoAntigoDoProduto}
              precoNovo={produto.precoNovo} notaDeAvaliacao={produto.notaDeAvaliacao} imagemProduto={produto.imagemProduto} desconto={produto.desconto} />
          ))}
        </div>
      </section>
    </main>
  )
}

