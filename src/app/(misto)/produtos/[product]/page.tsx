'use client'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { buscarProduto, buscarTodos } from '@/server/produtos/action'
import { ProdutoCompleto, AvaliacaoType } from '@/types/produto'
import { useEffect, useState } from 'react'
import CarrosselProduto from '@/components/CarrosselProduto/Carrossel'
import CardProduto from '@/components/CardProduto/CardProduto';
import { buscarUsuario } from '@/server/usuario/action';
import { QntProduto, Usuario } from '@/types/usuarios';
import Avaliacao from '@/components/Avaliacao/Avaliacao';
import EscreverAvaliacao from '@/components/EscreverAvaliacao/EscreverAvaliacao';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useCarrinho } from '@/context/CarrinhoContext';
import { useConfirmacao } from '@/context/confirmacaoContext';
import Confirmacao from '@/components/Pop-up/Confirmacao/Confirmacao';
import Loading from '../../loading';
import QuantidadeProduto from '@/components/QuantidadeProduto/QuantidadeProduto';
import BotaoGrande from '@/components/Botoes/BotaoGrande/BotaoGrande';
import InputText from '@/components/InputText/InputText';

interface PropsProduct {
  searchParams: { id: number }
}

const carrosselProdutos = buscarTodos().map((produto, i) => (<CardProduto key={i} id={produto.id} nomeProduto={produto.nomeProduto} precoAntigoDoProduto={produto.precoAntigoDoProduto}
  precoNovo={produto.precoNovo} notaDeAvaliacao={produto.notaDeAvaliacao} imagemProduto={produto.imagemProduto} desconto={produto.desconto} />))

