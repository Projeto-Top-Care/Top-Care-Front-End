'use client' 
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande';
import CadastroPet from '@/components/Pop-up/CadastroPet/CadastroPet';
import React, { useState } from 'react';

export default function EscolhaPet() {

    const [openPet, setOpenPet] = useState(false);

    return (
        <main className="p-8 mt-8 sm:mt-12 w-full flex flex-col items-center justify-center gap-6 sm:gap-12">
            <div className='flex items-center justify-center'>
                <p className='font-poppins text-preto font-medium text-xl text-center'>Para qual pet é o agendamento?</p>
            </div>
        </main>
    );
}