'use client'
import React, { SetStateAction, useEffect, useState } from 'react';
import ServicosAgendamento from '../ServicosAgendamento/ServicosAgendamento';
import { VariantesProps, Servico } from '@/types/servicos'
import { FiPlus, FiMinus } from "react-icons/fi";
import { buscarPet } from '@/server/usuario/pet';
import { set } from 'zod';

interface IServico {
    setServicoEscolhido: React.Dispatch<SetStateAction<Servico | undefined>>
    petId: number | undefined
    servicoSelecionado?: Servico
    variante?: VariantesProps
    setVariante: React.Dispatch<SetStateAction<VariantesProps | undefined>>
}

const EscolhaServico = ({ setServicoEscolhido, petId, servicoSelecionado, variante, setVariante }: IServico) => {

    const [servicos, setServicos] = useState<Servico[]>([]);

    const getPet = async () => {
        if (petId) {
            const response: any = await buscarPet(petId)
            setServicos(response.especie.servicos);
        }
    }

    useEffect(() => {
        getPet()
    }, [])


    return (
        <main className='p-8'>
            <div className="mt-8 sm:mt-12 w-full flex flex-col gap-6 sm:gap-12">
                <div className='flex items-center justify-center'>
                    <p className='font-poppins text-preto font-medium text-xl text-center'>Selecione um serviço para o agendamento</p>
                </div>
                <div className='flex w-[60%] mx-auto justify-center flex-wrap gap-4 sm:gap-8 mt-8'>
                    {
                        servicos.map((item, i) => (
                            <ServicosAgendamento
                                servico={item}
                                selecionada={variante}
                                setSelecionada={setVariante}
                                isSelected={servicoSelecionado?.nome === item.nome}
                                onSelect={() => {
                                    setVariante(undefined)
                                    setServicoEscolhido(item)
                                }}
                            />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default EscolhaServico;