import { MouseEventHandler } from "react";

interface IBotaoGrande {
    title: string,
    background: "primaria" | "secundaria" | "terciaria" | "cancelar",
    type?: 'submit' | 'button',
    size?: string
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}


const BotaoGrande = ({ title, background, size, type, onClick }: IBotaoGrande) => {

    const backgrounds = ['primaria', 'secundaria', 'terciaria', 'cancelar']

    const variant = [
        "bg-primaria hover:bg-[#7D64E4] hover:text-branco",
        "bg-secundaria hover:bg-[#92BD17]",
        "bg-terciaria hover:bg-[#90C7FA]",
        "bg-branco border border-error text-error hover:bg-error hover:text-branco"
    ]

    return (
        <button onClick={onClick} type={type} className={`w-full text-sm lg:text-base rounded-lg font-poppins ${size ? size : "h-8"} transition duration-500 ${variant[backgrounds.indexOf(background)]}`}>
            {title.includes('/assets') ? <img src={title} alt='' className={'w-[80%] md:w-[60%] lg:w-[40%] m-auto'} /> : title}
        </button>
    )
}
export default BotaoGrande;