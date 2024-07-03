import InputText from "../InputText/InputText";

export default function EspecificacoesProduto(){
    return(
        <section className="mt-10 border border-cinza-escuro rounded-xl px-8 h-full">
            <div>
                <p className="font-averia text-2xl font-extrabold">Especificações</p>
            </div>
            <form action="">
                <div>
                    <div>
                    <InputText placeholder='Idade do pet*'/>
                    </div>
                </div>
            </form>
            
        </section>
    )
}