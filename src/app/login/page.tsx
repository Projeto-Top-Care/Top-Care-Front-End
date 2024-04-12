import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import InputText from '@/components/InputText/InputText'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import React from 'react'

export default function Login() {
    return (
        <main className='bg-branco'>
            <section>
                <TituloLinha titulo='Login' />
            </section>
            <section className='flex items-center justify-center w-full gap-40 h-64'>
                <section className='flex items-end h-full'>
                    <div>
                        <div className='w-80 flex flex-col gap-5'>
                            <InputText type={'text'} placeholder='Email' />
                            <div className='flex flex-col gap-2'>
                                <InputText type={'password'} placeholder='Senha' />
                                <p className='underline text-cinza-escuro font-poppins text-xs select-none cursor-pointer w-36'>Esqueçeu sua senha?</p>
                            </div>
                            <BotaoGrande title='Avançar' background='bg-terciaria'/>
                        </div>
                    </div>
                </section>
                <section className='flex flex-col items-center justify-end w-80 h-full'>
                    <div className='w-[25%] mb-8'>
                        <img src="./assets/logo.png" alt="" />
                    </div>
                    <div className='text-center'>
                        <h3 className='font-poppins text-lg text-preto'>Não possui conta?</h3>
                        <p className='font-poppins text-sm mt-1 text-preto'>Aperte no botão abaixo para poder ficar ligado em todas as promoções e serviços.</p>
                    </div>
                    <div className='w-full mt-3'>
                        <BotaoGrande title='Cadastrar' background='bg-terciaria'/>
                    </div>
                </section>
            </section>
            <section className='w-ful mt-16'>
                <div className='flex flex-row items-center justify-center w-[60%] m-auto'>
                    <div className='border-t border-cinza w-full'></div>
                    <p className='font-poppins mx-4 text-cinza-escuro'>OU</p>
                    <div className='border-t border-cinza w-full'></div>
                </div>
            </section>
            <section className='flex items-center justify-center w-full h-48 select-none'>
                <div className='w-80 h-12 border border-cinza rounded-md'>
                    <div className='flex flex-row items-center justify-center h-12 cursor-pointer'>
                        <img src="./assets/google.svg" alt="" />
                        <p className='font-poppins ml-1'>Continuar com o Google</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
