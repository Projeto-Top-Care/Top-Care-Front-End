import { MouseEventHandler } from "react"

interface IBotaoGrande{
    title: string
    click: MouseEventHandler<HTMLButtonElement>
}

const BotaoCategoriaPergunta = ({title, click} : IBotaoGrande) => {
    
    return(
        <button onClick={click} type="button" className="w-full md:w-[12rem] xl:w-[16rem] h-12 lg:h-16 xl:h-20 rounded-lg text-sm lg:text-base font-poppins font-medium bg-terciaria focus:border-[1px] focus:border-cinza-escuro text-preto">
            {title}
        </button>
    )
} 
export default BotaoCategoriaPergunta;