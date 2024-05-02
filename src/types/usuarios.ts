export interface Usuario{
    id: number,
    nomeCompleto: string,
    email: string
    celular: number
    senha: string
    cpf: number
    dataNascimento: string
    enderecos: object[]
}