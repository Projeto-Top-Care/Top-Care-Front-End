'use client'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart, FaTrash } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { ProdutoCard } from '@/types/produto'
import { useConfirmacao } from "@/context/confirmacaoContext"
import { use, useEffect, useState } from 'react'
import React from "react";
import { useCarrinho } from "@/context/CarrinhoContext";
import { useUserID } from "@/context/UserIDContext";
import { Usuario } from "@/types/usuarios";
import { buscarUsuario } from "@/server/usuario/action";
import DoisBotoes from "../Pop-up/DoisBotoes/DoisBotoes";
import { useError } from "@/context/ErrorContext";
import { buscarProduto, deletarProduto } from "@/server/produtos/action";

interface ProdutoProps {
    produto: ProdutoCard
    att?: React.Dispatch<React.SetStateAction<number>>
}

const CardProduto = ({ produto, att }: ProdutoProps) => {

    const { getUserID } = useUserID()
    const [isAdmin, setIsAdmin] = useState<boolean>(false)
    const [isLogged, setIsLogged] = useState<boolean>(false)

    useEffect(() => {
        const func = async () => {
            const id = getUserID()
            if (id) {
                const user: Usuario = await buscarUsuario(parseInt(id))
                if (user) {
                    setIsLogged(true)
                }
                if (user.role == 'ADMIN') {
                    setIsAdmin(true)
                }
            }
        }
        func()
    }, [])

    const { addProduct } = useCarrinho()
    const [favoritoCard, setFavoritoCard] = useState<boolean>(false);
    const { push } = useRouter()
    const { addConfirmacao } = useConfirmacao()
    const { addError } = useError()

    const [openModal, setOpenModal] = useState<boolean>(false)
    const [sim, setSim] = useState<boolean>(false)

    useEffect(() => {
        if (sim) {
            try {
                deletarProduto(produto.id)
                addConfirmacao("Produto deletado com sucesso!")
                att && att(Math.random())
            } catch (err) {
                addError("Erro ao deletar produto")
                console.log(err)
            }
            setOpenModal(false)

        }
    }, [sim])



    useEffect(() => {
        iconeFavorito()
    }, [favoritoCard])

    const iconeFavorito = () => {
        return (favoritoCard ?
            <FaHeart style={{ color: "#B5A6F3", }} className="w-4" /> :
            <FaRegHeart style={{ color: "#4f4f4f", }} className="w-4" />)
    }

    const adicionarCarrinho = async () => {
        const primeiraVariante = await buscarProduto(produto.id)
        const newProduto = {
            id: produto.id,
            idVariante: primeiraVariante.variantes[0].id,
            quantidade: 1,
        }
        addProduct(newProduto)
        addConfirmacao("Adicionado a Sacola!")

    }

    return (
        <>
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
                        <img src={produto.imagem} className='h-28 my-3' />
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
                                <FaTrash onClick={() => setOpenModal(true)} /> :
                                <FiShoppingBag style={{ color: "#322828", }} className="w-3 sm:w-4" onClick={() => adicionarCarrinho()} />
                        }
                    </button>
                </div>

            </div>
            {
                openModal && (
                    <div className="w-full fixed">
                        <div className='fixed top-0 left-0 w-full h-full z-50  bg-fundo-modal' onClick={() => setOpenModal(false)}></div>
                        <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 lg:w-[25%] w-[60%]`}>
                            <DoisBotoes texto="Você deseja remover esse produto?" openParms={setOpenModal} sim={setSim} />
                        </div>
                    </div>
                )
            }
        </>
    )
}
export default CardProduto;