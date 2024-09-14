'use client'
import CardProduto from '@/components/CardProduto/CardProduto'
import produtos from '@/banco/produtos.json'
import React, { useEffect, useMemo, useState } from 'react'
import { FaFilter } from "react-icons/fa";
import FiltroGrande from '@/components/Filtro/FiltroGrande'
import { PaginaProduto, ProdutoCard, ProdutoCompleto } from '@/types/produto'
import Select from '@/components/Select/Select';
import Confirmacao from '@/components/Pop-up/Confirmacao/Confirmacao';
import { useUserID } from '@/context/UserIDContext';
import { Usuario } from '@/types/usuarios';
import { buscarUsuario } from '@/server/usuario/action';
import BotaoGrande from '../Botoes/BotaoGrande/BotaoGrande';
import { useRouter } from 'next/navigation';
import { buscarTodos } from '@/server/produtos/action';
import Erro from '../Pop-up/Erro/Erro';

interface InterfaceProdutos {
    searchParams?: { q: string }
}

export default function PaginaProdutos({ searchParams }: InterfaceProdutos) {

    const { getUserID } = useUserID()
    const [isAdmin, setIsAdmin] = useState<boolean>(false)
    const [att, setAtt] = useState<number>(0)

    const query = searchParams?.q
    const [produtosMostrados, setProdutosMostrados] = useState<ProdutoCard[]>()

    useEffect(() => {
        const func = async () => {
            const id = getUserID()
            if (id) {
                const user: Usuario = await buscarUsuario(parseInt(id))!
                console.log(user.role)
                if (user.role == 'ADMIN') {
                    setIsAdmin(true)
                }
            }
        }
        func()
    }, [])

    useEffect(() => {
        const func = async () => {
            const paginaProdutos: PaginaProduto = await buscarTodos()
            setProdutosMostrados(paginaProdutos.produtos)
        }
        func()
    }, [att])
    // const [produtosMostradosQuery, setProdutosMostradosQuery] = useState<ProdutoCompleto[]>([])
    // const [filtroOpen, setFiltroOpen] = useState<boolean>(false)
    // const [animation, setAnimation] = useState<boolean>(false)
    const [escolha, setEscolha] = useState<string>('');

    const router = useRouter()

    // useEffect(() => {
    //     if (escolha == 'A a Z') {
    //         const teste = [...produtosMostrados].sort(function odenar(a, b) {
    //             return (a.nome > b.nome ? 1 : -1)
    //         })
    //         setProdutosMostrados(teste);
    //     } else if (escolha == "Mais Populares") {
    //         const teste = [...produtosMostrados].sort(function ordenarPopulares(a, b) {
    //             return b.quantidadeVendas - a.quantidadeVendas
    //         })
    //         setProdutosMostrados(teste);
    //     } else if (escolha == 'Menor Preço') {
    //         setProdutosMostrados([...produtosMostrados].sort(function ordenar(a, b) {
    //             return a.precoNovo - b.precoNovo
    //         }))
    //     } else if (escolha == "Maior Preço") {
    //         setProdutosMostrados([...produtosMostrados].sort(function ordenar(a, b) {
    //             return b.precoNovo - a.precoNovo
    //         }))
    //     } else if (escolha == "Mais bem Avaliados") {
    //         setProdutosMostrados([...produtosMostrados].sort(function ordenar(a, b) {
    //             return b.notaDeAvaliacao - a.notaDeAvaliacao
    //         }))
    //     }
    // }, [escolha])

    const mostrarProdutos = useMemo(() => {
        return (
            produtosMostrados?.map((produto) => (
                <div key={produto.id}>
                    <CardProduto produto={produto} att={setAtt} />
                </div>
            ))
        )
    }, [produtosMostrados])

    return (
        <main className='w-full text-preto pb-20'>
            <Confirmacao />
            <Erro/>
            {/* <section className='flex items-start'>
                {
                    filtroOpen && (
                        <div className={`absolute ${animation ? 'animate-slide-left' : 'animate-slide-right'} z-50`}>
                            <FiltroGrande produtos={produtosMostradosQuery} close={setAnimation} setLabel1={setLabel} setCheck={setChecked} />
                        </div>
                    )
                }
            </section> */}
            <div className='md:flex md:flex-row mt-5 md:mt-10 md:w-[90%] md:m-auto'>
                {
                    produtosMostrados && (
                        <div className='hidden md:!flex w-[25%]'>
                            <FiltroGrande />
                        </div>
                    )
                }
                <section className='w-full md:w-[75%]'>
                    <div className='w-full flex items-center flex-col-reverse md:flex-row justify-between'>
                        <p className='font-poppins text-lg font-bold mt-5 pl-0 sm:pl-6 lg:pl-2 md:mt-0 md:text-2xl'>{query ? `Resultados para "${query}"` : isAdmin ? "Produtos Top Care" : "Produtos"}</p>
                        <div className='w-full md:w-[25%] flex gap-[10%] justify-center'>
                            {/* <div className='flex flex-row gap-2 items-center justify-center border w-[25%] p-1 rounded-lg border-cinza ml-2 font-poppins text-sm md:hidden' onClick={() => setFiltroOpen(true)}>
                                <p>Filtrar</p>
                                <FaFilter style={{ color: "#BDBDBD", }} />
                            </div> */}
                            <div className='w-[50%] md:w-full mr-2 md:mr-0'>
                                <Select options={['A a Z', 'Mais Populares', 'Menor Preço', 'Maior Preço', 'Mais bem Avaliados']} opcaoSelecionada={setEscolha} label={'Ordenar Por'} opcao={''} />
                            </div>
                        </div>
                    </div>
                    {
                        isAdmin && (
                            <div className='flex justify-center md:block'>
                                <div className='w-fit sm:w-[30%] md:w-[40%] mt-6 md:ml-5 lg:w-[30%] lg:ml-0'>
                                    <BotaoGrande title='Adicionar novo Produto' type='button' background='secundaria' size='h-9' onClick={() => router.push('/cadastroProduto')} />
                                </div>
                            </div>
                        )
                    }
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center mt-5 md:mt-10'>
                        {mostrarProdutos}
                    </div>
                </section>
            </div>
        </main>
    )
}