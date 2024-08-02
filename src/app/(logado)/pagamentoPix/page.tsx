'use client'
import ResumoPedido from "@/components/ResumoPedido/resumoPedido"
import TituloLinha from "@/components/TituloLinha/TituloLinha"
import { useEffect, useState } from "react"
import { IoCopyOutline } from "react-icons/io5"
import { Usuario, QntProduto } from "@/types/usuarios"
import { buscarUsuario } from "@/server/usuario/action"
import { useRouter } from "next/navigation"
import { useUserID } from "@/context/UserIDContext"
import { useCarrinho } from "@/context/CarrinhoContext"
import Confirmacao from "@/components/Pop-up/Confirmacao/Confirmacao"
import { useConfirmacao } from "@/context/confirmacaoContext"

export default function PagamentoPix() {

    const { push } = useRouter();
    const {getUserID} = useUserID()
    const conf = useConfirmacao()
    const {items} = useCarrinho()

    const getUser = async () =>{
        const id = getUserID()
        if(id){
            setUsuarioLogado (await buscarUsuario(parseInt(id)))
        }
    }

    useEffect(()=>{
        getUser()
    },[])
    
    const [usuarioLogado, setUsuarioLogado] = useState<Usuario>()
    const pedido: QntProduto[] = (items as unknown as QntProduto[])

    const copyContent = (content: string) => {
        navigator.clipboard.writeText(content);
        conf.addConfirmacao("Copiado")
    }

    return (
        <main>
            <Confirmacao/>
            <div className="py-6 sm:py-12 flex flex-col gap-4">
                <TituloLinha voltar={false} titulo="Pagamento" />

                <section className="flex flex-col-reverse gap-2 sm:flex-row sm:px-2 md:px-8 lg:px-20">
                    <section className="p-4 w-full sm:w-1/2">
                        <ResumoPedido produtos={pedido} desconto={0} frete={0} />
                    </section> 

                    <section className="font-poppins gap-8 text-preto flex flex-col justify-center items-center sm:w-[50%]">
                        <div className="flex flex-col items-center gap-2">
                            <p className="text-xs sm:text-sm">Você tem até 1 hora para pagar!</p>

                            <img className="size-36" src="./assets/qrcode.png" />
                        </div>

                        <div className="sm:w-[70%] w-[80%] flex flex-col gap-2">
                            <p className="text-sm">Pix copia e cola</p>
                            <div className="flex flex-row justify-between items-center gap-4 border-[1px] border-cinza rounded-md px-4 py-3">
                                <p className="line-clamp-1 font-poppins md:text-xs text-sm text-cinza-escuro break-all">01010101sfsdasdafdasfsdf01010101010101010101010101010101</p>
                                <IoCopyOutline size={25} color="#4F4F4F" onClick={() => copyContent("01010101sfsdasdafdasfsdf01010101010101010101010101010101")} className='cursor-pointer' />
                            </div>
                        </div>
                    </section>
                </section>

            </div>
        </main>
    )
}