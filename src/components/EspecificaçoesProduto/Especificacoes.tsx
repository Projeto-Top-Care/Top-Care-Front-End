import InputText from "../InputText/InputText";
import { Especificacao } from '@/types/produto'

interface TabelaProdutosProps {
    produto?: Especificacao
}

export default function EspecificacoesProduto({produto}: TabelaProdutosProps) {
    return (
        <section className="mt-10 border border-cinza-escuro rounded-xl px-4 md:px-8 h-full">
            <div className="pt-6 flex flex-col justify-center lg:block items-center lg:w-[45%]">
                <p className="font-averia text-xl font-extrabold md:text-2xl">Especificações</p>
            </div>
            <form action="">
                <div className="flex flex-col lg:flex-row lg:gap-10">
                    <div className=" flex flex-col gap-5 md:gap-0 md:flex-row justify-between mt-5 lg:w-[50%]">
                        <div className="md:w-[49%] lg:w-[46%]">
                            <InputText placeholder='Idade do pet*' value={produto?.idadePet}/>
                        </div>
                        <div className="md:w-[49%] lg:w-[46%]">
                            <InputText placeholder='Porte de raça*' value={produto?.porteRaca}/>
                        </div>
                    </div>
                        <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between mt-5 lg:w-[50%]">
                            <div className="md:w-[49%] lg:w-[46%]">
                                <InputText placeholder='Tipo*' value={produto?.tipo}/>
                            </div>
                            <div className="md:w-[49%] lg:w-[46%]">
                                <InputText placeholder='Pet*' value={produto?.pet}/>
                            </div>
                        </div>
                </div>
                <div className="flex flex-col pb-6 md:pb-8 lg:flex-row lg:gap-10">
                    <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between mt-5 lg:w-[50%]">
                    <div className="md:w-[49%] lg:w-[46%]">
                            <InputText placeholder='Cor*' value={produto?.cor}/>
                        </div>
                        <div className="md:w-[49%] lg:w-[46%]">
                            <InputText placeholder='Material*' value={produto?.material}/>
                        </div>
                    </div>
                    <div className="md:w-[100%] lg:w-[50%] mt-5">
                        <InputText placeholder='Variações*' value={produto?.apresentacao}/>
                    </div>
                </div>
            </form>
        </section>
    )
}