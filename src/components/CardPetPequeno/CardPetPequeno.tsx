import React from "react"

type pettype = {
    fotoPet: string
    nomePet: string
    tipoAnimal:string
    racaPet: string
    idadePet: number
}

const CardPetPequeno = ({tipoAnimal, fotoPet, nomePet, racaPet, idadePet}: pettype) => {
    return (
        <div className="flex bg-branco shadow-2xl py-4 justify-center gap-4 rounded-lg w-[290px]">
            <div>
                <img className='rounded-full' src={fotoPet} />
            </div>
            <div className="text-sm text-preto font-poppins">
                <p className="mb-4 text-lg">{nomePet}</p>
                <p>Animal: {tipoAnimal}</p>
                <p>Raça: {racaPet}</p>
                <p>Idade: {idadePet} anos</p>
            </div>
        </div>
    )
}
export default CardPetPequeno;