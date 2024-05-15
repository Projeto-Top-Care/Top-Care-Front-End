'use client';
import React, { useEffect, useState } from 'react';
import { buscarUsuario } from '@/server/usuario/action';
import { Favoritos, Usuario } from '@/types/usuarios';
import TituloLinha from '@/components/TituloLinha/TituloLinha';
import CardProduto from '@/components/CardProduto/CardProduto';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';

export default function ProdutoFavoritos() {
    const [showAllProducts, setShowAllProducts] = useState(false);
    const usuarioLogado: Usuario = buscarUsuario(1)!;
    const [pesquisa, setPesquisa] = useState('');
    const [resultado, setResultado] = useState<Favoritos[]>([]);
    const [numDisplayedProducts, setNumDisplayedProducts] = useState(10);

    useEffect(() => {
        let produtosFiltrados = usuarioLogado.favoritos;

        if (pesquisa.trim() !== '') {
            produtosFiltrados = produtosFiltrados.filter((favorito) =>
                favorito.nomeProduto.toLowerCase().includes(pesquisa.toLowerCase())
            );
        }

        setResultado(showAllProducts ? produtosFiltrados : produtosFiltrados.slice(0, numDisplayedProducts));
    }, [pesquisa, showAllProducts, usuarioLogado.favoritos, numDisplayedProducts]);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 640) {
                setNumDisplayedProducts(4);
            } else if (window.innerWidth <= 980) {
                setNumDisplayedProducts(6);
            } else if (window.innerWidth <= 1280) {
                setNumDisplayedProducts(8);
            } else {
                setNumDisplayedProducts(10);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleShowAllProducts = () => {
        setShowAllProducts(!showAllProducts);
    };

    return (
        <section className="mt-8">
            <TituloLinha titulo={"Meus produtos favoritos"} />
            <div className="flex flex-row justify-center mt-16 mb-12">
                <div className="flex w-2/3 px-1 border border-preto rounded-lg h-8">
                    <div className="size-[2rem] flex items-center justify-center">
                        <button><FaSearch style={{ color: "#322828" }} /></button>
                    </div>
                    <input
                        type="search"
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                        className="focus:outline-0 w-full text-xs sm:text-base placeholder:text-cinza-escuro font-poppins bg-branco"
                        placeholder="Pesquise nos favoritos"
                    />
                </div>
            </div>
            <section className='w-[90%] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  justify-items-center gap-10 mt-10 ml-[5%]'>                {resultado.map((produto: { id: number; nomeProduto: string; precoAntigoDoProduto: number; precoNovo: number; notaDeAvaliacao: number; imagemProduto: string[]; desconto: string; }, index: React.Key | null | undefined) => (
                <CardProduto
                    key={index}
                    id={produto.id}
                    nomeProduto={produto.nomeProduto}
                    precoAntigoDoProduto={produto.precoAntigoDoProduto}
                    precoNovo={produto.precoNovo}
                    notaDeAvaliacao={produto.notaDeAvaliacao}
                    imagemProduto={produto.imagemProduto}
                    desconto={produto.desconto}
                    favoritosPage={true}
                />

            ))}
            </section>
            <div className='w-full flex justify-end pr-[6%] my-10'>
                <button
                    className='flex lg:text-base text-sm transition ease-in-out delay-150 duration-200 text-preto font-poppins bg-secundaria p-1 rounded-lg md:w-44 w-32 h-8 hover:bg-[#9EBF40] justify-around'
                    onClick={toggleShowAllProducts}
                >
                    {showAllProducts ? "Mostrar menos" : "Mostrar todos"}
                    {showAllProducts ? <FaAngleUp className="mt-1" /> : <FaAngleDown className="mt-1" />}
                </button>
            </div>
        </section>
    );
}
