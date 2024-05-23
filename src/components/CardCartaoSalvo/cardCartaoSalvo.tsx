'use client'
import { useState } from "react"

interface ICartao{
    titulo: string,
    numero: number,
    validade: string,
    tipo: string,
    checked: boolean
}

const CardCartaoSalvo = ({titulo, numero, validade, tipo, checked}: ICartao) => {

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
    const numEscondido = (num: string) => {
        const arrayNum = num.split("");
        const numeroEscondido = arrayNum.map((item, i) => {
            return i > 3 ? item : "*"
        })
        return numeroEscondido;
    }
    // const esconderEmail = (email: string) => {
    //     const arrayEmail = email.split("@");
    //     const emailEscondido = arrayEmail[0].split("");
    //     const emailFinal = emailEscondido.map((letra, i) => {
    //       return i == 0 ? letra : "*";
    //     });
    //     return emailFinal.join("") + "@" + arrayEmail[1];
    //   };

    return (
        <div className={`flex flex-row border-[1px] border-cinza w-full justify-between font-poppins ${checked? `text-preto` : `text-cinza`}  items-center gap-2 sm:gap-4 sm:py-4 py-2 px-4 sm:px-6 rounded-lg bg-branco`}>
            <div className="px-2 flex flex-row items-center gap-2">
                <input className="w-5 h-5 checked: accent-purple-500"  checked={checked} type="radio" id="cartao" name="cartao"/>
                <label className="text-xs sm:text-base" htmlFor="cartao">{titulo}</label>            
            </div>

            <div className="bg-cinza h-6 w-[2px]"></div>

            <div className="text-xs sm:text-base flex flex-row">
                <p>{numEscondido(numero.toString())}</p>
            </div>

            <div className="bg-cinza h-6 w-[2px]"></div>

            <div className="text-xs sm:text-base items-center gap-2 flex flex-row">
                <p>Validade {validade}</p>
                <img className="w-8 sm:flex hidden" src={logo()} />
            </div>
        </div>
    )
}
export default CardCartaoSalvo;