import CardProduto from '@/components/CardProduto/CardProduto'
import produtos from '@/banco/produtos.json'
import React from 'react'

export default function Produtos() {
  return (
    <div className='flex flex-col gap-5'>
      {produtos.map((produto, index) => (
        <CardProduto key={index} id={produto.id} nomeProduto={produto.nomeProduto} precoAntigoDoProduto={produto.precoAntigoDoProduto}
        precoNovo={produto.precoNovo} notaDeAvaliacao={produto.notaDeAvaliacao} imagemProduto={produto.imagemProduto} desconto={produto.desconto} />
      ))}
    </div>
  )
}

