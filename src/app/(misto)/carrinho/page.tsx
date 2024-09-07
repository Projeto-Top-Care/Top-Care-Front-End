'use client'
import BotaoGrande from '@/components/Botoes/BotaoGrande/BotaoGrande'
import InputMask from '@/components/InputMask/InputMask'
import DoisBotoes from '@/components/Pop-up/DoisBotoes/DoisBotoes'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { useCarrinho } from '@/context/CarrinhoContext'
import { useUserID } from '@/context/UserIDContext'
import { buscarProduto } from '@/server/produtos/action'
import { buscarUsuario } from '@/server/usuario/action'
import { Produto } from '@/types/produto'
import { Usuario, Cupom, QntProduto } from '@/types/usuarios'
import { useRouter } from 'next/navigation'
import {cadastroCarrinho} from '@/server/carrinho/action'
import { buscarCarrinho } from '@/server/carrinho/action'

import React, { useEffect, useState } from 'react'
import CupomPequeno from './CupomPequeno'
import Cupons from './Cupons'
import Produtos from './Produtos'
import Topico from './Topico'
import CalcularFrete from '@/components/CalcularFrete/calcularFrete'

export default function Carrinho() {

  const { getUserID } = useUserID()
  const [carrinho, setCarrinho] = useState<QntProduto[]>([])
  const [usuarioLogado, setUsuarioLogado] = useState<Usuario>()

  const { getCarrinho } = useCarrinho()

  useEffect(() => {
    const func = async () => {
      setCarrinho(getCarrinho())
      console.log(getCarrinho())
      const idUser = getUserID()
      if (idUser) {
        const userTaked = await buscarUsuario(parseInt(idUser))
        if (userTaked) {
          setUsuarioLogado(userTaked)
        }
      }
    }
    func()
  }, [])

  const produtos: Produto[] = carrinho ? carrinho.map((item) => {
    return buscarProduto((item as unknown as QntProduto).id!)!
  }) : [];
  const [frete, setFrete] = useState<number | string>(0)
  const [desconto, setDesconto] = useState<number>(0)
  const [cep, setCep] = useState<string>('')
  const [openCupons, setOpenCupons] = useState<boolean>(false)
  const [cupom, setCupom] = useState<Cupom>()
  const [erro, setErro] = useState<boolean>(false)
  const [inexitente, setInexistente] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const [sim, setSim] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    if (cep.length != 9) {
      if (cupom?.tipo == 'frete') {
        setFrete("Gratuito")
        return
      }
      setFrete(0)
      setInexistente(false)
      setErro(false)
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
      localStorage.setItem('carrinho', JSON.stringify([]))
      location.reload()
    }
  }, [sim])

  const somaTotal = () => {
    if (typeof produtos != undefined) {
      let total = 0

      produtos!.forEach((produto) => [
        total += produto.precoNovo
      ])

      return total;
    }
    return 0
  }

  const enviarFrete = () => {
    if (cep.length !== 9) {
      setErro(true)
      return
    } else if (cep == '11111-111') {
      setInexistente(true)
      return
    } else if (cupom?.tipo == 'frete') {
      setFrete("Gratuito")
      return
    }
    setErro(false)
    setFrete(34)

  }
  const calcularDesconto = () => {
    if (cupom) {
      setDesconto(cupom.porcentagem * somaTotal())
    }
  }

  return (
    <main className='text-preto'>
      <section className=''>
        <TituloLinha voltar={false} titulo='Minha Sacola' />
      </section>
      {
        produtos && produtos.length > 0 ? (
      <section className=' w-[90%] m-auto flex md:flex-row flex-col md:gap-0 gap-10 justify-between mt-14 mb-24 md:h-[35rem]'>
        <section className='border border-cinza rounded-lg md:w-[65%] w-full md:px-6 px-3 py-4 overflow-auto scroll'>
          <h1 className='font-poppins md:text-xl text-lg font-medium'>Produtos</h1>
          <p className='font-poppins underline md:text-sm text-xs mt-1 cursor-pointer' onClick={() => setOpen(true)}>Limpar sacola</p>
          <div className='flex mt-5 flex-col gap-10'>
            {
              produtos!.map((produto) => (
                <div key={produto.id}>
                  <Produtos variacao='Rosa, pequeno' id={produto.id} nomeProduto={produto.nomeProduto} imagemProduto={produto.imagemProduto[0]} preco={produto.precoNovo} estoque={10} />
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
            <BotaoGrande title='Continuar' background='secundaria' type='button' onClick={() => { usuarioLogado ? router.push('/paginaCompra') : router.push('/login') }} />
          </div>
        </section>
      </section>
      ) : (
        <section className='w-[90%] mx-auto md:w-full self-center flex flex-col items-center mt-16 mb-16'>
          <h1 className='font-poppins font-bold text-lg md:text-2xl'>Sua sacola está vazia</h1>
          <p className='font-poppins text-center text-base md:text-lg mt-4'>Adicione alguns de nossos produtos!</p>
          <div className='w-44 md:w-48 mt-6'>
          <BotaoGrande title='Voltar para a loja' background='secundaria' type='button' onClick={() => router.push('/')} />
          </div>
        </section>
      )
    }
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