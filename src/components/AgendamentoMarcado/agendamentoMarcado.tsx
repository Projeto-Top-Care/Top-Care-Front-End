'use client'
import React, { useState } from "react";
import CardAgendamento from "../Pop-up/CardAgendamento/CardAgendamento";
import { Agendamentos } from "@/types/agendamentos";
import { formatarData } from "@/utils/data";

type agendamentotype = {
    agendamento: Agendamentos
}

const AgendamentoMarcado = ({ agendamento }: agendamentotype) => {
    const [openInformacoes, setOpenInformacoes] = useState<boolean>(false);

    return (
        <div className=''>
            <div className="rounded-lg border-cinza-claro border-2">
                <div className="flex gap-4 p-4 md:w-80 w-full" onClick={() => setOpenInformacoes(true)}>
                    <div className='md:w-14 w-12 flex justify-center items-center'>
                        <img className='rounded-full' src={agendamento.pet.imagem} alt={`Foto do ${agendamento.pet.nome}`} />
                    </div>
                    <div className="font-poppins flex flex-col">
                        <p className="text-preto md:text-lg text-base font-medium">{agendamento.pet.nome}</p>
                        <p className="text-preto md:text-base text-sm">{formatarData(agendamento.horario.dia)} às {agendamento.horario.horaInicio.slice(0, 5)}</p>
                        <p className="text-cinza-escuro md:text-sm text-xs underline cursor-pointer">Mais informações</p>
                    </div>
                    {openInformacoes && (
                        <>
                            <div className='fixed top-0 left-0 w-full h-full z-40 bg-opacity-50 bg-cinza-escuro' onClick={() => setOpenInformacoes(false)}></div>
                            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                                <CardAgendamento
                                    openParms={setOpenInformacoes}
                                    nomePet={agendamento.pet.nome}
                                    servico={agendamento.servico}
                                    data={formatarData(agendamento.horario.dia)}
                                    hora={agendamento.horario.horaInicio}
                                    profissional={agendamento.horario.funcionario}
                                    valor={agendamento.valor}
                                    local={agendamento.filial}
                                    formaPagamento={agendamento.pagamento.metodoPagamento}
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