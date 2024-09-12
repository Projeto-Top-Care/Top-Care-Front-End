import BotaoGrande from '@/components/Botoes/BotaoGrande/BotaoGrande'
import InputText from '@/components/InputText/InputText'
import { Especificacao } from '@/types/produto'
import React, { SetStateAction, useEffect, useState } from 'react'

interface CadastroEspecificacoesProps {
    setOpenModal: React.Dispatch<SetStateAction<boolean>>
    especificacoes: Especificacao[]
    setEspecificacoes: React.Dispatch<SetStateAction<Especificacao[]>>
}

export default function CadastroEspecificacoes({setOpenModal, especificacoes, setEspecificacoes }: CadastroEspecificacoesProps) {

    const [nome, setNome] = useState<string>("")
    const [conteudo, setConteudo] = useState<string>("")

    const addEspecificacao = () => {
        const especificacaoAtual: Especificacao = {
            nome: nome,
            conteudo: conteudo
        }
        const newEspecificacao = [...especificacoes, especificacaoAtual]
        setEspecificacoes(newEspecificacao)

        setOpenModal(false)
    }


    return (
        <div className='absolute'>
            <div className='fixed top-0 left-0 w-full h-full z-50 bg-fundo-modal' onClick={() => setOpenModal(false)}></div>
            <div className='w-[80%] lg:w-[60%] xl:w-[50%] bg-branco rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                <div className='flex flex-row-reverse justify-start gap-7 mr-8'>
                    <div className="lg:w-[33%] w-[50%] flex justify-end items-end">
                        <img src="./assets/Sair.svg" alt="" className="lg:w-[12%] md:w-[25%] w-[35%] cursor-pointer" onClick={() => setOpenModal(false)} />
                    </div>
                    <div className='mt-5 text-center'>
                        <h1 className='font-averia font-extrabold text-xl text-preto'>Criar Especificação</h1>
                    </div>
                </div>
                <div className='my-10 flex flex-col gap-4 w-[90%] m-auto justify-between'>
                    <div>
                        <InputText
                            placeholder='Nome*'
                            value={nome}
                            required
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                    <div>
                        <InputText
                            placeholder='Descrição*'
                            type={conteudo}
                            required
                            onChange={(e) => setConteudo(e.target.value)}
                        />
                    </div>
                </div>
                <div className='flex flex-row w-[90%] mx-auto mb-5'>
                    <div className='w-full'>
                        <BotaoGrande background='secundaria' title='Finalizar' type='submit' onClick={() => addEspecificacao()} />
                    </div>
                </div>
            </div>
        </div>
    )
}