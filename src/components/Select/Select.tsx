'use client'
import { useState, useEffect, useRef, MutableRefObject } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

interface ISelect {
    label: string,
    options: string[],
}

export default function Select({ label, options }: ISelect) {
    const [open, setOpen] = useState<boolean>(false);
    const [opcao, setOpcao] = useState<string>("");

    const selectRef: MutableRefObject<any> = useRef(null);

    useEffect(() => {
        function handleClickOutside(e : MouseEvent) {
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                setOpen(false);
                console.log(selectRef.current)
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
                    <label htmlFor="" className={`font-poppins text-cinza-escuro text-sm absolute transition-all bg-branco px-1 pointer-events-none left-2 ${open || opcao ? '-top-3 left-1.5 transition-all duration-1000': ""}`}>{label}</label>
                    <p className="font-poppins text-cinza-escuro text-sm">{opcao ? opcao : ""}</p>
                    <p className="transition-all duration-7000">{open? <FaChevronUp /> : <FaChevronDown />}</p>
                </div>
                {open && (
                    <ul className="absolute transition-all bg-white flex flex-col top-11 w-full rounded-lg max-h-60 shadow shadow-cinza overflow-y-auto select-none z-50">
                        {options.map((opcao, i) => (
                            <li value={opcao} key={i} className="font-poppins text-sm pl-3 py-2 h-10" onClick={() => {
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
