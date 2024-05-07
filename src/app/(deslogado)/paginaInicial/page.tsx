'use client'
import BotaoCategoriaPgInicial from "@/components/Botao-categoria-pgInicial/botao-categoria-pgInicial"
import Carrossel from "@/components/Carrossel/Carrossel"
import CarrosselProduto from "@/components/CarrosselProduto/Carrossel"
import TituloLinha from "@/components/TituloLinha/TituloLinha"
import { EmblaOptionsType } from "embla-carousel"
import Loading from "../loading/page"

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
                <CarrosselProduto options={OPTIONS} slides={['']}/>
            </section>

            <section className="py-6 flex flex-col gap-2 sm:gap-4">
                <TituloLinha titulo="Categorias de produtos" />

                <div className="flex flex-col sm:flex-row justify-center px-4 sm:gap-8 gap-6 sm:px-16 py-4">

                    <BotaoCategoriaPgInicial title="Alimentação" image="./assets/alimentacao.png" pagina="/lojas" />
                    
                    <BotaoCategoriaPgInicial title="Brinquedos e acessórios" image="./assets/acessorios.png" pagina="/lojas" />

                    <BotaoCategoriaPgInicial title="Higiene" image="./assets/higiene.png" pagina="/lojas" />

                    <BotaoCategoriaPgInicial title="Medicamentos" image="./assets/medicamentos.png" pagina="/lojas" />
                    
                </div>
            </section>

            <section>
                <TituloLinha titulo="Produtos mais bem avaliados" />
                <CarrosselProduto options={OPTIONS} slides={['']}/>
            </section>

            <section>
                <TituloLinha titulo="Quase acabando" />
                <CarrosselProduto options={OPTIONS} slides={['']}/>
            </section>

            <section>
                <TituloLinha titulo="Promoções relâmpago" />
                <CarrosselProduto options={OPTIONS} slides={['']}/>
            </section>
        </main>
    )
}
