import { VariantesProps } from "./servicos"
import { Filial } from "./servicos"
import { Pet, Usuario } from "./usuarios"

export interface Agendamentos{
    id: number
    filial: string
    valor: number
    servico: string
    horario: Horario
    pet: Pet
    status: string
    cliente: string
    pagamento: Pagamento
}

interface Pagamento{
    id: number,
    metodoPagamento: string,
    parcelas: number,
    pago: boolean
}
interface Horario{
    id: number,
    dia: string,
    horaInicio: string,
    funcionario: string
}


