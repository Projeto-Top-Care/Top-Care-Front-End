'use client'
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import Checkbox from '@/components/Checkbox/Checkbox'
import InputFile from '@/components/InputFile/InputFile'
import InputText from '@/components/InputText/InputText'
import CadastroVariante from '@/components/Pop-up/CadastroVariante/CadastroVariante'
import TextArea from '@/components/TextArea/TextArea'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import VarianteServico from './VarianteServico'

const animais = ["Cachorro", "Gato", "Peixe", "Coelho", "Passáro", "Tartaruga"];

export default function CadastrarServico() {
    const [check, setCheck] = useState(false)
    const [openVariante, setOpenVariante] = useState<boolean>(false)
    const router = useRouter()

    return (
        <main className='w-[90%] mx-auto'>
            <section className='mt-16'>
                <div className='w-[10%]'>
                    <BotaoGrande title='Voltar' background='bg-secundaria' type='button' onClick={() => router.push('visualizarServicos')} />
                </div>
            </section>
            <section className='flex items-center justify-center'>
                <p className='font-averia font-semibold text-3xl'>Cadastre um serviço novo</p>
            </section>
            <section className='mt-10 border border-cinza-escuro rounded-xl h-full flex flex-row'>
                <section className='border-r border-r-cinza-escuro w-[55%] px-5'>
                    <div className='pt-6'>
                        <p className='font-averia text-2xl font-extrabold'>Informações básicas</p>
                    </div>
                    <form action="">
                        <div className='mt-6'>
                            <InputText placeholder='Nome do serviço*' />
                        </div>
                        <div className='mt-3'>
                            <TextArea placeholder='Descrição' height='h-32' />
                        </div>
                        <div className='mt-3'>
                            <InputText placeholder='Preço mínimo*' type={'number'} />
                        </div>
                        <div className='flex flex-row mt-3'>
                            <div className='flex flex-col items-center w-[50%]'>
                                <div className='w-full'>
                                    <InputText placeholder='Profissionais' />
                                </div>
                                <div className='mt-4 flex flex-col items-center'>
                                    <h1 className='font-averia font-extrabold text-lg text-center'>Imagem</h1>
                                    <div className='w-24 h-24'>
                                        <InputFile rounded='rounded-lg' />
                                    </div>
                                    <p className='font-poppins text-sm text-center mt-1'>Imagem Princípal</p>
                                </div>
                            </div>
                            <div className='ml-8 mb-4'>
                                <h1 className='font-poppins text-sm text-cinza-escuro mb-2'>Pet(s)*</h1>
                                {
                                    animais.map((animal) => (
                                        <div key={animal} className={'flex flex-row mb-1'}>
                                            <Checkbox check={setCheck} />
                                            <label htmlFor="" className='font-poppins'>{animal}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </form>
                </section>
                <section className='w-[45%] px-5'>
                    <div className='pt-6'>
                        <p className='font-averia text-2xl font-extrabold'>Váriações de Serviços</p>
                    </div>
                    <div>
                        <VarianteServico tipo='Pequeno' variante='Porte' preco={89.99}/>
                    </div>
                    <div className='w-[40%] mt-8'>
                        <BotaoGrande title='Adicionar variação' type='button' background='bg-secundaria' onClick={()=>setOpenVariante(true)}/>
                    </div>
                </section>
            </section>
            <section className='flex flex-row justify-between items-center my-10'>
                <div className='w-48'>
                    <BotaoGrande background='bg-error' title='Cancelar' type='button' textColor='text-branco' />
                </div>
                <div className='w-60'>
                    <BotaoGrande background='bg-secundaria' title='Cadastrar Produto' type='button' />
                </div>
            </section>
            {
                openVariante && (
                    <CadastroVariante />
                )
            }
        </main>
    )
}
