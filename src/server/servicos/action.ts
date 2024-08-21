import { axiosAPI } from "../api";

export async function getServicos() {
    const response = await axiosAPI.get('/servicos');
    return response.data;
}

export async function getServico(id: string) {
    const response = await axiosAPI.get(`/servicos/${id}`);
    return response.data;
}  