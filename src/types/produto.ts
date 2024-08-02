import { Usuario } from "./usuarios"

export interface Produto {
    id: number
    nomeProduto: string
    notaDeAvaliacao: number
    imagemProduto: string[]
    precoAntigoDoProduto: number
    desconto: string
    precoNovo: number
    favorito?: boolean
}
export interface ProdutoCompleto {
    id: number
    nomeProduto: string
    notaDeAvaliacao: number
    imagemProduto: string[]
    precoAntigoDoProduto: number
    desconto: string
    precoNovo: number
    marca: string
    precoAssinantes: number
    tipoVariante: string
    variantes: VarianteProps[]
    disponivel: boolean,
    codigo: number
    estoque: number
    quantidadeVendas: number
    descricao: string[]
    especificacoes: Especificacao
    avaliacoes: AvaliacaoType[]
    tags: string[],
}

export interface Especificacao {
    idadePet: string;
    porteRaca: string;
    pet: string;
    cor: string;
    tipo: string;
    material: string;
    apresentacao: string;
}
export interface AvaliacaoType {
    id: number
    usuario: UsuarioAvaliacao
    nota: number
    descricao: string
}

export interface VarianteProps {
    id?: number
    estoque: number
    preco: number
    tipo: string
}

export interface UsuarioAvaliacao {
    nome: string,
    foto: string
}