'use client';
import React, { useEffect, useState } from 'react';
import { useUserID } from '@/context/UserIDContext';
import { buscarUsuario } from '@/server/usuario/action';
import { Usuario } from '@/types/usuarios';
import TituloLinha from '@/components/TituloLinha/TituloLinha';
import CardProduto from '@/components/CardProduto/CardProduto';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { buscarProduto } from '@/server/produtos/action';
import { Produto, ProdutoCompleto } from '@/types/produto';

export default function ProdutoFavoritos() {
    const [usuarioLogado, setUsuarioLogado] = useState<Usuario | undefined>()
    const { getUserID } = useUserID()

    const [showAllProducts, setShowAllProducts] = useState(false);
    const [pesquisa, setPesquisa] = useState('');
    const [produtosFavoritos, setProdutosFavoritos] = useState<Produto[]>([]);
    const [numDisplayedProducts, setNumDisplayedProducts] = useState(10);
    
    useEffect(() => {
        const idFetched = getUserID()
        if (idFetched) {
            const usuario: Usuario = buscarUsuario(parseInt(idFetched!))!;
            setUsuarioLogado(usuario)
        }
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

    useEffect(() => {
        let produtosFavoritos: Produto[] | undefined = usuarioLogado?.favoritos.map((id) => {
            return buscarProduto(id)!;
        })

        if (pesquisa.trim() !== '') {
            produtosFavoritos = produtosFavoritos?.filter((favorito) =>
                favorito.nomeProduto
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, "")
                    .includes(
                        pesquisa
                            .toLowerCase()
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, "")
                    )
            );
        }
        if(produtosFavoritos){
            setProdutosFavoritos(showAllProducts ? produtosFavoritos : produtosFavoritos.slice(0, numDisplayedProducts));
        }
    }, [pesquisa, showAllProducts, usuarioLogado?.favoritos, numDisplayedProducts]);

    const toggleShowAllProducts = () => {
        setShowAllProducts(!showAllProducts);
    };

    if(!usuarioLogado){
        return <div>Carregando...</div>
    }
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
            <section className='w-[90%] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  justify-items-center gap-10 mt-10 ml-[5%]'>
                {produtosFavoritos.map((produto) => (
                    <CardProduto
                        key={produto.id}
                        id={produto.id}
                        nomeProduto={produto.nomeProduto}
                        precoAntigoDoProduto={produto.precoAntigoDoProduto}
                        precoNovo={produto.precoNovo}
                        notaDeAvaliacao={produto.notaDeAvaliacao}
                        imagemProduto={produto.imagemProduto}
                        desconto={produto.desconto}
                        favorito={true}
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
