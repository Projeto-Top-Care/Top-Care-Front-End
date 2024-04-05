interface IPlano{
    tipo: string,
    descricao: string,
    valor: number
}

const Plano = ({tipo, descricao, valor}:IPlano) => {
    return (
        <div className="shadow-lg text-center font-poppins flex justify-center items-center flex-col bg-terciaria p-10 w-[28%] rounded-lg ">
            <p className="mb-8 text-2xl font-extrabold">{tipo}</p>
            <p className="mb-8">{descricao}</p>
            <p className="mb-8 text-xl">R${valor} p/mês</p>
        </div>
    )
}
export default Plano;