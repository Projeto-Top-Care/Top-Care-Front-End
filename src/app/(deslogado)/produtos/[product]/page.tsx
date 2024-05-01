'use client'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { buscarProduto } from '@/server/produtos/action'
import { ProdutoCompleto } from '@/types/produto'
import { useEffect, useState } from 'react'
import { array } from 'zod';

interface PropsProduct {
  searchParams: { id: number }
}

export default function ProdutoDetails({ searchParams }: PropsProduct) {
  const [produtoProcurado, setProdutoProcurado] = useState<ProdutoCompleto>()
   
  const construirEstrelas = () =>{
    // const notaAvaliacao = new Array(produtoProcurado?.notaDeAvaliacao)
    // const notaRestante = new Array(5 - notaAvaliacao.length)
    const arrayEmpty = new Array(2)
    return(
      <div>
        {arrayEmpty.map((avaliacao, i)=>(
          <div key={i}>
            <AiFillStar style={{ color: "#FFD601", }} size={25} />
          </div>
        ))}
        {
          arrayEmpty.map((avaliacao, i)=>(
            <div>
              <AiOutlineStar style={{ color: "#FFD601", }} size={25} />
            </div>
          ))
        }
      </div>
    )
  }
  useEffect(() => {
    setProdutoProcurado(buscarProduto(searchParams.id))
  }, [])

  if (!produtoProcurado) return (
    <div>Carregando...</div>
  )
  else {
    return (
      <main>
        <section className='mt-11'>
          <TituloLinha titulo='Produto' />
        </section>
        <section className='flex flex-row w-[90%] m-auto mt-24'>
          <section className='w-[45%]'>

          </section>
          <section className='w-[55%] flex flex-col'>
            <p className='font-poppins text-xl font-normal text-preto'>{produtoProcurado.nomeProduto}</p>
            <div className='flex flex-row gap-1 text-sm font-poppins font-normal text-preto'>
              <p>Código: {produtoProcurado.codigo} |</p>
              <p> Ver descrição completa</p>
              <p>| {produtoProcurado.marca}</p>
            </div>
            <div>
              {construirEstrelas()}
            </div>
          </section>
        </section>
      </main>
    )
  }

}
