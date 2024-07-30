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

    return (
        <main className="w-full">
            <section className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 md:mb-12 mb-4 md:w-[90%] w-full lg:pl-20 md:pl-12 md:p-0 lg:self-start self-center gap-8 p-5">
                {
                    usuario.pets.length == 0 ?
                        <div className='flex flex-col w-full justify-center items-center'>
                            <img src="assets/dog-sad.png" alt="" className='w-[83%] -mt-16' />
                            <p className='font-poppins text-base w-full text-center mt-2'>Parece que você não tem nenhum pet cadastrado. Que tal cadastrar um agora?</p>
                        </div> 
                        :
                        usuario.pets.map((pets, i) => (
                            <div key={i}>
                                <CardPetPequeno fotoPet={"./assets/cachorro-perfil.png"} nomePet={pets.nome} racaPet={pets.raca} tipoAnimal={pets.especie} porte={pets.porte} isSelected={true} />
                            </div>
                        ))}
            </section>

            <section className="font-poppins mb-6 md:w-[95%] w-full lg:pl-20 md:pl-12 md:p-0 lg:self-start self-center p-5">
                <p className="md:text-xl text-lg font-medium m-auto">Pet novo ?</p>
                <p className="md:text-sm text-xs my-3 m-auto">Cadastre aqui pra ele não perder nenhuma oportunidade!</p>
                <div className="sm:w-[174px]" onClick={() => setOpenPet(true)}>
                    <BotaoGrande title="Cadastrar Pet" background={"bg-primaria"} type={"button"} />
                </div>
            </section>

        </main>
    )
}         