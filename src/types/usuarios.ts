export interface Usuario{
    id: number,
    foto: string,
    nomeCompleto: string,
    email: string,
    celular: string,
    senha: string,
    cpf: number,
    dataNascimento: string,
    enderecos: object[],
    pets: object[],
    pedidos: object[]
}

export interface Pet{
    nome: string
    especie: string
    raca: string
    idade: number
}