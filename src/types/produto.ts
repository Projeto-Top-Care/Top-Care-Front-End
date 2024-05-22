export interface Produto{
    id: number
    nomeProduto: string
    notaDeAvaliacao: number
    imagemProduto: string[]
    precoAntigoDoProduto: number
    desconto: string
    precoNovo: number
    favorito?: boolean
}
export interface ProdutoCompleto{
    id: number
    nomeProduto: string
    notaDeAvaliacao: number
    imagemProduto: string[]
    precoAntigoDoProduto: number
    desconto: string
    precoNovo: number
    marca: string
    precoAssinantes: number
    tamanho: string[]
    disponivel: boolean,
    favorito: boolean
    codigo: number
    estoque: number
    quantidadeVendas: number
    descricao: string[]
    especificacoes: Especificacao[]
    avaliacoes: AvaliacaoType[]
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