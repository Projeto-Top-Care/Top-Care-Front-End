import React from 'react'
import { IoIosLogOut } from 'react-icons/io'

interface ICardFuncionario {
    foto: string
    nome: string
    cadastro: string
    cpf: string,
    email:string
}

export default function CardFuncionario({ foto, nome, cadastro, cpf, email }: ICardFuncionario) {
    return (
        <div className="flex flex-row items-center border-preto border rounded-xl p-2 w-full relative gap-2">
            <div className="flex items-center sm:w-2/5 w-1/4 h-full">
                <img className="object-cover rounded-lg size-full" src={foto} />
            </div>
            <div className='sm:w-3/5 w-3/4'>
                <p className='line-clamp-1 text-preto text-sm sm:text-base'>{nome}</p>
                <p className='line-clamp-1 text-preto text-xs sm:text-sm font-semibold'>Cadastro: {cadastro.toString().padStart(4, '0')}</p>
                <p className='line-clamp-1 text-preto text-xs sm:text-sm'>{cpf}</p>
                <p className='line-clamp-1 text-preto text-xs sm:text-sm'>{email}</p>
            </div>
            <div className='bg-secundaria absolute -bottom-2 -right-2 rounded-full p-2 text-xl overflow-hidden'>
                <IoIosLogOut className='hover:scale-110 hover:translate-x-1 duration-100' />
            </div>
        </div>
    )
}