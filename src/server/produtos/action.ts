import { axiosAPI } from "../api";

export async function buscarProduto(id: number) {
    const response = await axiosAPI.get(`/produto/${id}`)
    return response.data
}
export async function buscarTodos() {
    const response = await axiosAPI.get('/produto')
    return response.data
}

export async function buscarTodosCompleto() {
    const response = await axiosAPI.get('/produto/completo')
    return response.data
}

export async function cadastrarProduto(formdata: FormData) {
    const response = await axiosAPI.post('/produto', formdata)
    return response.data
}

export async function deletarProduto(id: number) {
    const response = await axiosAPI.delete(`/produto/${id}`)
    return response.data
}

export async function editarProduto(id: number, formdata: FormData) {
    const response = await axiosAPI.put(`/produto/${id}`, formdata)
    return response.data
}

export async function buscarFiltros(query: string) {
    const response = await axiosAPI.get('produto/filtro?query=' + query)
    return response.data
}