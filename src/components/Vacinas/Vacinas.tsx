interface IVacinas {
    vacina: string,
    preco: string,
}

const Vacinas = ({ vacina, preco }: IVacinas) => {
    return (
        <div className="flex items-center justify-center text-preto p-5 rounded-lg font-poppins border-2 mb-12 border-cinza-claro w-[18%] mt-12">
            <div className=" flex flex-col justify-center items-center">
                <p className=" text-lg font-medium">{vacina}</p>
                <p className="text-lg ">R$ {preco}</p>
            </div>
        </div>
    )
}

export default Vacinas;