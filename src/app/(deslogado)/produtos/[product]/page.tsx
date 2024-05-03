'use client'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { buscarProduto, buscarTodos } from '@/server/produtos/action'
import { ProdutoCompleto, Especificacao, AvaliacaoType } from '@/types/produto'
import { useEffect, useState } from 'react'
import SelectTamanho from '@/components/SelectTamanho/SelectTamanho';
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande';
import QuantidadeProduto from '@/components/QuantidadeProduto/QuantidadeProduto';
import CarrosselProduto from '@/components/CarrosselProduto/Carrossel'
import CardProduto from '@/components/CardProduto/CardProduto';
import { buscarUsuario } from '@/server/usuario/action';
import { Usuario } from '@/types/usuarios';
import Avaliacao from '@/components/Avaliacao/Avaliacao';
import EscreverAvaliacao from '@/components/EscreverAvaliacao/EscreverAvaliacao';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

interface PropsProduct {
  searchParams: { id: number }
}

const carrosselProdutos = buscarTodos().map((produto, i) => (<CardProduto key={i} id={produto.id} nomeProduto={produto.nomeProduto} precoAntigoDoProduto={produto.precoAntigoDoProduto}
  precoNovo={produto.precoNovo} notaDeAvaliacao={produto.notaDeAvaliacao} imagemProduto={produto.imagemProduto} desconto={produto.desconto} />))

export default function ProdutoDetails({ searchParams }: PropsProduct) {
  const [produtoProcurado, setProdutoProcurado] = useState<ProdutoCompleto>()
  const [numeroImagem, setNumeroImagem] = useState<number>(0)
  const [tamanho, setTamanho] = useState<string>();

  const construirEstrelas = (numEstrelas: number) => {
    const arrayFull = new Array(Math.round(numEstrelas)).fill(null)
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
          <section className='w-[45%] h-auto'>
            <div className='h-full w-[90%] flex flex-row justify-end'>
              <div className='h-full w-[30%] m-auto'>
                {produtoProcurado.imagemProduto.map((image, i) => (
                  <div onClick={() => setNumeroImagem(i)} key={i} className='flex items-center justify-center cursor-pointer h-16 w-[50%] rounded-2xl m-auto border border-cinza-escuro mt-5'>
                    <img src={image} alt="" className='w-[60%] object-cover' />
                  </div>
                ))}
              </div>
              <div className='h-full border border-preto rounded-2xl w-[70%] flex items-center justify-center'>
                <button onClick={()=>setNumeroImagem(numeroImagem > 0 ? numeroImagem - 1 : numeroImagem)} className='mr-[21rem] absolute bg-branco font-poppins border border-black w-14 h-14 rounded-full flex items-center justify-center' ><FaChevronLeft /></button>
                <img src={produtoProcurado.imagemProduto[numeroImagem]} alt="" className='w-full' />
                <button onClick={()=>setNumeroImagem(produtoProcurado.imagemProduto.length > numeroImagem + 1 ? numeroImagem + 1 : numeroImagem)} className='ml-[21rem] absolute bg-branco font-poppins border border-black w-14 h-14 rounded-full flex items-center justify-center' ><FaChevronRight /></button>
              </div>
            </div>
          </section>
          <section className='w-[55%] flex flex-col'>
            <p className='font-poppins text-xl font-normal text-preto'>{produtoProcurado.nomeProduto}</p>
            <div className='flex flex-row gap-1 text-sm font-poppins font-normal text-preto'>
              <p>Código: {produtoProcurado.codigo} |</p>
              <p> Ver descrição completa</p>
              <p>| {produtoProcurado.marca}</p>
            </div>
            <div className='mt-1 flex flex-row'>
              {construirEstrelas(produtoProcurado?.notaDeAvaliacao!)}
              <p className={`font-poppins ml-2 ${produtoProcurado.disponivel ? 'text-verde' : 'text-error'} font-bold`}>{produtoProcurado.disponivel ? "| Disponível" : "| Indisponível"}</p>
            </div>
            <div className='w-[85%] mt-2'>
              <SelectTamanho options={produtoProcurado.tamanho.map((tamanho) => { return tamanho })} opcaoSelecionada={() => setTamanho} label='Selecione o Tamanho' />
            </div>
            <div className='flex flex-row items-center justify-between w-[85%] h-20'>
              <div className='flex flex-row items-end gap-3'>
                <p className='font-poppins font-bold text-2xl text-preto'>R$ {produtoProcurado.precoNovo.toString().replace(".", ",")}</p>
                <s className='font-poppins font-bold text-base text-cinza'>R$ {produtoProcurado.precoAntigoDoProduto.toString().replace(".", ",")}</s>
              </div>
              <div>
                <BotaoGrande background='bg-primaria' fontSize='text-xs lg:text-sm' type='button' title='Calcular Frete' />
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
                <BotaoGrande title='../assets/sacola.svg' background={'bg-primaria'} type={'button'} fontSize={'w-[40%] m-auto'} />
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
            <CarrosselProduto slides={carrosselProdutos} />
          </div>
        </section>
        <section className='mt-20'>
          <div>
            <TituloLinha titulo='Descrição' />
          </div>
          <div className='mt-10 w-[90%] m-auto'>
            {
              produtoProcurado.descricao.map((linha, i) => (
                <p className='font-poppins mb-0.5' key={i}>{linha}</p>
              ))
            }
          </div>
        </section>
        <section className='mt-20'>
          <div>
            <TituloLinha titulo='Especificações' />
          </div>
          <div className='w-[90%] m-auto mt-8'>
            {
              produtoProcurado.especificacoes.map((item, i) => (
                <div key={i} className={`flex flex-row w-full h-10 items-center ${i % 2 == 0 ? 'bg-terciaria' : ''} rounded-lg`}>
                  <div className='w-[50%] font-poppins text-lg ml-2'>{(item as Especificacao).topico}</div>
                  <div className='w-[50%] font-poppins text-base'>{(item as Especificacao).resposta}</div>
                </div>
              ))
            }
          </div>
        </section>
        <section className='mt-20'>
          <div>
            <TituloLinha titulo='Avaliações' />
          </div>
          <div className='mt-14'>
            {
              produtoProcurado.avaliacoes.map((avaliacao, i) => (
                <div key={i}>
                  <Avaliacao nomeUsuario={(buscarUsuario((avaliacao as AvaliacaoType).id)! as Usuario).nomeCompleto}
                    fotoUsuario={(buscarUsuario((avaliacao as AvaliacaoType).id)! as Usuario).foto} avaliacaoUsuario={(avaliacao as AvaliacaoType).descricao}
                    estrelas={construirEstrelas((avaliacao as AvaliacaoType).nota)} />
                </div>
              ))
            }
          </div>
          <div className='mt-14 mb-20'>
            <EscreverAvaliacao nomeUsuario={"Kristian Erdmann"} fotoUsuario="../assets/gatoFotoUsuario.png" />
          </div>
        </section>
      </main>
    )
  }

}
