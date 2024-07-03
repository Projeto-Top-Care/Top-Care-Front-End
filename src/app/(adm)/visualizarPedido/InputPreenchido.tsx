import React from 'react'

interface IInputPreenchido {
    titulo: string,
    conteudo: string
}

export default function InputPreenchido({ titulo, conteudo }: IInputPreenchido) {
    return (
        <section className='flex flex-col w-full'>
            <div className=''>
                <p className='text-preto font-poppins font-bold text-base'>{titulo}</p>
            </div>
            <div className='flex border border-cinza rounded-md p-3 mt-1'>
                <p className='text-cinza-escuro font-poppins text-sm'>{conteudo}</p>
            </div>
        </section>
    )
}