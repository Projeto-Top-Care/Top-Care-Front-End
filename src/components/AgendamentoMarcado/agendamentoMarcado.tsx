'use client'
import React, { useState } from "react";
import BotaoGrande from "../Botoes/BotaoGrande/BotaoGrande";
import DoisBotoes from "../Pop-up/DoisBotoes/DoisBotoes";

type agendamentotype = {
    fotoPet: string
    nomePet: string
    servico: string
    data: string
    hora: string
    profissional: string
    valor: number
}

const AgendamentoMarcado = ({ fotoPet, nomePet, servico, data, hora, profissional, valor }: agendamentotype) => {
    
    
    //Isso será excluído, é apenas para deixar bonitinho
    const [openConfirmacao, setOpenConfirmacao] = useState<boolean>(false)
    const [cancelamentoConfirmado, setCancelamentoConfirmado] = useState<boolean>(false)

    return (

        <div className=''>
            {openConfirmacao && (
                <div className="w-full">
                    <div className='fixed top-0 left-0 w-full h-full z-50  bg-fundo-modal' onClick={() => setOpenConfirmacao(false)}></div>
                    <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 lg:w-[25%] w-[60%]`}>
                        <DoisBotoes texto="Deseja mesmo cancelar o agendamento?" openParms={setOpenConfirmacao} sim={setCancelamentoConfirmado} />
                    </div>
                </div>
            )}
            <div className="flex flex-col items-center rounded-lg border border-cinza font-poppins">
                <div className="p-3 flex justify-start items-center gap-2 mr-36">
                    <div className="lg:w-[24%] w-[30%]">
                        <img className='rounded-full' src={fotoPet} />
                    </div>
                    <p className="md:text-base text-sm text-preto">{nomePet}</p>
                </div>
                <div className="border-t border-cinza grid items-center justify-center w-full"></div>
                <div className="p-4 flex justify-start items-center gap-16">
                    <div className="gap-2 flex flex-col justify-start items-start text-start">
                        <p className="md:text-base text-sm text-preto">{servico}</p>
                        <p className="md:text-sm text-xs text-cinza-escuro">Profissional</p>
                        <p className="md:text-sm text-xs text-cinza-escuro">Valor</p>
                    </div>
                    <div className="flex flex-col justify-end items-end gap-2 text-end">
                        <p className="md:text-base text-sm text-preto">{data} ás {hora}</p>
                        <p className="md:text-sm text-xs text-cinza-escuro">{profissional}</p>
                        <p className="md:text-sm text-xs text-cinza-escuro">R$ {valor.toFixed(2).replace(".", ",")}</p>
                    </div>
                </div>
                <div onClick={() => setOpenConfirmacao(!openConfirmacao)} className="md:p-4 p-2 w-full">
                    <BotaoGrande title={"Cancelar"} background={"cancelar"} type={"button"} size='md:h-8 h-6' />
                </div>
            </div>
        </div>
    )
}
export default AgendamentoMarcado;