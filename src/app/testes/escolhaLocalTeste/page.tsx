'use client'
import React, { useState } from 'react';
import LocalAgendamento from '@/components/LocalAgendamento/LocalAgendamento';
import BarraProcessoAgendamento from '@/components/BarraProcesso/BarraProcessoAgendamento';
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande';

export default function EscolhaLocal() {
    const [selectedLocal, setSelectedLocal] = useState<string>('Camboriu - SC');

    const handleSelectLocal = (servico: string) => {
        setSelectedLocal(servico);
    };

    return (
        <main className="p-8 w-full mt-12">
            <section>
                <div className=' lg:flex grid md:grid-cols-2 lg:justify-center lg:items-center gap-4 mt-12'>
                    <LocalAgendamento
                        nomeFilial='Camboriu - SC'
                        rua='Dom Henrique, 424'
                        isSelected={selectedLocal === 'Camboriu - SC'}
                        onSelect={() => handleSelectLocal('Camboriu - SC')}
                    />
                    <LocalAgendamento
                        nomeFilial='Jaraguá do Sul - SC'
                        rua='Honório Pedri, 82'
                        isSelected={selectedLocal === 'Jaraguá do Sul - SC'}
                        onSelect={() => handleSelectLocal('Jaraguá do Sul - SC')}
                    />
                    <LocalAgendamento
                        nomeFilial='Curitiba - PR'
                        rua='Rua Antônio Gomes, 106'
                        isSelected={selectedLocal === 'Curitiba - PR'}
                        onSelect={() => handleSelectLocal('Curitiba - PR')}
                    />
                </div>
            </section>
            <div className='lg:p-28 md:p-4 flex md:flex-row flex-col gap-4 mt-8 justify-between'>
                <div className='lg:w-[14%] md:w-[25%] w-full'>
                    <BotaoGrande title="Anterior" background='bg-terciaria' type={"button"} />
                </div>
                <div className='lg:w-[14%] md:w-[25%] w-ful'>
                    <BotaoGrande title="Próximo" background='bg-secundaria' type={"button"} />
                </div>
            </div>
        </main>
    );
}
