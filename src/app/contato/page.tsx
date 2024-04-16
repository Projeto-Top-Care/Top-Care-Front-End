import { IoCopyOutline } from "react-icons/io5";

export default function Contato() {
    return (
        <main className="flex flex-col">
            <div className="mt-16">
                <div className="flex flex-col items-center justify-center gap-4 mt-10" >
                    <h1 className="font-averia text-3xl font-bold color-preto">Precisa de ajuda?</h1>
                    <p className="font-poppins text-lg color-preto">Escolha uma das opções para resolver seu problema!</p>
                </div>
                <div className="flex flex-col items-center justify-center mt-16">
                    <h1 className="font-averia text-2xl font-bold color-preto mt-10 flex items-starts justify-start">Entre em contato com nossa central</h1>
                    <div className="border-solid border rounded-lg border-cinza-escuro w-[50%]">
                        <div className="p-6">
                            <div className="flex flex-row justify-between">
                                <p className="font-poppins text-lg font-medium color-preto">Telefone</p>
                                <div className="flex flex-row gap-4 mt-1">
                                    <p className="font-poppins text-xs color-cinza-escuro">(47) 00000-0000</p>
                                    <IoCopyOutline/>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between mt-4">
                                <p className="font-poppins text-lg font-medium color-preto">Email</p>
                                <div className="flex flex-row gap-4 mt-1">
                                    <p className="font-poppins text-xs color-cinza-escuro">topcare@gmail.com</p>
                                    <IoCopyOutline/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row justify-center items-center mt-16 font-regular">
                        <div className="w-30 h-30"></div>
                        <h1 className="font-poppins text-xl clor-cinza-escuro">OU</h1>
                        <div></div>
                    </div>
                </div>
            </div>
        </main>
    )
}
