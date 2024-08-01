'use client'
import { IoExitOutline } from "react-icons/io5";
import { useUserID } from "@/context/UserIDContext";
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande";
import CartoesSalvos from "@/components/CartoesSalvos/CartoesSalvos";
import InputEstatico from "@/components/InputEstatico/InputEstatico";
import PerfilFoto from "@/components/PerfilFoto/PerfilFoto";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { buscarUsuario } from "@/server/usuario/action";
import { Usuario } from "@/types/usuarios";
import CarrosselProduto from '@/components/CarrosselProduto/Carrossel'
import { buscarTodos } from "@/server/produtos/action";
import CardProduto from "@/components/CardProduto/CardProduto";
import React, { useEffect, useState } from "react";
import CadastroEndereco from "@/components/Pop-up/CadastroEndereco/CadastroEndereco";
import CadastroPet from "@/components/Pop-up/CadastroPet/CadastroPet";
import InputMaskEstatico from "@/components/InputMaskEstatico/InputMaskEstatico";
import Confirmacao from "@/components/Pop-up/Confirmacao/Confirmacao";
import Carregando from "@/components/Carregando/Carregando";
import AgendamentoMarcado from "@/components/AgendamentoMarcado/agendamentoMarcado";
import HistoricoAgendamentos from "@/components/SecoesPerfil/historicoAgendamento";
import EnderecosSalvos from "@/components/SecoesPerfil/enderecosSalvos";
import PedidosEmAndamento from "@/components/SecoesPerfil/pedidosEmAndamento";
import MeusPets from "@/components/SecoesPerfil/meusPets";
import DoisBotoes from "@/components/Pop-up/DoisBotoes/DoisBotoes";
import { useRouter } from "next/navigation";

