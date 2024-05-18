export interface Usuario {
    id: number,
    foto: string,
    nomeCompleto: string,
    email: string,
    celular: string,
    senha: string,
    cpf: string,
    sexo: string,
    dataNascimento: string,
    produtosCarrinho: number[]
    enderecos: Endereco[],
    pets: Pet[]
    pedidos: Pedido[],
    favoritos: number[],
    cartoes: Cartao[]
}

export interface Pet {
    nome: string
    especie: string
    raca: string
    idade: number
}
export interface Endereco {
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
    codigo: number,
    dataCompra: string,
    pagamento: Pagamento[],
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
    quantidadeComprada: number
}

export interface Pagamento {
    metodo: string, 
    pago: boolean
    subtotal: number,
    descontos: number,
    frete: number,
    valorTotal: number
}