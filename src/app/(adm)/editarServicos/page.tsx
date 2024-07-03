'use client'
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import TabelaServicos from '@/components/TabelaServicos/TabelaServicos'
import { buscarServico } from '@/server/servicos/action'
import { Servico } from '@/types/servicos'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface PropsService {
    searchParams: { id: number }
  }

export default function EditarServico({searchParams}: PropsService) {
    const router = useRouter()
    
    const idService = searchParams.id;

    const service: Servico = buscarServico(idService)! 

    return (
        <main className='w-[90%] mx-auto'>
            <section className='mt-16'>
                <div className='w-[10%]'>
                    <BotaoGrande title='Voltar' background='bg-secundaria' type='button' onClick={() => router.back()} />
                </div>
            </section>
            <section className='flex items-center justify-center'>
                <p className='font-averia font-semibold text-3xl'>Editar {service.nome}</p>
            </section>
            <section>
                <TabelaServicos servico={service}/>
            </section>
            <section className='flex flex-row justify-between items-center my-10'>
                <div className='w-48'>
                    <BotaoGrande background='bg-error' title='Cancelar' type='button' textColor='text-branco' onClick={()=>router.back()} />
                </div>
                <div className='w-60'>
                    <BotaoGrande background='bg-secundaria' title='Salvar Produto' type='button' />
                </div>
            </section>
        </main>
    )
}