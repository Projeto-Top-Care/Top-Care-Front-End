import { Endereco } from "@/types/usuarios"
import { SetStateAction, useEffect, useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"
import EnderecoPerfil from "../Endereço/Endereco"
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande";

interface iEnderecos {
    enderecos: Endereco[],
    setShowAllAdresses: React.Dispatch<SetStateAction<boolean>>
    setOpenEndereco: React.Dispatch<SetStateAction<boolean>>
    atualizarProps: React.Dispatch<SetStateAction<number>>
}

export default function EnderecosSalvos({ enderecos, setShowAllAdresses, setOpenEndereco, atualizarProps }: iEnderecos) {

    const [showAddresses, setShowAdresses] = useState(false)

    useEffect(() => {
        setShowAllAdresses(showAddresses)
    }, [showAddresses])

    return (
        <main>
            <section className="grid place-content-center">
                <div className="grid md:mb-12 mb-4 md:w-[95%] lg:pl-16 md:pl-10 md:p-0 p-4 lg:self-start self-center gap-8 lg:grid-cols-3 md:grid-cols-2">
                    {
                        enderecos.map((endereco, i) => (
                            <div key={i}>
                                <EnderecoPerfil endereco={endereco} atualizarProps={atualizarProps}/>
                            </div>
                        ))
                    }
                </div>
            </section>

            <div className="flex flex-col-reverse md:flex-row md:w-[95%] w-full gap-4 lg:pl-16 md:pl-10 md:p-0 p-4 lg:self-start self-center">
                <div className="md:w-52" onClick={() => setOpenEndereco(true)}>
                    <BotaoGrande title="Novo endereço" background='primaria' type={'button'} />
                </div>
                <div className="">
                    <button className='flex lg:text-base text-sm transition ease-in-out delay-150 duration-200 text-preto font-poppins bg-secundaria p-1 rounded-lg md:w-52 w-full h-8 hover:bg-[#9EBF40] justify-center gap-2' onClick={() => setShowAdresses(!showAddresses)}>
                        {showAddresses ? "Mostrar menos" : "Mostrar todos "}
                        {showAddresses ? <FaAngleUp className="mt-1" /> : <FaAngleDown className="mt-1" />}
                    </button>
                </div>
            </div>
        </main>
    )
}         