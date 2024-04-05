'use client'
import { useState } from "react";
import { FaAngleDown,  FaAngleUp} from "react-icons/fa6";

interface IPergunta {
    pergunta: string,
    resposta: string,
}

const Pergunta = ({pergunta, resposta}: IPergunta) => {
    const [open, setOpen] = useState<boolean>(false) 
    return (
        <div className="font-poppins bg-terciaria rounded-lg">
            <div className="w-[100%] h-[15%] p-4 flex flex-col items-center gap-4">
                <div className="flex flex-row items-center">
                    <p className="text-xl font-semibold">{pergunta}</p>
                    <button className="text-2xl flex justify-center ml-4" onClick={()=>setOpen(!open)}>{open ? <FaAngleUp /> : <FaAngleDown />}</button>
                </div>
                {open &&(
                    <div className="w-full mt-1">
                        <p>{resposta}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Pergunta;