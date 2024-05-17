'use client'

import { FaRegPaperPlane } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { LuPencil } from "react-icons/lu";

import { useState, useEffect } from 'react'
import React from "react";

type avaliacaotype = {
    nomeUsuario: string
    fotoUsuario: string
}

const EscreverAvaliacao = ({ nomeUsuario, fotoUsuario }: avaliacaotype) => {

    const [avaliado, setAvaliado] = useState<boolean>(false)
    const [avaliacao, setAvaliacao] = useState<string>("")
    const [nota, setNota] = useState<number>(0)

    useEffect(() => {
        if (avaliacao == "") {
            setAvaliado(false)
        }
    }, [avaliado])

    const construirEstrelas = () => {
        const estrelasVazias = 5 - nota
        const array5 = new Array(5).fill(null);
        return (
            <div className='flex flex-row'>
                {array5.map((a, i) => (
                    <div key={i} onClick={() => (!avaliado ? setNota(i + 1) : '')} className='cursor-pointer'>
                        {nota > i ? <AiFillStar style={{ color: "#FFD601", }} size={25} /> : <AiOutlineStar style={{ color: "#FFD601", }} size={25} />}
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className='flex flex-row w-[90%] m-auto font-poppins'>
            <div className='flex flex-col bg-terciaria gap-2 shadow-lg p-4 rounded-lg w-full items-start'>
                <div className="flex flex-row w-full">
                    <div className='md:h-14 md:w-14 h-12 w-14 border rounded-full md:mr-2 mr-0'>
                        <img className='w-full h-full rounded-full' src={fotoUsuario} />
                    </div>
                    <div className='flex flex-col justify-center items-end w-full'>
                        <div className="flex flex-row w-full justify-between items-end mb-2">
                            <p className='pl-2 font-regular md:text-sm text-xs text-preto'>{nomeUsuario}</p>
                            <p className="max-sm:hidden">{avaliado ? construirEstrelas() : ''}</p>
                            {
                                avaliado && (
                                    <div className="font-poppins text-xs text-cinza-escuro md:hidden flex flex-row items-center">
                                        <div>
                                            {nota}
                                        </div>
                                        <AiFillStar style={{ color: "#FFD601", }} size={18} />
                                    </div>
                                )
                            }
                        </div>
                        <div className='h-[1px] bg-preto w-full'></div>
                    </div>
                </div>

                <div className='w-full'>
                    {!avaliado && (
                        <div className='flex flex-col items-center'>
                            <div className="flex flex-col items-center mb-2">
                                <p className='font-regular text-xs text-cinza-escuro'>
                                    Deixe sua avaliação aqui também!
                                </p>
                                <div className="flex items-center md:hidden">
                                    {construirEstrelas()}
                                </div>
                            </div>

                            <div className='w-full flex flex-row justify-center gap-2'>
                                <div className='bg-branco flex flex-row w-[90%] justify-between border-[1px] border-cinza rounded-lg pr-2'>
                                    <input
                                        placeholder='Digite sua avaliação'
                                        className='focus:outline-none w-full font-regular text-xs p-3 rounded-lg bg-branco'
                                        onChange={(e) => setAvaliacao(e.target.value)}
                                        value={avaliacao}
                                    />
                                    <div className="flex items-center max-sm:hidden">
                                        {construirEstrelas()}
                                    </div>
                                </div>

                                <button className='transition ease-in-out delay-150 duration-200 hover:bg-[#9EBF40] bg-secundaria px-3 rounded-lg'
                                    onClick={() => setAvaliado(true)}>
                                    <FaRegPaperPlane style={{ color: "#4F4F4F", }} className='w-5' />
                                </button>
                            </div>
                        </div>
                    )}
                    {avaliado && (
                        <div className='flex flex-col items-start pl-5'>
                            <p className='py-2 font-regular text-sm text-preto break-words hyphens-auto'>
                                {avaliacao}
                            </p>

                            <button className='transition ease-in-out delay-150 duration-200 hover:bg-[#9EBF40] py-2 px-4 rounded-lg 
                            font-medium text-xs text-cinza-escuro bg-secundaria flex flex-rpw gap-1 items-center'
                                onClick={() => { setAvaliado(false) }}>
                                <LuPencil size={15} style={{ color: "#322828", }} /> Editar avaliação
                            </button>
                        </div>
                    )}


                </div>
            </div>
        </div>
    )
}
export default EscreverAvaliacao;