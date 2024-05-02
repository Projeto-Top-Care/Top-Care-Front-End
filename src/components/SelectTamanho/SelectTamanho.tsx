'use client'
import { useState, useEffect, useRef, MutableRefObject, Dispatch, SetStateAction } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

interface ISelect {
    label: string,
    options: string[],
    opcaoSelecionada: Dispatch<SetStateAction<string>>,
}

export default function SelectTamanho({ label, options, opcaoSelecionada }: ISelect) {
    const [open, setOpen] = useState<boolean>(false);
    const [opcao, setOpcao] = useState<string>("");

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
            <div className={`relative bg-terciaria h-16 w-full rounded-lg flex items-center select-none ${open ? 'outline outline-[1.9px] outline-black' : 'outline-none'}`} onClick={() => setOpen(!open)}>
                <div className="flex flex-row items-center justify-between w-[95%] m-auto">
                    <div className="p-0">
                        <label htmlFor="" className={`font-poppins text-preto md:text-base text-xs pointer-events-none`}>{label}</label>
                        <p className="font-poppins text-preto lg:text-lg text-xs font-bold">Tamanho: {opcao ? opcao : ""}</p>
                    </div>
                    <p className="transition-all duration-7000">{open? <FaChevronUp /> : <FaChevronDown />}</p>
                </div>
                {open && (
                    <ul className="absolute transition-all bg-terciaria flex flex-col top-[4.2rem] w-full rounded-lg max-h-60 shadow shadow-cinza overflow-y-auto select-none z-50">
                        {options.map((opcao, i) => (
                            <li value={opcao} key={i} className="font-poppins md:text-sm text-xs pl-3 py-2 h-10" onClick={() => {
                                setOpcao(opcao)
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