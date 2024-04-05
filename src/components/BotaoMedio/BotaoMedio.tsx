import { ButtonHTMLAttributes } from "react";

const BotaoMedio = (props : ButtonHTMLAttributes<HTMLButtonElement>) => {
    return(
        <button {...props} className="w-36 h-10 px-2 text-preto font-poppins text-lg font-bold bg-primaria rounded-lg hover:bg-violet-200 transition duration-500">
            {props?.title}
        </button>
    )
} 
export default BotaoMedio;