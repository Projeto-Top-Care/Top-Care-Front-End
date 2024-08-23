export interface Servico{
    id: number,
    nome: string,
    categoria: string,
    imagem: string,
    descricao: string,
    funcionarios: PetsProps[],
    especies: PetsProps[]
    variantes: VariantesProps[]
}

export interface VariantesProps{
    id?: number,
    nome?: string
    tipo: string,
    preco: number
}

export interface PetsProps{
    id: number
    nome: string
}