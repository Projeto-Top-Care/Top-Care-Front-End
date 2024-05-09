import InputText from "@/components/InputText/InputText"
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande"

export default function redefinirSenha() { 
    return (
        <main>
            <section>
                <div className="flex flex-col justify-center items-center mt-[10%] gap-4 md:mt-[6%]">
                    <div className="flex flex-col justify-center items-center gap-3 w-[80%] md:w-[50%] lg:w-[32%]">
                        <p className="font-averia text-xl font-semibold md:text-3xl">Redefina sua Senha</p>
                        <p className="font-poppins text-xs text-center md:text-sm">Crie uma nova senha forte que você se lembre</p>
                    </div>

                    <div className="flex flex-col w-[80%] mt-3 md:w-[60%] lg:w-[32%] gap-4 ">
                        <InputText placeholder="Digite sua nova senha" type={'password'} />
                        <InputText placeholder="Confirme a nova senha" type={'password'} />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 w-[80%] md:w-[60%] md:items-start lg:w-[32%] lg:items-center">
                        <p className="font-poppins font-semibold text-sm text-start lg:text-base">Sua senha deve conter:</p>
                        <div className="flex flex-col gap-2 md:flex-row md:w-full md:justify-between lg:justify-evenly">
                            <div className="flex flex-col justify-center items-start gap-2 md:items-start">
                                <p className="font-poppins text-xs text-start md:text-sm lg:text-xs">• Mínimo 8 caracteres</p>
                                <p className="font-poppins text-xs text-start md:text-sm lg:text-xs">• 1 Maiúscula e minúscula</p>
                            </div>
                            <div className="flex flex-col justify-center items-start gap-2 md:items-start">
                                <p className="font-poppins text-xs text-start md:text-sm lg:text-xs">• Caractere especial(@#!)</p>
                                <p className="font-poppins text-xs text-start md:text-sm md:text-start lg:text-xs">• Números</p>
                            </div>
                        </div>

                    </div>
                    <div className="mt-3 mb-[10%] w-[80%] md:w-[60%] md:mb-[5%] lg:w-[20%]">
                        <BotaoGrande title="Redefinir" background="bg-secundaria" type="button" />
                    </div>
                </div>
            </section>
        </main>
    )
}