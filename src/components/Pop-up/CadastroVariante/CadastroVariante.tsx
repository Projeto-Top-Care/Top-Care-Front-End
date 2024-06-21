import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import InputText from '@/components/InputMask/InputMask'
import React from 'react'

export default function CadastroVariante() {
  return (
    <div className='absolute'>
        <div></div>
        <div className='w-[60%] h-32 bg-terciaria'>
            <div className='mt-2'>
                <h1 className='font-averia font-extrabold text-preto'>Criar Variação</h1>
            </div>
            <div className='mt-3 flex flex-row gap-2'>
                <InputText placeholder='Variação*' />
                <InputText placeholder='Tipo*' />
                <InputText placeholder='Preço*' type={'number'}/>
            </div>
            <div className='flex flex-row justify-between'>
                <div className='w-[40%]'>
                    <BotaoGrande background='bg-secundaria' title='Finalizar' type='button'/>
                </div>
                <div className='w-[40%]'>
                    <BotaoGrande background='bg-error' title='Cancelar' type='button'/>
                </div>
            </div>
        </div>
    </div>
  )
}
