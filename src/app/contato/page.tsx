'use client'
import InputData from "@/components/InputData/InputData";
import InputText from "@/components/InputText/InputText";
import Select from "@/components/Select/Select";
import TextArea from "@/components/TextArea/TextArea";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

export default function Contato() {

    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [atendimento, setAtendimento] = useState<string>("");
    const [filial, setFilial] = useState<string>("");
    const [servico, setServico] = useState<string>("");
    const [data, setData] = useState<string>("");
    const [horario, setHorario] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");

    return (
        <main className="flex flex-col w-full">
            <section className="mt-16">
                <section className="flex flex-col items-center justify-center gap-4 mt-10 mx-12">
                    <h1 className="font-averia md:text-3xl text-2xl font-bold text-preto text-center">Precisa de ajuda?</h1>
                    <p className="font-poppins md:text-lg text-[10px] text-preto text-center">Escolha uma das opções para resolver seu problema!</p>
                </section>
                <section className="flex flex-col items-center justify-center mt-16 mx-12">
                    <div className="md:w-[55%] w-full flex justify-start">
                        <h1 className="font-averia md:text-2xl text-lg font-bold text-preto mt-10">Entre em contato com nossa central</h1>
                    </div>
                    <section className="border-solid border rounded-lg border-cinza-escuro md:w-[55%] w-full mt-3">
                        <section className="md:p-5 p-3">
                            <div className="flex flex-row justify-between ">
                                <p className="font-poppins md:text-lg text-sm font-medium text-preto mr-[10%]">Telefone</p>
                                <div className="flex flex-row gap-4 mt-1">
                                    <p className="font-poppins md:text-sm text-[10px] text-cinza-escuro break-all">(47) 00000-0000</p>
                                    <IoCopyOutline />
                                </div>
                            </div>
                            <div className="flex flex-row justify-between mt-4">
                                <p className="font-poppins md:text-lg text-sm font-medium text-preto mr-[10%]">Email</p>
                                <div className="flex flex-row gap-4 mt-1">
                                    <p className="font-poppins md:text-sm text-[10px] text-cinza-escuro break-all">topcare@gmail.com</p>
                                    <IoCopyOutline />
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
                <section className="w-full">
                    <div className="flex flex-row justify-center items-center mt-16 font-regular w-full">
                        <div className="border-b md:w-[23%] w-[25%] border-cinza"></div>
                        <h1 className="font-poppins md:text-xl text-lg text-cinza-escuro mx-4">OU</h1>
                        <div className="border-b md:w-[23%] w-[25%] border-cinza"></div>
                    </div>
                </section>
                <section className="flex flex-col items-center justify-center mx-12">
                    <div className="md:w-[55%] flex justify-start">
                        <h1 className="font-averia md:text-2xl text-lg font-bold text-preto mt-12">Preencha o formulário</h1>
                    </div>
                    <div className="mt-12 flex flex-col justify-start border-solid border rounded-lg border-cinza-escuro md:w-[55%] gap-5">
                        <div className="md:p-10 p-4">
                            <div className="text-xs">
                                <InputText placeholder="Nome completo*" onChange={(e)=>setNome(e.target.value)}/>
                            </div>
                            <div className="flex flex-col justify-between lg:mt-[5%] mt-[8%] lg:flex-row">
                                <div className="w-full lg:w-[48%]">
                                    <div className="text-xs">
                                        <InputText placeholder="Email*" onChange={(e)=>setEmail(e.target.value)}/>
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
                                            <Select label="Filial*" options={['Top Care Balneário Camboriú - SC', 'Top Care Curitiba - PR', 'Top Care Gramado - RS']} opcaoSelecionada={setFilial}/>
                                        </div>
                                        <div className="w-full mt-[8%] lg:w-[48%] lg:mt-0">
                                            <Select label="Serviço*" options={['Consulta', 'Passeio', 'Vacinação', 'Hospedagem', 'Adestramento', 'Exames', 'Banho', 'Tosa', 'Banho e Tosa']} opcaoSelecionada={setServico}/>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between lg:mt-[5%] mt-[8%] lg:flex-row">
                                        <div className="w-full lg:w-[48%]">
                                            <InputData dataSelecionada={setData}/>
                                        </div>
                                        <div className="w-full mt-[8%] lg:w-[48%] lg:mt-0">
                                            <Select label="Horario*" options={['9:30', '10:00', '11:30', '13:30', '15:30', '16:30']} opcaoSelecionada={setHorario}/>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="h-32 lg:mt-[5%] mt-[8%]">
                                <TextArea placeholder="Descrição*" onChange={(e)=>setDescricao(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}