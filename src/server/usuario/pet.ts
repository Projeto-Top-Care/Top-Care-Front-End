import { axiosAPI } from "../api";

export async function cadastrarPet(payload: any) {
    const response = await axiosAPI.post("/usuario/cadastrarPet", payload).then(resp=>resp);
    return response.data
}