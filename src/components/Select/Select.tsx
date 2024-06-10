'use client'
import { useState, useEffect, useRef, MutableRefObject, Dispatch, SetStateAction } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

interface ISelect {
    label: string,
    options: string[],
    opcaoSelecionada: Dispatch<SetStateAction<string>>,
    opcao: string
}

export default function Select({ label, options, opcaoSelecionada, opcao }: ISelect) {
    const [open, setOpen] = useState<boolean>(false);

    const selectRef: MutableRefObject<any> = useRef(null);

    useEffect(()=>{
        opcaoSelecionada(opcao)
    })

    useEffect(() => {
        function handleClickOutside(e : MouseEvent) {
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectRef]);

    return (
        <div ref={selectRef}>
            <div className={`relative border border-cinza h-10 w-full rounded-lg flex items-center select-none ${open ? 'outline outline-[1.9px] outline-black' : 'outline-none'}`} onClick={() => setOpen(!open)}>
                <div className="flex flex-row items-center justify-between w-[90%] m-auto">
                    <label htmlFor="" className={`font-poppins text-cinza-escuro md:text-sm text-xs absolute transition-all bg-branco px-1 pointer-events-none left-2 ${open || opcao ? 'md:-top-3 -top-2 left-1.5': ""}`}>{label}</label>
                    <p className="font-poppins text-cinza-escuro lg:text-sm text-xs">{opcao ? opcao : ""}</p>
                    <p className="transition-all duration-7000">{open? <FaChevronUp /> : <FaChevronDown />}</p>
                </div>
                {open && (
                    <ul className="absolute transition-all bg-white flex flex-col top-11 w-full rounded-lg max-h-60 shadow shadow-cinza overflow-y-auto select-none z-50">
                        {options.map((opcao, i) => (
                            <li value={opcao} key={i} className="font-poppins md:text-sm text-xs pl-3 py-2 h-10" onClick={() => {
                                opcaoSelecionada(opcao)
                                setOpen(false)    
                            }}>
                                <button className="flex w-full h-full items-center">{opcao}</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}