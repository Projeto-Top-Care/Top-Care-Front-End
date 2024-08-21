'use client'
import BotaoGrande from '@/components/Botoes/BotaoGrande/BotaoGrande'
import TabelaServicos from '@/components/TabelaServicos/TabelaServicos'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { getServico } from '@/server/servicos/action'
import { Servico } from '@/types/servicos'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface ServicoProps {
    searchParams:{
        id: string
    }
}

export default function CadastrarServico({searchParams}: ServicoProps) {
    const router = useRouter()
    return (
        <main className='mx-auto text-preto'>
            <section className=''>
                <TituloLinha voltar={true} titulo='Cadastrar novo serviço' />
            </section>
            <section className='w-[90%] mx-auto'>
                <TabelaServicos servicoID={searchParams.id}/>
            </section>
            <section className='w-[90%] mx-auto flex flex-row justify-between items-center my-10'>
                <div className='w-48'>
                    <BotaoGrande background='cancelar' title='Cancelar' type='button' onClick={()=>router.back()} />
                </div>
                <div className='w-60'>
                    <BotaoGrande background='secundaria' title='Cadastrar Produto' type='button' />
                </div>
            </section>
        </main>
    )
}
