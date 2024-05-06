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

import { useEffect, useState } from "react";

export default function HeaderLogado() {

    const [navAberta, setNavAberta] = useState(false)
    const [navStyle, setNavStyle] = useState("bg-primaria drop-shadow-2xl block h-screen fixed top-0 left-0 w-0 overflow-x-hidden animation duration-300");

    useEffect(() => {
        if (navAberta) {
            setNavStyle("z-50 bg-primaria drop-shadow-2xl block h-screen fixed top-0 left-0 w-1/2 overflow-x-hidden animation duration-300")
        } else {
            setNavStyle("z-50 bg-primaria drop-shadow-2xl block h-screen fixed top-0 left-0 w-0 overflow-x-hidden animation duration-300")
        }
    }, [navAberta])

    return(
        <div>
            <div className="bg-primaria md:px-20 px-10 md:py-3 py-2 flex flex-row-reverse md:flex-row font-poppins justify-between items-center text-preto">
                <div className='px-3'>
                    <a><img className="md:w-[70px] w-[40px]" src="../assets/logo.png"/></a>
                </div>

                <div className="flex w-2/3 px-4 max-sm:hidden">
                    <BarraPesquisa placeholder="O que você precisa hoje?" />
                </div>
                
                <div className='flex maz-sm:hidden flex-row gap-4 items-center justify-end'>
                    <button><FiShoppingBag size={'1.2rem'} style={{ color: "#322828"}} /></button>
                    <button><FaRegHeart size={'1.3rem'} style={{color: "#32282"}} /></button>
                    <button><FaUserCircle size={'1.8rem'} style={{color: "#32282"}} /></button>
                </div>

                <div className="md:hidden flex">
                    <button onClick={() => setNavAberta(true)}><IoMenu size={'2rem'} style={{color: "#F5F5F5"}} /></button>
                </div>
            </div> 

            <div className="bg-terciaria flex maz-sm:hidden flex-row justify-center">
                <div className="font-poppins flex flex-row justify-between md:gap-12 gap-2 py-3">
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="/produtos">Produtos</a>
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Serviços</a>
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="/lojas">Lojas</a>
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Pets</a>
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Planos</a>
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Ajuda</a>
                </div>
            </div>

            <div className={navStyle}>
                <div className="px-4 py-3 flex flex-col gap-4">
                    <button className="w-full" onClick={() => setNavAberta(false)}><IoClose size={'1.7rem'} style={{color: "#F5F5F5"}} /></button>
                    <div className="flex flex-col gap-1 font-poppins text-preto">
                        <h3 className="font-semibold text-sm">Conta</h3>

                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <FaUserCircle  size={'0.9rem'} style={{color: "#322828"}} />
                            <a href="/perfil" className="hover:underline cursor">Perfil</a>
                        </div>
                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <FaRegHeart  size={'0.9rem'} style={{color: "#322828"}} />
                            <a href="" className="hover:underline cursor">Sacola</a>
                        </div>
                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <FiShoppingBag  size={'0.9rem'} style={{color: "#322828"}} />
                            <a href="" className="hover:underline cursor">Favoritos</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 font-poppins text-preto">
                        <h3 className="font-semibold text-sm">Pet shop</h3>

                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <PiBoneFill  size={'0.9rem'} style={{color: "#322828"}} />
                            <a href="/produtos" className="hover:underline cursor">Ver produtos</a>
                        </div>
                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <FaSearch  size={'0.9rem'} style={{color: "#322828"}} />
                            <a href="" className="hover:underline cursor">Buscar produtos</a>
                        </div>
                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <FaStore  size={'0.9rem'} style={{color: "#322828"}} />
                            <a href="/lojas" className="hover:underline cursor">Lojas</a>
                        </div>
                    </div>

                    {/* <div className="flex flex-col gap-1 font-poppins text-preto">
                        <h3 className="font-semibold text-sm">Serviços</h3>

                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <GiSittingDog  size={'0.9rem'} style={{color: "#322828"}} />
                            <p className="hover:underline cursor">Ver serviços</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <RiFilePaperLine  size={'0.9rem'} style={{color: "#322828"}} />
                            <p className="hover:underline cursor">Planos</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <MdOutlinePets  size={'0.9rem'} style={{color: "#322828"}} />
                            <p className="hover:underline cursor">Pets</p>
                        </div>
                    </div> */}
                    
                </div>
            </div>
        </div>
    )
}