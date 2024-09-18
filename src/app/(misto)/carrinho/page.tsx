'use client'
import BotaoGrande from '@/components/Botoes/BotaoGrande/BotaoGrande'
import DoisBotoes from '@/components/Pop-up/DoisBotoes/DoisBotoes'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { useCarrinho } from '@/context/CarrinhoContext'
import { useUserID } from '@/context/UserIDContext'
import { buscarProduto, buscarVariante } from '@/server/produtos/action'
import { buscarUsuario } from '@/server/usuario/action'
import { ProdutoCompleto, VarianteProps } from '@/types/produto'
import { Usuario, Cupom, QuantidadeProduto } from '@/types/usuarios'
import { useRouter } from 'next/navigation'

import React, { use, useEffect, useState } from 'react'
import CupomPequeno from './CupomPequeno'
import Cupons from './Cupons'
import Produtos from './Produtos'
import Topico from './Topico'
import CalcularFrete from '@/components/CalcularFrete/calcularFrete'
import { buscarCarrinho, limparCarrinho } from '@/server/carrinho/action'
import Loading from '../loading'
import { useError } from '@/context/ErrorContext'
import Erro from '@/components/Pop-up/Erro/Erro'

export interface CarrinhoProps {
  id: number,
  produtos: QuantidadeProdutoCarrinho[],
  desconto: number,
  frete: number,
  total: number
  subTotal: number
}

export interface QuantidadeProdutoCarrinho {
  id: number
  produto: ProdutoCompleto
  varianteProduto: VarianteProps
  quantidade: number
}

