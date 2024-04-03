'use client'
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons'

interface ISelect {
    label: string,
    options: string[],
}

export default function Select({ label, options }: ISelect) {
    const [open, setOpen] = useState<boolean>(false);
    const [opcao, setOpcao] = useState<string>("");

    const selectRef = useRef(null);

    useEffect(() => {
        function handleClickOutside() {
            if (selectRef.current) {
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
                    <p className="font-poppins text-cinza-escuro text-sm">{opcao ? opcao : label}</p>
                    <p className="transition-all duration-7000"><FontAwesomeIcon icon={open? faChevronDown : faChevronUp} /></p>
                </div>
                {open && (
                    <ul className="absolute bg-white flex flex-col top-10 w-full rounded-lg max-h-60 shadow shadow-cinza overflow-y-auto select-none z-50">
                        {options.map((opcao, i) => (
                            <li value={opcao} key={i} className="font-poppins text-sm pl-3 py-2" onClick={() => {
                                setOpcao(opcao)
                                setOpen(false)    
                            }}>
                                <button className="flex text-start w-full h-full">{opcao}</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