export default function ProdutoDetails({ searchParams }: PropsProduct) {

  const { push } = useRouter();
  const { addProduct } = useCarrinho()
  const { addConfirmacao } = useConfirmacao()!

  const [produtoProcurado, setProdutoProcurado] = useState<ProdutoCompleto>()
  const [numeroImagem, setNumeroImagem] = useState<number>(0)
  const [favorito, setFavorito] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const [quantidade, setQuantidade] = useState<number>(1)
  const [especificacao1, setEspecificacao1] = useState<String>("Rosa")
  const [especificacao2, setEspecificacao2] = useState<String>("Pequeno")

  const especificacoes = [
    {
      topico: "Idade",
      resposta: produtoProcurado?.especificacoes.idadePet
    },
    {
      topico: "Porte da Raça",
      resposta: produtoProcurado?.especificacoes.porteRaca
    },
    {
      topico: "Pet",
      resposta: produtoProcurado?.especificacoes.pet
    },
    {
      topico: "Cor",
      resposta: produtoProcurado?.especificacoes.cor
    },
    {
      topico: "Tipo",
      resposta: produtoProcurado?.especificacoes.tipo
    },
    {
      topico: "Material",
      resposta: produtoProcurado?.especificacoes.material
    },
    {
      topico: "Variações",
      resposta: produtoProcurado?.especificacoes.apresentacao
    }

  ]

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



  const adicionarCarrinho = () => {
    const newProduto: QntProduto = {
      id: produtoProcurado?.id,
      quantidade: quantidade,
    }
    addProduct(newProduto)
    addConfirmacao("Produto adiconado na sacola")
  }

  if (!produtoProcurado) return (
    <Loading />
  )
  else {
    return (
      <main className='text-preto font-poppins'>
        <Confirmacao />
        <section className=''>
          <TituloLinha voltar={true} titulo={produtoProcurado.nomeProduto} />
        </section>

        <section className='flex flex-col md:flex-row w-[90%] m-auto mt-8 md:mt-[2.5rem] justify-between'>

          <section className='w-full sm:ml-10 md:w-[30%] h-auto'>
            <div className='h-full w-full flex flex-col gap-2 lg:gap-4 lg:justify-center'>

              <div className='h-44 md:h-fit lg:h-full border border-cinza rounded-2xl w-full flex items-center justify-center'>
                <img src={produtoProcurado.imagemProduto[numeroImagem]} alt="" className='w-[50%] md:w-full py-4 2xl:w-[50%]' />
                <div className='flex-row md:w-[33%] absolute justify-between flex max-sm:hidden'>
                  <button onClick={() => setNumeroImagem(numeroImagem > 0 ? numeroImagem - 1 : numeroImagem)} className='hover:shadow-md hover:translate-x-[-0.5rem] animation duration-200 bg-branco  border border-preto lg:w-14 lg:h-14 md:w-10 md:h-10 rounded-full flex items-center justify-center' ><FaChevronLeft /></button>
                  <button onClick={() => setNumeroImagem(produtoProcurado.imagemProduto.length > numeroImagem + 1 ? numeroImagem + 1 : numeroImagem)} className='hover:shadow-md hover:translate-x-[0.5rem] animation duration-200 bg-branco  border border-preto lg:w-14 lg:h-14 md:w-10 md:h-10 rounded-full flex items-center justify-center' ><FaChevronRight /></button>
                </div>
              </div>

              <div className='lg:h-full w-full lg:w-1/3 lg:m-auto flex flex-row lg:items-center gap-1 lg:block'>
                <button onClick={() => setNumeroImagem(numeroImagem > 0 ? numeroImagem - 1 : numeroImagem)} className='hover:shadow-md hover:translate-x-[-0.5rem] animation duration-200 bg-branco md:hidden  border border-preto w-8 h-8 rounded-full flex items-center justify-center' ><FaChevronLeft /></button>

                <div className='flex flex-row w-full gap-2'>
                  {produtoProcurado.imagemProduto.map((image, i) => (
                    <div onClick={() => setNumeroImagem(i)} key={i} className={`flex items-center justify-center cursor-pointer md:h-16 lg:w-2/5 duration-100 lg:m-auto h-10 w-10 md:w-[40%] rounded-xl md:rounded-2xl border ${numeroImagem == i ? 'border-cinza-escuro scale-105' : 'border-cinza opacity-80'} md:mt-5 lg:mb-5`}>
                      <img src={image} alt="" className='w-3/5 2xl:w-[50%] object-cover' />
                    </div>
                  ))}
                </div>

                <button onClick={() => setNumeroImagem(produtoProcurado.imagemProduto.length > numeroImagem + 1 ? numeroImagem + 1 : numeroImagem)} className='hover:shadow-md hover:translate-x-[-0.5rem] animation duration-200 bg-branco md:hidden  border border-preto w-8 h-8 rounded-full flex items-center justify-center' ><FaChevronRight /></button>
              </div>

            </div>
          </section>

          <section className='md:w-3/5 w-full flex flex-col max-sm:mt-4'>
            <div className='flex flex-row items-center justify-between'>
              <p className=' md:text-xl text-base font-normal text-preto'>{produtoProcurado.nomeProduto}</p>
              <div className="transition duration-100 active:scale-75 z-50" onClick={() => setFavorito(!favorito)}>{favorito ? <FaHeart size={20} style={{ color: "#B5A6F3", }} /> : <FaRegHeart size={20} style={{ color: "#4f4f4f", }} />}</div>
            </div>
            <div className='flex flex-col md:flex-row md:gap-1 lg:text-sm text-xs  font-normal text-cinza-escuro'>
              <p>Código: {produtoProcurado.codigo} |</p>
            </div>
            <div className='md:mt-1 mt-2 flex flex-row items-center'>
              {construirEstrelas(produtoProcurado?.notaDeAvaliacao!)}
              <p className={` ml-2 text-base ${produtoProcurado.disponivel ? 'text-verde' : 'text-error'} font-bold`}>{produtoProcurado.disponivel ? "| Disponível" : "| Indisponível"}</p>
            </div>

            <div className='flex lg:flex-row flex-col gap-6'>
              <div className='flex flex-col md:justify-between w-full gap-4 max-sm:mt-3 mt-6'>

                <div className='flex flex-row items-center gap-3'>
                  <p className='font-bold md:text-2xl text-xl text-preto'>R$ {produtoProcurado.precoNovo.toFixed(2).replace(".", ",")}</p>
                  <p className='font-medium line-through text-sm text-cinza'>R$ {produtoProcurado.precoAntigoDoProduto.toFixed(2).replace(".", ",")}</p>
                </div>

                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-2'>
                    <p className='text-cinza-escuro font-medium'>Cor</p>
                    <div className='flex flex-row gap-3'>
                      <button onClick={() => setEspecificacao1("Rosa")} className={`${especificacao1 == "Rosa" ? `border-roxo-select text-roxo-select bg-[#EAE4FF] scale-105` : `border-cinza-escuro`} duration-100 border rounded-md p-1  text-sm`}>Rosa</button>
                      <button onClick={() => setEspecificacao1("Roxo")} className={`${especificacao1 == "Roxo" ? `border-roxo-select text-roxo-select bg-[#EAE4FF] scale-105` : `border-cinza-escuro`} duration-100 border rounded-md p-1  text-sm`}>Roxo</button>
                      <button onClick={() => setEspecificacao1("Vermelho")} className={`${especificacao1 == "Vermelho" ? `border-roxo-select text-roxo-select bg-[#EAE4FF] scale-105` : `border-cinza-escuro`} duration-100 border rounded-md p-1  text-sm`}>Vermelho</button>
                      <button onClick={() => setEspecificacao1("Azul")} className={`${especificacao1 == "Azul" ? `border-roxo-select text-roxo-select bg-[#EAE4FF] scale-105` : `border-cinza-escuro`} duration-100 border rounded-md p-1  text-sm`}>Azul</button>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <p className='text-cinza-escuro font-medium'>Tamanho</p>
                    <div className='flex flex-row gap-3'>
                      <button onClick={() => setEspecificacao2("Pequeno")} className={`${especificacao2 == "Pequeno" ? `border-roxo-select text-roxo-select bg-[#EAE4FF] scale-105` : `border-cinza-escuro`} duration-100 border rounded-md p-1  text-sm`}>Pequeno</button>
                      <button onClick={() => setEspecificacao2("Médio")} className={`${especificacao2 == "Médio" ? `border-roxo-select text-roxo-select bg-[#EAE4FF] scale-105` : `border-cinza-escuro`} duration-100 border rounded-md p-1  text-sm`}>Médio</button>
                      <button onClick={() => setEspecificacao2("Grande")} className={`${especificacao2 == "Grande" ? `border-roxo-select text-roxo-select bg-[#EAE4FF] scale-105` : `border-cinza-escuro`} duration-100 border rounded-md p-1  text-sm`}>Grande</button>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <p className='text-cinza-escuro font-medium'>Quantidade</p>
                  <div className='w-1/3'>
                    <QuantidadeProduto propsQuantidade={setQuantidade} estoqueDisponivel={produtoProcurado.estoque} />
                  </div>
                </div>
              </div>

              <div className='flex flex-col w-full justify-between gap-2'>
                <div className='bg-terciaria flex flex-col gap-4 p-4 rounded-lg'>
                  <div>
                    <p className='font-semibold text-md sm:text-lg'>Calcule seu frete</p>
                    <p className='text-cinza-escuro text-sm'>Informe seu CEP</p>
                    <div className='flex flex-row gap-2 items-center'>
                      <InputText />
                      <div className='w-2/5'>
                        <BotaoGrande background='bg-secundaria' title='Calcular' type={'button'} />
                      </div>
                    </div>
                  </div>


                  <div className='lg:text-base text-sm flex flex-row justify-between font-medium'>
                    <p>Frete normal</p>
                    <p>R$13,99</p>
                  </div>
                  <div className='lg:text-base text-sm flex flex-row justify-between font-medium'>
                    <p>SEDEX</p>
                    <p>R$23,99</p>
                  </div>

                </div>
                <div onClick={() => adicionarCarrinho()} className='h-full'>
                  <BotaoGrande height='h-full' title='Adicionar à sacola' background='bg-primaria' type='button' />
                </div>
                <div className='h-full'>
                  <BotaoGrande height='h-full' title='Comprar agora' background='bg-secundaria' type='button' />
                </div>
              </div>
            </div>

            {/* <div className='flex flex-row items-start gap-4 w-full lg:w-[85%] mt-4'>
              <div className='w-[30%]'>
                <QuantidadeProduto propsQuantidade={setQuantidade} estoqueDisponivel={produtoProcurado.estoque} />
                <p className=' text-cinza-escuro text-center mt-1 lg:text-base md:text-xs text-[10px]'>Em estoque: {produtoProcurado.estoque}</p>
              </div>

              <button className='bg-primaria rounded-lg w-[15%] p-2 transition ease-in-out delay-150 duration-200 hover:bg-[#826cda] flex justify-center items-center' onClick={() => adicionarCarrinho()}>
                <FiShoppingBag style={{ color: "#322828", }} className="w-4" />
              </button>

              <div className='h-8 flex items-center max-md:hidden'>
                <p className=''>ou</p>
              </div>
              <div className='w-[50%]'>
                <BotaoGrande title='Comprar Agora' type='button' background='bg-secundaria' />
              </div>
            </div> */}

          </section>
        </section>
        <section className='md:mt-20 mt-8'>
          <div className='flex flex-col'>
            <TituloLinha voltar={false} titulo='Você também pode gostar...' />
            <CarrosselProduto slides={carrosselProdutos} />
          </div>
        </section>
        <section className='md:mt-20 mt-8'>
          <div>
            <TituloLinha voltar={false} titulo='Descrição' />
          </div>
          <div className='mt-10 w-[90%] m-auto md:text-base text-sm'>
            {
              produtoProcurado.descricao.map((linha, i) => (
                <p className=' mb-0.5' key={i}>{linha}</p>
              ))
            }
          </div>
        </section>
        <section className='md:mt-20 mt-8'>
          <div>
            <TituloLinha voltar={false} titulo='Especificações' />
          </div>
          <div className='w-[90%] m-auto mt-8'>
            {
              especificacoes.map((item, i) => (
                <div key={i} className={`flex flex-row w-full h-10 items-center max-sm:justify-between ${i % 2 == 0 ? 'bg-terciaria' : ''} rounded-lg`}>
                  <div className='md:w-[50%]  md:text-lg text-sm ml-2'>{item.topico}</div>
                  <div className='md:w-[50%]  md:text-base text-xs max-sm:flex max-sm:justify-end max-sm:text-end'>{item.resposta}</div>
                </div>
              ))
            }
          </div>
        </section>
        <section className='mt-20'>
          <div>
            <TituloLinha voltar={false} titulo='Avaliações' />
          </div>
          <div className='mt-4 sm:mt-8 md:mt-14'>
            {
              produtoProcurado.avaliacoes.map((avaliacao, i) => (
                <div key={i} className="flex flex-col gap-4 sm:gap-14 md:mb-8 mb-4">
                  <Avaliacao nomeUsuario={(buscarUsuario((avaliacao as AvaliacaoType).id)! as Usuario).nomeCompleto}
                    fotoUsuario={(buscarUsuario(avaliacao.id)! as Usuario).foto} avaliacaoUsuario={avaliacao.descricao}
                    estrelas={construirEstrelas(avaliacao.nota)} notaAvaliacao={avaliacao.nota} />
                </div>
              ))
            }
          </div>
          <div className='mt-4 sm:mt-14 mb-20'>
            <EscreverAvaliacao nomeUsuario={"Kristian Erdmann"} fotoUsuario="../assets/gatoFotoUsuario.png" />
          </div>
        </section>
      </main>
    )
  }

}
