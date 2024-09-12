import { Agendamentos } from "./agendamentos"

export interface FuncionarioCompleto{
    nome: string 
    codigo: number
    email: string
    celular: string
    cpf: string
    dataNascimento: string
    sexo: string
    nomeFilial: string
    horarios: HorarioFuncionarioSimples[]
}
export interface FuncionarioSimples{
    id: number
    nome: string
    codigo: number
    email:string 
}
export interface HorarioFuncionarioSimples{
    dia: string
    horaInicio: string
    horaFim: string
}