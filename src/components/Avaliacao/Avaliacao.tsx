import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

type avaliacaotype = {
    nomeUsuario: string
    avaliacaoUsuario: string
    fotoUsuario: string
    estrelas: JSX.Element
    notaAvaliacao: number
}

const Avaliacao = ({ nomeUsuario, avaliacaoUsuario, fotoUsuario, estrelas, notaAvaliacao }: avaliacaotype) => {
    return (

        <div className='flex flex-row w-[90%] m-auto font-poppins'>
            <div className='flex flex-col bg-branco shadow-md p-4 md:rounded-lg rounded-2xl w-full items-start'>
                <div className="flex flex-row w-full">
                    <div className='md:h-14 md:w-14 h-12 w-14 border rounded-full md:mr-2 mr-0'>
                        <img className='w-full h-full rounded-full' src={fotoUsuario} />
                    </div>
                    <div className='flex flex-col justify-center items-end w-full'>
                        <div className="flex flex-row w-full justify-between items-end mb-2">
                            <p className='pl-2 font-regular md:text-sm text-xs text-preto'>{nomeUsuario}</p>
                            <p className="max-sm:hidden">{estrelas}</p>
                            <div className="font-poppins text-xs text-cinza-escuro md:hidden flex flex-row items-center">
                                <div>
                                    {notaAvaliacao.toString().replace(".", ",")}
                                </div>
                                <AiFillStar style={{ color: "#FFD601", }} size={18} /></div>
                        </div>
                        <div className='h-[1px] bg-preto w-full'></div>
                    </div>
                </div>
                <div className='w-full flex justify-end md:mt-0 mt-2'>
                    <div className='flex flex-col md:px-3 p-0 w-[96%]'>
                        <p className='md:pl-2 md:py-2 p-0 font-regular md:text-sm text-xs text-preto'>{avaliacaoUsuario}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Avaliacao;