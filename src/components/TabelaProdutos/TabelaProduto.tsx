import { Especificacao, ProdutoCompleto } from '@/types/produto'
import InputText from "../InputText/InputText";
import InputFile from '../InputFile/InputFile';
import TextArea from "../TextArea/TextArea";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import CadastroEspecificacoes from '../CadastroEspecificacao/CadastroEspecificacao';
import CardEspecificacaoProduto from '../CardEspecificacaoProduto/CardEspecificacaoProduto';

interface TabelaProdutosProps {
    produtos?: ProdutoCompleto
    produto?: Especificacao
}

export default function TabelaProdutos({ produto, produtos }: TabelaProdutosProps) {
    const [quantidadeFotos, setQuantidadeFotos] = useState<number[]>([])
    const [openEspecificacao, setOpenEspecificacao] = useState<boolean>(false)
    const [especificacoes, setEspecificacao] = useState<Especificacao[]>(() => {
        return Array.isArray(produtos?.especificacoes) ? produtos.especificacoes : [];
    });

    return (
        <section className='border border-cinza-escuro rounded-xl h-full flex flex-col lg:flex-row w-full'>
            <section className='border-b border-b-cinza-escuro px-4 md:px-8 lg:border-b-0 lg:border-r border-r-cinza-escuro lg:w-[50%] '>
                <div className='flex justify-center lg:block pt-6'>
                    <p className='font-averia text-xl font-extrabold md:text-2xl'>Informações básicas</p>
                </div>
                <form action="">
                    <div className="mt-5">
                        <InputText placeholder='Nome do produto*' value={produto?.nome} required />
                    </div>
                    <div className='mt-5 h-32 mb-8'>
                        <TextArea placeholder='Descrição' value={produtos?.descricao} />
                    </div>
                </form>
            </section>
            <section className="lg:w-[45%] lg:ml-7 lg:p-0 p-4">
                <div className="flex justify-center lg:block pt-6">
                    <p className="font-averia text-xl font-extrabold md:text-2xl">Especificações</p>
                </div>
                <div className='flex flex-col w-full gap-4 mt-4 mb-8'>
                    {especificacoes.map((especificacao) => (
                        <CardEspecificacaoProduto descricao={especificacao.descricao} nome={especificacao.nome} />
                    ))}
                    <div className='flex flex-row gap-2 cursor-pointer md:w-[10%] w-full mt-4' onClick={() => setOpenEspecificacao(true)}>
                        <div className='p-2 rounded-full bg-terciaria'>
                            <FiPlus size={20} />
                        </div>
                        <p className='font-poppins text-sm text-preto w-full'>
                            Adicionar especificação
                        </p>
                    </div>
                </div>
                {
                    openEspecificacao && (
                        <CadastroEspecificacoes openModalProps={setOpenEspecificacao} especificacoesProps={especificacoes} setEspecificacaoProps={setEspecificacao} />
                    )
                }
                <div className='flex flex-col items-center mt-5'>
                    <h1 className='font-averia font-extrabold text-lg text-center'>Imagem</h1>
                    <p className='font-poppins text-center text-sm'>Para adicionar mais fotos aperte no sinal de mais</p>
                    <div className='flex flex-col gap-5 justify-center md:flex-row mt-6 mb-6'>
                        <div className='flex flex-col md:flex-row items-center gap-5 w-full'>
                            <div className='flex flex-col items-center'>
                                <div className='w-20 h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 xl:w-24 xl:h-24'>
                                    <InputFile rounded='rounded-lg' />
                                </div>
                                <p className='font-poppins text-xs md:text-sm text-center mt-1'>Principal</p>
                            </div>
                            {quantidadeFotos.map((number, i) => (
                                <div className='flex flex-col items-center animate-checked' key={i}>
                                    <div className='w-20 h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 xl:w-24 xl:h-24'>
                                        <InputFile rounded='rounded-lg' />
                                    </div>
                                    <p className='font-poppins text-xs md:text-sm text-center mt-1'>Imagem {number + 1}</p>
                                </div>
                            ))}
                        </div>
                        <div className={`${quantidadeFotos.length < 4 ? '!flex' : 'hidden'} items-center justify-center cursor-pointer w-full md:w-[10%] mt-[-25%] md:mt-[-5%]`}>
                            <div className='p-3 rounded-full bg-terciaria cursor-pointer' onClick={() => setQuantidadeFotos([...quantidadeFotos, quantidadeFotos.length + 1])}>
                                <FiPlus size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
