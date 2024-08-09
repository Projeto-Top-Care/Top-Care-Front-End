'use client'
import { useRouter } from "next/navigation"
import BarraPesquisa from "../BarraPesquisa/BarraPesquisa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { useEffect, useRef, useState } from "react";
import { useUserID } from "@/context/UserIDContext";
import BotaoGrande from "../Botoes/BotaoGrande/BotaoGrande";

export default function HeaderAdm() {
    const { push } = useRouter();
    const { userID, setUserId } = useUserID()
    const navRef = useRef<HTMLDivElement>(null)

    const [navAberta, setNavAberta] = useState(false)
    const [animation, setAnimation] = useState<boolean>(false)

    useEffect(() => {
        if (!animation) {
            setTimeout(() => {
                setNavAberta(false)
                setAnimation(true)
            }, 290)
        }
    }, [animation])

    useEffect(() => {
        const storedItem = localStorage.getItem('idUser');
        if (storedItem) setUserId(storedItem);
    }, []);

    const handleClickOutside = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setNavAberta(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLinkClick = (url: string) => {
        push(url);
        setNavAberta(false);
    };

    const logout = () => {
        setUserId("")
        push('/')
    }

    return (
        <div>
            <div className="bg-primaria md:px-20 px-6 md:py-3 py-2 flex flex-row-reverse sm:flex-row font-poppins justify-between items-center text-preto">
                <div className='px-3'>
                    <div onClick={() => push("/dashboard")}><img className="md:w-[70px] w-[40px] cursor-pointer" src="../assets/logo.png" /></div>
                </div>

                <div className="flex w-2/3 px-4 max-sm:hidden">
                    <BarraPesquisa placeholder="O que você precisa hoje?" />
                </div>

                <div className='flex max-sm:hidden flex-row gap-4 items-center justify-end w-[10%]'>
                    <BotaoGrande title="Sair" type="button" background="bg-terciaria" onClick={() => logout()} />
                </div>

                <div className="sm:hidden flex">
                    <button onClick={() => setNavAberta(true)}><IoMenu size={'2rem'} style={{ color: "#F5F5F5" }} /></button>
                </div>
            </div>

            <div className="bg-primaria px-6 py-2 sm:hidden flex">
                <BarraPesquisa placeholder="O que você precisa hoje?" />
            </div>

            <div className="bg-terciaria flex max-sm:hidden flex-row justify-center">
                <div className="font-poppins flex flex-row justify-between md:gap-20 gap-2 py-3">
                    <div className="underline-offset-4 decoration-preto hover:underline md:text-sm text-[0.78rem] cursor-pointer" onClick={() => push("./dashboard")}>Dashboard</div>
                    <div className="underline-offset-4 decoration-preto hover:underline md:text-sm text-[0.78rem] cursor-pointer" onClick={() => push("./funcionarios")}>Funcionarios</div>
                    <div className="underline-offset-4 decoration-preto hover:underline md:text-sm text-[0.78rem] cursor-pointer" onClick={() => push("/visualizarProdutos")}>Produtos</div>
                    <div className="underline-offset-4 decoration-preto hover:underline md:text-sm text-[0.78rem] cursor-pointer" onClick={() => push("/agendamentos")}>Agendamentos</div>
                    <div className="underline-offset-4 decoration-preto hover:underline md:text-sm text-[0.78rem] cursor-pointer" onClick={() => push("/pedidos")}>Pedidos</div>
                    <div className="underline-offset-4 decoration-preto hover:underline md:text-sm text-[0.78rem] cursor-pointer" onClick={() => push("./visualizarServicos")}>Serviços</div>
                </div>
            </div>
            {
                navAberta && (
                    <div
                        className={`${animation ? 'animate-slide-left' : 'animate-slide-rigth'} fixed top-0 left-0 w-full h-full bg-preto opacity-30 z-50 duration-300`}
                        onClick={() => setNavAberta(false)}
                    ></div>
                )
            }
            {
                navAberta && (
                    <div ref={navRef} className={`z-[100] bg-branco block absolute top-0 left-0 w-full h-fit pb-12 overflow-x-hidden ${animation ? 'animate-slide-left' : 'animate-slide-right'}`}>
                        <div className="p-6 flex flex-col gap-4">
                            
                            <button className="w-full" onClick={() => setNavAberta(false)}><IoClose size={'2.5rem'} style={{ color: "#6954C0" }} /></button>

                            <div className="flex flex-col gap-1 font-poppins text-preto">
                                <h3 className="font-semibold text-lg">Administração</h3>

                                <div className="flex flex-col w-full">
                                    <a onClick={() => handleLinkClick('/dashboard')} className="hover:underline text-roxo-select font-medium text-sm">Dashboard</a>
                                    <a onClick={() => handleLinkClick('/visualizarProdutos')} className="hover:underline text-roxo-select font-medium text-sm">Produtos</a>
                                    <a onClick={() => handleLinkClick('/agendamentos')} className="hover:underline text-roxo-select font-medium text-sm">Agendamentos</a>
                                    <a onClick={() => handleLinkClick('/pedidos')} className="hover:underline text-roxo-select font-medium text-sm">Pedidos</a>
                                    <a onClick={() => handleLinkClick('/visualizarServicos')} className="hover:underline text-roxo-select font-medium text-sm">Serviços</a>
                                    <a onClick={() => logout()} className="hover:underline text-roxo-select font-medium text-sm">Sair</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}