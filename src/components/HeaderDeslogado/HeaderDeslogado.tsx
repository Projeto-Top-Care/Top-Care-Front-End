'use client'
import { useRouter } from "next/navigation"
import BarraPesquisa from "../BarraPesquisa/BarraPesquisa";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaRegHeart, FaUserCircle, FaSearch, FaStore } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { PiBoneFill } from "react-icons/pi";
import { FaBook, FaPhone } from "react-icons/fa6";

import { useEffect, useState } from "react";
import BotaoPequeno from "../BotaoPequeno";

export default function HeaderDeslogado() {
    const {push} = useRouter();

    const [navAberta, setNavAberta] = useState(false)
    const [navStyle, setNavStyle] = useState("bg-primaria drop-shadow-2xl block h-screen fixed top-0 left-0 w-0 overflow-x-hidden animation duration-300");

    useEffect(() => {
        if (navAberta) {
            setNavStyle("z-50 bg-primaria drop-shadow-2xl block h-screen fixed top-0 left-0 w-1/2 overflow-x-hidden animation duration-300")
        } else {
            setNavStyle("z-50 bg-primaria drop-shadow-2xl block h-screen fixed top-0 left-0 w-0 overflow-x-hidden animation duration-300")
        }
    }, [navAberta])

    return (
        <div>
            <div className="bg-primaria md:px-20 px-6 md:py-3 py-2 flex flex-row-reverse sm:flex-row font-poppins justify-between items-center text-preto">
                <div className='px-6'>
                    <a href="/"><img className="md:w-[64px] w-[40px] " src="../assets/logo.png"/></a>
                </div>

                <div className="flex w-2/3 px-4 max-sm:hidden">
                    <BarraPesquisa placeholder="O que você precisa hoje?" />
                </div>

                <div className='flex max-sm:hidden flex-row gap-6 items-center justify-end'>
                    <BotaoPequeno onClick={() => push('/login')} title="Login"/>
                </div>

                <div className="sm:hidden flex">
                    <button onClick={() => setNavAberta(true)}><IoMenu size={'2rem'} style={{color: "#F5F5F5"}} /></button>
                </div>
            </div>

            <div className="bg-primaria px-6 py-3 sm:hidden flex">
                <BarraPesquisa placeholder="O que você precisa hoje?" />
            </div>


            <div className="bg-terciaria flex max-sm:hidden flex-row justify-center">
                <div className="font-poppins flex flex-row justify-between md:gap-12 gap-2 py-3">
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="/produtos">Produtos</a>
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="/carrinho">Carrinho</a>
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="/lojas">Lojas</a>
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="/contato">Contato</a>
                    <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Ajuda</a>
                </div>
            </div>

            <div className={navStyle}>
                <div className="px-4 py-3 flex flex-col gap-4">
                    <button className="w-full" onClick={() => setNavAberta(false)}><IoClose size={'1.7rem'} style={{color: "#F5F5F5"}} /></button>
                    <div className="flex flex-col gap-1 font-poppins text-preto">
                        <h3 className="font-medium text-sm">Conta</h3>

                        <div onClick={() => push('/login')} className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <BotaoPequeno title="Login" />
                        </div>
                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <FiShoppingBag  size={'0.9rem'} style={{color: "#322828"}} />
                            <a href="/carrinho" className="hover:underline">Sacola</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 font-poppins text-preto">
                        <h3 className="font-medium text-sm">Pet shop</h3>

                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <PiBoneFill  size={'0.9rem'} style={{color: "#322828"}} />
                            <a href="/produtos" className="hover:underline">Ver produtos</a>
                        </div>
                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <FaStore  size={'0.9rem'} style={{color: "#322828"}} />
                            <a href="/lojas" className="hover:underline">Lojas</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 font-poppins text-preto">
                        <h3 className="font-medium text-sm">Outros</h3>

                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <FaPhone size={'0.9rem'} style={{color: "#322828"}} />
                            <a href="/contato" className="hover:underline">Contato</a>
                        </div>
                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <FaBook  size={'0.9rem'} style={{color: "#322828"}} />
                            <a href="/SobreNos" className="hover:underline">Sobre nós</a>
                        </div>
                    </div>

                    {/* <div className="flex flex-col gap-1 font-poppins text-preto">
                        <h3 className="font-semibold text-sm">Serviços</h3>

                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <GiSittingDog  size={'0.9rem'} style={{color: "#322828"}} />
                            <a href="#" className="hover:underline">Ver serviços</a>
                        </div>
                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <RiFilePaperLine  size={'0.9rem'} style={{color: "#322828"}} />
                            <a href="#" className="hover:underline">Planos</a>
                        </div>
                        <div className="flex flex-row gap-2 items-center ml-6 text-xs">
                            <MdOutlinePets  size={'0.9rem'} style={{color: "#322828"}} />
                            <a href="#" className="hover:underline">Pets</a>
                        </div>
                    </div> */}
                    
                </div>
            </div>
        </div>
    )
}