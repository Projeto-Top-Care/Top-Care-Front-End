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
        "bg-primaria",
        "bg-secundaria",
        "bg-terciaria",
        "bg-branco border border-error text-error"
    ]

    return (
        <button onClick={onClick} type={type} className={`w-full rounded-lg font-poppins ${size ? size : "h-8"} transition duration-500 ${variant[backgrounds.indexOf(background)]}`}>
            {title.includes('/assets') ? <img src={title} alt='' className={'w-[80%] md:w-[60%] lg:w-[40%] m-auto'} /> : title}
        </button>
    )
}
export default BotaoGrande;