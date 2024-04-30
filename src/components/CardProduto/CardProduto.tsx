'use client'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/navigation";
import {Produto} from '@/types/produto'

import { useEffect, useState } from 'react'
import React from "react";

const CardProduto = ({id, nomeProduto, notaDeAvaliacao, imagemProduto, precoAntigoDoProduto, desconto, precoNovo}: Produto) => {

    const [favorito, setFavorito] = useState<boolean>(false);
    const {push} = useRouter()

    useEffect(() => {
        iconeFavorito()
    }, [favorito])

    const iconeFavorito = () => {
        return (favorito? 
            <FaHeart style={{color: "#B5A6F3",}} className="w-4"/>: 
            <FaRegHeart style={{color: "#4f4f4f",}} className="w-4"/>)
    }

    return (
        <div className='cursor-pointer flex flex-col gap-3 border-cinza border-[1px] rounded-lg w-[11rem] font-poppins px-2 py-3' onClick={()=>push(`/produtos/${nomeProduto}?id=${id}`)}>

            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-[0.2rem] items-center justify-center'>
                    <AiFillStar style={{ color: "#FFD601", }} className="w-5"/>
                    <p className='text-xs font-medium text-cinza-escuro'>{notaDeAvaliacao}</p>
                </div>

                <div onClick={() => setFavorito(!favorito)}>
                    <button onClick={() => setFavorito(!favorito)} className="transition duration-100 active:scale-75">
                        {iconeFavorito()}
                    </button>
                </div>

            </div>

            <div className='flex flex-col items-center'>
                <h4 className='text-base font-medium text-preto text-center line-clamp-1'>{nomeProduto}</h4>
                <img src={imagemProduto} />
                {/* <img src='assets/racao.png' /> */}
                <h5 className='text-xs font-medium text-cinza-escuro'><span className='line-through'>R${precoAntigoDoProduto} </span><span className='text-[11px]'>{desconto}</span></h5>
                <h5 className='font-semibold text-preto'>R${precoNovo}</h5>
            </div>

            <div className='flex flex-row gap-1 justify-between'>
                <button className='transition ease-in-out delay-150 duration-200 text-xs text-preto font-medium bg-secundaria rounded-lg w-[76%] h-7 hover:bg-[#9EBF40]'>Comprar agora</button>
                <button className='bg-primaria rounded-lg w-[24%] transition ease-in-out delay-150 duration-200 hover:bg-[#826cda] flex justify-center items-center'>
                    <FiShoppingBag style={{ color: "#322828",}} className="w-4"/>
                </button>
            </div>
        </div>
    )
}
export default CardProduto;