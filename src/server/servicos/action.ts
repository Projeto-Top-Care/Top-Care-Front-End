import { axiosAPI } from "../api";

export async function getServicos() {
    const response = await axiosAPI.get('/servicos');
    return response.data;
}