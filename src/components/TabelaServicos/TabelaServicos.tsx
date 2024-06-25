'use client'
import VarianteServico from '@/app/(adm)/cadastrarServico/VarianteServico'
import { Servico, VariantesProps } from '@/types/servicos'
import React, { useState } from 'react'
import BotaoGrande from '../BotaoGrande/BotaoGrande'
import Checkbox from '../Checkbox/Checkbox'
import InputFile from '../InputFile/InputFile'
import InputText from '../InputText/InputText'
import CadastroVariante from '../Pop-up/CadastroVariante/CadastroVariante'
import TextArea from '../TextArea/TextArea'

const animais = ["Cachorro", "Gato", "Peixe", "Coelho", "Passáro", "Tartaruga"];

interface TabelaServicosProps{
    servico?: Servico
}

export default function TabelaServicos({servico}: TabelaServicosProps) {
    const [check, setCheck] = useState(false)
    const [openVariante, setOpenVariante] = useState<boolean>(false)
    const [variantes, setVariantes] = useState<VariantesProps[]>([])


    return (
        <section className='mt-10 border border-cinza-escuro rounded-xl h-full flex flex-row'>
            <section className='border-r border-r-cinza-escuro w-[55%] px-5'>
                <div className='pt-6'>
                    <p className='font-averia text-2xl font-extrabold'>Informações básicas</p>
                </div>
                <form action="">
                    <div className='mt-6'>
                        <InputText 
                        placeholder='Nome do serviço*'
                        value={servico?.nome}
                        />
                    </div>
                    <div className='mt-3'>
                        <TextArea 
                        placeholder='Descrição' 
                        height='h-32' 
                        value={servico?.descricao}
                        />
                    </div>
                    <div className='mt-3'>
                        <InputText 
                        placeholder='Preço mínimo*' 
                        type={'number'} 
                        value={servico?.precoInicial}
                        />
                    </div>
                    <div className='flex flex-row mt-3'>
                        <div className='flex flex-col items-center w-[50%]'>
                            <div className='w-full'>
                                <InputText placeholder='Profissionais' />
                            </div>
                            <div className='mt-4 flex flex-col items-center'>
                                <h1 className='font-averia font-extrabold text-lg text-center'>Imagem</h1>
                                <div className='w-24 h-24'>
                                    <InputFile rounded='rounded-lg'/>
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
                    {
                        variantes.map((variante)=>(
                            <VarianteServico tipo={variante.tipo} variante={variante.nome} preco={variante.preco} />
                        ))
                    }
                </div>
                <div className='w-[40%] mt-4'>
                    <BotaoGrande title='Adicionar variação' type='button' background='bg-secundaria' onClick={() => setOpenVariante(true)} />
                </div>
            </section>
            {
                openVariante && (
                    <CadastroVariante openModalProps={setOpenVariante} variantesProps={servico?.variantes} setVariantesProps={setVariantes}/>
                )
            }
        </section>
    )
}
