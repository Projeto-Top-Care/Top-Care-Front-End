import InputText from "@/components/InputText/InputText";
import Select from "@/components/Select/Select";
import { IoCopyOutline } from "react-icons/io5";

export default function Contato() {
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
                    <div className="md:w-[55%] w-full flex justify-start">
                        <h1 className="font-averia md:text-2xl text-lg font-bold text-preto mt-16">Preencha o formulário</h1>
                    </div>
                    <div className="mt-16 flex flex-col justify-start border-solid border rounded-lg border-cinza-escuro md:w-[55%] w-full mt-3 gap-5">
                        <div className="p-10">
                            <div className="text-xs">
                                <InputText placeholder="Nome completo*" />
                            </div>
                            <div className="flex flex-row justify-between mt-[5%]">
                                <div className="w-[48%] ">
                                    <div className="text-xs">
                                        <InputText placeholder="Email*" />
                                    </div>
                                </div>
                                <div className="w-[48%]">
                                    <div className="text-xs">
                                        <Select label="Tipo de atendimento*" options={['Serviço', 'Dúvidas', 'Sugestões', 'Reclamações', 'Compras', 'Agendamento']}/>
                                    </div>
                                </div>
                            </div>
                            <div className="text-xs mt-[5%]">
                                <InputText placeholder="Descrição*" />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}