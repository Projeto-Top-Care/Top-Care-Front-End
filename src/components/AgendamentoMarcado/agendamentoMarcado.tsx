'use client'
import React, { SetStateAction, useState } from "react";
import CardAgendamento from "../Pop-up/CardAgendamento/CardAgendamento";
import { Agendamentos } from "@/types/agendamentos";
import { formatarData, formatarHora } from "@/utils/data";

type agendamentotype = {
    agendamento: Agendamentos
    setAtt: React.Dispatch<SetStateAction<number>>
}

const AgendamentoMarcado = ({ agendamento, setAtt }: agendamentotype) => {
    const [openInformacoes, setOpenInformacoes] = useState<boolean>(false);

    return (
        <div className=''>
            <div className="rounded-lg border-cinza-claro border-2">
                <div className="flex gap-4 p-4 md:w-80 w-full" onClick={() => setOpenInformacoes(true)}>
                    <div className='md:w-14 w-12 flex justify-center items-center'>
                        <img className='rounded-full' src={agendamento.pet.imagem == "" || agendamento.pet.imagem == undefined ? `./assets/perfil/${agendamento.pet.especie}_perfil.jpg` : agendamento.pet.imagem} alt={`Foto do ${agendamento.pet.nome}`} />
                    </div>
                    <div className="font-poppins flex flex-col">
                        <p className="text-preto md:text-lg text-base font-medium">{agendamento.pet.nome}</p>
                        <p className="text-preto md:text-base text-sm">{formatarData(agendamento.horario.dia)} às {formatarHora(agendamento.horario.horaInicio)}</p>
                        <p className="text-preto md:text-base text-sm">{agendamento.status}</p>
                        <p className="text-cinza-escuro md:text-sm text-xs underline cursor-pointer">Mais informações</p>
                    </div>
                    {openInformacoes && (
                        <>
                            <div className='fixed top-0 left-0 w-full h-full z-40 bg-opacity-50 bg-cinza-escuro' onClick={() => setOpenInformacoes(false)}></div>
                            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                                <CardAgendamento
                                    openParms={setOpenInformacoes}
                                    agendamento={agendamento}
                                    setAtt={setAtt}
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