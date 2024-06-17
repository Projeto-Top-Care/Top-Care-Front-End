import React from 'react';

interface IServicosAgendamento {
    servico: string;
    preco: string;
    isSelected?: boolean;
    onSelect?: () => void;
}

const ServicosAgendamento = ({ servico, preco, isSelected, onSelect }: IServicosAgendamento) => {
    return (
        <div
            onClick={onSelect}
            className={`flex items-center justify-center text-preto p-4 rounded-lg font-poppins border-2 lg:w-[18%] w-full cursor-pointer ${
                isSelected ? '' : 'bg-transparent opacity-50'
            }`}
            style={{ borderColor: isSelected ? '#6954C0' : '#BDBDBD' }}
        >
            <div className="flex flex-col justify-center items-center ">
                <p className="text-lg font-medium text-center">{servico}</p>
                <p className="text-lg">R$ {preco}</p>
            </div>
        </div>
    );
};

export default ServicosAgendamento;