export interface Usuario{
    id: number,
    foto: string,
    nomeCompleto: string,
    email: string,
    celular: string,
    senha: string,
    cpf: string,
    dataNascimento: string,
    enderecos: Endereco[],
    pets: Pet[]
    pedidos: object[]
}

export interface Pet{
    nome: string
    especie: string
    raca: string
    idade: number
}
export interface Endereco{
    nome: string,
    cep: string,
    estado: string,
    cidade: string,
    bairro: string,
    rua: string,
    numero: number,
    complemento: string
}