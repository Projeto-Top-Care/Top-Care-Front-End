import { TextareaHTMLAttributes } from "react";

export default function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <div className="relative h-full">
            <textarea {...props} className="peer font-poppins px-2 py-2 rounded-md w-full h-full text-sm text-cinza-escuro border-cinza border
            focus:bg-branco bg-branco placeholder-transparent focus:outline-none resize-none"/>

            <label htmlFor={props?.id} className="absolute left-1.5 font-poppins px-1 lg:text-sm text-xs transition-all bg-branco rounded lg:-top-2.5 -top-2
            md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-xs peer-placeholder-shown:text-cinza-escuro peer-placeholder-shown:top-2.5
            peer-placeholder-shown:left-2 md:peer-focus:-top-2.5 peer-focus:-top-2 peer-focus:left-1.5 peer-focus:bg-branco pointer-events-none">{props?.placeholder}</label>
        </div>
    )
}
