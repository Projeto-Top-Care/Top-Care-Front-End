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

export default function VariacaoProdutos({ produtos }: VariacaoProps) {
    const [openVariante, setOpenVariante] = useState<boolean>(false)
    const [variantes, setVariantes] = useState<VarianteProps[]>(produtos?.variantes || [])

    return (
        <section className='flex flex-col justify-center lg:block items-center w-full p-8 mt-10 border border-cinza-escuro rounded-xl'>
            <div className='pt-6'>
                <p className='font-averia text-xl font-extrabold md:text-2xl'>Variações do Produto</p>
            </div>
            <div className='flex flex-row w-[90%] gap-4 mt-4 mb-8'>
                {
                    variantes.map((variante, i) => (
                        <div key={i} className='w-80'>
                            <CardVarianteProduto variante={variante} />
                        </div>
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
                    <CadastroVarianteProduto 
                        setOpen={setOpenVariante} 
                        variantes={variantes} 
                        setVariantes={setVariantes} 
                    />
                )
            }
        </section>
    )
}