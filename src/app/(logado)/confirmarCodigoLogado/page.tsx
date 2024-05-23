'use client'
import InputText from "@/components/InputText/InputText"
import InputEstatico from "@/components/InputEstatico/InputEstatico"
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande"
import { useRouter  } from 'next/navigation'

export default function confirmarCodigo() {
    const {push} = useRouter();
    return (
        <main>
            <section>
                <div className="flex flex-col justify-center items-center mt-[10%] gap-4 md:mt-[5%]">
                    <div className="flex flex-col justify-center items-center gap-3 lg:w-[31%] md:w-[50%] w-[80%]">
                        <p className="font-averia font-semibold text-xl md:text-3xl">Esqueceu a senha?</p>
                        <p className="font-poppins  text-xs text-center md:text-sm">Um código foi enviado para seu meio de recuperação escolhido, verifique e digite o código recebido</p>
                    </div>
                    <div className="mt-5 w-[80%] md:w-[50%] lg:w-[31%]">
                        <InputText placeholder="Código"/>
                    </div>
                    <div className="flex flex-row w-[80%] mb-[10%] justify-between md:w-[50%] md:gap-10 md:mb-[5%] lg:w-[31%]">
                    <div className="mt-3 w-[55%] md:w-[50%] lg:w-[50%]">
                            <BotaoGrande title="Reenviar código" background="bg-terciaria" type="button"/>
                        </div>
                        <div className="mt-3 w-[40%] md:w-[50%] lg:w-[50%]">
                            <BotaoGrande title="Continuar" background="bg-secundaria" type="button" onClick={() => push('/redefinirSenhaLogado')}/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}