'use client'
import InputData from '@/components/InputData/InputData';
import React, { SetStateAction, useEffect, useState } from 'react';
import HorarioAgendamento from '../HorarioAgendamento/HorarioAgendamento';

interface IData{
    setDataSelecionada: React.Dispatch<SetStateAction<string>>
    setHoraSelecionada: React.Dispatch<SetStateAction<string>>
    setProfissionalSelecionada: React.Dispatch<SetStateAction<string>>
}

export default function EscolhaData({setDataSelecionada, setHoraSelecionada, setProfissionalSelecionada}: IData) {

    const [data, setData] = useState<string>("");
    const [hora, setHora] = useState<string>("");
    const [profissional, setProfissional] = useState<string>("");

    const handleSelect = (hora: string, profissional: string) => {
        setHora(hora);
        setProfissional(profissional);
    };

    useEffect(() => {
        setDataSelecionada(data)
        setHoraSelecionada(hora)
        setProfissionalSelecionada(profissional)
    }, [data, hora, profissional])

    return (
        <main className='p-2 sm:p-8 w-full'>
            <div className="mt-8 sm:mt-12 w-full flex flex-col gap-6 sm:gap-12">
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center'>
                        <p className='font-poppins text-preto font-medium text-xl text-center'>Escolha a data, horário e profissional desejado</p>
                    </div>
                    <div className='w-full sm:w-[30%] mt-8'>
                        <InputData dataSelecionada={setData} />
                    </div>
                </div>
                {
                    data !== '' &&(
                        <div className='flex flex-col gap-4 sm:gap-8 mt-4 sm:mt-8'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <p className='text-preto font-poppins text-md sm:text-lg'>Doutora Kamila Fagundes</p>
                        </div>
                        <div className='sm:flex grid grid-cols-4 gap-4 justify-start items-start'>
                            <div className=''>
                                <HorarioAgendamento horario='09:30'
                                    isSelected={hora === '09:30'}
                                    onSelect={() => handleSelect('09:30', "Doutora Kamila Fagundes")}
                                />
                            </div>
                            <div className=''>
                                <HorarioAgendamento horario='11:30'
                                    isSelected={hora === '11:30'}
                                    onSelect={() => handleSelect('11:30', "Doutora Kamila Fagundes")}
                                />
                            </div>
                            <div className=''>
                                <HorarioAgendamento horario='15:30'
                                    isSelected={hora === '15:30'}
                                    onSelect={() => handleSelect('15:30', "Doutora Kamila Fagundes")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="border border-cinza-claro w-full"></div>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <p className='text-preto font-poppins text-md sm:text-lg'>Doutor Flávio Almeida</p>
                        </div>
                        <div className='sm:flex grid grid-cols-4 gap-4 justify-start items-start'>
                            <div className=''>
                                <HorarioAgendamento horario='07:30'
                                    isSelected={hora === '07:30'}
                                    onSelect={() => handleSelect('07:30', "Doutor Flávio Almeida")}
                                />
                            </div>
                            <div className=''>
                                <HorarioAgendamento horario='09:00'
                                    isSelected={hora === '09:00'}
                                    onSelect={() => handleSelect('09:00', "Doutor Flávio Almeida")}
                                />
                            </div>
                            <div className=''>
                                <HorarioAgendamento horario='10:30'
                                    isSelected={hora === '10:30'}
                                    onSelect={() => handleSelect('10:30', "Doutor Flávio Almeida")}
                                />
                            </div>
                            <div className=''>
                                <HorarioAgendamento horario='13:00'
                                    isSelected={hora === '13:00'}
                                    onSelect={() => handleSelect('13:00', "Doutor Flávio Almeida")}
                                />
                            </div>
                            <div className=''>
                                <HorarioAgendamento horario='14:30'
                                    isSelected={hora === '14:30'}
                                    onSelect={() => handleSelect('14:30', "Doutor Flávio Almeida")}
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