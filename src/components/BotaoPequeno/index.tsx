import { ButtonHTMLAttributes } from "react";

export default function BotaoPequeno(props : ButtonHTMLAttributes<HTMLButtonElement>){
    return(
        <button className="bg-secundaria font-poppins w-32 px-4 h-8 rounded-lg hover:bg-verde-hover duration-700" {...props}>
            {props?.title}
        </button> 
    )
}