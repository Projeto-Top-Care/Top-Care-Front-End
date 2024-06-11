import { InputHTMLAttributes, useState } from "react";
import { InputMask, MaskEventHandler, Replacement } from '@react-input/mask';
import { input } from "@material-tailwind/react";

export default function InputText(props: InputHTMLAttributes<HTMLInputElement> & { mask?: string, replacement?: string | Replacement, onMasks?: MaskEventHandler | undefined, erro?: boolean, erroMessage?: string }) {
    const [focus, setFocus] = useState<boolean>(false)
    return (
        <div className="relative flex flex-col">
            <InputMask {...props} className={`peer font-poppins px-2 rounded-md w-full h-10 text-sm text-cinza-escuro ${props?.erro && !focus ? 'border-error': 'border-cinza'} border
            focus:bg-branco bg-branco placeholder-transparent focus:outline-none`} 
            mask={props.mask} 
            replacement={props.replacement} 
            onMask={props.onMasks} 
            onFocus={()=>setFocus(true)}
            onBlur={()=>setFocus(false)}
            />
            <label htmlFor={props?.id} className="absolute left-1.5 font-poppins px-1 lg:text-sm text-xs transition-all bg-branco rounded lg:-top-2.5 -top-2
            md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-xs peer-placeholder-shown:text-cinza-escuro peer-placeholder-shown:top-2.5
            peer-placeholder-shown:left-2 md:peer-focus:-top-2.5 peer-focus:-top-2 peer-focus:left-1.5 peer-focus:bg-branco pointer-events-none">{props?.placeholder}</label>
            {props.erro && !focus && (
                <span className="absolute mt-10 font-poppins text-sm text-error">{props.erroMessage}</span>
            )}
        </div>
    )
}