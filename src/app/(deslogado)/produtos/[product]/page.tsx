'use client'
import { buscarProduto } from '@/server/produtos/action'
import {Produto} from '@/types/produto'
import { useEffect, useState } from 'react'

interface PropsProduct {
  searchParams: { id: number }
}

export default function ProdutoDetails({ searchParams }: PropsProduct) {
  const [produtoProcurado, setProdutoProcurado] = useState<Produto>()
  useEffect(() => {
    setProdutoProcurado(buscarProduto(searchParams.id));
  }, [])

  if(!produtoProcurado) return(
    <div>Carregando...</div>
  )
  else{
    return (
      <div className='flex flex-col gap-2'>
        <p>{produtoProcurado.id}</p>
        <p>{produtoProcurado.nomeProduto}</p>
        <p>{produtoProcurado.precoAntigoDoProduto}</p>
        <p>{produtoProcurado.precoNovo}</p>
        <p>{produtoProcurado.notaDeAvaliacao}</p>
      </div>
    )
  }

}
