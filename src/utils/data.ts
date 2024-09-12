export const formatarData = (nascimento: string) => {
    return nascimento.split("-").reverse().join("/")
}

export const formatarHora = (hora: string) =>{
    return hora.slice(0,5)
}