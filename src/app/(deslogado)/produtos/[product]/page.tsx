'use client'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
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
  const [favorito, setFavorito] = useState<boolean>(false)
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
        <section className='mt-6 md:mt-11'>
          <TituloLinha titulo='Produto' />
        </section>
        <section className='flex flex-col md:flex-row w-[90%] m-auto mt-8 md:mt-24'>
          <section className='w-full md:w-[45%] h-auto'>
            <div className='h-full md:w-[90%] w-full flex flex-col-reverse lg:flex-row justify-end'>
              <div className='lg:h-full mt-3 w-full lg:w-[30%] md:m-auto flex flex-row items-center justify-center gap-1 lg:block'>
                <button onClick={() => setNumeroImagem(numeroImagem > 0 ? numeroImagem - 1 : numeroImagem)} className='bg-branco md:hidden font-poppins border border-black w-8 h-8 rounded-full flex items-center justify-center' ><FaChevronLeft /></button>
                {produtoProcurado.imagemProduto.map((image, i) => (
                  <div onClick={() => setNumeroImagem(i)} key={i} className={`flex items-center justify-center cursor-pointer md:h-16 lg:w-[50%] lg:m-auto h-10 w-10 md:w-[40%] rounded-xl md:rounded-2xl border ${numeroImagem == i ? 'border-cinza-escuro' : 'border-cinza'} md:mt-5 lg:mb-5`}>
                    <img src={image} alt="" className='w-[60%] 2xl:w-[50%] object-cover' />
                  </div>
                ))}
                <button onClick={() => setNumeroImagem(produtoProcurado.imagemProduto.length > numeroImagem + 1 ? numeroImagem + 1 : numeroImagem)} className='bg-branco md:hidden font-poppins border border-black w-8 h-8 rounded-full flex items-center justify-center' ><FaChevronRight /></button>
              </div>
              <div className='h-44 md:h-full border border-cinza rounded-2xl w-full lg:w-[70%] flex items-center justify-center'>
                <img src={produtoProcurado.imagemProduto[numeroImagem]} alt="" className='w-[50%] md:w-full 2xl:w-[80%]' />
                <div className='flex-row md:w-[42%] lg:w-[30%] absolute justify-between flex max-sm:hidden'>
                  <button onClick={() => setNumeroImagem(numeroImagem > 0 ? numeroImagem - 1 : numeroImagem)} className='bg-branco font-poppins border border-black lg:w-14 lg:h-14 md:w-10 md:h-10 rounded-full flex items-center justify-center' ><FaChevronLeft /></button>
                  <button onClick={() => setNumeroImagem(produtoProcurado.imagemProduto.length > numeroImagem + 1 ? numeroImagem + 1 : numeroImagem)} className='bg-branco font-poppins border border-black lg:w-14 lg:h-14 md:w-10 md:h-10 rounded-full flex items-center justify-center' ><FaChevronRight /></button>
                </div>
              </div>
            </div>
          </section>
          <section className='md:w-[55%] w-full flex flex-col max-sm:mt-4'>
            <div className='flex flex-row items-center justify-between lg:w-[85%]'>
              <p className='font-poppins md:text-xl text-base font-normal text-preto'>{produtoProcurado.nomeProduto}</p>
              <div className="transition duration-100 active:scale-75 z-50" onClick={()=>setFavorito(!favorito)}>{favorito ? <FaHeart size={20} style={{ color: "#B5A6F3", }}/> : <FaRegHeart size={20} style={{ color: "#4f4f4f", }}/> }</div>
            </div>
            <div className='flex flex-col md:flex-row md:gap-1 lg:text-sm text-xs font-poppins font-normal text-preto'>
              <p>Código: {produtoProcurado.codigo} |</p>
              <p> Ver descrição completa</p>
              <p className='max-sm:hidden'>| {produtoProcurado.marca}</p>
            </div>
            <div className='md:mt-1 mt-2 flex flex-row items-center'>
              {construirEstrelas(produtoProcurado?.notaDeAvaliacao!)}
              <p className={`font-poppins ml-2 text-base ${produtoProcurado.disponivel ? 'text-verde' : 'text-error'} font-bold`}>{produtoProcurado.disponivel ? "| Disponível" : "| Indisponível"}</p>
            </div>
            <div className='w-full lg:w-[85%] mt-2'>
              <SelectTamanho options={produtoProcurado.tamanho.map((tamanho) => { return tamanho })} opcaoSelecionada={() => setTamanho} label='Selecione o Tamanho' />
            </div>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between w-full lg:w-[85%] gap-3 md:gap-0 h-20 max-sm:mt-3'>
              <div className='flex flex-row items-center gap-3'>
                <p className='font-poppins font-bold md:text-2xl text-xl text-preto'>R$ {produtoProcurado.precoNovo.toString().replace(".", ",")}</p>
                <s className='font-poppins font-bold md:text-base text-sm text-cinza'>R$ {produtoProcurado.precoAntigoDoProduto.toString().replace(".", ",")}</s>
              </div>
              <div className='max-sm:w-full'>
                <BotaoGrande background='bg-primaria' fontSize='text-xs lg:text-sm' type='button' title='Calcular Frete' />
              </div>
            </div>
            <div className='rounded-lg bg-terciaria w-full lg:w-[85%] px-6 py-4'>
              <p className='font-poppins md:text-base text-sm '>R$ {produtoProcurado.precoAssinantes.toString().replace(".", ",")} para assinantes</p>
              <div className='md:mt-1 mt-2 flex flex-col md:gap-0 gap-2'>
                <p className='font-poppins md:text-base text-sm'>*   10% OFF em todas as compras no app, site e lojas físicas</p>
                <p className='font-poppins md:text-base text-sm'>*   Sem custo ou mensalidade. Cancele ou pause quando quiser</p>
                <p className='font-poppins md:text-base text-sm'>*   Assine os produtos na sacola e garanta os benefícios</p>
              </div>
            </div>
            <div className='flex flex-row items-start gap-4 w-full lg:w-[85%] mt-4'>
              <div className='w-[30%]'>
                <QuantidadeProduto />
                <p className='font-poppins text-cinza-escuro text-center mt-1 lg:text-base md:text-xs text-[10px]'>Em estoque: {produtoProcurado.estoque}</p>
              </div>
              <div className='w-[15%]'>
                <BotaoGrande title={'../assets/sacola.svg'} background={'bg-primaria'} type={'button'} />
              </div>
              <div className='h-8 flex items-center max-md:hidden'>
                <p className='font-poppins'>ou</p>
              </div>
              <div className='w-[50%]'>
                <BotaoGrande title='Comprar Agora' type='button' background='bg-secundaria' />
              </div>
            </div>
          </section>
        </section>
        <section className='md:mt-20 mt-8'>
          <div className='flex flex-col gap-10'>
            <TituloLinha titulo='Você também pode gostar...' />
            <CarrosselProduto slides={carrosselProdutos} />
          </div>
        </section>
        <section className='md:mt-20 mt-8'>
          <div>
            <TituloLinha titulo='Descrição' />
          </div>
          <div className='mt-10 w-[90%] m-auto md:text-base text-sm'>
            {
              produtoProcurado.descricao.map((linha, i) => (
                <p className='font-poppins mb-0.5' key={i}>{linha}</p>
              ))
            }
          </div>
        </section>
        <section className='md:mt-20 mt-8'>
          <div>
            <TituloLinha titulo='Especificações' />
          </div>
          <div className='w-[90%] m-auto mt-8'>
            {
              produtoProcurado.especificacoes.map((item, i) => (
                <div key={i} className={`flex flex-row w-full h-10 items-center max-sm:justify-between ${i % 2 == 0 ? 'bg-terciaria' : ''} rounded-lg`}>
                  <div className='md:w-[50%] font-poppins md:text-lg text-sm ml-2'>{item.topico}</div>
                  <div className='md:w-[50%] font-poppins md:text-base text-xs max-sm:flex max-sm:justify-end max-sm:text-end'>{item.resposta}</div>
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
                    fotoUsuario={(buscarUsuario(avaliacao.id)! as Usuario).foto} avaliacaoUsuario={avaliacao.descricao}
                    estrelas={construirEstrelas(avaliacao.nota)} notaAvaliacao={avaliacao.nota} />
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
