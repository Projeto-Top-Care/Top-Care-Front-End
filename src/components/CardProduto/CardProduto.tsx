'use client'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart, FaTrash } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { ProdutoCard } from '@/types/produto'
import { useConfirmacao } from "@/context/confirmacaoContext"
import { useEffect, useState } from 'react'
import React from "react";
import { useCarrinho } from "@/context/CarrinhoContext";
import { useUserID } from "@/context/UserIDContext";
import { Usuario } from "@/types/usuarios";
import { buscarUsuario } from "@/server/usuario/action";

interface ProdutoProps {
    produto: ProdutoCard
}

const CardProduto = ({ produto }: ProdutoProps) => {

    const { getUserID } = useUserID()
    const [isAdmin, setIsAdmin] = useState<boolean>(false)
    const [isLogged, setIsLogged] = useState<boolean>(false)

    useEffect(() => {
        const func = async () => {
            const id = getUserID()
            if (id) {
                const user: Usuario = await buscarUsuario(parseInt(id))
                if (user.role == 'admin') {
                    setIsAdmin(true)
                }
            }
        }
    }, [])

    const { addProduct } = useCarrinho()
    const [favoritoCard, setFavoritoCard] = useState<boolean>(false);
    const { push } = useRouter()
    const { addConfirmacao } = useConfirmacao()!

    useEffect(() => {
        iconeFavorito()
    }, [favoritoCard])

    const iconeFavorito = () => {
        return (favoritoCard ?
            <FaHeart style={{ color: "#B5A6F3", }} className="w-4" /> :
            <FaRegHeart style={{ color: "#4f4f4f", }} className="w-4" />)
    }

    const adicionarCarrinho = () => {
        const newProduto = {
            id: produto.id,
            quantidade: 1,
        }
        addProduct(newProduto)
        addConfirmacao("Adicionado a Sacola!")

    }

    return (
        <div className=' hover:scale-105 duration-100 flex flex-col justify-center gap-3 border-cinza border-[1px] rounded-lg w-52 h-80 font-poppins px-2 py-3 '>
            <div className='flex flex-row justify-between items-center' >
                <div className='flex flex-row gap-[0.2rem] items-center justify-center'>
                    <AiFillStar style={{ color: "#FFD601", }} className="w-5" />
                    <p className='text-sm md:text-base text-[0.6rem] font-medium text-cinza-escuro'>{produto.notaAvaliacao}</p>
                </div>

                <div className={`${isAdmin ? `hidden` : ``}`}>
                    <button onClick={() => (isLogged ? setFavoritoCard(!favoritoCard) : push('/login'))} className="transition duration-100 active:scale-75 z-50">
                        {iconeFavorito()}
                    </button>
                </div>

            </div>

            <div className='w-full flex flex-col items-center cursor-pointer' onClick={() => { !isAdmin ? push(`/produtos/${produto.nome.replace('&nbsp', "-")}?id=${produto.id}`) : '' }}>
                <p className='text-xs md:text-sm h-10 font-medium text-preto text-center overflow-hidden line-clamp-2'>{produto.nome}</p>
                <div className="w-full items-center justify-center flex flex-col-reverse md:flex-col">
                    <img src={produto.imagemProduto} className='h-28 my-3' />
                </div>
                <h5 className='text-xs font-medium text-cinza-escuro'><span className='line-through'>R${produto.preco.toFixed(2).replace(".", ",")} </span></h5>
                <h5 className='sm:text-lg text-sm font-semibold text-preto'>R${produto.preco.toFixed(2).replace(".", ",")}</h5>
            </div>

            <div className='flex flex-row gap-1 justify-between'>
                <button className='transition ease-in-out delay-150 duration-200 text-xs text-preto font-medium bg-secundaria rounded-lg w-[76%] h-7 hover:bg-[#9EBF40]' onClick={() => { !isAdmin ? "" : push(`/editarProduto?id=${produto.id}`) }}>
                    {
                        isAdmin ?
                            "Editar Produto" :
                            "Comprar agora"
                    }
                </button>
                <button className='bg-primaria rounded-lg w-[24%] transition ease-in-out delay-150 duration-200 hover:bg-[#826cda] flex justify-center items-center'>
                    {
                        isAdmin ?
                            <FaTrash /> :
                            <FiShoppingBag style={{ color: "#322828", }} className="w-3 sm:w-4" onClick={() => adicionarCarrinho()} />
                    }
                </button>
            </div>
        </div>
    )
}
export default CardProduto;