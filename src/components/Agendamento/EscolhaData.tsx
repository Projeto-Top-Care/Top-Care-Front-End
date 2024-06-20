'use client'
import InputData from '@/components/InputData/InputData';
import React, { useState } from 'react';
import HorarioAgendamento from '../HorarioAgendamento/HorarioAgendamento';

export default function EscolhaData() {

    const [data, setData] = useState<string>("");
    const [hora, setHora] = useState<string>("");
    const [profissional, setProfissional] = useState<string>("");

    const handleSelect = (hora: string, profissional: string) => {
        setHora(hora);
        setProfissional(profissional);
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
                                    isSelected={hora === 'horario1'}
                                    onSelect={() => handleSelect('horario1', "Doutora Kamila Fagundes")}
                                />
                            </div>
                            <div className=''>
                                <HorarioAgendamento horario='11:30'
                                    isSelected={hora === 'horario2'}
                                    onSelect={() => handleSelect('horario2', "Doutora Kamila Fagundes")}
                                />
                            </div>
                            <div className=''>
                                <HorarioAgendamento horario='14:30'
                                    isSelected={hora === 'horario3'}
                                    onSelect={() => handleSelect('horario3', "Doutora Kamila Fagundes")}
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
                                    isSelected={hora === 'horario4'}
                                    onSelect={() => handleSelect('horario4', "Doutor Flávio Almeida")}
                                />
                            </div>
                            <div className=''>
                                <HorarioAgendamento horario='09:00'
                                    isSelected={hora === 'horario5'}
                                    onSelect={() => handleSelect('horario5', "Doutor Flávio Almeida")}
                                />
                            </div>
                            <div className=''>
                                <HorarioAgendamento horario='10:30'
                                    isSelected={hora === 'horario6'}
                                    onSelect={() => handleSelect('horario6', "Doutor Flávio Almeida")}
                                />
                            </div>
                            <div className=''>
                                <HorarioAgendamento horario='13:00'
                                    isSelected={hora === 'horario7'}
                                    onSelect={() => handleSelect('horario7', "Doutor Flávio Almeida")}
                                />
                            </div>
                            <div className=''>
                                <HorarioAgendamento horario='14:30'
                                    isSelected={hora === 'horario8'}
                                    onSelect={() => handleSelect('horario8', "Doutor Flávio Almeida")}
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