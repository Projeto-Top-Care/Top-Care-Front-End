'use client'
import { useRouter } from "next/navigation"
import Confirmacao from "@/components/Pop-up/Confirmacao/Confirmacao";
import BotaoGrande from "@/components/Botoes/BotaoGrande/BotaoGrande"
import TabelaProdutos from "@/components/TabelaProdutos/TabelaProduto";
import { buscarProduto, editarProduto } from "@/server/produtos/action";
import { Categoria, Especificacao, Imagem, ProdutoCompleto, VarianteProps } from "@/types/produto";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import VariacaoProdutos from "@/components/VariacaoProdutos/VariacaoProdutos";
import { useEffect, useState } from "react";
import Carregando from "@/components/Carregando/Carregando";
import { useError } from "@/context/ErrorContext";
import { useConfirmacao } from "@/context/confirmacaoContext";
import Erro from "@/components/Pop-up/Erro/Erro";
import { PetsProps } from "@/types/servicos";

interface EditarProdutoProps {
    searchParams: {
        id: number
    }
}

export default function EditarProduto({ searchParams }: EditarProdutoProps) {

    const router = useRouter()
    const idProduto = searchParams.id
    const {addError} = useError()
    const {addConfirmacao} = useConfirmacao();

    const [produtoBuscado, setProdutoBuscado] = useState<ProdutoCompleto>()
    const [especificacoes, setEspecificacoes] = useState<Especificacao[]>([])
    const [categoeria, setCategoria] = useState<Categoria>()
    const [especies, setEspecies] = useState<PetsProps[]>([])
    const [variantes, setVariantes] = useState<VarianteProps[]>([])

    const [imagensProduto, setImagensProdutos] = useState<Imagem[]>([])
    const [imagens, setImagens] = useState<File[]>([])
    const [imagensDeletar, setImagensDeletar] = useState<string[]>([])

    useEffect(() => {
        const useEffectFunction = async () => {
            const produto: ProdutoCompleto = await buscarProduto(idProduto);
            setProdutoBuscado(produto)
            setEspecificacoes(produto.especificacoes)
            setVariantes(produto.variantes)
            setImagensProdutos(produto.imagens)
            setCategoria(produto.categoria)
            setEspecies(produto.especies)
        }
        useEffectFunction()
    }, [idProduto]);

    if (!produtoBuscado) {
        return (
            <Carregando />
        )
    }

    const sendChanges = async (e: FormData) => {
        if(especificacoes.length === 0) {
            addError('É necessário ter ao menos uma especificação')
            return
        }
        if(variantes.length === 0) {
            addError('É necessário ter ao menos uma variante')
            return
        }
        if(imagens.length === 0 && imagensProduto.length === 0) {
            addError('É necessário ter ao menos uma imagem')
            return
        }

        const produto: any = Object.fromEntries(e.entries())
        produto.especificacoes = especificacoes
        produto.variantes = variantes
        produto.categoria = categoeria
        produto.imagensDeletar = imagensDeletar
        produto.especies = especies

        const formdata = new FormData()
        for (let i = 0; i < imagens.length; i++) {
            formdata.append('files', imagens[i])
        }
        formdata.append('produtoRequestDTO', new Blob([JSON.stringify(produto)], { type: 'application/json' }))
 
        try{
            await editarProduto(searchParams.id ,formdata)
            addConfirmacao('Produto editado com sucesso')
            router.push("/visualizarProdutos")
        } catch (error) {
            addError('Erro ao editar produto')
            console.log(error)
        }
    }

    return (
        <main className="mx-auto text-preto">
            <Confirmacao />
            <Erro/>
            <section className="">
                <TituloLinha voltar={true} titulo={"Editar produto #" + produtoBuscado.codigo} />
            </section>
            <form action={sendChanges}>
                <section className="w-[90%] mx-auto">

                    <TabelaProdutos
                        produto={produtoBuscado}
                        especificacoes={especificacoes}
                        setEspecificacoes={setEspecificacoes}
                        imagens={imagens}
                        setImagens={setImagens}
                        imagensProduto={imagensProduto}
                        imagensDeletar={imagensDeletar}
                        setImagensDeletar={setImagensDeletar}
                        setCategoriaa={setCategoria}
                        especies={especies}
                        setEspecies={setEspecies}
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
                        <BotaoGrande background='secundaria' title='Salvar Alterações' type='submit' />
                    </div>
                </section>
            </form>
        </main>
    )
}