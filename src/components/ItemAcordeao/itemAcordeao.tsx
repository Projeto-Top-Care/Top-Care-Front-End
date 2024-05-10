'use client'
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

interface IAcordiao{
    titulo: string,
    texto: string
}

const ItemAcordiao = ({titulo, texto}:IAcordiao) => {

    const [aberto, setAberto] = useState(false)

    return (
        <div className="flex flex-col border-[1px] rounded-lg border-preto text-preto font-poppins select-none p-2">
            <div onClick={() => setAberto(!aberto)} className="cursor-pointer flex flex-row items-center justify-between">
                <h3 className="text-md xl:text-lg font-semibold">{titulo}</h3>
                <FaAngleDown className={`transform origin-center transition duration-[350ms] ease-out ${aberto && '!rotate-180'}`}  />
            </div>
            {aberto ? 
                <div className="pt-2 overflow-hidden transition-all duration-[400ms] ease-in-out">
                    <p className="text-base">{texto}</p>
                </div>
                : < div />
            }
            
        </div>

    )
}
export default ItemAcordiao;