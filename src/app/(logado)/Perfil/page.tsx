import CartoesSalvos from "@/components/CartoesSalvos/CartoesSalvos";
import InputEstatico from "@/components/InputEstatico/InputEstatico";
import PerfilFoto from "@/components/PerfilFoto/PerfilFoto";
import TituloLinha from "@/components/TituloLinha/TituloLinha";

export default function Perfil() {
    return (
        <main className="bg-branco">
            <section>
                <TituloLinha titulo="Minha conta" />
                <div className="mt-10 md:ml-44 ml-6">
                    <PerfilFoto src="./assets/cachorro-perfil.png/" nome="Kristian" />
                </div>
            </section>
            <section className="bg-terciaria flex mx-44 justify-center rounded-xl ">
                <div className="w-80">
                    <InputEstatico titulo="Nome completo" info="Kristian Erdmann" />
                    <InputEstatico titulo="Senha" info="**********" />
                    <InputEstatico titulo="Sexo" info="Masculino" />
                </div>
                <div className="ml-20 w-80">
                    <InputEstatico titulo="Email" info="kristian@gmail.com" />
                    <InputEstatico titulo="CPF" info="999.999.999-99" />
                </div>
                <div className="ml-9">
                    <div className="flex">
                    <div className="mr-4"><InputEstatico titulo="DDD +" info="047" /></div>
                    <InputEstatico titulo="Celular" info="99999-9999" />
                    </div>
                    <InputEstatico titulo="Data" info="99/99/9999" />
                    <div className="w-[100%]"><CartoesSalvos   tipoCartao="crédito" nome="Kristian Erdmann" dataValidade="12/28" finalCartao={9875}/></div>
                </div>
            </section>
        </main>
    )
}