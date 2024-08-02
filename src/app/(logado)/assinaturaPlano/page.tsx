'use client'
import BotaoGrande from "@/components/Botoes/BotaoGrande/BotaoGrande";
import Checkbox from "@/components/Checkbox/Checkbox";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation"

export default function assinaturaPlano() {

    const [termo, setTermo] = useState<boolean>(false)
    const [tempo, setTempo] = useState<String>("3 meses");
    const { push } = useRouter();

    return (
        <main className="font-poppins text-preto">
            <section>
                <TituloLinha voltar={true} titulo="Assinar plano" />
            </section>

            <section className="w-[90%] lg:w-[80%] m-auto flex flex-col lg:flex-row gap-8 pb-20">
                <section className="flex flex-col gap-6 w-full lg:w-3/5">
                    <section className="flex flex-col rounded-lg border border-cinza-escuro p-3 gap-4">
                        <h3 className="font-bold text-lg">Por quanto tempo deseja manter o plano?</h3>
                        <div className="flex flex-row gap-6">
                            <div className="flex flex-row gap-1 items-center">
                                <input onChange={() => setTempo("3 meses")} className="w-5 h-5 checked:accent-purple-500" checked={tempo == "3 meses" ? true : false} type="radio" id="tempo" name="3 meses" />
                                <label className="text-xs sm:text-base" htmlFor="3 meses">3 meses</label>
                            </div>
                            <div className="flex flex-row gap-1 items-center">
                                <input onChange={() => setTempo("6 meses")} className="w-5 h-5 checked:accent-purple-500" checked={tempo == "6 meses" ? true : false} type="radio" id="tempo" name="6 meses" />
                                <label className="text-xs sm:text-base" htmlFor="6 meses">6 meses</label>
                            </div>
                            <div className="flex flex-row gap-1 items-center">
                                <input onChange={() => setTempo("1 ano")} className="w-5 h-5 checked:accent-purple-500" checked={tempo == "1 ano" ? true : false} type="radio" id="tempo" name="1 ano" />
                                <label className="text-xs sm:text-base" htmlFor="1 ano">1 ano</label>
                            </div>
                        </div>
                    </section>

                    <section className="flex flex-col rounded-lg border border-cinza-escuro p-3 gap-4">
                        <h3 className="font-bold text-lg">Benefícios</h3>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row items-center justify-between">
                                <p className="text-xs sm:text-base">Descontos em produtos eleitos</p>
                                <p className="text-lg font-averia font-bold text-roxo-select">5%</p>
                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <p className="text-xs sm:text-base">Consultas grátis</p>
                                <p className="text-lg font-averia font-bold text-roxo-select">1 por ano</p>
                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <p className="text-xs sm:text-base">Descontos em banhos</p>
                                <p className="text-lg font-averia font-bold text-roxo-select">5%</p>
                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <p className="text-xs sm:text-base">Descontos em consultas</p>
                                <p className="text-lg font-averia font-bold text-roxo-select">5%</p>
                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <p className="text-xs sm:text-base">Descontos em outros serviços</p>
                                <p className="text-2xl font-averia font-bold text-cinza"><IoClose /></p>
                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <p className="text-xs sm:text-base">Plantão 24 horas</p>
                                <p className="text-2xl font-averia font-bold text-cinza"><IoClose /></p>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="flex flex-col gap-8 w-full lg:w-2/5">
                    <div className="flex flex-col border border-cinza-escuro rounded-lg p-3 divide-y-[1px] divide-cinza">
                        <div className="py-4 flex flex-row justify-between">
                            <p className="text-sm sm:text-base">Plano básico</p>
                            <p className="font-medium text-sm sm:text-base">R$11,00</p>
                        </div>
                        <div className="py-4 gap-2 flex flex-col">
                            <div className="flex flex-row justify-between">
                                <p className="text-sm sm:text-base">Subtotal</p>
                                <p className="font-medium text-sm sm:text-base">R$11,00</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p className="text-sm sm:text-base">Desconto</p>
                                <p className="font-medium text-sm sm:text-base">R$11,00</p>
                            </div>
                        </div>
                        <div className="py-4 flex flex-row justify-between">
                            <p className="text-sm sm:text-base">Valor total</p>
                            <p className="font-semibold text-sm sm:text-base">R$11,00</p>
                        </div>
                        <div className="flex flex-row pt-4 items-center">
                            {/* <input type="checkbox" /> */}
                            <Checkbox border="border-2 border-roxo-select" color="checked:bg-primaria" check={setTermo} defautCheck={false} onClick={() => setTermo(!termo)} />
                            <p className="text-roxo-select text-sm">Li e aceito os termos e condições</p>
                        </div>
                    </div>
                    <BotaoGrande onClick={() => termo ? push('./pagamentoBoleto') : alert("É necessário aceitar os termos!")} title="Assinar" background="bg-primaria" type="button" height="h-10" />
                </section>
            </section>
        </main>
    )
}