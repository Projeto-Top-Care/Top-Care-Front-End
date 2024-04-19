import { InputHTMLAttributes } from "react";

export default function InputText(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="relative">
            <input {...props} className="peer font-poppins px-2 rounded-md w-full h-10 text-sm text-cinza-escuro border-cinza border
            focus:bg-branco bg-branco placeholder-transparent focus:outline-none"/>

            <label htmlFor={props?.id} className="absolute left-1.5 font-poppins px-1 text-sm transition-all bg-branco rounded -top-2.5
            md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-xs peer-placeholder-shown:text-cinza-escuro peer-placeholder-shown:top-2.5
            peer-placeholder-shown:left-2 peer-focus:-top-2.5 peer-focus:left-1.5 peer-focus:bg-branco pointer-events-none">{props?.placeholder}</label>
        </div>
    )
}