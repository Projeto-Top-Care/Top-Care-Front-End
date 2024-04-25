'use client'

import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

export default function HeaderApresentacao() {

    const [navAberta, setNavAberta] = useState(false)
    const [navStyle, setNavStyle] = useState("bg-primaria z-50 drop-shadow-2xl block h-screen fixed top-0 left-0 w-0 overflow-x-hidden animation duration-300");

    useEffect(() => {
        if (navAberta) {
            setNavStyle("bg-primaria z-50 drop-shadow-2xl block h-screen fixed top-0 left-0 w-1/2 overflow-x-hidden animation duration-300")
        } else {
            setNavStyle("bg-primaria z-50 drop-shadow-2xl block h-screen fixed top-0 left-0 w-0 overflow-x-hidden animation duration-300")
        }
    }, [navAberta])

    return (
        <div className="bg-primaria md:px-20 px-10 md:py-3 py-2 flex md:flex-row flex-row-reverse font-poppins justify-between items-center text-preto">
            <div className=''>
                <a id="div_link" href="./"><img className="md:w-[64px] w-[40px] transition duration-200" src="assets/logo.png"/></a>
            </div>

            <div className="max-sm:hidden flex flex-row md:gap-24 gap-4 justify-center w-full font-poppins">
                <a className="hover:underline md:text-sm text-xs" href="./contato">Contato</a>
                <a className="hover:underline md:text-sm text-xs" href="./lojas">Lojas</a>
                <a className="hover:underline md:text-sm text-xs" href="./Sobre">Sobre nós</a>
            </div>

            <div className="md:hidden flex">
                <button onClick={() => setNavAberta(true)}><IoMenu size={'2rem'} style={{color: "#F5F5F5"}} /></button>
            </div>

            <div className={navStyle}>
                <div className="px-4 py-3 flex flex-col gap-4">
                    <button className="w-full" onClick={() => setNavAberta(false)}><IoClose size={'1.7rem'} style={{color: "#F5F5F5"}} /></button>
                    <div className="flex flex-col gap-4 font-poppins font-medium text-preto">
                        <a className="hover:underline md:text-sm text-sm" href="./contato">Contato</a>
                        <a className="hover:underline md:text-sm text-sm" href="./lojas">Lojas</a>
                        <a className="hover:underline md:text-sm text-sm" href="./Sobre">Sobre nós</a>
                    </div>
                </div>
            </div>
        </div>
    )
}