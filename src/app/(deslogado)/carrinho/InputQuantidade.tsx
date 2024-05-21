import { Dispatch, SetStateAction } from "react"

interface InputQuantidade{
    valorQuantidade: Dispatch<SetStateAction<number>>
    value: number
}

export default function InputQuantidade({ valorQuantidade, value }: InputQuantidade) {
    return (
        <div className="flex flex-col items-center">
            <p className="font-poppins text-base">Quantidade</p>
            <div className="flex flex-row items-center justify-center gap-1 mt-1">
                <button onClick={() => valorQuantidade(value == 0 ? 0 : value - 1)} className='bg-secundaria w-7 h-6 rounded font-poppins'>-</button>
                <div className="border border-secundaria w-8 h-8 rounded flex justify-center items-center">
                    <p className="font-xl text-center">{value}</p>
                </div>
                <button onClick={() => valorQuantidade(value + 1)} className="bg-secundaria w-7 h-6 rounded font-poppins flex items-center justify-center">+</button>
            </div>
        </div>
    )
}