'use client'
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import InputText from '@/components/InputText/InputText'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { useRouter } from 'next/navigation'
import {login } from '@/server/usuario/action'
import React from 'react'
import Erro from '@/components/Pop-up/Erro/Erro'
import { useError } from '@/context/ErrorContext'
import { useUserID } from '@/context/UserIDContext'
import { useConfirmacao } from '@/context/confirmacaoContext'
import Confirmacao from '@/components/Pop-up/Confirmacao/Confirmacao'

export default function Login() {
    const router = useRouter();
    const { addError } = useError();
    const {addConfirmacao} = useConfirmacao()
    const { setUserId } = useUserID()

    const verificarLogin = async (e: FormData) => {
        const loginObject = Object.fromEntries(e)
        
        try {
            const authLogin = await login(loginObject)
            if (authLogin) {
                router.replace("/")
                setUserId(authLogin.id)
                addConfirmacao("Login efetuado com sucesso!")
            }
        } catch (error) {
            addError("Credenciais inválidas")
        }
    }

    return (
        <main className='bg-branco flex flex-col gap-12'>
            <Erro />
            <Confirmacao/>
            <section className=''>
                <TituloLinha voltar={true} titulo='Login' />
            </section>
            <section className='flex flex-col justify-center items-center w-full gap-16 mb-20 md:mb-24 lg:mb-32 md:gap-20 lg:flex-row lg:gap-28 lg:my-8'>
                <section className='flex items-end h-full max-lg:w-full'>
                    <form action={verificarLogin} className=' w-[90%] m-auto flex flex-col gap-8 md:w-[70%] lg:w-80 lg:m-0'>
                        <InputText placeholder='Email' name='email' />
                        <div className='flex flex-col gap-2'>
                            <InputText type={'password'} placeholder='Senha' name='senha' />
                            <p onClick={() => router.push('/recuperacaoSenhaDeslogado')} className='underline text-cinza-escuro font-poppins text-xs select-none cursor-pointer w-36 mb-4'>Esqueçeu sua senha?</p>
                            <BotaoGrande
                                title='Login'
                                background='bg-terciaria'
                                type={'submit'}
                            />
                        </div>
                    </form>
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
                    <div className='w-full mt-6' onClick={() => router.push('/cadastro')}>
                        <BotaoGrande title='Cadastrar' background='bg-terciaria' type={'button'} />
                    </div>
                </section>
            </section>
        </main>
    )
}
