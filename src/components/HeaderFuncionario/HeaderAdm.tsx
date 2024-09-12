'use client'
import { useRouter } from "next/navigation"
import BarraPesquisa from "../BarraPesquisa/BarraPesquisa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { useEffect, useRef, useState } from "react";
import { useUserID } from "@/context/UserIDContext";
import BotaoGrande from "../Botoes/BotaoGrande/BotaoGrande";
import DoisBotoes from "../Pop-up/DoisBotoes/DoisBotoes";

export default function HeaderFuncionario() {
    const { push } = useRouter();
    const { userID, setUserId } = useUserID()
    const navRef = useRef<HTMLDivElement>(null)

    const [animation, setAnimation] = useState<boolean>(false)
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [sim, setSim] = useState<boolean>(false)

    useEffect(() => {
        if (!animation) {
            setTimeout(() => {
                setAnimation(true)
            }, 290)
        }
    }, [animation])

    useEffect(() => {
        const storedItem = localStorage.getItem('idUser');
        if (storedItem) setUserId(storedItem);
    }, []);


    const logout = () => {
        setOpenModal(true)
    }

    useEffect(() => {
        if (sim) {
            setUserId("")
            push("/")
        }
    }, [sim])

    return (
        <div>
            <div className="bg-primaria md:px-20 px-6 md:py-3 py-2 flex flex-row-reverse sm:flex-row font-poppins justify-between items-center text-preto">
                <div className='px-3'>
                    <div onClick={() => push("/dashboard")}><img className="md:w-[70px] w-[40px] cursor-pointer" src="../assets/logo.png" /></div>
                </div>

                <div className='flex flex-row gap-4 items-center justify-end w-[10%]'>
                    <BotaoGrande title="Sair" type="button" background='terciaria' onClick={() => logout()} />
                </div>
            </div>

            <div className="bg-primaria px-6 py-2 sm:hidden flex">
                <BarraPesquisa placeholder="O que você precisa hoje?" />
            </div>
            
            {openModal && (
                <div className="z-50 w-full absolute">
                    <div className='fixed top-0 left-0 w-full h-full bg-fundo-modal' onClick={() => setOpenModal(false)}></div>
                    <div className="fixed lg:w-[25%] w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                        <DoisBotoes openParms={setOpenModal} texto="Você deseja mesmo sair?" sim={setSim} />
                    </div>
                </div>
            )}
        </div>
    )
}