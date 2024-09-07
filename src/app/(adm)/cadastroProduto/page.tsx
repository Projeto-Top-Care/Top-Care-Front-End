'use client'
import { useRouter } from "next/navigation"
import Confirmacao from "@/components/Pop-up/Confirmacao/Confirmacao";
import BotaoGrande from "@/components/Botoes/BotaoGrande/BotaoGrande"
import TabelaProdutos from "@/components/TabelaProdutos/TabelaProduto";
import VariacaoProdutos from "@/components/VariacaoProdutos/VariacaoProdutos";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { Categoria, Especificacao, VarianteProps } from "@/types/produto";
import { useState } from "react";
import { cadastrarProduto } from "@/server/produtos/action";
import { useError } from "@/context/ErrorContext";
import { useConfirmacao } from "@/context/confirmacaoContext";
import Erro from "@/components/Pop-up/Erro/Erro";

export default function CadastroProduto() {
    const router = useRouter()
    const {addError} = useError()
    const {addConfirmacao} = useConfirmacao();

    const [variantes, setVariantes] = useState<VarianteProps[]>([])
    const [especificacoes, setEspecificacoes] = useState<Especificacao[]>([])
    const [categoeria, setCategoria] = useState<Categoria>()
    const [imagens, setImagens] = useState<File[]>([])

    const cadastrar = async (e: FormData) => {
        if(especificacoes.length === 0) {
            addError('É necessário cadastrar ao menos uma especificação')
            return
        }
        if(variantes.length === 0) {
            addError('É necessário cadastrar ao menos uma variante')
            return
        }
        if(imagens.length === 0) {
            addError('É necessário cadastrar ao menos uma imagem')
            return
        }

        const produto: any = Object.fromEntries(e.entries())
        produto.especificacoes = especificacoes
        produto.variantes = variantes
        produto.categoria = categoeria

        const formdata = new FormData()
        for (let i = 0; i < imagens.length; i++) {
            formdata.append('files', imagens[i])
        }
        formdata.append('produtoDTO', new Blob([JSON.stringify(produto)], { type: 'application/json' }))
 
        try{
            await cadastrarProduto(formdata)
            addConfirmacao('Produto cadastrado com sucesso')
            router.push("/visualizarProdutos")
        } catch (error) {
            addError('Erro ao cadastrar produto')
            console.log(error)
        }
        //Função de cadastro de produto
    }

    return (
        <form action={cadastrar} className="mx-auto text-preto">
            <Confirmacao />
            <Erro/>
            <section className="">
                <TituloLinha voltar={true} titulo='Cadastrar novo produto' />
            </section>
            <section className="w-[90%] mx-auto">
                <TabelaProdutos 
                    especificacoes={especificacoes}
                    setEspecificacoes={setEspecificacoes}
                    imagens={imagens}
                    setImagens={setImagens}
                    setCategoriaa={setCategoria}
                />
            </section>
            <section className="w-[90%] mx-auto">
                <VariacaoProdutos 
                    variantes={variantes} 
                    setVariantes={setVariantes}
                />
            </section>
            <section className='w-[90%] mx-auto flex flex-row justify-between items-center my-10'>
                <div className='w-24 md:w-48'>
                    <BotaoGrande background='cancelar' title='Cancelar' type='button' onClick={() => router.back()} />
                </div>
                <div className='md:w-60'>
                    <BotaoGrande background='secundaria' title='Cadastrar Produto' type='submit' />
                </div>
            </section>
        </form>
    )
}