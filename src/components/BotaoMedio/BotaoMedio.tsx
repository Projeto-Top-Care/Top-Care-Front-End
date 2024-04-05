import { ButtonHTMLAttributes } from "react";

const BotaoMedio = (props : ButtonHTMLAttributes<HTMLButtonElement>) => {
    return(
        <button {...props} className="w-[12%] h-10 text-preto font-poppins text-lg font-bold bg-primaria rounded-lg hover:bg-violet-500 transition duration-500 hover:text-branco">
            {props?.title}
        </button>
    )
} 
export default BotaoMedio;