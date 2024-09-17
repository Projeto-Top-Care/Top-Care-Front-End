'use client'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { buscarProduto, buscarTodos } from '@/server/produtos/action'
import { ProdutoCompleto, AvaliacaoType, VarianteProps } from '@/types/produto'
import { useEffect, useState } from 'react'
import CarrosselProduto from '@/components/CarrosselProduto/Carrossel'
import CardProduto from '@/components/CardProduto/CardProduto';
import { buscarUsuario } from '@/server/usuario/action';
import { QuantidadeProduto, Usuario } from '@/types/usuarios';
import Avaliacao from '@/components/Avaliacao/Avaliacao';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useCarrinho } from '@/context/CarrinhoContext';
import { useConfirmacao } from '@/context/confirmacaoContext';
import Confirmacao from '@/components/Pop-up/Confirmacao/Confirmacao';
import Loading from '../../loading';
import InputQuantidadeProduto from '@/components/QuantidadeProduto/QuantidadeProduto';
import BotaoGrande from '@/components/Botoes/BotaoGrande/BotaoGrande';
import InputText from '@/components/InputText/InputText';
import InputQuantidade from '../../carrinho/InputQuantidade';
import InputEstatico from '@/components/InputEstatico/InputEstatico';
import CalcularFrete from '@/components/CalcularFrete/calcularFrete';
import {construirEstrelas} from "@/utils/estrelas"
import ButtonVariante from './component/ButtonVariante';
import { adicionarProduto } from '@/server/carrinho/action';
import { useUserID } from '@/context/UserIDContext';

interface PropsProduct {
  searchParams: { id: number }
}

