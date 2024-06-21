'use client'
import React, { SetStateAction, useEffect, useState } from 'react';
import ServicosAgendamento from '../ServicosAgendamento/ServicosAgendamento';
import { Precos, Servico } from '@/types/servicos'
import servicos from '@/banco/servicos.json'
import { FiPlus, FiMinus } from "react-icons/fi";
import { buscarPrecos, buscarServico } from '@/server/servicos/action';

interface IServico {
    setServicoEscolhido: React.Dispatch<SetStateAction<string>>
}

const EscolhaServico = ({ setServicoEscolhido }: IServico) => {

    const [selectedServico, setSelectedServico] = useState<string>('');
    const [showVacinas, setShowVacinas] = useState<boolean>(false);

    const vacinas: Precos[] = buscarPrecos(4)!

    useEffect(() => {
        setServicoEscolhido(selectedServico)
    }, [selectedServico])

    const handleSelectServico = (servico: string) => {
        setSelectedServico(servico);
    };

    return (
        <main className='p-8'>
            <div className="mt-8 sm:mt-12 w-full flex flex-col gap-6 sm:gap-12">
                <div className='flex items-center justify-center'>
                    <p className='font-poppins text-preto font-medium text-xl text-center'>Selecione um serviço para o agendamento</p>
                </div>
                <div className='lg:flex grid md:grid-cols-2 lg:justify-center lg:items-center gap-4 sm:gap-8 w-full mt-8'>
                    {
                        servicos.map((item, i) => (
                            (item.nome == "Vacinação" ?
                                <></>
                                :
                                <ServicosAgendamento
                                    servico={item.nome}
                                    preco={102.5}
                                    isSelected={selectedServico === item.nome}
                                    onSelect={() => handleSelectServico(item.nome)}
                                />
                            )))
                    }

                    <div className='flex items-center justify-center flex-col cursor-pointer md:w-[10%] w-full' onClick={() => setShowVacinas(!showVacinas)}>
                        <div className='p-3 rounded-full bg-terciaria'>
                            {showVacinas ? <FiMinus size={20} /> : <FiPlus size={20} />}
                        </div>
                        <p className='font-poppins text-preto text-sm text-center select-none'>
                            {showVacinas ? 'Esconder vacinas' : 'Ver vacinas'}
                        </p>
                    </div>
                </div>

                {/* <div className={`transition-all lg:flex grid md:grid-cols-2 lg:justify-center lg:items-center gap-8 w-full mt-8 ${showVacinas ? `opacity-100 visible` : `opacity-0 invisible`}`}>
                    {
                        vacinas.map((item, i) => (
                            <ServicosAgendamento
                                servico={item.tipo}
                                preco={item.preco}
                                isSelected={selectedServico === item.tipo}
                                onSelect={() => handleSelectServico(item.tipo)}
                            />
                        ))
                    }
                </div> */}
                {showVacinas && (
                    <div className='lg:flex grid md:grid-cols-2 lg:justify-center lg:items-center gap-8 w-full mt-8'>
                        {
                            vacinas.map((item, i) => (
                                <ServicosAgendamento
                                    servico={item.tipo}
                                    preco={item.preco}
                                    isSelected={selectedServico === item.tipo}
                                    onSelect={() => handleSelectServico(item.tipo)}
                                />
                            ))
                        }
                    </div>
                )}
            </div>
        </main>
    )
}

export default EscolhaServico;