'use client'
import { useUserID } from "@/context/UserIDContext";
import { Servico } from "@/types/servicos";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BotaoGrande from "../Botoes/BotaoGrande/BotaoGrande";

interface ICardServico {
    servico: Servico;
    isAdmin?: boolean;
}

const CardServico = ({ servico, isAdmin }: ICardServico) => {

    const [isLogged, setIsLogged] = useState<boolean>(false)
    const { getUserID } = useUserID()


    useEffect(() => {
        const id = getUserID()
        if (id) {
            setIsLogged(true)
        }
    }, [])

    const { push } = useRouter();

    return (
        <div className='w-full relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 border-[1px] border-cinza-escuro rounded-xl p-4 sm:p-6'>

            <img className="sm:flex hidden w-52 rounded-lg" src={"./assets/banho.png"} />

            <div className="flex flex-col gap-2 mt-4">
                <h3 className="font-averia md:text-2xl text-xl font-bold text-preto">{servico.nome}</h3>
                <p className="font-poppins text-justify text-sm sm:text-base text-preto">{servico.descricao}</p>

            </div>
            <div className="w-56 absolute bottom-6 right-6">
                <BotaoGrande onClick={() => isLogged ? isAdmin ? push('/cadastrarServico?id='+servico?.id) : push('/agendamento') : push("/login")} background="secundaria" size="h-8" title={isAdmin ? "Editar serviço" : "Agende agora!"} />
            </div>
        </div>
    )
}
export default CardServico;