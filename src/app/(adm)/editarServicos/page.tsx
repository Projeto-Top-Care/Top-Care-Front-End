'use client'
import BotaoGrande from '@/components/Botoes/BotaoGrande/BotaoGrande'
import Confirmacao from '@/components/Pop-up/Confirmacao/Confirmacao'
import DoisBotoes from '@/components/Pop-up/DoisBotoes/DoisBotoes'
import Erro from '@/components/Pop-up/Erro/Erro'
import TabelaServicos from '@/components/TabelaServicos/TabelaServicos'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import { useError } from '@/context/ErrorContext'
import { useConfirmacao } from '@/context/confirmacaoContext'
import { deleteServico, getServico, updateServico } from '@/server/servicos/action'
import { PetsProps, Servico, VariantesProps } from '@/types/servicos'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface PropsService {
    searchParams: { id: string }
}

export default function EditarServico({ searchParams }: PropsService) {
    const router = useRouter()
    const { addConfirmacao } = useConfirmacao();
    const {addError} = useError()

    const [servico, setServico] = useState<Servico>()
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [sim, setSim] = useState<boolean>(false)

    const [variantes, setVariantes] = useState<VariantesProps[]>([])
    const [pets, setPets] = useState<PetsProps[]>([])
    const [funcionarios, setFuncionarios] = useState<PetsProps[]>([])

    useEffect(() => {
        const func = async () => {
            if (sim) {
                await deleteServico(searchParams.id);
                addConfirmacao("Serviço excluído!")
                router.push('/visualizarServicos')
            }
        }
        func()
    }, [sim])

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
        try {
            await updateServico(searchParams.id, servico)
            addConfirmacao("Servico Editado!")
        }catch(error){
            addError("Erro ao editar serviço!")
        }
    }

    return (
        <>
            <Confirmacao />
            <Erro/>
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
                        <BotaoGrande background='cancelar' title='Excluir serviço' type='button' onClick={() => setOpenModal(true)} />
                    </div>
                    <div className='w-60'>
                        <BotaoGrande background='secundaria' title='Salvar serviço' type='submit' />
                    </div>
                </section>
            </form>
            {openModal && (
                <div className="w-full">
                    <div className='fixed top-0 left-0 w-full h-full bg-fundo-modal' onClick={() => setOpenModal(false)}></div>
                    <div className="fixed lg:w-[25%] w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                        <DoisBotoes texto='Você tem certeza que deseja excluir esse serviço?' openParms={setOpenModal} sim={setSim} />
                    </div>
                </div>
            )
            }
        </>
    )
}
