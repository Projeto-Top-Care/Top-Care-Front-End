'use client'
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import TabelaServicos from '@/components/TabelaServicos/TabelaServicos'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
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
        <main className='mx-auto text-preto'>
            <section className=''>
                    <TituloLinha titulo={`Editar ` + service.nome} voltar={true} />
            </section>
            <section className='w-[90%] mx-auto'>
                <TabelaServicos servico={service}/>
            </section>
            <section className='w-[90%] mx-auto flex flex-row justify-between items-center my-10'>
                <div className='w-48'>
                    <BotaoGrande background='cancelar' title='Cancelar' type='button' onClick={()=>router.back()} />
                </div>
                <div className='w-60'>
                    <BotaoGrande background='secundaria' title='Salvar Produto' type='button' />
                </div>
            </section>
        </main>
    )
}