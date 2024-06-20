interface IagendamentosHoje {
    horario: String,
    servico: String,
    nomeProfissional: String,
    nomePet: String,
    nomeCliente: String
}

const agendamentosHoje = ({horario, servico, nomeProfissional, nomePet, nomeCliente}: IagendamentosHoje) => {
    return (
        <div className="font-poppins text-preto">
            <p className="text-lg font-semibold	">Agendamentos de hoje</p>
            <div className="border border-cinza rounded-lg">
                <p>{horario} {servico}</p>
                <p>{nomeProfissional}</p>
                <p>{nomePet} | {nomeCliente}</p>
            </div>
        </div>
    )
}

export default agendamentosHoje;