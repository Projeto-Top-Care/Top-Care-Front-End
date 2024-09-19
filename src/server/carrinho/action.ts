import { axiosAPI } from "../api";

export const adicionarProduto = async (id:number, payload: any) => {
    const response = await axiosAPI.patch('/carrinho/'+id+"/adicionar", payload)
    return response.data
} 

export const buscarCarrinho = async (id: number) => {
    const response = await axiosAPI.get('/carrinho/user/'+id)
    return response.data
}

export const adicionarQuantidade = async (id:number) => {
    const response = await axiosAPI.patch('/quantidadeProduto/adicionar/'+id)
    return response.data
}

export const removerQuantidade = async (id:number) => {
    const response = await axiosAPI.patch('/quantidadeProduto/remover/'+id)
    return response.data
}

export const removerProduto = async (id:number) => {
    const response = await axiosAPI.delete('/quantidadeProduto/'+id)
    return response.data
}

export const limparCarrinho = async (id:number) => {
    const response = await axiosAPI.delete('/carrinho/'+id)
    return response.data
}