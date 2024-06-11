'use client'
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import InputText from '@/components/InputText/InputText'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { useRouter  } from 'next/navigation'
import { login } from '@/server/usuario/action'
import React, { useState } from 'react'
import Erro from '@/components/Pop-up/Erro/Erro'
import { useError } from '@/context/ErrorContext'
import { useUserID } from '@/context/UserIDContext'

export default function Login() {
    const router = useRouter();
    const {addError} = useError()!;
    const {setUserId} = useUserID()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const verificarLogin = () =>{
        let usuarioId = login(email, senha)
        if(usuarioId != undefined){
            setUserId(usuarioId)
            router.refresh()
        } else{
            addError("Falha no Login, verifique seu email e senha!")
        }
    }

    return (
        <main className='bg-branco'>
            <Erro />
            <section className='mt-8 md:mt-12'>
                <TituloLinha titulo='Login' />
            </section>
            <section className='flex flex-col justify-center items-center w-full gap-16 mt-11 mb-20 md:mt-11 md:mb-24 md:gap-20 lg:flex-row lg:gap-28 lg:my-24 '>
                <section className='flex items-end h-full max-lg:w-full'>
                    <div className='w-[90%] m-auto flex flex-col gap-8 md:w-[70%] lg:w-80 lg:m-0'>
                        <InputText onChange={(e) => setEmail(e.target.value)} type={'text'} placeholder='Email' />
                        <div className='flex flex-col gap-2'>
                            <InputText onChange={(e) => setSenha(e.target.value)} type={'password'} placeholder='Senha' />
                            <p onClick={() => router.push('/recuperacaoSenhaDeslogado')} className='underline text-cinza-escuro font-poppins text-xs select-none cursor-pointer w-36 mb-4'>Esqueçeu sua senha?</p>
                            <BotaoGrande 
                            title='Login' 
                            background='bg-terciaria' 
                            type={'button'} 
                            onClick={()=>verificarLogin()}/>
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
                    <div className='w-full mt-4' onClick={() => router.push('/cadastro')}>
                        <BotaoGrande title='Cadastrar' background='bg-terciaria' type={'button'} />
                    </div>
                </section>
            </section>
        </main>
    )
}
