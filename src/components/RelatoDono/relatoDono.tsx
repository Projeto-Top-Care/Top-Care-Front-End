'use client'
import React, { SetStateAction, useState } from 'react'

interface IRelatoDono {
    src: string,
    descricao: string,
    nome: string
}


const RelatoDono = ({ src, descricao, nome }: IRelatoDono) => {

    return (
        <div className='md:flex grid justify-center md:gap-8 gap-4 w-full p-8 '>
            <img className="rounded-lg lg:w-65 md:w-80 md:h-60 lg:h-50 w-64 h-48 items-center shadow-md shadow-cinza-escuro" src={src} />
            <div className='flex flex-col lg:w-[55%] md:w-[45%] w-full md:gap-4 gap-2'>
                <p className='lg:text-lg md:text-base text-sm underline font-poppins text-black'>{nome}</p>
                <p className="lg:text-base md:text-sm text-xs font-poppins text-black">{descricao}</p>
            </div>
        </div>
    )
}

export default RelatoDono;