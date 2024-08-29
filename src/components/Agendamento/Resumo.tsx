'use client'
import React, { SetStateAction, useEffect, useState } from 'react';
import CardCartaoSalvo from "@/components/CardCartaoSalvo/cardCartaoSalvo";
import { Usuario, Cartao, Pet } from "@/types/usuarios";
import { buscarUsuario } from "@/server/usuario/action";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import { useUserID } from '@/context/UserIDContext';
import { VariantesProps } from '@/types/servicos';
import Erro from '../Pop-up/Erro/Erro';

interface IResumo {
    petNome: string,
    variante: VariantesProps | undefined,
    local: string,
    servico: string,
    data: string,
    hora: string,
    profissional: string,
    setMetodoPagamento: React.Dispatch<SetStateAction<number>>
    metodo: number
}

const Resumo = ({ petNome, variante, local, servico, data, hora, profissional, setMetodoPagamento, metodo }: IResumo) => {

    const [cartaoEscolhido, setCartaoEscolhido] = useState<Cartao>()

    const { push } = useRouter();

    const [usuario, setUsuario] = useState<Usuario>()
    const { getUserID } = useUserID()

    useEffect(() => {
        const getUser = async () => {
            const id = getUserID()
            if (id) {
                const usuarioGetted = await buscarUsuario(parseInt(id))
                setUsuario(usuarioGetted)
            }
        }
        getUser()
    }, [])

    const metodos = [
        { id: 1, nome: 'Cartão de crédito' },
        { id: 2, nome: 'Boleto Bancário' },
        { id: 3, nome: 'Pix' }
    ]

    const verificarCartao = (nomeCartao: string) => {
        return cartaoEscolhido?.nome == nomeCartao ? true : false
    }

    return (
        <main className='p2 sm:p-8 font-poppins w-full flex flex-col gap-8 mt-12'>
            <Erro/>
            <div className='flex items-center justify-center'>
                <p className='text-preto font-medium text-xl text-center'>Seu agendamento está quase concluído, confime os dados para concluí-lo</p>
            </div>
            <div className='sm:p-8 w-full flex lg:flex-row flex-col justify-between items-start gap-12'>

                <div className='flex flex-col text-preto gap-2 w-full lg:w-1/2'>
                    <p className='font-bold text-sm sm:text-base'>Resumo do agendamento</p>

                    <div className='md:p-5 p-4 border rounded-md border-cinza-escuro'>
                        <div className='flex-col text-preto font-poppins gap-6 flex items-center justify-between md:gap-6 md:text-base text-sm'>
                            <div className='flex flex-row justify-between items-center w-full gap-4 sm:gap-24'>
                                <p className='font-semibold'>Serviço</p>
                                <p className="text-end">{servico}</p>
                            </div>
                            <div className='flex flex-row justify-between items-center w-full gap-4 sm:gap-24'>
                                <p className='font-semibold'>Variante</p>
                                <p className="text-end">{variante?.nome}</p>
                            </div>

                            <div className='flex flex-row justify-between items-center w-full gap-4 sm:gap-24'>
                                <p className='font-semibold'>Pet</p>
                                <p className="text-end">{petNome}</p>
                            </div>

                            <div className='flex flex-row justify-between items-center w-full gap-4 sm:gap-24'>
                                <p className='font-semibold'>Local</p>
                                <p className="text-end">{local}</p>
                            </div>

                            <div className='flex flex-row justify-between items-center w-full gap-4 sm:gap-24'>
                                <p className='font-semibold'>Data</p>
                                <p className="text-end">{data}</p>
                            </div>

                            <div className='flex flex-row justify-between items-center w-full gap-4 sm:gap-24'>
                                <p className='font-semibold'>Horário</p>
                                <p className="text-end">{hora.slice(0,5)}</p>
                            </div>

                            <div className='flex flex-row justify-between items-center w-full gap-4 sm:gap-24'>
                                <p className='font-semibold'>Profissional</p>
                                <p className="text-end">{profissional}</p>
                            </div>
                        </div>
                        <div className="border border-cinza-claro lg:grid flex lg:items-center lg:justify-center mt-5"></div>
                        <div className='text-preto font-poppins flex items-center justify-between mt-4'>
                            <p className='font-semibold md:text-base text-sm'>Valor do serviço</p>
                            <p className='md:text-lg text-sm text-end '>R$ {variante?.preco}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-end items-start font-poppins text-preto gap-8 w-full lg:w-[60%]">
                    <p className='font-bold text-sm sm:text-base'>Escolha o método de pagamento</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        {
                            metodos.map((metodo, i) => (
                                <div className="flex flex-row gap-4" key={i}>
                                    <input className="w-5 h-5 checked: accent-purple-500"
                                        type="radio"
                                        name="pagamento"
                                        onChange={() => setMetodoPagamento(metodo.id)}
                                    />
                                    <label className="text-sm sm:text-base" htmlFor="cartao">{metodo.nome}</label>
                                </div>
                            ))
                        }
                    </div>

                    <div className="flex flex-col gap-2 w-full sm:w-full">
                        {
                            metodo == 1 ?
                                <div className="flex flex-col justify-end gap-2">
                                    {
                                        usuario?.cartoes?.map((cartao, i) => (
                                            <div key={cartao.numero} onClick={() => setCartaoEscolhido(cartao)}>
                                                <CardCartaoSalvo checked={verificarCartao(cartao.nome)} titulo={cartao.nome} numero={cartao.numero} validade={cartao.validade} tipo={cartao.agencia} />
                                            </div>
                                        ))
                                    }
                                    <button onClick={() => push('/adicionarCartao')} className="hover:bg-indigo-200 size-8 self-start lg:self-end bg-primaria rounded-lg p-2"><FaPlus /></button>
                                </div>
                                : <></>
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Resumo;