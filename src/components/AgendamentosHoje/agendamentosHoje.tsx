interface IagendamentosHoje {
    horario: String,
    servico: String,
    nomeProfissional: String,
    nomePet: String,
    nomeCliente: String
}

const agendamentosHoje = ({ horario, servico, nomeProfissional, nomePet, nomeCliente }: IagendamentosHoje) => {
    return (
        <div className="font-poppins text-preto">
            <p className="text-lg font-semibold	">Agendamentos de hoje</p>
            <div className="border border-cinza rounded-lg">
                <div className="ml-3 my-5">
                    <p className="text-sm">{horario} {servico}</p>
                    <p>{nomeProfissional}</p>
                    <p className="text-sm">{nomePet} | {nomeCliente}</p>
                </div>
                
            </div>
        </div>
    )
}

export default agendamentosHoje;