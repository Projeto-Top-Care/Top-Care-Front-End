'use client' 
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande';
import CadastroPet from '@/components/Pop-up/CadastroPet/CadastroPet';
import React, { useState } from 'react';

export default function EscolhaPet() {

    const [openPet, setOpenPet] = useState(false);

    return (
        <main className="p-8 mt-12 w-full flex flex-col items-center justify-center gap-12">
            <div className='flex items-center justify-center'>
                <p className='font-poppins text-preto font-medium text-xl text-center'>Para qual pet é o agendamento?</p>
            </div>
            <div>
                <div className='w-full'>
                    {openPet && (
                        <div className='overflow-hidden'>
                            <div className='fixed top-0 left-0 w-full h-full z-50 bg-fundo-modal' onClick={() => setOpenPet(false)}></div>
                            <div className='fixed w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                                <CadastroPet setOpen={setOpenPet} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}