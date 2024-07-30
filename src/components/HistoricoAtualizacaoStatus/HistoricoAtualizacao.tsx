import React from 'react'

interface IInputPreenchido {
    data: string
    status: string
    responsavel: string
}

export default function HistoricoAtualizacaoStatus({ data, status, responsavel }: IInputPreenchido) {
    return (
        <section className='flex flex-col w-full font-poppins text-preto'>
            <p className='font-semibold text-sm'>Dia {data}</p>
            <p className='text-normal text-cinza-escuro text-sm'>{status}</p>
            <p className='text-normal text-cinza-escuro text-sm'>Responsável: {responsavel}</p>
        </section>
    )
}