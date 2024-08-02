import { axiosAPI } from "../api";

export async function cadastrarPet(payload: any) {
    const response = await axiosAPI.patch("/usuario/pet/cadastro", payload).then(resp=>resp);
    return response.data
}