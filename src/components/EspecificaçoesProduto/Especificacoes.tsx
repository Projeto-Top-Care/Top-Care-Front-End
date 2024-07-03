import InputText from "../InputText/InputText";
import { Especificacao } from '@/types/produto'

export default function EspecificacoesProduto() {
    return (
        <section className="mt-10 border border-cinza-escuro rounded-xl px-4 md:px-8 h-full">
            <div className="pt-6 flex flex-col justify-center lg:block items-center lg:w-[45%]">
                <p className="font-averia text-xl font-extrabold md:text-2xl">Especificações</p>
            </div>
            <form action="">
                <div className="flex flex-col lg:flex-row lg:gap-10">
                    <div className=" flex flex-col gap-5 md:gap-0 md:flex-row justify-between mt-5 lg:w-[50%]">
                        <div className="md:w-[49%] lg:w-[46%]">
                            <InputText placeholder='Idade do pet*'/>
                        </div>
                        <div className="md:w-[49%] lg:w-[46%]">
                            <InputText placeholder='Porte de raça*'/>
                        </div>
                    </div>
                        <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between mt-5 lg:w-[50%]">
                            <div className="md:w-[49%] lg:w-[46%]">
                                <InputText placeholder='Tipo*' />
                            </div>
                            <div className="md:w-[49%] lg:w-[46%]">
                                <InputText placeholder='Pet*' />
                            </div>
                        </div>
                </div>
                <div className="flex flex-col pb-6 md:pb-8 lg:flex-row lg:gap-10">
                    <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between mt-5 lg:w-[50%]">
                    <div className="md:w-[49%] lg:w-[46%]">
                            <InputText placeholder='Cor*' />
                        </div>
                        <div className="md:w-[49%] lg:w-[46%]">
                            <InputText placeholder='Material*' />
                        </div>
                    </div>
                    <div className="md:w-[100%] lg:w-[50%] mt-5">
                        <InputText placeholder='Variações*' />
                    </div>
                </div>
            </form>
        </section>
    )
}