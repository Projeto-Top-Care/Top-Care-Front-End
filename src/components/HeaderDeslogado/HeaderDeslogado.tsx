'use client'
import { useRouter } from "next/navigation"
import BarraPesquisa from "../BarraPesquisa/BarraPesquisa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function HeaderDeslogado() {
    const {push} = useRouter();

    const [navStyle, setNavStyle] = useState("bg-primaria block h-screen fixed top-0 left-0 w-0 overflow-x-hidden animation duration-300");

    const abrirNav = () => {
        setNavStyle("bg-primaria block h-screen fixed top-0 left-0 w-1/2 overflow-x-hidden animation duration-300")
    }
    const fecharNav = () => {
        setNavStyle("bg-primaria block h-screen fixed top-0 left-0 w-0 overflow-x-hidden animation duration-300")
    }

    // function openNav() {
    //     document.getElementById("mySidenav").style.width = "250px";
    //   }
      
      
    //   function closeNav() {
    //     document.getElementById("mySidenav").style.width = "0";
    //   }

    return (
        <div>
            <div className="bg-primaria md:px-20 px-10 md:py-3 py-2 flex flex-row font-poppins justify-between items-center text-preto">
                <div className=''>
                    <img className="md:w-[64px] w-[40px]" src="assets/logo.png"/>
                </div>

                <div className="md:flex hidden">
                    <BarraPesquisa placeholder="O que você precisa hoje?" />
                </div>

                <div className='md:flex hidden flex-row gap-6 items-center justify-end'>
                    <button className='bg-terciaria rounded-lg w-[112px] py-[5px] px-2 transition ease-in-out delay-150 duration-200 hover:bg-[#c4d5f3]' onClick={()=>push('login')}>
                        Login
                    </button>
                    <button className='bg-terciaria rounded-lg w-[112px] py-[5px] px-2 transition ease-in-out delay-150 duration-200 hover:bg-[#c4d5f3]' onClick={()=>push('cadastro')}>
                        Cadastro
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
                <div>
                    <button onClick={() => fecharNav()}><IoClose size={'1.7rem'} style={{color: "#F5F5F5"}} /></button>
                    <h3>Conta</h3>
                    <p>Perfil</p>
                    <p>Sacola</p>
                </div>
            </div>
        </div>
    )
}