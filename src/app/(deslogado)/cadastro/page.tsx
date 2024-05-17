'use client'
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import InputFile from '@/components/InputFile/InputFile'
import InputText from '@/components/InputText/InputText'
import MoldeInput from '@/components/MoldeInput'
import CadastroPet from '@/components/Pop-up/CadastroPet/CadastroPet'
import ResponsiveInput from '@/components/ResponsiveInput'
import Select from '@/components/Select/Select'
import React, { useState } from 'react'

export default function Cadastro() {
    const [open, setOpen] = useState<boolean>(false)
    const [sexo, setSexo] = useState<string>('');
    const [estado, setEstado] = useState<string>('');
    return (
        <main className={`w-full overflow-hidden`}>
            <section className='w-[90%] m-auto mt-10 md:w-full'>
                <h1 className='font-averia text-center text-2xl font-bold'>Faça o cadastro e entre para a família Top Care!</h1>
            </section>
            <section className='flex flex-col justify-center items-center mt-12 gap-20 lg:flex-row lg:gap-10'>
                <section className='flex flex-col justify-center md:gap-8 gap-5'>
                    <div className='flex md:flex-row flex-col gap-5 md:gap-8'>
                        <div className='md:w-72 w-[90%] m-auto gap-3 flex items-center justify-center'>
                            <div className='w-32 h-16 md:w-44 md:h-32'>
                                <InputFile rounded='rounded-lg' />
                            </div>
                            <div className='md:hidden'>
                                <p className='font-poppins text-sm text-cinza-escuro'>Adicione uma foto para seu perfil.</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 w-[90%] m-auto md:gap-8 md:w-72'>
                            <ResponsiveInput>
                                <InputText placeholder='Nome Completo' />
                            </ResponsiveInput>
                            <ResponsiveInput>
                                <InputText placeholder='Data de Nascimento' />
                            </ResponsiveInput>
                        </div>
                    </div>
                    <MoldeInput>
                        <ResponsiveInput>
                            <InputText placeholder='Email' type={'text'} />
                        </ResponsiveInput>
                        <ResponsiveInput>
                            <InputText placeholder='Telefone' type={'tel'} />
                        </ResponsiveInput>
                    </MoldeInput>
                    <MoldeInput>
                        <ResponsiveInput>
                            <InputText placeholder='CPF' type={'text'} />
                        </ResponsiveInput>
                        <ResponsiveInput>
                            <Select label='Sexo' options={['', 'Masculino', 'Feminino', 'Prefiro não Informar']} opcaoSelecionada={setSexo} />
                        </ResponsiveInput>
                    </MoldeInput>
                    <MoldeInput>
                        <ResponsiveInput>
                            <InputText placeholder='Senha' type={'password'} />
                        </ResponsiveInput>
                        <ResponsiveInput>
                            <InputText placeholder='Confirmar Senha' type={'password'} />
                        </ResponsiveInput>
                        <div className='w-72 ml-4 flex gap-5 absolute mt-28 md:mt-12'>
                            <div>
                                <p className='list-item font-poppins text-[0.6rem]'>Letra maiúscula e minúscula</p>
                                <p className='list-item font-poppins text-[0.6rem]'>1 caractere especial(@#!)</p>
                            </div>
                            <div>
                                <p className='list-item font-poppins text-[0.6rem]'>Mínimo 8 caracteres   </p>
                                <p className='list-item font-poppins text-[0.6rem]'>Números</p>
                            </div>
                        </div>
                    </MoldeInput>
                </section>
                <section className='w-80 flex flex-col gap-2'>
                    <div className='max-sm:hidden'>
                        <img src="./assets/imagemCadastro.svg" alt="" />
                    </div>
                    <div className='flex flex-col w-[90%] m-auto text-center md:gap-2 md:w-full'>
                        <h1 className='font-poppins font-medium'>Gostaria de cadastrar um Pet?</h1>
                        <p className='font-poppins text-sm'>Cadastre aqui pra ele não perder nenhuma oportunidade! É rapidinho!</p>
                    </div>
                    <div className='md:w-full w-[90%] m-auto' onClick={() => setOpen(true)}>
                        <BotaoGrande title='Cadastrar Pet' background='bg-primaria' type={'button'} />
                    </div>

                </section>
            </section>
            <section>
                <div className='border-t border-cinza mt-12 md:mt-20 w-[75%] m-auto lg:mt-32'></div>
            </section>
            <section className='flex justify-center mt-8'>
                <h1 className='font-averia font-bold text-2xl'>Endereço</h1>
            </section>
            <section className=' md:mt-16 mt-10 flex flex-col items-center gap-5 lg:gap-8'>
                <section className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-5 lg:gap-8 lg:m-auto lg:flex-row'>
                        <MoldeInput>
                            <ResponsiveInput>
                                <InputText placeholder='CEP' type={'number'} />
                            </ResponsiveInput>
                            <ResponsiveInput>
                                <Select label='Estado' options={['', 'SC', 'SP', 'MG', 'RJ']} opcaoSelecionada={setEstado} />
                            </ResponsiveInput>
                        </MoldeInput>
                        <MoldeInput>
                            <ResponsiveInput>
                                <InputText placeholder='Cidade' type={'text'} />
                            </ResponsiveInput>
                            <ResponsiveInput>
                                <InputText placeholder='Bairro' type={'text'} />
                            </ResponsiveInput>
                        </MoldeInput>
                    </div>
                </section>
                <section className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-5 lg:gap-8 lg:m-auto lg:flex-row'>
                        <MoldeInput>
                            <ResponsiveInput>
                                <InputText placeholder='Rua' type={'text'} />
                            </ResponsiveInput>
                            <ResponsiveInput>
                                <InputText placeholder='Número' type={'number'} />    
                            </ResponsiveInput>
                        </MoldeInput>
                        <MoldeInput>
                            <ResponsiveInput>
                                <InputText placeholder='Complemento' type={'text'} />
                            </ResponsiveInput>
                            <ResponsiveInput>
                                <InputText placeholder='Nome para o Endereço' type={'text'} />
                            </ResponsiveInput>
                        </MoldeInput>
                    </div>
                </section>
            </section>
            <section className='w-full flex justify-center items-center mt-14 mb-14'>
                <div className='w-52'>
                    <BotaoGrande background='bg-terciaria' title='Cadastrar' type={'button'} />
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