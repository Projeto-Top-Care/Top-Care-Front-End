import React from "react"

type pettype = {
    fotoPet: string
    nomePet: string
    tipoAnimal:string
    racaPet: string
    porte: string
}

const CardPetPequeno = ({tipoAnimal, fotoPet, nomePet, racaPet, porte}: pettype) => {
    return (
        <div className="mt-4 flex bg-branco border border-cinza justify-center items-center lg:gap-5 gap-4 rounded-lg lg:w-[22%] w-full h-36 p-2">
            <div className="lg:w-[40%] w-[50%]">
                <img className='lg:ml-3 md:ml-8 ml-2 rounded-full lg:w-full md:w-[70%] sm:w-full' src={fotoPet} />
            </div>
            <div className="text-sm text-preto font-poppins lg:w-[60%] md:w-[50%] w-full mr-2 ml-1">
                <p className="gap-1 lg:text-lg">{nomePet}</p>
                <p>Animal: {tipoAnimal}</p>
                <p>Raça: {racaPet}</p>
                <p>Porte: {porte}</p>
            </div>
        </div>
    )
}
export default CardPetPequeno;