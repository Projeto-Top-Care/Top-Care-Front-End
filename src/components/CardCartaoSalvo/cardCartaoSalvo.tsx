'use client'
import { Cartao } from "@/types/usuarios"
import { useState } from "react"

interface ICartao {
    cartao: Cartao
}

const CardCartaoSalvo = ({ cartao }: ICartao) => {

    const numEscondido = (num: string) => {
        const arrayNum = num.split("");
        const numeroEscondido = arrayNum.map((item, i) => {
            return i > 13 ? item : item == " " ? " " : "*"
        })
        return numeroEscondido;
    }

    return (
        <div className="flex flex-row gap-2">
            <input className="w-5 h-5 checked: accent-purple-500"
                type="radio"
                value="cartao"
                name="cartao"
                id={cartao.nomeDoCartao}
            />
            <div className={`w-60 h-28 bg-primaria rounded-md flex flex-col justify-between items-start font-poppins px-4 py-2`}>
                <div className="flex flex-row justify-between items-center w-full">
                    <p>{cartao.nomeDoCartao}</p>
                    <img src="./assets/logo-mastercard.png" alt="" />
                </div>
                <div className="text-sm">
                    <p>{numEscondido(cartao.numero)}</p>
                    <div className="flex flex-row gap-2">
                        <p>{cartao.nomeNoCartao}</p>
                        <p>{cartao.validade}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default CardCartaoSalvo;