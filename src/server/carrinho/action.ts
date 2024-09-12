import { axiosAPI } from "../api"

export const buscarCarrinho = async (id: number) => {
    const response = await axiosAPI.get(`/carrinho/${id}`)
    return response.data;
}

export const buscarCarrinhoPorUserId = async (id: number) => {
    const response = await axiosAPI.get(`/carrinho/user/${id}`)
    return response.data;
}

export async function cadastroCarrinho(payload: any) {
    const response = await axiosAPI.post("/carrinho/basico", payload).then(resp => resp);
    return response.data
}

export async function adicionarProdutoCarrinho(payload: any) {
    const response = await axiosAPI.patch("/carrinho/adicionar", payload).then(resp => resp);
    return response.data
}