export default function Perfil() {
    const { getUserID, setUserId } = useUserID()

    const [usuarioLogado, setUsuarioLogado] = useState<Usuario | null>(null);

    const [showAllAddresses, setShowAllAddresses] = useState(false);

    const [atualizar, setAtualizar] = useState<number>(0)

    const [openEndereco, setOpenEndereco] = useState(false);
    const [openPet, setOpenPet] = useState(false);
    const [edicao, setEdicao] = useState(false);
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [sim, setSim] = useState<boolean>(false)

    const [nome, setNome] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [sexo, setSexo] = useState<string>()
    const [ddd, setDdd] = useState<string>('')
    const [numero, setNumero] = useState<string>('')
    const [dataNascimento, setDataNascimento] = useState<string>('')
    const [selecao, setSelecao] = useState<number>(0)
    const router = useRouter()

    const agendamentos = [
        <AgendamentoMarcado fotoPet={"./assets/cachorro-perfil.png"} nomePet="Nina" servico="Banho e Tosa" data="01/12/2023" hora="15:45h" profissional="Carla de Moraes" valor={80.0} />,
        <AgendamentoMarcado fotoPet={"./assets/cachorro-perfil.png"} nomePet="Nina" servico="Banho e Tosa" data="01/12/2023" hora="15:45h" profissional="Carla de Moraes" valor={80.0} />,
        <AgendamentoMarcado fotoPet={"./assets/cachorro-perfil.png"} nomePet="Nina" servico="Banho e Tosa" data="01/12/2023" hora="15:45h" profissional="Carla de Moraes" valor={80.0} />
    ]

    useEffect(()=>{
        if(sim){
            setUserId("")
            router.push("/")
        }
    },[sim])

    useEffect(() => {
        procurarUsuario()
    }, [openModal, openEndereco, openPet, atualizar]); 

    const procurarUsuario = async () =>{
        const fetchedID = getUserID();
        if (fetchedID) {
            const usuario: Usuario = await buscarUsuario(parseInt(fetchedID))!;
            if (usuario) {
                setUsuarioLogado(usuario);
                setNome(usuario.nome);
                setEmail(usuario.email);
                setSexo(usuario.sexo!.charAt(0) + usuario.sexo!.slice(1).toLowerCase());
                setDdd(usuario.celular.substring(1,3));
                setNumero(usuario.celular.substring(5));
                setDataNascimento(formatarData(usuario.dataNascimento));
            }
        }
    }

    const formatarData = (nascimento: string) =>{
        const data = nascimento.split("-")
        return data[2] +"/"+ data[1]+"/"+data[0]
    }

    if (!usuarioLogado) {
        return <Carregando />
    }

    const displayedAddresses = showAllAddresses ? usuarioLogado!.enderecos : usuarioLogado!.enderecos.slice(0, 3);

    const verificarEdicao = () => {
        if (nome === "" || email === "" || numero.length !== 10 || ddd.length !== 2 || dataNascimento.length !== 10) {
            return true;
        }
        return false;
    }

    const logout = () => {
        setOpenModal(true)
    }

    const carrosselProdutos = buscarTodos().map((produto, i) => (
        <CardProduto key={i} id={produto.id} nomeProduto={produto.nomeProduto} precoAntigoDoProduto={produto.precoAntigoDoProduto}
            precoNovo={produto.precoNovo} notaDeAvaliacao={produto.notaDeAvaliacao} imagemProduto={produto.imagemProduto} desconto={produto.desconto} />
    ))



    const componetesSelecao = [
        <HistoricoAgendamentos agendamentos={usuarioLogado.agendamentos} />,
        <PedidosEmAndamento usuario={usuarioLogado} />,
        <MeusPets usuario={usuarioLogado} setOpenPet={setOpenPet} />,
        <CarrosselProduto slides={carrosselProdutos} />,
        <EnderecosSalvos atualizarProps={setAtualizar} enderecos={displayedAddresses} setOpenEndereco={setOpenEndereco} setShowAllAdresses={setShowAllAddresses} />
    ]


    return (
        <main className="bg-branco text-preto flex flex-col gap-6">
            <Confirmacao />
            <section className="">
                <TituloLinha voltar={false} titulo="Minha conta" />
                <div className="flex justify-end w-[90%]">
                    <div className="">
                        <button className='flex md:text-base text-sm transition ease-in-out delay-150 duration-200 text-preto font-poppins bg-secundaria p-1 rounded-lg md:w-28 w-20 h-8 hover:bg-[#9EBF40] justify-around' onClick={logout}> Logout <IoExitOutline className="mt-1" /></button>   
                    </div>
                </div>
                <div className="lg:ml-32 md:ml-20 ml-4">
                    <PerfilFoto src="./assets/cachorro-perfil.png/" nome={usuarioLogado.nome} />
                </div>
            </section>

            <section className="rounded-xl bg-terciaria lg:mx-32 mt-2 md:mx-20 mx-5">
                <div className="w-[90%] py-8 m-auto flex lg:flex-row flex-col justify-between">
                    <div className="w-full lg:w-[35%]">
                        <div className="w-full flex flex-col gap-6">

                            <InputEstatico
                                titulo="Nome Completo"
                                info={nome}
                                edition={edicao}
                                error={nome === ''}
                                onChange={(e) => setNome(e.target.value)}
                                message={"O nome não pode ser vazio"}
                            />

                            <InputEstatico
                                titulo="Senha"
                                info={"********"}
                                type={'password'}
                                edition={false} />

                            <InputEstatico
                                titulo="Sexo"
                                info={sexo}
                                edition={edicao} />
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:w-[60%] lg:pt-0 pt-6">
                        <div className="flex flex-col sm:flex-row justify-between gap-4">
                            <div className="w-full sm:w-1/2 lg:w-3/5 flex flex-col gap-6">
                                <InputEstatico
                                    titulo="Email"
                                    info={email}
                                    edition={edicao}
                                    error={email === ''}
                                    onChange={(e) => setEmail(e.target.value)}
                                    message={"O email precisa ser válido"} />

                                <InputEstatico titulo="CPF" info={usuarioLogado.cpf} edition={false} />
                            </div>
                            <div className="w-full sm:w-56 flex flex-col gap-6 sm:pt-0 pt-6">
                                <div className="flex flex-row justify-between">
                                    <div className="w-14 lg:w-1/4">
                                        <InputMaskEstatico
                                            titulo='DDD'
                                            info={ddd}
                                            edition={edicao} 
                                            mask={'__'}
                                            replacement={{ _: /\d/ }}
                                            error={ddd.length !== 2}
                                            onMasks={(e) => setDdd(e.target.value)}
                                            message={'O ddd precisa ser válido'} />
                                    </div>
                                    <div className="w-3/4 lg:w-[70%]">
                                        <InputMaskEstatico
                                            titulo="Celular"
                                            info={numero}
                                            edition={edicao}
                                            mask={'_____-____'}
                                            replacement={{ _: /\d/ }}
                                            error={numero.length !== 10}
                                            onMasks={(e) => setNumero(e.target.value)}
                                            message={"O telefone precisa ser válido"} />
                                    </div>
                                </div>
                                <InputMaskEstatico
                                    titulo="Data de Nascimento"
                                    info={dataNascimento}
                                    edition={edicao}
                                    mask={'dd/mm/yyyy'}
                                    replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                                    error={dataNascimento.length !== 10}
                                    onMasks={(e) => setDataNascimento(e.target.value)}
                                    message={"A data de nascimento precisa ser válida"} />
                            </div>
                        </div>
                        <div className="md:text-base text-sm mt-6 font-poppins">
                            Cartões Salvos
                        </div>
                    </div>
                </div>
            </section>
            <div className="md:mt-4 mt-2 lg:mx-32 md:mx-20 mx-5 flex justify-end">
                <div className="w-full md:w-[20%]">
                    <BotaoGrande
                        title={`${edicao ? 'Salvar Alteração' : 'Editar'}`}
                        background="secundaria"
                        type="button"
                        onClick={() => setEdicao(edicao ? verificarEdicao() : true)} />
                </div>
            </div>

            <section className="w-[90%] flex flex-col sm:flex-row justify-center text-md font-poppins gap-4 self-center mt-12">
                <button onClick={() => setSelecao(0)} className={`${selecao == 0 ? `border-roxo-select text-roxo-select scale-105` : `border-cinza text-cinza-escuro`} duration-100 hover:border-roxo-select border-[1px] hover:text-roxo-select p-2 rounded-lg w-full sm:text-md text-sm sm:w-1/5`}>Agendamentos</button>
                <button onClick={() => setSelecao(1)} className={`${selecao == 1 ? `border-roxo-select text-roxo-select scale-105` : `border-cinza text-cinza-escuro`} duration-100 hover:border-roxo-select border-[1px] hover:text-roxo-select p-2 rounded-lg w-full sm:text-md text-sm sm:w-1/5`}>Meus pedidos</button>
                <button onClick={() => setSelecao(2)} className={`${selecao == 2 ? `border-roxo-select text-roxo-select scale-105` : `border-cinza text-cinza-escuro`} duration-100 hover:border-roxo-select border-[1px] hover:text-roxo-select p-2 rounded-lg w-full sm:text-md text-sm sm:w-1/5`}>Meus pets</button>
                <button onClick={() => setSelecao(3)} className={`${selecao == 3 ? `border-roxo-select text-roxo-select scale-105` : `border-cinza text-cinza-escuro`} duration-100 hover:border-roxo-select border-[1px] hover:text-roxo-select p-2 rounded-lg w-full sm:text-md text-sm sm:w-1/5`}>Recomendados</button>
                <button onClick={() => setSelecao(4)} className={`${selecao == 4 ? `border-roxo-select text-roxo-select scale-105` : `border-cinza text-cinza-escuro`} duration-100 hover:border-roxo-select border-[1px] hover:text-roxo-select p-2 rounded-lg w-full sm:text-md text-sm sm:w-1/5`}>Endereços</button>
            </section>

            <section className="flex flex-col pb-20">
                <TituloLinha voltar={false} titulo={selecao == 0 ? "Agendamentos" : selecao == 1 ? "Meus pedidos" : selecao == 2 ? "Meus pets" : selecao == 3 ? "Recomendados" : "Endereços"} />
                <div>
                    {componetesSelecao[selecao]}
                </div>
            </section>

            {openEndereco && (
                <div className='overflow-hidden absolute'>
                    <div className='fixed top-0 left-0 w-full h-full z-50 bg-fundo-modal' onClick={() => setOpenEndereco(false)}></div>
                    <div className='fixed w-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                        <CadastroEndereco setOpen={setOpenEndereco} />
                    </div>
                </div>
            )}

            {openPet && (
                <div className='overflow-hidden absolute'>
                    <div className='fixed top-0 left-0 w-full h-full z-50 bg-fundo-modal' onClick={() => setOpenPet(false)}></div>
                    <div className='fixed w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                        <CadastroPet setOpen={setOpenPet} />
                    </div>
                </div>
            )}
            {openModal && (
                <div className="w-full absolute">
                    <div className='fixed top-0 left-0 w-full h-full bg-fundo-modal' onClick={() => setOpenModal(false)}></div>
                    <div className="fixed lg:w-[25%] w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                        <DoisBotoes openParms={setOpenModal} texto="Você deseja mesmo sair?" sim={setSim} />
                    </div>
                </div>
            )}
        </main>
    );
}
