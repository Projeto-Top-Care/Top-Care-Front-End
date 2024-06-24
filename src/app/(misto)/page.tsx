'use client'
import BotaoCategoriaPgInicial from "@/components/Botao-categoria-pgInicial/botao-categoria-pgInicial"
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande"
import CardProduto from "@/components/CardProduto/CardProduto"
import Carrossel from "@/components/Carrossel/Carrossel"
import CarrosselProduto from "@/components/CarrosselProduto/Carrossel"
import Confirmacao from "@/components/Pop-up/Confirmacao/Confirmacao"
import PropagandaPlano from "@/components/PropagandaPlano/propagandaPlano"
import TituloLinha from "@/components/TituloLinha/TituloLinha"
import { buscarTodos } from "@/server/produtos/action"
import { EmblaOptionsType } from "embla-carousel"
import { useRouter } from "next/navigation";

const carrosselProdutos = buscarTodos().map((produto, i) => (<CardProduto key={i} id={produto.id} nomeProduto={produto.nomeProduto} precoAntigoDoProduto={produto.precoAntigoDoProduto}
    precoNovo={produto.precoNovo} notaDeAvaliacao={produto.notaDeAvaliacao} imagemProduto={produto.imagemProduto} desconto={produto.desconto} />))

export default function PaginaInicial() {
    const slidesCarrosselDesktop: string[] = ['./assets/slidesDesktop/Banner1.svg', './assets/slidesDesktop/Banner2.svg', './assets/slidesDesktop/Banner3.svg', './assets/slidesDesktop/Banner4.svg']
    const slidesCarrosselMobile: string[] = ['./assets/slidesMobile/Banner1.svg', './assets/slidesMobile/Banner2.svg', './assets/slidesMobile/Banner3.svg', './assets/slidesMobile/Banner4.svg']
    const OPTIONS: EmblaOptionsType = { loop: true }

    const { push } = useRouter();

    return (
        <main className="bg-branco">
            <Confirmacao />
            <section className='mt-10 mb-10 max-sm:hidden'>
                <Carrossel slides={slidesCarrosselDesktop} options={OPTIONS} />
            </section>
            <section className='mt-10 mb-10 sm:hidden'>
                <Carrossel slides={slidesCarrosselMobile} options={OPTIONS} />
            </section>

            <section className='md:mt-20 mt-8'>
                <div className='flex flex-col gap-10'>
                    <TituloLinha voltar={false} titulo='Você também pode gostar...' />
                    <CarrosselProduto slides={carrosselProdutos} />
                </div>
            </section>

            <section className="py-6 flex flex-col gap-2 sm:gap-4">
                <TituloLinha voltar={false} titulo="Categorias de produtos" />

                <div className="flex flex-col sm:flex-row justify-center px-4 sm:gap-8 gap-6 sm:px-16 py-4">

                    <BotaoCategoriaPgInicial title="Acessórios" image="./assets/acessorios.png" pagina="/produtos?q=brinquedo" />
                    <BotaoCategoriaPgInicial title="Alimentação" image="./assets/alimentacao.png" pagina="/lojas" />
                    <BotaoCategoriaPgInicial title="Higiene" image="./assets/higiene.png" pagina="/produtos?q=higiene" />
                    <BotaoCategoriaPgInicial title="Medicamentos" image="./assets/medicamentos.png" pagina="/produtos?q=medicamentos" />

                </div>
            </section>

            <section className="flex flex-col gap-4 py-6">
                <div className="flex flex-row bg-terciaria px-6 sm:px-36 justify-between py-8 lg:py-12">
                    <div className="flex flex-col gap-4 w-full lg:w-3/5">
                        <h3 className="font-averia md:text-2xl text-xl font-bold text-preto">Você sabia?</h3>
                        <p className="font-poppins text-preto text-sm sm:text-lg">Nós da Top care também trabalhamos com serviços exclusivos e cuidamos do seu pet com todo o amor e carinho. Agende já uma consulta com a gente para seu pet ter os tratamentos que ele merece!</p>
                        <div className="w-1/2 lg:w-1/4">
                            <BotaoGrande onClick={() => push('./inforacoesServicos')} title={"Saiba mais!"} background={"bg-primaria"} type={"button"} />
                        </div>
                    </div>
                    <div className="h-fit lg:flex hidden">
                        <img src="./assets/banheira.png" />
                    </div>
                </div>
            </section>

            <section className='md:mt-20 mt-8'>
                <div className='flex flex-col gap-10'>
                    <TituloLinha voltar={false} titulo='Mais bem Avaliados' />
                    <CarrosselProduto slides={carrosselProdutos} />
                </div>
            </section>

            <section className="flex flex-col gap-8 py-6">
                <TituloLinha voltar={false} titulo="Planos de cuidados" />

                <div className="flex sm:flex-row flex-col gap-8 w-[90%] justify-center items-center self-center">
                    <PropagandaPlano titulo={"Básico"} descricao={"Plano básico oferece os serviços padroes mas ainda com total conforto para seu pet"} preco={22.9} />
                    <PropagandaPlano titulo={"Médio"} descricao={"Plano básico oferece os serviços padroes mas ainda com total conforto para seu pet"} preco={49.9} />
                    <PropagandaPlano titulo={"Premium"} descricao={"Plano básico oferece os serviços padroes mas ainda com total conforto para seu pet"} preco={99.9} />
                    <PropagandaPlano titulo={"Pro premium"} descricao={"Plano básico oferece os serviços padroes mas ainda com total conforto para seu pet"} preco={179.9} />
                </div>

                <div className="w-[80%] sm:w-1/6 self-center">
                    <BotaoGrande onClick={() => push('./planos')} title={"Assine já"} background={"bg-primaria"} type={"button"} />
                </div>
            </section>

            <section className='md:mt-20 mt-8'>
                <div className='flex flex-col gap-10'>
                    <TituloLinha voltar={false} titulo='Quase acabando' />
                    <CarrosselProduto slides={carrosselProdutos} />
                </div>
            </section>

            <section className='md:mt-20 mt-8 mb-10'>
                <div className='flex flex-col gap-10'>
                    <TituloLinha voltar={false} titulo='Promoções relâmpago' />
                    <CarrosselProduto slides={carrosselProdutos} />
                </div>
            </section>
        </main>
    )
}