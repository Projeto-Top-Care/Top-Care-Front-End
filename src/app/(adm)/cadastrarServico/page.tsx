'use client'
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import TabelaServicos from '@/components/TabelaServicos/TabelaServicos'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'



export default function CadastrarServico() {
    const router = useRouter()

    return (
        <main className='w-[90%] mx-auto text-preto'>
            <section className=''>
                <TituloLinha voltar={true} titulo='Cadastrar novo serviço' />
            </section>
            <section>
                <TabelaServicos />
            </section>
            <section className='flex flex-row justify-between items-center my-10'>
                <div className='w-48'>
                    <BotaoGrande background='bg-error' title='Cancelar' type='button' textColor='text-branco' onClick={()=>router.back()} />
                </div>
                <div className='w-60'>
                    <BotaoGrande background='bg-secundaria' title='Cadastrar Produto' type='button' />
                </div>
            </section>
        </main>
    )
}
