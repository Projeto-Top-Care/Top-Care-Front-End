import { axiosAPI } from "../api";

export async function buscarProduto(id: number) {
    const response = await axiosAPI.get(`/produto/${id}`)
    return response.data
}
export async function buscarTodos(query: string) {
    const response = await axiosAPI.get('/produto/page/'+ query)
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

export async function buscarPorQuery(query: string) {
    const response = await axiosAPI.get('produto/procurar/' + query)
    return response.data
}

export async function buscarFiltrados(url: string) {
    const response = await axiosAPI.get('produto?'+url)
    return response.data
}