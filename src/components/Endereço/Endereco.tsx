'use client'
import { SetStateAction, useEffect, useState } from "react";
import { LuPencil } from "react-icons/lu";
import EditarEndereco from "../Pop-up/EditarEndereco/EditarEndereco";
import { Endereco } from "@/types/usuarios";

interface IEndereco {
    endereco: Endereco
    atualizarProps: React.Dispatch<SetStateAction<number>>
}

const EnderecoPerfil = ({ endereco, atualizarProps }: IEndereco) => {

    const [open, setOpen] = useState<boolean>(false)

    useEffect(()=>{
        atualizarProps(Math.random())
    },[open])

    return (
        <div className="font-poppins relative flex flex-col justify-center gap-2 border-cinza border rounded-md p-5 h-38 ">
            <div className="absolute bg-terciaria p-2 rounded-full -top-2 -right-2 cursor-pointer" onClick={()=>setOpen(true)}>
                <LuPencil size={17} />
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-preto font-bold text-md sm:text-lg">{endereco.nome}</p>
                <p className="text-cinza-escuro text-base font-medium">CEP {endereco.cep}</p>
            </div>
            <div>
                <p className="text-cinza-escuro text-sm">Rua {endereco.rua}, {endereco.numero} - {endereco.complemento} - {endereco.bairro} | {endereco.cidade} - {endereco.estado}</p>
            </div>

            {open && (
                <div className='overflow-hidden absolute'>
                    <div className='fixed top-0 left-0 w-full h-full z-50 bg-fundo-modal' onClick={() => setOpen(false)}></div>
                    <div className='fixed w-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                        <EditarEndereco setOpen={setOpen} endereco={endereco}/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EnderecoPerfil;