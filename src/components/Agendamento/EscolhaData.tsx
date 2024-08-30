'use client'
import InputData from '@/components/InputData/InputData';
import React, { SetStateAction, useEffect, useState } from 'react';
import HorarioAgendamento from '../HorarioAgendamento/HorarioAgendamento';
import { getHorariosPorDia } from '@/server/servicos/action';
import { Horario } from '@/app/(logado)/agendamento/page';
import { formatarHora } from '@/utils/data';

interface IData {
    setHorario: React.Dispatch<SetStateAction<Horario | undefined>>
    setProfissional: React.Dispatch<SetStateAction<Profissional | undefined>>
    horario: Horario | undefined
    profissional: Profissional | undefined
    servicoId: string
}

export interface Profissional {
    id: number
    nome: string
    horarios: Horario[]
}

export default function EscolhaData({ setHorario, setProfissional, horario, servicoId }: IData) {

    const [profissionais, setProfissionais] = useState<Profissional[]>([]);
    const [data, setData] = useState<string>('');

    const setar = (hora: Horario, profissional: Profissional) => {
        setHorario(hora);
        setProfissional(profissional);
    }

    useEffect(() => {
        const func = async () => {
            if (data != '') {
                const dataA = data.split("/").reverse().join("-")
                const response = await getHorariosPorDia(servicoId, dataA)
                setProfissionais(response)
            }
        }
        func()
    }, [data])


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
                    data !== '' && (
                        <div className='flex flex-col gap-4 sm:gap-8 mt-4 sm:mt-8'>

                            {
                                profissionais.map((profissional, i) => (
                                    <div className='flex flex-col gap-4' key={i}>
                                        <div>
                                            <p className='text-preto font-poppins text-md sm:text-lg'>{profissional.nome}</p>
                                        </div>
                                        <div className='sm:flex grid grid-cols-4 gap-4 justify-start items-start'>
                                            {
                                                profissional.horarios.map((horario1, i) => (
                                                    <div className=''>
                                                        <HorarioAgendamento horario={formatarHora(horario1.horaInicio)}
                                                            isSelected={horario1.horaInicio === horario?.horaInicio.toString()}
                                                            onSelect={() => setar(horario1, profissional)}
                                                        />
                                                    </div>
                                                ))
                                            }

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </main>
    );
}