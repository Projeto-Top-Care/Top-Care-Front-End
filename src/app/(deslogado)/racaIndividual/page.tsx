import AvaliacaoPet from "@/components/AvaliacaoPet/avaliacaoPet"
import EmblaCarousel from "@/components/Carrossel/Carrossel"
import EscreverAvaliacao from "@/components/EscreverAvaliacao/EscreverAvaliacao"
import InfoPet from "@/components/infoPet/infopet"
import TituloLinha from "@/components/TituloLinha/TituloLinha"
import { buscarRaca } from "@/server/racas/action"
import { Raca } from "@/types/racas"
import React from "react"

export default function racaIndividual() {

    const raca: Raca = buscarRaca(1)!;

    return (
        <main className="flex flex-col gap-12 w-full pb-20 pt-10">

            <TituloLinha titulo={raca.raca} />

            <section className="flex flex-col sm:flex-row w-4/5 self-center items-center">
                <img src={raca.foto} className="sm:w-1/2"/>
                <p className="sm:w-1/2 text-sm lg:text-base font-poppins text-preto">{raca.descricao}</p>
            </section>

            <section className="flex flex-col w-full items-center gap-10 lg:gap-20">
                <TituloLinha titulo="Características" />
                <div className="flex flex-col sm:flex-row justify-between w-[90%] lg:w-[75%] gap-8 lg:gap-20">
                    <InfoPet cor={"secundaria"} titulo={"Expectativa de vida"} descrição={`${raca.expectativaVida} anos`} />
                    <InfoPet cor={"primaria"} titulo={"Tamanho"} descrição={`${raca.tamanho} cm`} />
                    <InfoPet cor={"secundaria"} titulo={"Peso"} descrição={`${raca.peso} kg`} />
                </div>

                <div className="flex flex-col sm:flex-row gap-6 sm:gap-28 items-center w-4/5">
                    <div className="flex flex-col gap-6 w-full">
                        <AvaliacaoPet descricao={"Adaptável"} nota={raca.adaptacao} />
                        <AvaliacaoPet descricao={"Latido"} nota={raca.latido} />
                        <AvaliacaoPet descricao={"Amigável com crianças"} nota={raca.amizada} />
                        <AvaliacaoPet descricao={"Tosa"} nota={raca.tosa} />
                    </div>
                    <div className="flex flex-col gap-6 w-full">
                        <AvaliacaoPet descricao={"Territorialista"} nota={raca.territorialismo} />
                        <AvaliacaoPet descricao={"Sociável"} nota={raca.sociabilidade} />
                        <AvaliacaoPet descricao={"Treinamento"} nota={raca.treinamento} />
                        <AvaliacaoPet descricao={"Apego ao dono"} nota={raca.apego} />
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-8">
                <TituloLinha titulo="Relatos de donos"/>
                <div className="flex flex-col w-full items-center gap-8">
                    <h2 className="w-[90%] text-preto text-lg text-center sm:text-2xl font-averia font-bold self-center">Também tem um pet? Deixe seu relato aqui!</h2>
                    <EscreverAvaliacao nomeUsuario={"Karol"} fotoUsuario={"./assets/doguinho.png"} />                    
                </div>

            </section>

        </main>
    )
}



