export const formatarData = (nascimento: string) => {
    const data = nascimento.split("-")
    return data[2] + "/" + data[1] + "/" + data[0]
}