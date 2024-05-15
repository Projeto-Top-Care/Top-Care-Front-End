'use client'
import { useState } from "react"

interface ICartao{
    titulo: string,
    numero: string,
    validade: string,
    tipo: string
}

const CardCartaoSalvo = ({titulo, numero, validade, tipo}: ICartao) => {

    const [numEscondido, setNumEscondido] = useState("")

    //{esconderCelular(usuarioProcurado?.celular)}

    // const esconderNum = (numero: string) => {
    //     const arrayNumero = numero.split("");
    //     const numEscondido = arrayNumero[0].split("");
    //     const numFinal = numEscondido.map((num, i) => {
    //       return i < 8 ? num : "*";
    //     });
    //     return numFinal.join("") +  arrayNumero[1];
    //   };

    return (
        <div className="flex flex-row border-[1px] border-cinza w-fit gap-2 sm:gap-4 divide-x-2 divide-cinza sm:py-4 py-2 px-4 sm:px-6 rounded-lg bg-branco">
            <div className="px-2 flex flex-row items-center gap-2">
                <input type="radio" id="cartao"/>
                <label className="text-xs sm:text-base" htmlFor="cartao">{titulo}</label>            
            </div>

            <div className="text-xs sm:text-base pl-2 sm:pl-4 flex flex-row">
                <p>{numero}</p>
            </div>

            <div className="text-xs sm:text-base pl-2 sm:pl-4 gap-2 flex flex-row">
                <p>Validade {validade}</p>
                <p className="sm:flex hidden">{tipo}</p>
            </div>
        </div>
    )
}
export default CardCartaoSalvo;