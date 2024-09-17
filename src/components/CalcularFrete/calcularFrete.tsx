'use client'
import BotaoGrande from '@/components/Botoes/BotaoGrande/BotaoGrande'
import InputMask from '@/components/InputMask/InputMask'
import { Cupom } from '@/types/usuarios'
import { useRouter } from 'next/navigation'

import React, { SetStateAction, useEffect, useState } from 'react'

interface InterfaceFrete {
    setFrete?: React.Dispatch<SetStateAction<number | string>>
    setInexistente: React.Dispatch<SetStateAction<boolean>>
    setErro: React.Dispatch<SetStateAction<boolean>>
}

export default function CalcularFrete({ setFrete, setInexistente, setErro}: InterfaceFrete) {

  const [cep, setCep] = useState<string>('')
  const [erro, setError] = useState<boolean>(false)
  const [cepInexistente, setCepInexistente] = useState<boolean>(false)

  const enviarFrete = () => {
    if (cep.length !== 9) {
        setErro(true)
        setError(true)
        return
      } else if (cep == '11111-111') {
        setInexistente(true)
        setCepInexistente(true)
        return
      }
      setErro(false)
      setError(false)
      setFrete!(34)
  }

  useEffect(() => {
    if (cep.length != 9) {
      setFrete!(0)
      setInexistente(false)
      setCepInexistente(false)
      setErro(false)
      setError(false)
    }
  }, [cep])

  return (
    <main className='text-preto'>
            <div className='mt-2'>
              <p className='font-poppins font-medium'>Calcular Frete</p>
              <p className='font-poppins font-regular text-xs md:!flex hidden'>Infrorme seu CEP</p>
              <div className='flex lg:flex-row flex-col lg:gap-0 gap-3 justify-between lg:mt-0 mt-2'>
                <div className='lg:w-[60%] w-full'><InputMask title='_____-___' mask='_____-___' replacement={{ _: /\d/ }} onMasks={(e: any) => setCep(e.target.value)} /></div>
                <div className='lg:w-[32%] w-full' onClick={() => enviarFrete()}><BotaoGrande title='Calcular' type='button' background='secundaria' size='lg:h-10 h-8' /></div>
              </div>
              {
                erro && (
                  <span className='absolute font-poppins text-error text-sm'>Digite todos os número de um CEP</span>
                ) ||
                cepInexistente && (
                  <span className='absolute font-poppins text-error text-sm'>O CEP informado não existe!</span>
                )
              }
            </div>
    </main>
  )
}
