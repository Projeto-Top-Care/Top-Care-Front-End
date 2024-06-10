interface IServicosAgendamento {
    servico: string,
    preco: string,
    src: string
}

const ServicosAgendamento = ({ servico, preco, src }: IServicosAgendamento) => {
    return (
        <div className="flex items-center justify-start text-preto p-5 rounded-lg font-poppins border-2 mb-12 border-cinza-claro w-[18%] mt-12">
            <div className="flex ml-2 items-center gap-4 ">
                <img className="" src={src}/>
                <div className=" flex flex-col">
                    <p className=" text-lg font-medium">{servico}</p>
                    <p className="text-lg ">R$ {preco}</p>
                </div>
            </div>
        </div>
    )
}

export default ServicosAgendamento;