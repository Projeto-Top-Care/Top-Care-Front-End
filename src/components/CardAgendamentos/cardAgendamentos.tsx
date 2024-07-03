import { LuMapPin } from "react-icons/lu";

interface ICardAgendamentos{
    loja: String,
    horario: String,
    nomeProfissional: String,
    nomePet: String,
    nomeCliente: String
}

const cardAgendamentos = ({loja, horario, nomeProfissional, nomePet, nomeCliente}:ICardAgendamentos) =>{
    return(
        <div className="border border-preto mx-2.5 mt-4 rounded">
            <div className="bg-terciaria text-[10px] p-1 flex">
            <LuMapPin size={12} color="preto" className="mr-1 mt-0.5"/> {loja}
            </div>
            <div className="ml-1.5 my-2.5 text-xs text-start">
                <div className="font-medium	">{horario}</div>
                <div className="font-medium	">{nomeProfissional}</div>
                <div>{nomePet} | {nomeCliente}</div>
            </div>
        </div>
    )
}

export default cardAgendamentos;