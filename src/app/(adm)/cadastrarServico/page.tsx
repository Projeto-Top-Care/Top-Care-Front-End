'use client'
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import CadastroVariante from '@/components/Pop-up/CadastroVariante/CadastroVariante'
import TabelaServicos from '@/components/TabelaServicos/TabelaServicos'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'



export default function CadastrarServico() {
    const router = useRouter()

    return (
        <main className='w-[90%] mx-auto'>
            <section className='mt-16'>
                <div className='w-[10%]'>
                    <BotaoGrande title='Voltar' background='bg-secundaria' type='button' onClick={() => router.back()} />
                </div>
            </section>
            <section className='flex items-center justify-center'>
                <p className='font-averia font-semibold text-3xl'>Cadastre um serviço novo</p>
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
