'use client'
import React, { useState } from 'react';
import CardCartaoSalvo from "@/components/CardCartaoSalvo/cardCartaoSalvo";
import { Usuario, Cartao } from "@/types/usuarios";
import { buscarUsuario } from "@/server/usuario/action";
import { useRouter } from "next/navigation";
// import { getLocalStorageItem } from "@/server/localStorage/actions";
import { FaPlus } from "react-icons/fa";

const Resumo = () => {

    const [eCartao, setECartao] = useState(false)
    const [eBoleto, setEBoleto] = useState(false)
    const [ePix, setEPix] = useState(false)
    const [cartaoEscolhido, setCartaoEscolhido] = useState<Cartao>()
    const [open, setOpen] = useState<string>("")

    const { push } = useRouter();

    // const idUser = getLocalStorageItem('idUser')
    // const usuarioLogado: Usuario = (buscarUsuario(parseInt(idUser))!)

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
            setECartao(true)
            setEBoleto(false)
            setEPix(false)
        } else if (formaPagamento == "boleto") {
            setECartao(false)
            setEBoleto(true)
            setEPix(false)
        } else {
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
        <main className='p-8 font-poppins w-full flex flex-col gap-8 mt-12'>
            {showError()}
            <div className='flex items-center justify-center'>
                <p className='text-preto font-medium text-xl text-center'>Seu agendamento está quase concluído, confime os dados para concluí-lo</p>
            </div>
            <div className='p-8 w-full flex md:flex-row flex-col justify-between items-start gap-8'>

                <div className='flex flex-col text-preto gap-2'>
                    <p className='font-bold text-base'>Escolha o método de pagamento</p>
                    <div className='md:p-5 p-4 border rounded-md border-cinza-escuro'>
                        <div className='flex-col text-preto font-poppins flex items-center justify-between md:gap-6 md:text-base text-sm'>
                            <div className='flex flex-row justify-between w-full gap-24'>
                                <p className='font-medium'>Serviço</p>
                                <p className="text-end">Banho e tosa</p>
                            </div>

                            <div className='flex flex-row justify-between w-full gap-24'>
                                <p className='font-medium'>Pet</p>
                                <p className="text-end">Nina</p>
                            </div>

                            <div className='flex flex-row justify-between w-full gap-24'>
                                <p className='font-medium'>Local</p>
                                <p className="text-end">Top Care Jaraguá do Sul - SC</p>
                            </div>

                            <div className='flex flex-row justify-between w-full gap-24'>
                                <p className='font-medium'>Data</p>
                                <p className="text-end">22/02/2024</p>
                            </div>

                            <div className='flex flex-row justify-between w-full gap-24'>
                                <p className='font-medium'>Horário</p>
                                <p className="text-end">08:00h</p>
                            </div>

                            <div className='flex flex-row justify-between w-full gap-24'>
                                <p className='font-medium'>Profissional</p>
                                <p className="text-end">Vilson de Souza</p>
                            </div>
                        </div>
                        <div className="border border-cinza-claro lg:grid flex lg:items-center lg:justify-center mt-5"></div>
                        <div className='text-preto font-poppins flex items-center justify-between mt-4'>
                            <p className='font-medium md:text-base text-sm'>Valor do serviço</p>
                            <p className='md:text-lg text-sm text-end '>R$79,90</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-end items-start font-poppins text-preto gap-8 md:w-[60%] w-full">
                    <p className='font-bold text-base'>Escolha o método de pagamento</p>
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-row gap-4">
                            <input className="w-5 h-5 checked: accent-purple-500 "
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

                    <div className="flex flex-col gap-2 w-full sm:w- lg:w-[70%]">
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