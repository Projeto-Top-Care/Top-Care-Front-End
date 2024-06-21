import React from 'react'

interface CardProps{
    src: string
    servico: string
}

export default function Card({src, servico}: CardProps) {
  return (
    <div className='flex flex-col w-full h-44 md:h-72 border mb-4 border-preto rounded-xl'>
        <div className='w-[90%] h-[60%] mx-auto my-3'>
            <img src={src} alt="imagem de um animal" className='rounded-xl'/>
        </div>
        <div className='flex justify-center my-0 md:my-auto font-poppins text-lg md:text-2xl'>
            <p>{servico}</p>
        </div>
    </div>
  )
}
