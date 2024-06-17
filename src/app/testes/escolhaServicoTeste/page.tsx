'use client'
import React, { useState } from 'react';
import ServicosAgendamento from "@/components/ServicosAgendamento/ServicosAgendamento";
import { FiPlus, FiMinus } from "react-icons/fi";
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande';

export default function EscolhaServico() {
    const [selectedServico, setSelectedServico] = useState<string>('Consulta');
    const [showVacinas, setShowVacinas] = useState<boolean>(false);

    const handleSelectServico = (servico: string) => {
        setSelectedServico(servico);
    };

    const toggleVacinas = () => {
        setShowVacinas(!showVacinas);
    };

    return (
        <main className="p-8 w-full mt-12">
            <div className='flex items-center justify-center'>
                <p className='font-poppins text-preto font-medium text-xl text-center'>
                    Selecione o serviço desejado a partir das opções abaixo
                </p>
            </div>
            <section>
                <div className='lg:flex grid md:grid-cols-2 lg:justify-center lg:items-center gap-8 w-full mt-8'>
                    <ServicosAgendamento
                        servico="Consulta"
                        preco="79,90"
                        isSelected={selectedServico === 'Consulta'}
                        onSelect={() => handleSelectServico('Consulta')}
                    />
                    <ServicosAgendamento
                        servico="Banho e tosa"
                        preco="89,90"
                        isSelected={selectedServico === 'Banho e tosa'}
                        onSelect={() => handleSelectServico('Banho e tosa')}
                    />
                    <ServicosAgendamento
                        servico="Banho"
                        preco="49,90"
                        isSelected={selectedServico === 'Banho'}
                        onSelect={() => handleSelectServico('Banho')}
                    />
                    <div className='flex items-center justify-center flex-col cursor-pointer md:w-[10%] w-full' onClick={toggleVacinas}>
                        <div className='p-3 rounded-full bg-terciaria'>
                            {showVacinas ? <FiMinus size={20} /> : <FiPlus size={20} />}
                        </div>
                        <p className='font-poppins text-preto text-sm text-center '>
                            {showVacinas ? 'Esconder vacinas' : 'Ver vacinas'}
                        </p>
                    </div>
                </div>
                {showVacinas && (
                    <div className='lg:flex grid md:grid-cols-2 lg:justify-center lg:items-center gap-8 w-full mt-8'>
                        <ServicosAgendamento
                            servico="Vacina antirrábica"
                            preco="89,99"
                            isSelected={selectedServico === 'Vacina antirrábica'}
                            onSelect={() => handleSelectServico('Vacina antirrábica')}
                        />
                        <ServicosAgendamento
                            servico="Vacina gripe canina "
                            preco="99,40"
                            isSelected={selectedServico === 'Vacina gripe canina '}
                            onSelect={() => handleSelectServico('Vacina gripe canina ')}
                        />
                        <ServicosAgendamento
                            servico="Vacina V8"
                            preco="100,50"
                            isSelected={selectedServico === 'Vacina V8'}
                            onSelect={() => handleSelectServico('Vacina V8')}
                        />
                        <ServicosAgendamento
                            servico="Vacina V10"
                            preco="105,50"
                            isSelected={selectedServico === 'Vacina V10'}
                            onSelect={() => handleSelectServico('Vacina V10')}
                        />
                    </div>
                )}
            </section>
            <div className='lg:p-24 flex md:flex-row flex-col gap-4 mt-8 justify-between'>
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
