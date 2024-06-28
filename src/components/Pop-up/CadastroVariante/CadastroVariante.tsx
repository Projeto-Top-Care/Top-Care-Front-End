'use client'
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import InputText from '@/components/InputText/InputText'
import { VariantesProps } from '@/types/servicos'
import React, { SetStateAction, useEffect, useState } from 'react'

interface CadastroVarianteProps {
    openModalProps: React.Dispatch<SetStateAction<boolean>>
    variantesProps?: VariantesProps[]
    setVariantesProps: React.Dispatch<SetStateAction<VariantesProps[]>>
}

export default function CadastroVariante({ openModalProps, variantesProps, setVariantesProps }: CadastroVarianteProps) {

    const [openModal, setOpenModal] = useState<boolean>(true)
    const [variantes, setVariantes] = useState<VariantesProps[]>(variantesProps ? variantesProps : [])

    const [nome, setNome] = useState<string>("")
    const [tipo, setTipo] = useState<string>("")
    const [preco, setPreco] = useState<number>(0)

    useEffect(() => {
        openModalProps(openModal)
    }, [openModal])

    useEffect(() => {
        console.log(variantes)
        setVariantesProps(variantes)
    }, [variantes])

    const addVariante = () => {
        const newVariante: VariantesProps = {
            nome: nome,
            tipo: tipo,
            preco: preco,
        }
        const newVariantes = [...variantes, newVariante]
        setVariantes(newVariantes)
    }

    return (
        <div className='absolute'>
            <div className='fixed top-0 left-0 w-full h-full z-50  bg-fundo-modal' onClick={() => setOpenModal(false)}></div>
            <div className='w-[50%] bg-branco rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                <div className='mt-5 text-center'>
                    <h1 className='font-averia font-extrabold text-xl text-preto'>Criar Variação</h1>
                </div>
                <div className='my-10 flex flex-row w-[90%] m-auto justify-between'>
                    <InputText
                        placeholder='Variação*'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <InputText
                        placeholder='Tipo*'
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                    />
                    <InputText
                        placeholder='Preço*'
                        type="number"
                        onChange={(e) => setPreco(e.target.valueAsNumber)}
                    />
                </div>
                <div className='flex flex-row w-[90%] mx-auto justify-between mb-5'>
                    <div className='w-[40%]'>
                        <BotaoGrande background='bg-error' title='Cancelar' type='button' onClick={() => setOpenModal(false)} />
                    </div>
                    <div className='w-[40%]'>
                        <BotaoGrande background='bg-secundaria' title='Finalizar' type='button' onClick={()=>addVariante()}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
