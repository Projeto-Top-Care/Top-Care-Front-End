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
        <div className="p-4 flex justify-center gap-4 rounded-lg border border-cinza">
            <div>
                <img className='rounded-full' src={fotoPet} />
            </div>
            <div className="text-sm text-preto font-poppins">
                <p className="lg:text-lg ">{nomePet}</p>
                <p>Animal: {tipoAnimal}</p>
                <p>Raça: {racaPet}</p>
                <p>Idade: {idadePet} anos</p>
            </div>
        </div>
    )
}
export default CardPetPequeno;