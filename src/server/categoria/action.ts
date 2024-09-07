import { axiosAPI } from "../api"

export const getCategorias = async () => {
    const response = await axiosAPI.get('/categoria')
    return response.data
}