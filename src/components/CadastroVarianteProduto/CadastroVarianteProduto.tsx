import BotaoGrande from '@/components/Botoes/BotaoGrande/BotaoGrande'
import InputText from '@/components/InputText/InputText'
import { VarianteProps } from '@/types/produto'
import { set } from 'date-fns'
import React, { FormEvent, SetStateAction, useEffect, useState } from 'react'

interface CadastroVarianteProps {
    setOpen: React.Dispatch<SetStateAction<boolean>>
    variantes: VarianteProps[]
    setVariantes: React.Dispatch<SetStateAction<VarianteProps[]>>
}

export default function CadastroVariante({ setOpen, variantes, setVariantes }: CadastroVarianteProps) {

    const [cor, setCor] = useState<string>('')
    const [tamanho, setTamanho] = useState<string>('')
    const [peso, setPeso] = useState<string>('')
    const [unidades, setUnidades] = useState<number>(0)
    const [preco, setPreco] = useState<number>(0)
    const [estoque, setEstoque] = useState<number>(0)

    const addVariante = () => {
        const newVariante: any = {
            cor,
            tamanho,
            peso,
            unidades,
            preco,
            estoque
        }
        const newListVariantes: any = [...variantes, newVariante]
        setVariantes(newListVariantes)
        setOpen(false)
    }

    return (
        <div className='absolute'>
            <div className='fixed top-0 left-0 w-full h-full z-50 bg-fundo-modal' onClick={() => setOpen(false)}></div>
            <fieldset>
                <div className='w-[80%] lg:w-[60%] xl:w-[50%] bg-branco rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                    <div className='flex flex-row-reverse justify-start gap-7 mr-8'>
                        <div className="lg:w-[33%] w-[50%] flex justify-end items-end">
                            <img src="./assets/Sair.svg" alt="" className="lg:w-[12%] md:w-[25%] w-[35%] cursor-pointer" onClick={() => setOpen(false)} />
                        </div>
                        <div className='mt-5 text-center'>
                            <h1 className='font-averia font-extrabold text-xl text-preto'>Criar Variação</h1>
                        </div>
                    </div>
                    <div className='my-10 flex flex-col gap-4 w-[90%] m-auto justify-between'>
                        <div className='flex flex-row w-full gap-4'>
                            <div className='w-[50%]'>
                                <InputText
                                    placeholder='Tamanho'
                                    type="text"
                                    name='tamanho'
                                    onChange={(e) => setTamanho(e.target.value)}
                                />
                            </div>
                            <div className='w-[50%]'>
                                <InputText
                                    placeholder='Cor'
                                    type="text"
                                    name='cor'
                                    onChange={(e) => setCor(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='flex flex-row w-full gap-4'>
                            <div className='w-[50%]'>
                                <InputText
                                    placeholder='Peso'
                                    type="number"
                                    name='peso'
                                    onChange={(e) => setPeso(e.target.value)}
                                />
                            </div>
                            <div className='w-[50%]'>
                                <InputText
                                    placeholder='Unidade'
                                    type="number"
                                    name='unidades'
                                    onChange={(e) => setUnidades(Number(e.target.value))}
                                />
                            </div>
                        </div>

                        <div className='flex flex-row w-full gap-4'>
                            <div className='w-[50%]'>
                                <InputText
                                    placeholder='Preço*'
                                    type="number"
                                    required
                                    name='preco'
                                    onChange={(e) => setPreco(Number(e.target.value))}
                                />
                            </div>
                            <div className='w-[50%]'>
                                <InputText
                                    placeholder='Estoque*'
                                    type="number"
                                    required
                                    name='estoque'
                                    onChange={(e) => setEstoque(Number(e.target.value))}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row w-[90%] mx-auto mb-5'>
                        <div className='w-full'>
                            <BotaoGrande background='secundaria' title='Criar' type='button' onClick={addVariante} />
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
    )
}