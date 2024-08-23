'use client'
import React, { useEffect, useState, SetStateAction } from 'react';
import CardPetPequeno from '../CardPetPequeno/CardPetPequeno';
import { Usuario, Pet } from "@/types/usuarios";
import { useUserID } from '@/context/UserIDContext';
import { buscarUsuario } from '@/server/usuario/action';
import Loading from '@/app/(misto)/loading/page';

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
        buscarUser()
    }, [])

    const buscarUser = async () => {
        const idFetched = getUserID();
        if (idFetched) {
            const usuarioBuscado = await buscarUsuario(parseInt(idFetched))
            if (usuarioBuscado) {
                setUsuarioLogado(usuarioBuscado)
            }
        }
    }

    if (!usuarioLogado) {
        return <Loading />
    }

    return (
        <main className="p-8 mt-8 sm:mt-12 w-full flex flex-col items-center justify-center gap-6 sm:gap-12">
            <div className='flex items-center justify-center'>
                <p className='font-poppins text-preto font-medium text-xl text-center'>Para qual pet é o agendamento?</p>
            </div>
            {
                usuarioLogado.pets.length == 0 ?
                    <div className='flex flex-col w-full justify-center items-center'>
                        <img src="assets/dog-sad.png" alt="" className='w-[23%] -mt-20'/>
                        <p className='font-poppins text-lg w-[38%] text-center mt-2'>Parece que você não tem nenhum pet cadastrado. Que tal cadastrar um agora?</p>
                    </div> 
                    :
                    <div className='flex flex-row flex-wrap justify-center items-start w-[80%] mx-auto gap-8 lg:mb-8'>
                        {
                            usuarioLogado.pets.map((pet, i) => (
                                <div key={i}>
                                    <CardPetPequeno
                                        pet={pet}
                                        isSelected={selectedPet === pet}
                                        onSelect={() => handleSelectPet(pet)}
                                    />
                                </div>
                            ))
                        }
                    </div>
            }
        </main>
    );
}