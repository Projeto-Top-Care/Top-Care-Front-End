'use client'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

import { useEffect, useState } from 'react'

const CardProduto = () => {

    const [favorito, setFavorito] = useState<boolean>(false);

    useEffect(() => {
        iconeFavorito()
    }, [favorito])

    const iconeFavorito = () => {
        if (favorito == false){
            return (
                <FaRegHeart style={{color: "#4f4f4f",}} className="w-4" onClick={() => setFavorito(true)}/>
            )
        } else {
            return (
                <FaHeart style={{color: "#4f4f4f",}} className="w-4" onClick={() => setFavorito(true)}/>
            )
        }
    }

    return (
        <div className='flex flex-col gap-3 border-cinza border-[1px] rounded-lg w-[11rem] h-[16.6rem] font-poppins px-2 py-3'>

            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-[0.2rem] items-center justify-center'>
                    <AiFillStar style={{ color: "#FFD601", }} className="w-5"/>
                    <p className='text-xs font-medium text-cinza-escuro'>4,2</p>
                </div>

                <div onClick={() => setFavorito(!favorito)}>
                    {iconeFavorito()}
                </div>

            </div>

            <div className='flex flex-col items-center'>
                <h4 className='text-base font-medium text-preto '>Ração Pedgree</h4>
                <img src='assets/racao.png' />
                <h5 className='text-xs font-medium text-cinza-escuro'><span className='line-through'>R$170,00 </span><span className='text-[11px]'>-16%</span></h5>
                <h5 className='font-semibold text-preto'>R$142,80</h5>
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