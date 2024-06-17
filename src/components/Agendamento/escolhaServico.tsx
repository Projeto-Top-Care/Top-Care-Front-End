'use client'
import React, { useState } from 'react';
import ServicosAgendamento from '../ServicosAgendamento/ServicosAgendamento';
import { FiPlus, FiMinus } from "react-icons/fi";

const EscolhaServico = () => {

    const [selectedServico, setSelectedServico] = useState<string>('Consulta');
    const [showVacinas, setShowVacinas] = useState<boolean>(false);

    const handleSelectServico = (servico: string) => {
        setSelectedServico(servico);
    };

    const toggleVacinas = () => {
        setShowVacinas(!showVacinas);
    };


    return (
        <main className='p-8'>
            <div className="mt-12 w-full flex flex-col gap-12">
                <div className='flex items-center justify-center'>
                    <p className='font-poppins text-preto font-medium text-xl text-center'>Selecione uma data para o agendamento</p>
                </div>
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
            </div>
        </main>
    )
}

export default EscolhaServico;