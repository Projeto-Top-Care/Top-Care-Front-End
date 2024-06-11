export interface Servico{
    id: number,
    nome: string,
    imagem: string,
    descricao: string,
    precos: Precos
}

export interface Precos{
    id: number,
    tipo: string,
    preco: number
}