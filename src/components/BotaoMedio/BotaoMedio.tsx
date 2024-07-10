import { ButtonHTMLAttributes } from "react";

const BotaoMedio = (props : ButtonHTMLAttributes<HTMLButtonElement>) => {
    return(
        <button {...props} className="w-36 h-10 px-2 text-preto font-poppins font-medium text-lg bg-primaria rounded-lg hover:bg-indigo-500 transition duration-500">
            {props?.title}
        </button>
    )
} 
export default BotaoMedio;