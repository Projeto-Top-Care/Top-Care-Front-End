import { ButtonHTMLAttributes } from "react";

const BotaoGrande = (props : ButtonHTMLAttributes<HTMLButtonElement>) => {
    return(
        <button {...props} className="w-full h-8 px-2 text-preto font-poppins text-base font-regular bg-terciaria rounded-lg hover:bg-blue-200 transition duration-500">
            {props?.title}
        </button>
    )
} 
export default BotaoGrande;