export default function Carrinho() {

  const { getUserID } = useUserID()
  const [carrinho, setCarrinho] = useState<CarrinhoProps>()
  const [usuarioLogado, setUsuarioLogado] = useState<Usuario>()
  const [att, setAtt] = useState<number>(0)

  useEffect(() => {
    const func = async () => {
      const idUser = getUserID()
      if (idUser) {
        const userTaked = await buscarUsuario(parseInt(idUser))
        if (userTaked) {
          setUsuarioLogado(userTaked)
          const carrinho = await buscarCarrinho(userTaked.id)
          setCarrinho(carrinho)
        }
      }
    }
    func()
  }, [att])


  const [produtos, setProdutos] = useState<ProdutoCompleto[]>([])
  const [variantes, setVariantes] = useState<VarianteProps[]>([])

  const [frete, setFrete] = useState<number | string>(0)
  const [desconto, setDesconto] = useState<number>(0)
  const [cep, setCep] = useState<string>('')
  const [openCupons, setOpenCupons] = useState<boolean>(false)
  const [cupom, setCupom] = useState<Cupom>()
  const [erro, setErro] = useState<boolean>(false)
  const [inexistente, setInexistente] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const [sim, setSim] = useState<boolean>(false)
  const {addError} = useError()
  const router = useRouter()

  useEffect(() => {
    if (!carrinho) return
    const func = async () => {
      const produtos: ProdutoCompleto[] = []
      const variantes: VarianteProps[] = []
      carrinho.produtos.forEach((produto) => {
        produtos.push(produto.produto)
        variantes.push(produto.varianteProduto)
      })
      setProdutos(produtos)
      setVariantes(variantes)
    }
    func()
  }, [carrinho])

  useEffect(() => {
    if (cep.length != 9) {
      if (cupom?.tipo == 'frete') {
        setFrete("Gratuito")
        return
      }
      setFrete(0)
    }
  }, [cep])

  useEffect(() => {
    setOpenCupons(false)
    calcularDesconto()
    if (!cupom) {
      setDesconto(0)
      if (cep.length == 9) {
        enviarFrete()
      }
    }
    if (cupom?.tipo == 'frete') {
      setFrete("Gratuito")
      return
    }
  }, [cupom])

  useEffect(() => {
    if (sim) {
      const func = async () => {
        await limparCarrinho(usuarioLogado!.id)
        setAtt((prev) => prev + 1)
      }
      func()
    }
  }, [sim])

  const somaTotal = (): number => {
    if (typeof produtos != undefined) {
      let total = 0

      if (variantes) {
        variantes.forEach((variacao, i) => {
          if (carrinho!.produtos[i]?.quantidade) {
            total += (variacao.preco * carrinho!.produtos[i].quantidade)
          }
        })

        return total;
      }
    }
    return 0
  }

  const enviarFrete = () => {
    if (cep.length !== 9) {
      return
    } else if (cep == '11111-111') {
      return
    } else if (cupom?.tipo == 'frete') {
      setFrete("Gratuito")
      return
    }
    setFrete(34)

  }
  const calcularDesconto = () => {
    if (cupom) {
      setDesconto(cupom.porcentagem * somaTotal())
    }
  }

  const verificarContinuar = () => {
    if(usuarioLogado){
      if(carrinho){
        if(carrinho.produtos.length > 0){
          router.push('/paginaCompra')
          return
        }
        addError("Você não possui produtos na sacola")
      }
      return
    }
    router.push('/login')
  }

  return (
    <main className='text-preto'>
      <Erro/>
      <section className=''>
        <TituloLinha voltar={false} titulo='Minha Sacola' />
      </section>
      <section className=' w-[90%] m-auto flex md:flex-row flex-col md:gap-0 gap-10 justify-between mt-14 mb-24 md:h-[35rem]'>
        <section className='border border-cinza rounded-lg md:w-[65%] w-full md:px-6 px-3 py-4 overflow-auto scroll'>
          <h1 className='font-poppins md:text-xl text-lg font-medium'>Produtos</h1>
          <p className='font-poppins underline md:text-sm text-xs mt-1 cursor-pointer' onClick={() => setOpen(true)}>Limpar sacola</p>
          <div className='flex mt-5 flex-col gap-10'>
            {
              produtos.map((produto, i) => (
                <div key={produto.id}>
                  <Produtos produto={produto} variante={variantes[i]} produtoQuantidade={carrinho!.produtos[i]} setAtt={setAtt} />
                </div>
              ))
            }
          </div>
        </section>
        <section className='flex flex-col md:w-[33%] w-full items-end justify-between'>
          <section className='rounded-lg bg-terciaria w-full py-3 px-4'>
            <h1 className='font-poppins font-bold text-xl'>Sumário</h1>
            <div className='flex flex-row justify-between mt-6'>
              <p className='font-poppins font-medium'>Subtotal</p>
              <p className='font-poppins'>R${somaTotal().toFixed(2).replace(".", ",")}</p>
            </div>
            <div className='mt-5'>
              <p className='font-poppins font-medium'>Cupons</p>
              <p className='font-poppins font-regular text-sm my-2'>Clique no botão abaixo e escolha um cupom de desconto</p>
              <BotaoGrande title='Cupons' background='secundaria' type='button' onClick={() => setOpenCupons(!openCupons)} />
              {
                openCupons && (
                  <div className='relative'>
                    <Cupons cupons={typeof usuarioLogado != undefined ? usuarioLogado!.cupons : []} setCupom={setCupom} setOpenCupons={setOpenCupons} />
                  </div>
                ) ||
                cupom && (
                  <CupomPequeno cupom={cupom} deleteCupom={setCupom} />
                )
              }
            </div>
            <div>
              <CalcularFrete setFrete={setFrete} setErro={setErro} setInexistente={setInexistente} />
            </div>
            <div className='mt-6'>
              <Topico topico='Frete' preco={frete} />
              <div className='border-t border-cinza'></div>
              <Topico topico='Descontos' preco={desconto == 0 ? 0 : desconto.toFixed(2)} />
              <div className='border-t border-cinza'></div>
              <Topico topico='Total' preco={parseInt((somaTotal() + (typeof frete == 'number' ? frete : 0) - desconto).toFixed(2))} />
            </div>

          </section>
          <div className='lg:w-1/2 w-full lg:mt-0 mt-2'>
            <BotaoGrande title='Continuar' background='secundaria' type='button' onClick={() => { verificarContinuar()}} />
          </div>
        </section>
      </section>
      {open && (
        <div className="w-full">
          <div className='fixed top-0 left-0 w-full h-full z-50  bg-fundo-modal' onClick={() => setOpen(false)}></div>
          <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 lg:w-[25%] w-[60%]`}>
            <DoisBotoes texto="Você deseja limpar a sacola?" openParms={setOpen} sim={setSim} />
          </div>
        </div>
      )}
    </main>
  )
}