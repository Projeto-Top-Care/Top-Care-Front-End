import { IoCopyOutline } from "react-icons/io5";

export default function Contato() {
    return (
        <main className="flex flex-col md:w-full w-[90%]">
            <section className="mt-16">
                <section className="flex flex-col items-center justify-center gap-4 mt-10 mx-12 w-[90%]" >
                    <h1 className="font-averia text-3xl font-bold color-preto">Precisa de ajuda?</h1>
                    <p className="font-poppins text-lg color-preto">Escolha uma das opções para resolver seu problema!</p>
                </section>
                <section className="flex flex-col items-center justify-center mt-16 mx-12">
                    <div className="md:w-[50%] w-[90%] flex justify-start">
                        <h1 className="font-averia md:text-2xl text-xl font-bold text-black mt-10">Entre em contato com nossa central</h1>
                    </div>
                    <section className="border-solid border rounded-lg border-cinza-escuro md:w-[50%] w-[90%] mt-3">
                        <section className="p-6 md:w-[100%] ">
                            <div className="flex flex-row justify-between">
                                <p className="font-poppins text-lg font-medium color-preto">Telefone</p>
                                <div className="flex flex-row gap-4 mt-1">
                                    <p className="font-poppins md:text-xs text-sm color-cinza-escuro">(47) 00000-0000</p>
                                    <IoCopyOutline />
                                </div>
                            </div>
                            <div className="flex flex-row justify-between mt-4">
                                <p className="font-poppins text-lg font-medium color-preto">Email</p>
                                <div className="flex flex-row gap-4 mt-1">
                                    <p className="font-poppins text-xs color-cinza-escuro">topcare@gmail.com</p>
                                    <IoCopyOutline />
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
                <section className="">
                    <div className="flex flex-row justify-center items-center mt-16 font-regular">
                        <div className="border-b  md:w-[21%] w-[27%] border-cinza"></div>
                        <h1 className="font-poppins text-xl text-cinza-escuro mx-4">OU</h1>
                        <div className="border-b md:w-[21%] w-[27%] border-cinza"></div>
                    </div>
                </section>
                <section className="flex flex-col items-center justify-center mx-12">
                    <div className="md:w-[50%] w-[90%] flex justify-start">
                        <h1 className="font-averia md:text-2xl text-xl font-bold text-black mt-16">Preencha o formulário</h1>
                    </div>
                </section>
            </section>
        </main>
    )
}
