'use client'
import { adicionarQuantidade, removerQuantidade } from "@/server/carrinho/action";
import { Dispatch, SetStateAction, useEffect, useState} from "react"
import { FaRegTrashCan } from "react-icons/fa6";

interface InputQuantidade{
    value: number
    abrirPopUp: () => void
    limite: number
    id: number
    setAtt: Dispatch<SetStateAction<number>>
}

export default function InputQuantidade({ abrirPopUp, value, limite, id, setAtt }: InputQuantidade) {

    const adicioanr = async () => {
        if(value < limite){
            await adicionarQuantidade(id).then(() => setAtt((prev) => prev + 1))
            // valorQuantidade(value + 1)
        }
    }

    const remover = async () => {
        value == 1 ? abrirPopUp() : await removerQuantidade(id).then(() => setAtt((prev) => prev + 1))
            // valorQuantidade(value - 1)
        
    }

    return (
        <div className="flex flex-col items-center">
            <p className="font-poppins text-base md:!flex hidden ">Quantidade</p>
            <div className="flex flex-row items-center justify-center gap-1 mt-1">
                <button onClick={remover} className={`bg-secundaria md:w-7 md:h-6 w-4 h-4 rounded font-poppins flex justify-center items-center`}>{value == 1 ? <FaRegTrashCan color='#322828' size={10}/> : '-' }</button>
                <div className="border border-secundaria md:w-8 md:h-8 w-6 h-6 rounded flex justify-center items-center">
                    <p className="font-xl text-center">{value}</p>
                </div>
                <button onClick={adicioanr} className={`${value >= limite ? `opacity-80` : ``} bg-secundaria md:w-7 md:h-6 w-4 h-4 rounded font-poppins flex items-center justify-center`}>+</button>
            </div>
        </div>
    )
}