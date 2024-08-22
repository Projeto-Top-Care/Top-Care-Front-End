'use client'
import BotaoGrande from '@/components/Botoes/BotaoGrande/BotaoGrande'
import UmBotao from '@/components/Pop-up/UmBotao/UmBotao'
import TabelaServicos from '@/components/TabelaServicos/TabelaServicos'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { createServico } from '@/server/servicos/action'
import { PetsProps, VariantesProps } from '@/types/servicos'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { set } from 'zod'

export default function CadastrarServico() {
    const router = useRouter()

    const [openModal, setOpenModal] = useState<boolean>(false)  

    const [variantes, setVariantes] = useState<VariantesProps[]>([])
    const [pets, setPets] = useState<PetsProps[]>([])
    const [funcionarios, setFuncionarios] = useState<PetsProps[]>([])

    const enviarDados = async (e: FormData) => {
        const servico: any = Object.fromEntries(e)
        servico.variantes = variantes
        servico.especies = pets
        servico.funcionarios = funcionarios
        await createServico(servico)
        setOpenModal(true)
    }

    return (
        <>
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
