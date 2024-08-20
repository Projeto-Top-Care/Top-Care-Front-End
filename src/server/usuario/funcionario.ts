import { axiosAPI } from "../api"

export const buscarFuncionarios = async () => {
    const response = await axiosAPI.get("/funcionario")
    return response.data;
}

export async function cadastroFuncionario(payload: any) {
    const response = await axiosAPI.post("/funcionario", payload).then(resp => resp);
    return response.data
}
