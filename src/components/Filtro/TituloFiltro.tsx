import React from 'react'

interface TituloFiltro{
    titulo: string
}

export default function TituloFiltro({titulo}: TituloFiltro) {
  return (
    <div className='h-10 bg-secundaria flex items-center font-poppins font-regular pl-3'>
        <h1>{titulo}</h1>
    </div>
  )
}
