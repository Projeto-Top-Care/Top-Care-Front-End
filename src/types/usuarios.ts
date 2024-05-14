export interface Usuario{
    produto: any
    favoritos: Favoritos[]
    precoNovo: number
    notaDeAvaliacao: number
    imagemProduto: string[]
    desconto: string
    precoAntigoDoProduto: number
    nomeProduto: string
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

export interface Favoritos{
    id: number
    nomeProduto: string
    notaDeAvaliacao: number
    imagemProduto: string[]
    precoAntigoDoProduto: number
    desconto: string
    precoNovo: number
}