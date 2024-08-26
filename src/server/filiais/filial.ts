import { axiosAPI } from "../api"

export const buscarFiliais = async () => {
    const response = await axiosAPI.get("/filiais")
    return response.data;
}

export const buscarFilial = async (id: number) => {
    const response = await axiosAPI.get(`/filiais/${id}`)
    return response.data;
}