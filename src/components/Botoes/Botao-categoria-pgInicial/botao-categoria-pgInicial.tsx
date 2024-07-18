'use client'
import { useRouter } from "next/navigation";
import React from "react";

interface ICategoriaPgInicial {
    title: string,
    image: string,
    pagina: string
}
const BotaoCategoriaPgInicial = ({ title, image, pagina }: ICategoriaPgInicial) => {
    const { push } = useRouter()

    return (
        <div onClick={() => push(pagina)} className="hover:shadow-md hover:-translate-y-2 transition duration-200 cursor-pointer lg:w-[17rem] w-full flex flex-col items-center justify-between bg-branco border-2 rounded-xl border-cinza px-2 py-2 sm:py-4 gap-2">
            <p className="h-2/5 text-center text-preto font-averia text-base sm:text-lg lg:text-xl font-bold">{title}</p>
            <div className="h-3/5 lg:flex hidden items-center">
                <img className="w" src={image} />
            </div>
        </div>

    )
}
export default BotaoCategoriaPgInicial;