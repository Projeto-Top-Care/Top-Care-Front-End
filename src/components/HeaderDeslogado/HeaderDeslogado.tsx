'use client'
import { useRouter } from "next/navigation"
import BarraPesquisa from "../BarraPesquisa/BarraPesquisa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { PiBoneFill } from "react-icons/pi";
import { FaStore } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";
import { MdOutlinePets } from "react-icons/md";
import { RiFilePaperLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

import { useState } from "react";

export default function HeaderDeslogado() {
    const {push} = useRouter();

    const [navStyle, setNavStyle] = useState("bg-primaria drop-shadow-2xl block h-screen fixed top-0 left-0 w-0 overflow-x-hidden animation duration-300");

    const abrirNav = () => {
        setNavStyle("bg-primaria drop-shadow-2xl block h-screen fixed top-0 left-0 w-1/2 overflow-x-hidden animation duration-300")
    }
    const fecharNav = () => {
        setNavStyle("bg-primaria drop-shadow-2xl block h-screen fixed top-0 left-0 w-0 overflow-x-hidden animation duration-300")
    }

    return (
        <div>
            <div className="bg-primaria md:px-20 px-10 md:py-3 py-2 flex flex-row-reverse md:flex-row font-poppins justify-between items-center text-preto">
                <div className=''>
                    <img className="md:w-[64px] w-[40px]" src="assets/logo.png"/>
                </div>

                <div className="md:flex w-2/3 px-4 hidden">
                    <BarraPesquisa placeholder="O que você precisa hoje?" />
                </div>

                <div className='md:flex hidden flex-row gap-6 items-center justify-end'>
                    <button className='bg-terciaria rounded-lg w-[112px] py-[5px] px-2 transition ease-in-out delay-150 duration-200 hover:bg-[#c4d5f3]' onClick={()=>push('login')}>
                        Login
                    </button> 
                </div>

                <div className="md:hidden flex">
                    <button onClick={() => abrirNav()}><IoMenu size={'2rem'} style={{color: "#F5F5F5"}} /></button>
                </div>
            </div>

            <div className="bg-terciaria md:flex hidden flex-row justify-center">
                <div className="font-poppins flex flex-row justify-between md:gap-12 gap-2 py-3">
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Produtos</a>
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Serviços</a>
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Lojas</a>
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Pets</a>
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Planos</a>
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Ajuda</a>
                </div>
            </div>

            <div className={navStyle}>
                <div className="px-4 py-3 flex flex-col gap-4">
                    <button className="w-full" onClick={() => fecharNav()}><IoClose size={'1.7rem'} style={{color: "#F5F5F5"}} /></button>
                    <div className="flex flex-col gap-1 font-poppins text-preto">
                        <h3 className="font-semibold text-sm">Conta</h3>

                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <FaUserCircle  size={'0.9rem'} style={{color: "#322828"}} />
                            <p className="hover:underline">Perfil</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <FaRegHeart  size={'0.9rem'} style={{color: "#322828"}} />
                            <p className="hover:underline">Sacola</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <FiShoppingBag  size={'0.9rem'} style={{color: "#322828"}} />
                            <p className="hover:underline">Favritos</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 font-poppins text-preto">
                        <h3 className="font-semibold text-sm">Pet shop</h3>

                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <PiBoneFill  size={'0.9rem'} style={{color: "#322828"}} />
                            <p className="hover:underline">Ver produtos</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <FaSearch  size={'0.9rem'} style={{color: "#322828"}} />
                            <p className="hover:underline">Buscar produtos</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <FaStore  size={'0.9rem'} style={{color: "#322828"}} />
                            <p className="hover:underline">Lojas</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 font-poppins text-preto">
                        <h3 className="font-semibold text-sm">Serviços</h3>

                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <GiSittingDog  size={'0.9rem'} style={{color: "#322828"}} />
                            <p className="hover:underline">Ver serviços</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <RiFilePaperLine  size={'0.9rem'} style={{color: "#322828"}} />
                            <p className="hover:underline">Planos</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <MdOutlinePets  size={'0.9rem'} style={{color: "#322828"}} />
                            <p className="hover:underline">Pets</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}