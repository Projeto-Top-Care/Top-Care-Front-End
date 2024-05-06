import { ButtonHTMLAttributes } from "react";

export default function BotaoPequeno(props : ButtonHTMLAttributes<HTMLButtonElement>){
    return(
        <button className="bg-terciaria font-poppins w-32 px-4 h-6 sm:h-8 rounded-lg hover:bg-azul-hover duration-700" {...props}>
            {props?.title}
        </button> 
    )
}