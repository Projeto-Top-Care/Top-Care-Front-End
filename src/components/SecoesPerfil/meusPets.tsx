'use client'
import { Usuario } from "@/types/usuarios"
import { SetStateAction, useEffect, useState } from "react"
import BotaoGrande from "../Botoes/BotaoGrande/BotaoGrande"
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
            <section className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 md:mb-12 mb-4 md:w-[90%] w-full lg:pl-20 md:pl-12 md:p-0 lg:self-start self-center gap-8 p-5">
                {
                    usuario.pets.map((pets, i) => (
                        <div key={i}>
                            <CardPetPequeno fotoPet={"./assets/cachorro-perfil.png"} nomePet={pets.nome} racaPet={pets.raca} tipoAnimal={pets.especie} porte={pets.porte} isSelected={true} />
                        </div>
                    ))}
            </section>

            <section className="font-poppins mb-6 md:w-[95%] w-full lg:pl-20 md:pl-12 md:p-0 lg:self-start self-center p-5">
                <p className="md:text-xl text-lg font-medium m-auto">Pet novo ?</p>
                <p className="md:text-sm text-xs my-3 m-auto">Cadastre aqui pra ele não perder nenhuma oportunidade!</p>
                <div className="sm:w-[174px]" onClick={() => setOpenPopupPet(true)}>
                    <BotaoGrande title="Cadastrar Pet" background={"bg-primaria"} type={"button"} />
                </div>
            </section>

        </main>
    )
}         