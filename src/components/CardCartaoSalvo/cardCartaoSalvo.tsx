'use client'
import { useState } from "react"

interface ICartao{
    titulo: string,
    numero: number,
    validade: string,
    tipo: string
}

const CardCartaoSalvo = ({titulo, numero, validade, tipo}: ICartao) => {

    const [numEscondido, setNumEscondido] = useState("")

    const logo = () => {
        if(tipo == "mastercard") {
            return("/assets/logo-mastercard.png")
        } else if(tipo == "visa") {
            return("/assets/logo-visa.png")
        } else if(tipo == "elo") {
            return("/assets/elo-logo.png")
        } else if(tipo == "american-express") {
            return("/assets/american-express-logo.png")
        }
    }

    return (
        <div className="flex flex-row border-[1px] border-cinza w-full items-center gap-2 sm:gap-4 divide-x-2 divide-cinza sm:py-4 py-2 px-4 sm:px-6 rounded-lg bg-branco">
            <div className="px-2 flex flex-row items-center gap-2">
                <input type="radio" id="cartao" name="cartao"/>
                <label className="text-xs sm:text-base" htmlFor="cartao">{titulo}</label>            
            </div>

            <div className="text-xs sm:text-base pl-2 sm:pl-4 flex flex-row">
                <p>{numero}</p>
            </div>

            <div className="text-xs sm:text-base items-center pl-2 sm:pl-4 gap-2 flex flex-row">
                <p>Validade {validade}</p>
                <img className="w-8" src={logo()} />
            </div>
        </div>
    )
}
export default CardCartaoSalvo;