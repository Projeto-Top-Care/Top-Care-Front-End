'use client'
import InputData from '@/components/InputData/InputData';
import React, { useState } from 'react';
import HorarioAgendamento from '../HorarioAgendamento/HorarioAgendamento';

export default function EscolhaData() {

    const [data, setData] = useState<string>("");
    const [selectedLocal, setSelectedLocal] = useState<string>('');

    const handleSelectLocal = (servico: string) => {
        setSelectedLocal(servico);
    };

    return (
        <main className='p-8'>
            <div className="mt-12 w-full flex flex-col gap-12">
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center'>
                        <p className='font-poppins text-preto font-medium text-xl text-center'>Escolha a data, horário e profissional desejado</p>
                    </div>
                    <div className='w-[30%] mt-8'>
                        <InputData dataSelecionada={setData} />
                    </div>
                </div>
                {
                    data !== '' &&(
                        <div className='flex flex-col gap-8 mt-8'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <p className='text-preto font-poppins text-lg'>Doutora Kamila Fagundes</p>
                        </div>
                        <div className='flex gap-4 justify-start items-start'>
                            <div className=''>
                                <HorarioAgendamento horario='09:30'
                                    isSelected={selectedLocal === 'horario1'}
                                    onSelect={() => handleSelectLocal('horario1')}
                                />
                            </div>
                            <div className=''>
                                <HorarioAgendamento horario='11:30'
                                    isSelected={selectedLocal === 'horario2'}
                                    onSelect={() => handleSelectLocal('horario2')}
                                />
                            </div>
                            <div className=''>
                                <HorarioAgendamento horario='14:30'
                                    isSelected={selectedLocal === 'horario3'}
                                    onSelect={() => handleSelectLocal('horario3')}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="border border-cinza-claro"></div>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <p className='text-preto font-poppins text-lg'>Doutor Flávio Almeida</p>
                        </div>
                        <div className='flex gap-4 justify-start items-start'>
                            <div className=''>
                                <HorarioAgendamento horario='07:30'
                                    isSelected={selectedLocal === 'horario4'}
                                    onSelect={() => handleSelectLocal('horario4')}
                                />
                            </div>
                            <div className=''>
                                <HorarioAgendamento horario='09:00'
                                    isSelected={selectedLocal === 'horario5'}
                                    onSelect={() => handleSelectLocal('horario5')}
                                />
                            </div>
                            <div className=''>
                                <HorarioAgendamento horario='10:30'
                                    isSelected={selectedLocal === 'horario6'}
                                    onSelect={() => handleSelectLocal('horario6')}
                                />
                            </div>
                            <div className=''>
                                <HorarioAgendamento horario='13:00'
                                    isSelected={selectedLocal === 'horario7'}
                                    onSelect={() => handleSelectLocal('horario7')}
                                />
                            </div>
                            <div className=''>
                                <HorarioAgendamento horario='14:30'
                                    isSelected={selectedLocal === 'horario8'}
                                    onSelect={() => handleSelectLocal('horario8')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                    )
                }
            </div>
        </main>
    );
}