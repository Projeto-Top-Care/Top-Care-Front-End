import React from 'react'

interface Topico{
    topico: string,
    preco: number | undefined
}

export default function Topico({topico, preco}: Topico) {
  return (
    <div className='flex items-center justify-between my-3'>
        <p className='font-poppins font-medium'>{topico}</p>
        <p className='font-poppins font-regular'>R${preco}</p>
    </div>
  )
}
