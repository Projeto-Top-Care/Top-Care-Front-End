import { Especificacao, ProdutoCompleto, VarianteProps } from '@/types/produto'
import BotaoGrande from "@/components/Botoes/BotaoGrande/BotaoGrande"
import { useState } from "react";
import VarianteProduto from "../CardVarianteProduto/CardVarianteProduto"
import CadastroVarianteProduto from "../CadastroVarianteProduto/CadastroVarianteProduto"
import CardVarianteProduto from '../CardVarianteProduto/CardVarianteProduto';
import { FiPlus } from "react-icons/fi";

interface VariacaoProps {
    produtos?: ProdutoCompleto
}

const variacoes = ["Nenhuma", "Cor", "Peso", "Tamanho", "Unidade"]

export default function VariacaoProdutos({ produtos }: VariacaoProps) {
    const [openVariante, setOpenVariante] = useState<boolean>(false)
    const [variantes, setVariantes] = useState<VarianteProps[]>(produtos ? produtos.variantes : [])

    return (
        <section className='flex flex-col justify-center lg:block items-center w-full px-6 mt-10 border border-cinza-escuro rounded-xl'>
            <div className='pt-6'>
                <p className='font-averia text-xl font-extrabold md:text-2xl'>Variações do Produto</p>
            </div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 w-[90%] gap-4 mt-4 mb-8'>
                {
                    variantes.map((variante) => (
                        <CardVarianteProduto tipo={variante.tipo} preco={variante.preco} estoque={variante.estoque} />
                    ))
                }
                <div className='flex items-center gap-2 flex-row cursor-pointer md:w-[10%] w-full mt-4' onClick={() => setOpenVariante(true)}>
                    <div className='p-2 rounded-full bg-terciaria'>
                        {<FiPlus size={20} />}
                    </div>
                    <p className='font-poppins text-sm text-preto'>
                        Adicionar variação
                    </p>
                </div>
            </div>
            {
                openVariante && (
                    <CadastroVarianteProduto openModalProps={setOpenVariante} variantesProps={produtos?.variantes} setVariantesProps={setVariantes} />
                )
            }
        </section>
    )
}