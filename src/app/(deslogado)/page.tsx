'use client'
import BotaoCategoriaPgInicial from "@/components/Botao-categoria-pgInicial/botao-categoria-pgInicial"
import CardProduto from "@/components/CardProduto/CardProduto"
import Carrossel from "@/components/Carrossel/Carrossel"
import CarrosselProduto from "@/components/CarrosselProduto/Carrossel"
import TituloLinha from "@/components/TituloLinha/TituloLinha"
import { buscarTodos } from "@/server/produtos/action"
import { EmblaOptionsType } from "embla-carousel"

const carrosselProdutos = buscarTodos().map((produto, i) => (<CardProduto key={i} id={produto.id} nomeProduto={produto.nomeProduto} precoAntigoDoProduto={produto.precoAntigoDoProduto}
    precoNovo={produto.precoNovo} notaDeAvaliacao={produto.notaDeAvaliacao} imagemProduto={produto.imagemProduto} desconto={produto.desconto} />))

export default function PaginaInicial() {
    const slidesCarrosselDesktop: string[] = ['./assets/slidesDesktop/Banner1.svg', './assets/slidesDesktop/Banner2.svg', './assets/slidesDesktop/Banner3.svg', './assets/slidesDesktop/Banner4.svg']
    const slidesCarrosselMobile: string[] = ['./assets/slidesMobile/Banner1.svg', './assets/slidesMobile/Banner2.svg', './assets/slidesMobile/Banner3.svg', './assets/slidesMobile/Banner4.svg']
    const OPTIONS: EmblaOptionsType = { loop: true }

    return (
        <main className="bg-branco">
            <section className='mt-10 mb-10 max-sm:hidden'>
                <Carrossel slides={slidesCarrosselDesktop} options={OPTIONS} />
            </section>
            <section className='mt-10 mb-10 sm:hidden'>
                <Carrossel slides={slidesCarrosselMobile} options={OPTIONS} />
            </section>

            <section className='md:mt-20 mt-8'>
                <div className='flex flex-col gap-10'>
                    <TituloLinha titulo='Você também pode gostar...' />
                    <CarrosselProduto slides={carrosselProdutos} />
                </div>
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

            <section className='md:mt-20 mt-8'>
                <div className='flex flex-col gap-10'>
                    <TituloLinha titulo='Você também pode gostar...' />
                    <CarrosselProduto slides={carrosselProdutos} />
                </div>
            </section>

            <section className='md:mt-20 mt-8'>
                <div className='flex flex-col gap-10'>
                    <TituloLinha titulo='Você também pode gostar...' />
                    <CarrosselProduto slides={carrosselProdutos} />
                </div>
            </section>

            <section className='md:mt-20 mt-8 mb-10'>
                <div className='flex flex-col gap-10'>
                    <TituloLinha titulo='Você também pode gostar...' />
                    <CarrosselProduto slides={carrosselProdutos} />
                </div>
            </section>
        </main>
    )
}