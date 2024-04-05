import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

type avaliacaotype = {
    nomeUsuario: string
    avaliacaoUsuario: string
    fotoUsuario: string
}

const Avaliacao = ({nomeUsuario, avaliacaoUsuario, fotoUsuario}: avaliacaotype) => {
    return (
        
        <div className='flex flex-row px-20 font-poppins'>
            <div className='flex flex-row bg-branco gap-2 shadow-md p-4 rounded-lg w-full items-start'>
              
                <div className='h-14 w-14 border rounded-full'>
                    <img className='w-full h-full rounded-full' src={fotoUsuario} />
                </div>

                <div className='w-full'>

                    <div className='flex flex-row justify-between py-2'>
                        <p className='pl-2 font-regular text-sm text-preto'>{nomeUsuario}</p>
                        <div className="flex flex-row gap-2">
                            <AiOutlineStar size={20} style={{ color: "#FFD601", }}/>
                            <AiFillStar size={20} style={{ color: "#FFD601", }}/>
                            <AiFillStar size={20} style={{ color: "#FFD601", }}/>
                            <AiFillStar size={20} style={{ color: "#FFD601", }}/>
                            <AiFillStar size={20} style={{ color: "#FFD601", }}/>
                        </div>
                    </div>
                   
                    <div className='h-[1px] bg-preto w-full'>

                    </div>

                  
                    <div className='flex flex-col p-3'>
                        <p className='pl-2 py-2 font-regular text-sm text-preto'>{avaliacaoUsuario}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Avaliacao;