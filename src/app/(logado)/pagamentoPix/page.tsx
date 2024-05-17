'use client'
import InputText from "@/components/InputText/InputText"
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande"
import ResumoPedido from "@/components/ResumoPedido/resumoPedido"
import TituloLinha from "@/components/TituloLinha/TituloLinha"
import { useState } from "react"
import { IoCopyOutline } from "react-icons/io5"

export default function pagamentoPix() {

    const produtos = ["Kit para banho Sanol Cachorros e Gatos", "Pote para ração em formato de pata de cachorro", "Coleira com pingente tamanho M unissex para cães e gatos"]
    const quantidades = [1, 1, 1]
    const precos = [11.1, 11.1, 11.1]

    const [open, setOpen] = useState<boolean>(false)
    const [openModal, setOpenModal] = useState<boolean>(false)

    const copyContent = (content: string) => {
        navigator.clipboard.writeText(content);
        setOpen(true)
        setTimeout(() => {
            setOpen(false)
        }, 4000)
    }

    const showCopied = () => {
        if (open) {
            return (
                <div className="z-50">
                    <div className={`fixed top-3 left-1/2 -translate-x-1/2 lg:w-[40%] w-[50%] animate-slide-down drop-shadow-lg`}>
                        <div className="flex items-center justify-center lg:h-10 h-8 bg-terciaria rounded font-poppins">
                            <p className="text-xs lg:text-base">Copiado!</p>
                        </div>
                    </div>
                </div>
            )
        }
    }


    return (
        <main>
            {showCopied()}
            <div className="py-6 sm:py-12 flex flex-col gap-4">
                <TituloLinha titulo="Pagamento" />

                <section className="flex flex-col-reverse gap-2 sm:flex-row sm:px-2 md:px-8 lg:px-20">
                    <section className="p-4">
                        <ResumoPedido produtos={produtos} quantidades={quantidades} precos={precos} desconto={9} frete={0} />
                    </section> 

                    <section className="font-poppins gap-4 text-preto flex flex-col justify-center items-center sm:w-[50%]">
                        <p className="text-xs sm:text-sm">Você tem até 1 hora para pagar!</p>

                        <img className="size-36" src="./assets/qrcode.png" />

                        <div className="sm:w-[50%] w-[80%]">
                            <p className="text-sm">Pix copia e cola</p>
                            <div className="flex flex-row justify-between items-center gap-4 border-[1px] border-cinza rounded-md p-2">
                                    <p className="line-clamp-1 font-poppins md:text-xs text-sm text-cinza-escuro break-all">01010101sfsdasdafdasfsdf01010101010101010101010101010101</p>
                                    <IoCopyOutline color="#4F4F4F" onClick={() => copyContent("01010101sfsdasdafdasfsdf01010101010101010101010101010101")} className='cursor-pointer' />
                            </div>
                        </div>
                    </section>                    
                </section>   

            </div>
        </main>
    )
}