import CartoesSalvos from "@/components/CartoesSalvos/CartoesSalvos";
import InputEstatico from "@/components/InputEstatico/InputEstatico";
import PerfilFoto from "@/components/PerfilFoto/PerfilFoto";
import TituloLinha from "@/components/TituloLinha/TituloLinha";

export default function Perfil() {
    return (
        <main className="bg-branco text-preto">
            <section>
                <TituloLinha titulo="Minha conta" />
                <div className="mt-10 md:ml-44 ml-6">
                    <PerfilFoto src="./assets/cachorro-perfil.png/" nome="Kristian" />
                </div>
            </section>
            <section className="rounded-xl bg-terciaria mx-44 mt-12">
                <div className="flex justify-center px-12 pb-7">
                    <div className="w-80">
                        <InputEstatico titulo="Nome completo" info="Kristian Erdmann" />
                        <InputEstatico titulo="Senha" info="**********" />
                        <InputEstatico titulo="Sexo" info="Masculino" />
                    </div>
                    <div className="">
                        <div className="ml-24 ">
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
                        <div className="mt-6 ml-24 font-poppins">Cartões Salvos<CartoesSalvos tipoCartao="crédito" nome="Kristian Erdmann" dataValidade="12/28" finalCartao={9875} /></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

{/* <div className="ml-9">
                            <div className="flex">
                                <div className="mr-4"><InputEstatico titulo="DDD +" info="047" /></div>
                                <InputEstatico titulo="Celular" info="99999-9999" />
                            </div>
                            <div><InputEstatico titulo="Data" info="99/99/9999" /></div>
                            </div> */}


//<div className=""><CartoesSalvos tipoCartao="crédito" nome="Kristian Erdmann" dataValidade="12/28" finalCartao={9875}/></div>
