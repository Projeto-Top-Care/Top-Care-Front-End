import React, { useEffect, useState } from 'react';
import { buscarUsuario } from '@/server/usuario/action';
import { Favoritos, Usuario } from '@/types/usuarios';
import TituloLinha from '@/components/TituloLinha/TituloLinha';
import CardProduto from '@/components/CardProduto/CardProduto';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa6';

export default function ProdutoFavoritos() {
    const [showAllProducts, setShowAllProducts] = useState(false);
    const usuarioLogado: Usuario = buscarUsuario(1)!;
    const [pesquisa, setPesquisa] = useState('');
    const [resultado, setResultado] = useState<Favoritos[]>([]);

    const pesquisaLowerCase = pesquisa.toLowerCase();

    useEffect(() => {
        const resultado1 = usuarioLogado.favoritos.filter((favorito) =>
            favorito.nomeProduto.toLowerCase().includes(pesquisaLowerCase)
        );
        setResultado(resultado1);
    }, [pesquisa]);

    const toggleShowAllProducts = () => {
        setShowAllProducts(!showAllProducts);
    };

    const displayedProducts = showAllProducts
        ? resultado.length > 0
            ? resultado
            : usuarioLogado.favoritos
        : usuarioLogado.favoritos.slice(0, 5);

    return (
        <section className="mt-8">
            <TituloLinha titulo={"Meus produtos favoritos"} />
            <div className="flex flex-row justify-center mt-16 mb-12">
                <div className="flex w-2/3 px-4 border border-preto rounded-lg ">
                    <input
                        type="search"
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                        className="focus:outline-0 w-full text-xs sm:text-base rounded placeholder:text-cinza-escuro font-poppins bg-branco"
                    />
                </div>
            </div>
            <section className='w-[90%] grid grid-cols-5 justify-items-center gap-10 mt-10 ml-[5%]'>
                {displayedProducts.map((produto: { id: number; nomeProduto: string; precoAntigoDoProduto: number; precoNovo: number; notaDeAvaliacao: number; imagemProduto: string[]; desconto: string; }, index: React.Key | null | undefined) => (
                    <CardProduto
                        key={index}
                        id={produto.id}
                        nomeProduto={produto.nomeProduto}
                        precoAntigoDoProduto={produto.precoAntigoDoProduto}
                        precoNovo={produto.precoNovo}
                        notaDeAvaliacao={produto.notaDeAvaliacao}
                        imagemProduto={produto.imagemProduto}
                        desconto={produto.desconto}
                    />
                ))}
            </section>
            <div className='w-full flex justify-end pr-[6%] my-10'>
                <button
                    className='flex lg:text-base text-sm transition ease-in-out delay-150 duration-200 text-preto font-poppins bg-secundaria p-1 rounded-lg md:w-44 w-32 h-8 hover:bg-[#9EBF40] justify-around'
                    onClick={toggleShowAllProducts}
                >
                    {showAllProducts ? "Mostrar menos" : "Mostrar todos "}
                    {showAllProducts ? <FaAngleUp className="mt-1" /> : <FaAngleDown className="mt-1" />}
                </button>
            </div>
        </section>
    );
}
