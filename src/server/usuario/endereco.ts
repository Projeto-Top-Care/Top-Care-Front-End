import { axiosAPI } from "../api";

export async function cadastrarEnderecos(payload:any) {
    const response = await axiosAPI.patch("usuario/endereco/cadastro", payload).then(resp => resp);
    return response.data
}

export async function editarEnderecos(payload:any) {
    const response = await axiosAPI.put("usuario/endereco/editar", payload).then(resp => resp);
    return response.data
}

export async function deletarEndereco(id:number) {
    const response = await axiosAPI.delete(`usuario/endereco/deletar/${id}`).then(resp => resp);
    return response.data
}