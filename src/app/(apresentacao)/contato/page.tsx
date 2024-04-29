'use client'
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande";
import InputData from "@/components/InputData/InputData";
import InputText from "@/components/InputText/InputText";
import Erro from "@/components/Pop-up/Erro/Erro";
import UmBotao from "@/components/Pop-up/UmBotao/UmBotao";
import Select from "@/components/Select/Select";
import TextArea from "@/components/TextArea/TextArea";
import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { createInvoice } from "@/server/action";

export default function Contato() {

    const [open, setOpen] = useState<boolean>(false)
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [modalError, setModalError] = useState<boolean>(false)

    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [atendimento, setAtendimento] = useState<string>("");
    const [filial, setFilial] = useState<string>("");
    const [servico, setServico] = useState<string>("");
    const [data, setData] = useState<string>("");
    const [horario, setHorario] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");

    const formData = new FormData();

    const updateFormData = () => {
        formData.append('nome', nome)
        formData.append('email', email)
        formData.append('atendimento', atendimento)
        formData.append('filial', filial)
        formData.append('servico', servico)
        formData.append('data', data)
        formData.append('horario', horario)
        formData.append('descricao', descricao)
    }

    useEffect(()=>{
        updateFormData();
    })

    useEffect(()=>{
        if (openModal) {
            document.body.style.overflowY = 'hidden';
        }else{
            document.body.style.overflowY = 'auto';
        }    
    },[openModal])

    
    const showModalError = () => {
        if (modalError) {
            return (
                <div className="w-full z-50">
                    <Erro />
                </div>
            )
        }
    }

    const copyContent = (content: string) => {
        navigator.clipboard.writeText(content);
        setOpen(true)
        setTimeout(() => {
            setOpen(false)
        }, 4000)
    }

    const verificaForms = () => {
        if (nome != '' && email != '' && atendimento != '' && descricao != '') {
            if (atendimento == 'Agendamento') {
                if (filial != '' && servico != '' && data != '' && horario != '') {
                    setOpenModal(true)
                } else {
                    setModalError(true)
                }
            } else {
                setOpenModal(true)
            }
        } else {
            setModalError(true)
        }
        setTimeout(() => {
            setModalError(false)
        }, 4000)
    }

    const showCopied = () => {
        if (open) {
            return (
                <div className="z-50">
                    <div className={`fixed top-3 left-1/2 -translate-x-1/2 lg:w-[40%] w-[50%] animate-slide-down`}>
                        <div className="flex items-center justify-center lg:h-10 h-8 bg-terciaria rounded font-poppins">
                            <p className="text-xs lg:text-base">Copiado!</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <main className={`flex flex-col w-full mb-32 overflow-hidden ${openModal ? 'overflow-y-hidden' : 'overflow-y-auto'}`}>
            {showCopied()}
            {showModalError()}
            <section className="">
                <section className="flex flex-col items-center justify-center gap-4 mt-10 mx-12">
                    <h1 className="font-averia md:text-3xl text-2xl font-bold text-preto text-center">Precisa de ajuda?</h1>
                    <p className="font-poppins md:text-lg text-[10px] text-preto text-center">Escolha uma das opções para resolver seu problema!</p>
                </section>
                <section className="flex flex-col items-center justify-center mx-12">
                    <div className="mt-6 flex flex-col justify-start border-solid rounded-lg md:w-[55%] w-full gap-5">
                        <h1 className="font-averia md:text-2xl text-lg font-bold text-preto mt-12">Preencha o formulário</h1>
                    </div>
                    <div className="mt-6 flex flex-col justify-start border-solid border rounded-lg border-cinza-escuro md:w-[55%] w-full gap-5">
                        <form action={() => createInvoice(formData)} onSubmit={()=>verificaForms()}>
                            <div className="md:p-10 p-4">
                                <div className="text-xs">
                                    <InputText placeholder="Nome completo*" id="nome" onChange={(e) => setNome(e.target.value)} />
                                </div>
                                <div className="flex flex-col justify-between lg:mt-[5%] mt-[8%] lg:flex-row">
                                    <div className="w-full lg:w-[48%]">
                                        <div className="text-xs">
                                            <InputText placeholder="Email*" type={'email'} id='email' onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="w-full mt-[8%] lg:w-[48%] lg:mt-0">
                                        <div className="text-xs">
                                            <Select label="Tipo de atendimento*" options={['Serviço', 'Dúvidas', 'Sugestões', 'Reclamações', 'Compras', 'Agendamento']} opcaoSelecionada={setAtendimento} />
                                        </div>
                                    </div>
                                </div>
                                {atendimento == "Agendamento" && (
                                    <div>
                                        <div className="flex flex-col justify-between lg:mt-[5%] mt-[8%] lg:flex-row">
                                            <div className="w-full lg:w-[48%]">
                                                <Select label="Filial*" options={['Top Care Balneário Camboriú - SC', 'Top Care Curitiba - PR', 'Top Care Gramado - RS', "Top Care Joinville - SC", "Top Care Jaraguá do Sul - SC", "Top Care Corupá - SC"]} opcaoSelecionada={setFilial} />
                                            </div>
                                            <div className="w-full mt-[8%] lg:w-[48%] lg:mt-0">
                                                <Select label="Serviço*" options={['Consulta', 'Passeio', 'Vacinação', 'Hospedagem', 'Adestramento', 'Exames', 'Banho', 'Tosa', 'Banho e Tosa']} opcaoSelecionada={setServico} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-between lg:mt-[5%] mt-[8%] lg:flex-row">
                                            <div className="w-full lg:w-[48%]">
                                                <InputData dataSelecionada={setData} />
                                            </div>
                                            <div className="w-full mt-[8%] lg:w-[48%] lg:mt-0">
                                                <Select label="Horario*" options={['9:30', '10:00', '11:30', '13:30', '15:30', '16:30']} opcaoSelecionada={setHorario} />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="h-32 lg:mt-[5%] mt-[8%]">
                                    <TextArea placeholder="Descrição*" id="descricao" onChange={(e) => setDescricao(e.target.value)} />
                                </div>
                                <div className="mt-[5%]">
                                    <BotaoGrande title="Enviar" type='submit' background="bg-secundaria" />
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <section className="w-full">
                    <div className="flex flex-row justify-center items-center mt-16 font-regular w-full">
                        <div className="border-b md:w-[23%] w-[25%] border-cinza"></div>
                        <h1 className="font-poppins md:text-xl text-lg text-cinza-escuro mx-4">OU</h1>
                        <div className="border-b md:w-[23%] w-[25%] border-cinza"></div>
                    </div>
                </section>
                <section className="flex flex-col items-center justify-center mt-6 mx-12">
                    <div className="md:w-[55%] w-full flex justify-start">
                        <h1 className="font-averia md:text-2xl text-lg font-bold text-preto mt-10">Entre em contato com nossa central</h1>
                    </div>
                    <section className="border-solid border rounded-lg border-cinza-escuro md:w-[55%] w-full mt-3">
                        <section className="md:p-5 p-3">
                            <div className="flex flex-row items-center justify-between ">
                                <p className="font-poppins md:text-lg text-xs font-medium text-preto mr-[10%]">Telefone</p>
                                <div className="flex flex-row gap-4 mt-1">
                                    <p className="font-poppins md:text-sm text-[10px] text-cinza-escuro break-all">(47) 00000-0000</p>
                                    <IoCopyOutline onClick={() => copyContent("(47) 00000-0000")} className='cursor-pointer' />
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between mt-4">
                                <p className="font-poppins md:text-lg text-xs font-medium text-preto mr-[10%]">Email</p>
                                <div className="flex flex-row gap-4 mt-1">
                                    <p className="font-poppins md:text-sm text-[10px] text-cinza-escuro break-all">topcare@gmail.com</p>
                                    <IoCopyOutline onClick={() => copyContent("topcare@gmail.com")} className='cursor-pointer' />
                                </div>
                            </div>
                        </section>
                    </section>
                </section>     
            </section>
            {openModal && (
                <div className="w-full">
                    <div className='fixed top-0 left-0 w-full h-full z-50  bg-fundo-modal' onClick={() => setOpenModal(false)}></div>
                    <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 lg:w-[25%] w-[60%]`}>
                        <UmBotao texto="Formulário Enviado com sucesso!" openParms={setOpenModal}/>
                    </div>
                </div>
            )}
        </main>
    )
}