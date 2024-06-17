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
            <div className='lg:p-28 md:p-4 flex md:flex-row flex-col gap-4 mt-8 justify-between'>
                <div className='lg:w-[12%] md:w-[25%] w-full'>
                    <BotaoGrande title="Anterior" background='bg-terciaria' type={"button"} />
                </div>
                <div className='lg:w-[12%] md:w-[25%] w-ful'>
                    <BotaoGrande title="Próximo" background='bg-secundaria' type={"button"} />
                </div>
            </div>
        </main>
    );
}
