'use client'
import React from 'react'
import Carrossel from '@/components/CarrosselProduto/Carrossel'
import { EmblaOptionsType } from 'embla-carousel'

export default function PaginaInicial() {
    return (
        <main className="flex flex-col items-center justify-center mt-10">
            <div className='w-full'>
                <Carrossel />
            </div>
        </main>
    )
}
