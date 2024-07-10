export interface Servico{
    id: number,
    nome: string,
    categoria?: string,
    precoInicial: number,
    imagem: string,
    descricao: string,
    pets: PetsProps[]
    variantes: VariantesProps[]
}

export interface VariantesProps{
    id?: number,
    nome?: string
    tipo: string,
    preco: number
}

export interface PetsProps{
    check: boolean
    name: string
}