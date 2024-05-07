'use client'
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import InputText from '@/components/InputText/InputText'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { useRouter  } from 'next/navigation'
import { login } from '@/server/usuario/action'
import React, { useState } from 'react'
import { number } from 'zod'
import { cookies } from 'next/headers'

export default function Login() {
    const {push} = useRouter();

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const verificarLogin = () =>{
        let usuarioId = login(email, senha)
        if(usuarioId != undefined){
            console.log("deu")
            localStorage.setItem("idUser", JSON.stringify(usuarioId))
            push('/')
        } else{
            console.log("não deu")
        }
    }

    return (
        <main className='bg-branco'>
            <section className='mt-11'>
                <TituloLinha titulo='Login' />
            </section>
            <section className='flex flex-col justify-center items-center w-full gap-16 my-20 lg:flex-row lg:gap-28 lg:my-24 md:gap-20'>
                <section className='flex items-end h-full max-lg:w-full'>
                    <div className='w-[90%] m-auto flex flex-col gap-8 md:w-[70%] lg:w-80 lg:m-0'>
                        <InputText onChange={(e) => setEmail(e.target.value)} type={'text'} placeholder='Email' />
                        <div className='flex flex-col gap-2'>
                            <InputText onChange={(e) => setSenha(e.target.value)} type={'password'} placeholder='Senha' />
                            <p className='underline text-cinza-escuro font-poppins text-xs select-none cursor-pointer w-36 mb-4'>Esqueçeu sua senha?</p>
                            <div onClick={() => verificarLogin()}>
                                <BotaoGrande title='Avançar' background='bg-terciaria' type={'button'} />
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className='flex flex-col items-center h-full w-[90%] m-auto md:w-[70%] lg:w-80 lg:m-0'>
                    <div className='w-[20%] mb-3'>
                        <img src="./assets/logo.png" alt="" />
                    </div>
                    <div className='text-center'>
                        <h3 className='font-poppins text-lg font-medium text-preto'>Não possui conta?</h3>
                        <p className='font-poppins text-sm mt-2 text-preto'>Aperte no botão abaixo para poder ficar ligado em todas as promoções e serviços.</p>
                    </div>
                    <div>
                    </div>
                    <div className='w-full mt-4'>
                        <BotaoGrande title='Cadastrar' background='bg-terciaria' type={'button'} />
                    </div>
                </section>
            </section>
        </main>
    )
}
