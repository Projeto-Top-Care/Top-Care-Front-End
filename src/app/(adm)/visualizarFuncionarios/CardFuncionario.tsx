import React from 'react'
import { IoIosLogOut } from 'react-icons/io'

interface ICardFuncionario {
    nome: string
    cadastro: string
    cpf: string,
    email:string
}

export default function CardFuncionario({ nome, cadastro, cpf, email }: ICardFuncionario) {
    return (
        <div className="flex flex-row items-center border-preto border rounded-xl p-2 w-full relative">
            <div className="flex items-center w-2/5">
                <img className="object-cover rounded-lg size-28" src="./assets/dognagrama.png" />
            </div>
            <div className='w-3/5'>
                <p className='line-clamp-1 text-preto text-base'>{nome}</p>
                <p className='line-clamp-1 text-preto text-sm font-semibold'>Cadastro: {cadastro.toString().padStart(4, '0')}</p>
                <p className='line-clamp-1 text-preto text-sm'>{cpf}</p>
                <p className='line-clamp-1 text-preto text-sm'>{email}</p>
            </div>
            <div className='bg-secundaria absolute -bottom-2 -right-2 rounded-full p-2 text-xl overflow-hidden'>
                <IoIosLogOut className='hover:scale-110 hover:translate-x-1 duration-100' />
            </div>
        </div>
    )
}