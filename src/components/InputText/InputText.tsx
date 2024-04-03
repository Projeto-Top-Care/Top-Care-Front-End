import { InputHTMLAttributes } from "react";

export default function InputText(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="relative">
            <input {...props} className="peer rounded-md w-full px-4 py-3 text-sm text-gray-700 border-cinza border
            focus:bg-white bg-white placeholder-transparent focus:outline-none"/>

            <label htmlFor={props?.id} className="absolute left-2 -top-2.5 px-1 text-sm transition-all bg-white rounded
            peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3
            peer-placeholder-shown:left-4 peer-focus:-top-2.5 
            peer-focus:left-2 peer-focus:bg-white">{props?.placeholder}</label>
        </div>
    )
}