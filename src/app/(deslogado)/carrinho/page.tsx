'use client'
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import InputMask from '@/components/InputMask/InputMask'
import DoisBotoes from '@/components/Pop-up/DoisBotoes/DoisBotoes'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { getLocalStorageArray, getLocalStorageItem } from '@/server/localStorage/actions'
import { buscarProduto } from '@/server/produtos/action'
import { buscarUsuario } from '@/server/usuario/action'
import { Produto } from '@/types/produto'
import { Usuario, Cupom, QntProduto } from '@/types/usuarios'
import { useRouter } from 'next/navigation'

import React, { useEffect, useState } from 'react'
import CupomPequeno from './CupomPequeno'
import Cupons from './Cupons'
import Produtos from './Produtos'
import Topico from './Topico'

export default function Carrinho() {
  const idUser = getLocalStorageItem('idUser');
  const usuarioLogado: Usuario | undefined = buscarUsuario(Number.parseInt(idUser!))
  const produtos: Produto[] = getLocalStorageArray('carrinho').map((item)=>{
    return buscarProduto((item as unknown as QntProduto).id)!
  })
  const [frete, setFrete] = useState<number | string>(0)
  const [desconto, setDesconto] = useState<number>(0)
  const [cep, setCep] = useState<string>('')
  const [openCupons, setOpenCupons] = useState<boolean>(false)
  const [cupom, setCupom] = useState<Cupom>()
  const [erro, setErro] = useState<boolean>(false)
  const [inexitente, setInexistente] = useState<boolean>(false)
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

  const adicionarCarrinho = () =>{
    router.push('/paginaCompra')
  }

  return (
    <main>
      <section className='mt-10'>
        <TituloLinha titulo='Minha Sacola' />
      </section>
      <section className=' w-[90%] m-auto flex flex-row justify-between mt-14 mb-24 h-[35rem]'>
        <section className='border border-cinza rounded-lg w-[65%] px-6 py-4 overflow-auto scroll max-h-'>
          <h1 className='font-poppins text-xl font-medium'>Produtos</h1>
          <p className='font-poppins underline text-sm mt-1 cursor-pointer'>Limpar sacola</p>
          <div className='flex mt-5 flex-col gap-10'>
            {
              produtos!.map((produto) => (
                <div key={produto.id}>
                  <Produtos id={produto.id} nomeProduto={produto.nomeProduto} imagemProduto={produto.imagemProduto[0]} preco={produto.precoNovo}/>
                </div>
              ))
            }
          </div>
        </section>
        <section className='flex flex-col w-[33%] items-end justify-between'>
          <section className='rounded-lg bg-terciaria w-full py-3 px-4'>
            <h1 className='font-poppins font-bold text-xl'>Sumário</h1>
            <div className='flex flex-row justify-between mt-6'>
              <p className='font-poppins font-medium'>Subtotal</p>
              <p className='font-poppins'>R${somaTotal().toString().replace(".", ",")}</p>
            </div>
            <div className='mt-5'>
              <p className='font-poppins font-medium'>Cupons</p>
              <p className='font-poppins font-regular text-sm my-2'>Clique no botão abaixo e escolha um cupom de desconto</p>
              <BotaoGrande title='Cupons' background='bg-secundaria' type='button' onClick={() => setOpenCupons(!openCupons)} />
              {
                openCupons && (
                  <div className='relative'>
                    <Cupons cupons={typeof usuarioLogado != undefined ? usuarioLogado!.cupons : []} setCupom={setCupom} />
                  </div>
                ) ||
                cupom && (
                  <CupomPequeno cupom={cupom} deleteCupom={setCupom} />
                )
              }
            </div>
            <div className='mt-2'>
              <p className='font-poppins font-medium'>Calcular Frete</p>
              <p className='font-poppins font-regular text-xs'>Infrorme seu CEP</p>
              <div className='flex flex-row justify-between'>
                <div className='w-[60%]'><InputMask placeholder='_____-___' mask='_____-___' replacement={{ _: /\d/ }} onMasks={(e: any) => setCep(e.target.value)} error={erro || inexitente} /></div>
                <div className='w-[32%]' onClick={() => enviarFrete()}><BotaoGrande title='Calcular' type='button' background='bg-secundaria' height='h-10' fontSize='text-sm font-medium' /></div>
              </div>
              {
                erro && (
                  <span className='absolute font-poppins text-error text-sm'>Digite todos os número de um CEP</span>
                ) ||
                inexitente && (
                  <span className='absolute font-poppins text-error text-sm'>O CEP informado não existe!</span>
                )
              }
            </div>
            <div className='mt-6'>
              <Topico topico='Frete' preco={frete} />
              <div className='border-t border-cinza'></div>
              <Topico topico='Descontos' preco={desconto == 0 ? 0 : desconto.toFixed(2)} />
              <div className='border-t border-cinza'></div>
              <Topico topico='Total' preco={parseInt((somaTotal() + (typeof frete == 'number' ? frete : 0) - desconto).toFixed(2))} />
            </div>

          </section>
          <div className='w-1/2'>
            <BotaoGrande title='Continuar' background='bg-secundaria' type='button' onClick={()=>adicionarCarrinho()}/>
          </div>
        </section>
      </section>
    </main>
  )
}
