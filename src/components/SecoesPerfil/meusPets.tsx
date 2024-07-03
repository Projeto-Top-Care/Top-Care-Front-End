'use client'
import { Usuario } from "@/types/usuarios"
import { SetStateAction, useEffect, useState } from "react"
import BotaoGrande from "../BotaoGrande/BotaoGrande"
import CardPetPequeno from "../CardPetPequeno/CardPetPequeno"

interface iPedidos {
    usuario: Usuario,
    setOpenPet: React.Dispatch<SetStateAction<boolean>>
}

export default function MeusPets({ usuario, setOpenPet }: iPedidos) {

    const [openPopupPet, setOpenPopupPet] = useState(false)

    useEffect(() => {
        setOpenPet(openPopupPet)
    }, [openPopupPet])

    return (
        <main>
            <section className="grid lg:grid-cols-3 p-2 xl:grid-cols-4 md:grid-cols-2 gap-4 sm:gap-12 justify-items-center w-[90%] m-auto">
                {
                    usuario.pets.map((pets, i) => (
                        <div key={i}>
                            <CardPetPequeno fotoPet={"./assets/cachorro-perfil.png"} nomePet={pets.nome} racaPet={pets.raca} tipoAnimal={pets.especie} porte={pets.porte} isSelected={true} />
                        </div>
                    ))}
            </section>

            <section className="font-poppins sm:ml-18 mb-6 w-[90%] m-auto">
                <p className="md:text-xl text-lg font-medium m-auto">Pet novo ?</p>
                <p className="md:text-sm text-xs my-3 m-auto">Cadastre aqui pra ele não perder nenhuma oportunidade!</p>
                <div className="sm:w-[174px]" onClick={() => setOpenPopupPet(true)}>
                    <BotaoGrande title="Cadastrar Pet" background={"bg-primaria"} type={"button"} />
                </div>
            </section>

        </main>
    )
}         