'use client'
import CardProduto from '@/components/CardProduto/CardProduto'
import produtos from '@/banco/produtos.json'
import React, { useState } from 'react'
import {ProdutoCompleto } from '@/types/produto'
import { FaFilter } from "react-icons/fa";
import FiltroGrande from '@/components/Filtro/FiltroGrande'

export default function Produtos() {
  const [produtosMostrados, setProdutosMostrados] = useState<ProdutoCompleto[]>(produtos)
  return (
    <main>
      <FiltroGrande produtos={produtosMostrados}/>
      <div className='flex flex-row items-center justify-center border w-[25%] p-1 rounded-lg border-cinza mt-6 ml-2 font-poppins text-sm'>
        <p>Filtrar</p>
        <FaFilter style={{ color: "#BDBDBD", }}/>
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
        {produtosMostrados.map((produto, index) => (
          <CardProduto key={index} id={produto.id} nomeProduto={produto.nomeProduto} precoAntigoDoProduto={produto.precoAntigoDoProduto}
          precoNovo={produto.precoNovo} notaDeAvaliacao={produto.notaDeAvaliacao} imagemProduto={produto.imagemProduto} desconto={produto.desconto} />
        ))}
      </div>
    </main>
  )
}

