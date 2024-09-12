import { Servico, VariantesProps } from '@/types/servicos';
import React, { useState } from 'react';

interface IServicosAgendamento {
    servico: Servico
    selecionada?: VariantesProps
    setSelecionada: React.Dispatch<React.SetStateAction<VariantesProps | undefined>>
    isSelected?: boolean;
    onSelect?: () => void;
}

const ServicosAgendamento = ({ servico, isSelected, onSelect, selecionada, setSelecionada }: IServicosAgendamento) => {

    return (
        <div className='flex flex-col items-center'>
            <div
                onClick={onSelect}
                className={`flex items-center justify-center text-preto p-4 
                rounded-lg font-poppins border-2 lg:w-56 w-full cursor-pointer
                ${isSelected ? 'scale-105 duration-100 border-primaria' : 'bg-transparent opacity-50 border-cinza'}`}
            >
                <div className="flex flex-col justify-center items-center ">
                    <p className="text-sm md:text-lg font-medium text-center">{servico.nome}</p>
                </div>

            </div>
            {
                isSelected && (
                    <div className="mt-3 flex flex-col gap-2">
                        {
                            servico.variantes.map((variante, i) => (
                                <div key={i}
                                    onClick={() => setSelecionada(variante)}
                                    className={`flex justify-center items-center gap-2 font-poppins border 
                                    border-cinza rounded py-2 cursor-pointer px-6
                                    ${selecionada?.nome == variante.nome ? 'outline outline-2 outline-primaria' : ''}`}>
                                    <p className="text-xs md:text-sm font-medium">{variante.nome}</p>
                                    <p className="text-xs md:text-sm font-medium">R${variante.preco.toFixed(2).replace(".", ",")}</p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default ServicosAgendamento;
