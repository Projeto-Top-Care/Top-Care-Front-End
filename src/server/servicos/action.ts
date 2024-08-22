import { axiosAPI } from "../api";

export async function getServicos() {
    const response = await axiosAPI.get('/servicos');
    return response.data;
}

export async function getServico(id: string) {
    const response = await axiosAPI.get(`/servicos/${id}`);
    return response.data;
}  

export async function createServico(servico: any) {
    const response = await axiosAPI.post('/servicos', servico);
    return response.data;
}

export async function updateServico(id: string, servico: any) {
    const response = await axiosAPI.put(`/servicos/${id}`, servico);
    return response.data;
}