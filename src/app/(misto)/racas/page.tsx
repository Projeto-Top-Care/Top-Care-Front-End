import EmblaCarousel from "@/components/Carrossel/Carrossel"
import TituloLinha from "@/components/TituloLinha/TituloLinha"
import React from "react"

export default function racas() {

    return (
        <main>
            
            <TituloLinha voltar={false} titulo="Conheça mais de cada pet!" />

            <section>
                <p className="font-averia md:text-2xl text-xl font-bold text-preto">Cachorros</p>
                aqui deve ficar um carrossel
            </section>

            <section>
                <p className="font-averia md:text-2xl text-xl font-bold text-preto">Gatos</p>
                aqui deve ficar um carrossel
            </section>

            <section>
                <p className="font-averia md:text-2xl text-xl font-bold text-preto">Outros</p>
                aqui deve ficar um carrossel
            </section>

        </main>
    )
}



