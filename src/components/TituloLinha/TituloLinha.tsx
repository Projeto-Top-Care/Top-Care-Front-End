import { useRouter } from "next/navigation";
import { IoChevronBack } from "react-icons/io5";

type titulotype = {
    titulo: string,
    voltar: boolean
}

const TituloLinha = ({ titulo, voltar }: titulotype) => {

    const { back } = useRouter();

    return (
        <div className="w-[90%] m-auto py-6">
            <div className="flex flex-row items-center">
                <div onClick={() => back()} className="font-preto text-2xl hover:-translate-x-1 duration-100">
                    {voltar ? <IoChevronBack /> : <></>}
                </div>
                <h1 className="font-averia md:text-2xl text-xl font-bold text-preto">{titulo}</h1>
            </div>
            <div className="border-t border-preto mt-3 px-30"></div>
        </div>
    )
}
export default TituloLinha;