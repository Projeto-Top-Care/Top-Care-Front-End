import React from "react";
import BotaoGrande from "../BotaoGrande/BotaoGrande";

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
    return (

        <div className=''>
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
                        <p className="md:text-sm text-xs text-cinza-escuro">R$ {valor}</p>
                    </div>
                </div>
                <div className="md:p-4 p-2 w-full">
                    <BotaoGrande textColor={"text-branco"} title={"Cancelar"} fontSize={"text-sm"} background={"bg-error"} type={"button"} height='md:h-8 h-6' />
                </div>
            </div>
        </div>
    )
}
export default AgendamentoMarcado;