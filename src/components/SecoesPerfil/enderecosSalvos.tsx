import { Endereco } from "@/types/usuarios"
import { SetStateAction, useEffect, useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"
import EnderecoPerfil from "../Endereço/Endereco"
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande";

interface iEnderecos {
    enderecos: Endereco[],
    setShowAllAdresses: React.Dispatch<SetStateAction<boolean>>
    setOpenEndereco: React.Dispatch<SetStateAction<boolean>>
}

export default function EnderecosSalvos({ enderecos, setShowAllAdresses, setOpenEndereco }: iEnderecos) {

    const [showAddresses, setShowAdresses] = useState(false)
    const [openPopupEndereco, setOpenPopupEndereco] = useState(false)

    useEffect(() => {
        setShowAllAdresses(showAddresses)
    }, [showAddresses])
    useEffect(() => {
        setOpenEndereco(openPopupEndereco)
    }, [openPopupEndereco])

    return (
        <main>
            <section className="grid place-content-center">
                <div className="grid gap-8 sm:gap-20 mb-2 sm:mb-8 lg:grid-cols-2 xl:grid-cols-3">
                    {
                        enderecos.map((endereco, i) => (
                            <div key={i}>
                                <EnderecoPerfil
                                    titulo={endereco.nome}
                                    cep={endereco.cep}
                                    estado={endereco.estado}
                                    bairro={endereco.bairro}
                                    rua={endereco.rua}
                                    numero={endereco.numero}
                                    complemento={endereco.complemento} />
                            </div>
                        ))
                    }
                </div>
            </section>

            <div className="flex flex-row w-[90%] gap-8 p-0 sm:pl-20 lg:self-start self-center">
                <div className="md:w-44 w-1/2" onClick={() => setOpenPopupEndereco(true)}>
                    <BotaoGrande title="+ Endereço" background='bg-primaria' type={'button'} />
                </div>
                <div className="w-1/2">
                    <button className='flex lg:text-base text-sm transition ease-in-out delay-150 duration-200 text-preto font-poppins bg-secundaria  p-1 rounded-lg md:w-44 w-full h-8 hover:bg-[#9EBF40] justify-around' onClick={() => setShowAdresses(!showAddresses)}>
                        {showAddresses ? "Mostrar menos" : "Mostrar todos "}
                        {showAddresses ? <FaAngleUp className="mt-1" /> : <FaAngleDown className="mt-1" />}
                    </button>
                </div>
            </div>
        </main>
    )
}         