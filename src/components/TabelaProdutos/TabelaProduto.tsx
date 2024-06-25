import InputText from "../InputText/InputText";

const TabelaProdutos = () => {
    return (
        <section className='mt-10 border border-cinza-escuro rounded-xl h-full flex flex-row'>
            <section className='border-r border-r-cinza-escuro w-[55%] px-5'>
                <div className='pt-6'>
                    <p className='font-averia text-2xl font-extrabold'>Informações básicas</p>
                </div>
                <form action="">
                    <div className="mt-6" >
                    <InputText placeholder='Nome do produto*'/>
                    </div>
                    <div>
                        <InputText placeholder="Código*"/>
                    </div>
                </form>
            </section>
        </section>
    )
}
export default TabelaProdutos;