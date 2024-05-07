import BotaoGrande from "@/components/BotaoGrande/BotaoGrande";
import CardPetPequeno from "@/components/CardPetPequeno/CardPetPequeno";
import CartoesSalvos from "@/components/CartoesSalvos/CartoesSalvos";
import Endereco from "@/components/Endereço/Endereco";
import InputEstatico from "@/components/InputEstatico/InputEstatico";
import PedidoAndamentoPerfil from "@/components/PedidoAndamentoPerfil/PedidoAndamentoPerfil";
import PerfilFoto from "@/components/PerfilFoto/PerfilFoto";
import TituloLinha from "@/components/TituloLinha/TituloLinha";

export default function Perfil() {
    return (
        <main className="bg-branco text-preto">
            <section className="mt-6">
                <TituloLinha titulo="Minha conta" />
                <div className="mt-10 md:ml-44 ml-6">
                    <PerfilFoto src="./assets/cachorro-perfil.png/" nome="Kristian" />
                </div>
            </section>
            <section className="rounded-xl bg-terciaria lg:mx-32 mt-12 md:mx-20 mx-5">
                <div className="xl:flex md:justify-around px-7 pb-7">
                    <div className="md:min-w-80 sm-w-80">
                        <InputEstatico titulo="Nome completo" info="Kristian Erdmann" />
                        <InputEstatico titulo="Senha" info="**********" />
                        <InputEstatico titulo="Sexo" info="Masculino" />
                    </div>
                    <div className="">
                        <div className="">
                            <div className="md:flex">
                                <div className="md:w-80"><InputEstatico titulo="Email" info="kristian@gmail.com" /></div>
                                <div className="flex">
                                <div className="mr-4 md:ml-7 lg:ml-12"><InputEstatico titulo="DDD +" info="047" /></div>
                                <div className="lg:w-48 md:w-36 w-full"><InputEstatico titulo="Celular" info="99999-9999" /></div>
                                </div>
                            </div>
                            <div className="md:flex">
                                <div className="md:w-80"><InputEstatico titulo="CPF" info="999.999.999-99" /></div>
                                <div className="md:ml-7 md:w-56 lg:ml-12 lg:w-64"><InputEstatico titulo="Data de Nascimento" info="99/99/9999" /></div>
                            </div>
                        </div>
                        <div className="md:text-base text-sm mt-6 font-poppins">Cartões Salvos<CartoesSalvos tipoCartao="crédito" nome="Kristian Erdmann" dataValidade="12/28" finalCartao={9875} /></div>
                    </div>
                </div>
            </section>
            <section className="mt-8">
                <TituloLinha titulo="Endereços" />
            </section>
            <section className="grid place-content-center">
                <div className="grid gap-11 mt-8 mb-12 lg:grid-cols-2 xl:grid-cols-3">
                    <div><Endereco titulo="Casa" cep="99999-999" estado="Santa Catarina" bairro="Centro" rua="Sen. Luiz Henrique da Silveira" numero={999} complemento="Apto 300" /></div>
                    <div><Endereco titulo="Casa" cep="99999-999" estado="Santa Catarina" bairro="Centro" rua="Sen. Luiz Henrique da Silveira" numero={999} complemento="Apto 300" /></div>
                    <div><Endereco titulo="Casa" cep="99999-999" estado="Santa Catarina" bairro="Centro" rua="Sen. Luiz Henrique da Silveira" numero={999} complemento="Apto 300" /></div>
                </div>
                <div className="w-56 justify-self-center">
                    <BotaoGrande title="Adicionar Endereço" background={"bg-secundaria"} type={"button"} />
                </div>
            </section>
            <section className="mt-8">
                <TituloLinha titulo="Pedido em andamento" />
            </section>
            <section className="grid lg:grid-cols-2 place-content-center md:mx-20 mt-8 flex justify-center">
                <PedidoAndamentoPerfil src="./assets/ProdutoAndamentoPerfil.png/" titulo="Kit banho diora cachorro ..." link="http://localhost:3000/Perfil" valor="49,50" />
                <PedidoAndamentoPerfil src="./assets/ProdutoAndamentoPerfil.png/" titulo="Kit banho diora cachorro ..." link="http://localhost:3000/Perfil" valor="49,50" />
                <PedidoAndamentoPerfil src="./assets/ProdutoAndamentoPerfil.png/" titulo="Kit banho diora cachorro ..." link="http://localhost:3000/Perfil" valor="49,50" />
                <PedidoAndamentoPerfil src="./assets/ProdutoAndamentoPerfil.png/" titulo="Kit banho diora cachorro ..." link="http://localhost:3000/Perfil" valor="49,50" />
                <PedidoAndamentoPerfil src="./assets/ProdutoAndamentoPerfil.png/" titulo="Kit banho diora cachorro ..." link="http://localhost:3000/Perfil" valor="49,50" />
            </section>
            <section className="mt-8">
                <TituloLinha titulo="Ultimas compras" />
            </section>
            <section>
                <a>carrosel produto</a>
            </section>
            {/* <section>
                <TituloLinha titulo="Meus pets" />
            </section>
            <section className="grid grid-cols-4 mx-20 mt-8">
                <CardPetPequeno fotoPet={"./assets/cachorro-perfil.png"} nomePet={"Nino"} racaPet={"vira-lata"} idadePet={6} tipoAnimal={"cachorro"} />
                <CardPetPequeno fotoPet={"./assets/cachorro-perfil.png"} nomePet={"Nino"} racaPet={"vira-lata"} idadePet={6} tipoAnimal={"cachorro"} />
                <CardPetPequeno fotoPet={"./assets/cachorro-perfil.png"} nomePet={"Nino"} racaPet={"vira-lata"} idadePet={6} tipoAnimal={"cachorro"} />
                <CardPetPequeno fotoPet={"./assets/cachorro-perfil.png"} nomePet={"Nino"} racaPet={"vira-lata"} idadePet={6} tipoAnimal={"cachorro"} />
            </section>
            <section className="font-poppins mt-16 ml-20 mb-24">
                <p className="text-xl font-medium">Pet novo ?</p>
                <p className="text-sm my-3">Cadastre aqui pra ele não perder nenhuma oportunidade!</p>
                <div className="w-[174px]">
                <BotaoGrande title="Cadastrar Pet" background={"bg-primaria"} type={"button"} />
                </div>
            </section> */}
        </main>
    )
}


