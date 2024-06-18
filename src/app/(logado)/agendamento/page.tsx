'use client'
import EscolhaData from "@/components/Agendamento/EscolhaData";
import EscolhaLocal from "@/components/Agendamento/EscolhaLocal";
import EscolhaPet from "@/components/Agendamento/escolhaPet";
import EscolhaServico from "@/components/Agendamento/escolhaServico";
import Resumo from "@/components/Agendamento/Resumo";
import BarraProcessoAgendamento from "@/components/BarraProcesso/BarraProcessoAgendamento";
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande";
import CadastroPet from "@/components/Pop-up/CadastroPet/CadastroPet";
import { useState } from "react";

export default function agendamento() {

    const [estado, setEstado] = useState(0)

    const [openPet, setOpenPet] = useState(false);

    return (
        <main className="w-full flex flex-col items-center py-12">

            <div className='w-full'>
                {openPet && (
                    <div className='overflow-hidden'>
                        <div className='fixed top-0 left-0 w-full h-full z-50 bg-fundo-modal' onClick={() => setOpenPet(false)}></div>
                        <div className='fixed w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                            <CadastroPet setOpen={setOpenPet} />
                        </div>
                    </div>
                )}
            </div>

            <div className="w-full">
                <BarraProcessoAgendamento estado={estado} />
            </div>

            <div className="w-full flex items-center pb-8">
                {(estado <= 0 ?
                    <div className="w-full">
                        <EscolhaPet />
                    </div>
                    : estado == 1 ?
                        <div className="w-full">
                            <EscolhaServico />
                        </div>
                        : estado == 2 ?
                            <div className="w-full">
                                <EscolhaLocal />
                            </div>
                            : estado == 3 ?
                                <div className="w-full">
                                    <EscolhaData />
                                </div>
                                :
                                <div className="w-full flex justify-center">
                                    <Resumo />
                                </div>
                )}
            </div>

            <div className="flex w-[90%] justify-between items-end">
                <div className="w-full flex flex-col gap-4">
                    <div className={`${estado <= 0 ? `flex flex-col` : `hidden`}`}>
                        <p className='font-averia text-preto font-bold text-2xl'>Gostaria de cadastrar um pet?</p>
                        <p className='font-poppins text-preto text-md mt-2 text-start md:w-[55%] w-full'>Clique no botão abaixo para cadastrar, depois continue os procedimentos para agendar um serviço para o seu mais novo pet :)</p>
                    </div>
                    <div className="w-2/12" onClick={() => estado <= -1 ? setOpenPet(true) : setOpenPet(false)}>
                        <BotaoGrande onClick={() => estado <= -1 ? (setEstado(0)) : setEstado(estado - 1)} title={estado <= 0 ? "Cadastrar pet" : "Anterior"} background={"bg-terciaria"} type={"button"} />
                    </div>
                </div>
                <div className="w-2/12">
                    <BotaoGrande onClick={() => estado >= 5 ? setEstado(4) : setEstado(estado + 1)} title={estado >= 4 ? "Concluir" : "Próximo"} background={"bg-secundaria"} type={"button"} />
                </div>
            </div>
        </main>
    )
}