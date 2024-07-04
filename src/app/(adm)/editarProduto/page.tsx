'use client'
import { useRouter } from "next/navigation"
import Confirmacao from "@/components/Pop-up/Confirmacao/Confirmacao";
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande"
import TabelaProdutos from "@/components/TabelaProdutos/TabelaProduto";
import EspecificacoesProduto from "@/components/EspecificaçoesProduto/Especificacoes";
import { buscarProduto } from "@/server/produtos/action";
import { ProdutoCompleto } from "@/types/produto";

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
        <main className="w-[90%] mx-auto">
            <Confirmacao/>
            <section className="flex items-center justify-center mt-10">  
                <p className="font-averia font-semibold text-xl md:text-2xl">Editar Produto</p>
            </section>
            <section>
                <TabelaProdutos produto={produtoBuscado}/>
            </section>
            <section>
                <EspecificacoesProduto  produto={produtoBuscado.especificacoes}/>
            </section>
            <section className='flex flex-row justify-between items-center my-10'>
                <div className='w-24 md:w-48'>
                    <BotaoGrande background='bg-error' title='Cancelar' type='button' onClick={()=>router.back()} />
                </div>
                <div className='md:w-60'>
                    <BotaoGrande background='bg-secundaria' title='Salvar Alterações' type='button' />
                </div>
            </section>
        </main>
    )
}