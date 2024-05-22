import React from 'react'

interface PalavraFiltro{
  palavra: string
}

export default function PalavraFiltro({palavra}: PalavraFiltro) {
  return (
    <label className='font-poppins'>{palavra}</label>
  )
}