export default function ProdutoDetails({ searchParams }: PropsProduct) {

  const { push } = useRouter();
  const { addConfirmacao } = useConfirmacao()
  const {getUserID} = useUserID();

  const [produto, setProduto] = useState<ProdutoCompleto>()
  const [varianteSelecionada, setVarianteSelecionada] = useState<VarianteProps>()
  const [usuario, setUsuario] = useState<Usuario>()


  const [numeroImagem, setNumeroImagem] = useState<number>(0)
  const [favorito, setFavorito] = useState<boolean>(false)
  const [quantidade, setQuantidade] = useState<number>(1)

  const [frete, setFrete] = useState<number | string>(0)
  const [erro, setErro] = useState<boolean>(false)
  const [inexitente, setInexistente] = useState<boolean>(false)


  useEffect(() => {
    const func = async () => {
      const id = getUserID()
      if(id){
        const user = await buscarUsuario(parseInt(id))
        setUsuario(user)
      }

      const produto = await buscarProduto(searchParams.id)
      setProduto(produto)
      setVarianteSelecionada(produto.variantes[0])
    }
    func()
  }, [])

  const adicionarCarrinho = async () => {
    if(produto && varianteSelecionada){
      const newProduto: QuantidadeProduto = {
        produtoId: produto.id,
        varianteProdutoId: varianteSelecionada.id,
        quantidade: quantidade,
      }
      // console.log(newProduto)
      usuario && await adicionarProduto(usuario.id, newProduto)
      addConfirmacao("Produto adiconado na sacola")
    }
  }

  if (!produto) return (
    <Loading />
  )
  else {
    return (
      <main className='text-preto font-poppins'>
        <Confirmacao />
        <section className=''>
          <TituloLinha voltar={true} titulo={produto.nome} />
        </section>

        <section className='flex flex-col md:flex-row w-[90%] m-auto mt-8 md:mt-[2.5rem] justify-between'>

          <section className='w-full sm:ml-10 md:w-[30%] h-auto'>
            <div className='h-full w-full flex flex-col gap-2 lg:gap-4 lg:justify-center'>

              <div className='h-52 md:h-fit lg:h-full border border-cinza rounded-2xl w-full flex items-center justify-center'>
                <img src={produto.imagens[numeroImagem].caminho} alt="" className='h-48 md:h-64 py-4 lg:h-72 xl:h-96' />
                <div className='flex-row md:w-[33%] absolute justify-between flex max-sm:hidden'>
                  <button onClick={() => setNumeroImagem(numeroImagem > 0 ? numeroImagem - 1 : numeroImagem)} className='hover:shadow-md hover:translate-x-[-0.5rem] animation duration-200 bg-branco  border border-preto lg:w-14 lg:h-14 md:w-10 md:h-10 rounded-full flex items-center justify-center' ><FaChevronLeft /></button>
                  <button onClick={() => setNumeroImagem(produto.imagens.length > numeroImagem + 1 ? numeroImagem + 1 : numeroImagem)} className='hover:shadow-md hover:translate-x-[0.5rem] animation duration-200 bg-branco  border border-preto lg:w-14 lg:h-14 md:w-10 md:h-10 rounded-full flex items-center justify-center' ><FaChevronRight /></button>
                </div>
              </div>

              <div className='lg:h-full w-full lg:w-1/3 lg:m-auto flex flex-row lg:items-center gap-1 lg:block'>
                <button onClick={() => setNumeroImagem(numeroImagem > 0 ? numeroImagem - 1 : numeroImagem)} className='hover:shadow-md hover:translate-x-[-0.5rem] animation duration-200 bg-branco md:hidden  border border-preto w-8 h-8 rounded-full flex items-center justify-center' ><FaChevronLeft /></button>

                <div className='flex flex-row w-full gap-2'>
                  {produto.imagens.map((image, i) => (
                    <div onClick={() => setNumeroImagem(i)} key={i} className={`flex items-center justify-center cursor-pointer h-10 w-10 md:h-16 md:w-16 duration-100 lg:m-auto rounded-xl md:rounded-2xl border ${numeroImagem == i ? 'border-cinza-escuro scale-105' : 'border-cinza opacity-80'} md:mt-5 lg:mb-5`}>
                      <img src={image.caminho} alt="" className='w-3/5 md:w-1/2 lg:w-[50%] object-cover' />
                    </div>
                  ))}
                </div>

                <button onClick={() => setNumeroImagem(produto.imagens.length > numeroImagem + 1 ? numeroImagem + 1 : numeroImagem)} className='hover:shadow-md hover:translate-x-[-0.5rem] animation duration-200 bg-branco md:hidden  border border-preto w-8 h-8 rounded-full flex items-center justify-center' ><FaChevronRight /></button>
              </div>

            </div>
          </section>

          <section className='md:w-3/5 w-full flex flex-col max-sm:mt-4'>
            <div className='flex flex-row items-center justify-between'>
              <p className=' md:text-xl text-base font-normal text-preto'>{produto.nome}</p>
              <div className="transition duration-100 active:scale-75 z-50" onClick={() => setFavorito(!favorito)}>{favorito ? <FaHeart size={20} style={{ color: "#B5A6F3", }} /> : <FaRegHeart size={20} style={{ color: "#4f4f4f", }} />}</div>
            </div>
            <div className='flex flex-col md:flex-row md:gap-1 lg:text-sm text-xs  font-normal text-cinza-escuro'>
              <p>Código: {produto.codigo} |</p>
            </div>
            <div className='md:mt-1 mt-2 flex flex-row items-center'>
              {construirEstrelas(produto.notaAvaliacao)}
              <p className={` ml-2 text-base ${produto.disponivel ? 'text-verde' : 'text-error'} font-bold`}>{produto.disponivel ? "| Disponível" : "| Indisponível"}</p>
            </div>

            <div className='flex lg:flex-row flex-col gap-6'>
              <div className='flex flex-col md:justify-between w-full gap-4 max-sm:mt-3 mt-6'>

                <div className='flex flex-row items-center gap-3'>
                  <p className='font-bold md:text-2xl text-xl text-preto'>R$ {varianteSelecionada?.preco.toFixed(2).replace(".", ",")}</p>
                  <p className='font-medium line-through text-sm text-cinza'>R$ {varianteSelecionada?.preco.toFixed(2).replace(".", ",")}</p>
                </div>

                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-2'>
                    <p className='text-cinza-escuro font-medium'>Variações</p>
                    <p className='text-cinza font-medium'>Cor - Tamanho - Peso - Unidades</p>
                    <div className='flex flex-col gap-3'>
                      
                      {
                        produto.variantes.map((variante, i) => (
                          <div key={i}>
                            <ButtonVariante
                              variante={variante}
                              setVariante={setVarianteSelecionada}
                              varianteSelecionada={varianteSelecionada}
                            />
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <p className='text-cinza-escuro font-medium'>Quantidade</p>
                  <div className='w-1/3'>
                    <InputQuantidadeProduto propsQuantidade={setQuantidade} estoqueDisponivel={varianteSelecionada?.estoque || 0} />
                  </div>
                </div>
              </div>

              <div className='flex flex-col w-full  gap-2'>
                <div className='bg-terciaria flex flex-col gap-4 p-4 pb-8 rounded-lg'>

                  <CalcularFrete setErro={setErro} setInexistente={setInexistente} setFrete={setFrete} />

                  <div className={`${frete ? `` : `hidden`} lg:text-base text-sm flex flex-row justify-between font-medium`}>
                    <p>Frete normal</p>
                    <p>R$13,99</p>
                  </div>
                  <div className={`${frete ? `` : `hidden`} lg:text-base text-sm flex flex-row justify-between font-medium`}>
                    <p>SEDEX</p>
                    <p>R$23,99</p>
                  </div>

                </div>
                <div onClick={() => adicionarCarrinho()}>
                  <BotaoGrande size='h-9' title='Adicionar à sacola' background='primaria' type='button' />
                </div>
                <div>
                  <BotaoGrande size='h-9' title='Comprar agora' background='secundaria' type='button' />
                </div>
              </div>
            </div>

          </section>
        </section>
        <section className='md:mt-20 mt-8'>
          <div className='flex flex-col'>
            <TituloLinha voltar={false} titulo='Você também pode gostar...' />
            {/* <CarrosselProduto slides={carrosselProdutos} /> */}
          </div>
        </section>
        <section className='md:mt-20 mt-8'>
          <div>
            <TituloLinha voltar={false} titulo='Descrição' />
          </div>
          <div className='mt-10 w-[90%] m-auto md:text-base text-sm'>
            <p>{produto.descricao}</p>
          </div>
        </section>
        <section className='md:mt-20 mt-8'>
          <div>
            <TituloLinha voltar={false} titulo='Especificações' />
          </div>
          <div className='w-[90%] m-auto mt-8'>
            {
              produto.especificacoes.map((item, i) => (
                <div key={i} className={`flex flex-row w-full h-10 items-center max-sm:justify-between ${i % 2 == 0 ? 'bg-terciaria' : ''} rounded-lg`}>
                  <div className='md:w-[50%]  md:text-lg text-sm ml-2'>{item.nome}</div>
                  <div className='md:w-[50%]  md:text-base text-xs max-sm:flex max-sm:justify-end max-sm:text-end'>{item.conteudo}</div>
                </div>
              ))
            }
          </div>
        </section>
        <section className='mt-20'>
          <div>
            <TituloLinha voltar={false} titulo='Avaliações' />
          </div>
          <div className='mb-20'>
            {
              produto.avaliacoes.map((avaliacao, i) => (
                <div key={i} className="flex flex-col gap-4 sm:gap-14 md:mb-8 mb-4">
                  <Avaliacao nomeUsuario={avaliacao.usuario.nome}
                    fotoUsuario={avaliacao.usuario.foto} avaliacaoUsuario={avaliacao.descricao}
                    estrelas={construirEstrelas(avaliacao.nota)} notaAvaliacao={avaliacao.nota} />
                </div>
              ))
            }
          </div>
          {/* <div className='mt-4 sm:mt-14 mb-20'>
            <EscreverAvaliacao nomeUsuario={"Kristian Erdmann"} fotoUsuario="../assets/gatoFotoUsuario.png" />
          </div> */}
        </section>
      </main>
    )
  }

}