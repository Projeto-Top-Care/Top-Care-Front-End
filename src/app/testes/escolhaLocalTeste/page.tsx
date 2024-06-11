'use client'
import React, { useState } from 'react';
import LocalAgendamento from '@/components/LocalAgendamento/LocalAgendamento';

export default function EscolhaLocal() {
    const [selectedLocal, setSelectedLocal] = useState<string>('Camboriu - SC');

    const handleSelectLocal = (servico: string) => {
        setSelectedLocal(servico);
    };

    return (
        <main className="p-8 w-full mt-12">
            <div className='flex items-center justify-center'>
                <p className='font-poppins text-preto font-medium text-xl text-center'>Selecione uma de nossas lojas físicas para realizar o atendimento</p>
            </div>
            <section>
                <div className='lg:flex grid md:grid-cols-2 lg:justify-center lg:items-center lg:gap-8 '>
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
        </main>
    );
}
