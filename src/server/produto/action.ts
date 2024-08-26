import { axiosAPI } from "../api";

export async function createProduto(produto: any) {
    const response = await axiosAPI.post('/produto/cadastro', produto);
    return response.data
}

export async function buscarProduto(id: number) {
    const response = await axiosAPI.get(`/produto/${id}`).then(resp => resp);
    return response.data
}