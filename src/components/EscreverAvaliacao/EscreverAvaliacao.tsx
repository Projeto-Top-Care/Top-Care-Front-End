'use client'

import { FaRegPaperPlane } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { LuPencil } from "react-icons/lu";

import { useState, useEffect } from 'react'

type avaliacaotype = {
    nomeUsuario: string
    avaliacaoUsuario: string
    fotoUsuario: string
}

const EscreverAvaliacao = ({nomeUsuario, avaliacaoUsuario, fotoUsuario}: avaliacaotype) => {

    const [avaliado, setAvaliado] = useState<boolean>(false)
    const [avaliacao, setAvaliacao] = useState<string>(avaliacaoUsuario)
    
    useEffect(() => {
        if(avaliacao == "") {
            setAvaliado(false)
        }
    }, [avaliado])

    return (
        <div className='flex flex-row px-20 font-poppins'>
            <div className='flex flex-row bg-terciaria gap-2 shadow-lg p-4 rounded-lg w-full items-start'>
          
                <div className='h-14 w-14 border rounded-full'>
                    <img className='w-full h-full rounded-full' src={fotoUsuario} />
                </div>
           
                <div className='w-full'>
                   
                    <div className='flex flex-row justify-between py-2'>
                        <p className='pl-2 font-regular text-sm text-preto'>{nomeUsuario}</p>
                    </div>

                    <div className='h-[1px] bg-cinza-escuro w-full'/>
                
                {!avaliado && (
                    <div className='flex flex-col items-center p-3'>
                        <div>
                            <p className='pl-2 py-3 font-regular text-xs text-cinza-escuro'>
                                Deixe sua avaliação aqui também!
                            </p>
                        </div>

                        <div className='w-full flex flex-row justify-center gap-2'>
                            <div className='bg-branco flex flex-row w-[90%] justify-between border-[1px] border-cinza rounded-lg pr-2'>
                                <input 
                                    placeholder='Digite sua avaliação' 
                                    className='focus:outline-none w-full font-regular text-xs p-3 rounded-lg bg-branco' 
                                    onChange={(e)=>setAvaliacao(e.target.value)}
                                    value={avaliacao}
                                />
                                
                                <div className='flex flex-row items-center gap-1'>
                                    <AiOutlineStar size={20} style={{ color: "#FFD601", }}/>
                                    <AiFillStar size={20} style={{ color: "#FFD601", }}/>    
                                    <AiFillStar size={20} style={{ color: "#FFD601", }}/>
                                    <AiFillStar size={20} style={{ color: "#FFD601", }}/>
                                    <AiFillStar size={20} style={{ color: "#FFD601", }}/>
                                </div>
                            </div>

                            <button className='transition ease-in-out delay-150 duration-200 hover:bg-[#9EBF40] bg-secundaria px-3 rounded-lg' 
                                onClick={() => setAvaliado(true)}>
                                <FaRegPaperPlane  style={{ color: "#4F4F4F", }} className='w-5'/>
                            </button>
                        </div>
                    </div>
                )}
                {avaliado &&(
                    <div className='flex flex-col items-start p-3 pl-5'>
                        <p className='py-2 font-regular text-sm text-preto break-words hyphens-auto'>
                            {avaliacao}
                        </p>

                        <button className='transition ease-in-out delay-150 duration-200 hover:bg-[#9EBF40] py-2 px-4 rounded-lg 
                            font-medium text-xs text-cinza-escuro bg-secundaria flex flex-rpw gap-1 items-center' 
                            onClick={() => {setAvaliado(false)}}>
                                <LuPencil size={15} style={{color: "#322828",}}/> Editar avaliação
                        </button>
                    </div>
                )}
                
                    
                </div>
            </div>
        </div>
    )
}
export default EscreverAvaliacao;