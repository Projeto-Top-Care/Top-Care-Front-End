'use client'
import React, { useState } from 'react';
import ServicosAgendamento from "@/components/ServicosAgendamento/ServicosAgendamento";
import { FiPlus, FiMinus } from "react-icons/fi";

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
        <main className="w-full mt-12">
            <div className='flex items-center justify-center'>
                <p className='font-poppins text-preto font-medium text-xl text-center'>
                    Selecione o serviço desejado a partir das opções abaixo
                </p>
            </div>
            <section>
                <div className='p-8 md:flex md:justify-center md:items-center md:gap-8 w-full mt-8'>
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
                    <div className='flex items-center flex-col cursor-pointer' onClick={toggleVacinas}>
                        <div className='p-3 rounded-full bg-terciaria'>
                            {showVacinas ? <FiMinus size={20} /> : <FiPlus size={20} />}
                        </div>
                        <p className='font-poppins text-preto text-sm text-center'>
                            {showVacinas ? 'Esconder vacinas' : 'Ver vacinas'}
                        </p>
                    </div>
                </div>
                {showVacinas && (
                    <div className='p-8 md:flex md:justify-center md:items-center md:gap-8 w-full mt-4'>
                        <ServicosAgendamento
                            servico="Vacina 1"
                            preco="49,90"
                            isSelected={selectedServico === 'Vacina 1'}
                            onSelect={() => handleSelectServico('Vacina 1')}
                        />
                        <ServicosAgendamento
                            servico="Vacina 2"
                            preco="59,90"
                            isSelected={selectedServico === 'Vacina 2'}
                            onSelect={() => handleSelectServico('Vacina 2')}
                        />
                        <ServicosAgendamento
                            servico="Vacina 3"
                            preco="69,90"
                            isSelected={selectedServico === 'Vacina 3'}
                            onSelect={() => handleSelectServico('Vacina 3')}
                        />
                        <ServicosAgendamento
                            servico="Vacina 4"
                            preco="69,90"
                            isSelected={selectedServico === 'Vacina 4'}
                            onSelect={() => handleSelectServico('Vacina 4')}
                        />
                    </div>
                )}
            </section>
        </main>
    );
}
