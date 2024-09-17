import { axiosAPI } from "../api"

export const buscarFuncionarios = async () => {
    const response = await axiosAPI.get("/funcionario")
    return response.data;
}

export const buscarFuncionariosSimples = async () => {
    const response = await axiosAPI.get("/funcionario/simples")
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

export const editarFuncionario = async (id: number, payload: any) => {
    const response = await axiosAPI.put(`/funcionario/${id}`, payload)
    return response.data;
}

export const verHorariosDisponiveis = async (id:number) => {
    const response = await axiosAPI.get(`/horario/${id}`)
    return response.data;
}

export const verAgendamentosFuncionario = async (id:number) => {
    const response = await axiosAPI.get(`/funcionario/agendamentos/${id}`)
    return response.data;
}
