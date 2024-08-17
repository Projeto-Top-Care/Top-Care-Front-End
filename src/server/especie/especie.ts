import { axiosAPI } from "../api";

export async function buscarEspecies() {
    const response = await axiosAPI.get("/especie")
    return response.data;
}