import { MouseEventHandler } from "react"

interface IBotaoGrande{
    title: string
    click: MouseEventHandler<HTMLButtonElement>
}

const BotaoCategoriaPergunta = ({title, click} : IBotaoGrande) => {
    
    return(
        <button onClick={click} type="button" className="w-[12rem] min-[1025]:w-[14rem] h-16 rounded-lg text-[1rem] lg:text-lg font-poppins font-medium bg-terciaria focus:bg-sky-200 text-preto">
            {title}
        </button>
    )
} 
export default BotaoCategoriaPergunta;