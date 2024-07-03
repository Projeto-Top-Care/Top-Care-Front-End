import InputText from "../InputText/InputText";

export default function EspecificacoesProduto(){
    return(
        <section className="mt-10 border border-cinza-escuro rounded-xl px-8 h-full">
            <div className="pt-6">
                <p className="font-averia text-2xl font-extrabold">Especificações</p>
            </div>
            <form action="">
                <div className="flex flex-row justify-between mt-5">
                    <div className="w-[22%]">
                    <InputText placeholder='Idade do pet*'/>
                    </div>
                    <div className="w-[22%]">
                    <InputText placeholder='Porte de raça*'/>
                    </div>
                    <div className="w-[22%]">
                    <InputText placeholder='Tipo*'/>
                    </div>
                    <div className="w-[22%]">
                    <InputText placeholder='Pet*'/>
                    </div>
                </div>
                <div className="flex flex-row justify-between mt-6 pb-8">
                    <div className="w-[22%]">
                    <InputText placeholder='Cor*'/>
                    </div>
                    <div className="w-[22%]">
                    <InputText placeholder='Material*'/>
                    </div>
                    <div className="w-[48%]">
                    <InputText placeholder='Variações*'/>
                    </div>
                </div>
            </form>
            
        </section>
    )
}