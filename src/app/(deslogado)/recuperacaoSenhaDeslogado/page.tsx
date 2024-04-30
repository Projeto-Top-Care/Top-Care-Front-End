import BotaoGrande from "@/components/BotaoGrande/BotaoGrande";
import InputText from "@/components/InputText/InputText";

export default function RecuperacaoSenhaDeslogado() {

    return (
        <main>
            <section>
                <div className="flex flex-col justify-center items-center md:mt-[5%] mt-[10%] gap-4">
                    <div className="flex flex-col justify-center items-center gap-3 lg:w-[31%] md:w-[50%] w-[80%]">
                        <h1 className="font-averia md:text-3xl text-xl font-bold text-preto">Redefinir senha</h1>
                        <p className="font-poppins text-preto md:text-sm text-xs text-center">Digite seu email para o envio de um código de verificação!</p>
                    </div>
                    <div className="mt-5 lg:w-[31%] md:w-[50%] w-[80%] " >
                        <InputText placeholder="Digite seu email" type={'email'} id='email' />
                    </div>
                    <div className="lg:w-[31%] md:w-[50%] w-[80%] md:mb-[5%] mb-[10%]">
                        <BotaoGrande title="Continuar" type='submit' background="bg-secundaria" />
                    </div>
                </div>
            </section>
        </main>
    )
}