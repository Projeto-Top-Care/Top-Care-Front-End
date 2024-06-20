'use client'
import React, { useEffect, useState } from 'react';
import CardPetPequeno from '../CardPetPequeno/CardPetPequeno';
import { Usuario } from "@/types/usuarios";
import { useUserID } from '@/context/UserIDContext';
import { buscarUsuario } from '@/server/usuario/action';

export default function EscolhaPet() {
    const {getUserID} = useUserID()

    const [usuarioLogado, setUsuarioLogado] = useState<Usuario | null>(null);

    useEffect(() =>{
        const idFetched = getUserID();
        if(idFetched){
            const usuarioBuscado = buscarUsuario(parseInt(idFetched))
            if(usuarioBuscado){
                setUsuarioLogado(usuarioBuscado)
            }
        }
    },[])

    if (!usuarioLogado) {
        return <div>Carregando...</div>
    }

    return (
        <main className="p-8 mt-8 sm:mt-12 w-full flex flex-col items-center justify-center gap-6 sm:gap-12">
            <div className='flex items-center justify-center'>
                <p className='font-poppins text-preto font-medium text-xl text-center'>Para qual pet é o agendamento?</p>
            </div>
            {
                usuarioLogado.pets.map((pets, i) => (
                    <div key={i}>
                        <CardPetPequeno fotoPet={"./assets/cachorro-perfil.png"} porte={pets.porte} nomePet={pets.nome} racaPet={pets.raca} tipoAnimal={pets.especie} />
                    </div>
                ))}
        </main>
    );
}