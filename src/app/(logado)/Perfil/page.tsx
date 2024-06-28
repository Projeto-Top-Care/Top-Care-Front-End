'use client'
import { IoCloseOutline, IoExitOutline } from "react-icons/io5";
import { useUserID } from "@/context/UserIDContext";
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande";
import CardPetPequeno from "@/components/CardPetPequeno/CardPetPequeno";
import CartoesSalvos from "@/components/CartoesSalvos/CartoesSalvos";
import Endereco from "@/components/Endereço/Endereco";
import InputEstatico from "@/components/InputEstatico/InputEstatico";
import PedidoAndamentoPerfil from "@/components/PedidoAndamentoPerfil/PedidoAndamentoPerfil";
import PerfilFoto from "@/components/PerfilFoto/PerfilFoto";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { buscarUsuario } from "@/server/usuario/action";
import { QntProduto, Usuario } from "@/types/usuarios";
import CarrosselProduto from '@/components/CarrosselProduto/Carrossel'
import { buscarProduto, buscarTodos } from "@/server/produtos/action";
import CardProduto from "@/components/CardProduto/CardProduto";
import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import CadastroEndereco from "@/components/Pop-up/CadastroEndereco/CadastroEndereco";
import { Produto } from "@/types/produto";
import CadastroPet from "@/components/Pop-up/CadastroPet/CadastroPet";
import InputMaskEstatico from "@/components/InputMaskEstatico/InputMaskEstatico";
import Confirmacao from "@/components/Pop-up/Confirmacao/Confirmacao";
import Carregando from "@/components/Carregando/Carregando";

