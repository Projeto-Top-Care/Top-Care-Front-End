'use client'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { buscarServicos } from '@/server/servicos/action'
import { Servico } from '@/types/servicos'
import React from 'react'
import Card from './Card'
import { FaPlus } from "react-icons/fa";
import { useRouter } from 'next/navigation'

export default function VisualizarServicos() {
  const servicos: Servico[] = buscarServicos()
  const router = useRouter()

  return (
    <main>
      <section className='mt-4'>
        <TituloLinha titulo='Serviços' />
      </section>
      <section className='w-[90%] m-auto flex flex-row justify-evenly md:justify-between flex-wrap my-10'>
        {
          servicos.map((servico)=>(
            <div className='w-32 md:w-56 lg:w-64' key={servico.nome}>
              <Card servico={servico.nome} src={servico.imagem} />
            </div>
          ))
        }
      </section>
      <section className='w-[90%] mx-auto flex justify-end mb-10'>
        <div className='group w-10 h-10 bg-secundaria flex items-center justify-center rounded-xl cursor-pointer hover:w-48 ease-linear duration-500' onClick={()=>router.push('/cadastrarServico')}>
          <div className='group-hover:w-[20%] flex items-center justify-center duration-500 ease-in group-hover:rotate-90'> <FaPlus/> </div>
          <div className='w-[80%] animate-slide-left hidden object-cover group-hover:!flex'><p className='line-clamp-1 w-48 font-poppins'>Adicionar serviço</p></div>
        </div>
      </section>
    </main>
  )
}
