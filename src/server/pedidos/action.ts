import { axiosAPI } from "../api"

export async function criarPedido(id: number, payload: any){
    const response = await axiosAPI.post(`/pedidos?id=${id}`, payload)
    return response.data
}

export async function buscarPedido(id: number){
    const response = await axiosAPI.get(`/pedidos/${id}`)
    return response.data
}