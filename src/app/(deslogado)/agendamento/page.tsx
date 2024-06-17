'use client'
import EscolhaEndereco from "@/components/Agendamento/escolhaEndereco";
import EscolhaHorario from "@/components/Agendamento/escolhaHorario";
import EscolhaPet from "@/components/Agendamento/escolhaPet";
import EscolhaServico from "@/components/Agendamento/escolhaServico";
import BarraProcesso from "@/components/BarraProcesso/BarraProcesso";
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande";
import { useState } from "react";

export default function agendamento() {

    const [estado, setEstado] = useState(0)

    return (
        <main className="w-full flex flex-col items-center py-12">

            <div className="w-full">
                <BarraProcesso
                    primeiroPasso={"Pet"}
                    segundoPasso={"Serviço"}
                    terceiroPasso={"Local"}
                    quartoPasso={"Data, hora e profissional"}
                    quintoPasso={"Resumo final"}
                    type={"agendamento"}
                    estado={estado} />
            </div>

            <div className="w-[90%] flex items-center">
                {(estado <= 0 ?
                    <div>
                        <EscolhaPet />
                    </div>
                    : estado == 1 ?
                        <div>
                            <EscolhaServico />
                        </div>
                        : estado == 2 ?
                            <div>
                                <EscolhaEndereco />
                            </div>
                            : estado == 3 ?
                                <div>
                                    <EscolhaHorario />
                                </div>
                                :
                                <div > aa</div>
                )}
            </div>

            <div className="flex w-[90%] justify-between">
                <div className="w-2/12">
                    <BotaoGrande onClick={() => estado <= -1 ? setEstado(0) : setEstado(estado - 1)} title={"Anterior"} background={"bg-terciaria"} type={"button"} />
                </div>
                <div className="w-2/12">
                    <BotaoGrande onClick={() => estado >= 5 ? setEstado(4) : setEstado(estado + 1)} title={"Próximo"} background={"bg-secundaria"} type={"button"} />
                </div>
            </div>
        </main>
    )
}