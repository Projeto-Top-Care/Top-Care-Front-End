'use client'
import React, { useEffect, useState, SetStateAction } from 'react';
import CardPetPequeno from '../CardPetPequeno/CardPetPequeno';
import { Usuario, Pet } from "@/types/usuarios";
import { useUserID } from '@/context/UserIDContext';
import { buscarUsuario } from '@/server/usuario/action';

interface IPet {
    setPetEscolhido: React.Dispatch<SetStateAction<Pet | null>>
}

export default function EscolhaPet({ setPetEscolhido }: IPet) {

    const { getUserID } = useUserID()
    const [usuarioLogado, setUsuarioLogado] = useState<Usuario | null>(null);

    const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
    useEffect(() => {
        setPetEscolhido(selectedPet)
    }, [selectedPet])

    const handleSelectPet = (pet: Pet) => {
        setSelectedPet(pet);
    };

    useEffect(() => {
        const idFetched = getUserID();
        if (idFetched) {
            const usuarioBuscado = buscarUsuario(parseInt(idFetched))
            if (usuarioBuscado) {
                setUsuarioLogado(usuarioBuscado)
            }
        }
    }, [])

    if (!usuarioLogado) {
        return <div>Carregando...</div>
    }

    return (
        <main className="p-8 mt-8 sm:mt-12 w-full flex flex-col items-center justify-center gap-6 sm:gap-12">
            <div className='flex items-center justify-center'>
                <p className='font-poppins text-preto font-medium text-xl text-center'>Para qual pet é o agendamento?</p>
            </div>
            <div className='grid lg:flex lg:flex-row md:grid-cols-2 grid-cols-1 gap-8 lg:mb-8'>
                {
                    usuarioLogado.pets.map((pets, i) => (
                        <div key={i}>
                            <CardPetPequeno
                                fotoPet={"./assets/cachorro-perfil.png"}
                                porte={pets.porte}
                                nomePet={pets.nome}
                                racaPet={pets.raca}
                                tipoAnimal={pets.especie}
                                isSelected={selectedPet === pets}
                                onSelect={() => handleSelectPet(pets)}
                            />
                        </div>
                    ))
                }
            </div>
        </main>
    );
}