export interface Duvidas{
    Categoria: string
    Perguntas: Duvida[]
}
export interface Duvida{
    pergunta: string 
    resposta: string
}