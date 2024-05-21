export interface Raca {
    tipo: string,
    raca: string,
    foto: string,
    descricao: string,
    expectativaVida: number,
    tamanho: number,
    peso: number,
    adaptacao: number,
    latido: number,
    amizada: number,
    tosa: number,
    territorialismo: number,
    sociabilidade: number,
    apego: number,
    treinamento: number,
    relatos: Relato[]
}
export interface Relato{
    id: number,
    relato: string
}