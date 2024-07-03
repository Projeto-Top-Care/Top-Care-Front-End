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
    variantes: VarianteProps[]
    disponivel: boolean,
    codigo: number
    estoque: number
    quantidadeVendas: number
    descricao: string[]
    especificacoes: Especificacao[]
    avaliacoes: AvaliacaoType[]
    tags: string[],
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

export interface VarianteProps{
    id?: number
    estoque: number
    preco: number
    tipo: string
    
}