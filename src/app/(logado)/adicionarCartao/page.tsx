import TituloLinha from "@/components/TituloLinha/TituloLinha"
import InputText from "@/components/InputText/InputText"
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande"



export default function adicionarCartao() {
    
    return (
        <main>
            <section className="mt-8 flex flex-col items-center">
                    <TituloLinha titulo="Adicionar Cartão" />
                <div className="flex flex-col w-full justify-center items-center md:gap-2 md:mt-4 lg:w-[90%] xl:w-[85%]">
                    <div className="w-[90%] mt-4 flex flex-col items-center md:flex-row md:justify-between">
                        <div className="mt-5 w-[90%] md:w-[30%] lg:w-[28%] xl:w-[25%]">
                            <InputText placeholder="Número do cartão*" />
                        </div>
                        <div className="mt-5 w-[90%] md:w-[30%] lg:w-[28%] xl:w-[23%]">
                            <InputText placeholder="Validade*" />
                        </div>
                        <div className="mt-5 w-[90%] md:w-[30%] lg:w-[28%] xl:w-[25%]">
                            <InputText placeholder="Nome para o cartão" />
                        </div>
                    </div>
                    <div className="w-[90%] flex flex-col items-center md:flex-row md:justify-between">
                        <div className="mt-5 w-[90%] md:w-[30%] lg:w-[28%] xl:w-[25%]">
                            <InputText placeholder="Nome no cartão*" />
                        </div>
                        <div className="mt-5 w-[90%] md:w-[30%] lg:w-[28%] xl:w-[23%]">
                            <InputText placeholder="CVV*" />
                        </div>
                        <div className="mt-5 w-[90%] md:w-[30%] lg:w-[28%] xl:w-[25%]">
                            <InputText placeholder="CPF*" />
                        </div>
                    </div>
                    <div className="mt-8 mb-[10%] w-[60%] md:w-[30%] md:mb-[10%] md:mt-[6%] lg:w-[20%]">
                        <BotaoGrande title={"Salvar Cartão"} background={"bg-secundaria"} type={"button"} ></BotaoGrande>
                    </div>
                </div>
            </section>
        </main>
    )
}