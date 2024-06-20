'use client'
import React, { useState } from 'react';
import LocalAgendamento from '@/components/LocalAgendamento/LocalAgendamento';

const EscolhaLocal = () => {

    const [selectedLocal, setSelectedLocal] = useState<string>('Camboriu - SC');

    const handleSelectLocal = (servico: string) => {
        setSelectedLocal(servico);
    };

    return (
        <main className='p-8'>
            <div className="mt-12 w-full flex flex-col gap-12">
                <div className='flex items-center justify-center'>
                    <p className='font-poppins text-preto font-medium text-xl text-center'>Selecione uma data para o agendamento</p>
                </div>
                <div className='flex flex-col gap-8'>
                    <p className='text-preto font-poppins text-xl'>Doutora Kamila Fagundes</p>
                    <div className='lg:flex lg:justify-center lg:items-center grid md:grid-cols-2 gap-4 mt-12'>
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
                </div>
            </div>
        </main>
    )
}

export default EscolhaLocal;