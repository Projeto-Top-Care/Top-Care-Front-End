import { axiosAPI } from "../api"

export async function cadastrarCartao(id: number, payload: any){
    const response = await axiosAPI.post(`/cartoes/${id}`, payload)
    return response.data
}