'use client'
import BotaoGrande from '@/components/Botoes/BotaoGrande/BotaoGrande'
import TabelaServicos from '@/components/TabelaServicos/TabelaServicos'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { useConfirmacao } from '@/context/confirmacaoContext'
import {    getServico, updateServico } from '@/server/servicos/action'
import { PetsProps, Servico, VariantesProps } from '@/types/servicos'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { set } from 'zod'

interface PropsService {
    searchParams: { id: string }
}

export default function EditarServico({ searchParams }: PropsService) {
    const router = useRouter()
    const {addConfirmacao} = useConfirmacao();

    const [servico, setServico] = useState<Servico>()

    const [variantes, setVariantes] = useState<VariantesProps[]>([])
    const [pets, setPets] = useState<PetsProps[]>([])
    const [funcionarios, setFuncionarios] = useState<PetsProps[]>([])

    useEffect(() => {
        const func = async () => {
            const id = searchParams?.id
            if (id) {
                const servicoFetch = await getServico(id)
                if (servicoFetch) {
                    setServico(servicoFetch)
                    setVariantes(servicoFetch.variantes)
                    setPets(servicoFetch.especies)
                    setFuncionarios(servicoFetch.funcionarios)
                }
            }
        }
        func()
    }, [searchParams.id])

    const enviarDados = async (e: FormData) => {
        const servico: any = Object.fromEntries(e)
        servico.variantes = variantes
        servico.especies = pets
        servico.funcionarios = funcionarios
        await updateServico(searchParams.id, servico)
        addConfirmacao("Servico Editado!")
    }

    return (
        <form action={enviarDados} className='mx-auto text-preto'>
            <section className=''>
                <TituloLinha titulo={`Editar ` + servico?.nome} voltar={true} />
            </section>
            <section className='w-[90%] mx-auto'>
                {servico && 
                    <TabelaServicos 
                        servico={servico}
                        variantes={variantes}
                        setVariantes={setVariantes}
                        pets={pets}
                        setPets={setPets}
                        funcionarios={funcionarios}
                        setFuncionarios={setFuncionarios}
                    />
                }
            </section>
            <section className='w-[90%] mx-auto flex flex-row justify-between items-center my-10'>
                <div className='w-48'>
                    <BotaoGrande background='cancelar' title='Cancelar' type='button' onClick={() => router.back()} />
                </div>
                <div className='w-60'>
                    <BotaoGrande background='secundaria' title='Salvar Produto' type='button' />
                </div>
            </section>
        </form>
    )
}
