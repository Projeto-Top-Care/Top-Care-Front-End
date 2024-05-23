import { Cupom } from '@/types/usuarios'
import { CiDiscount1 } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegTrashCan } from "react-icons/fa6";
import React, { Dispatch, SetStateAction } from 'react'

interface ICupom {
  cupom: Cupom
  deleteCupom: Dispatch<SetStateAction<Cupom | undefined>>
}

export default function CupomPequeno({ cupom, deleteCupom }: ICupom) {
  return (
    <div className='flex flex-row justify-between border-cinza border bg-branco h-10 items-center mt-2 px-2 rounded-lg'>
      <div className='flex flex-row items-center gap-2 font-poppins text-sm'>
        <div>{cupom.tipo == 'frete' ? <TbTruckDelivery size={25} color={'#37BC2C'} /> : <CiDiscount1 size={25} color={'#37BC2C'} />}</div>
        <p className='lg:!flex hidden'>Cupom "{cupom.nome}"" aplicado!</p>
        <p className='lg:hidden flex'>{cupom.nome}</p>
      </div>
      <button onClick={()=>deleteCupom(undefined)}><FaRegTrashCan color='#E94444'/></button>
    </div>
  )
}
