'use client'
import React, { useState } from "react";
import CardAgendamento from "../Pop-up/CardAgendamento/CardAgendamento";

type agendamentotype = {
    fotoPet: string
    nomePet: string
    data: string
    hora: string
}

const AgendamentoMarcado = ({ fotoPet, nomePet, data, hora }: agendamentotype) => {
    const [openInformacoes, setOpenInformacoes] = useState<boolean>(false);

    return (
        <div className='mt-12 mb-12 flex justify-center items-center'>
            <div className="rounded-lg border-cinza-claro border-2">
                <div className="flex gap-4 p-4 md:w-80 w-full" onClick={() => setOpenInformacoes(true)}>
                    <div className='md:w-14 w-12 flex justify-center items-center'>
                        <img className='rounded-full' src={fotoPet} alt={`Foto do ${nomePet}`} />
                    </div>
                    <div className="font-poppins flex flex-col">
                        <p className="text-preto md:text-lg text-base font-medium">{nomePet}</p>
                        <p className="text-preto md:text-base text-sm">{data} às {hora}</p>
                        <p className="text-cinza-escuro md:text-sm text-xs underline">Mais informações</p>
                    </div>
                    {openInformacoes && (
                        <>
                            <div className='fixed top-0 left-0 w-full h-full z-40 bg-opacity-50 bg-cinza-escuro' onClick={() => setOpenInformacoes(false)}></div>
                            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                                <CardAgendamento
                                    openParms={setOpenInformacoes}
                                    nomePet={"Nina"}
                                    servico={"Banho e Tosa"}
                                    data={"24/08/2024"}
                                    hora={"14:20"}
                                    profissional={"Victor"}
                                    valor={40}
                                    local="Top Care Jaraguá do Sul - SC"
                                    formaPagamento="Cartão de Débito"
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AgendamentoMarcado;