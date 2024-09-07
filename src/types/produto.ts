import { Usuario } from "./usuarios"

export interface ProdutoCard {
    id: number
    nome: string
    notaAvaliacao: number
    imagem: string
    preco: number
}

export interface PaginaProduto {
    produtos: ProdutoCard[]
    page: number
    totalPages: number
    pageSize: number
    totalElements: number
}


export interface ProdutoCompleto {
    id: number
    nome: string
    notaAvaliacao: number
    imagens: Imagem[]
    marca: string
    variantes: VarianteProps[]
    disponivel: boolean,
    codigo: number
    quantidadeVendas: number
    descricao: string
    especificacoes: Especificacao[]
    avaliacoes: AvaliacaoType[]
}

export interface Especificacao {
    id?: number,
    nome: string,
    conteudo: string
}

export interface AvaliacaoType {
    id: number
    usuario: UsuarioAvaliacao
    nota: number
    descricao: string
}

export interface VarianteProps {
    id?: number
    cor: string
    tamanho: string
    peso: number
    unidades: number
    estoque: number
    preco: number
    desconto: number
}

export interface UsuarioAvaliacao {
    nome: string,
    foto: string
}

export interface Imagem {
    id: number
    caminho: string
    nomeOriginal: boolean
}