interface ILocalAgendamento {
    nomeFilial: string,
    rua: string
}

const LocalAgendamento = ({ nomeFilial, rua }: ILocalAgendamento) => {
    return (
        <div className="flex items-center justify-start p-5 rounded-lg font-poppins border-2 mb-12 border-cinza-claro w-[24%] mt-12">
            <div className="flex ml-2 items-center gap-4 ">
                <div className=" flex flex-col">
                    <p className=" text-lg text-preto">{nomeFilial}</p>
                    <p className="text-sm text-cinza-escuro">{rua}</p>
                </div>
            </div>
        </div>
    )
}

export default LocalAgendamento;