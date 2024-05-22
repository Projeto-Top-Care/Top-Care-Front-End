'use client'
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande";
import InputText from "@/components/InputText/InputText";
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react";
import Erro from "@/components/Pop-up/Erro/Erro";
import { buscarUsuarioEmail } from '@/server/usuario/action'
import { Usuario } from '@/types/usuarios'

export default function RecuperacaoSenhaDeslogado() {

    const [usuarioProcurado, setUsuarioProcurado] = useState<Usuario>()
    const [modalError, setModalError] = useState<boolean>(false)
    const [email, setEmail] = useState<string>("");

    useEffect(() => {
        setUsuarioProcurado(buscarUsuarioEmail(email))
    }, [email])

    const { push } = useRouter();

    const showModalError = () => {
        if (modalError) {
            return (
                <div className="w-full z-50">
                    <Erro />
                </div>
            )
        }
    }

    const verificaForms = () => {
        if (email === "" || !usuarioProcurado) {
            setModalError(true)
            setTimeout(() => {
                setModalError(false)
            }, 4000)
        } else {
            push('./confirmarCodigo')
        }
    }
    
    return (
        <main >
            {showModalError()}
            <section>
                <div className="flex flex-col justify-center items-center md:mt-[5%] mt-[10%] gap-4">
                    <div className="flex flex-col justify-center items-center gap-3 lg:w-[31%] md:w-[50%] w-[80%]">
                        <h1 className="font-averia md:text-3xl text-xl font-bold text-preto">Redefinir senha</h1>
                        <p className="font-poppins text-preto md:text-sm text-xs text-center">Digite seu email para o envio de um código de verificação!</p>
                    </div>
                    <form className="mt-5 lg:w-[31%] md:w-[50%] w-[80%] " action={() => verificaForms()}>
                        <label className="block " >
                            <InputText placeholder="Digite seu email" type={email} id='email' className="peer " onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <div className="mt-8 mb-20">
                            <BotaoGrande title="Continuar" type='submit' background="bg-secundaria" />
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}
