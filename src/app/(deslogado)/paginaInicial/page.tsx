'use client'
import CardProduto from "@/components/CardProduto/CardProduto"
import Carrossel from "@/components/Carrossel/Carrossel"
import EmblaCarousel from "@/components/CarrosselProduto/Carrossel"
import InputData from "@/components/InputData/InputData"
import TituloLinha from "@/components/TituloLinha/TituloLinha"
import { EmblaOptionsType } from "embla-carousel"

export default function PaginaInicial() {
    const slidesCarrosselDesktop: string[] = ['./assets/slidesDesktop/Banner4.svg', './assets/slidesDesktop/Banner5.svg', './assets/slidesDesktop/Banner3.svg']
    const slidesCarrosselMobile: string[] = ['./assets/slidesMobile/Banner4.svg', './assets/slidesMobile/Banner5.svg', './assets/slidesMobile/Banner4.svg']
    const OPTIONS: EmblaOptionsType = { loop: true }
    return (
        <main className="bg-branco">
              <section className='mt-10 mb-10 max-sm:hidden'>
                <Carrossel slides={slidesCarrosselDesktop} options={OPTIONS}/>
            </section>

            <section>
                <TituloLinha titulo="Destaques do dia" />
                <EmblaCarousel/>
            </section>

            <section>
                <TituloLinha titulo="Promoções só para você" />
                <EmblaCarousel/>
            </section>

            <section>
                <TituloLinha titulo="Produtos mais bem avaliados" />
                <EmblaCarousel/>
            </section>

            <section>
                <TituloLinha titulo="Seu pet vai adorar!" />
                <EmblaCarousel/>
            </section>
        </main>
        // <CardProduto nomeProduto={"Ração Úmida Pedigree Sabor Carne Bovina para Cães Adultos - 400g"} notaDeAvaliacao={4.6} imagemProduto={"./assets/racao.png"} precoAntigoDoProduto={12.50} desconto={"10%"} precoNovo={10.50} />
    )
}
