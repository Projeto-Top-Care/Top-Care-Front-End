export interface Usuario{
    ddd: string
    sexo: string
    id: number,
    foto: string,
    nomeCompleto: string,
    email: string,
    celular: string,
    senha: string,
    cpf: number,
    dataNascimento: string,
    enderecos: Endereco[],
    pets: Pet[]
}
export interface Pet{
    nome: string
    especie: string
    raca: string
    idade: number
}
export interface Endereco{
    titulo: string,
    cep: string,
    estado: string,
    cidade: string,
    bairro: string,
    rua: string,
    numero: number,
    complemento: string
}