'use client'
import BotaoGrande from "@/components/Botoes/BotaoGrande/BotaoGrande";
import DoisBotoes from "../DoisBotoes/DoisBotoes";
import React from "react";
import { useEffect, useState, SetStateAction } from "react";
import Descricoes from "./Descricoes";

type agendamentotype = {
    nomePet: string
    servico: string
    data: string
    hora: string
    profissional: string
    valor: number
    local: string
    formaPagamento: string
    openParms: React.Dispatch<SetStateAction<boolean>>
}

const CardAgendamento = ({ nomePet, servico, data, hora, profissional, valor, local, formaPagamento, openParms }: agendamentotype) => {

    //Isso será excluído, é apenas para deixar bonitinho
    const [openConfirmacao, setOpenConfirmacao] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(true)
    const [cancelamentoConfirmado, setCancelamentoConfirmado] = useState<boolean>(false)

    useEffect(() => {
        openParms(open)
    }, [open])

    return (

        <div className=''>
            {openConfirmacao && (
                <div className="w-full">
                    <div className='fixed top-0 left-0 w-full h-full z-50 rounded-lg bg-fundo-modal' onClick={() => setOpenConfirmacao(false)}></div>
                    <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[80%]`}>
                        <DoisBotoes texto="Deseja mesmo cancelar o agendamento?" openParms={setOpen} sim={setCancelamentoConfirmado} />
                    </div>
                </div>
            )}
            <div className="flex flex-col items-center justify-center rounded-lg border bg-branco border-cinza font-poppins">
                <div className="p-4 flex flex-col justify-start gap-5 font-poppins md:w-96 w-72">
                    <div className="flex justify-between items-center' gap-12 mb-4">
                        <p className="md:text-lg text-sm w-full">{servico}</p>
                        <div className="w-full flex justify-end mr-2">
                            <img src="./assets/Sair.svg" className="md:w-8 w-6 cursor-pointer" onClick={() => setOpen(false)} />
                        </div>
                    </div>
                    <Descricoes titulo="Data/Horário" variavel={`${data} às ${hora}`}/>
                    <Descricoes titulo="Pet" variavel={nomePet}/>
                    <Descricoes titulo="Profissional" variavel={profissional}/>
                    <Descricoes titulo="Local" variavel={local}/>
                    <Descricoes titulo="Forma de pagamento" variavel={formaPagamento}/>
                    <Descricoes titulo="Valor" variavel={`R$ ${valor.toFixed(2).replace(".", ",")}`}/>
                </div>
                <div onClick={() => setOpenConfirmacao(!openConfirmacao)} className="md:p-4 p-2 w-full">
                    <BotaoGrande title={"Cancelar"} background={"cancelar"} type={"button"} size='md:h-8 h-6' />
                </div>
            </div>
        </div>
    )
}
export default CardAgendamento;