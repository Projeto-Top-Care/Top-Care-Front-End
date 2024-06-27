'use client'
import React, { SetStateAction, useState } from 'react';
import CardCartaoSalvo from "@/components/CardCartaoSalvo/cardCartaoSalvo";
import { Usuario, Cartao, Pet } from "@/types/usuarios";
import { buscarUsuario } from "@/server/usuario/action";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";

interface IResumo {
    pet: Pet,
    local: string,
    servico: string,
    data: string,
    hora: string,
    profissional: string,
    setMetodoPagamento: React.Dispatch<SetStateAction<string>>
}

const Resumo = ({ pet, local, servico, data, hora, profissional, setMetodoPagamento }: IResumo) => {

    const [eCartao, setECartao] = useState(false)
    const [eBoleto, setEBoleto] = useState(false)
    const [ePix, setEPix] = useState(false)
    const [cartaoEscolhido, setCartaoEscolhido] = useState<Cartao>()
    const [open, setOpen] = useState<string>("")

    const { push } = useRouter();

    const usuarioLogado: Usuario = (buscarUsuario(1)!)

    const showError = () => {
        if (open != "") {
            return (
                <div className="z-50">
                    <div className={`fixed top-3 left-1/2 -translate-x-1/2 lg:w-[40%] w-[50%] animate-slide-down drop-shadow-lg`}>
                        <div className="flex items-center justify-center lg:h-10 h-8 bg-error rounded font-poppins">
                            <p className="text-xs lg:text-base text-branco">{open}</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    const verificarFormaPagamentoEscolhida = (formaPagamento: string) => {
        if (formaPagamento == "cartao") {
            setMetodoPagamento("cartao")
            setECartao(true)
            setEBoleto(false)
            setEPix(false)
        } else if (formaPagamento == "boleto") {
            setMetodoPagamento("boleto")
            setECartao(false)
            setEBoleto(true)
            setEPix(false)
        } else {
            setMetodoPagamento("pix")
            setECartao(false)
            setEBoleto(false)
            setEPix(true)
        }
    }
    const verificarCartao = (nomeCartao: string) => {
        if (cartaoEscolhido?.nome == nomeCartao) {
            return true
        } else {
            return false
        }
    }
    const pagar = () => {
        if (!eCartao && !ePix && !eBoleto) {
            setOpen("Selecione uma forma de pagamento antes de avançar!")
            setTimeout(() => {
                setOpen("")
            }, 4000)
        } else if (ePix) {
            push('./pagamentoPix')
        } else if (eBoleto) {
            push('./pagamentoBoleto')
        } else if (eCartao && cartaoEscolhido != null) {
            push('./Perfil')
        } else {
            setOpen("Selecione um cartão antes de avançar!")
            setTimeout(() => {
                setOpen("")
            }, 4000)
        }
    }


    return (
        <main className='p2 sm:p-8 font-poppins w-full flex flex-col gap-8 mt-12'>
            {showError()}
            <div className='flex items-center justify-center'>
                <p className='text-preto font-medium text-xl text-center'>Seu agendamento está quase concluído, confime os dados para concluí-lo</p>
            </div>
            <div className='sm:p-8 w-full flex lg:flex-row flex-col justify-between items-start gap-12'>

                <div className='flex flex-col text-preto gap-2 w-full lg:w-1/2'>
                    <p className='font-bold text-sm sm:text-base'>Escolha o método de pagamento</p>

                    <div className='md:p-5 p-4 border rounded-md border-cinza-escuro'>
                        <div className='flex-col text-preto font-poppins gap-6 flex items-center justify-between md:gap-6 md:text-base text-sm'>
                            <div className='flex flex-row justify-between items-center w-full gap-4 sm:gap-24'>
                                <p className='font-semibold'>Serviço</p>
                                <p className="text-end">{servico}</p>
                            </div>

                            <div className='flex flex-row justify-between items-center w-full gap-4 sm:gap-24'>
                                <p className='font-semibold'>Pet</p>
                                <p className="text-end">{pet.nome}</p>
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
                                <p className="text-end">{hora}</p>
                            </div>

                            <div className='flex flex-row justify-between items-center w-full gap-4 sm:gap-24'>
                                <p className='font-semibold'>Profissional</p>
                                <p className="text-end">{profissional}</p>
                            </div>
                        </div>
                        <div className="border border-cinza-claro lg:grid flex lg:items-center lg:justify-center mt-5"></div>
                        <div className='text-preto font-poppins flex items-center justify-between mt-4'>
                            <p className='font-semibold md:text-base text-sm'>Valor do serviço</p>
                            <p className='md:text-lg text-sm text-end '>R$79,90</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-end items-start font-poppins text-preto gap-8 w-full lg:w-[60%]">
                    <p className='font-bold text-sm sm:text-base'>Escolha o método de pagamento</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex flex-row gap-4">
                            <input className="w-5 h-5 checked: accent-purple-500"
                                type="radio"
                                value="cartao"
                                name="pagamento"
                                id="cartao"
                                checked={eCartao}
                                onClick={() => verificarFormaPagamentoEscolhida("cartao")}
                            />
                            <label className="text-sm sm:text-base" htmlFor="cartao">Cartão de crédito</label>
                        </div>
                        <div className="flex flex-row gap-4">
                            <input className="w-5 h-5 checked: accent-purple-500"
                                type="radio"
                                value="boleto"
                                name="pagamento"
                                id="boleto"
                                checked={eBoleto}
                                onClick={() => verificarFormaPagamentoEscolhida("boleto")}
                            />
                            <label className="text-sm sm:text-base" htmlFor="boleto">Boleto bancário</label>
                        </div>
                        <div className="flex flex-row gap-4">
                            <input className="w-5 h-5 checked: accent-purple-500"
                                type="radio"
                                value="pix"
                                name="pagamento"
                                id="pix"
                                checked={ePix}
                                onClick={() => verificarFormaPagamentoEscolhida("pix")}
                            />
                            <label className="text-sm sm:text-base" htmlFor="pix">PIX</label>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full sm:w-full">
                        {
                            eCartao ?
                                <div className="flex flex-col justify-end gap-2">
                                    {
                                        usuarioLogado.cartoes?.map((cartao, i) => (
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