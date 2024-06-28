import { color } from "@mui/system";
import {MouseEventHandler } from "react";

interface IBotaoGrande{
    title: string,
    background: string,
    color: string,
    type: 'submit' | 'button',
    fontSize?: string,
    height?: string, 
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

const BotaoGrande = ({title, background, color, type, fontSize, height, onClick} : IBotaoGrande) => {
    return(
        <button onClick={onClick} type={type} className={`w-full ${height ? height : 'h-8'} px-2 ${color} ${fontSize ? fontSize : 'text-sm lg:text-base'} font-poppins font-regular ${background} rounded-lg ${background == 'bg-primaria'? 'hover:bg-indigo-200' : (background == 'bg-secundaria' ? 'hover:bg-[#a8cf38]': 'hover:bg-sky-200')} transition duration-500`}>
            {title.includes('/assets') ? <img src={title} alt='' className={'w-[80%] md:w-[60%] lg:w-[40%] m-auto'}/> : title}
        </button>
    )
} 
export default BotaoGrande;