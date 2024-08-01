'use client'
import { useRouter } from "next/navigation"
import Confirmacao from "@/components/Pop-up/Confirmacao/Confirmacao";
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande"
import TabelaProdutos from "@/components/TabelaProdutos/TabelaProduto";
import EspecificacoesProduto from "@/components/EspecificaçoesProduto/Especificacoes";
import { buscarProduto } from "@/server/produtos/action";
import { ProdutoCompleto } from "@/types/produto";
import TituloLinha from "@/components/TituloLinha/TituloLinha";

interface EditarProdutoProps{
    searchParams: {
        id: number
    }
}

export default function EditarProduto({searchParams}: EditarProdutoProps) {

    const router = useRouter()
    const idProduto = searchParams.id

    const produtoBuscado: ProdutoCompleto = buscarProduto(idProduto)!


    return(
        <main className="mx-auto text-preto">
            <Confirmacao/>
            <section className="">  
                <TituloLinha voltar={true} titulo={"Editar produto #" + produtoBuscado.codigo} />
            </section>
            <section className="w-[90%] mx-auto">
                <TabelaProdutos produto={produtoBuscado}/>
            </section>
            <section className="w-[90%] mx-auto">
                <EspecificacoesProduto  produto={produtoBuscado.especificacoes}/>
            </section>
            <section className='w-[90%] mx-auto flex flex-row justify-between items-center my-10'>
                <div className='w-24 md:w-48'>
                    <BotaoGrande background='cancelar' title='Cancelar' type='button' onClick={()=>router.back()} />
                </div>
                <div className='md:w-60'>
                    <BotaoGrande background='secundaria' title='Salvar Alterações' type='button' />
                </div>
            </section>
        </main>
    )
}