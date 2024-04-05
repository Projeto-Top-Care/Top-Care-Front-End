interface IPlano{
    tipo: string,
    descricao: string,
    valor: number
}

const Plano = ({tipo, descricao, valor}:IPlano) => {
    return (
        <div className="shadow-lg text-center font-poppins flex justify-center items-center flex-col bg-terciaria p-10 w-[38%] lg:w-[28%] rounded-lg ">
            <p className="mb-[8%] text-xl font-extrabold lg:text-2xl">{tipo}</p>
            <p className="mb-[8%] text-xs lg:text-lg">{descricao}</p>
            <p className="mb-[8%] text-xs lg:text-xl">R${valor} p/mês</p>
        </div>
    )
}
export default Plano;