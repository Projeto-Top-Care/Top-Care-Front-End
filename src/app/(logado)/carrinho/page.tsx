'use client'
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import InputMask from '@/components/InputMask/InputMask'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { buscarProduto } from '@/server/produtos/action'
import { buscarUsuario } from '@/server/usuario/action'
import { Produto } from '@/types/produto'
import { Usuario } from '@/types/usuarios'

import React, { useState } from 'react'

export default function Carrinho() {
  const idUser = 10
  const usuarioLogado: Usuario = buscarUsuario(idUser)!
  const produtos: Produto[] = usuarioLogado.produtosCarrinho.map((id) => {
    return buscarProduto(id)!
  })
  const [frete, setFrete] = useState<number>(0)
  const [cep, setCep] = useState<string>('')

  const somaTotal = () => {
    let total = 0

    produtos.forEach((produto) => [
      total += produto.precoNovo
    ])

    return total;
  }

  const calcularFrete = ()=>{
    
  }

  return (
    <main>
      <section className='mt-10'>
        <TituloLinha titulo='Minha Sacola' />
      </section>
      <section className='border border-black w-[90%] m-auto p-4 flex flex-row justify-between'>
        <section className='border border-black w-[65%]'>

        </section>
        <section className='rounded-lg bg-terciaria w-[33%] py-3 px-4'>
          <h1 className='font-poppins font-bold text-xl'>Sumário</h1>
          <div className='flex flex-row justify-between mt-6'>
            <p className='font-poppins font-medium'>Subtotal</p>
            <p className='font-poppins'>R${somaTotal().toString().replace(".", ",")}</p>
          </div>
          <div className='mt-6'>
            <p className='font-poppins font-medium'>Cupons</p>
            <p className='font-poppins font-regular text-sm my-2'>Clique no botão abaixo e escolha um cupom de desconto</p>
            <BotaoGrande title='Cupons' background='bg-secundaria' type='button' />
          </div>
          <div className='mt-6'>
            <p className='font-poppins font-medium'>Calcular Frete</p>
            <p className='font-poppins font-regular text-xs'>Infrorme seu CEP</p>
            <div className='flex flex-row justify-between'>
              <div className='w-[60%]'><InputMask placeholder='_____-___' mask='_____-___' replacement={ {_: /\d/ }}/></div>
              <div className='w-[32%]'><BotaoGrande title='Calcular' type='button' background='bg-secundaria' height='h-10' fontSize='text-sm font-medium'/></div>
            </div>
          </div>

        </section>
      </section>
    </main>
  )
}
