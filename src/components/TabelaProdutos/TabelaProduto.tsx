import { ProdutoCompleto } from '@/types/produto'
import InputText from "../InputText/InputText";
import InputFile from '../InputFile/InputFile';
import TextArea from "../TextArea/TextArea";
import Select from "../Select/Select";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import BotaoGrande from "../BotaoGrande/BotaoGrande"
import VarianteProduto from "../VarianteProduto/VarianteProduto"

interface TabelaProdutosProps {
    produto?: ProdutoCompleto
}

const marcas = ["ZeeDog", "Whiskas", "Royal Canin", "Purina", "Pedigree", "Golden", "TetraMin"]
const variacoes = ["Cachorro", "Gato", "Coelho", "Pássaro", "Hamster", "Peixe", "Tartaruga"]

export default function TabelaProdutos({ produto }: TabelaProdutosProps) {
    const [variacao, setVariacao] = useState("");
    const [marca, setMarca] = useState("");


    return (
        <section className='mt-10 border border-cinza-escuro rounded-xl h-full flex flex-row'>
            <section className='border-r border-r-cinza-escuro w-[55%] px-8'>
                <div className='pt-6'>
                    <p className='font-averia text-2xl font-extrabold'>Informações básicas</p>
                </div>
                <form action="">
                    <div className="mt-5" >
                        <InputText placeholder='Nome do produto*' value={produto?.nomeProduto} />
                    </div>
                    <div className='flex flex-row gap-3 items-center mt-5'>
                        <div className='w-[75%]'>
                            <InputText placeholder="Código*" value={produto?.codigo} />
                        </div>
                        <div className='w-[25%]'>
                            <BotaoGrande title='Gerar Código' background='bg-primaria' type='submit' />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <Select label="Marca" options={marcas} opcaoSelecionada={setMarca} />
                    </div>
                    <div className='flex flex-row mt-5 gap-3'>
                        <div className='w-[49%]'>
                            <InputText placeholder='Preço*' value={produto?.precoNovo} />
                        </div>
                        <div className='w-[49%]'>
                            <InputText placeholder='Desconto' value={produto?.desconto} />
                        </div>
                    </div>
                    <div className='flex flex-row mt-5 gap-3'>
                        <div className='w-[49%]'>
                            <InputText placeholder='Estoque Disponível*' value={produto?.estoque} required />
                        </div>
                        <div className='w-[49%]'>
                            <Select label="Tipo de Variação" options={variacoes} opcaoSelecionada={setVariacao} />
                        </div>
                    </div>
                    <div className='mt-5 h-32'>
                        <TextArea placeholder='Descrição' value={produto?.descricao} />
                    </div>
                    <div className='flex flex-col items-center mt-5'>
                        <h1 className='font-averia font-extrabold text-lg text-center'>Imagem</h1>
                        <p className='font-poppins text-sm'>Para adicionar mais fotos aperte no sinal de mais</p>
                        <div className='flex flex-row justify-center gap-6 mt-6 mb-6'>
                            <div className='flex flex-col items-center'>
                                <div className='w-24 h-24'>
                                    <InputFile rounded='rounded-lg' />
                                </div>
                                <p className='font-poppins text-sm text-center mt-1'>Imagem Principal</p>
                            </div>
                            <div className='flex items-center justify-center cursor-pointer md:w-[10%] w-full mt-[-15%]'>
                                <div className='p-3 rounded-full bg-terciaria cursor-pointer'>
                                    {<FiPlus size={20} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            <section className='w-[45%] px-6'>
                <div className='pt-6'>
                    <p className='font-averia text-2xl font-extrabold'>Variações do Produto</p>
                </div>
                <div>
                    <p className='font-poppins text-base mt-4'>Nenhuma variação adicionada</p>
                </div>
                <div className='w-[45%] mt-4'>
                    <BotaoGrande title='Adicionar variante' background='bg-secundaria' type='submit' />
                </div>
                
            </section>
        </section>
    )
}