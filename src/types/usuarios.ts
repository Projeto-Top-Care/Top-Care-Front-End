export interface Usuario {
    id: number,
    foto: string,
    nomeCompleto: string,
    email: string,
    celular: string,
    senha: string,
    cpf: string,
    sexo: 'Feminino' | 'Masculino' | "Prefiro não Informar"
    dataNascimento: string,
    produtosCarrinho: number[]
    enderecos: Endereco[],
    pets: Pet[]
    pedidos: Pedido[],
    favoritos: number[],
    cartoes: Cartao[],
    cupons: Cupom[]
}

export interface Pet {
    nome: string
    especie: string
    raca: string
    idade: number
}
export interface Endereco {
    id: number
    nome: string,
    cep: string,
    estado: string,
    cidade: string,
    bairro: string,
    rua: string,
    numero: number,
    complemento: string
}

export interface Pedido {
    id: number
    codigo: number,
    dataCompra: string,
    status: string
    pagamento: Pagamento,
    endereço: number,
    produtos: QntProduto[]
}

export interface Cartao {
    nome: string,
    numero: number,
    validade: string,
    agencia: string
}

export interface QntProduto {
    id: number,
    quantidade: number
}

export interface Pagamento {
    metodo: string, 
    pago: boolean
    subtotal: number,
    descontos: number,
    frete: number,
    valorTotal: number
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
    id: number
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

export interface Cupom{
    tipo: string
    desconto: string
    porcentagem: number
    nome: string
    limite: number
}
export interface ViaCEP{
    bairro: string
    cep: string
    complemento: string
    localidade: string
    logradouro: string
    uf: string
    erro: boolean
}