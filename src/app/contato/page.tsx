import { IoCopyOutline } from "react-icons/io5";

export default function Contato() {
    return (
        <main className="flex flex-col w-full">
            <section className="mt-16">
                <section className="flex flex-col items-center justify-center gap-4 mt-10 mx-12">
                    <h1 className="font-averia md:text-3xl text-2xl font-bold text-preto">Precisa de ajuda?</h1>
                    <p className="font-poppins md:text-lg text-sm text-preto text-center">Escolha uma das opções para resolver seu problema!</p>
                </section>
                <section className="flex flex-col items-center justify-center mt-16 mx-12">
                    <div className="md:w-[55%] w-full flex justify-start">
                        <h1 className="font-averia md:text-2xl text-lg font-bold text-preto mt-10">Entre em contato com nossa central</h1>
                    </div>
                    <section className="border-solid border rounded-lg border-cinza-escuro md:w-[55%] w-full mt-3">
                        <section className="p-5">
                            <div className="flex flex-row justify-between ">
                                <p className="font-poppins md:text-lg text-sm font-medium text-preto mr-[10%]">Telefone</p>
                                <div className="flex flex-row gap-4 mt-1">
                                    <p className="font-poppins md:text-sm text-xs text-cinza-escuro break-all">(47) 00000-0000</p>
                                    <IoCopyOutline />
                                </div>
                            </div>
                            <div className="flex flex-row justify-between mt-4">
                                <p className="font-poppins md:text-lg text-sm font-medium text-preto mr-[10%]">Email</p>
                                <div className="flex flex-row gap-4 mt-1">
                                    <p className="font-poppins md:text-sm text-xs text-cinza-escuro break-all">topcare@gmail.com</p>
                                    <IoCopyOutline />
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
                <section>
                    <div className="flex flex-row justify-center items-center mt-16 font-regular w-full">
                        <div className="border-b  md:w-[23%] w-[30%] border-cinza"></div>
                        <h1 className="font-poppins md:text-xl text-lg text-cinza-escuro mx-4">OU</h1>
                        <div className="border-b md:w-[23%] w-[30%] border-cinza"></div>
                    </div>
                </section>
                <section className="flex flex-col items-center justify-center mx-12">
                    <div className="md:w-[55%] w-full flex justify-start">
                        <h1 className="font-averia md:text-2xl text-lg font-bold text-preto mt-16">Preencha o formulário</h1>
                    </div>
                </section>
            </section>
        </main>
    )
}