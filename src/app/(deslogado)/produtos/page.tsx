import CardProduto from '@/components/CardProduto/CardProduto'
import produtos from '@/banco/produtos.json'
import React from 'react'

export default function Produtos() {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
      {produtos.map((produto, index) => (
        <CardProduto key={index} id={produto.id} nomeProduto={produto.nomeProduto} precoAntigoDoProduto={produto.precoAntigoDoProduto}
        precoNovo={produto.precoNovo} notaDeAvaliacao={produto.notaDeAvaliacao} imagemProduto={produto.imagemProduto[0]} desconto={produto.desconto} />
      ))}
    </div>
  )
}

