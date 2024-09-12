'use client'
import React, { SetStateAction, use, useEffect, useState } from 'react';
import LocalAgendamento from '@/components/LocalAgendamento/LocalAgendamento';
import { Filial } from '@/types/servicos';
import { getFiliais } from '@/server/servicos/action';

interface ILocal {
    setLocal: React.Dispatch<SetStateAction<Filial | undefined>>
    local: Filial | undefined
}

const EscolhaLocal = ({ setLocal, local }: ILocal) => {

    const [filiais, setFiliais] = useState<Filial[]>([])

    useEffect(() => {
        const func = async () => {
            const response = await getFiliais()
            setFiliais(response)
        }
        func()
    }, [])

    return (
        <main className='p-8'>
            <div className="mt-8 sm:mt-12 w-full flex flex-col gap-6 sm:gap-12">
                <div className='flex items-center justify-center'>
                    <p className='font-poppins text-preto font-medium text-xl text-center'>Selecione um local para o agendamento</p>
                </div>
                <div className='lg:flex lg:justify-center lg:items-center flex-wrap grid md:grid-cols-2 gap-8 mt-12'>
                    {
                        filiais.map((item, i) => (
                            <LocalAgendamento
                                nomeFilial={item.nome}
                                rua={item.endereco.rua + " " + item.endereco.numero}
                                isSelected={item.nome === local?.nome}
                                onSelect={() => setLocal(item)}
                            />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default EscolhaLocal;