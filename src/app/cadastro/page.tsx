'use client'
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import InputFile from '@/components/InputFile/InputFile'
import InputText from '@/components/InputText/InputText'
import CadastroPet from '@/components/Pop-up/CadastroPet/CadastroPet'
import Select from '@/components/Select/Select'
import React, { useState } from 'react'

export default function Cadastro() {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <main className={`w-full overflow-hidden`}>
            <section className='w-full flex items-center justify-center mt-10'>
                <h1 className='font-averia text-2xl font-bold'>Faça o cadastro e entre para a família Top Care!</h1>
            </section>
            <section className='flex flex-row w-[100%] items-center justify-center mt-12 gap-10'>
                <section className='flex flex-col items-center justify-center gap-8 w-72'>
                    <div className='w-44 h-32'>
                        <InputFile rounded='rounded-lg' />
                    </div>
                    <div className='w-72 flex flex-col gap-10 justify-end'>
                        <InputText placeholder='Email' type={'text'} />
                        <InputText placeholder='CPF' type={'text'} />
                        <div className='w-full'>
                            <InputText placeholder='Senha' type={'password'} />
                            <div className='w-72 ml-4 flex gap-5 absolute'>
                                <div>
                                    <p className='list-item font-poppins text-[0.6rem]'>Letra maiúscula e minúscula</p>
                                    <p className='list-item font-poppins text-[0.6rem]'>1 caractere especial(@#!)</p>
                                </div>
                                <div>
                                    <p className='list-item font-poppins text-[0.6rem]'>Mínimo 8 caracteres   </p>
                                    <p className='list-item font-poppins text-[0.6rem]'>Números</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='flex flex-col w-72 gap-10'>
                    <InputText placeholder='Nome Completo' />
                    <InputText placeholder='Data de Nascimento' />
                    <InputText placeholder='Telefone' type={'tel'} />
                    <Select label='Sexo' options={['', 'Masculino', 'Feminino', 'Prefiro não Informar']} />
                    <InputText placeholder='Confirmar Senha' type={'password'} />
                </section>
                <section className='w-80 flex flex-col gap-2'>
                    <div>
                        <img src="./assets/imagemCadastro.svg" alt="" />
                    </div>
                    <div className='flex flex-col text-center gap-2'>
                        <h1 className='font-poppins font-medium'>Gostaria de cadastrar um Pet?</h1>
                        <p className='font-poppins text-sm'>Cadastre aqui pra ele não perder nenhuma oportunidade! É rapidinho!</p>
                    </div>
                    <div className='w-full' onClick={() => setOpen(true)}>
                        <BotaoGrande title='Cadastrar Pet' background='bg-primaria' />
                    </div>

                </section>
            </section>
            <section>
                <div className='border-t border-cinza mt-32 w-[75%] m-auto'></div>
            </section>
            <section className='flex justify-center mt-8'>
                <h1 className='font-averia font-bold text-2xl'>Endereço</h1>
            </section>
            <section className='mt-16 flex flex-col gap-8'>
                <section className='flex flex-row gap-5 w-[75%] m-auto'>
                    <div className='w-64'>
                        <InputText placeholder='CEP' type={'number'} />
                    </div>
                    <div className='w-64'>
                        <Select label='Estado' options={['', 'SC', 'SP', 'MG', 'RJ']} />
                    </div>
                    <div className='w-64'>
                        <InputText placeholder='Cidade' type={'text'} />
                    </div>
                    <div className='w-64'>
                        <InputText placeholder='Bairro' type={'text'} />
                    </div>
                </section>
                <section className='flex flex-row gap-5 w-[75%] m-auto'>
                    <div className='w-64'>
                        <InputText placeholder='Rua' type={'text'} />
                    </div>
                    <div className='w-64'>
                        <InputText placeholder='Número' type={'number'} />
                    </div>
                    <div className='w-64'>
                        <InputText placeholder='Complemento' type={'text'} />
                    </div>
                    <div className='w-64'>
                        <InputText placeholder='Nome para o Endereço' type={'text'} />
                    </div>
                </section>
            </section>
            <section className='w-full flex justify-center items-center mt-14 mb-14'>
                <div className='w-52'>
                    <BotaoGrande background='bg-terciaria' title='Cadastrar' />
                </div>
            </section>
            {open && (
                <div className='overflow-hidden'>
                    <div className='fixed top-0 left-0 w-full h-full z-50  bg-fundo-modal' onClick={() => setOpen(false)}></div>
                    <div className='fixed w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                        <CadastroPet setOpen={setOpen} />
                    </div>
                </div>
            )}
        </main>
    )
}
