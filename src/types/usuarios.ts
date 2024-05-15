export interface Usuario{
<<<<<<< HEAD
=======
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
>>>>>>> Feature/Pagina-produtosFavoritos
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

export interface Favoritos{
    id: number
    nomeProduto: string
    notaDeAvaliacao: number
    imagemProduto: string[]
    precoAntigoDoProduto: number
    desconto: string
    precoNovo: number
}