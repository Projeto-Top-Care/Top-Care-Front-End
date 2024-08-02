'use client'
import { useState, useEffect, useRef, MutableRefObject, Dispatch, SetStateAction } from "react";
import { FaChevronDown } from "react-icons/fa6";

interface ISelect {
    label: string,
    options: string[],
    opcaoSelecionada: Dispatch<SetStateAction<string>>,
    opcao: string
    disabled?: boolean
    bg?: boolean
}

export default function Select({ label, options, opcaoSelecionada, opcao, disabled, bg }: ISelect) {
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
            <p className={`md:text-base text-sm font-poppins text-preto ${bg ? "!block" : "!hidden"}`}>Sexo</p>
            <div className={`cursor-pointer relative border border-cinza h-10 w-full rounded-lg flex items-center select-none ${open ? 'outline outline-[1.9px] outline-black' : 'outline-none '} ${bg ? `bg-branco ${disabled ? "border-none" : "border-primaria border-2"} h-11` :  ''}`} onClick={() => setOpen(disabled ? false : !open)}>
                <div className="flex flex-row items-center justify-between w-[90%] m-auto">
                    <label htmlFor="" className={`${bg ? "!hidden" : "!flex"} font-poppins text-cinza-escuro md:text-sm text-xs absolute bg-branco px-1 pointer-events-none left-2 ${open || opcao ? 'md:-top-3 -top-2 left-1.5': ""}`}>{label}</label>
                    <p className="font-poppins text-cinza-escuro lg:text-sm text-xs">{opcao ? opcao : ""}</p>
                    <p className={`duration-500 ${open ? "rotate-180" : ""}`}>{<FaChevronDown />}</p>
                </div>
                {open && (
                    <ul className={`absolute transition-all bg-white flex flex-col ${bg ? 'top-12' : "top-11"} w-full rounded-lg max-h-60 shadow shadow-cinza overflow-y-auto select-none z-50`}>
                        {options.map((opcao, i) => (
                            <li value={opcao} key={i} className="font-poppins md:text-sm text-xs pl-3 py-2 h-10 hover:bg-cinza-claro " onClick={() => {
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