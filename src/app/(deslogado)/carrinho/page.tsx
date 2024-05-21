'use client'
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import InputMask from '@/components/InputMask/InputMask'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { buscarProduto } from '@/server/produtos/action'
import { buscarUsuario } from '@/server/usuario/action'
import { Produto } from '@/types/produto'
import { Usuario, Cupom } from '@/types/usuarios'

import React, { useEffect, useState } from 'react'
import CupomPequeno from './CupomPequeno'
import Cupons from './Cupons'
import Produtos from './Produtos'
import Topico from './Topico'

export default function Carrinho() {
  const idUser = 10
  const usuarioLogado: Usuario = buscarUsuario(idUser)!
  const produtos: Produto[] = usuarioLogado.produtosCarrinho.map((id) => {
    return buscarProduto(id)!
  })
  const [frete, setFrete] = useState<number>(0)
  const [desconto, setDesconto] = useState<number>(0)
  const [cep, setCep] = useState<string>('')
  const [openCupons, setOpenCupons] = useState<boolean>(false)
  const [cupom, setCupom] = useState<Cupom>()
  const [erro, setErro] = useState<boolean>(false)
  const [inexitente, setInexistente] = useState<boolean>(false)

  useEffect(() => {
    if (cep.length != 9) {
      setFrete(0)
      setInexistente(false)
      setErro(false)
    }
  }, [cep])

  useEffect(()=>{
    setOpenCupons(false)
    calcularDesconto()
  },[cupom])

  const somaTotal = () => {
    let total = 0

    produtos.forEach((produto) => [
      total += produto.precoNovo
    ])

    return total;
  }

  const enviarFrete = () =>{
    if (cep.length !== 9){
      setErro(true)
      return
    }else if(cep == '11111-111'){
      setInexistente(true)
      return
    }
    setErro(false)
    setFrete(34)

  }
  const calcularDesconto = () =>{
    if(cupom){
      setDesconto(cupom.porcentagem * somaTotal())
    }
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
              produtos.map((produto) => (
                <div key={produto.id}>
                  <Produtos nomeProduto={produto.nomeProduto} imagemProduto={produto.imagemProduto[0]} preco={produto.precoNovo} />
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
              <BotaoGrande title='Cupons' background='bg-secundaria' type='button' onClick={()=>setOpenCupons(!openCupons)}/>
              {
                openCupons && (
                  <div className='relative'>
                    <Cupons cupons={usuarioLogado.cupons} setCupom={setCupom}/>
                  </div>
                ) || 
                cupom && (
                  <CupomPequeno cupom={cupom} deleteCupom={setCupom}/>
                )
              }
            </div>
            <div className='mt-2'>
              <p className='font-poppins font-medium'>Calcular Frete</p>
              <p className='font-poppins font-regular text-xs'>Infrorme seu CEP</p>
              <div className='flex flex-row justify-between'>
                <div className='w-[60%]'><InputMask placeholder='_____-___' mask='_____-___' replacement={{ _: /\d/ }} onMasks={(e: any) => setCep(e.target.value)} error={erro || inexitente}/></div>
                <div className='w-[32%]' onClick={() => enviarFrete()}><BotaoGrande title='Calcular' type='button' background='bg-secundaria' height='h-10' fontSize='text-sm font-medium' /></div>
              </div>
              {
                erro && (
                  <span className='absolute font-poppins text-error text-sm'>Digite todos os número de um CEP</span>
                ) ||
                inexitente &&(
                  <span className='absolute font-poppins text-error text-sm'>O CEP informado não existe!</span>
                )
              }
            </div>
            <div className='mt-6'>
              <Topico topico='Frete' preco={frete} />
              <div className='border-t border-cinza'></div>
              <Topico topico='Descontos' preco={desconto} />
              <div className='border-t border-cinza'></div>
              <Topico topico='Total' preco={somaTotal() + frete - desconto} />
            </div>

          </section>
          <div className='w-1/2'>
            <BotaoGrande title='Continuar' background='bg-secundaria' type='button' />
          </div>
        </section>
      </section>
    </main>
  )
}
