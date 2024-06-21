export interface Servico{
    id: number,
    nome: string,
    precoInicial: number
    imagem: string,
    descricao: string,
    variantes: Precos[]
}

export interface Precos{
    id: number,
    tipo: string,
    preco: number
}