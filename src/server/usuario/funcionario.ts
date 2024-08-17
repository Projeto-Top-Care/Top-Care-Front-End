import { axiosAPI } from "../api"

export const buscarFuncionarios = async () => {
    const response = await axiosAPI.get("/funcionario")
    return response.data;
}