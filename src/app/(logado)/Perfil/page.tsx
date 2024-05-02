import BotaoGrande from "@/components/BotaoGrande/BotaoGrande";
import BotaoPequeno from "@/components/BotaoPequeno";
import CartoesSalvos from "@/components/CartoesSalvos/CartoesSalvos";
import Endereco from "@/components/Endereço/Endereco";
import InputEstatico from "@/components/InputEstatico/InputEstatico";
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
            <section className="rounded-xl bg-terciaria mx-44 mt-12">
                <div className="flex justify-around px-7 pb-7">
                    <div className="min-w-80">
                        <InputEstatico titulo="Nome completo" info="Kristian Erdmann" />
                        <InputEstatico titulo="Senha" info="**********" />
                        <InputEstatico titulo="Sexo" info="Masculino" />
                    </div>
                    <div className="">
                        <div className="">
                            <div className="flex">
                                <div className="w-80"><InputEstatico titulo="Email" info="kristian@gmail.com" /></div>
                                <div className="mr-4 ml-7"><InputEstatico titulo="DDD +" info="047" /></div>
                                <div className="w-36"><InputEstatico titulo="Celular" info="99999-9999" /></div>
                            </div>
                            <div className="flex">
                                <div className="w-80"><InputEstatico titulo="CPF" info="999.999.999-99" /></div>
                                <div className="ml-7 w-52"><InputEstatico titulo="Data de Nascimento" info="99/99/9999" /></div>
                            </div>
                        </div>
                        <div className="mt-6 font-poppins">Cartões Salvos<CartoesSalvos tipoCartao="crédito" nome="Kristian Erdmann" dataValidade="12/28" finalCartao={9875} /></div>
                    </div>
                </div>
            </section>
            <section className="mt-8">
                <TituloLinha titulo="Endereços" />
            </section>
            <section className="grid place-content-center">
                <div className="grid gap-11 mt-8 mb-12 md:grid-cols-3 grid-cols-1">
                    <div><Endereco titulo="Casa" cep="99999-999" estado="Santa Catarina" bairro="Centro" rua="Sen. Luiz Henrique da Silveira" numero={999} complemento="Apto 300" /></div>
                    <div><Endereco titulo="Casa" cep="99999-999" estado="Santa Catarina" bairro="Centro" rua="Sen. Luiz Henrique da Silveira" numero={999} complemento="Apto 300" /></div>
                    <div><Endereco titulo="Casa" cep="99999-999" estado="Santa Catarina" bairro="Centro" rua="Sen. Luiz Henrique da Silveira" numero={999} complemento="Apto 300" /></div>
                </div>
                <div className="w-56 justify-self-center">
                    <BotaoGrande title="Adicionar Endereço" background={"bg-secundaria"} type={"button"} />
                </div>
            </section>
            <section className="mt-8">
                <TituloLinha titulo="Endereços" />
            </section>


        </main>
    )
}


