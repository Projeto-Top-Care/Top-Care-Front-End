import { Categoria, Especificacao, Imagem, ProdutoCompleto } from '@/types/produto'
import InputText from "../InputText/InputText";
import InputFile from '../InputFile/InputFile';
import TextArea from "../TextArea/TextArea";
import React, { ChangeEvent, use, useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import CadastroEspecificacoes from '../CadastroEspecificacao/CadastroEspecificacao';
import CardEspecificacaoProduto from '../CardEspecificacaoProduto/CardEspecificacaoProduto';
import Select from '../Select/Select';
import Confirmacao from '../Pop-up/Confirmacao/Confirmacao';
import { getCategorias } from '@/server/categoria/action';
import { set } from 'zod';
import InputSelect from '../InputSelect/InputSelect';
import { PetsProps } from '@/types/servicos';

interface TabelaProdutosProps {
    produto?: ProdutoCompleto
    especificacoes: Especificacao[]
    setEspecificacoes: React.Dispatch<React.SetStateAction<Especificacao[]>>
    imagens: File[]
    setImagens: React.Dispatch<React.SetStateAction<File[]>>
    imagensProduto?: Imagem[]
    setCategoriaa?: React.Dispatch<React.SetStateAction<Categoria | undefined>>
    imagensDeletar?: string[]
    setImagensDeletar?: React.Dispatch<React.SetStateAction<string[]>>
    especies: PetsProps[]
    setEspecies: React.Dispatch<React.SetStateAction<PetsProps[]>>
}

export default function TabelaProdutos(
    { produto, especificacoes, setEspecificacoes, imagens, setImagens, 
        imagensProduto, setCategoriaa, imagensDeletar, setImagensDeletar,
            especies, setEspecies }: TabelaProdutosProps) {

    const quantidadeFotos = new Array(imagensProduto ? 5 - imagensProduto.length : 5).fill(0).map((_, i) => imagensProduto ? imagensProduto.length + 1 + i : i + 1)
    const [openEspecificacao, setOpenEspecificacao] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<string>(produto?.categoria.nome || '')
    const [categorias, setCategorias] = useState<Categoria[]>([])

    useEffect(() => {
        categorias.forEach((cat) => {
            if (cat.nome === categoria && setCategoriaa) {
                setCategoriaa(cat)
            }
        })
    }, [categoria])

    useEffect(() => {
        const func = async () => {
            const categoriass = await getCategorias();
            if (categoriass) {
                setCategorias(categoriass)
            }
        }
        func()
    }, [])

    return (
        <section className='border border-cinza-escuro rounded-xl h-full flex flex-col lg:flex-row w-full'>
            <Confirmacao />
            <section className='border-b border-b-cinza-escuro px-4 md:px-8 lg:border-b-0 lg:border-r border-r-cinza-escuro lg:w-[50%] '>
                <div className='flex justify-center lg:block pt-6'>
                    <p className='font-averia text-xl font-extrabold md:text-2xl'>Informações básicas</p>
                </div>
                <div className='flex flex-col gap-5 py-4'>
                    <div className="">
                        <InputText
                            placeholder='Nome do produto*'
                            defaultValue={produto?.nome}
                            name='nome'
                            required
                        />
                    </div>
                    <div className="">
                        <InputText
                            placeholder='Codigo*'
                            defaultValue={produto?.codigo}
                            name='codigo'
                            type='number'
                            required
                        />
                    </div>
                    <div className='h-32'>
                        <TextArea
                            placeholder='Descrição'
                            defaultValue={produto?.descricao}
                            name='descricao'
                            required
                        />
                    </div>
                    <div className="">
                        <InputText
                            placeholder='Marca*'
                            defaultValue={produto?.marca}
                            name='marca'
                            required
                        />
                    </div>
                    <div>
                        <Select
                            label='Categoria*'
                            opcao={categoria}
                            opcaoSelecionada={setCategoria}
                            options={categorias.map((cat) => cat.nome)}
                        />
                    </div>
                    <div>
                        <InputSelect 
                            type='Animais' 
                            jaSelecionados={especies} 
                            setSelecionados={setEspecies} 
                        />
                    </div>
                </div>
            </section>
            <section className="lg:w-[45%] lg:ml-7 lg:p-0 p-4">
                <div className="flex justify-center lg:block pt-6">
                    <p className="font-averia text-xl font-extrabold md:text-2xl">Especificações</p>
                </div>
                <div className='flex flex-col w-full gap-4 mt-4 mb-8'>
                    {especificacoes.map((especificacao, i) => (
                        <div key={i}>
                            <CardEspecificacaoProduto
                                descricao={especificacao.conteudo}
                                nome={especificacao.nome}
                                especificacoes={especificacoes}
                                setEspecificacoes={setEspecificacoes}
                            />
                        </div>
                    ))}
                    <div className='flex flex-row gap-2 mt-4 cursor-default items-center'>
                        <div className=' w-10 h-10 flex items-center justify-center rounded-full cursor-pointer bg-terciaria' onClick={() => setOpenEspecificacao(true)}>
                            <FiPlus size={20} />
                        </div>
                        <p className='font-poppins text-sm text-preto w-full'>
                            Adicionar especificação
                        </p>
                    </div>
                </div>
                {
                    openEspecificacao && (
                        <CadastroEspecificacoes
                            setOpenModal={setOpenEspecificacao}
                            especificacoes={especificacoes}
                            setEspecificacoes={setEspecificacoes} />
                    )
                }
                <div className='flex flex-col items-center mt-5'>
                    <h1 className='font-averia font-extrabold text-lg text-center'>Imagem</h1>
                    <p className='font-poppins text-center text-sm'>Para adicionar mais fotos aperte no sinal de mais</p>
                    <div className='flex flex-col gap-5 justify-center items-center md:flex-row mt-6 mb-6'>
                        <div className='flex flex-col md:flex-row items-center gap-5 w-full'>
                            {
                                imagensProduto?.map((imagem, i) => (
                                    <div className='flex flex-col items-center animate-checked' key={i}>
                                        <div className='w-20 h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 xl:w-24 xl:h-24'>
                                            <InputFile
                                                rounded='rounded-lg'
                                                fileGetted={imagem.caminho}
                                                canNotEdit
                                                canExclude
                                                imagens={imagens}
                                                setImagens={setImagens}
                                                imagensDeletar={imagensDeletar}
                                                setImagensDeletar={setImagensDeletar}
                                            />
                                        </div>
                                        <p className='font-poppins text-xs md:text-sm text-center mt-1'>Imagem {i + 1}</p>
                                    </div>
                                ))
                            }
                            {quantidadeFotos.map((number, i) => (
                                <div className='flex flex-col items-center animate-checked' key={i}>
                                    <div className='w-20 h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 xl:w-24 xl:h-24'>
                                        <InputFile
                                            rounded='rounded-lg'
                                            canNotEdit
                                            canExclude
                                            imagens={imagens}
                                            setImagens={setImagens}
                                        />
                                    </div>
                                    <p className='font-poppins text-xs md:text-sm text-center mt-1'>Imagem {number}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
