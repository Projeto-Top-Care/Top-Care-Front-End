import { Especificacao, ProdutoCompleto } from '@/types/produto'
import InputText from "../InputText/InputText";
import InputFile from '../InputFile/InputFile';
import TextArea from "../TextArea/TextArea";
import Select from "../Select/Select";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

interface TabelaProdutosProps {
    produtos?: ProdutoCompleto
    produto?: Especificacao
}

const marcas = ["ZeeDog", "Whiskas", "Royal Canin", "Purina", "Pedigree", "Golden", "TetraMin"]

export default function TabelaProdutos({ produto, produtos }: TabelaProdutosProps) {
    const [marca, setMarca] = useState("");
    const [quantidadeFotos, setQuantidadeFotos] = useState<number[]>([])

    return (
        <section className='border border-cinza-escuro rounded-xl h-full flex flex-col lg:flex-row w-full'>
            <section className='border-b border-b-cinza-escuro px-4 md:px-8 lg:border-b-0 lg:border-r border-r-cinza-escuro lg:w-[50%] '>
                <div className='flex justify-center lg:block pt-6'>
                    <p className='font-averia text-xl font-extrabold md:text-2xl'>Informações básicas</p>
                </div>
                <form action="">
                    <div className=" mt-5" >
                        <InputText placeholder='Nome do produto*' value={produtos?.nomeProduto} required />
                    </div>
                    <div className='mt-5'>
                        <div className='w-full'>
                            <InputText placeholder="Código*" value={produtos?.codigo} required />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <Select label="Marca" options={marcas} opcaoSelecionada={setMarca} opcao={marca} />
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
                <form action="">
                    <div className="flex flex-col w-full gap-5">
                        <div className=" flex flex-col md:flex-row justify-between mt-5 w-full gap-5">
                            <div className="w-full">
                                <InputText placeholder='Idade do pet*' value={produto?.idadePet} />
                            </div>
                            <div className="w-full">
                                <InputText placeholder='Porte de raça*' value={produto?.porteRaca} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 md:flex-row justify-between w-full">
                            <div className="w-full">
                                <InputText placeholder='Categoria*' value={produto?.tipo} />
                            </div>
                            <div className="w-full">
                                <InputText placeholder='Material*' value={produto?.material} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full mt-5">
                            <InputText placeholder='Pet(s)*' value={produto?.pet} />
                        </div>
                    </div>
                </form>
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
                            <div className='p-3 rounded-full bg-terciaria cursor-pointer' onClick={() => setQuantidadeFotos([...quantidadeFotos, quantidadeFotos.length + 1])}>
                                {<FiPlus size={20} />}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}