'use client'
import { Dispatch, SetStateAction, useEffect, useState} from "react"
import { FaRegTrashCan } from "react-icons/fa6";

interface InputQuantidade{
    value: number
    valorQuantidade: Dispatch<SetStateAction<number>>
    abrirPopUp: () => void
}

export default function InputQuantidade({ valorQuantidade, abrirPopUp, value }: InputQuantidade) {
    const [size, setSize] = useState<number>(10)
    return (
        <div className="flex flex-col items-center">
            <p className="font-poppins text-base md:!flex hidden ">Quantidade</p>
            <div className="flex flex-row items-center justify-center gap-1 mt-1">
                <button onClick={() => {
                    valorQuantidade(value == 1 ? 1 : value - 1)
                    if(value == 1){
                        abrirPopUp()
                    }
                }} className={`bg-secundaria md:w-7 md:h-6 w-4 h-4 rounded font-poppins flex justify-center items-center`}>{value == 1 ? <FaRegTrashCan color='#322828' size={size}/> : '-' }</button>
                <div className="border border-secundaria md:w-8 md:h-8 w-6 h-6 rounded flex justify-center items-center">
                    <p className="font-xl text-center">{value}</p>
                </div>
                <button onClick={() => valorQuantidade(value + 1)} className="bg-secundaria md:w-7 md:h-6 w-4 h-4 rounded font-poppins flex items-center justify-center">+</button>
            </div>
        </div>
    )
}