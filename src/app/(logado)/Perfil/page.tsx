'use client'
import { IoExitOutline } from "react-icons/io5";
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande";
import CardPetPequeno from "@/components/CardPetPequeno/CardPetPequeno";
import CartoesSalvos from "@/components/CartoesSalvos/CartoesSalvos";
import Endereco from "@/components/Endereço/Endereco";
import InputEstatico from "@/components/InputEstatico/InputEstatico";
import PedidoAndamentoPerfil from "@/components/PedidoAndamentoPerfil/PedidoAndamentoPerfil";
import PerfilFoto from "@/components/PerfilFoto/PerfilFoto";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { buscarUsuario } from "@/server/usuario/action";
import { Usuario } from "@/types/usuarios";
import CarrosselProduto from '@/components/CarrosselProduto/Carrossel'
import { buscarTodos } from "@/server/produtos/action";
import CardProduto from "@/components/CardProduto/CardProduto";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";



export default function Perfil() {
    const id = localStorage.getItem('idUser')
    const usuarioLogado: Usuario = buscarUsuario(1)!
    const [showPassword, setShowPassword] = useState(false);
    const senha = usuarioLogado.senha
    const [showAllAddresses, setShowAllAddresses] = useState(false);

    const toggleShowAllAddresses = () => {
        setShowAllAddresses(!showAllAddresses);
    };

    const displayedAddresses = showAllAddresses ? usuarioLogado.enderecos : usuarioLogado.enderecos.slice(0, 3);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const carrosselProdutos = buscarTodos().map((produto, i) => (<CardProduto key={i} id={produto.id} nomeProduto={produto.nomeProduto} precoAntigoDoProduto={produto.precoAntigoDoProduto}
        precoNovo={produto.precoNovo} notaDeAvaliacao={produto.notaDeAvaliacao} imagemProduto={produto.imagemProduto} desconto={produto.desconto} />))
    return (
        <main className="bg-branco text-preto">
            <section className="mt-6">
                <TituloLinha titulo="Minha conta" />
                <div className="flex justify-end w-[90%]">
                    <div className="mt-5">
                        <a href="/paginaInicial">
                            <button className='flex md:text-base text-sm transition ease-in-out delay-150 duration-200 text-preto font-poppins bg-secundaria p-1 rounded-lg md:w-28 w-20 h-8 hover:bg-[#9EBF40] justify-around'> Logout <IoExitOutline className="mt-1" /></button>
                        </a>
                    </div>
                </div>
                <div className="mt-10 md:ml-44 ml-6">
                    <PerfilFoto src="./assets/cachorro-perfil.png/" nome={usuarioLogado.nomeCompleto} />
                </div>
            </section>
            <section className="rounded-xl bg-terciaria lg:mx-32 mt-12 md:mx-20 mx-5">
                <div className="xl:flex md:justify-around xl:px-0 px-4 pb-7">
                    <div className="md:min-w-80 sm-w-80">
                        <InputEstatico titulo="Nome completo" info={usuarioLogado.nomeCompleto} />
                        <div className="font-poppins text-preto pt-6">
                            <p className="md:text-base text-sm">Senha</p>
                            <div className="flex items-center bg-branco p-3 rounded">
                                <input type={showPassword ? "text" : "password"} value={senha} className="bg-branco w-80 md:text-sm text-xs text-cinza-escuro" readOnly></input>
                                {showPassword ? (
                                    <AiOutlineEyeInvisible onClick={togglePasswordVisibility} className="cursor-pointer" />
                                ) : (
                                    <AiOutlineEye onClick={togglePasswordVisibility} className="cursor-pointer" />
                                )}
                            </div>
                            <a href="/recuperacaoSenhaLogado" className="flex justify-end text-xs underline decoration-solid mb-[-16px]">Trocar senha</a>
                        </div>
                        <InputEstatico titulo="Sexo" info={usuarioLogado.sexo} />
                    </div>
                    <div className="">
                        <div className="">
                            <div className="md:flex">
                                <div className="md:w-80"><InputEstatico titulo="Email" info={usuarioLogado.email} /></div>
                                <div className="flex">
                                    <div className="mr-4 md:ml-7 lg:ml-12"><InputEstatico titulo="DDD +" info={usuarioLogado.ddd} /></div>
                                    <div className="lg:w-48 md:w-36 w-full"><InputEstatico titulo="Celular" info={usuarioLogado.celular} /></div>
                                </div>
                            </div>
                            <div className="md:flex">
                                <div className="md:w-80"><InputEstatico titulo="CPF" info={usuarioLogado.cpf} /></div>
                                <div className="md:ml-7 md:w-56 lg:ml-12 lg:w-64"><InputEstatico titulo="Data de Nascimento" info={usuarioLogado.dataNascimento} /></div>
                            </div>
                        </div>
                        <div className="md:text-base text-sm mt-6 font-poppins">Cartões Salvos<CartoesSalvos tipoCartao="crédito" nome={usuarioLogado.nomeCompleto} dataValidade="12/28" finalCartao={9875} /></div>
                    </div>
                </div>
            </section>
            <section className="mt-8">
                <TituloLinha titulo="Endereços" />
            </section>
            <section className="grid place-content-center">
                <div className="grid gap-11 mt-8 mb-12 lg:grid-cols-2 xl:grid-cols-3">
                    {
                        displayedAddresses.map((endereco, i) => (
                            <div key={i}>
                                <Endereco titulo={endereco.titulo} cep={endereco.cep} estado={endereco.estado} bairro={endereco.bairro} rua={endereco.rua} numero={endereco.numero} complemento={endereco.complemento} />
                            </div>
                        ))
                    }

                </div>
            </section>
            <div className="grid grid-cols-2 w-full justify-items-center">
                <div className="md:w-44 w-32 ">
                    <BotaoGrande title="+ endereço " background={"bg-secundaria"} type={"button"} />
                </div>
                <div className="">
                    <button className='flex lg:text-base text-sm transition ease-in-out delay-150 duration-200 text-preto font-poppins bg-secundaria  p-1 rounded-lg md:w-44 w-32 h-8 hover:bg-[#9EBF40] justify-around' onClick={toggleShowAllAddresses}>
                        {showAllAddresses ? "Mostrar menos"  : "Mostrar todos "}
                        {showAllAddresses ? <FaAngleUp className="mt-1"/> : <FaAngleDown className="mt-1"/>}
                    </button>
                </div>
            </div>
            <section className="mt-8">
                <TituloLinha titulo="Pedido em andamento" />
            </section>
            <section className="md:mx-20 mt-8 flex justify-center">
                <div className="grid lg:grid-cols-2 gap-x-20 gap-y-4">
                    <PedidoAndamentoPerfil src="./assets/ProdutoAndamentoPerfil.png/" titulo="Kit banho diora cachorro ..." link="http://localhost:3000/Perfil" valor="49,50" />
                    <PedidoAndamentoPerfil src="./assets/ProdutoAndamentoPerfil.png/" titulo="Kit banho diora cachorro ..." link="http://localhost:3000/Perfil" valor="49,50" />
                    <PedidoAndamentoPerfil src="./assets/ProdutoAndamentoPerfil.png/" titulo="Kit banho diora cachorro ..." link="http://localhost:3000/Perfil" valor="49,50" />
                </div>
            </section>
            <section className="mt-8">
                <TituloLinha titulo="Ultimas compras" />
            </section>
            <section className="mt-8 mb-24">
                <CarrosselProduto slides={carrosselProdutos} />
            </section>
            {/* <section>
                <TituloLinha titulo="Meus pets" />
            </section>
            <section className="grid grid-cols-4 mx-20 mt-8">
                <CardPetPequeno fotoPet={"./assets/cachorro-perfil.png"} nomePet={"Nino"} racaPet={"vira-lata"} idadePet={6} tipoAnimal={"cachorro"} />
                <CardPetPequeno fotoPet={"./assets/cachorro-perfil.png"} nomePet={"Nino"} racaPet={"vira-lata"} idadePet={6} tipoAnimal={"cachorro"} />
                <CardPetPequeno fotoPet={"./assets/cachorro-perfil.png"} nomePet={"Nino"} racaPet={"vira-lata"} idadePet={6} tipoAnimal={"cachorro"} />
                <CardPetPequeno fotoPet={"./assets/cachorro-perfil.png"} nomePet={"Nino"} racaPet={"vira-lata"} idadePet={6} tipoAnimal={"cachorro"} />
            </section>
            <section className="font-poppins mt-16 ml-20 mb-24">
                <p className="text-xl font-medium">Pet novo ?</p>
                <p className="text-sm my-3">Cadastre aqui pra ele não perder nenhuma oportunidade!</p>
                <div className="w-[174px]">
                <BotaoGrande title="Cadastrar Pet" background={"bg-primaria"} type={"button"} />
                </div>
            </section> */}
        </main>
    )
}


