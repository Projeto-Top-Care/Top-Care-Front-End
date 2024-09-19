import { Imagem } from "./produto"
import { Endereco } from "./usuarios"

export interface Servico{
    id: number,
    nome: string,
    categoria: string,
    imagem: Imagem,
    descricao: string,
    funcionarios: PetsProps[],
    especies: PetsProps[]
    variantes: VariantesProps[]
}

export interface VariantesProps{
    id?: number,
    nome: string
    tipo: string,
    preco: number
}

export interface PetsProps{
    id: number
    nome: string
}

export interface Filial{
    id: number,
    nome: string,
    endereco: Endereco
}