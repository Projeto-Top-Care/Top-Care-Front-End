import { axiosAPI } from "../api";



export async function buscarProduto(id: number) {
    const response = await axiosAPI.get(`/produto/${id}`)
    return response.data
}
export async function buscarTodos() {
    const response = await axiosAPI.get('/produto')
    return response.data
}