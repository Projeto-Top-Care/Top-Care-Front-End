import React, { ButtonHTMLAttributes } from 'react'
import { IoClose } from 'react-icons/io5'
import { string } from 'zod'

export default function ButtonFiltro( props : ButtonHTMLAttributes<HTMLButtonElement> & {filtro: string }) {
  return (
    <button {...props} className={`text-sm sm:text-base h-9 text-cinza-escuro duration-200 hover:bg-terciaria flex flex-row items-center gap-1 sm:gap-2 ${props.filtro == props.title ? `text-[#405989] border-[#405989] bg-terciaria` : `text-cinza-escuro border-cinza bg-branco`} py-1 sm:px-6 px-3 border-[1px] border-cinza rounded-lg`}>{props.filtro == props.title ? <IoClose /> : ""}{props.title}</button>
  )
}
