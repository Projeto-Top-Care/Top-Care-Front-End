import React from "react";

type descricaotype = {
    titulo: string
    variavel: string
}

const Descricoes = ({ titulo, variavel }: descricaotype) => {

    return (
        <div className="flex justify-between items-center text-cinza-escuro">
            <p className="md:text-base text-xs w-[42%]">{titulo}</p>
            <p className="md:text-base text-xs w-[55%] text-end">{variavel}</p>
        </div>
    )
}
export default Descricoes;