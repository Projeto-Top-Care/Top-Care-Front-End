import { axiosAPI } from "../api";

export const adicionarProduto = async (id:number, payload: any) => {
    const response = await axiosAPI.patch('/carrinho/'+id+"/adicionar", payload)
    return response.data
} 

export const buscarCarrinho = async (id: number) => {
    const response = await axiosAPI.get('/carrinho/user/'+id)
    return response.data
}