'use client'

import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface IAvaliacaoPet {
    descricao: string,
    nota: number
}

export default function AvaliacaoPet({ nota, descricao }: IAvaliacaoPet) {

    const construirEstrelas = () => {
        const array5 = new Array(5).fill(null);
        return (
            <div className='flex flex-row'>
                {array5.map((a, i) => (
                    <div key={i}>
                        {nota > i ? <AiFillStar style={{ color: "#FFD601", }} size={20} /> : <AiOutlineStar style={{ color: "#FFD601", }} size={20} />}
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="flex flex-row justify-between w-full items-center font-poppins text-preto text-xs sm:text-base">
            <p>{descricao}</p>
            <div>
                {construirEstrelas()}
            </div>
        </div>
    )
}