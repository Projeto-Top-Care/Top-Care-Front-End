'use client'
import { useRouter } from "next/navigation";
import React from "react";

interface ICategoriaPgInicial{
    title: string,
    image: string,
    pagina: string
}
const BotaoCategoriaPgInicial = ({title, image, pagina} :   ICategoriaPgInicial) => {
    const {push} = useRouter()
    
    return(
        <div onClick={()=> push(pagina)} className="hover:shadow-md hover:translate-y-2 transition duration-200 cursor-pointer sm:w-[17rem] w-full flex flex-col items-center justify-between bg-branco border-2 rounded-xl border-cinza py-2 sm:py-4 gap-2">
            <p className="text-center text-preto font-averia text-base sm:text-xl font-bold">{title}</p>
            <img className="sm:flex hidden w-auto" src={image} />
        </div>

    )
} 
export default BotaoCategoriaPgInicial;