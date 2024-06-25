import React from "react"

type pettype = {
    fotoPet: string
    nomePet: string
    tipoAnimal:string
    racaPet: string
    porte: string
    isSelected?: boolean
    onSelect?: () => void
}

const CardPetPequeno = ({tipoAnimal, fotoPet, nomePet, racaPet, porte, isSelected, onSelect }: pettype) => {
    return (
        <div 
        onClick={onSelect}
        className={`flex bg-branco border border-cinza justify-center items-center lg:gap-5 gap-4 rounded-lg w-full h-36 p-2 cursor-pointer ${
            isSelected ? 'scale-105 duration-100' : 'bg-transparent opacity-50'
        }`}
        style={{ borderColor: isSelected ? '#6954C0' : '#BDBDBD' }} >
            <div className="lg:w-[40%] w-[50%]">
                <img className='lg:ml-3 md:ml-8 ml-2 rounded-full lg:w-full md:w-[70%] w-full' src={fotoPet} />
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