'use client'
import BotaoGrande from '@/components/Botoes/BotaoGrande/BotaoGrande'
import Erro from '@/components/Pop-up/Erro/Erro'
import UmBotao from '@/components/Pop-up/UmBotao/UmBotao'
import TabelaServicos from '@/components/TabelaServicos/TabelaServicos'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { useError } from '@/context/ErrorContext'
import { createServico } from '@/server/servicos/action'
import { PetsProps, VariantesProps } from '@/types/servicos'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function CadastrarServico() {
    const router = useRouter()
    const { addError } = useError()

    const [openModal, setOpenModal] = useState<boolean>(false)

    const [imagens, setImagns] = useState<File[]>([])
    const [variantes, setVariantes] = useState<VariantesProps[]>([])
    const [pets, setPets] = useState<PetsProps[]>([])
    const [funcionarios, setFuncionarios] = useState<PetsProps[]>([])

    const enviarDados = async (e: FormData) => {
        const servico: any = Object.fromEntries(e)

        if(variantes.length === 0){
            addError('É necessário cadastrar ao menos uma variante')
            return
        }
        if(pets.length === 0){
            addError('É necessário cadastrar ao menos um pet')
            return
        }
        // if(funcionarios.length === 0){
        //     addError('É necessário cadastrar ao menos um funcionário')
        //     return
        // }
        servico.variantes = variantes
        servico.especies = pets
        servico.funcionarios = funcionarios

        if (!imagens) {
            addError('É necessário cadastrar ao menos uma imagem')
            return
        }

        const formatData = new FormData()
        formatData.append('dto', new Blob([JSON.stringify(servico)], { type: 'application/json' }))
        formatData.append('imagem', imagens[0])

        try {
            await createServico(formatData)
            setOpenModal(true)
        }catch(error){
            addError('Erro ao cadastrar serviço')
            console.log(error)
        }
    }

    return (
        <>
        <Erro/>
            <form action={enviarDados} className='mx-auto text-preto'>

                <section className=''>
                    <TituloLinha voltar={true} titulo={'Cadastrar novo serviço'} />
                </section>
                <section className='w-[90%] mx-auto'>
                    <TabelaServicos
                        variantes={variantes}
                        setVariantes={setVariantes}
                        pets={pets}
                        setPets={setPets}
                        funcionarios={funcionarios}
                        setFuncionarios={setFuncionarios}
                        imagens={imagens}
                        setImagens={setImagns}
                    />
                </section>
                <section className='w-[90%] mx-auto flex flex-row justify-between items-center my-10'>
                    <div className='w-48'>
                        <BotaoGrande background='cancelar' title='Cancelar' type='button' onClick={() => router.back()} />
                    </div>
                    <div className='w-60'>
                        <BotaoGrande background='secundaria' title='Cadastrar Servico' type='submit' />
                    </div>
                </section>
            </form>
            {
                openModal && (
                    <div className="w-full">
                        <div className='fixed top-0 left-0 w-full h-full bg-fundo-modal' onClick={() => setOpenModal(false)}></div>
                        <div className="fixed lg:w-[25%] w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                            <UmBotao openParms={setOpenModal} texto="Serviço cadastrado!" rota='visualizarServicos' />
                        </div>
                    </div>
                )

            }
        </>
    )
}
