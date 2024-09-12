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

export async function deleteServico(id: string) {
    const response = await axiosAPI.delete(`/servicos/${id}`);
    return response.data;
}

export async function getHorariosPorDia(id: string, dia: string) {
    const response = await axiosAPI.get(`/servicos/${id}/${dia}`);
    return response.data;
}

export async function getFiliais(){
    const response = await axiosAPI.get('teste/filiais');
    return response.data;
}