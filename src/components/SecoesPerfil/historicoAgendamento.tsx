import { SetStateAction, useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import BotaoGrande from "../Botoes/BotaoGrande/BotaoGrande";
import { useRouter } from "next/navigation"
import { Agendamentos } from "@/types/agendamentos";
import AgendamentoMarcado from "../AgendamentoMarcado/agendamentoMarcado";

interface iAgendamentos {
    agendamentos: Agendamentos[]
}

export default function HistoricoAgendamentos({ agendamentos }: iAgendamentos) {

    const [showSchedulles, setShowSchedulles] = useState(false)

    const { push } = useRouter();

    const handleLinkClick = (url: string) => {
        push(url);
    };

    return (
        <main>
            <div className="flex flex-col mb-4">
                <div className="md:mb-12 mb-4 md:w-[90%] w-full lg:pl-16 md:p-0 p-4 lg:self-start self-center">
                    <p className="font-poppins text-preto text-base">O cancelamento só pode ser feito dentro de 24 horas antes da data do seu agendamento!</p>
                </div>
                <div className="grid md:mb-12 mb-4 md:w-[90%] w-full lg:pl-16 md:p-0 p-4 lg:self-start self-center gap-8 lg:grid-cols-3 md:grid-cols-2">
                    {
                        agendamentos.map((item, i) => (
                            <div key={i}>
                                <AgendamentoMarcado 
                                    agendamento={item}
                                />
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col-reverse md:flex-row lg:pl-16 md:p-0 p-4 lg:self-start self-center gap-4 md:w-[90%] w-full">
                    <div>
                        <div className="md:w-52 w-full">
                            <BotaoGrande
                                title="Novo agendamento"
                                background="primaria"
                                type="button"
                                onClick={() => handleLinkClick('/agendamento')} />
                        </div>
                    </div>
                    <div className="w-full">
                        <button className='flex lg:text-base text-sm transition ease-in-out delay-150 duration-200 text-preto font-poppins bg-secundaria p-1 rounded-lg md:w-52 w-full h-8 hover:bg-[#9EBF40] max-sm:gap-2 justify-center sm:justify-center gap-2 items-center' onClick={() => setShowSchedulles(!showSchedulles)}>
                            {showSchedulles ? "Mostrar menos" : "Mostrar todos "}
                            {showSchedulles ? <FaAngleUp className="mt-1" /> : <FaAngleDown className="mt-1" />}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}