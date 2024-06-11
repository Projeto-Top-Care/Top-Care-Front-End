import { Cupom } from '@/types/usuarios'
import { CiDiscount1 } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import React, { Dispatch, SetStateAction } from 'react'

interface ICupons {
    cupons: Cupom[]
    setCupom: Dispatch<SetStateAction<Cupom | undefined>>
}

export default function Cupons({ cupons, setCupom }: ICupons) {

    const renderCupons = () => {
        if (cupons.length != 0) {
            return (
                cupons.map((cupom, i) => (
                    <div key={cupom.nome + i} className='flex flex-col justify-center gap-2 px-4 lg:min-h-16 md:min-h-28 min-h-20 hover:bg-gray-300' onClick={() => setCupom(cupom)}>
                        <div className='flex flex-row items-center'>
                            <div className='mr-2'>
                                {cupom.tipo == 'frete' ? <TbTruckDelivery size={25} color={'#37BC2C'} /> : <CiDiscount1 size={25} color={'#37BC2C'} />}
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex lg:flex-row flex-col font-poppins text-sm'>
                                    <p className='text-sm'>Cupom de {cupom.desconto} - </p>
                                    <p className='font-semibold text-sm'>{`"${cupom.nome}"`}</p>
                                </div>
                                <div>
                                    <p className='font-poppins text-xs'>Válido para compras {cupom.tipo == 'frete' ? `de até R$${cupom.limite}` : `a partir de R$${cupom.limite}`}</p>
                                </div>
                            </div>
                        </div>
                        {i == cupons.length - 1 ? <div></div> : <div className='border-b border-cinza h-[10%] w-full'></div>}
                    </div>
                ))
            )
        } else {
            return (
                <div className='w-full h-full flex justify-center items-center flex-col'>
                    <h1 className='font-poppins'>Você não tem cupons disponíveis!</h1>
                    <img src="assets/dog-sad.png" alt="" className='w-[40%]' />
                </div>
            )
        }
    }

    return (
        <div className='w-full min-h-32 h-48 max-h-48 bg-branco absolute rounded-lg mt-2 z-50 flex flex-col cursor-pointer overflow-auto scroll'>
            {
                renderCupons()
            }

        </div>
    )
}
