import { InputHTMLAttributes } from "react";

export default function InputText(props : InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="relative">
            <input {...props} className={`peer font-poppins px-2 rounded-md w-full h-12 text-sm text-cinza-escuro ${props?.checked ? 'border-error': 'border-cinza'} border
            focus:bg-branco bg-branco placeholder-transparent focus:outline-none`}/>
            <label htmlFor={props?.id} className="absolute left-1.5 font-poppins px-1 lg:text-sm text-xs transition-all bg-branco rounded lg:-top-2.5 -top-2
            md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-xs peer-placeholder-shown:text-cinza-escuro peer-placeholder-shown:top-2.5
            peer-placeholder-shown:left-2 md:peer-focus:-top-2.5 peer-focus:-top-2 peer-focus:left-1.5 peer-focus:bg-branco pointer-events-none">{props?.placeholder}</label>
        </div>
    )
}