export default function Perfil() {
    const { getUserID } = useUserID()

    const [usuarioLogado, setUsuarioLogado] = useState<Usuario | null>(null);
    const [showAllAddresses, setShowAllAddresses] = useState(false);
    const [openEndereco, setOpenEndereco] = useState(false);
    const [openPet, setOpenPet] = useState(false);
    const [edicao, setEdicao] = useState(false);
    const [nome, setNome] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [sexo, setSexo] = useState<'Feminino' | 'Masculino' | "Prefiro não Informar">('Prefiro não Informar')
    const [ddd, setDdd] = useState<string>('')
    const [numero, setNumero] = useState<string>('')
    const [dataNascimento, setDataNascimento] = useState<string>('')

    useEffect(() => {
        const fetchedID = getUserID();
        if (fetchedID) {
            const usuario: Usuario = buscarUsuario(parseInt(fetchedID))!;
            if (usuario) {
                setUsuarioLogado(usuario);
                setNome(usuario.nomeCompleto);
                setEmail(usuario.email);
                setSexo(usuario.sexo);
                setDdd(usuario.celular.substring(5, 7));
                setNumero(usuario.celular.substring(8));
                setDataNascimento(usuario.dataNascimento);
            }
        }
    }, []);

    if (!usuarioLogado) {
        return <Carregando />
    }

    const produtos: QntProduto = buscarProduto(usuarioLogado.id)!
    const produto: Produto = buscarProduto(produtos.id!)!

    const toggleShowAllAddresses = () => {
        setShowAllAddresses(!showAllAddresses);
    };

    const displayedAddresses = showAllAddresses ? usuarioLogado.enderecos : usuarioLogado.enderecos.slice(0, 3);

    const verificarEdicao = () => {
        if (nome === "" || email === "" || numero.length !== 10 || ddd.length !== 2 || dataNascimento.length !== 10) {
            return true;
        }
        return false;
    }

    const logout = () => {
        localStorage.setItem('idUser', '')
    }

    const carrosselProdutos = buscarTodos().map((produto, i) => (
        <CardProduto key={i} id={produto.id} nomeProduto={produto.nomeProduto} precoAntigoDoProduto={produto.precoAntigoDoProduto}
            precoNovo={produto.precoNovo} notaDeAvaliacao={produto.notaDeAvaliacao} imagemProduto={produto.imagemProduto} desconto={produto.desconto} />
    ))

    return (
        <main className="bg-branco text-preto flex flex-col gap-8">
            <Confirmacao />
            <section className="mt-2">
                <TituloLinha voltar={false} titulo="Minha conta" />
                <div className="flex justify-end w-[90%]">
                    <div className="">
                        <a href="/">
                            <button className='flex md:text-base text-sm transition ease-in-out delay-150 duration-200 text-preto font-poppins bg-secundaria p-1 rounded-lg md:w-28 w-20 h-8 hover:bg-[#9EBF40] justify-around' onClick={logout}> Logout <IoExitOutline className="mt-1" /></button>
                        </a>
                    </div>
                </div>
                <div className="lg:ml-32 md:ml-20 ml-4">
                    <PerfilFoto src="./assets/cachorro-perfil.png/" nome={usuarioLogado.nomeCompleto} />
                </div>
            </section>
            <section className="rounded-xl bg-terciaria lg:mx-32 mt-12 md:mx-20 mx-5">
                <div className="w-[90%] py-8 m-auto flex justify-between">
                    <div className="w-[35%]">
                        <div className="w-80 flex flex-col gap-6">
                            <InputEstatico 
                            titulo="Nome Completo" 
                            info={nome} 
                            edition={edicao}
                            error={nome === ''}
                            onChange={(e)=>setNome(e.target.value)}
                            message={"O nome não pode ser vazio"}
                            />

                            <InputEstatico 
                            titulo="Senha" 
                            info={usuarioLogado.senha} 
                            type={'password'} 
                            edition={false}/>

                            <InputEstatico 
                            titulo="Sexo" 
                            info={sexo} 
                            edition={edicao}/>
                        </div>
                    </div>
                    <div className="flex flex-col w-[60%]">
                        <div className="flex flex-row justify-between">
                            <div className="w-80 flex flex-col gap-6">
                                <InputEstatico 
                                titulo="Email" 
                                info={email} 
                                edition={edicao}
                                error={email === ''}
                                onChange={(e)=>setEmail(e.target.value)}
                                message={"O email precisa ser válido"}/>

                                <InputEstatico titulo="CPF" info={usuarioLogado.cpf} edition={false} />
                            </div>
                            <div className="w-56 flex flex-col gap-6">
                                <div className="flex flex-row justify-between">
                                    <div className="w-14">
                                        <InputMaskEstatico 
                                        titulo='DDD' 
                                        info={ddd} 
                                        edition={edicao} mask={'__'} 
                                        replacement={{ _: /\d/ }} 
                                        error={ddd.length !== 2} 
                                        onMasks={(e)=>setDdd(e.target.value)}
                                        message={'O ddd precisa ser válido'}/>
                                    </div>
                                    <div className="w-40">
                                        <InputMaskEstatico 
                                        titulo="Celular" 
                                        info={numero} 
                                        edition={edicao} 
                                        mask={'_____-____'} 
                                        replacement={{ _: /\d/ }} 
                                        error={numero.length !== 10} 
                                        onMasks={(e)=>setNumero(e.target.value)}
                                        message={"O telefone precisa ser válido"}/>
                                    </div>
                                </div>
                                <InputMaskEstatico 
                                titulo="Data de Nascimento" 
                                info={dataNascimento} 
                                edition={edicao} 
                                mask={'dd/mm/yyyy'} 
                                replacement={{ d: /\d/, m: /\d/, y: /\d/ }} 
                                error={dataNascimento.length !== 10} 
                                onMasks={(e)=>setDataNascimento(e.target.value)}
                                message={"A data de nascimento precisa ser válida"}/>
                            </div>
                        </div>
                        <div className="md:text-base text-sm mt-6 font-poppins">
                            Cartões Salvos
                            <CartoesSalvos 
                            tipoCartao="crédito" 
                            nome={usuarioLogado.nomeCompleto} 
                            dataValidade="12/28" 
                            finalCartao={9875} />
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-6 lg:mx-32 md:mx-20 mx-5 flex justify-end">
                <div className="w-[20%]">
                    <BotaoGrande 
                    title={`${edicao ? 'Salvar Alteração' : 'Editar'}`} 
                    background="bg-secundaria" 
                    type="button" 
                    onClick={() => setEdicao(edicao ? verificarEdicao() : true)} />
                </div>
            </div>
            <section className="">
                <TituloLinha voltar={false} titulo="Endereços" />
            </section>
            <section className="grid place-content-center">
                <div className="grid gap-8 sm:gap-20 mb-8 lg:grid-cols-2 xl:grid-cols-3">
                    {
                        displayedAddresses.map((endereco, i) => (
                            <div key={i}>
                                <Endereco 
                                titulo={endereco.nome} 
                                cep={endereco.cep} 
                                estado={endereco.estado} 
                                bairro={endereco.bairro} 
                                rua={endereco.rua} 
                                numero={endereco.numero} 
                                complemento={endereco.complemento} />
                            </div>
                        ))
                    }
                </div>
            </section>
            <div className="flex sm:flex-row flex-col w-[90%] gap-8 p-0 justify-center sm:pl-20">
                <div className="md:w-44 w-full" onClick={() => setOpenEndereco(true)}>
                    <BotaoGrande title="+ Endereço" background='bg-primaria' type={'button'} />
                </div>
                <div className="">
                    <button className='flex lg:text-base text-sm transition ease-in-out delay-150 duration-200 text-preto font-poppins bg-secundaria  p-1 rounded-lg md:w-44 w-full h-8 hover:bg-[#9EBF40] justify-around' onClick={toggleShowAllAddresses}>
                        {showAllAddresses ? "Mostrar menos" : "Mostrar todos "}
                        {showAllAddresses ? <FaAngleUp className="mt-1" /> : <FaAngleDown className="mt-1" />}
                    </button>
                </div>
            </div>
            <section className="mt-20">
                <TituloLinha voltar={false} titulo="Pedido em andamento" />
            </section>
            <section className="">
                <div className="grid gap-10 mb-8 lg:grid-cols-2 xl:grid-cols-3 w-[90%] m-auto">
                    {
                        usuarioLogado.pedidos.map((pedido, i) => (
                            <div key={i}>
                                <PedidoAndamentoPerfil {...pedido} />
                            </div>
                        ))}
                </div>
            </section>
            <section className="">
                <TituloLinha voltar={false} titulo="Ultimas compras" />
            </section>
            <section className="">
                <CarrosselProduto slides={carrosselProdutos} />
            </section>
            <section className="">
                <TituloLinha voltar={false} titulo="Meus pets" />
            </section>
            <section className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-12 justify-items-center w-[90%] m-auto">
                {
                    usuarioLogado.pets.map((pets, i) => (
                        <div key={i}>
                            <CardPetPequeno fotoPet={"./assets/cachorro-perfil.png"} nomePet={pets.nome} racaPet={pets.raca} tipoAnimal={pets.especie} porte={pets.porte} isSelected={true} />
                        </div>
                    ))}
            </section>
            <section className="font-poppins sm:ml-18 mb-24 w-[90%] m-auto">
                <p className="md:text-xl text-lg font-medium m-auto">Pet novo ?</p>
                <p className="md:text-sm text-xs my-3 m-auto">Cadastre aqui pra ele não perder nenhuma oportunidade!</p>
                <div className="sm:w-[174px]" onClick={() => setOpenPet(true)}>
                    <BotaoGrande title="Cadastrar Pet" background={"bg-primaria"} type={"button"} />
                </div>
            </section>

            {openEndereco && (
                <div className='overflow-hidden'>
                    <div className='fixed top-0 left-0 w-full h-full z-50 bg-fundo-modal' onClick={() => setOpenEndereco(false)}></div>
                    <div className='fixed w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                        <CadastroEndereco setOpen={setOpenEndereco} />
                    </div>
                </div>
            )}

            {openPet && (
                <div className='overflow-hidden'>
                    <div className='fixed top-0 left-0 w-full h-full z-50 bg-fundo-modal' onClick={() => setOpenPet(false)}></div>
                    <div className='fixed w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                        <CadastroPet setOpen={setOpenPet} />
                    </div>
                </div>
            )}
        </main>
    );
}
