'use client'
import VarianteServico from '@/app/(adm)/cadastrarServico/VarianteServico'
import { PetsProps, Servico, VariantesProps } from '@/types/servicos'
import React, { useEffect, useState } from 'react'
import InputFile from '../InputFile/InputFile'
import InputText from '../InputText/InputText'
import CadastroVariante from '../Pop-up/CadastroVariante/CadastroVariante'
import TextArea from '../TextArea/TextArea'
import { FiPlus } from "react-icons/fi";
import InputSelect from '../InputSelect/InputSelect'
import Select from '../Select/Select'
import { set } from 'zod'
import { getServico } from '@/server/servicos/action'

interface TabelaServicosProps {
    servicoID?: string
}

export default function TabelaServicos({ servicoID }: TabelaServicosProps) {
    const [openVariante, setOpenVariante] = useState<boolean>(false)
    const [servico, setServico] = useState<Servico>()

    const [variantes, setVariantes] = useState<VariantesProps[]>([])
    const [categoria, setCategoria] = useState<string>('');


    useEffect(()=>{
        const func = async () =>{
            const id = servicoID
            if(id){
                const servicoFetch = await getServico(servicoID)
                setServico(servicoFetch)
                setCategoria(servicoFetch.categoria)
                setVariantes(servicoFetch.variantes)
            }
        }   
        func()
    },[])



    return (
        <section className='border border-cinza-escuro rounded-xl h-full flex flex-col sm:flex-row'>
            <section className='md:border-r md:border-r-cinza-escuro w-full sm:w-[50%] px-5'>
                <div className='pt-6 flex md:items-start items-center'>
                    <p className='font-averia text-2xl font-extrabold'>Informações básicas</p>
                </div>
                <form action="">
                    <div className='flex md:flex-row flex-col mt-7 gap-5'>
                        <div className=' flex flex-col md:items-start items-center'>
                            <div className='md:w-28 w-24 md:h-28 h-24'>
                                <InputFile rounded='rounded-lg' />
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-8'>
                            <div>
                                <InputText
                                    placeholder='Nome do serviço*'
                                    value={servico?.nome}
                                />
                            </div>
                            <div>
                                {servico && 
                                    <InputSelect type='Animais' jaSelecionados={servico.especies} />
                                }
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <TextArea
                            placeholder='Descrição'
                            height='h-32'
                            value={servico?.descricao}
                        />
                    </div>
                    <div className='mt-4'>
                        <Select 
                            label='Categoria' 
                            opcao={categoria}
                            opcaoSelecionada={setCategoria}
                            options={['Bem Estar', 'Saúde']}
                            name='categoria'              
                        />
                    </div>
                    <div className='flex flex-row mt-4 mb-8'>
                        <div className='flex flex-col items-center w-full'>
                            <div className='w-full'>
                                {servico &&
                                    <InputSelect type='Profissionais' jaSelecionados={servico?.funcionarios} />
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            <div>
                <div className='border-t md:hidden border-t-cinza-escuro w-full'></div>
                <section className='sm:w-full px-5 md:ml-5'>
                    <div className='pt-6'>
                        <p className='font-averia text-2xl font-extrabold'>Variações de Serviços</p>
                    </div>
                    <div className='grid xl:grid-cols-2 xl:gap-4 md:gap-2 mb-8 mt-2'>
                        {
                            variantes.map((variante) => (
                                <VarianteServico tipo={variante.tipo} variante={variante.nome} preco={variante.preco} />
                            ))
                        }
                        <div className='flex items-center gap-2 flex-row cursor-pointer md:w-[10%] w-full mt-4' onClick={() => setOpenVariante(true)}>
                            <div className='p-2 rounded-full bg-terciaria'>
                                {<FiPlus size={20} />}
                            </div>
                            <p className='font-poppins text-sm text-preto'>
                                Adicionar variação
                            </p>
                        </div>
                    </div>
                </section>
                {
                    openVariante && (
                        <CadastroVariante openModalProps={setOpenVariante} variantesProps={servico?.variantes} setVariantesProps={setVariantes} />
                    )
                }
            </div>
        </section>
    )
}