import { axiosAPI } from "../api";

export async function cadastrarPet(payload: any) {
    const response = await axiosAPI.patch("/usuario/pet/cadastro", payload);
    return response.data
}

export async function editarPet(payload: any, id: number) {
    const response = await axiosAPI.put("/usuario/pet/editar/"+id, payload);
    return response.data
}

export async function buscarPet(id: number) {
    const response = await axiosAPI.get(`/usuario/pet/${id}`);
    return response.data
}