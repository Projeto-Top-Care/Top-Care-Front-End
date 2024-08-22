import { axiosAPI } from "../api"

export const buscarFuncionarios = async () => {
    const response = await axiosAPI.get("/funcionario")
    return response.data;
}

export async function cadastroFuncionario(payload: any) {
    const response = await axiosAPI.post("/funcionario", payload).then(resp => resp);
    return response.data
}

export const buscarFuncionario = async (id: number) => {
    const response = await axiosAPI.get(`/funcionario/${id}`)
    return response.data;
}

export const excluirFuncionario = async (id: number) => {
    const response = await axiosAPI.delete(`/funcionario/${id}`)
    return response.data;
}
