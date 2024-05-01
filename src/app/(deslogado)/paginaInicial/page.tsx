'use client'
import Carrossel from "@/components/Carrossel/Carrossel"
import EmblaCarousel from "@/components/CarrosselProduto/Carrossel"
import TituloLinha from "@/components/TituloLinha/TituloLinha"
import { EmblaOptionsType } from "embla-carousel"

export default function PaginaInicial() {
    const slidesCarrosselDesktop: string[] = ['./assets/slidesDesktop/Banner1.svg', './assets/slidesDesktop/Banner2.svg', './assets/slidesDesktop/Banner3.svg']
    const slidesCarrosselMobile: string[] = ['./assets/slidesMobile/Banner1.svg', './assets/slidesMobile/Banner2.svg', './assets/slidesMobile/Banner3.svg']
    const OPTIONS: EmblaOptionsType = { loop: true }
    return (
        <main className="bg-branco">
            <section className='mt-10 mb-10 max-sm:hidden'>
                <Carrossel slides={slidesCarrosselDesktop} options={OPTIONS}/>
            </section>
            <section className='mt-10 mb-10 sm:hidden'>
                <Carrossel slides={slidesCarrosselMobile} options={OPTIONS} />
            </section>

            <section>
                <TituloLinha titulo="Seu pet vai adorar, e você também" />
                <EmblaCarousel/>
            </section>

            <section>
                <TituloLinha titulo="Alimentação" />
                <EmblaCarousel/>
            </section>

            <section>
                <TituloLinha titulo="Acessórios e brinquedos" />
                <EmblaCarousel/>
            </section>

            <section>
                <TituloLinha titulo="Higiene e medicamentos" />
                <EmblaCarousel/>
            </section>
        </main>
        // <CardProduto nomeProduto={"Ração Úmida Pedigree Sabor Carne Bovina para Cães Adultos - 400g"} notaDeAvaliacao={4.6} imagemProduto={"./assets/racao.png"} precoAntigoDoProduto={12.50} desconto={"10%"} precoNovo={10.50} />
    )
}
