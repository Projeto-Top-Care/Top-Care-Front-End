export interface Usuario{
    id: number,
    foto: string,
    nomeCompleto: string,
    email: string,
    celular: string,
    senha: string,
    cpf: number,
    dataNascimento: string,
    enderecos: Object[],
    pets: Pet[],
    pedidos: pedidos[]
}

export interface Pet{
    nome: string
    especie: string
    raca: string
    idade: number
}

export interface Produto{
    id: number
    nomeProduto: string
    notaDeAvaliacao: number
    imagemProduto: string[]
    precoAntigoDoProduto: number
    desconto: string
    precoNovo: number
}

export interface pedidos{
    codigoPedido: number
    dataCompra: string
    pagamento: pagamento[]
    enderecoEntrega: enderecoEntrega[]
    produtos: produtos[]
}

export interface pagamento{
    formaPagamento: string
    pago: boolean
    subtotal: number
    descontos: number
    frete: number
    valorTotal: number
}

export interface enderecoEntrega{
    nome: string
    cep: string
    estado: string
    cidade: string
    bairro: string
    rua: string
    numero: number
    complemento: string
}

export interface produtos{
    codigo: number
    quantidadeComprada: number
    nomeProduto: string
    notaDeAvaliacao: number
    imagemProduto: string[]
    precoAntigoDoProduto: number
    desconto: string
    precoNovo: number
    marca: string
    precoAssinantes: number
    tamanho: string[]
    disponivel: boolean
    estoque: number
    descricao: string[]
    especificacoes: object[]
    avaliacoes: object[]
}

export interface Especificacao{
    topico: string
    resposta: string
}

export interface AvaliacaoType{
    id: number
    nota: number
    descricao: string
}