'use client'
import InputData from '@/components/InputData/InputData';
import React, { useState } from 'react';
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande';

export default function EscolhaData() {

    const [data, setData] = useState<string>("");

    return (
        <main className="p-8 mt-12 w-full flex flex-col items-center justify-center gap-12">
            <div className='flex items-center justify-center'>
                <p className='font-poppins text-preto font-medium text-xl text-center'>Selecione uma data para agendamento</p>
            </div>
            <div className='w-[25%]'>
                <InputData dataSelecionada={setData} />
            </div>
            <div className='lg:p-28 md:p-4 flex md:flex-row flex-col gap-4 mt-8 justify-between'>
                <div className='lg:w-[12%] md:w-[16%] w-full'>
                    <BotaoGrande title="Anterior" background='bg-terciaria' type={"button"} />
                </div>
                <div className='lg:w-[12%] md:w-[16%] w-ful'>
                    <BotaoGrande title="Próximo" background='bg-secundaria' type={"button"} />
                </div>
            </div>
        </main>
    );
}
