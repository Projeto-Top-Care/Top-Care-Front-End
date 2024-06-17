'use client'
import InputData from '@/components/InputData/InputData';
import React, { useState } from 'react';
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande';

export default function EscolhaData() {

    const [data, setData] = useState<string>("");

    return (
        <main className='p-8'>
            <div className="mt-12 w-full flex flex-col items-center justify-center gap-12">
                <div className='flex items-center justify-center'>
                    <p className='font-poppins text-preto font-medium text-xl text-center'>Selecione uma data para o agendamento</p>
                </div>
                <div className='lg:w-[25%] md:w-[50%] w-full'>
                    <InputData dataSelecionada={setData} />
                </div>
            </div>
        </main>
    );
}