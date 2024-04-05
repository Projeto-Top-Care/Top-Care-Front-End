type pettype = {
    fotoPet: string
    nomePet: string
    racaPet: string
    idadePet: number
}

const CardPetPequeno = ({fotoPet, nomePet, racaPet, idadePet}: pettype) => {
    return (
        <div className="flex felx-row bg-branco shadow-lg w-[18%] py-6 items-center justify-center gap-4 rounded-lg">
            <div>
                <img className='rounded-full' src={fotoPet} />
            </div>
            <div className="text-sm text-preto font-poppins">
                <p>Animal: {nomePet}</p>
                <p>Raça: {racaPet}</p>
                <p>Idade: {idadePet} anos</p>
            </div>
        </div>
    )
}
export default CardPetPequeno;