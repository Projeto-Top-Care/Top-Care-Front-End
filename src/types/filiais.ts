export interface Filial{
    id: number
    src: string
    nome: string
    funcionamentoDias: string
    funcionamentoHora: string
    contato: string
    endereco: Endereco
}

export interface Endereco{
    id: number
    cep: string
    numero: number
    cidade: string
    estado: string
    rua: string
    bairro: string
}
