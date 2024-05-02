'use client'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { buscarProduto, buscarTodos } from '@/server/produtos/action'
import { ProdutoCompleto } from '@/types/produto'
import { useEffect, useState } from 'react'
import SelectTamanho from '@/components/SelectTamanho/SelectTamanho';
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande';
import QuantidadeProduto from '@/components/QuantidadeProduto/QuantidadeProduto';
import CarrosselProduto from '@/components/CarrosselProduto/Carrossel'
import CardProduto from '@/components/CardProduto/CardProduto';

interface PropsProduct {
  searchParams: { id: number }
}

const carrosselProdutos = buscarTodos().map((produto)=>{return <CardProduto id={produto.id} nomeProduto={produto.nomeProduto} precoAntigoDoProduto={produto.precoAntigoDoProduto}
precoNovo={produto.precoNovo} notaDeAvaliacao={produto.notaDeAvaliacao} imagemProduto={`.${produto.imagemProduto[0]}`} desconto={produto.desconto}/>})

export default function ProdutoDetails({ searchParams }: PropsProduct) {
  const [produtoProcurado, setProdutoProcurado] = useState<ProdutoCompleto>()
  const [tamanho, setTamanho] = useState<string>();

  const construirEstrelas = () => {
    const arrayFull = new Array(Math.round(produtoProcurado?.notaDeAvaliacao!)).fill(null)
    const arrayEmpty = new Array(5 - arrayFull.length).fill(null)
    return (
      <div className='flex flex-row'>
        {arrayFull.map((avaliacao, i) => (
          <div key={i}>
            <AiFillStar style={{ color: "#FFD601", }} size={25} />
          </div>
        ))}
        {arrayEmpty.map((a, i) => (
          <div key={i}>
            <AiOutlineStar style={{ color: "#FFD601", }} size={25} />
          </div>
        ))}
      </div>
    )
  }
  useEffect(() => {
    setProdutoProcurado(buscarProduto(searchParams.id))
  }, [])

  if (!produtoProcurado) return (
    <div className='font-poppins'>Carregando...</div>
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
            <div className='mt-1 flex flex-row'>
              {construirEstrelas()}
              <p className={`font-poppins ml-2 ${produtoProcurado.disponivel ? 'text-verde': 'text-error'} font-bold`}>{produtoProcurado.disponivel ? "| Disponível" : "| Indisponível"}</p>
            </div>
            <div className='w-[85%] mt-2'>
              <SelectTamanho options={produtoProcurado.tamanho.map((tamanho)=>{return tamanho})} opcaoSelecionada={()=>setTamanho} label='Selecione o Tamanho'/>
            </div>
            <div className='flex flex-row items-center justify-between w-[85%] h-20'>
              <div className='flex flex-row items-end gap-3'>
                <p className='font-poppins font-bold text-2xl text-preto'>R$ {produtoProcurado.precoNovo.toString().replace(".", ",")}</p>
                <s className='font-poppins font-bold text-base text-cinza'>R$ {produtoProcurado.precoAntigoDoProduto.toString().replace(".", ",")}</s>
              </div>
              <div>
                <BotaoGrande background='bg-primaria' fontSize='text-xs lg:text-sm' type='button' title='Calcular Frete'/>
              </div>
            </div>
            <div className='rounded-lg bg-terciaria w-[85%] px-6 py-4'>
                <p className='font-poppins '>R$ {produtoProcurado.precoAssinantes.toString().replace(".", ",")} para assinantes</p>
                <div className='mt-1'>
                  <p className='font-poppins'>*   10% OFF em todas as compras no app, site e lojas físicas</p>
                  <p className='font-poppins'>*   Sem custo ou mensalidade. Cancele ou pause quando quiser</p>
                  <p className='font-poppins'>*   Assine os produtos na sacola e garanta os benefícios</p>
                </div>
            </div>
            <div className='flex flex-row items-start gap-4 w-[85%] mt-4'>
                <div className='w-[30%]'>
                  <QuantidadeProduto />
                  <p className='font-poppins text-cinza-escuro text-center mt-1'>Em estoque: {produtoProcurado.estoque}</p>
                </div>
                <div className='w-[15%]'>
                  <BotaoGrande title='../assets/sacola.svg' background={'bg-primaria'} type={'button'} fontSize={'w-[40%] m-auto'}/>
                </div>
                <div className='h-8 flex items-center'>
                  <p className='font-poppins'>ou</p>
                </div>
                <div className='w-[50%]'>
                  <BotaoGrande title='Comprar Agora' type='button' background='bg-secundaria' />
                </div>
            </div>
          </section>
        </section>
        <section className='mt-20'>
          <div>
            <TituloLinha titulo='Você também pode gostar...' />
            <CarrosselProduto slides={[carrosselProdutos]}/>
          </div>
        </section>
      </main>
    )
  }

}
