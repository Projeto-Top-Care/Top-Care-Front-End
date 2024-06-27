interface IPropagandaPlano {
    titulo: string,
    descricao: string,
    preco: number
}

export default function PropagandaPlano({titulo, descricao, preco}: IPropagandaPlano) {
    
    return (
        <div className="bg-terciaria rounded-lg font-poppins text-preto flex flex-col gap-4 items-center p-4 w-64">
            <h5 className="font-bold text-xl">{titulo}</h5>
            <p className="text-md text-center">{descricao}</p>
            <p className="text-cinza-escuro text-lg text-center">R${preco} por mês</p>
        </div>
    )
}
