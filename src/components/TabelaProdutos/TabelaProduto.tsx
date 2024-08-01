import { ProdutoCompleto, VarianteProps } from '@/types/produto'
import InputText from "../InputText/InputText";
import InputFile from '../InputFile/InputFile';
import TextArea from "../TextArea/TextArea";
import Select from "../Select/Select";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import BotaoGrande from "../BotaoGrande/BotaoGrande"
import VarianteProduto from "../VarianteProduto/VarianteProduto"
import CadastroVarianteProduto from "../CadastroVarianteProduto/CadastroVarianteProduto"

interface TabelaProdutosProps {
    produto?: ProdutoCompleto
}

const marcas = ["ZeeDog", "Whiskas", "Royal Canin", "Purina", "Pedigree", "Golden", "TetraMin"]
const variacoes = ["Nenhuma", "Cor", "Peso", "Tamanho", "Unidade"]

export default function TabelaProdutos({ produto }: TabelaProdutosProps) {
    const [variacao, setVariacao] = useState("");
    const [marca, setMarca] = useState("");
    const [openVariante, setOpenVariante] = useState<boolean>(false)
    const [variantes, setVariantes] = useState<VarianteProps[]>(produto ? produto.variantes : [])
    const [quantidadeFotos, setQuantidadeFotos] = useState<number[]>([])

    return (
        <section className='border border-cinza-escuro rounded-xl h-full flex flex-col lg:flex-row'>
            <section className='border-b border-b-cinza-escuro px-4 md:px-8 lg:border-b-0 lg:border-r border-r-cinza-escuro lg:w-[55%] '>
                <div className='flex justify-center lg:block  pt-6'>
                    <p className='font-averia text-xl font-extrabold md:text-2xl'>Informações básicas</p>
                </div>
                <form action="">
                    <div className=" mt-5" >
                        <InputText placeholder='Nome do produto*' value={produto?.nomeProduto} required />
                    </div>
                    <div className='flex flex-row gap-3 items-center mt-5'>
                        <div className='w-[70%] md:w-[80%]'>
                            <InputText placeholder="Código*" value={produto?.codigo} required />
                        </div>
                        <div className='w-[30%] md:w-[20%] lg:w-[35%] xl:w-[25%]'>
                            <BotaoGrande title='Gerar' background='primaria' type='button' />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <Select label="Marca" options={marcas} opcaoSelecionada={setMarca} opcao={marca} />
                    </div>
                    <div className='flex flex-col md:flex-row mt-5 gap-5 md:gap-3'>
                        <div className='md:w-[49%]'>
                            <InputText placeholder='Preço*' value={produto?.precoNovo} required />
                        </div>
                        <div className='md:w-[49%]'>
                            <InputText placeholder='Desconto' value={produto?.desconto} />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row mt-5 gap-5 md:gap-3'>
                        <div className='md:w-[49%]'>
                            <InputText placeholder='Estoque Disponível*' value={produto?.estoque} required />
                        </div>
                        <div className='md:w-[49%]'>
                            <Select label="Tipo de Variação" options={variacoes} opcaoSelecionada={setVariacao} opcao={variacao ? variacao : produto ? produto.tipoVariante : ''} />
                        </div>
                    </div>
                    <div className='mt-5 h-32'>
                        <TextArea placeholder='Descrição' value={produto?.descricao} />
                    </div>
                    <div className='flex flex-col items-center mt-5'>
                        <h1 className='font-averia font-extrabold text-lg text-center'>Imagem</h1>
                        <p className='font-poppins text-center text-sm'>Para adicionar mais fotos aperte no sinal de mais</p>
                        <div className='flex flex-col gap-8 justify-center md:flex-row md:gap-4 mt-6 mb-6'>
                            <div className='flex flex-col md:flex-row items-center gap-5 w-full'>
                                <div className='flex flex-col items-center'>
                                    <div className='w-20 h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 xl:w-24 xl:h-24'>
                                        <InputFile rounded='rounded-lg'/>
                                    </div>
                                    <p className='font-poppins text-xs md:text-sm text-center mt-1'>Principal</p>
                                </div>
                                {
                                    quantidadeFotos.map((number, i) => (
                                        <div className='flex flex-col items-center animate-checked' key={i}>
                                            <div className='w-20 h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 xl:w-24 xl:h-24'>
                                                <InputFile rounded='rounded-lg' />
                                            </div>
                                            <p className='font-poppins text-xs md:text-sm text-center mt-1'>Imagem {number + 1}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={`${quantidadeFotos.length < 4 ? '!flex' : 'hidden'} items-center justify-center cursor-pointer w-full md:w-[10%] mt-[-25%] md:mt-[-5%]`}>
                                <div className='p-3 rounded-full bg-terciaria cursor-pointer' onClick={()=>setQuantidadeFotos([...quantidadeFotos, quantidadeFotos.length + 1])}>
                                    {<FiPlus size={20} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            <section className='flex flex-col justify-center lg:block items-center lg:w-[45%] px-6'>
                <div className='pt-6'>
                    <p className='font-averia text-xl font-extrabold md:text-2xl'>Variações do Produto</p>
                </div>
                <div>
                    <p className='font-poppins text-center lg:text-start text-base mt-4'>Clique no botão para adicionar variações deste produto</p>
                </div>
                <div>
                    {
                        variantes.map((variante) => (
                            <VarianteProduto tipo={variante.tipo} preco={variante.preco} estoque={variante.estoque}/>
                        ))
                    }
                </div>
                <div className='w-[70%] md:w-[25%] lg:w-[45%] mt-4 mb-6'>
                    <BotaoGrande title='Adicionar variante' background='secundaria' type='button' onClick={() => setOpenVariante(true)} />
                </div>
            </section>
            {
                openVariante && (
                    <CadastroVarianteProduto openModalProps={setOpenVariante} variantesProps={produto?.variantes} setVariantesProps={setVariantes} />
                )
            }
        </section>
    )
}