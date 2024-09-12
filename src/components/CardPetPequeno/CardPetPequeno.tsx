'use client'
import React, { useState } from "react"
import CadastroPet from "../Pop-up/CadastroPet/CadastroPet"
import { Pet } from "@/types/usuarios"
import { LuPencil } from "react-icons/lu"

type pettype = {
    pet: Pet
    isSelected?: boolean
    onSelect?: () => void
    noSelection?: boolean
    setAtt?: React.Dispatch<React.SetStateAction<number>>
}

const CardPetPequeno = ({ pet, isSelected, onSelect, noSelection, setAtt }: pettype) => {

    const [openEdit, setOpenEdit] = useState<boolean>(false)

    return (
        <div
            onClick={onSelect}
            className={`flex relative bg-branco border border-cinza justify-center items-center lg:gap-5 rounded-lg w-80 px-2 lg:h-36 h-32 cursor-pointer ${isSelected ? 'scale-105 duration-100 outline border-transparent outline-primaria' : noSelection ? 'border-cinza' : 'opacity-50 '
                }`} >
            <div className="w-20 flex items-center">
                <img className='rounded-full lg:w-full w-10/12' src={pet.imagem == "" || pet.imagem == undefined ? `./assets/perfil/${pet.especie}_perfil.jpg` : pet.imagem} />
            </div>
            <div className="text-sm text-preto font-poppins md:w-[50%] w-[60%] mr-2 ml-1">
                <p className="gap-1 font-semibold lg:text-lg">{pet.nome}</p>
                <p className="text-xs lg:text-sm">Animal: {pet.especie}</p>
                <p className="text-xs lg:text-sm">Raça: {pet.raca}</p>
                <p className="text-xs lg:text-sm">Porte: {pet.porte}</p>
            </div>
            <div onClick={()=>setOpenEdit(true)} className={`${noSelection ? 'absolute flex items-center justify-center p-2 bg-terciaria rounded-full -top-2 -right-2' : 'invisible'}`}>
                <LuPencil size={17} />
            </div>
            {
                openEdit && (
                    <div className='overflow-hidden absolute'>
                        <div className='fixed top-0 left-0 w-full h-full z-50 bg-fundo-modal' onClick={() => setOpenEdit(false)}></div>
                        <div className='fixed w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                            <CadastroPet setOpen={setOpenEdit} petEdit={pet} setAtt={setAtt}/>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default CardPetPequeno;